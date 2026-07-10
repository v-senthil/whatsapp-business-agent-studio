"use client";
import { use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToolForm, toolFromApi, toolToApi } from "@/components/tools/ToolForm";
import { ErrorState } from "@/components/common/ErrorState";
import { useDeleteTool, useTool, useUpdateTool } from "@/lib/client/hooks/useConnectors";

export default function EditToolPage({ params }: { params: Promise<{ entityId: string; connectorId: string; toolId: string }> }) {
  const { entityId, connectorId, toolId } = use(params);
  const router = useRouter();
  const query = useTool(entityId, connectorId, toolId);
  const update = useUpdateTool(entityId, connectorId, toolId);
  const del = useDeleteTool(entityId, connectorId);

  if (query.isLoading) return <Loader2 className="mt-8 h-4 w-4 animate-spin" />;
  if (query.error) return <ErrorState error={query.error} />;
  if (!query.data) return null;

  return (
    <div className="mx-auto max-w-5xl space-y-4 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Edit tool</h1>
        <Button asChild variant="outline">
          <Link href={`/dashboard/${entityId}/connectors/${connectorId}/tools/${toolId}/run`}>
            <Play className="h-4 w-4" /> Test run
          </Link>
        </Button>
      </div>
      {update.error && <ErrorState error={update.error} />}
      <ToolForm
        initial={toolFromApi(query.data)}
        loading={update.isPending}
        onSubmit={async (v) => { try { await update.mutateAsync(toolToApi(v)); toast.success("Saved"); } catch { /* shown */ } }}
        onDelete={async () => {
          try {
            await del.mutateAsync(toolId);
            toast.success("Deleted");
            router.push(`/dashboard/${entityId}/connectors/${connectorId}/tools`);
          } catch { toast.error("Delete failed"); }
        }}
      />
    </div>
  );
}
