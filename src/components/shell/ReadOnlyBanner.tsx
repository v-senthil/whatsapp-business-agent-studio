"use client";
import { EyeOff } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useSession, usePatchSession } from "@/lib/client/hooks/useSession";

export function ReadOnlyBanner() {
  const { data } = useSession();
  const patch = usePatchSession();
  if (!data?.readOnly) return null;
  return (
    <div className="flex items-center gap-2 border-b border-amber-500/40 bg-amber-100/70 px-4 py-1.5 text-xs text-amber-900 dark:bg-amber-950/60 dark:text-amber-100">
      <EyeOff className="h-3.5 w-3.5 shrink-0" />
      <span className="flex-1">Read-only mode is on. Mutations against Meta APIs are blocked.</span>
      <Button
        variant="ghost"
        size="sm"
        className="h-6 text-xs"
        onClick={() =>
          patch.mutate(
            { readOnly: false },
            { onSuccess: () => toast.success("Read-only mode off — writes enabled") },
          )
        }
      >
        Turn off
      </Button>
    </div>
  );
}
