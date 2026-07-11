import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";
import { pushEvent } from "@/lib/webhook-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 1_000_000; // 1 MB

// Only these request headers are preserved on the stored record. Everything
// else is dropped so a hostile sender cannot pack the ring buffer with
// megabytes of custom headers.
const HEADER_ALLOWLIST = new Set([
  "x-hub-signature-256",
  "x-hub-signature",
  "user-agent",
  "content-type",
  "x-request-id",
]);

function pickAllowedHeaders(src: NextRequest["headers"]): Record<string, string> {
  const out: Record<string, string> = {};
  src.forEach((value, key) => {
    if (HEADER_ALLOWLIST.has(key.toLowerCase())) out[key] = value;
  });
  return out;
}

// Meta webhook verification handshake.
// Docs: https://developers.facebook.com/docs/graph-api/webhooks/getting-started#verification-requests
export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const mode = params.get("hub.mode");
  const token = params.get("hub.verify_token");
  const challenge = params.get("hub.challenge");
  const expected = process.env.META_WEBHOOK_VERIFY_TOKEN;

  if (!expected) {
    // Do not leak configuration state to an unauthenticated caller. Log the
    // missing env server-side and return the same 403 as a failed match.
    console.error("[webhooks] GET /api/webhooks/meta hit but META_WEBHOOK_VERIFY_TOKEN is not set");
    return NextResponse.json({ error: "verification failed" }, { status: 403 });
  }
  if (mode === "subscribe" && token === expected && challenge) {
    return new NextResponse(challenge, { status: 200, headers: { "content-type": "text/plain" } });
  }
  return NextResponse.json({ error: "verification failed" }, { status: 403 });
}

// Event notifications from Meta.
export async function POST(req: NextRequest) {
  const secret = process.env.META_APP_SECRET;
  const isProduction = process.env.NODE_ENV === "production";

  // Refuse to buffer events in production if the signing secret is missing.
  // Without it we cannot tell real Meta traffic from forged posts.
  if (isProduction && !secret) {
    console.error("[webhooks] POST /api/webhooks/meta refused: META_APP_SECRET is not set in production");
    return NextResponse.json({ error: "webhook signing not configured" }, { status: 500 });
  }

  // Refuse anything past the size limit before reading the body so a large
  // payload cannot DoS the process. Meta's real events are a few KB.
  const declared = Number(req.headers.get("content-length") ?? "0");
  if (declared > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "payload too large" }, { status: 413 });
  }

  const raw = await req.text();
  if (raw.length > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "payload too large" }, { status: 413 });
  }

  const signature = req.headers.get("x-hub-signature-256") ?? "";
  let signatureOk = false;
  if (secret && signature.startsWith("sha256=")) {
    const expected = "sha256=" + crypto.createHmac("sha256", secret).update(raw).digest("hex");
    signatureOk = timingSafeEqual(signature, expected);
  }

  let body: unknown = raw;
  try { body = JSON.parse(raw); } catch { /* leave as string */ }

  const headers = pickAllowedHeaders(req.headers);

  pushEvent({
    id: crypto.randomUUID(),
    received_at: Date.now(),
    signature_ok: signatureOk,
    body,
    headers,
  });

  // Meta expects 200 quickly. Log signature failures but still 200 so Meta
  // does not retry-forever during local dev where the secret may not be set.
  return NextResponse.json({ ok: true, signature_ok: signatureOk });
}

function timingSafeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ab.length !== bb.length) return false;
  return crypto.timingSafeEqual(ab, bb);
}
