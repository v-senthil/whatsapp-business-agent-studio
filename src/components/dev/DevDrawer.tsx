"use client";
import * as React from "react";
import { useSearchParams } from "next/navigation";
import { AlertCircle, CheckCircle2, ChevronRight, Copy, Terminal, Trash2, X } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { JsonViewer } from "@/components/common/JsonViewer";
import { cn } from "@/lib/utils/cn";
import { clear, snapshot, subscribe, toCurl, type ApiCall } from "@/lib/client/api-log";
import {
  getDevDrawerOpen,
  setDevDrawerOpen,
  subscribeDevDrawer,
  toggleDevDrawer,
} from "@/lib/client/dev-drawer";

export function DevDrawer() {
  const search = useSearchParams();
  const forceOpen = search?.get("debug") === "1";
  const [open, setOpenState] = React.useState<boolean>(() => forceOpen || getDevDrawerOpen());
  const [calls, setCalls] = React.useState<ApiCall[]>(() => snapshot());
  const [selected, setSelected] = React.useState<string | null>(null);

  React.useEffect(() => {
    return subscribe(() => setCalls(snapshot()));
  }, []);

  // Sync the local `open` with the module-level store so the Header settings
  // menu (or anywhere else that calls `toggleDevDrawer()`) can flip it.
  React.useEffect(() => {
    if (forceOpen) setDevDrawerOpen(true);
    return subscribeDevDrawer((v) => setOpenState(v));
  }, [forceOpen]);

  const setOpen = React.useCallback((next: boolean | ((v: boolean) => boolean)) => {
    const value = typeof next === "function" ? (next as (v: boolean) => boolean)(open) : next;
    setDevDrawerOpen(value);
  }, [open]);

  // Keyboard shortcut: Cmd+Shift+D (or Ctrl+Shift+D) toggles the drawer.
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && (e.key === "d" || e.key === "D")) {
        e.preventDefault();
        toggleDevDrawer();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const selectedCall = calls.find((c) => c.id === selected) ?? calls[0];

  return (
    <>
      {/* Floating toggle */}
      <Button
        variant="outline"
        size="icon"
        aria-label="Toggle dev drawer"
        className="fixed bottom-4 right-4 z-40 h-9 w-9 rounded-full shadow-lg"
        onClick={() => setOpen((v) => !v)}
      >
        <Terminal className="h-4 w-4" />
      </Button>

      {open && (
        <div
          className="fixed inset-y-0 right-0 z-50 flex w-full max-w-3xl flex-col border-l bg-background shadow-2xl md:w-[min(48rem,66vw)]"
          role="dialog"
          aria-label="Dev drawer"
        >
          <div className="flex h-11 shrink-0 items-center gap-2 border-b px-3">
            <Terminal className="h-4 w-4 text-muted-foreground" />
            <div className="text-sm font-medium">Dev drawer</div>
            <Badge variant="secondary" className="text-xs">{calls.length} calls</Badge>
            <div className="ml-auto flex gap-1">
              <Button variant="ghost" size="sm" onClick={() => { clear(); setSelected(null); }}>
                <Trash2 className="h-3.5 w-3.5" /> Clear
              </Button>
              <Button variant="ghost" size="icon" aria-label="Close" onClick={() => setOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex min-h-0 flex-1">
            {/* Call list */}
            <ScrollArea className="w-72 shrink-0 border-r">
              {calls.length === 0 ? (
                <div className="p-6 text-center text-xs text-muted-foreground">
                  No API calls yet. Do something in the app.
                </div>
              ) : (
                <ul>
                  {calls.map((c) => {
                    const isSelected = c.id === (selected ?? calls[0]?.id);
                    return (
                      <li key={c.id}>
                        <button
                          type="button"
                          onClick={() => setSelected(c.id)}
                          className={cn(
                            "w-full border-b px-3 py-2 text-left text-xs transition-colors hover:bg-muted/40",
                            isSelected && "bg-muted/60",
                          )}
                        >
                          <div className="flex items-center gap-1.5">
                            <StatusDot call={c} />
                            <span className="font-mono font-medium">{c.method}</span>
                            <span className="ml-auto text-muted-foreground">
                              {c.status ?? "…"}{c.duration_ms != null ? ` · ${c.duration_ms}ms` : ""}
                            </span>
                          </div>
                          <div className="mt-1 truncate font-mono text-muted-foreground" title={c.url}>
                            {c.url}
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </ScrollArea>

            {/* Detail */}
            <div className="min-w-0 flex-1 overflow-hidden">
              {selectedCall ? <CallDetail call={selectedCall} /> : (
                <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                  Select a call.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function StatusDot({ call }: { call: ApiCall }) {
  if (call.duration_ms == null) return <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted-foreground" />;
  if (call.ok) return <CheckCircle2 className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />;
  return <AlertCircle className="h-3 w-3 text-destructive" />;
}

function CallDetail({ call }: { call: ApiCall }) {
  function copyCurl() {
    const curl = toCurl(call);
    navigator.clipboard.writeText(curl).then(
      () => toast.success("cURL copied"),
      () => toast.error("Copy failed"),
    );
  }
  return (
    <ScrollArea className="h-full">
      <div className="space-y-4 p-4">
        <div>
          <div className="flex items-center gap-2 text-sm">
            <Badge variant="outline" className="font-mono">{call.method}</Badge>
            <StatusDot call={call} />
            <span className="text-muted-foreground">{call.status ?? "in flight"} · {call.duration_ms ?? "—"}ms</span>
            <span className="ml-auto text-xs text-muted-foreground">{new Date(call.ts).toLocaleTimeString()}</span>
          </div>
          <div className="mt-2 break-all font-mono text-xs">{call.url}</div>
        </div>

        <Button variant="outline" size="sm" onClick={copyCurl}>
          <Copy className="h-3.5 w-3.5" /> Copy as cURL
        </Button>

        <Section label="Request headers">
          <JsonViewer data={call.requestHeaders} />
        </Section>

        {call.requestBody !== undefined && (
          <Section label="Request body">
            <JsonViewer data={call.requestBody} />
          </Section>
        )}

        {call.responseBody !== undefined && (
          <Section label="Response body">
            <JsonViewer data={call.responseBody} />
          </Section>
        )}

        {call.error && (
          <Section label="Error">
            <div className="rounded-md border border-destructive/40 bg-destructive/10 p-2 text-xs">
              <div className="font-medium">{call.error.title}</div>
              <div className="mt-1 text-muted-foreground">{call.error.detail}</div>
            </div>
          </Section>
        )}
      </div>
    </ScrollArea>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-1 flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        <ChevronRight className="h-3 w-3" /> {label}
      </div>
      {children}
    </div>
  );
}
