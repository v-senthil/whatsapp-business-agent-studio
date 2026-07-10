"use client";
import { use } from "react";
import Link from "next/link";
import { Plus, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/common/EmptyState";
import { ErrorState } from "@/components/common/ErrorState";
import { Skeleton } from "@/components/ui/skeleton";
import { useTools } from "@/lib/client/hooks/useConnectors";

export default function ToolsPage({ params }: { params: Promise<{ entityId: string; connectorId: string }> }) {
  const { entityId, connectorId } = use(params);
  const { data, isLoading, error } = useTools(entityId, connectorId);
  return (
    <div className="mx-auto max-w-4xl space-y-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Tools</h1>
          <p className="text-sm text-muted-foreground">Endpoints inside this connector the agent can call.</p>
        </div>
        <Button asChild><Link href={`/dashboard/${entityId}/connectors/${connectorId}/tools/new`}><Plus className="h-4 w-4" /> New tool</Link></Button>
      </div>
      {error && <ErrorState error={error} />}
      {isLoading ? (
        <div className="grid gap-3 md:grid-cols-2">{[0,1,2].map((i) => <Skeleton key={i} className="h-24" />)}</div>
      ) : data && data.length > 0 ? (
        <div className="grid gap-3 md:grid-cols-2">
          {data.map((t) => (
            <Link key={t.id} href={`/dashboard/${entityId}/connectors/${connectorId}/tools/${t.id}`}>
              <Card className="h-full transition-colors hover:bg-muted/40">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-mono">{t.name}</CardTitle>
                    <Badge variant="outline">{t.request_definition?.method}</Badge>
                  </div>
                  <CardDescription className="line-clamp-2">{t.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <code className="text-xs text-muted-foreground">{t.request_definition?.path}</code>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <EmptyState icon={<Wrench className="h-8 w-8" />} title="No tools yet" description="Register an API endpoint the agent can invoke." />
      )}
    </div>
  );
}
