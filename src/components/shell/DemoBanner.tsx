"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/client/hooks/useSession";
import { fetcher } from "@/lib/client/fetcher";

export function DemoBanner() {
  const { data } = useSession();
  const router = useRouter();
  const qc = useQueryClient();
  if (!data?.demo) return null;

  async function onExit() {
    try {
      await fetcher("/api/session", { method: "DELETE" });
      qc.clear();
      toast.success("Demo ended");
      router.replace("/login");
    } catch {
      toast.error("Could not end demo");
    }
  }

  return (
    <div className="flex items-center gap-2 border-b border-emerald-500/40 bg-emerald-50/80 px-4 py-1.5 text-xs text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-100">
      <Sparkles className="h-3.5 w-3.5 shrink-0" />
      <span className="flex-1">
        You&apos;re in demo mode. Data is seeded and stored in memory, nothing reaches Meta. Changes reset on sign out.
      </span>
      <Button asChild variant="ghost" size="sm" className="h-6 text-xs">
        <Link href="/help/getting-started/try-the-demo">About demo</Link>
      </Button>
      <Button variant="ghost" size="sm" className="h-6 text-xs" onClick={onExit}>
        End demo
      </Button>
    </div>
  );
}
