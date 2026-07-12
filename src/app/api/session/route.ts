import { NextResponse } from "next/server";
import { z } from "zod";
import { getSession } from "@/lib/session";
import { graphFetch } from "@/lib/api/meta-client";
import { parseErrorBody } from "@/lib/api/errors";

const loginSchema = z.object({ token: z.string().min(10) });

// Same-origin check for state-changing session requests. We accept absent
// Origin headers (same-origin same-tab GETs can lack them) but reject any
// Origin whose host does not match the request Host. Environments behind a
// reverse proxy can pin the expected host with WABIZ_PUBLIC_HOST.
function isSameOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return true;
  const host = req.headers.get("host") ?? "";
  const expectedHost = process.env.WABIZ_PUBLIC_HOST ?? host;
  try {
    const originUrl = new URL(origin);
    return originUrl.host === expectedHost;
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ title: "Invalid body", detail: "Missing or invalid token" }, { status: 400 });
  }
  const { token } = parsed.data;

  const res = await graphFetch(token, "me?fields=id,name");
  if (!res.ok) {
    const err = await parseErrorBody(res);
    return NextResponse.json(err, { status: res.status });
  }
  const me = (await res.json()) as { id: string; name?: string };

  const session = await getSession();
  // If the incoming token differs from the current one, this is a real
  // sign-in (potentially by a different user) so we scrub AI creds and per-
  // phone state. Re-logging in with the same token keeps the existing state.
  if (session.token && session.token !== token) {
    session.aiApiKey = undefined;
    session.aiProvider = undefined;
    session.aiBaseUrl = undefined;
    session.aiModel = undefined;
    session.readOnly = undefined;
    session.lastEntityId = undefined;
    session.lastBusinessId = undefined;
  }
  session.token = token;
  session.userId = me.id;
  session.userName = me.name ?? me.id;
  await session.save();

  return NextResponse.json({ ok: true, user: { id: me.id, name: session.userName } });
}

export async function DELETE(req: Request) {
  if (!isSameOrigin(req)) {
    return NextResponse.json({ title: "Forbidden", detail: "Cross-origin request rejected" }, { status: 403 });
  }
  const session = await getSession();
  session.destroy();
  return NextResponse.json({ ok: true });
}

const patchSchema = z.object({
  // Empty string is treated as "clear this field" so the picker UI does not
  // have to send null explicitly. min(1) on the non-null branch would reject
  // "" outright, which used to overwrite the id with an empty string.
  lastEntityId: z.string().nullish(),
  lastBusinessId: z.string().nullish(),
  lastWabaId: z.string().nullish(),
  readOnly: z.boolean().optional(),
  aiProvider: z.enum(["claude", "openai"]).nullish(),
  aiBaseUrl: z.string().optional().nullable(),
  aiApiKey: z.string().optional().nullable(),
  aiModel: z.string().optional().nullable(),
});

export async function PATCH(req: Request) {
  if (!isSameOrigin(req)) {
    return NextResponse.json({ title: "Forbidden", detail: "Cross-origin request rejected" }, { status: 403 });
  }
  const session = await getSession();
  if (!session.token) return NextResponse.json({ title: "Unauthorized", detail: "No session" }, { status: 401 });
  const body = await req.json().catch(() => null);
  const parsed = patchSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ title: "Invalid body", detail: "Bad patch" }, { status: 400 });
  const d = parsed.data;
  if (d.lastEntityId !== undefined) {
    session.lastEntityId = d.lastEntityId ? d.lastEntityId : undefined;
  }
  if (d.lastBusinessId !== undefined) {
    session.lastBusinessId = d.lastBusinessId ? d.lastBusinessId : undefined;
  }
  if (d.lastWabaId !== undefined) {
    session.lastWabaId = d.lastWabaId ? d.lastWabaId : undefined;
  }
  if (d.readOnly !== undefined) session.readOnly = d.readOnly;
  if (d.aiProvider !== undefined) session.aiProvider = d.aiProvider ?? undefined;
  if (d.aiBaseUrl !== undefined) session.aiBaseUrl = d.aiBaseUrl ?? undefined;
  if (d.aiApiKey !== undefined) session.aiApiKey = d.aiApiKey ?? undefined;
  if (d.aiModel !== undefined) session.aiModel = d.aiModel ?? undefined;
  await session.save();
  return NextResponse.json({ ok: true });
}
