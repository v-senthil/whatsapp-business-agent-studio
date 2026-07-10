"use client";
import { use } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { ConnectorForm } from "@/components/connectors/ConnectorForm";
import { ErrorState } from "@/components/common/ErrorState";
import { useCreateConnector } from "@/lib/client/hooks/useConnectors";
import { findConnectorTemplate } from "@/lib/connector-templates";

export default function NewConnectorPage({ params }: { params: Promise<{ entityId: string }> }) {
  const { entityId } = use(params);
  const router = useRouter();
  const search = useSearchParams();
  const templateSlug = search.get("template") ?? undefined;
  const template = templateSlug ? findConnectorTemplate(templateSlug) : undefined;
  const create = useCreateConnector(entityId);

  return (
    <div className="mx-auto max-w-3xl py-4">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold">New connector</h1>
        {template && (
          <p className="mt-1 text-sm text-muted-foreground">
            Prefilled from the <strong>{template.label}</strong> template. Fill in credentials before saving.
          </p>
        )}
      </div>
      {create.error && <ErrorState error={create.error} />}
      <ConnectorForm
        initial={template?.input}
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
