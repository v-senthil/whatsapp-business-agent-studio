"use client";
import { ExternalLink, Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ErrorState } from "@/components/common/ErrorState";
import { usePhones } from "@/lib/client/hooks/useDiscovery";
import { PhoneRow, businessAgentEnableUrl } from "@/components/home/WabaList";

interface Props {
  wabaId: string;
  businessId?: string;
}

export function DirectWabaPhones({ wabaId, businessId }: Props) {
  const phones = usePhones(wabaId);
  const enableUrl = businessId ? businessAgentEnableUrl(businessId, wabaId) : null;

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex flex-wrap items-center gap-2 text-base">
          <Layers className="h-4 w-4 text-muted-foreground" />
          <span>Phones on this WABA</span>
          <span className="text-xs font-normal text-muted-foreground font-mono">{wabaId}</span>
          {enableUrl && (
            <a
              href={enableUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1 rounded-md border border-amber-500/40 bg-amber-50 px-2 py-1 text-xs font-medium text-amber-900 transition-colors hover:bg-amber-100 dark:bg-amber-950 dark:text-amber-100 dark:hover:bg-amber-900"
              title="Opens Meta Business Manager so an admin can accept the WhatsApp Business Agent terms & conditions"
            >
              <ExternalLink className="h-3 w-3" />
              Enable WhatsApp Business Agent
            </a>
          )}
        </CardTitle>
        {!enableUrl && (
          <p className="text-xs text-muted-foreground">
            Enter your Business ID above to also get an <strong>Enable WhatsApp Business Agent</strong> link for this WABA.
          </p>
        )}
      </CardHeader>
      <CardContent className="space-y-2">
        {phones.isLoading && (
          <div className="grid gap-2 md:grid-cols-2">
            <Skeleton className="h-14" /><Skeleton className="h-14" />
          </div>
        )}
        {phones.error && <ErrorState error={phones.error} />}
        {phones.data && phones.data.data && phones.data.data.length > 0 ? (
          <div className="grid gap-2 md:grid-cols-2">
            {phones.data.data.map((p) => <PhoneRow key={p.id} phone={p} wabaId={wabaId} />)}
          </div>
        ) : (
          !phones.isLoading && !phones.error && (
            <p className="rounded-md border border-dashed p-3 text-xs text-muted-foreground">No phone numbers on this WABA, or your token cannot list them.</p>
          )
        )}
      </CardContent>
    </Card>
  );
}
