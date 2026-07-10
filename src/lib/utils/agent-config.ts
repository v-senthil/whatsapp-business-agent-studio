import { fetcher, metaUrl } from "@/lib/client/fetcher";
import type { BusinessInfo, Skill } from "@/types/meta";
import type { Connector } from "@/types/connector";
import type { Tool } from "@/types/tool";
import type { AllowlistEntry, Faq, KnowledgeFile, KnowledgeWebsite } from "@/types/knowledge";

export const CONFIG_BUNDLE_VERSION = 1;

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
}

function toArray<T>(r: T[] | { data: T[] } | undefined): T[] {
  if (!r) return [];
  if (Array.isArray(r)) return r;
  return r.data ?? [];
}

async function fetchOrNull<T>(url: string): Promise<T | undefined> {
  try {
    return await fetcher<T>(url);
  } catch {
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

export function isValidBundle(x: unknown): x is AgentConfigBundle {
  return (
    !!x &&
    typeof x === "object" &&
    "version" in x &&
    "exported_at" in x &&
    "skills" in x &&
    "connectors" in x
  );
}
