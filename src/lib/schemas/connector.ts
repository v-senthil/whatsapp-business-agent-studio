import { z } from "zod";

const kvpSchema = z.object({
  field_name: z.string().min(1),
  value: z.string().min(1),
  prefix: z.string().default(""),
});

export const apiKeyAuthSchema = z.object({
  headers: z.array(kvpSchema).default([]),
  query_params: z.array(kvpSchema).default([]),
  body_params: z.array(kvpSchema).default([]),
});

export const oauth2AuthSchema = z.object({
  token_url: z.string().url(),
  scopes_to_request: z.array(z.string()).default([]),
  client_id: z.string().min(1),
  client_secret: z.string().min(1),
  token_request_content_type: z
    .enum(["application/x-www-form-urlencoded", "application/json"])
    .default("application/x-www-form-urlencoded"),
});

export const mtlsFieldsSchema = z.object({
  client_certificate: z.string().min(1),
  ca_certificate: z.string().default(""),
});

export const userAuthInjectionSchema = z.object({
  location: z.enum(["headers", "query"]),
  field_name: z.string().min(1),
  prefix: z.string().default(""),
});

const baseConnector = z.object({
  name: z.string().min(1).max(100),
  description: z.string().min(1).max(1000),
  base_url: z.string().url(),
  user_auth_injection_config: userAuthInjectionSchema.optional(),
});

export const connectorSchema = z.discriminatedUnion("auth_type", [
  baseConnector.extend({
    auth_type: z.literal("API_KEY"),
    auth_config: z.object({ api_key: apiKeyAuthSchema }),
  }),
  baseConnector.extend({
    auth_type: z.literal("OAUTH2_CLIENT_CREDENTIALS"),
    auth_config: z.object({ oauth2_client_credentials: oauth2AuthSchema }),
  }),
  baseConnector.extend({
    auth_type: z.literal("MTLS"),
    requires_certificate: z.literal(true).default(true),
  }),
]);

export type ConnectorInput = z.infer<typeof connectorSchema>;

export const upsertApiKeySchema = z.object({ api_key_config: apiKeyAuthSchema });
export const upsertOAuthSchema = z.object({ oauth2_client_credentials: oauth2AuthSchema });
export const upsertCertificateSchema = mtlsFieldsSchema;
