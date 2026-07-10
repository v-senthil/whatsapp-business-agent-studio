import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { metaFetch } from "@/lib/api/meta-client";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function handle(req: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  const session = await getSession();
  if (!session.token) {
    return NextResponse.json({ title: "Unauthorized", detail: "No session" }, { status: 401 });
  }
  const { path } = await ctx.params;
  const search = req.nextUrl.search ?? "";
  const forwardHeaders = new Headers(req.headers);
  forwardHeaders.delete("host");
  forwardHeaders.delete("cookie");
  forwardHeaders.delete("connection");
  forwardHeaders.delete("content-length");

  const method = req.method.toUpperCase();
  const body =
    method === "GET" || method === "HEAD" || method === "DELETE"
      ? null
      : (req.body as unknown as BodyInit | null);

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
