// Per-entity persistent activity log written from the client fetcher on any
// successful non-GET call to /api/meta/{entityId}/*. Stored in localStorage
// (max 100 entries per entity) so it survives page reloads within a browser.

export interface ActivityEntry {
  id: string;
  ts: number;
  method: string;
  path: string;      // relative to /api/meta/{entityId}/
  resource: string;  // human label, e.g. "Skill"
  action: string;    // "Created" / "Updated" / "Deleted" / "Reset"
  detail?: string;   // extra bit like "shipping-status" or "3 rows"
}

const MAX_PER_ENTITY = 100;
const KEY = (entityId: string) => `wabiz.activity.${entityId}`;

// Match "/api/meta/{entityId}/rest..." — capture entityId and rest.
const META_URL = /^\/api\/meta\/([^/]+)\/(.+?)(?:\?|$)/;

export function record(url: string, method: string, requestBody: unknown): void {
  if (typeof window === "undefined") return;
  const m = META_URL.exec(url);
  if (!m) return;
  const entityId = m[1];
  const path = m[2];

  const meta = describe(method, path, requestBody);
  if (!meta) return;

  const entry: ActivityEntry = {
    id: crypto.randomUUID(),
    ts: Date.now(),
    method,
    path,
    resource: meta.resource,
    action: meta.action,
    detail: meta.detail,
  };

  const existing = list(entityId);
  const next = [entry, ...existing].slice(0, MAX_PER_ENTITY);
  try {
    window.localStorage.setItem(KEY(entityId), JSON.stringify(next));
  } catch {
    /* quota / disabled — ignore */
  }
  notify(entityId);
}

export function list(entityId: string): ActivityEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY(entityId));
    return raw ? (JSON.parse(raw) as ActivityEntry[]) : [];
  } catch {
    return [];
  }
}

export function clear(entityId: string): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY(entityId));
  notify(entityId);
}

const listeners = new Map<string, Set<() => void>>();
export function subscribe(entityId: string, cb: () => void): () => void {
  let set = listeners.get(entityId);
  if (!set) { set = new Set(); listeners.set(entityId, set); }
  set.add(cb);
  return () => {
    const s = listeners.get(entityId);
    if (!s) return;
    s.delete(cb);
    if (s.size === 0) listeners.delete(entityId);
  };
}
function notify(entityId: string) {
  listeners.get(entityId)?.forEach((cb) => { try { cb(); } catch { /* ignore */ } });
}

interface CallMeta { resource: string; action: string; detail?: string }

function actionForMethod(method: string): string {
  switch (method) {
    case "POST": return "Created";
    case "PUT": return "Updated";
    case "PATCH": return "Updated";
    case "DELETE": return "Deleted";
    default: return method;
  }
}

// Extract a friendly identifier from the request body (best-effort).
function detailFromBody(body: unknown): string | undefined {
  if (!body || typeof body !== "object") return undefined;
  const b = body as Record<string, unknown>;
  const first = ["title", "name", "url", "question", "consumer_phone_number"]
    .map((k) => b[k])
    .find((v) => typeof v === "string" && v.length > 0);
  if (typeof first === "string") return first.length > 60 ? first.slice(0, 60) + "…" : first;
  return undefined;
}

function describe(method: string, path: string, body: unknown): CallMeta | null {
  const action = actionForMethod(method);
  const detail = detailFromBody(body);

  // Skip GETs — activity is about state changes.
  if (method === "GET" || method === "HEAD") return null;

  // Order matters — most specific first.
  if (path.startsWith("agent_config/settings"))       return { resource: "Settings", action: "Updated" };
  if (path.startsWith("agent_config/business_info")) return { resource: "Business info", action: method === "DELETE" ? "Reset" : "Updated" };
  if (path.match(/^agent_config\/skills(?:\/[^/]+)?$/))   return { resource: "Skill", action, detail };
  if (path.match(/^agent_config\/files(?:\/[^/]+)?$/))    return { resource: "File", action, detail };
  if (path.match(/^agent_config\/websites(?:\/[^/]+)?$/)) return { resource: "Website", action, detail };
  if (path.match(/^agent_config\/faq(?:\/[^/]+)?$/))      return { resource: "FAQ", action, detail };
  if (path.match(/^agent_config\/allowlist(?:\/[^/]+)?$/))return { resource: "Allowlist entry", action, detail };

  if (path.match(/^agent_connectors\/[^/]+\/tools(?:\/[^/]+)(?:\/run)?$/)) {
    if (path.endsWith("/run")) return { resource: "Tool", action: "Ran", detail };
    return { resource: "Tool", action, detail };
  }
  if (path.match(/^agent_connectors\/[^/]+\/tools$/))    return { resource: "Tool", action: "Created", detail };
  if (path.match(/^agent_connectors\/[^/]+\/upsertApiKey$/))       return { resource: "Connector credentials", action: "Rotated (API key)" };
  if (path.match(/^agent_connectors\/[^/]+\/upsertOAuth$/))        return { resource: "Connector credentials", action: "Rotated (OAuth)" };
  if (path.match(/^agent_connectors\/[^/]+\/upsertCertificate$/))  return { resource: "Connector credentials", action: "Rotated (mTLS)" };
  if (path.match(/^agent_connectors(?:\/[^/]+)?$/))      return { resource: "Connector", action, detail };

  if (path === "agent_test")           return { resource: "Test message", action: "Sent" };
  if (path === "agent_event")          return { resource: "Agent event", action: "Submitted", detail };
  if (path === "agent_onboarding")     return { resource: "Agent", action: "Onboarded" };
  if (path.startsWith("agent-eval/run"))       return { resource: "Eval", action: "Triggered" };

  return { resource: path, action };
}
