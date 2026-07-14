/**
 * parseOpenApi — pure client-safe function that converts an OpenAPI 3.x spec
 * (already parsed from YAML/JSON) into ConnectorInput + ToolInput[].
 *
 * Does NOT import YAML — callers are responsible for parsing text first.
 */
import type { ConnectorInput } from "@/lib/schemas/connector";
import type { ToolInput } from "@/lib/schemas/tool";
import { resolveRefs } from "./ref-resolver";
import { oaParamToEntry, schemaPropertyToEntry } from "./param-map";
import { mapSecuritySchemes, defaultAuthCandidate, type AuthCandidate } from "./security-map";

// ---------------------------------------------------------------------------
// Public types
// ---------------------------------------------------------------------------

export type ParsedTool = ToolInput & {
  /** Original operation key for display, e.g. "GET /users/{id}". */
  operationLabel: string;
};

export type ParseResult = {
  /** Ready to pass straight into useCreateConnector (base_url may need adjustment). */
  connector: ConnectorInput;
  /** One entry per supported HTTP operation found in paths. */
  tools: ParsedTool[];
  /** Multiple server entries — caller should let user pick one. */
  servers: string[];
  /** Multiple security scheme candidates — caller should let user pick one. */
  authCandidates: AuthCandidate[];
  /** Non-fatal warnings accumulated during parsing. */
  warnings: string[];
};

export class ParseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ParseError";
  }
}

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

const SUPPORTED_METHODS = ["get", "post", "put", "patch", "delete"] as const;
type SupportedMethod = (typeof SUPPORTED_METHODS)[number];

