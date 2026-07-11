import { getSession } from "@/lib/session";
import { listEvents, subscribe, eventMatchesPhone, filterForPhone, type WebhookRecord } from "@/lib/webhook-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const session = await getSession();
  if (!session.token) {
    return new Response("Unauthorized", { status: 401 });
  }
  const encoder = new TextEncoder();
  const phoneId = session.lastEntityId ?? "";

  // Shared teardown state. Set from either the runtime calling cancel() when
  // the client disconnects, or from a caught enqueue error when the controller
  // has already closed. Both paths converge on stopping the interval and the
  // subscription.
  let closed = false;
  let heartbeat: ReturnType<typeof setInterval> | null = null;
  let unsub: (() => void) | null = null;

  function teardown() {
    closed = true;
    if (heartbeat) {
      clearInterval(heartbeat);
      heartbeat = null;
    }
    if (unsub) {
      unsub();
      unsub = null;
    }
  }

  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      function safeEnqueue(chunk: Uint8Array): boolean {
        if (closed) return false;
        try {
          controller.enqueue(chunk);
          return true;
        } catch {
          // Controller is closed, client hung up. Clean up any lingering
          // resources so the interval does not keep firing.
          teardown();
          return false;
        }
      }
      function send(event: string, data: unknown) {
        safeEnqueue(encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`));
      }

      const snapshot = listEvents(50);
      const initial = phoneId ? filterForPhone(snapshot, phoneId) : snapshot;
      send("snapshot", initial);

      unsub = subscribe((record: WebhookRecord) => {
        if (phoneId && !eventMatchesPhone(record, phoneId)) return;
        send("event", record);
      });
      heartbeat = setInterval(() => {
        safeEnqueue(encoder.encode(": ping\n\n"));
      }, 25_000);
    },
    cancel() {
      teardown();
    },
  });

  return new Response(stream, {
    headers: {
      "content-type": "text/event-stream",
      "cache-control": "no-cache, no-transform",
      connection: "keep-alive",
      "x-accel-buffering": "no",
      "x-filtered-by-phone": phoneId || "none",
    },
  });
}
