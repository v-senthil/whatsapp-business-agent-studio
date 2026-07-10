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
    if (res.status !== 429 || attempt >= 2) return res;
    const retry = Number(res.headers.get("retry-after") ?? "1");
    await new Promise((r) => setTimeout(r, Math.min(retry, 5) * 1000));
    attempt++;
  }
}

export async function graphFetch(token: string, pathAndQuery: string): Promise<Response> {
  const sep = pathAndQuery.includes("?") ? "&" : "?";
  const url = `${env.GRAPH_API_BASE}/${pathAndQuery}${sep}access_token=${encodeURIComponent(token)}`;
  return fetch(url, { cache: "no-store" });
}