function toKebab(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

function synthesizeName(method: string, path: string): string {
  const cleanPath = path.replace(/[{}]/g, "").replace(/\//g, "-");
  return toKebab(`${method}-${cleanPath}`);
}

// ---------------------------------------------------------------------------
// Main parse function
// ---------------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parseOpenApi(raw: unknown): ParseResult {
  if (raw === null || typeof raw !== "object" || Array.isArray(raw)) {
    throw new ParseError("Spec must be a JSON/YAML object at the top level.");
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const spec = raw as Record<string, any>;

  // Guard: must be OpenAPI 3.x
  if (typeof spec["openapi"] !== "string" && typeof spec["swagger"] !== "string") {
    throw new ParseError(
      'This does not look like an OpenAPI spec (expected "openapi" or "swagger" key at the top level).',
    );
  }

  const version: string = spec["openapi"] ?? spec["swagger"] ?? "";
  if (version.startsWith("2.")) {
    throw new ParseError(
      'Swagger 2.0 is not supported. Convert to OpenAPI 3.x first (Swagger Editor has a one-click convert).',
    );
  }

  const warnings: string[] = [];

  // Resolve internal $refs throughout the whole spec once.
  const resolved = resolveRefs(spec, spec, warnings) as Record<string, unknown>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const r = resolved as Record<string, any>;

  // ---------------------------------------------------------------------------
  // Connector name + description
  // ---------------------------------------------------------------------------
  const info = r["info"] ?? {};
  const connectorName: string = (
    typeof info.title === "string" ? info.title.trim().slice(0, 100) : ""
  ) || "Imported connector";

  const connectorDescription: string = (
    typeof info.description === "string"
      ? info.description
      : typeof info.summary === "string"
        ? info.summary
        : ""
  ).slice(0, 1000) || "Imported from OpenAPI spec.";

  // ---------------------------------------------------------------------------
  // Servers
  // ---------------------------------------------------------------------------
  const rawServers: { url?: string }[] = Array.isArray(r["servers"]) ? r["servers"] : [];
  const servers = rawServers
    .map((s) => (typeof s.url === "string" ? s.url.trim() : ""))
    .filter(Boolean);

  if (servers.length === 0) {
    warnings.push("No servers defined in the spec. Set the base URL manually before creating the connector.");
    servers.push("https://api.example.com");
  }

  // Check for server URL variables like {host}
  for (const url of servers) {
    if (/\{[^}]+\}/.test(url)) {
      warnings.push(
        `Server URL "${url}" contains template variables. Replace them with actual values before submitting.`,
      );
    }
  }

  const baseUrl = servers[0];

  // ---------------------------------------------------------------------------
  // Security schemes
  // ---------------------------------------------------------------------------
  const components = r["components"] ?? {};
  const securitySchemes = components.securitySchemes as Record<string, unknown> | undefined;
  const authCandidates =
    securitySchemes && Object.keys(securitySchemes).length > 0
      ? mapSecuritySchemes(securitySchemes as Record<string, Record<string, unknown>>)
      : [defaultAuthCandidate()];

  // Merge all candidate warnings into top-level warnings.
  for (const c of authCandidates) {
    warnings.push(...c.warnings);
  }

  // Pick first candidate as default for the connector shape.
  const defaultAuth = authCandidates[0];

  // ---------------------------------------------------------------------------
  // Build connector input
  // ---------------------------------------------------------------------------
  let connector: ConnectorInput;
  if (defaultAuth.input.auth_type === "MTLS") {
    connector = {
      name: connectorName,
      description: connectorDescription,
      base_url: baseUrl,
      auth_type: "MTLS",
      requires_certificate: true,
    };
  } else if (defaultAuth.input.auth_type === "OAUTH2_CLIENT_CREDENTIALS") {
    connector = {
      name: connectorName,
      description: connectorDescription,
      base_url: baseUrl,
      auth_type: "OAUTH2_CLIENT_CREDENTIALS",
      auth_config: defaultAuth.input.auth_config,
    };
  } else {
    connector = {
      name: connectorName,
      description: connectorDescription,
      base_url: baseUrl,
      auth_type: "API_KEY",
      auth_config: (defaultAuth.input as Extract<typeof defaultAuth.input, { auth_type: "API_KEY" }>).auth_config,
    };
  }

  // ---------------------------------------------------------------------------
  // Tools from paths
  // ---------------------------------------------------------------------------
  const paths = r["paths"] ?? {};
  const tools: ParsedTool[] = [];

  const SKIP_HEADERS = new Set(["authorization", "content-type", "accept"]);

  for (const [pathKey, pathItem] of Object.entries(paths as Record<string, unknown>)) {
    if (!pathItem || typeof pathItem !== "object") continue;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pathObj = pathItem as Record<string, any>;

    // Path-level parameters (shared across operations).
    const pathLevelParams: unknown[] = Array.isArray(pathObj["parameters"]) ? pathObj["parameters"] : [];

    for (const method of SUPPORTED_METHODS) {
      const operation = pathObj[method];
      if (!operation || typeof operation !== "object") continue;

      // Skip unsupported methods with warning.
      const httpMethod = method.toUpperCase() as "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

      // Name
      const rawId: string | undefined =
        typeof operation.operationId === "string" ? operation.operationId : undefined;
      const toolName = rawId ? toKebab(rawId) : synthesizeName(method, pathKey);

      // Description
      const toolDescription: string = (
        typeof operation.summary === "string"
          ? operation.summary
          : typeof operation.description === "string"
            ? operation.description
            : `${httpMethod} ${pathKey}`
      ).slice(0, 1000);

      // Merge path-level + operation-level parameters
      const opParams: unknown[] = Array.isArray(operation.parameters) ? operation.parameters : [];
      const allParams = [...pathLevelParams, ...opParams];

      const pathParameters = [];
      const queryParameters = [];
      const headers = [];

      for (const p of allParams) {
        if (!p || typeof p !== "object") continue;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const param = p as Record<string, any>;
        if (!param.name || typeof param.name !== "string") continue;

        type OAParam = { name: string; schema?: Record<string, unknown>; description?: string; required?: boolean };
        if (param.in === "path") {
          pathParameters.push(oaParamToEntry(param as OAParam, warnings));
        } else if (param.in === "query") {
          queryParameters.push(oaParamToEntry(param as OAParam, warnings));
        } else if (param.in === "header") {
          if (!SKIP_HEADERS.has(param.name.toLowerCase())) {
            headers.push(oaParamToEntry(param as OAParam, warnings));
          }
        }
        // cookie params are silently skipped (not supported by the studio)
      }

      // Body
      let body: ToolInput["request_definition"]["body"] = undefined;
      if (operation.requestBody && typeof operation.requestBody === "object") {
        const content = operation.requestBody.content ?? {};

        // Prefer application/json, fall back to first content type.
        const contentType: string =
          "application/json" in content
            ? "application/json"
            : Object.keys(content)[0] ?? "application/json";

        const mediaObj = content[contentType] ?? {};
        const schema = mediaObj.schema ?? {};
        const properties: Record<string, unknown> = schema.properties ?? {};
        const requiredArr: string[] = Array.isArray(schema.required) ? schema.required : [];

        const params = [];
        for (const [propName, propSchema] of Object.entries(properties)) {
          if (!propSchema || typeof propSchema !== "object") continue;
          params.push(schemaPropertyToEntry(propName, propSchema as Record<string, unknown>, warnings));
        }

        body = {
          content_type: contentType,
          params,
          required: requiredArr,
        };
      }

      tools.push({
        name: toolName,
        description: toolDescription,
        operationLabel: `${httpMethod} ${pathKey}`,
        request_definition: {
          method: httpMethod,
          path: pathKey,
          path_parameters: pathParameters,
          query_parameters: queryParameters,
          headers,
          body,
        },
        user_auth_required: false,
      });
    }
  }

  if (tools.length === 0) {
    warnings.push("No operations found in the spec.");
  }

  return {
    connector,
    tools,
    servers,
    authCandidates,
    warnings,
  };
}

/**
 * Apply a selected auth candidate back onto the connector (replacing the default).
 * Returns a new ConnectorInput — does not mutate.
 */
export function applyAuth(connector: ConnectorInput, candidate: AuthCandidate): ConnectorInput {
  const base = {
    name: connector.name,
    description: connector.description,
    base_url: connector.base_url,
    user_auth_injection_config: connector.user_auth_injection_config,
  };

  if (candidate.input.auth_type === "MTLS") {
    return { ...base, auth_type: "MTLS", requires_certificate: true };
  }
  if (candidate.input.auth_type === "OAUTH2_CLIENT_CREDENTIALS") {
    return { ...base, auth_type: "OAUTH2_CLIENT_CREDENTIALS", auth_config: candidate.input.auth_config };
  }
  return {
    ...base,
    auth_type: "API_KEY",
    auth_config: (candidate.input as Extract<typeof candidate.input, { auth_type: "API_KEY" }>).auth_config,
  };
}
