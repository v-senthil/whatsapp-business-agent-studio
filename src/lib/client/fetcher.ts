"use client";

import { MetaApiError, type MetaApiErrorShape } from "@/lib/api/errors";

interface FetchOpts {
  method?: string;
  json?: unknown;
  formData?: FormData;
  signal?: AbortSignal;
  headers?: Record<string, string>;
}

// Read-only mode — set by a small syncer component that watches the session query.
// When true, any non-GET/HEAD/OPTIONS request against /api/meta/* is refused
// client-side. Server routes are the real authority, but this gives instant
// feedback and prevents accidental mutations while the app is in an "eyes only"
// state.
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
  // Only guard writes against Meta endpoints; session PATCH etc. are allowed
  // because they're how the user toggles the mode itself.
  if (readOnlyMode && !READ_METHODS.has(method) && url.startsWith("/api/meta/")) {
    throw new ReadOnlyError();
  }
  const init: RequestInit = {
    method,
    headers: { ...(opts.headers ?? {}) },
    signal: opts.signal,
    credentials: "same-origin",
  };
  if (opts.json !== undefined) {
    (init.headers as Record<string, string>)["Content-Type"] = "application/json";
    init.body = JSON.stringify(opts.json);
  } else if (opts.formData) {
    init.body = opts.formData;
  }
  const res = await fetch(url, init);
  if (!res.ok) {
    let body: MetaApiErrorShape;
    try {
      body = await res.json();
    } catch {
      body = { title: `HTTP ${res.status}`, detail: res.statusText };
    }
    if (res.status === 401) {
      window.dispatchEvent(new CustomEvent("wabiz:unauthenticated"));
    }
    throw new MetaApiError(res.status, body);
  }
  const ct = res.headers.get("content-type") ?? "";
  if (ct.includes("application/json")) return (await res.json()) as T;
  return (await res.text()) as unknown as T;
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
