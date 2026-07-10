import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { graphFetch } from "@/lib/api/meta-client";
import { parseErrorBody } from "@/lib/api/errors";

export async function GET(req: Request) {
  const session = await getSession();
  if (!session.token) return NextResponse.json({ title: "Unauthorized", detail: "No session" }, { status: 401 });
  const { searchParams } = new URL(req.url);
  const businessId = searchParams.get("business_id");
  if (!businessId) return NextResponse.json({ title: "Bad request", detail: "business_id required" }, { status: 400 });
  const res = await graphFetch(session.token, `${encodeURIComponent(businessId)}/owned_whatsapp_business_accounts?fields=id,name`);
  if (!res.ok) {
    const err = await parseErrorBody(res);
    return NextResponse.json(err, { status: res.status });
  }
  return NextResponse.json(await res.json());
}
