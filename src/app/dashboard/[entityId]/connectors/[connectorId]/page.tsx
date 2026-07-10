"use client";
import { use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { KeyRound, Loader2, ScrollText, Trash2, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { ConnectorForm } from "@/components/connectors/ConnectorForm";
import { ErrorState } from "@/components/common/ErrorState";
import { useConnector, useDeleteConnector, useUpdateConnector } from "@/lib/client/hooks/useConnectors";
import type { ConnectorInput } from "@/lib/schemas/connector";

export default function ConnectorDetailPage({ params }: { params: Promise<{ entityId: string; connectorId: string }> }) {
  const { entityId, connectorId } = use(params);
  const router = useRouter();
  const { data, isLoading, error } = useConnector(entityId, connectorId);
  const update = useUpdateConnector(entityId, connectorId);
  const del = useDeleteConnector(entityId);

  if (isLoading) return <Loader2 className="mt-8 h-4 w-4 animate-spin" />;
  if (error) return <ErrorState error={error} />;
  if (!data) return null;

  return (
    <div className="mx-auto max-w-3xl space-y-6 py-4">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold">{data.name}</h1>
          <p className="text-sm text-muted-foreground">{data.description}</p>
          <div className="mt-2 flex gap-2">
            <Badge variant={data.connection_status?.status === "CONNECTED" ? "success" : "secondary"}>
              {data.connection_status?.status ?? "UNKNOWN"}
            </Badge>
            <Badge variant="outline">{data.auth_type}</Badge>
          </div>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline"><Link href={`/dashboard/${entityId}/connectors/${connectorId}/tools`}><Wrench className="h-4 w-4" /> Tools</Link></Button>
          <Button asChild variant="outline"><Link href={`/dashboard/${entityId}/connectors/${connectorId}/auth`}><KeyRound className="h-4 w-4" /> Credentials</Link></Button>
          <Button asChild variant="outline"><Link href={`/dashboard/${entityId}/connectors/${connectorId}/logs`}><ScrollText className="h-4 w-4" /> Logs</Link></Button>
          <ConfirmDialog
            trigger={<Button variant="outline"><Trash2 className="h-4 w-4" /></Button>}
            title="Delete connector?"
            description="This removes the connector and all its tools."
            confirmLabel="Delete"
            onConfirm={async () => {
              try {
                await del.mutateAsync(connectorId);
                toast.success("Deleted");
                router.push(`/dashboard/${entityId}/connectors`);
              } catch { toast.error("Delete failed"); }
            }}
          />
        </div>
      </div>
      {data.connection_status?.error_message && (
        <Card><CardHeader><CardTitle className="text-sm text-destructive">Connection error</CardTitle></CardHeader>
          <CardContent><p className="text-sm">{data.connection_status.error_message}</p></CardContent>
        </Card>
      )}
      {update.error && <ErrorState error={update.error} />}
      <ConnectorForm
        initial={data as unknown as ConnectorInput}
        loading={update.isPending}
        submitLabel="Save changes"
        onSubmit={async (values) => {
          try { await update.mutateAsync(values); toast.success("Saved"); } catch { /* shown */ }
        }}
      />
    </div>
  );
}
