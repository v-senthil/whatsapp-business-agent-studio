import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { parseErrorBody } from "@/lib/api/errors";

export const runtime = "nodejs";

const GRAPH_BASE = "https://graph.facebook.com/v23.0";

export async function POST(req: Request) {
  const session = await getSession();
  if (!session.token) {
    return NextResponse.json({ title: "Unauthorized", detail: "No session" }, { status: 401 });
  }

  let payload: { phone_number_id?: string; callback_url?: string };
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ title: "Bad request", detail: "Invalid JSON" }, { status: 400 });
  }

  const { phone_number_id, callback_url } = payload;
  if (!phone_number_id || !callback_url) {
    return NextResponse.json(
      { title: "Bad request", detail: "phone_number_id and callback_url are required" },
      { status: 400 },
    );
  }

  const verify_token = process.env.META_WEBHOOK_VERIFY_TOKEN;
  if (!verify_token) {
    return NextResponse.json(
      {
        title: "Server not configured",
        detail:
          "META_WEBHOOK_VERIFY_TOKEN is not set on the server. Add it to .env.local (or the deploy environment) and restart, then try again.",
      },
      { status: 500 },
    );
  }

  const res = await fetch(`${GRAPH_BASE}/${encodeURIComponent(phone_number_id)}`, {
    method: "POST",
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${session.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      webhook_configuration: {
        override_callback_uri: callback_url,
        verify_token,
      },
    }),
  });

  if (!res.ok) {
    const err = await parseErrorBody(res);
    return NextResponse.json(err, { status: res.status });
  }

  return NextResponse.json(await res.json());
}

export async function DELETE(req: Request) {
  const session = await getSession();
  if (!session.token) {
    return NextResponse.json({ title: "Unauthorized", detail: "No session" }, { status: 401 });
  }
  const { searchParams } = new URL(req.url);
  const phone_number_id = searchParams.get("phone_number_id");
  if (!phone_number_id) {
    return NextResponse.json({ title: "Bad request", detail: "phone_number_id required" }, { status: 400 });
  }

  const res = await fetch(`${GRAPH_BASE}/${encodeURIComponent(phone_number_id)}`, {
    method: "POST",
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${session.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ webhook_configuration: { override_callback_uri: "", verify_token: "" } }),
  });

  if (!res.ok) {
    const err = await parseErrorBody(res);
    return NextResponse.json(err, { status: res.status });
  }
  return NextResponse.json(await res.json());
}
