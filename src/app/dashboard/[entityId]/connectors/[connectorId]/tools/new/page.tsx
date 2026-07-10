"use client";
import { use } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ToolForm, toolToApi } from "@/components/tools/ToolForm";
import { ErrorState } from "@/components/common/ErrorState";
import { useCreateTool } from "@/lib/client/hooks/useConnectors";

export default function NewToolPage({ params }: { params: Promise<{ entityId: string; connectorId: string }> }) {
  const { entityId, connectorId } = use(params);
  const router = useRouter();
  const create = useCreateTool(entityId, connectorId);
  return (
    <div className="mx-auto max-w-5xl py-4">
      <h1 className="mb-4 text-2xl font-semibold">New tool</h1>
      {create.error && <ErrorState error={create.error} />}
      <ToolForm
        loading={create.isPending}
        submitLabel="Create tool"
        onSubmit={async (values) => {
          try {
            const created = await create.mutateAsync(toolToApi(values));
            toast.success("Tool created");
            router.push(`/dashboard/${entityId}/connectors/${connectorId}/tools/${created.id}`);
          } catch { /* shown */ }
        }}
      />
    </div>
  );
}
