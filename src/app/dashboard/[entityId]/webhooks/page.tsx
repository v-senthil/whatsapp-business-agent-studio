"use client";
import { use, useEffect, useMemo, useState } from "react";
import { AlertTriangle, RadioTower, Search, ShieldCheck, ShieldX, Smartphone, X } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { EmptyState } from "@/components/common/EmptyState";
import { JsonViewer } from "@/components/common/JsonViewer";
import { ConfigureWebhookDialog } from "@/components/webhooks/ConfigureWebhookDialog";

interface WebhookRecord {
  id: string;
  received_at: number;
  signature_ok: boolean;
  body: unknown;
  headers: Record<string, string>;
}

type SignatureFilter = "all" | "signed" | "unverified";

export default function WebhooksPage({ params }: { params: Promise<{ entityId: string }> }) {
  const { entityId } = use(params);
  const [events, setEvents] = useState<WebhookRecord[]>([]);
  const [connected, setConnected] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [signatureFilter, setSignatureFilter] = useState<SignatureFilter>("all");
  const [thisPhoneOnly, setThisPhoneOnly] = useState(true);

  useEffect(() => {
    const es = new EventSource("/api/webhooks/stream");
    es.addEventListener("open", () => setConnected(true));
    es.addEventListener("snapshot", (e) => {
      try { setEvents(JSON.parse((e as MessageEvent).data)); } catch {}
    });
    es.addEventListener("event", (e) => {
      try {
        const record = JSON.parse((e as MessageEvent).data) as WebhookRecord;
        // The snapshot and the live push can overlap during connect, so dedupe
        // by id when prepending; otherwise a burst-then-connect shows dupes.
        setEvents((prev) => (prev.some((x) => x.id === record.id) ? prev : [record, ...prev].slice(0, 200)));
      } catch {}
    });
    es.addEventListener("error", () => setConnected(false));
    return () => es.close();
  }, []);

  const otherPhoneCount = useMemo(
    () =>
      events.filter((e) => {
        const ids = extractPhoneNumberIds(e.body);
        return ids.length > 0 && !ids.includes(entityId);
      }).length,
    [events, entityId],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return events.filter((e) => {
      if (signatureFilter === "signed" && !e.signature_ok) return false;
      if (signatureFilter === "unverified" && e.signature_ok) return false;
      if (thisPhoneOnly) {
        const ids = extractPhoneNumberIds(e.body);
        // Only filter out events that clearly belong to a different phone.
        // Events without a phone_number_id (test payloads, non-message events)
        // pass through so they remain visible.
        if (ids.length > 0 && !ids.includes(entityId)) return false;
      }
      if (!q) return true;
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
  }, [events, query, signatureFilter, thisPhoneOnly, entityId]);

  const filterActive = query.trim() !== "" || signatureFilter !== "all" || !thisPhoneOnly;

  return (
    <div className="mx-auto max-w-4xl space-y-6 py-4">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h1 className="flex items-center gap-2 text-2xl font-semibold">
            <RadioTower className="h-5 w-5" /> Webhooks
          </h1>
          <p className="text-sm text-muted-foreground">
            Live stream of events sent by Meta for phone{" "}
            <code className="font-mono text-xs">{entityId}</code>.
          </p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <ConfigureWebhookDialog entityId={entityId} />
          <p className="max-w-[240px] text-right text-[11px] text-muted-foreground">
            Point this phone at your callback URL. Useful when several phones share one Meta app.
          </p>
        </div>
      </div>

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
        <button
          type="button"
          onClick={() => setThisPhoneOnly((v) => !v)}
          className={
            "inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs " +
            (thisPhoneOnly
              ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
              : "border-border text-muted-foreground hover:text-foreground")
          }
          title="Only show events for the current phone number"
        >
          <Smartphone className="h-3 w-3" />
          This phone only
        </button>
        {filterActive && (
          <Button variant="ghost" size="sm" onClick={() => { setQuery(""); setSignatureFilter("all"); setThisPhoneOnly(true); }}>
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
        {thisPhoneOnly && otherPhoneCount > 0 ? (
          <button
            type="button"
            onClick={() => setThisPhoneOnly(false)}
            className="text-xs text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
          >
            +{otherPhoneCount} for other phone{otherPhoneCount === 1 ? "" : "s"}
          </button>
        ) : null}
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
                      {(() => {
                        const ids = extractPhoneNumberIds(e.body);
                        if (ids.length === 0) return null;
                        const isThisPhone = ids.includes(entityId);
                        return (
                          <span className={isThisPhone ? "ml-2 text-muted-foreground" : "ml-2 text-amber-600 dark:text-amber-400"}>
                            {" · "}
                            {ids.join(", ")}
                            {!isThisPhone ? " (other phone)" : ""}
                          </span>
                        );
                      })()}
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

function extractPhoneNumberIds(body: unknown): string[] {
  if (!body || typeof body !== "object") return [];
  const obj = body as {
    entry?: Array<{
      changes?: Array<{ value?: { metadata?: { phone_number_id?: string } } }>;
    }>;
  };
  const ids = new Set<string>();
  for (const entry of obj.entry ?? []) {
    for (const change of entry.changes ?? []) {
      const id = change?.value?.metadata?.phone_number_id;
      if (id) ids.add(id);
    }
  }
  return Array.from(ids);
}
