// Node-only module-scoped in-memory store for received webhook events.
// Persists across requests within a single Node process (dev + traditional deploys).
// On serverless platforms each cold start wipes state — document this limitation.

export interface WebhookRecord {
  id: string;
  received_at: number;
  signature_ok: boolean;
  body: unknown;
  headers: Record<string, string>;
}

type Subscriber = (record: WebhookRecord) => void;

const MAX = 200;
const g = globalThis as unknown as {
  __wabiz_webhook_store?: {
    ring: WebhookRecord[];
    subscribers: Set<Subscriber>;
  };
};

function store() {
  if (!g.__wabiz_webhook_store) {
    g.__wabiz_webhook_store = { ring: [], subscribers: new Set() };
  }
  return g.__wabiz_webhook_store;
}

export function pushEvent(record: WebhookRecord) {
  const s = store();
  s.ring.unshift(record);
  if (s.ring.length > MAX) s.ring.length = MAX;
  s.subscribers.forEach((cb) => {
    try { cb(record); } catch { /* ignore */ }
  });
}

export function listEvents(limit = 50): WebhookRecord[] {
  return store().ring.slice(0, limit);
}

export function subscribe(cb: Subscriber): () => void {
  const s = store();
  s.subscribers.add(cb);
  return () => { s.subscribers.delete(cb); };
}

export function clearEvents(): void {
  store().ring.length = 0;
}
