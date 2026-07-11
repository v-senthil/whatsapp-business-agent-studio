import { z } from "zod";
import { fetcher, metaUrl } from "@/lib/client/fetcher";
import type { BusinessInfo, Skill } from "@/types/meta";
import type { Connector } from "@/types/connector";
import type { Tool } from "@/types/tool";
import type { AllowlistEntry, Faq, KnowledgeFile, KnowledgeWebsite } from "@/types/knowledge";

export const CONFIG_BUNDLE_VERSION = 1;

// -----------------------------------------------------------------------------
// Bundle shape and zod schema.
//
// The runtime schema is intentionally looser than the "create" schemas in
// src/lib/schemas: stripped exports carry empty strings for credential fields,
// and the exported connector may reference an OAuth2 config without a live
// client_id/client_secret when includeCredentials was off. We validate shape
// and required fields, not business rules that only apply at the write layer.

const bundleSkillSchema = z.object({
  title: z.string().min(1).max(80),
  description: z.string().min(1).max(500),
  skill: z.string().min(1).max(10_000),
});

const bundleWebsiteSchema = z.object({
  url: z.string().url(),
});

const bundleFaqSchema = z.object({
  question: z.string().min(1).max(500),
  answer: z.string().min(1).max(5000),
  metadata: z.record(z.string(), z.string()).optional(),
});

const bundleAllowlistSchema = z.object({
  consumer_phone_number: z.string().regex(/^\+[1-9]\d{7,14}$/),
});

const bundleFilesManifestSchema = z.object({
  file_name: z.string().min(1),
});

// Credential fields may be empty strings on stripped exports. Value min(0).
const bundleKvpSchema = z.object({
  field_name: z.string().min(1),
  value: z.string(),
  prefix: z.string().optional(),
});

const bundleApiKeyAuthSchema = z.object({
  headers: z.array(bundleKvpSchema).default([]),
  query_params: z.array(bundleKvpSchema).default([]),
  body_params: z.array(bundleKvpSchema).default([]),
});

const bundleOAuth2Schema = z.object({
  token_url: z.string().url(),
  scopes_to_request: z.array(z.string()).default([]),
  client_id: z.string(),
  client_secret: z.string(),
  token_request_content_type: z
    .enum(["application/x-www-form-urlencoded", "application/json"])
    .default("application/x-www-form-urlencoded"),
});

const bundleUserAuthInjectionSchema = z.object({
  location: z.enum(["headers", "query"]),
  field_name: z.string().min(1),
  prefix: z.string().optional(),
});

const bundleConnectorInputSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().min(1).max(1000),
  base_url: z.string().url(),
  auth_type: z.enum(["API_KEY", "OAUTH2_CLIENT_CREDENTIALS", "MTLS"]),
  auth_config: z
    .object({
      api_key: bundleApiKeyAuthSchema.optional(),
      oauth2_client_credentials: bundleOAuth2Schema.optional(),
    })
    .optional(),
  user_auth_injection_config: bundleUserAuthInjectionSchema.optional(),
  requires_certificate: z.boolean().optional(),
});

const bundleParamEntrySchema = z.object({
  name: z.string().min(1),
  type: z.enum(["string", "integer", "number", "boolean", "array", "object"]),
  description: z.string().optional(),
  items: z.string().optional(),
});

const bundleToolInputSchema = z.object({
  name: z.string().min(1).max(80),
  description: z.string().min(1).max(1000),
  request_definition: z.object({
    method: z.enum(["GET", "POST", "PUT", "PATCH", "DELETE"]),
    path: z.string().min(1),
    path_parameters: z.array(bundleParamEntrySchema).default([]),
    query_parameters: z.array(bundleParamEntrySchema).default([]),
    headers: z.array(bundleParamEntrySchema).default([]),
    body: z
      .object({
        content_type: z.string().default("application/json"),
        params: z.array(bundleParamEntrySchema).default([]),
        required: z.array(z.string()).default([]),
      })
      .optional(),
  }),
  user_auth_required: z.boolean().default(false),
});

const bundleBusinessInfoSchema = z.object({
  business_description: z.string().optional(),
  contact_info: z
    .object({
      email: z.string().optional(),
      address: z.string().optional(),
      hours_of_operation: z.string().optional(),
    })
    .optional(),
  payment_method: z.string().optional(),
  return_policy: z.string().optional(),
  purchase_info: z.string().optional(),
  delivery_and_shipping: z.string().optional(),
}).passthrough();

