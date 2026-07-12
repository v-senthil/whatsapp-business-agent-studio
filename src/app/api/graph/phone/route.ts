import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { graphFetch } from "@/lib/api/meta-client";
import { parseErrorBody } from "@/lib/api/errors";
import { handleGraphPhone } from "@/lib/demo/router";

export async function GET(req: Request) {
  const session = await getSession();
  if (!session.token) return NextResponse.json({ title: "Unauthorized", detail: "No session" }, { status: 401 });
  const { searchParams } = new URL(req.url);
  const phoneId = searchParams.get("phone_number_id");
  if (!phoneId) return NextResponse.json({ title: "Bad request", detail: "phone_number_id required" }, { status: 400 });
  if (session.demo) return handleGraphPhone(phoneId);
  // NOTE: Meta rejects `whatsapp_business_account` as a nested field on this
  // node (400 OAuthException "nonexisting field"). The parent WABA is
  // therefore not returned from this endpoint. Callers that need the WABA ID
  // for the current phone can fall back to session.lastWabaId which is
  // persisted whenever the user picks a phone from /home.
  const res = await graphFetch(
    session.token,
    `${encodeURIComponent(phoneId)}?fields=display_phone_number,verified_name,quality_rating`,
  );
  if (!res.ok) {
    const err = await parseErrorBody(res);
    return NextResponse.json(err, { status: res.status });
  }
  return NextResponse.json(await res.json());
}
