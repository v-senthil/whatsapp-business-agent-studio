import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { AppShell } from "@/components/shell/AppShell";
import { EntityGate } from "@/components/shell/EntityGate";
import { EntityProvider } from "@/components/providers/EntityProvider";

export default async function EntityLayout({
  params,
  children,
}: {
  params: Promise<{ entityId: string }>;
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session.token) redirect("/login");
  const { entityId } = await params;
  return (
    <EntityProvider entityId={entityId}>
      <AppShell entityId={entityId} user={{ id: session.userId, name: session.userName }}>
        <EntityGate entityId={entityId}>{children}</EntityGate>
      </AppShell>
    </EntityProvider>
  );
}
