"use client";
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Check, ChevronsUpDown, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Field } from "@/components/common/FormField";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils/cn";
import { fetcher } from "@/lib/client/fetcher";
import { usePhoneDetails, usePhones } from "@/lib/client/hooks/useDiscovery";
import { useSession } from "@/lib/client/hooks/useSession";

interface EntityPickerProps {
  currentEntityId?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}

export function EntityPicker({ currentEntityId, primaryLabel, secondaryLabel }: EntityPickerProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [manualId, setManualId] = React.useState("");
  const currentPhone = usePhoneDetails(currentEntityId);
  const session = useSession();
  const wabaId =
    currentPhone.data?.whatsapp_business_account?.id ??
    session.data?.lastWabaId ??
    undefined;
  const wabaName = currentPhone.data?.whatsapp_business_account?.name;
  const siblings = usePhones(open ? wabaId : undefined);

  const select = React.useCallback(
    async (id: string) => {
      await fetcher("/api/session", { method: "PATCH", json: { lastEntityId: id } });
      setOpen(false);
      router.push(`/dashboard/${id}`);
    },
    [router],
  );

  const siblingPhones = (siblings.data?.data ?? []).filter((p) => p.id !== currentEntityId);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="h-auto min-h-9 w-[300px] justify-between py-1.5">
          <span className="flex min-w-0 items-center gap-2">
            <PhoneCall className="h-4 w-4 text-muted-foreground shrink-0" />
            <span className="flex min-w-0 flex-col items-start">
              <span className="truncate text-sm leading-tight">{primaryLabel ?? currentEntityId ?? "Select phone number"}</span>
              {secondaryLabel && (
                <span className="truncate text-xs leading-tight text-muted-foreground">{secondaryLabel}</span>
              )}
            </span>
          </span>
          <ChevronsUpDown className="h-4 w-4 opacity-50 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[360px] p-3" align="start">
        <div className="space-y-3">
          {wabaId && (
            <div>
              <div className="mb-1 flex items-baseline justify-between gap-2">
                <div className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                  Other phones on this WABA
                </div>
                {wabaName && (
                  <div className="truncate text-[11px] text-muted-foreground" title={wabaName}>
                    {wabaName}
                  </div>
                )}
              </div>
              {siblings.isLoading && (
                <div className="space-y-1">
                  <Skeleton className="h-9" />
                  <Skeleton className="h-9" />
                </div>
              )}
              {!siblings.isLoading && siblingPhones.length === 0 && (
                <p className="rounded-md border border-dashed px-2 py-1.5 text-xs text-muted-foreground">
                  No other phones on this WABA.
                </p>
              )}
              {!siblings.isLoading && siblingPhones.length > 0 && (
                <ul className="max-h-56 space-y-1 overflow-y-auto">
                  {siblingPhones.map((p) => (
                    <li key={p.id}>
                      <button
                        type="button"
                        onClick={() => select(p.id)}
                        className={cn(
                          "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                        )}
                      >
                        <PhoneCall className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm leading-tight">
                            {p.display_phone_number ?? p.verified_name ?? "Unnamed phone"}
                          </span>
                          <span className="block truncate text-xs leading-tight text-muted-foreground">
                            {p.display_phone_number && p.verified_name ? `${p.verified_name} · ` : ""}
                            <span className="font-mono">{p.id}</span>
                          </span>
                        </span>
                        {p.quality_rating && (
                          <Badge variant="outline" className="shrink-0 text-[10px]">
                            {p.quality_rating}
                          </Badge>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              {currentEntityId && currentPhone.data?.display_phone_number && (
                <div className="mt-2 flex items-center gap-2 rounded-md bg-muted/60 px-2 py-1.5 text-xs text-muted-foreground">
                  <Check className="h-3 w-3 text-emerald-500" />
                  <span className="truncate">Currently on {currentPhone.data.display_phone_number}</span>
                </div>
              )}
              <Separator className="mt-3" />
            </div>
          )}

          <Field label="Switch to a phone number ID" htmlFor="picker-manual">
            <div className="flex gap-2">
              <Input
                id="picker-manual"
                value={manualId}
                onChange={(e) => setManualId(e.target.value)}
                placeholder="e.g. 123456789012345"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.nativeEvent.isComposing) {
                    e.preventDefault();
                    if (manualId.trim()) select(manualId.trim());
                  }
                }}
              />
              <Button type="button" size="sm" disabled={!manualId.trim()} onClick={() => select(manualId.trim())}>
                Go
              </Button>
            </div>
          </Field>
          <Separator />
          <Button asChild variant="ghost" size="sm" className="w-full justify-between" onClick={() => setOpen(false)}>
            <Link href="/home">
              Browse WABAs & phones
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
