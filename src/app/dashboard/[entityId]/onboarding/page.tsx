"use client";
import { use, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { CheckCircle2, Loader2, Sparkles, Trash2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { LoadingButton } from "@/components/common/LoadingButton";
import { ErrorState } from "@/components/common/ErrorState";
import { JsonViewer } from "@/components/common/JsonViewer";
import { DeleteAgentDialog } from "@/components/agent/DeleteAgentDialog";
import { useOnboardAgent, useSettings } from "@/lib/client/hooks/useSettings";
import type { AgentSettings } from "@/types/meta";

function settingsToList(data: unknown): AgentSettings[] {
  if (!data) return [];
  if (Array.isArray(data)) return data as AgentSettings[];
  if (typeof data === "object" && data && "data" in data) {
    const arr = (data as { data: unknown }).data;
    return Array.isArray(arr) ? (arr as AgentSettings[]) : [];
  }
  return [data as AgentSettings];
}

export default function OnboardingPage({ params }: { params: Promise<{ entityId: string }> }) {
  const { entityId } = use(params);
  const router = useRouter();
  const settings = useSettings(entityId);
  const onboard = useOnboardAgent(entityId);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const list = settingsToList(settings.data);
  const existing = list.find((s) => (s.channel ?? "").toLowerCase() === "whatsapp");

  async function submit() {
    try {
      const result = await onboard.mutateAsync("whatsapp");
      toast.success(`Agent created: ${result.agent_id}`);
      router.push(`/dashboard/${entityId}/settings`);
    } catch {
      // ErrorState renders below
    }
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6 py-4">
      <div>
        <h1 className="text-2xl font-semibold">Onboard WhatsApp agent</h1>
        <p className="text-sm text-muted-foreground">Provision the AI agent for WhatsApp on this phone number.</p>
      </div>

      {settings.isLoading && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" /> Checking existing agents...
        </div>
      )}

      {existing ? (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-emerald-500/10 p-2 text-emerald-700 dark:text-emerald-400">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <CardTitle>WhatsApp agent already onboarded</CardTitle>
                <CardDescription>You can configure and test the existing agent below.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border p-3 text-sm">
              <div className="font-medium">Agent ID</div>
              <div className="mt-1 truncate font-mono text-xs text-muted-foreground" title={existing.agent_id}>{existing.agent_id}</div>
            </div>
          </CardContent>
          <CardFooter className="gap-2">
            <Button asChild><Link href={`/dashboard/${entityId}/settings`}>Configure settings</Link></Button>
            <Button asChild variant="outline"><Link href={`/dashboard/${entityId}/test`}>Test chat</Link></Button>
            <Button variant="destructive" onClick={() => setDeleteOpen(true)} className="ml-auto">
              <Trash2 className="h-4 w-4" /> Delete agent
            </Button>
          </CardFooter>
        </Card>
      ) : (
        !settings.isLoading && (
          <Card>
            <CardHeader>
              <CardTitle>New WhatsApp agent</CardTitle>
              <CardDescription>Creates the agent and schedules any async setup on Meta's side.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Alert>
                <AlertTitle>WhatsApp only</AlertTitle>
                <AlertDescription>
                  This builder currently supports WhatsApp agents. Once created, you can configure skills, knowledge, connectors, and evals.
                </AlertDescription>
              </Alert>
              {onboard.error && <ErrorState error={onboard.error} />}
              {onboard.data && <JsonViewer data={onboard.data} />}
            </CardContent>
            <CardFooter>
              <LoadingButton onClick={submit} loading={onboard.isPending}>
                <Sparkles className="h-4 w-4" /> Onboard WhatsApp agent
              </LoadingButton>
            </CardFooter>
          </Card>
        )
      )}

      {settings.error && (
        <Alert variant="warning">
          <AlertTitle>Couldn't verify existing agents</AlertTitle>
          <AlertDescription>Proceeding will create a WhatsApp agent regardless.</AlertDescription>
        </Alert>
      )}

      <DeleteAgentDialog
        entityId={entityId}
        agentId={existing?.agent_id}
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        onSuccess={() => router.push(`/dashboard/${entityId}`)}
      />
    </div>
  );
}
