import * as React from "react";
import { Header } from "@/components/shell/Header";
import { Sidebar } from "@/components/shell/Sidebar";
import { Breadcrumbs } from "@/components/shell/Breadcrumbs";
import { ReadOnlyBanner } from "@/components/shell/ReadOnlyBanner";
import { TosGateBanner } from "@/components/shell/TosGateBanner";

interface AppShellProps {
  entityId?: string;
  user?: { id?: string; name?: string };
  children: React.ReactNode;
}

export function AppShell({ entityId, user, children }: AppShellProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      {entityId && <Sidebar entityId={entityId} />}
      <div className="flex min-w-0 flex-1 flex-col">
        <Header user={user} entityId={entityId} />
        <ReadOnlyBanner />
        {entityId && <TosGateBanner entityId={entityId} />}
        <Breadcrumbs />
        <main className="flex-1 min-w-0 overflow-y-auto px-6 pb-10">{children}</main>
      </div>
    </div>
  );
}
