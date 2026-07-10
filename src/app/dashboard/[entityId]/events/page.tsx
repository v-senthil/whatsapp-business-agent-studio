"use client";
import { use, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Bell, Send } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field } from "@/components/common/FormField";
import { LoadingButton } from "@/components/common/LoadingButton";
import { ErrorState } from "@/components/common/ErrorState";
import { EmptyState } from "@/components/common/EmptyState";
import { agentEventSchema, type AgentEventInput } from "@/lib/schemas/agent-event";
import { useSubmitAgentEvent } from "@/lib/client/hooks/useAgentEvent";
import { AgentEventRow } from "@/components/events/AgentEventRow";

interface TrackedEvent {
  agent_event_id: string;
  submitted_at: number;
  event_type: string;
  to: string;
}

const EMPTY: AgentEventInput = {
  to: "",
  event: { type: "", description: "", payload: "" },
};

export default function EventsPage({ params }: { params: Promise<{ entityId: string }> }) {
  const { entityId } = use(params);
  const submit = useSubmitAgentEvent(entityId);
  const storageKey = `wabiz.events.${entityId}`;
  const [tracked, setTracked] = useState<TrackedEvent[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setTracked(JSON.parse(raw));
    } catch {}
  }, [storageKey]);

  function persist(next: TrackedEvent[]) {
    setTracked(next);
    try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch {}
  }

  const form = useForm<AgentEventInput>({ resolver: zodResolver(agentEventSchema), defaultValues: EMPTY });

  const onSubmit = form.handleSubmit(async (values) => {
    if (values.event.payload) {
      try { JSON.parse(values.event.payload); }
      catch (e) {
        form.setError("event.payload", { message: `Invalid JSON: ${(e as Error).message}` });
        return;
      }
    }
    try {
      const resp = await submit.mutateAsync(values);
      toast.success(resp.agent_event_id ? "Event submitted" : `Event ${resp.status}`);
      if (resp.agent_event_id) {
        persist([
          { agent_event_id: resp.agent_event_id, submitted_at: Date.now(), event_type: values.event.type, to: values.to },
          ...tracked,
        ]);
      }
      form.reset(EMPTY);
    } catch { /* rendered below */ }
  });

  return (
    <div className="mx-auto max-w-3xl space-y-6 py-4">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-semibold"><Bell className="h-5 w-5" /> Agent events</h1>
        <p className="text-sm text-muted-foreground">
          Trigger an out-of-band event the agent can react to — e.g. "document_verified", "payment_received".
        </p>
      </div>

      {submit.error && <ErrorState error={submit.error} />}

      <Card>
        <form onSubmit={onSubmit}>
          <CardHeader>
            <CardTitle>Submit event</CardTitle>
            <CardDescription>POST /{entityId}/agent_event — enqueued for asynchronous processing.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Field label="Consumer phone number (to)" required hint="E.164, e.g. +15551234567" error={form.formState.errors.to?.message}>
              <Input {...form.register("to")} placeholder="+15551234567" />
            </Field>
            <Field label="Event type" required hint="Partner-defined identifier. Max 256 chars." error={form.formState.errors.event?.type?.message}>
              <Input {...form.register("event.type")} placeholder="document_verified" />
            </Field>
            <Field label="Description" required hint="Human-readable. Max 1024 chars." error={form.formState.errors.event?.description?.message}>
              <Textarea rows={2} {...form.register("event.description")} placeholder="User's identity document has been verified" />
            </Field>
            <Field label="Payload (JSON)" hint="Optional. Opaque JSON passed to the agent. Max 4096 chars." error={form.formState.errors.event?.payload?.message}>
              <Textarea rows={4} className="font-mono text-xs" {...form.register("event.payload")} placeholder='{"order_id": "12345"}' />
            </Field>
          </CardContent>
          <CardFooter className="justify-end">
            <LoadingButton type="submit" loading={submit.isPending}><Send className="h-4 w-4" /> Submit event</LoadingButton>
          </CardFooter>
        </form>
      </Card>

      <div>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-medium">Recent submissions</h2>
          {tracked.length > 0 && (
            <button
              type="button"
              className="text-xs text-muted-foreground underline hover:text-foreground"
              onClick={() => persist([])}
            >
              Clear list
            </button>
          )}
        </div>
        {tracked.length === 0 ? (
          <EmptyState
            icon={<Bell className="h-8 w-8" />}
            title="No events submitted yet"
            description="Events submitted from this browser will appear here with live status polling."
          />
        ) : (
          <div className="space-y-2">
            {tracked.map((t) => (
              <AgentEventRow
                key={t.agent_event_id}
                entityId={entityId}
                eventId={t.agent_event_id}
                submittedType={t.event_type}
                submittedTo={t.to}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
