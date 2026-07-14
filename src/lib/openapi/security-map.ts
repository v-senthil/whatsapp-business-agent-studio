/**
 * Maps OpenAPI 3.x securitySchemes to the studio's ConnectorInput auth branch.
 */
import type { ConnectorInput } from "@/lib/schemas/connector";

type AuthCandidate = {
  /** Label shown in the scheme picker, e.g. "BearerAuth (http/bearer)". */
  label: string;
  /** The key from components.securitySchemes. */
  schemeKey: string;
  input: ConnectorInput["auth_type"] extends infer T
    ? T extends "API_KEY"
      ? Pick<Extract<ConnectorInput, { auth_type: "API_KEY" }>, "auth_type" | "auth_config">
      : T extends "OAUTH2_CLIENT_CREDENTIALS"
        ? Pick<Extract<ConnectorInput, { auth_type: "OAUTH2_CLIENT_CREDENTIALS" }>, "auth_type" | "auth_config">
        : T extends "MTLS"
          ? Pick<Extract<ConnectorInput, { auth_type: "MTLS" }>, "auth_type">
          : never
    : never;
  warnings: string[];
};

/**
 * Placeholder used when a spec declares OAuth 2 client-credentials without a
 * tokenUrl. The import dialog reads this constant to know when to prompt the
 * user for a real URL instead of accepting the sentinel.
 */
export const OAUTH_TOKEN_URL_PLACEHOLDER = "https://example.com/oauth/token";

type OApiSecurityScheme = {
  type?: string;
  scheme?: string;
  in?: string;
  name?: string;
  flows?: {
    clientCredentials?: {
      tokenUrl?: string;
      scopes?: Record<string, string>;
    };
    [key: string]: unknown;
  };
  [key: string]: unknown;
};

function emptyApiKey(
  headers: { field_name: string; value: string; prefix: string }[],
  queryParams: { field_name: string; value: string; prefix: string }[] = [],
): Extract<ConnectorInput, { auth_type: "API_KEY" }>["auth_config"] {
  return {
    api_key: {
      headers,
      query_params: queryParams,
      body_params: [],
    },
  };
}

/**
 * Given a single securityScheme entry, return an AuthCandidate (or null for unsupported/unrecognised).
 */
function mapScheme(schemeKey: string, scheme: OApiSecurityScheme): AuthCandidate | null {
  const warnings: string[] = [];

  // apiKey in header
  if (scheme.type === "apiKey" && scheme.in === "header" && scheme.name) {
    return {
      label: `${schemeKey} (API key in header: ${scheme.name})`,
      schemeKey,
      input: {
        auth_type: "API_KEY",
        auth_config: emptyApiKey([{ field_name: scheme.name, value: "", prefix: "" }]),
      },
      warnings,
    };
  }

  // apiKey in query
  if (scheme.type === "apiKey" && scheme.in === "query" && scheme.name) {
    return {
      label: `${schemeKey} (API key in query: ${scheme.name})`,
      schemeKey,
      input: {
        auth_type: "API_KEY",
        auth_config: emptyApiKey([], [{ field_name: scheme.name, value: "", prefix: "" }]),
      },
      warnings,
    };
  }

  // http bearer
  if (scheme.type === "http" && scheme.scheme?.toLowerCase() === "bearer") {
    return {
      label: `${schemeKey} (Bearer token)`,
      schemeKey,
      input: {
        auth_type: "API_KEY",
        auth_config: emptyApiKey([{ field_name: "Authorization", value: "", prefix: "Bearer " }]),
      },
      warnings,
    };
  }

  // http basic
  if (scheme.type === "http" && scheme.scheme?.toLowerCase() === "basic") {
    return {
      label: `${schemeKey} (HTTP Basic — base64 encode user:pass yourself)`,
      schemeKey,
      input: {
        auth_type: "API_KEY",
        auth_config: emptyApiKey([{ field_name: "Authorization", value: "", prefix: "Basic " }]),
      },
      warnings: ["HTTP Basic: set the Authorization header value to your base64-encoded user:pass string."],
    };
  }

  // oauth2 clientCredentials
  if (scheme.type === "oauth2" && scheme.flows?.clientCredentials) {
    const flow = scheme.flows.clientCredentials;
    const tokenUrl = flow.tokenUrl ?? "";
    const scopes = Object.keys(flow.scopes ?? {});
    if (!tokenUrl) {
      warnings.push(`${schemeKey}: OAuth2 clientCredentials flow has no tokenUrl.`);
    }
    return {
      label: `${schemeKey} (OAuth 2 client credentials)`,
      schemeKey,
      input: {
        auth_type: "OAUTH2_CLIENT_CREDENTIALS",
        auth_config: {
          oauth2_client_credentials: {
            token_url: tokenUrl || OAUTH_TOKEN_URL_PLACEHOLDER,
            scopes_to_request: scopes,
            client_id: "",
            client_secret: "",
            token_request_content_type: "application/x-www-form-urlencoded",
          },
        },
      },
      warnings,
    };
  }

  // oauth2 other flows — fall back to skeleton API_KEY with warning
  if (scheme.type === "oauth2") {
    return {
      label: `${schemeKey} (OAuth 2 — unsupported flow, manual auth required)`,
      schemeKey,
      input: {
        auth_type: "API_KEY",
        auth_config: emptyApiKey([{ field_name: "Authorization", value: "", prefix: "Bearer " }]),
      },
      warnings: [
        `${schemeKey}: OAuth2 flow is not clientCredentials. The studio only supports client-credentials OAuth. Set the Authorization header manually after import.`,
      ],
    };
  }

  // mutualTLS
  if (scheme.type === "mutualTLS") {
    return {
      label: `${schemeKey} (mTLS — upload certificate after import)`,
      schemeKey,
      input: {
        auth_type: "MTLS",
      },
      warnings: [`${schemeKey}: mTLS detected. Upload your client certificate and CA certificate via "Rotate credentials" after the connector is created.`],
    };
  }

  // Unknown
  warnings.push(`Security scheme "${schemeKey}" has type "${scheme.type}" which is not recognised. Defaulting to API_KEY skeleton.`);
  return {
    label: `${schemeKey} (unknown scheme type: ${scheme.type ?? "none"})`,
    schemeKey,
    input: {
      auth_type: "API_KEY",
      auth_config: emptyApiKey([{ field_name: "Authorization", value: "", prefix: "" }]),
    },
    warnings,
  };
}

export type { AuthCandidate };

/**
 * Build a list of auth candidates from the spec's securitySchemes map.
 * Returns an empty array when no schemes are defined; callers should default to
 * a single API_KEY skeleton candidate in that case.
 */
export function mapSecuritySchemes(
  securitySchemes: Record<string, OApiSecurityScheme> | undefined,
): AuthCandidate[] {
  if (!securitySchemes) return [];
  const results: AuthCandidate[] = [];
  for (const [key, scheme] of Object.entries(securitySchemes)) {
    const candidate = mapScheme(key, scheme);
    if (candidate) results.push(candidate);
  }
  return results;
}

/** Fallback when no security schemes exist in the spec. */
export function defaultAuthCandidate(): AuthCandidate {
  return {
    label: "API Key (no scheme defined in spec)",
    schemeKey: "__default__",
    input: {
      auth_type: "API_KEY",
      auth_config: {
        api_key: {
          headers: [{ field_name: "Authorization", value: "", prefix: "" }],
          query_params: [],
          body_params: [],
        },
      },
    },
    warnings: ["No security schemes found in the spec. Defaulted to API Key with an empty Authorization header."],
  };
}