export const agentConfigBundleSchema = z.object({
  version: z.number(),
  exported_at: z.string(),
  source_entity_id: z.string(),
  settings: z.unknown().optional(),
  business_info: bundleBusinessInfoSchema.optional(),
  skills: z.array(bundleSkillSchema).default([]),
  websites: z.array(bundleWebsiteSchema).default([]),
  faqs: z.array(bundleFaqSchema).default([]),
  allowlist: z.array(bundleAllowlistSchema).default([]),
  files_manifest: z.array(bundleFilesManifestSchema).default([]),
  connectors: z
    .array(
      z.object({
        connector: bundleConnectorInputSchema,
        tools: z.array(bundleToolInputSchema).default([]),
      }),
    )
    .default([]),
  credentials_included: z.boolean(),
  partial: z.boolean().optional(),
});

export interface AgentConfigBundle {
  version: number;
  exported_at: string;
  source_entity_id: string;
  settings?: unknown;
  business_info?: BusinessInfo;
  skills: Array<Pick<Skill, "title" | "description" | "skill">>;
  websites: Array<{ url: string }>;
  faqs: Array<Pick<Faq, "question" | "answer" | "metadata">>;
  allowlist: Array<Pick<AllowlistEntry, "consumer_phone_number">>;
  files_manifest: Array<{ file_name: string }>;
  connectors: Array<{
    connector: Omit<Connector, "id" | "connection_status" | "mtls_config">;
    tools: Array<Omit<Tool, "id">>;
  }>;
  credentials_included: boolean;
  // True when one or more sub-fetches during export returned no data; consumers
  // can warn the operator that the exported config is incomplete.
  partial?: boolean;
}

// -----------------------------------------------------------------------------
// Encryption envelope for optional passphrase-protected exports. AES-GCM via
// WebCrypto with a PBKDF2-SHA256 derived key (200k iterations). Salt and IV
// are prepended to the ciphertext inside the envelope. The envelope is JSON
// so users still see they downloaded a config, they just cannot read it
// without the passphrase.

export interface EncryptedBundleEnvelope {
  kind: "wabiz-agent-config-encrypted";
  version: 1;
  cipher: "AES-GCM";
  kdf: "PBKDF2-SHA256";
  iterations: number;
  salt: string;      // base64
  iv: string;        // base64
  ciphertext: string;// base64 (includes GCM tag)
}

const PBKDF2_ITERATIONS = 200_000;

function toBase64(bytes: Uint8Array): string {
  if (typeof Buffer !== "undefined") return Buffer.from(bytes).toString("base64");
  let bin = "";
  bytes.forEach((b) => { bin += String.fromCharCode(b); });
  return btoa(bin);
}

function fromBase64(s: string): Uint8Array {
  if (typeof Buffer !== "undefined") return new Uint8Array(Buffer.from(s, "base64"));
  const bin = atob(s);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

// Copy a Uint8Array into a fresh ArrayBuffer. Newer TypeScript lib.dom types
// distinguish ArrayBuffer from ArrayBufferLike (which includes SharedArrayBuffer),
// and WebCrypto only accepts the former.
function toArrayBuffer(view: Uint8Array): ArrayBuffer {
  const out = new ArrayBuffer(view.byteLength);
  new Uint8Array(out).set(view);
  return out;
}

async function deriveKey(passphrase: string, salt: Uint8Array): Promise<CryptoKey> {
  const enc = new TextEncoder();
  const baseKey = await crypto.subtle.importKey(
    "raw",
    toArrayBuffer(enc.encode(passphrase)),
    "PBKDF2",
    false,
    ["deriveKey"],
  );
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt: toArrayBuffer(salt), iterations: PBKDF2_ITERATIONS, hash: "SHA-256" },
    baseKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"],
  );
}

export async function encryptBundle(bundle: AgentConfigBundle, passphrase: string): Promise<EncryptedBundleEnvelope> {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(passphrase, salt);
  const plaintext = new TextEncoder().encode(JSON.stringify(bundle));
  const ciphertext = new Uint8Array(
    await crypto.subtle.encrypt({ name: "AES-GCM", iv: toArrayBuffer(iv) }, key, toArrayBuffer(plaintext)),
  );
  return {
    kind: "wabiz-agent-config-encrypted",
    version: 1,
    cipher: "AES-GCM",
    kdf: "PBKDF2-SHA256",
    iterations: PBKDF2_ITERATIONS,
    salt: toBase64(salt),
    iv: toBase64(iv),
    ciphertext: toBase64(ciphertext),
  };
}

