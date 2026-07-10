"use client";
import { use } from "react";
import Link from "next/link";
import { Plug, Plus } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/common/EmptyState";
import { ErrorState } from "@/components/common/ErrorState";
import { Skeleton } from "@/components/ui/skeleton";
import { useConnectors } from "@/lib/client/hooks/useConnectors";
import { ConnectorTemplatesDialog } from "@/components/connectors/ConnectorTemplatesDialog";

export default function ConnectorsPage({ params }: { params: Promise<{ entityId: string }> }) {
  const { entityId } = use(params);
  const { data, isLoading, error } = useConnectors(entityId);

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Connectors</h1>
          <p className="text-sm text-muted-foreground">External APIs and tools the agent can call.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <ConnectorTemplatesDialog entityId={entityId} />
          <Button asChild>
            <Link href={`/dashboard/${entityId}/connectors/new`}><Plus className="h-4 w-4" /> New connector</Link>
          </Button>
        </div>
      </div>
      {error && <ErrorState error={error} />}
      {isLoading ? (
        <div className="grid gap-3 md:grid-cols-2">{[0,1,2,3].map((i) => <Skeleton key={i} className="h-24" />)}</div>
      ) : data && data.length > 0 ? (
        <div className="grid gap-3 md:grid-cols-2">
          {data.map((c) => (
            <Link key={c.id} href={`/dashboard/${entityId}/connectors/${c.id}`}>
              <Card className="h-full transition-colors hover:bg-muted/40">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm">{c.name}</CardTitle>
                    <Badge variant={c.connection_status?.status === "CONNECTED" ? "success" : c.connection_status?.status === "ERROR" ? "destructive" : "secondary"}>
                      {c.connection_status?.status ?? "UNKNOWN"}
                    </Badge>
                  </div>
                  <CardDescription className="line-clamp-2">{c.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="truncate font-mono text-xs text-muted-foreground">{c.base_url}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Auth: {c.auth_type}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<Plug className="h-8 w-8" />}
          title="No connectors yet"
          description="Register an external API so the agent can look things up or take actions."
          action={<Button asChild><Link href={`/dashboard/${entityId}/connectors/new`}><Plus className="h-4 w-4" /> New connector</Link></Button>}
        />
      )}
    </div>
  );
}
