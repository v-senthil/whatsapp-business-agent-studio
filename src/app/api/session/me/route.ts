import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";

export async function GET() {
  const session = await getSession();
  if (!session.token) {
    return NextResponse.json({ authenticated: false }, { status: 200 });
  }
  return NextResponse.json({
    authenticated: true,
    user: { id: session.userId, name: session.userName },
    lastEntityId: session.lastEntityId ?? null,
    lastBusinessId: session.lastBusinessId ?? null,
    readOnly: !!session.readOnly,
  });
}
