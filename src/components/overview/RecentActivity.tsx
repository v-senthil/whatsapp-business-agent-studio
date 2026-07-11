"use client";
import * as React from "react";
import { formatDistanceToNow } from "@/lib/utils/time";
import { Activity, Trash2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/common/EmptyState";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { clear, list, subscribe, type ActivityEntry } from "@/lib/client/activity-log";
import { toast } from "sonner";

interface Props { entityId: string }

const LIMIT = 15;

export function RecentActivity({ entityId }: Props) {
  const [entries, setEntries] = React.useState<ActivityEntry[]>([]);

  React.useEffect(() => {
    setEntries(list(entityId));
    return subscribe(entityId, () => setEntries(list(entityId)));
  }, [entityId]);

  if (entries.length === 0) {
    return null;
  }

  const visible = entries.slice(0, LIMIT);
  const more = entries.length - visible.length;

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-3">
        <div>
          <CardTitle className="flex items-center gap-2 text-sm">
            <Activity className="h-4 w-4" /> Recent activity
          </CardTitle>
          <CardDescription>Config changes made from this browser.</CardDescription>
        </div>
        <ConfirmDialog
          trigger={
            <Button variant="ghost" size="sm">
              <Trash2 className="h-3.5 w-3.5" /> Clear
            </Button>
          }
          title="Clear activity log?"
          description="Removes the local record of recent changes for this phone number. Does not touch the actual configuration on Meta."
          confirmLabel="Clear"
          onConfirm={() => { clear(entityId); toast.success("Activity log cleared"); }}
        />
      </CardHeader>
      <CardContent className="space-y-1">
        {visible.map((e) => (
          <div key={e.id} className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted/40">
            <Badge variant="outline" className="shrink-0 text-[10px]">{e.action}</Badge>
            <span className="min-w-0 truncate">
              <span className="font-medium">{e.resource}</span>
              {e.detail && <span className="text-muted-foreground">{" · "}{e.detail}</span>}
            </span>
            <span className="ml-auto shrink-0 text-xs text-muted-foreground" title={new Date(e.ts).toLocaleString()}>
              {formatDistanceToNow(e.ts)}
            </span>
          </div>
        ))}
        {more > 0 && (
          <div className="pt-1 text-center text-xs text-muted-foreground">
            {more} older {more === 1 ? "entry" : "entries"} in storage
          </div>
        )}
        {entries.length === 0 && (
          <EmptyState
            icon={<Activity className="h-6 w-6" />}
            title="No activity yet"
            description="Once you make a change, it'll show up here."
          />
        )}
      </CardContent>
    </Card>
  );
}
