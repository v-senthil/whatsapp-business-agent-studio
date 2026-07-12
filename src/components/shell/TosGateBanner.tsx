"use client";
import Link from "next/link";
import { ExternalLink, ShieldAlert } from "lucide-react";
import { useTosStatus } from "@/lib/client/hooks/useTosStatus";

export function TosGateBanner({ entityId }: { entityId?: string }) {
  const status = useTosStatus(entityId);
  if (!status.tosBlocked) return null;
  return (
    <div className="border-b border-amber-500/40 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:bg-amber-950/60 dark:text-amber-100">
      <div className="flex items-start gap-3">
        <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" />
        <div className="min-w-0 flex-1">
          <div className="font-semibold">Meta Business Agent terms are not accepted for this WABA</div>
          <p className="mt-1 text-amber-900/90 dark:text-amber-100/90">
            {status.message ?? "The Meta Business AI Terms of Service must be accepted for this WhatsApp Business Account before this app can configure the agent."}
            {" "}Go back to <Link href="/home" className="underline underline-offset-2 hover:text-foreground">Home</Link> and click <strong>Enable WhatsApp Business Agent</strong> next to this WABA so an admin can approve the T&amp;C.
          </p>
          {status.learnMoreUrl && (
            <a
              href={status.learnMoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-xs font-medium underline underline-offset-2 hover:text-foreground"
            >
              <ExternalLink className="h-3 w-3" />
              Read the Meta Business AI Terms
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
