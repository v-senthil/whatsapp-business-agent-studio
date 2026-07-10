"use client";
import * as React from "react";
import { Save } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field } from "@/components/common/FormField";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { saveScenario, type ScenarioTurn } from "@/lib/scenarios";

interface Props {
  entityId: string;
  turns: ScenarioTurn[];
  conversationId?: string;
}

export function SaveScenarioButton({ entityId, turns, conversationId }: Props) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const canSave = turns.length > 0 && turns.some((t) => t.role === "user");

  function save() {
    if (!name.trim()) return;
    saveScenario(entityId, {
      name: name.trim(),
      notes: notes.trim(),
      turns,
      original_conversation_id: conversationId,
    });
    toast.success("Scenario saved");
    setOpen(false);
    setName("");
    setNotes("");
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
        variant="ghost"
        size="sm"
        disabled={!canSave}
        onClick={() => setOpen(true)}
        title={canSave ? "Save this conversation as a replayable scenario" : "Send a message first"}
      >
        <Save className="h-3 w-3" /> Save as scenario
      </Button>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Save conversation as scenario</DialogTitle>
          <DialogDescription>
            Stored locally. Replay from the Scenarios tab to check that recent changes don&apos;t regress this flow.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3">
          <Field label="Name" required>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="return-policy-flow" autoFocus />
          </Field>
          <Field label="Notes" hint="What is this scenario testing?">
            <Textarea rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Customer asks about returns; agent should reference the 30-day policy." />
          </Field>
          <div className="rounded-md bg-muted/40 p-2 text-xs text-muted-foreground">
            {turns.length} message{turns.length === 1 ? "" : "s"} · {turns.filter((t) => t.role === "user").length} user turn{turns.filter((t) => t.role === "user").length === 1 ? "" : "s"}
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={save} disabled={!name.trim()}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
