import { z } from "zod";

export const paramTypeSchema = z.enum(["string", "integer", "number", "boolean", "array", "object"]);

const paramEntry = z.object({
  name: z.string().min(1, "Name required"),
  type: paramTypeSchema,
  description: z.string().max(500).optional().default(""),
  items: z.string().optional().default(""),
});
export type ParamEntry = z.infer<typeof paramEntry>;

export const requestDefinitionSchema = z.object({
  method: z.enum(["GET", "POST", "PUT", "PATCH", "DELETE"]),
  path: z.string().min(1),
  path_parameters: z.array(paramEntry).default([]),
  query_parameters: z.array(paramEntry).default([]),
  headers: z.array(paramEntry).default([]),
  body: z
    .object({
      content_type: z.string().default("application/json"),
      params: z.array(paramEntry).default([]),
      required: z.array(z.string()).default([]),
    })
    .optional(),
});

export const toolSchema = z.object({
  name: z.string().min(1).max(80),
  description: z.string().min(1).max(1000),
  request_definition: requestDefinitionSchema,
  user_auth_required: z.boolean().default(false),
});

export type ToolInput = z.infer<typeof toolSchema>;

export function paramsToRecord(entries: ParamEntry[]): Record<string, { type: string; description: string; items?: string }> {
  const rec: Record<string, { type: string; description: string; items?: string }> = {};
  for (const p of entries) {
    if (!p.name) continue;
    rec[p.name] = { type: p.type, description: p.description ?? "" };
    if (p.type === "array" && p.items) rec[p.name].items = p.items;
  }
  return rec;
}

export function recordToParams(rec?: Record<string, { type: string; description?: string; items?: string }>): ParamEntry[] {
  if (!rec) return [];
  return Object.entries(rec).map(([name, p]) => ({
    name,
    type: (p.type as z.infer<typeof paramTypeSchema>) ?? "string",
    description: p.description ?? "",
    items: p.items ?? "",
  }));
}
