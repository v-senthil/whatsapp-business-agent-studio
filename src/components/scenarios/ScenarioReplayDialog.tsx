"use client";
import * as React from "react";
import { Loader2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { fetcher, metaUrl } from "@/lib/client/fetcher";
import type { AgentTestResponse } from "@/types/eval";
import type { Scenario, ScenarioTurn } from "@/lib/scenarios";
import { cn } from "@/lib/utils/cn";

interface Props {
  entityId: string;
  scenario: Scenario;
  trigger: React.ReactNode;
}

interface Replay {
  userText: string;
  original?: ScenarioTurn;
  replayed?: string;
  error?: string;
  status: "pending" | "running" | "done" | "error";
}

export function ScenarioReplayDialog({ entityId, scenario, trigger }: Props) {
  const [open, setOpen] = React.useState(false);
  const [replays, setReplays] = React.useState<Replay[]>([]);
  const [running, setRunning] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    // Build the replay plan from the original turns
    const plan: Replay[] = [];
    const turns = scenario.turns;
    for (let i = 0; i < turns.length; i++) {
      const t = turns[i];
      if (t.role !== "user") continue;
      const nextAgent = turns.slice(i + 1).find((x) => x.role === "agent");
      plan.push({ userText: t.text, original: nextAgent, status: "pending" });
    }
    setReplays(plan);
  }, [open, scenario]);

  async function run() {
    setRunning(true);
    let conversationId: string | undefined;
    // Build the plan from the scenario turns synchronously so a stale
    // replays state (e.g. from a prior run) cannot leak in mid-loop.
    const current: Replay[] = [];
    const turns = scenario.turns;
    for (let i = 0; i < turns.length; i++) {
      const t = turns[i];
      if (t.role !== "user") continue;
      const nextAgent = turns.slice(i + 1).find((x) => x.role === "agent");
      current.push({ userText: t.text, original: nextAgent, status: "pending" });
    }
    setReplays([...current]);
    for (let i = 0; i < current.length; i++) {
      current[i] = { ...current[i], status: "running" };
      setReplays([...current]);
      try {
        const resp = await fetcher<AgentTestResponse>(metaUrl(entityId, "agent_test"), {
          method: "POST",
          json: { user_msg: current[i].userText, conversation_id: conversationId },
        });
        conversationId = conversationId ?? resp.conversation_id;
        current[i] = { ...current[i], replayed: resp.agent_response, status: "done" };
      } catch (e) {
        current[i] = {
          ...current[i],
          error: e instanceof Error ? e.message : "Request failed",
          status: "error",
        };
      }
      setReplays([...current]);
    }
    setRunning(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Replay: {scenario.name}</DialogTitle>
          <DialogDescription>
            Sends each user turn through <code className="font-mono">agent_test</code> and compares against the saved response.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh]">
          <div className="space-y-3 pr-3">
            {replays.map((r, i) => (
              <div key={i} className="space-y-2">
                <div className="rounded-md bg-muted p-2 text-sm">
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">You said</span>
                  <p className="mt-1 whitespace-pre-wrap">{r.userText}</p>
                </div>
                <div className="grid gap-2 md:grid-cols-2">
                  <Card>
                    <CardHeader className="flex-row items-center justify-between space-y-0 pb-1">
                      <CardTitle className="text-xs font-medium text-muted-foreground">Saved response</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="whitespace-pre-wrap text-sm">{r.original?.text ?? <span className="text-muted-foreground">— none —</span>}</p>
                    </CardContent>
                  </Card>
                  <Card
                    className={cn(
                      r.status === "done" && r.original && r.replayed?.trim() === r.original.text.trim()
                        ? "border-emerald-500/40"
                        : r.status === "error"
                          ? "border-destructive/40"
                          : "",
                    )}
                  >
                    <CardHeader className="flex-row items-center justify-between space-y-0 pb-1">
                      <CardTitle className="text-xs font-medium text-muted-foreground">Replayed now</CardTitle>
                      {r.status === "running" && <Loader2 className="h-3 w-3 animate-spin" />}
                      {r.status === "done" && (
                        <Badge variant={r.original && r.replayed?.trim() === r.original.text.trim() ? "success" : "warning"}>
                          {r.original && r.replayed?.trim() === r.original.text.trim() ? "match" : "differs"}
                        </Badge>
                      )}
                      {r.status === "error" && <Badge variant="destructive">error</Badge>}
                    </CardHeader>
                    <CardContent>
                      {r.status === "pending" && <p className="text-sm text-muted-foreground">Waiting...</p>}
                      {r.error && <p className="text-sm text-destructive">{r.error}</p>}
                      {r.replayed && <p className="whitespace-pre-wrap text-sm">{r.replayed}</p>}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
            {replays.length === 0 && (
              <p className="py-4 text-center text-sm text-muted-foreground">This scenario has no user turns.</p>
            )}
          </div>
        </ScrollArea>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
          <Button onClick={run} disabled={running || replays.length === 0}>
            {running ? <Loader2 className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />} Run replay
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
