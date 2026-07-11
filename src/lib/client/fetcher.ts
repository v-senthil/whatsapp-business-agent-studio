"use client";

import { MetaApiError, type MetaApiErrorShape } from "@/lib/api/errors";
import { record, updateCall } from "@/lib/client/api-log";
import { record as recordActivity } from "@/lib/client/activity-log";

interface FetchOpts {
  method?: string;
  json?: unknown;
  formData?: FormData;
  signal?: AbortSignal;
  headers?: Record<string, string>;
}

let readOnlyMode = false;
const READ_METHODS = new Set(["GET", "HEAD", "OPTIONS"]);
export function setReadOnlyMode(v: boolean) { readOnlyMode = v; }
export function isReadOnlyMode() { return readOnlyMode; }

export class ReadOnlyError extends Error {
  constructor() {
    super("Read-only mode is enabled. Turn it off from the account menu to make changes.");
    this.name = "ReadOnlyError";
  }
}

export async function fetcher<T = unknown>(url: string, opts: FetchOpts = {}): Promise<T> {
  const method = (opts.method ?? "GET").toUpperCase();
  if (readOnlyMode && !READ_METHODS.has(method) && url.startsWith("/api/meta/")) {
    throw new ReadOnlyError();
  }
  const headers: Record<string, string> = { ...(opts.headers ?? {}) };
  if (opts.json !== undefined) headers["Content-Type"] = "application/json";

  const callId = typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random()}`;
  const start = Date.now();
  record({
    id: callId,
    ts: start,
    method,
    url,
    requestHeaders: headers,
    requestBody: opts.json ?? (opts.formData ? "[multipart FormData]" : undefined),
  });

  const init: RequestInit = {
    method,
    headers,
    signal: opts.signal,
    credentials: "same-origin",
  };
  if (opts.json !== undefined) init.body = JSON.stringify(opts.json);
  else if (opts.formData) init.body = opts.formData;

  let res: Response;
  try {
    res = await fetch(url, init);
  } catch (e) {
    updateCall(callId, {
      duration_ms: Date.now() - start,
      ok: false,
      error: { title: "Network error", detail: e instanceof Error ? e.message : String(e) },
    });
    throw e;
  }

  const duration_ms = Date.now() - start;

  if (!res.ok) {
    let body: MetaApiErrorShape;
    try {
      body = await res.json();
    } catch {
      body = { title: `HTTP ${res.status}`, detail: res.statusText };
    }
    updateCall(callId, {
      duration_ms,
      status: res.status,
      ok: false,
      responseBody: body,
      error: { title: body.title ?? `HTTP ${res.status}`, detail: body.detail ?? res.statusText },
    });
    if (res.status === 401) {
      window.dispatchEvent(new CustomEvent("wabiz:unauthenticated"));
    }
    throw new MetaApiError(res.status, body);
  }

  const ct = res.headers.get("content-type") ?? "";
  let parsed: unknown;
  if (ct.includes("application/json")) {
    parsed = await res.json();
  } else {
    parsed = await res.text();
  }
  updateCall(callId, {
    duration_ms,
    status: res.status,
    ok: true,
    responseBody: parsed,
  });
  // Log to the per-entity persistent activity feed for state-changing calls.
  if (!READ_METHODS.has(method)) {
    try { recordActivity(url, method, opts.json); } catch { /* ignore */ }
  }
  return parsed as T;
}

export function metaUrl(entityId: string, path: string, query?: Record<string, string | undefined>): string {
  const qs = query
    ? "?" + Object.entries(query)
        .filter(([, v]) => v !== undefined && v !== "")
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v as string)}`)
        .join("&")
    : "";
  return `/api/meta/${entityId}/${path}${qs}`;
}
