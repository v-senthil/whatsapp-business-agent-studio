"use client";
import { AlertCircle, CheckCircle2, Clock, Loader2, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useAgentEventStatus } from "@/lib/client/hooks/useAgentEvent";
import type { AgentEventStatus } from "@/types/agent-event";

const VARIANT: Record<AgentEventStatus, { variant: "secondary" | "success" | "destructive" | "warning"; icon: React.ComponentType<{ className?: string }> }> = {
  request_received: { variant: "secondary", icon: Clock },
  processing: { variant: "secondary", icon: Loader2 },
  sent: { variant: "secondary", icon: CheckCircle2 },
  success: { variant: "success", icon: CheckCircle2 },
  failed: { variant: "destructive", icon: XCircle },
  skipped: { variant: "warning", icon: AlertCircle },
};

interface Props {
  entityId: string;
  eventId: string;
  submittedType: string;
  submittedTo: string;
}

export function AgentEventRow({ entityId, eventId, submittedType, submittedTo }: Props) {
  const q = useAgentEventStatus(entityId, eventId);
  const status = q.data?.status;
  const meta = status ? VARIANT[status] : { variant: "secondary" as const, icon: Clock };
  const Icon = meta.icon;
  const spinning = status === "processing" || status === "request_received" || q.isPending;

  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <div className="truncate text-sm font-medium">{submittedType}</div>
            <span className="text-xs text-muted-foreground">→ {submittedTo}</span>
          </div>
          <div className="truncate text-xs text-muted-foreground font-mono" title={eventId}>{eventId}</div>
          {q.data?.error_message && <p className="mt-1 text-xs text-destructive">{q.data.error_message}</p>}
          {q.data?.skipped_reason && <p className="mt-1 text-xs text-amber-600 dark:text-amber-400">{q.data.skipped_reason}</p>}
        </div>
        <Badge variant={meta.variant} className="shrink-0 gap-1">
          <Icon className={"h-3 w-3 " + (spinning ? "animate-spin" : "")} />
          {status ?? "loading"}
        </Badge>
      </CardContent>
    </Card>
  );
}
