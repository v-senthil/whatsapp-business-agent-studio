import { NextResponse } from "next/server";
import { z } from "zod";
import { getSession } from "@/lib/session";
import { AiFailure, readAiConfig } from "@/lib/ai";
import { generateFromText } from "@/lib/ai/document-generator";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 120;

const bodySchema = z.object({
  text: z.string().min(1).max(200_000),
});

export async function POST(req: Request) {
  const session = await getSession();
  if (!session.token) return NextResponse.json({ title: "Unauthorized", detail: "No session" }, { status: 401 });
  const cfg = readAiConfig(session);
  if (!cfg) {
    return NextResponse.json({ title: "AI not configured", detail: "Pick a provider in Settings → AI first." }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ title: "Bad request", detail: parsed.error.issues[0]?.message ?? "Invalid body" }, { status: 400 });
  }

  try {
    const bundle = await generateFromText(cfg, parsed.data.text);
    return NextResponse.json({ ok: true, bundle });
  } catch (e) {
    if (e instanceof AiFailure) {
      return NextResponse.json({ title: titleFor(e.code), detail: e.message, code: e.code }, { status: statusFor(e.code) });
    }
    return NextResponse.json({ title: "AI provider failed", detail: e instanceof Error ? e.message : String(e) }, { status: 502 });
  }
}

function titleFor(code: AiFailure["code"]): string {
  switch (code) {
    case "not_configured": return "AI not configured";
    case "not_installed": return "Claude CLI not installed";
    case "auth": return "AI auth failed";
    case "network": return "Network error";
    case "invalid_response": return "Invalid AI response";
    case "blocked_url": return "Invalid AI endpoint";
    default: return "AI request failed";
  }
}
function statusFor(code: AiFailure["code"]): number {
  switch (code) {
    case "not_configured":
    case "not_installed":
    case "blocked_url":
    case "auth": return 400;
    default: return 502;
  }
}
