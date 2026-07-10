import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";
import { pushEvent } from "@/lib/webhook-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Meta webhook verification handshake.
// Docs: https://developers.facebook.com/docs/graph-api/webhooks/getting-started#verification-requests
export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const mode = params.get("hub.mode");
  const token = params.get("hub.verify_token");
  const challenge = params.get("hub.challenge");
  const expected = process.env.META_WEBHOOK_VERIFY_TOKEN;

  if (!expected) {
    return NextResponse.json({ error: "META_WEBHOOK_VERIFY_TOKEN is not configured" }, { status: 500 });
  }
  if (mode === "subscribe" && token === expected && challenge) {
    return new NextResponse(challenge, { status: 200, headers: { "content-type": "text/plain" } });
  }
  return NextResponse.json({ error: "verification failed" }, { status: 403 });
}

// Event notifications from Meta.
export async function POST(req: NextRequest) {
  const raw = await req.text();
  const secret = process.env.META_APP_SECRET;
  const signature = req.headers.get("x-hub-signature-256") ?? "";
  let signatureOk = false;
  if (secret && signature.startsWith("sha256=")) {
    const expected = "sha256=" + crypto.createHmac("sha256", secret).update(raw).digest("hex");
    signatureOk = timingSafeEqual(signature, expected);
  } else if (!secret) {
    // Without a secret we can't verify; accept but flag as unverified so the UI can warn.
    signatureOk = false;
  }

  let body: unknown = raw;
  try { body = JSON.parse(raw); } catch { /* leave as string */ }

  const headers: Record<string, string> = {};
  req.headers.forEach((value, key) => {
    if (["content-length", "host", "cookie"].includes(key)) return;
    headers[key] = value;
  });

  pushEvent({
    id: crypto.randomUUID(),
    received_at: Date.now(),
    signature_ok: signatureOk,
    body,
    headers,
  });

  // Meta expects 200 quickly. Log signature failures but still 200 so Meta doesn't retry-forever
  // during local dev where the secret may not be configured.
  return NextResponse.json({ ok: true, signature_ok: signatureOk });
}

function timingSafeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ab.length !== bb.length) return false;
  return crypto.timingSafeEqual(ab, bb);
}
