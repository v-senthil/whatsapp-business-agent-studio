"use client";
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowUpRight, ChevronsUpDown, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Field } from "@/components/common/FormField";
import { Separator } from "@/components/ui/separator";
import { fetcher } from "@/lib/client/fetcher";

interface EntityPickerProps {
  currentEntityId?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}

export function EntityPicker({ currentEntityId, primaryLabel, secondaryLabel }: EntityPickerProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [manualId, setManualId] = React.useState("");

  const select = React.useCallback(
    async (id: string) => {
      await fetcher("/api/session", { method: "PATCH", json: { lastEntityId: id } });
      setOpen(false);
      router.push(`/dashboard/${id}`);
    },
    [router],
  );

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
