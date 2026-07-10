"use client";
import { use } from "react";
import Link from "next/link";
import { AlertCircle, Loader2, ShieldAlert, ShieldCheck, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ErrorState } from "@/components/common/ErrorState";
import { useEligibility, useSettings } from "@/lib/client/hooks/useSettings";
import { CopyButton } from "@/components/common/CopyButton";
import { AgentConfigActions } from "@/components/config/AgentConfigActions";
import { OnboardingChecklist } from "@/components/overview/OnboardingChecklist";

export default function EntityOverviewPage({ params }: { params: Promise<{ entityId: string }> }) {
  const { entityId } = use(params);
  const eligibility = useEligibility(entityId);
  const settings = useSettings(entityId);

  const settingsList = Array.isArray(settings.data)
    ? settings.data
    : settings.data && "data" in (settings.data as object)
      ? ((settings.data as { data: unknown[] }).data ?? [])
      : settings.data
        ? [settings.data]
        : [];

  const hasWhatsAppAgent = (settingsList as Array<{ channel?: string }>).some(
    (s) => (s?.channel ?? "").toLowerCase() === "whatsapp",
  );

  return (
    <div className="space-y-6 py-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Agent overview</h1>
          <p className="text-sm text-muted-foreground">Phone number ID: <code className="font-mono">{entityId}</code></p>
        </div>
        <AgentConfigActions
          entityId={entityId}
          onImportComplete={() => {
            eligibility.refetch();
            settings.refetch();
          }}
        />
      </div>

      <OnboardingChecklist entityId={entityId} />

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Eligibility</CardTitle>
            <CardDescription>Whether this phone number can host an AI agent</CardDescription>
          </CardHeader>
          <CardContent>
            {eligibility.isLoading && <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />}
            {eligibility.isError && <ErrorState error={eligibility.error} />}
            {eligibility.data ? (() => {
              const d = eligibility.data as { is_eligible?: boolean; reasons?: string[] } | undefined;
              const eligible = d?.is_eligible !== false;
              const Icon = eligible ? ShieldCheck : ShieldAlert;
              return (
                <div className="space-y-3">
                  <div className={`flex items-center gap-3 rounded-md border p-3 ${eligible ? "border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/40" : "border-destructive/40 bg-destructive/10"}`}>
                    <Icon className={`h-6 w-6 shrink-0 ${eligible ? "text-emerald-600 dark:text-emerald-400" : "text-destructive"}`} />
                    <div>
                      <div className="text-sm font-medium">{eligible ? "Eligible" : "Not eligible"}</div>
                      <div className="text-xs text-muted-foreground">
                        {eligible
                          ? "This phone number can host a Meta Business AI agent."
                          : "This phone number cannot host an AI agent right now."}
                      </div>
                    </div>
                  </div>
                  {d?.reasons && d.reasons.length > 0 && (
                    <ul className="ml-4 list-disc space-y-1 text-xs text-muted-foreground">
                      {d.reasons.map((r, i) => <li key={i}>{r}</li>)}
                    </ul>
                  )}
                </div>
              );
            })() : null}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Agents on this phone</CardTitle>
            <CardDescription>Configured channels and their agent IDs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {settings.isLoading && <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />}
            {settings.isError && (
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>No agent yet</AlertTitle>
                <AlertDescription>
                  You may need to onboard an agent before configuration becomes available.
                </AlertDescription>
              </Alert>
            )}
            {settingsList.length > 0 ? (
              settingsList.map((s, i) => {
                const it = s as { agent_id?: string; channel?: string };
                return (
                  <div key={it.agent_id ?? `agent-${i}`} className="flex items-center gap-3 rounded-md border p-3">
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium capitalize">{it.channel ?? "unknown"}</div>
                      <div className="flex items-center gap-1">
                        <div className="truncate text-xs text-muted-foreground font-mono" title={it.agent_id}>
                          {it.agent_id ?? "—"}
                        </div>
                        {it.agent_id && <CopyButton value={it.agent_id} label="Agent ID copied" />}
                      </div>
                    </div>
                    <Badge variant="secondary" className="shrink-0">Active</Badge>
                  </div>
                );
              })
            ) : (
              !settings.isLoading && !settings.isError && (
                <p className="text-sm text-muted-foreground">No agents configured yet.</p>
              )
            )}
          </CardContent>
          <CardFooter>
            {hasWhatsAppAgent ? (
              <Button asChild variant="outline" size="sm">
                <Link href={`/dashboard/${entityId}/settings`}>Configure agent</Link>
              </Button>
            ) : (
              <Button asChild variant="outline" size="sm">
                <Link href={`/dashboard/${entityId}/onboarding`}>
                  <Sparkles className="h-4 w-4" /> Onboard WhatsApp agent
                </Link>
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
