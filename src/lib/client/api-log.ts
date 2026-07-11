"use client";
// Ring buffer of recent client-side API calls made through fetcher(). Kept
// in-memory so it survives navigations but not reloads. Used by the dev
// drawer (Cmd+Shift+D or ?debug=1).

export interface ApiCall {
  id: string;
  ts: number;
  method: string;
  url: string;
  requestBody?: unknown;
  requestHeaders: Record<string, string>;
  duration_ms?: number;
  status?: number;
  ok?: boolean;
  responseBody?: unknown;
  error?: { title: string; detail: string };
}

const MAX = 50;
const listeners = new Set<() => void>();
let calls: ApiCall[] = [];

export function record(call: ApiCall) {
  calls = [call, ...calls].slice(0, MAX);
  listeners.forEach((cb) => { try { cb(); } catch { /* ignore */ } });
}

export function updateCall(id: string, patch: Partial<ApiCall>) {
  let changed = false;
  calls = calls.map((c) => {
    if (c.id !== id) return c;
    changed = true;
    return { ...c, ...patch };
  });
  if (changed) listeners.forEach((cb) => { try { cb(); } catch { /* ignore */ } });
}

export function subscribe(cb: () => void): () => void {
  listeners.add(cb);
  return () => { listeners.delete(cb); };
}

export function snapshot(): ApiCall[] {
  return calls;
}

export function clear() {
  calls = [];
  listeners.forEach((cb) => { try { cb(); } catch { /* ignore */ } });
}

/**
 * Render an ApiCall as a runnable curl command. Uses the browser's current
 * origin, so the copied command can be pasted into a terminal on the same
 * machine (session cookie is domain-bound though, so real use is for
 * debugging shapes, not for external reuse).
 */
// Headers stripped from the curl output. cookie: to avoid leaking the
// session. authorization + x-api-key: user might have proxied through the
// dev drawer during testing. x-hub-signature*: HMAC of the body, meaningless
// once you rerun. x-real-ip: identifier from any reverse proxy in front.
const CURL_HEADER_OMIT = new Set([
  "cookie",
  "authorization",
  "x-hub-signature-256",
  "x-hub-signature",
  "x-api-key",
  "x-real-ip",
]);

export function toCurl(call: ApiCall): string {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const url = call.url.startsWith("http") ? call.url : `${origin}${call.url}`;
  const parts: string[] = [`curl -X ${call.method} ${quote(url)}`];
  for (const [k, v] of Object.entries(call.requestHeaders)) {
    if (CURL_HEADER_OMIT.has(k.toLowerCase())) continue;
    parts.push(`  -H ${quote(`${k}: ${v}`)}`);
  }
  if (call.requestBody !== undefined) {
    const body = typeof call.requestBody === "string"
      ? call.requestBody
      : JSON.stringify(call.requestBody);
    parts.push(`  --data-raw ${quote(body)}`);
  }
  return parts.join(" \\\n");
}

function quote(s: string): string {
  return `'${s.replace(/'/g, "'\\''")}'`;
}
