import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { metaFetch } from "@/lib/api/meta-client";
import { handleMetaDemo } from "@/lib/demo/router";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Whitelist of request headers we forward upstream. Anything else is dropped
// so a compromised client cannot ask the proxy to relay X-Forwarded-For,
// cookies, or other identifying/auth headers to Meta.
// content-type is preserved verbatim so multipart boundary parameters
// survive; metaFetch adds Authorization and the default X-API-Version.
const FORWARD_HEADER_ALLOWLIST = new Set([
  "accept",
  "content-type",
  "content-disposition",
  "x-api-version",
]);

function pickAllowedHeaders(src: Headers): Headers {
  const out = new Headers();
  src.forEach((value, key) => {
    if (FORWARD_HEADER_ALLOWLIST.has(key.toLowerCase())) out.set(key, value);
  });
  return out;
}

async function handle(req: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  const session = await getSession();
  if (!session.token) {
    return NextResponse.json({ title: "Unauthorized", detail: "No session" }, { status: 401 });
  }
  const { path } = await ctx.params;
  const search = req.nextUrl.search ?? "";
  const forwardHeaders = pickAllowedHeaders(req.headers);

  const method = req.method.toUpperCase();

  if (session.demo) {
    return handleMetaDemo(req, method, path, search, session.userId ?? "demo-user");
  }
  // For non-multipart writes we buffer the body so metaFetch can retry on 429.
  // Multipart uploads must stay as a stream because the browser's boundary
  // parser cannot re-consume a stream once it has been forwarded, and we do
  // not want to buffer large file uploads.
  const contentType = req.headers.get("content-type") ?? "";
  const isMultipart = contentType.toLowerCase().startsWith("multipart/");
  let body: BodyInit | null;
  if (method === "GET" || method === "HEAD" || method === "DELETE") {
    body = null;
  } else if (isMultipart) {
    body = req.body as unknown as BodyInit | null;
  } else {
    const buf = await req.arrayBuffer();
    body = buf.byteLength > 0 ? new Uint8Array(buf) : null;
  }

  if (path.some((p) => p.includes("..") || p.includes("/") || p === "")) {
    return NextResponse.json({ title: "Bad path", detail: "Illegal path segment" }, { status: 400 });
  }

  const upstream = await metaFetch(session.token, path.join("/"), search, {
    method,
    headers: forwardHeaders,
    body,
  });

  const respHeaders = new Headers(upstream.headers);
  respHeaders.delete("content-encoding");
  respHeaders.delete("transfer-encoding");
  respHeaders.delete("content-length");

  return new NextResponse(upstream.body, { status: upstream.status, headers: respHeaders });
}

export const GET = handle;
export const POST = handle;
export const PUT = handle;
export const PATCH = handle;
export const DELETE = handle;
