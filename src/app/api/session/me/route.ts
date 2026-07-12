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
    lastWabaId: session.lastWabaId ?? null,
    readOnly: !!session.readOnly,
    demo: !!session.demo,
    // AI-assist config — return the shape but scrub the actual API key.
    ai: {
      provider: session.aiProvider ?? null,
      baseUrl: session.aiBaseUrl ?? null,
      model: session.aiModel ?? null,
      hasApiKey: !!session.aiApiKey,
    },
  });
}
