"use client";
import * as React from "react";
import { ShieldAlert } from "lucide-react";
import { useEligibility } from "@/lib/client/hooks/useSettings";
import { isTosNotAccepted } from "@/lib/api/errors";
import { ErrorState } from "@/components/common/ErrorState";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  entityId: string;
  children: React.ReactNode;
}

/**
 * Runs `agent_eligibility` first and only renders children after that request
 * resolves successfully. Blocks the render tree while pending or on error so
 * downstream hooks (settings, skills, connectors, etc.) never fire for a
 * phone we do not yet know is usable.
 */
export function EntityGate({ entityId, children }: Props) {
  const eligibility = useEligibility(entityId);

  if (eligibility.isPending) {
    return (
      <div className="space-y-4 pt-8">
        <Skeleton className="h-8 w-72" />
        <Skeleton className="h-4 w-96" />
        <Skeleton className="h-40" />
        <div className="grid gap-4 md:grid-cols-2">
          <Skeleton className="h-24" />
          <Skeleton className="h-24" />
        </div>
      </div>
    );
  }

  if (eligibility.isError) {
    if (isTosNotAccepted(eligibility.error)) {
      // `<TosGateBanner>` already surfaces the block message and `<Sidebar>`
      // disables the per-entity nav. Just show a short placeholder in the
      // main content area so the user is not staring at a blank page.
      return (
        <div className="mx-auto max-w-xl pt-16 text-center">
          <ShieldAlert className="mx-auto h-10 w-10 text-amber-600" />
          <h2 className="mt-4 text-xl font-semibold">Waiting for terms acceptance</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The Meta Business Agent terms have not been accepted for this WABA yet. The banner
            above has a link back to Home where an admin can accept the terms.
          </p>
        </div>
      );
    }
    return (
      <div className="pt-6">
        <ErrorState error={eligibility.error} />
      </div>
    );
  }

  return <>{children}</>;
}
