import { NextResponse } from "next/server";
import { z } from "zod";
import { getSession } from "@/lib/session";
import { AiFailure, readAiConfig, runPrompt } from "@/lib/ai";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const bodySchema = z.object({
  intent: z.string().min(1).max(2000),
});

const SYSTEM = `You draft skills for a WhatsApp Business AI agent.

Return ONLY a single JSON object matching this exact shape (no markdown, no prose around it, no code fences):
{
  "title": "kebab-case identifier, 1-80 chars",
  "description": "One sentence describing WHEN the agent should apply this skill. 1-500 chars.",
  "skill": "The instruction body the agent follows. Multi-line is fine. Prefer:\\n- a Trigger clause ('When ...')\\n- a numbered list of actions the agent should take\\n- an explicit fallback ('If the customer refuses ...' or 'If unsure, hand off to a human')\\nStay under 8000 chars."
}

Rules:
- Do NOT invent product details or policies. Reference the business's knowledge base or connector tools generically.
- Be terse and imperative.
- If the intent mentions calling an external API, tell the agent to use the appropriate connector tool by role, not by hallucinated name.`;

export async function POST(req: Request) {
  const session = await getSession();
  if (!session.token) return NextResponse.json({ title: "Unauthorized", detail: "No session" }, { status: 401 });
  const cfg = readAiConfig(session);
  if (!cfg) {
    return NextResponse.json({ title: "AI not configured", detail: "Pick a provider in Settings → AI first." }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ title: "Bad request", detail: parsed.error.issues[0]?.message ?? "Invalid intent" }, { status: 400 });
  }

  const prompt = `Draft a skill for this intent:\n\n${parsed.data.intent}`;

  let raw: string;
  try {
    raw = await runPrompt(cfg, prompt, SYSTEM);
  } catch (e) {
    if (e instanceof AiFailure) {
      return NextResponse.json({ title: aiTitleForCode(e.code), detail: e.message, code: e.code }, { status: statusForCode(e.code) });
    }
    return NextResponse.json({ title: "AI provider failed", detail: e instanceof Error ? e.message : String(e) }, { status: 502 });
  }

  const draft = extractJson(raw);
  if (!draft) {
    return NextResponse.json({ title: "Invalid draft", detail: "The model didn't return a parseable JSON object.", raw: raw.slice(0, 500) }, { status: 502 });
  }

  return NextResponse.json({ ok: true, draft });
}

function aiTitleForCode(code: AiFailure["code"]): string {
  switch (code) {
    case "not_configured": return "AI not configured";
    case "not_installed": return "Claude CLI not installed";
    case "auth": return "AI auth failed";
    case "network": return "Network error";
    case "invalid_response": return "Invalid AI response";
    default: return "AI request failed";
  }
}
function statusForCode(code: AiFailure["code"]): number {
  switch (code) {
    case "not_configured":
    case "not_installed":
    case "auth": return 400;
    default: return 502;
  }
}

// The model might wrap the JSON in a code fence or preamble. Extract the
// first {...} block and try to parse it.
function extractJson(text: string): { title?: string; description?: string; skill?: string } | null {
  // Strip common code-fence wrappers.
  let s = text.trim();
  s = s.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/, "");
  // Try full string first.
  const attempts = [s];
  const braceStart = s.indexOf("{");
  const braceEnd = s.lastIndexOf("}");
  if (braceStart >= 0 && braceEnd > braceStart) attempts.push(s.slice(braceStart, braceEnd + 1));
  for (const candidate of attempts) {
    try {
      const parsed = JSON.parse(candidate);
      if (parsed && typeof parsed === "object" && ("title" in parsed || "skill" in parsed)) {
        return parsed as { title?: string; description?: string; skill?: string };
      }
    } catch { /* try next */ }
  }
  return null;
}
