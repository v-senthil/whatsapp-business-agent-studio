import type { Skill, BusinessInfo, AgentSettings } from "@/types/meta";
import type { Faq, KnowledgeWebsite, AllowlistEntry, KnowledgeFile } from "@/types/knowledge";
import type { Connector } from "@/types/connector";
import type { Tool } from "@/types/tool";
import {
  demoBusinessInfo,
  demoSettings,
  demoSkills,
  demoWebsites,
  demoFaqs,
  demoAllowlist,
  demoFiles,
  demoConnectors,
  demoTools,
} from "./fixtures";

// Per-session, in-memory demo state. Keyed by session.userId ("demo-user" by
// default, but future variants could shard by cookie hash). Attached to
// globalThis so Next's hot reload does not wipe demo edits mid-session.
export interface DemoState {
  businessInfo: BusinessInfo;
  settings: AgentSettings[];
  skills: Map<string, Skill>;
  websites: Map<string, KnowledgeWebsite>;
  faqs: Map<string, Faq>;
  allowlist: Map<string, AllowlistEntry>;
  files: Map<string, KnowledgeFile>;
  connectors: Map<string, Connector>;
  tools: Map<string, Map<string, Tool>>;
  agentEvents: Map<string, { status: string; event_type: string; created_at: string; updated_at: string }>;
  evalJobs: Map<string, { job_id: string; status: "PENDING" | "RUNNING" | "SUCCEEDED"; startedAt: number; caseIds: string[] }>;
  conversations: Map<string, number>;
  seq: number;
}

interface DemoGlobal {
  __wabizDemoState?: Map<string, DemoState>;
}

function root(): Map<string, DemoState> {
  const g = globalThis as unknown as DemoGlobal;
  if (!g.__wabizDemoState) g.__wabizDemoState = new Map();
  return g.__wabizDemoState;
}

function seed(): DemoState {
  const skills = new Map<string, Skill>();
  for (const s of demoSkills) skills.set(s.id, { ...s });
  const websites = new Map<string, KnowledgeWebsite>();
  for (const w of demoWebsites) websites.set(w.id, { ...w });
  const faqs = new Map<string, Faq>();
  for (const f of demoFaqs) faqs.set(f.id, { ...f });
  const allowlist = new Map<string, AllowlistEntry>();
  for (const a of demoAllowlist) allowlist.set(a.id, { ...a });
  const files = new Map<string, KnowledgeFile>();
  for (const f of demoFiles) files.set(f.id, { ...f });
  const connectors = new Map<string, Connector>();
  for (const c of demoConnectors) connectors.set(c.id, { ...c });
  const tools = new Map<string, Map<string, Tool>>();
  for (const [cid, list] of Object.entries(demoTools)) {
    const inner = new Map<string, Tool>();
    for (const t of list) inner.set(t.id, { ...t });
    tools.set(cid, inner);
  }
  return {
    businessInfo: { ...demoBusinessInfo },
    settings: demoSettings.map((s) => ({ ...s })),
    skills,
    websites,
    faqs,
    allowlist,
    files,
    connectors,
    tools,
    agentEvents: new Map(),
    evalJobs: new Map(),
    conversations: new Map(),
    seq: 1000,
  };
}

export function getDemoState(key: string): DemoState {
  const map = root();
  let s = map.get(key);
  if (!s) {
    s = seed();
    map.set(key, s);
  }
  return s;
}

export function resetDemoState(key: string) {
  root().delete(key);
}

export function nextDemoId(state: DemoState, prefix: string): string {
  state.seq += 1;
  return `${prefix}-${state.seq}`;
}
