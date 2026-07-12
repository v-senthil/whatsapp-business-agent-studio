"use client";
import * as React from "react";
import Link from "next/link";
import { ExternalLink, ShieldAlert } from "lucide-react";
import { useEligibility } from "@/lib/client/hooks/useSettings";
import { useSession } from "@/lib/client/hooks/useSession";
import { usePhoneDetails } from "@/lib/client/hooks/useDiscovery";
import { isTosNotAccepted } from "@/lib/api/errors";
import { ErrorState } from "@/components/common/ErrorState";
import { Button } from "@/components/ui/button";
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
function metaEnableUrl(businessId?: string | null, wabaId?: string | null) {
  if (!businessId || !wabaId) return null;
  const params = new URLSearchParams({ business_id: businessId, asset_id: wabaId });
  return `https://business.facebook.com/latest/whatsapp_manager/business_ai?${params.toString()}`;
}

export function EntityGate({ entityId, children }: Props) {
  const eligibility = useEligibility(entityId);
  const session = useSession();
  const phone = usePhoneDetails(entityId);
  const wabaId = phone.data?.whatsapp_business_account?.id ?? session.data?.lastWabaId ?? null;
  const businessId = session.data?.lastBusinessId ?? null;
  const enableUrl = metaEnableUrl(businessId, wabaId);

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
      return (
        <div className="mx-auto max-w-xl space-y-4 pt-16 text-center">
          <ShieldAlert className="mx-auto h-10 w-10 text-amber-600" />
          <h2 className="text-xl font-semibold">Waiting for terms acceptance</h2>
          <p className="text-sm text-muted-foreground">
            The Meta Business Agent terms have not been accepted for this WABA yet. An admin on
            the Business account needs to open Meta Business Manager and approve the T&amp;C
            before this app can configure the agent.
          </p>
          {enableUrl ? (
            <Button
              asChild
              size="lg"
              className="w-full border border-amber-500/50 bg-amber-500 text-amber-950 shadow-sm hover:bg-amber-400 dark:bg-amber-500 dark:text-amber-950 dark:hover:bg-amber-400 sm:w-auto"
            >
              <a href={enableUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Enable WhatsApp Business Agent
              </a>
            </Button>
          ) : (
            <p className="text-sm text-muted-foreground">
              Go back to <Link href="/home" className="underline underline-offset-2 hover:text-foreground">Home</Link>,
              enter your Business ID, and click <strong>Enable WhatsApp Business Agent</strong> next
              to this WABA. We need both a Business ID and a WABA ID to build the Meta Business Manager
              link.
            </p>
          )}
          <p className="text-xs text-muted-foreground">
            Read the{" "}
            <a
              href="https://www.facebook.com/legal/meta-business-ai-terms"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              Meta Business AI Terms
            </a>
            {" "}before approving.
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
