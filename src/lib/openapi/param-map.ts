/**
 * Maps an OpenAPI schema object to the studio's ParamType enum.
 */
import type { ParamEntry } from "@/lib/schemas/tool";

type OApiSchema = {
  type?: string;
  enum?: unknown[];
  items?: OApiSchema;
  // Allow any extra properties from the spec.
  [key: string]: unknown;
};

const VALID_PARAM_TYPES = ["string", "integer", "number", "boolean", "array", "object"] as const;
type ParamType = (typeof VALID_PARAM_TYPES)[number];

function toParamType(schema: OApiSchema | undefined, warnings: string[], context: string): ParamType {
  if (!schema) return "string";

  // If there's an enum, use the underlying type (or fall back to string).
  const rawType = schema.type ?? (schema.enum ? "string" : undefined);

  if (!rawType) {
    warnings.push(`Parameter "${context}" has no type, defaulting to string.`);
    return "string";
  }

  if ((VALID_PARAM_TYPES as readonly string[]).includes(rawType)) {
    return rawType as ParamType;
  }

  warnings.push(`Unknown parameter type "${rawType}" for "${context}", defaulting to string.`);
  return "string";
}

/**
 * Convert an OpenAPI parameter object (header / query / path) to a ParamEntry.
 */
export function oaParamToEntry(
  param: {
    name: string;
    schema?: OApiSchema;
    description?: string;
    required?: boolean;
  },
  warnings: string[],
): ParamEntry {
  const schema = param.schema;
  const type = toParamType(schema, warnings, param.name);
  let items = "";
  if (type === "array" && schema?.items) {
    items = toParamType(schema.items as OApiSchema, warnings, `${param.name}[items]`);
  }
  return {
    name: param.name,
    type,
    description: (param.description ?? "").slice(0, 500),
    items,
  };
}

/**
 * Convert a top-level property of a JSON schema object to a ParamEntry.
 * Deeply nested objects are kept as type: "object" with a warning.
 */
export function schemaPropertyToEntry(
  name: string,
  schema: OApiSchema,
  warnings: string[],
): ParamEntry {
  const type = toParamType(schema, warnings, name);

  // Warn when we collapse a nested object.
  if (type === "object" && schema.properties) {
    warnings.push(
      `Body parameter "${name}" has nested properties — kept as type: object. Refine in the tool editor after import.`,
    );
  }

  let items = "";
  if (type === "array" && schema.items) {
    items = toParamType(schema.items as OApiSchema, warnings, `${name}[items]`);
  }

  return {
    name,
    type,
    description: ((schema.description as string | undefined) ?? "").slice(0, 500),
    items,
  };
}
