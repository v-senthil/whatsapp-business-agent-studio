import { NextResponse } from "next/server";
import { z } from "zod";
import { getSession } from "@/lib/session";
import { graphFetch } from "@/lib/api/meta-client";
import { parseErrorBody } from "@/lib/api/errors";

const loginSchema = z.object({ token: z.string().min(10) });

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
  session.token = token;
  session.userId = me.id;
  session.userName = me.name ?? me.id;
  await session.save();

  return NextResponse.json({ ok: true, user: { id: me.id, name: session.userName } });
}

export async function DELETE() {
  const session = await getSession();
  session.destroy();
  return NextResponse.json({ ok: true });
}

const patchSchema = z.object({
  lastEntityId: z.string().optional(),
  lastBusinessId: z.string().optional(),
  readOnly: z.boolean().optional(),
});

export async function PATCH(req: Request) {
  const session = await getSession();
  if (!session.token) return NextResponse.json({ title: "Unauthorized", detail: "No session" }, { status: 401 });
  const body = await req.json().catch(() => null);
  const parsed = patchSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ title: "Invalid body", detail: "Bad patch" }, { status: 400 });
  if (parsed.data.lastEntityId !== undefined) session.lastEntityId = parsed.data.lastEntityId;
  if (parsed.data.lastBusinessId !== undefined) session.lastBusinessId = parsed.data.lastBusinessId;
  if (parsed.data.readOnly !== undefined) session.readOnly = parsed.data.readOnly;
  await session.save();
  return NextResponse.json({ ok: true });
}
