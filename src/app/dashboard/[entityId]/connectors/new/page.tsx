"use client";
import { use } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ConnectorForm } from "@/components/connectors/ConnectorForm";
import { ErrorState } from "@/components/common/ErrorState";
import { useCreateConnector } from "@/lib/client/hooks/useConnectors";

export default function NewConnectorPage({ params }: { params: Promise<{ entityId: string }> }) {
  const { entityId } = use(params);
  const router = useRouter();
  const create = useCreateConnector(entityId);
  return (
    <div className="mx-auto max-w-3xl py-4">
      <h1 className="mb-4 text-2xl font-semibold">New connector</h1>
      {create.error && <ErrorState error={create.error} />}
      <ConnectorForm
        loading={create.isPending}
        submitLabel="Create connector"
        onSubmit={async (values) => {
          try {
            const created = await create.mutateAsync(values);
            toast.success("Connector created");
            router.push(`/dashboard/${entityId}/connectors/${created.id}`);
          } catch { /* shown above */ }
        }}
      />
    </div>
  );
}
