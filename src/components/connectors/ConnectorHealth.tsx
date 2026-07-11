"use client";
import { useMemo } from "react";
import { AlertCircle, Activity, CheckCircle2, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/common/EmptyState";
import { ErrorState } from "@/components/common/ErrorState";
import { useConnectorLogs } from "@/lib/client/hooks/useConnectors";
import type { ConnectorFailurePattern, ConnectorLogsResponse } from "@/types/connector-logs";

interface Props {
  entityId: string;
  connectorId: string;
}

const LOOKBACK_SECONDS = 24 * 60 * 60;

export function ConnectorHealth({ entityId, connectorId }: Props) {
  // Bucket the window to the current hour boundary so the params object is
  // stable within an hour of use; a fresh Date.now() every render made
  // TanStack Query treat the params as a new key and refetch on any parent
  // rerender.
  const params = useMemo(() => {
    const now = Math.floor(Date.now() / 1000);
    const bucket = now - (now % 3600);
    return {
      start_time: String(bucket - LOOKBACK_SECONDS),
      end_time: String(bucket),
      include_stats: "true",
      summary_only: "true",
      top_n: "5",
    };
  }, [entityId, connectorId]);
  const query = useConnectorLogs(entityId, connectorId, params);

  const resp = query.data as ConnectorLogsResponse<ConnectorFailurePattern> | undefined;
  const stats = resp?.stats;
  const patterns = resp?.data ?? [];

  const successRatePct = useMemo(() => {
    if (!stats || stats.start_count === 0) return null;
    return (stats.success_rate ?? stats.success_count / stats.start_count) * 100;
  }, [stats]);

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <CardTitle className="flex items-center gap-2 text-sm">
              <Activity className="h-4 w-4" /> Health · last 24h
            </CardTitle>
            <CardDescription>Aggregated from Meta&apos;s connector logs.</CardDescription>
          </div>
          {stats && (
            <Badge variant="outline" className="text-[10px]">
              Window: {Math.round((stats.time_window_seconds ?? 0) / 3600)}h
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {query.isLoading && (
          <div className="grid gap-2 sm:grid-cols-4">
            {[0, 1, 2, 3].map((i) => <Skeleton key={i} className="h-16" />)}
          </div>
        )}
        {query.error && <ErrorState error={query.error} />}
        {!query.isLoading && !query.error && !stats && (
          <EmptyState
            icon={<Activity className="h-6 w-6" />}
            title="No activity in the last 24h"
            description="Once the agent invokes tools on this connector, health stats appear here."
          />
        )}

        {stats && (
          <div className="grid gap-2 sm:grid-cols-4">
            <Stat
              label="Success rate"
              value={successRatePct == null ? "—" : `${successRatePct.toFixed(1)}%`}
              tone={successRatePct == null ? "muted" : successRatePct >= 99 ? "good" : successRatePct >= 90 ? "warn" : "bad"}
              icon={<CheckCircle2 className="h-3.5 w-3.5" />}
            />
            <Stat
              label="Calls"
              value={stats.start_count.toLocaleString()}
              tone="muted"
              icon={<Activity className="h-3.5 w-3.5" />}
            />
            <Stat
              label="p95 latency"
              value={formatLatency(stats.p95_latency_s)}
              tone={stats.p95_latency_s > 3 ? "warn" : "muted"}
              icon={<Clock className="h-3.5 w-3.5" />}
            />
            <Stat
              label="Failures"
              value={stats.exception_count.toLocaleString()}
              tone={stats.exception_count > 0 ? "bad" : "muted"}
              icon={<AlertCircle className="h-3.5 w-3.5" />}
            />
          </div>
        )}

        {patterns.length > 0 && (
          <div>
            <div className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Top failure patterns
            </div>
            <div className="space-y-1">
              {patterns.map((p, i) => (
                <div key={i} className="flex items-start gap-3 rounded-md border p-2 text-xs">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-destructive/10 text-destructive">
                    {p.occurrence_count ?? "?"}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      {p.tool_name && <Badge variant="outline" className="font-mono text-[10px]">{p.tool_name}</Badge>}
                      {p.http_status && <Badge variant="secondary" className="text-[10px]">HTTP {p.http_status}</Badge>}
                      {p.error_type && <span className="font-medium">{p.error_type}</span>}
                    </div>
                    {p.error_message && (
                      <div className="mt-1 line-clamp-2 text-muted-foreground">{p.error_message}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function Stat({
  label,
  value,
  tone,
  icon,
}: {
  label: string;
  value: string;
  tone: "good" | "warn" | "bad" | "muted";
  icon: React.ReactNode;
}) {
  const toneClass =
    tone === "good"
      ? "text-emerald-600 dark:text-emerald-400"
      : tone === "warn"
        ? "text-amber-600 dark:text-amber-400"
        : tone === "bad"
          ? "text-destructive"
          : "text-muted-foreground";
  return (
    <div className="rounded-md border p-3">
      <div className={"flex items-center gap-1 text-xs " + toneClass}>
        {icon} {label}
      </div>
      <div className={"mt-1 text-xl font-semibold " + toneClass}>{value}</div>
    </div>
  );
}

function formatLatency(seconds: number | undefined): string {
  if (seconds == null) return "—";
  if (seconds < 1) return `${(seconds * 1000).toFixed(0)}ms`;
  return `${seconds.toFixed(2)}s`;
}
