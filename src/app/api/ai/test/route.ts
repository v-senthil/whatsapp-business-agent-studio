import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { AiFailure, readAiConfig, runPrompt } from "@/lib/ai";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST() {
  const session = await getSession();
  if (!session.token) return NextResponse.json({ title: "Unauthorized", detail: "No session" }, { status: 401 });
  const cfg = readAiConfig(session);
  if (!cfg) {
    return NextResponse.json({ ok: false, error: "No AI provider configured. Pick one in Settings → AI." }, { status: 200 });
  }
  try {
    const text = await runPrompt(cfg, "Reply with a single short sentence confirming you're online.", "You are helping test connectivity.");
    return NextResponse.json({ ok: true, provider: cfg.provider, sample: text });
  } catch (e) {
    if (e instanceof AiFailure) {
      return NextResponse.json({ ok: false, provider: cfg.provider, code: e.code, error: e.message }, { status: 200 });
    }
    return NextResponse.json({ ok: false, provider: cfg.provider, error: e instanceof Error ? e.message : String(e) }, { status: 200 });
  }
}