export async function decryptBundle(env: EncryptedBundleEnvelope, passphrase: string): Promise<AgentConfigBundle> {
  const salt = fromBase64(env.salt);
  const iv = fromBase64(env.iv);
  const key = await deriveKey(passphrase, salt);
  const ct = fromBase64(env.ciphertext);
  let plain: ArrayBuffer;
  try {
    plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: toArrayBuffer(iv) }, key, toArrayBuffer(ct));
  } catch {
    throw new Error("Wrong passphrase or the file is corrupted.");
  }
  const text = new TextDecoder().decode(plain);
  const parsed = JSON.parse(text);
  return parseBundle(parsed);
}

export function isEncryptedEnvelope(x: unknown): x is EncryptedBundleEnvelope {
  return (
    !!x &&
    typeof x === "object" &&
    (x as { kind?: string }).kind === "wabiz-agent-config-encrypted"
  );
}

// -----------------------------------------------------------------------------
// Export + validation.

function toArray<T>(r: T[] | { data: T[] } | undefined): T[] {
  if (!r) return [];
  if (Array.isArray(r)) return r;
  return r.data ?? [];
}

async function fetchOrNull<T>(url: string): Promise<T | undefined> {
  try {
    return await fetcher<T>(url);
  } catch (e) {
    // Surface the miss so operators know a sub-fetch was skipped. Rest of the
    // export continues so partial bundles are still useful.
    console.warn(`agent-config export: sub-fetch failed for ${url}`, e);
    return undefined;
  }
}

export async function exportAgentConfig(entityId: string, includeCredentials: boolean): Promise<AgentConfigBundle> {
  const [settings, businessInfo, skills, websites, faqs, allowlist, files, connectors] = await Promise.all([
    fetchOrNull<unknown>(metaUrl(entityId, "agent_config/settings")),
    fetchOrNull<BusinessInfo>(metaUrl(entityId, "agent_config/business_info")),
    fetchOrNull<Skill[] | { data: Skill[] }>(metaUrl(entityId, "agent_config/skills")),
    fetchOrNull<KnowledgeWebsite[] | { data: KnowledgeWebsite[] }>(metaUrl(entityId, "agent_config/websites")),
    fetchOrNull<Faq[] | { data: Faq[] }>(metaUrl(entityId, "agent_config/faq")),
    fetchOrNull<AllowlistEntry[] | { data: AllowlistEntry[] }>(metaUrl(entityId, "agent_config/allowlist")),
    fetchOrNull<KnowledgeFile[] | { data: KnowledgeFile[] }>(metaUrl(entityId, "agent_config/files")),
    fetchOrNull<Connector[] | { data: Connector[] }>(metaUrl(entityId, "agent_connectors")),
  ]);

  const connectorList = toArray(connectors);
  const bundledConnectors: AgentConfigBundle["connectors"] = await Promise.all(
    connectorList.map(async (c) => {
      const tools = toArray(await fetchOrNull<Tool[] | { data: Tool[] }>(metaUrl(entityId, `agent_connectors/${c.id}/tools`)));
      const stripped = includeCredentials ? c : stripCredentials(c);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id: _id, connection_status: _cs, mtls_config: _mt, ...connectorInput } = stripped;
      return {
        connector: connectorInput,
        tools: tools.map((t) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { id: _tid, ...toolInput } = t;
          return toolInput;
        }),
      };
    }),
  );

  const partial =
    settings === undefined ||
    businessInfo === undefined ||
    skills === undefined ||
    websites === undefined ||
    faqs === undefined ||
    allowlist === undefined ||
    files === undefined ||
    connectors === undefined;

  return {
    version: CONFIG_BUNDLE_VERSION,
    exported_at: new Date().toISOString(),
    source_entity_id: entityId,
    settings,
    business_info: businessInfo,
    skills: toArray(skills).map((s) => ({ title: s.title, description: s.description, skill: s.skill })),
    websites: toArray(websites).map((w) => ({ url: w.url })),
    faqs: toArray(faqs).map((f) => ({ question: f.question, answer: f.answer, metadata: f.metadata })),
    allowlist: toArray(allowlist).map((a) => ({ consumer_phone_number: a.consumer_phone_number })),
    files_manifest: toArray(files).map((f) => ({ file_name: f.file_name })),
    connectors: bundledConnectors,
    credentials_included: includeCredentials,
    partial: partial || undefined,
  };
}

function stripCredentials(c: Connector): Connector {
  const out: Connector = { ...c };
  if (out.auth_config?.api_key) {
    out.auth_config = {
      ...out.auth_config,
      api_key: {
        headers: (out.auth_config.api_key.headers ?? []).map((h) => ({ ...h, value: "" })),
        query_params: (out.auth_config.api_key.query_params ?? []).map((q) => ({ ...q, value: "" })),
        body_params: (out.auth_config.api_key.body_params ?? []).map((b) => ({ ...b, value: "" })),
      },
    };
  }
  if (out.auth_config?.oauth2_client_credentials) {
    out.auth_config = {
      ...out.auth_config,
      oauth2_client_credentials: {
        ...out.auth_config.oauth2_client_credentials,
        client_id: "",
        client_secret: "",
      },
    };
  }
  return out;
}

