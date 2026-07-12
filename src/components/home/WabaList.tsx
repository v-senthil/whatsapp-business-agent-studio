"use client";
import Link from "next/link";
import { Building2, ExternalLink, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/common/EmptyState";
import { ErrorState } from "@/components/common/ErrorState";
import { usePhones, useWabas, type PhoneNumber, type Waba } from "@/lib/client/hooks/useDiscovery";

export function businessAgentEnableUrl(businessId: string, wabaId: string) {
  const params = new URLSearchParams({ business_id: businessId, asset_id: wabaId });
  return `https://business.facebook.com/latest/whatsapp_manager/business_ai?${params.toString()}`;
}

async function selectEntity(id: string, wabaId?: string) {
  await fetch("/api/session", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ lastEntityId: id, ...(wabaId ? { lastWabaId: wabaId } : {}) }),
  });
}

export function PhoneRow({ phone, wabaId }: { phone: PhoneNumber; wabaId?: string }) {
  return (
    <Link
      href={`/dashboard/${phone.id}`}
      onClick={() => selectEntity(phone.id, wabaId)}
      className="flex items-center gap-3 rounded-md border p-3 transition-colors hover:bg-accent"
    >
      <PhoneCall className="h-4 w-4 text-muted-foreground shrink-0" />
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-medium">{phone.display_phone_number ?? phone.id}</div>
        <div className="truncate text-xs text-muted-foreground">
          {phone.verified_name ?? "—"} · <span className="font-mono">{phone.id}</span>
        </div>
      </div>
      {phone.quality_rating && <Badge variant="outline" className="shrink-0">{phone.quality_rating}</Badge>}
    </Link>
  );
}

function WabaBlock({ waba, businessId }: { waba: Waba; businessId: string }) {
  const phones = usePhones(waba.id);
  const enableUrl = businessAgentEnableUrl(businessId, waba.id);
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center gap-2">
        <div className="text-sm font-medium">{waba.name ?? "Unnamed WABA"}</div>
        <span className="text-xs text-muted-foreground font-mono">{waba.id}</span>
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
      </div>
      {phones.isLoading && (
        <div className="grid gap-2 md:grid-cols-2">
          <Skeleton className="h-14" /><Skeleton className="h-14" />
        </div>
      )}
      {phones.error && <ErrorState error={phones.error} />}
      {phones.data && phones.data.data && phones.data.data.length > 0 ? (
        <div className="grid gap-2 md:grid-cols-2">
          {phones.data.data.map((p) => <PhoneRow key={p.id} phone={p} wabaId={waba.id} />)}
        </div>
      ) : (
        !phones.isLoading && !phones.error && (
          <p className="rounded-md border border-dashed p-3 text-xs text-muted-foreground">No phone numbers on this WABA.</p>
        )
      )}
    </div>
  );
}

export function WabaList({ businessId }: { businessId: string }) {
  const wabas = useWabas(businessId);

  if (wabas.isLoading) {
    return (
      <Card>
        <CardHeader className="pb-3"><Skeleton className="h-5 w-40" /></CardHeader>
        <CardContent className="space-y-2"><Skeleton className="h-14" /><Skeleton className="h-14" /></CardContent>
      </Card>
    );
  }

  if (wabas.isError) return <ErrorState error={wabas.error} />;

  const items = wabas.data?.data ?? [];
  if (items.length === 0) {
    return (
      <EmptyState
        icon={<Building2 className="h-8 w-8" />}
        title="No WABAs on this business"
        description="This business ID has no owned WhatsApp Business Accounts, or the token lacks permission to list them."
      />
    );
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Building2 className="h-4 w-4 text-muted-foreground" />
          <span>WhatsApp Business Accounts</span>
          <span className="ml-2 text-xs font-normal text-muted-foreground font-mono">{businessId}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {items.map((w) => <WabaBlock key={w.id} waba={w} businessId={businessId} />)}
      </CardContent>
    </Card>
  );
}
