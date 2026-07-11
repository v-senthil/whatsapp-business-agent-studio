import { env } from "@/lib/env";

interface ProxyInit {
  method: string;
  headers: Headers;
  body?: BodyInit | null;
}

export async function metaFetch(token: string, path: string, search: string, init: ProxyInit): Promise<Response> {
  const url = `${env.META_API_BASE}/${path}${search}`;
  const headers = new Headers(init.headers);
  headers.set("Authorization", `Bearer ${token}`);
  if (!headers.has("X-API-Version")) headers.set("X-API-Version", "2.0.0");
  headers.delete("host");
  headers.delete("cookie");
  headers.delete("connection");

  // Retrying with a streamed body (multipart uploads etc.) is impossible,
  // the source stream has already been consumed by the first attempt.
  const bodyIsStream = init.body instanceof ReadableStream;
  const maxAttempts = bodyIsStream ? 1 : 3;
  const isIdempotent = init.method === "GET" || init.method === "HEAD";

  let attempt = 0;
  while (true) {
    const res = await fetch(url, {
      method: init.method,
      headers,
      body: init.body,
      cache: "no-store",
      redirect: "manual",
      // @ts-expect-error - Node fetch supports duplex for streaming
      duplex: init.body ? "half" : undefined,
    });
    attempt++;
    const retryable429 = res.status === 429;
    const retryable5xx = isIdempotent && res.status >= 500 && res.status <= 599;
    if ((!retryable429 && !retryable5xx) || attempt >= maxAttempts) return res;
    // Retry-After can be either a delta-seconds integer or an RFC 7231
    // IMF-fixdate. Only accept a finite positive number; otherwise fall back
    // to 1 second so setTimeout does not fire at 0 ms on a NaN value.
    const header = res.headers.get("retry-after") ?? "1";
    const parsed = Number(header);
    const base = Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
    // Add a small jitter for 5xx retries so retries do not all fire in lockstep.
    const jitter = retryable5xx ? Math.random() * 0.5 : 0;
    await new Promise((r) => setTimeout(r, Math.min(base + jitter, 5) * 1000));
  }
}

export async function graphFetch(token: string, pathAndQuery: string): Promise<Response> {
  // Prefer Authorization header over ?access_token= to avoid the token
  // leaking into upstream logs, error pages, or Referer headers.
  return fetch(`${env.GRAPH_API_BASE}/${pathAndQuery}`, {
    cache: "no-store",
    headers: { Authorization: `Bearer ${token}` },
  });
}
