"use client";
import { use, useEffect, useMemo, useState } from "react";
import { AlertTriangle, RadioTower, Search, ShieldCheck, ShieldX, X } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { EmptyState } from "@/components/common/EmptyState";
import { JsonViewer } from "@/components/common/JsonViewer";

interface WebhookRecord {
  id: string;
  received_at: number;
  signature_ok: boolean;
  body: unknown;
  headers: Record<string, string>;
}

type SignatureFilter = "all" | "signed" | "unverified";

export default function WebhooksPage({ params }: { params: Promise<{ entityId: string }> }) {
  const { entityId: _entityId } = use(params);
  const [events, setEvents] = useState<WebhookRecord[]>([]);
  const [connected, setConnected] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [signatureFilter, setSignatureFilter] = useState<SignatureFilter>("all");

  useEffect(() => {
    const es = new EventSource("/api/webhooks/stream");
    es.addEventListener("open", () => setConnected(true));
    es.addEventListener("snapshot", (e) => {
      try { setEvents(JSON.parse((e as MessageEvent).data)); } catch {}
    });
    es.addEventListener("event", (e) => {
      try {
        const record = JSON.parse((e as MessageEvent).data) as WebhookRecord;
        setEvents((prev) => [record, ...prev].slice(0, 200));
      } catch {}
    });
    es.addEventListener("error", () => setConnected(false));
    return () => es.close();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return events.filter((e) => {
      if (signatureFilter === "signed" && !e.signature_ok) return false;
      if (signatureFilter === "unverified" && e.signature_ok) return false;
      if (!q) return true;
      // Search across summary, headers, and stringified body.
      const summary = summarize(e.body).toLowerCase();
      if (summary.includes(q)) return true;
      const headers = Object.entries(e.headers).some(([k, v]) => k.toLowerCase().includes(q) || v.toLowerCase().includes(q));
      if (headers) return true;
      try {
        return JSON.stringify(e.body).toLowerCase().includes(q);
      } catch {
        return false;
      }
    });
  }, [events, query, signatureFilter]);

  const filterActive = query.trim() !== "" || signatureFilter !== "all";

  return (
    <div className="mx-auto max-w-4xl space-y-6 py-4">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-semibold">
          <RadioTower className="h-5 w-5" /> Webhooks
        </h1>
        <p className="text-sm text-muted-foreground">
          Live stream of events sent by Meta to <code className="font-mono">POST /api/webhooks/meta</code>.
        </p>
      </div>

      <Alert>
        <AlertTitle>Configuration</AlertTitle>
        <AlertDescription>
          <div className="space-y-2 text-xs">
            <div>
              <strong>Callback URL</strong>:{" "}
              <code className="font-mono">https://your-host/api/webhooks/meta</code>
            </div>
            <div>
              <strong>Verify token</strong>: set <code className="font-mono">META_WEBHOOK_VERIFY_TOKEN</code> in <code>.env.local</code>. Meta will call GET on the callback URL with <code className="font-mono">hub.verify_token</code>.
            </div>
            <div>
              <strong>Signature</strong>: set <code className="font-mono">META_APP_SECRET</code> in <code>.env.local</code>. Events without a valid <code className="font-mono">X-Hub-Signature-256</code> are still recorded but marked as unverified.
            </div>
            <div className="text-muted-foreground">
              Note: this store is in-memory per Node process. On serverless deploys each cold start clears history.
            </div>
          </div>
        </AlertDescription>
      </Alert>

      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative min-w-[240px] flex-1">
          <Search className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input
            className="pl-7"
            placeholder="Search event field, header, or body..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="inline-flex rounded-md border bg-muted p-0.5 text-xs">
          {(["all", "signed", "unverified"] as const).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setSignatureFilter(v)}
              className={
                "rounded-sm px-2 py-1 capitalize " +
                (signatureFilter === v ? "bg-background text-foreground shadow" : "text-muted-foreground hover:text-foreground")
              }
            >
              {v}
            </button>
          ))}
        </div>
        {filterActive && (
          <Button variant="ghost" size="sm" onClick={() => { setQuery(""); setSignatureFilter("all"); }}>
            <X className="h-3 w-3" /> Clear
          </Button>
        )}
      </div>

      <div className="flex items-center gap-2 text-xs">
        <Badge variant={connected ? "success" : "secondary"} className="gap-1">
          <span className={"h-1.5 w-1.5 rounded-full " + (connected ? "bg-emerald-500" : "bg-muted-foreground")} />
          {connected ? "Streaming" : "Disconnected"}
        </Badge>
        <span className="text-muted-foreground">
          {filterActive
            ? `${filtered.length} of ${events.length} match${filtered.length === 1 ? "" : "es"}`
            : `${events.length} event${events.length === 1 ? "" : "s"}`}
        </span>
      </div>

      {events.length === 0 ? (
        <EmptyState
          icon={<RadioTower className="h-8 w-8" />}
          title="No events yet"
          description="Once Meta starts posting to your callback URL, events will appear here in real time."
        />
      ) : filtered.length === 0 ? (
        <EmptyState
          icon={<Search className="h-8 w-8" />}
          title="No matching events"
          description="Try clearing filters or widening the search."
        />
      ) : (
        <div className="space-y-2">
          {filtered.map((e) => {
            const isOpen = expandedId === e.id;
            return (
              <Card key={e.id}>
                <CardHeader
                  role="button"
                  tabIndex={0}
                  onClick={() => setExpandedId(isOpen ? null : e.id)}
                  onKeyDown={(k) => { if (k.key === "Enter" || k.key === " ") { k.preventDefault(); setExpandedId(isOpen ? null : e.id); } }}
                  className="cursor-pointer flex-row items-center justify-between space-y-0 pb-2"
                  aria-expanded={isOpen}
                >
                  <div className="min-w-0 flex-1">
                    <CardTitle className="text-sm">
                      {summarize(e.body)}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">
                      {new Date(e.received_at).toLocaleString()}
                    </p>
                  </div>
                  {e.signature_ok ? (
                    <Badge variant="success" className="gap-1">
                      <ShieldCheck className="h-3 w-3" /> Signed
                    </Badge>
                  ) : (
                    <Badge variant="warning" className="gap-1">
                      <ShieldX className="h-3 w-3" /> Unverified
                    </Badge>
                  )}
                </CardHeader>
                {isOpen && (
                  <CardContent className="space-y-3">
                    <div>
                      <div className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">Body</div>
                      <JsonViewer data={e.body} />
                    </div>
                    <div>
                      <div className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">Headers</div>
                      <JsonViewer data={e.headers} />
                    </div>
                    {!e.signature_ok && (
                      <Alert variant="warning">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle>Signature not verified</AlertTitle>
                        <AlertDescription>
                          Either <code className="font-mono">META_APP_SECRET</code> is unset or the received signature didn&apos;t match. Do not treat as trusted.
                        </AlertDescription>
                      </Alert>
                    )}
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}

function summarize(body: unknown): string {
  if (!body || typeof body !== "object") return "Event";
  const obj = body as { object?: string; entry?: Array<{ changes?: Array<{ field?: string }> }> };
  const object = obj.object ?? "event";
  const firstField = obj.entry?.[0]?.changes?.[0]?.field;
  return firstField ? `${object} · ${firstField}` : object;
}
