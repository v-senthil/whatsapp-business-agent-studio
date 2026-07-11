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

// Return the phone_number_ids referenced in an event body. Empty array means
// the event is unaddressed (test payload, non-message change) and should be
// treated as visible to any phone.
export function extractPhoneNumberIds(body: unknown): string[] {
  if (!body || typeof body !== "object") return [];
  const obj = body as {
    entry?: Array<{
      changes?: Array<{ value?: { metadata?: { phone_number_id?: string } } }>;
    }>;
  };
  const ids = new Set<string>();
  for (const entry of obj.entry ?? []) {
    for (const change of entry.changes ?? []) {
      const id = change?.value?.metadata?.phone_number_id;
      if (id) ids.add(id);
    }
  }
  return Array.from(ids);
}

// True when the event should be visible to the given phone. Events with no
// phone_number_id remain visible (test payloads, non-message events).
export function eventMatchesPhone(record: WebhookRecord, phoneId: string): boolean {
  const ids = extractPhoneNumberIds(record.body);
  if (ids.length === 0) return true;
  return ids.includes(phoneId);
}

export function filterForPhone(events: WebhookRecord[], phoneId: string): WebhookRecord[] {
  return events.filter((e) => eventMatchesPhone(e, phoneId));
}
