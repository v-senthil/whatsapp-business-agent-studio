"use client";
import { use, useEffect, useState } from "react";
import { toast } from "sonner";
import { Clapperboard, Play, Trash2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/common/EmptyState";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { deleteScenario, listScenarios, type Scenario } from "@/lib/scenarios";
import { ScenarioReplayDialog } from "@/components/scenarios/ScenarioReplayDialog";

export default function ScenariosPage({ params }: { params: Promise<{ entityId: string }> }) {
  const { entityId } = use(params);
  const [scenarios, setScenarios] = useState<Scenario[]>([]);

  useEffect(() => {
    setScenarios(listScenarios(entityId));
  }, [entityId]);

  function refresh() {
    setScenarios(listScenarios(entityId));
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6 py-4">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-semibold">
          <Clapperboard className="h-5 w-5" /> Scenarios
        </h1>
        <p className="text-sm text-muted-foreground">
          Conversations saved from the Test chat. Replay any of them to check for regressions after configuration changes.
        </p>
      </div>

      {scenarios.length === 0 ? (
        <EmptyState
          icon={<Clapperboard className="h-8 w-8" />}
          title="No scenarios yet"
          description="Open the Test chat, hold a conversation with the agent, then click Save as scenario."
        />
      ) : (
        <div className="grid gap-3">
          {scenarios.map((s) => {
            const userTurns = s.turns.filter((t) => t.role === "user").length;
            return (
              <Card key={s.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <CardTitle className="text-sm">{s.name}</CardTitle>
                      {s.notes && <CardDescription>{s.notes}</CardDescription>}
                    </div>
                    <div className="flex shrink-0 gap-1">
                      <ScenarioReplayDialog
                        entityId={entityId}
                        scenario={s}
                        trigger={
                          <Button variant="outline" size="sm">
                            <Play className="h-3 w-3" /> Replay
                          </Button>
                        }
                      />
                      <ConfirmDialog
                        trigger={<Button variant="ghost" size="icon" aria-label="Delete scenario"><Trash2 className="h-4 w-4" /></Button>}
                        title={`Delete "${s.name}"?`}
                        confirmLabel="Delete"
                        onConfirm={() => {
                          deleteScenario(entityId, s.id);
                          toast.success("Deleted");
                          refresh();
                        }}
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-wrap items-center gap-2 pt-0 text-xs text-muted-foreground">
                  <Badge variant="secondary">{userTurns} user turn{userTurns === 1 ? "" : "s"}</Badge>
                  <Badge variant="secondary">{s.turns.length} message{s.turns.length === 1 ? "" : "s"}</Badge>
                  <span>Saved {new Date(s.saved_at).toLocaleString()}</span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
