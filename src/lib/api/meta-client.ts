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

  // Retrying with a streamed body (multipart uploads etc.) is impossible —
  // the source stream has already been consumed by the first attempt.
  const bodyIsStream = init.body instanceof ReadableStream;
  const maxAttempts = bodyIsStream ? 1 : 3;

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
    if (res.status !== 429 || attempt >= maxAttempts) return res;
    const retry = Number(res.headers.get("retry-after") ?? "1");
    await new Promise((r) => setTimeout(r, Math.min(retry, 5) * 1000));
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