export interface ImportPlan {
  skills: number;
  websites: number;
  faqs: number;
  allowlist: number;
  connectors: number;
  tools: number;
  hasSettings: boolean;
  hasBusinessInfo: boolean;
  filesSkipped: number;
  credentialsIncluded: boolean;
}

export function planImport(bundle: AgentConfigBundle): ImportPlan {
  return {
    skills: bundle.skills?.length ?? 0,
    websites: bundle.websites?.length ?? 0,
    faqs: bundle.faqs?.length ?? 0,
    allowlist: bundle.allowlist?.length ?? 0,
    connectors: bundle.connectors?.length ?? 0,
    tools: (bundle.connectors ?? []).reduce((n, c) => n + (c.tools?.length ?? 0), 0),
    hasSettings: !!bundle.settings,
    hasBusinessInfo: !!bundle.business_info,
    filesSkipped: bundle.files_manifest?.length ?? 0,
    credentialsIncluded: !!bundle.credentials_included,
  };
}

export type ImportProgress = { done: number; failed: number; total: number; step: string };

export async function runImport(
  entityId: string,
  bundle: AgentConfigBundle,
  onProgress: (p: ImportProgress) => void,
): Promise<{ done: number; failed: number }> {
  const total =
    (bundle.business_info ? 1 : 0) +
    (bundle.skills?.length ?? 0) +
    (bundle.websites?.length ?? 0) +
    (bundle.faqs?.length ?? 0) +
    (bundle.allowlist?.length ?? 0) +
    (bundle.connectors?.length ?? 0) +
    (bundle.connectors ?? []).reduce((n, c) => n + (c.tools?.length ?? 0), 0);
  let done = 0;
  let failed = 0;
  const bump = (step: string) => onProgress({ done, failed, total, step });

  async function run(label: string, fn: () => Promise<unknown>) {
    bump(label);
    try {
      await fn();
      done++;
    } catch {
      failed++;
    }
    bump(label);
  }

  if (bundle.business_info) {
    await run("Business info", () =>
      fetcher(metaUrl(entityId, "agent_config/business_info"), { method: "PUT", json: bundle.business_info }),
    );
  }
  for (const s of bundle.skills ?? []) {
    await run(`Skill: ${s.title}`, () =>
      fetcher(metaUrl(entityId, "agent_config/skills"), { method: "POST", json: s }),
    );
  }
  for (const w of bundle.websites ?? []) {
    await run(`Website: ${w.url}`, () =>
      fetcher(metaUrl(entityId, "agent_config/websites"), { method: "POST", json: w }),
    );
  }
  for (const f of bundle.faqs ?? []) {
    await run(`FAQ: ${f.question.slice(0, 40)}`, () =>
      fetcher(metaUrl(entityId, "agent_config/faq"), { method: "POST", json: f }),
    );
  }
  for (const a of bundle.allowlist ?? []) {
    await run(`Allowlist: ${a.consumer_phone_number}`, () =>
      fetcher(metaUrl(entityId, "agent_config/allowlist"), { method: "POST", json: a }),
    );
  }
  for (const c of bundle.connectors ?? []) {
    let connectorId: string | undefined;
    await run(`Connector: ${c.connector.name}`, async () => {
      const created = await fetcher<{ id: string }>(metaUrl(entityId, "agent_connectors"), {
        method: "POST",
        json: c.connector,
      });
      connectorId = created?.id;
    });
    if (!connectorId) continue;
    for (const t of c.tools ?? []) {
      await run(`Tool: ${t.name}`, () =>
        fetcher(metaUrl(entityId, `agent_connectors/${connectorId}/tools`), { method: "POST", json: t }),
      );
    }
  }

  return { done, failed };
}

// Parses and validates a bundle from raw parsed JSON. Throws a descriptive
// Error on the first invalid field so the UI can show which record broke.
export function parseBundle(raw: unknown): AgentConfigBundle {
  const result = agentConfigBundleSchema.safeParse(raw);
  if (!result.success) {
    const issue = result.error.issues[0];
    const path = issue?.path.join(".") || "root";
    throw new Error(`${path}: ${issue?.message || "invalid"}`);
  }
  // The zod-inferred shape is looser than AgentConfigBundle by design (bundle
  // schema permits stripped credentials). Cast is safe: consumers only read
  // the same fields the schema validated.
  return result.data as unknown as AgentConfigBundle;
}
