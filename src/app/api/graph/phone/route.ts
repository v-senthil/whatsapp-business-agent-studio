import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { graphFetch } from "@/lib/api/meta-client";
import { parseErrorBody } from "@/lib/api/errors";

export async function GET(req: Request) {
  const session = await getSession();
  if (!session.token) return NextResponse.json({ title: "Unauthorized", detail: "No session" }, { status: 401 });
  const { searchParams } = new URL(req.url);
  const phoneId = searchParams.get("phone_number_id");
  if (!phoneId) return NextResponse.json({ title: "Bad request", detail: "phone_number_id required" }, { status: 400 });
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
