import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { parseErrorBody } from "@/lib/api/errors";
import { env } from "@/lib/env";

export const runtime = "nodejs";

// The phone-scoped webhook override endpoint is documented against v23.0.
// We reuse env.GRAPH_API_BASE so operators can still override the host, but
// pin the version to v23.0 for this specific route.
const GRAPH_BASE = env.GRAPH_API_BASE.replace(/v\d+\.\d+$/, "v23.0");

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

  // Meta's canonical clear for the phone-scoped webhook override is a null
  // webhook_configuration. If Meta ever rejects the null payload, retry with
  // the documented "empty fields" fallback so operators still have a way to
  // detach the override.
  async function callWithBody(payload: unknown): Promise<Response> {
    return fetch(`${GRAPH_BASE}/${encodeURIComponent(phone_number_id!)}`, {
      method: "POST",
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${session.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  }

  let res = await callWithBody({ webhook_configuration: null });
  if (res.status === 400) {
    res = await callWithBody({
      webhook_configuration: { override_callback_uri: "", verify_token: "" },
    });
  }

  if (!res.ok) {
    const err = await parseErrorBody(res);
    return NextResponse.json(err, { status: res.status });
  }
  return NextResponse.json(await res.json());
}
