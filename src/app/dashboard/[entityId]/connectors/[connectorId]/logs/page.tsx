"use client";
import { use, useMemo, useState } from "react";
import { Loader2, ScrollText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/common/FormField";
import { ErrorState } from "@/components/common/ErrorState";
import { JsonViewer } from "@/components/common/JsonViewer";
import { useConnectorLogs } from "@/lib/client/hooks/useConnectors";

export default function ConnectorLogsPage({ params }: { params: Promise<{ entityId: string; connectorId: string }> }) {
  const { entityId, connectorId } = use(params);
  const [filters, setFilters] = useState({ start_time: "", end_time: "", tool_id: "", limit: "50", top_n: "10" });
  const queryParams = useMemo(
    () => ({ ...filters, include_stats: "true", summary_only: "false" }),
    [filters],
  );
  const query = useConnectorLogs(entityId, connectorId, queryParams);

  return (
    <div className="mx-auto max-w-4xl space-y-4 py-4">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-semibold"><ScrollText className="h-5 w-5" /> Connector logs</h1>
      </div>
      <Card>
        <CardHeader><CardTitle>Filters</CardTitle></CardHeader>
        <CardContent className="grid grid-cols-2 gap-3 md:grid-cols-5">
          <Field label="Start time (unix)">
            <Input value={filters.start_time} onChange={(e) => setFilters({ ...filters, start_time: e.target.value })} />
          </Field>
          <Field label="End time (unix)">
            <Input value={filters.end_time} onChange={(e) => setFilters({ ...filters, end_time: e.target.value })} />
          </Field>
          <Field label="Tool ID">
            <Input value={filters.tool_id} onChange={(e) => setFilters({ ...filters, tool_id: e.target.value })} />
          </Field>
          <Field label="Limit">
            <Input value={filters.limit} onChange={(e) => setFilters({ ...filters, limit: e.target.value })} />
          </Field>
          <Field label="Top N">
            <Input value={filters.top_n} onChange={(e) => setFilters({ ...filters, top_n: e.target.value })} />
          </Field>
          <div className="col-span-2 flex items-end md:col-span-5">
            <Button onClick={() => query.refetch()} variant="outline">Refresh</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Results</CardTitle></CardHeader>
        <CardContent>
          {query.isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
          {query.error && <ErrorState error={query.error} />}
          {query.data !== undefined && <JsonViewer data={query.data} />}
        </CardContent>
      </Card>
    </div>
  );
}
