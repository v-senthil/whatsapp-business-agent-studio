import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { validatePublicHttpUrl } from "@/lib/api/url-guard";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Lists available models from an OpenAI-compatible endpoint.
// Body: { baseUrl?, apiKey? } — if omitted, falls back to the session's
// stored values. Never returns the session's API key to the caller.
export async function POST(req: Request) {
  const session = await getSession();
  if (!session.token) return NextResponse.json({ title: "Unauthorized", detail: "No session" }, { status: 401 });

  const body = await req.json().catch(() => ({} as Record<string, unknown>));
  const baseUrl = String((body as { baseUrl?: string }).baseUrl ?? session.aiBaseUrl ?? "").trim().replace(/\/+$/, "");
  // Prefer the caller-supplied key (typed in the form right now) over the
  // stored one, so "test before saving" works.
  const rawKey = (body as { apiKey?: string }).apiKey;
  const apiKey = typeof rawKey === "string" && rawKey.length > 0 ? rawKey : session.aiApiKey;

  if (!baseUrl) {
    return NextResponse.json({ ok: false, error: "Base URL is required." }, { status: 400 });
  }

  const guard = await validatePublicHttpUrl(`${baseUrl}/models`);
  if (!guard.ok) {
    return NextResponse.json(
      { title: "Invalid AI endpoint", detail: "Cannot reach private, loopback, or link-local hosts" },
      { status: 400 },
    );
  }

  let res: Response;
  try {
    res = await fetch(guard.url, {
      headers: apiKey ? { authorization: `Bearer ${apiKey}` } : {},
      cache: "no-store",
    });
  } catch (e) {
    return NextResponse.json({ ok: false, error: `Network error: ${(e as Error).message}` }, { status: 200 });
  }

  if (res.status === 401 || res.status === 403) {
    return NextResponse.json({ ok: false, error: `${res.status}: endpoint requires an API key or the key was rejected.` }, { status: 200 });
  }
  if (!res.ok) {
    // Do NOT echo the upstream body. If the SSRF guard is ever bypassed the
    // response bytes could carry internal service identifiers.
    return NextResponse.json({ ok: false, error: `Upstream error: HTTP ${res.status}` }, { status: 200 });
  }

  let json: unknown;
  try {
    json = await res.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Response was not valid JSON." }, { status: 200 });
  }

  // OpenAI + most compatibles: { data: [{ id: "gpt-...", ...}] }
  // Some (older Ollama): { models: [{ name: "llama3" }] }
  const models = extractModels(json);
  return NextResponse.json({ ok: true, models });
}

function extractModels(json: unknown): string[] {
  const j = json as { data?: Array<{ id?: string }>; models?: Array<{ name?: string; id?: string }> };
  if (Array.isArray(j.data)) {
    return j.data.map((m) => m.id).filter((s): s is string => !!s).sort();
  }
  if (Array.isArray(j.models)) {
    return j.models
      .map((m) => m.id ?? m.name)
      .filter((s): s is string => !!s)
      .sort();
  }
  return [];
}
