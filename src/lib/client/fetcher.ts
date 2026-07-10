"use client";

import { MetaApiError, type MetaApiErrorShape } from "@/lib/api/errors";

interface FetchOpts {
  method?: string;
  json?: unknown;
  formData?: FormData;
  signal?: AbortSignal;
  headers?: Record<string, string>;
}

export async function fetcher<T = unknown>(url: string, opts: FetchOpts = {}): Promise<T> {
  const init: RequestInit = {
    method: opts.method ?? "GET",
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
