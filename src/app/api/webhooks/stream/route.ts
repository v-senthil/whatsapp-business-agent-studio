import { getSession } from "@/lib/session";
import { listEvents, subscribe, type WebhookRecord } from "@/lib/webhook-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const session = await getSession();
  if (!session.token) {
    return new Response("Unauthorized", { status: 401 });
  }
  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      function send(event: string, data: unknown) {
        controller.enqueue(encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`));
      }
      // Initial snapshot
      send("snapshot", listEvents(50));
      const unsub = subscribe((record: WebhookRecord) => send("event", record));
      const heartbeat = setInterval(() => controller.enqueue(encoder.encode(": ping\n\n")), 25_000);
      const cleanup = () => {
        clearInterval(heartbeat);
        unsub();
        try { controller.close(); } catch { /* already closed */ }
      };
      // Cleanup when the client disconnects
      (controller as unknown as { signal?: AbortSignal }).signal?.addEventListener?.("abort", cleanup);
    },
  });
  return new Response(stream, {
    headers: {
      "content-type": "text/event-stream",
      "cache-control": "no-cache, no-transform",
      connection: "keep-alive",
      "x-accel-buffering": "no",
    },
  });
}
