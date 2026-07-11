"use client";
import { use, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Save } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field } from "@/components/common/FormField";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LoadingButton } from "@/components/common/LoadingButton";
import { ErrorState } from "@/components/common/ErrorState";
import { FOLLOWUP_INTERVALS, settingsSchema, type FollowupInterval, type SettingsInput } from "@/lib/schemas/settings";
import { useSettings, useUpdateSettings } from "@/lib/client/hooks/useSettings";
import type { AgentSettings } from "@/types/meta";

const INTERVAL_LABEL: Record<FollowupInterval, string> = {
  0: "Disabled (0)",
  300: "5 minutes",
  900: "15 minutes",
  1800: "30 minutes",
  3600: "1 hour",
  7200: "2 hours",
  28800: "8 hours",
  86400: "24 hours",
};

function pickFirst(data: unknown): AgentSettings | undefined {
  if (!data) return undefined;
  if (Array.isArray(data)) return data[0];
  if (typeof data === "object" && "data" in (data as object)) {
    const arr = (data as { data: AgentSettings[] }).data;
    return Array.isArray(arr) ? arr[0] : undefined;
  }
  return data as AgentSettings;
}

const DEFAULTS: SettingsInput = {
  rollout: { enabled: false },
  handoff: { enabled: false, message: "" },
  followup: { enabled: false, followup_interval_in_seconds: 900, message: "" },
  ai_audience: "EVERYONE",
};

export default function SettingsPage({ params }: { params: Promise<{ entityId: string }> }) {
  const { entityId } = use(params);
  const query = useSettings(entityId);
  const update = useUpdateSettings(entityId);
  const first = pickFirst(query.data);

  const form = useForm<SettingsInput>({ resolver: zodResolver(settingsSchema), defaultValues: DEFAULTS });

  useEffect(() => {
    if (!first) return;
    const rawInterval = first.followup?.followup_interval_in_seconds;
    const interval: FollowupInterval = (FOLLOWUP_INTERVALS as readonly number[]).includes(rawInterval ?? 900)
      ? (rawInterval as FollowupInterval)
      : 900;
    form.reset({
      rollout: { enabled: first.rollout?.enabled ?? false },
      handoff: { enabled: first.handoff?.enabled ?? false, message: first.handoff?.message ?? "" },
      followup: {
        enabled: first.followup?.enabled ?? false,
        followup_interval_in_seconds: interval,
        message: first.followup?.message ?? "",
      },
      ai_audience: first.ai_audience ?? "EVERYONE",
    });
  }, [first, form]);

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      await update.mutateAsync(values);
      toast.success("Settings saved");
    } catch { /* rendered below */ }
  });

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-3xl space-y-6 py-4">
      <div>
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-sm text-muted-foreground">Rollout, handoff, follow-up, and audience.</p>
      </div>

      {query.error && <ErrorState error={query.error} />}
      {update.error && <ErrorState error={update.error} />}

      <Card>
        <CardHeader>
          <CardTitle>Rollout</CardTitle>
          <CardDescription>Turn the agent on or off for live traffic.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <span className="text-sm">Enabled</span>
            <Controller
              control={form.control}
              name="rollout.enabled"
              render={({ field }) => <Switch checked={field.value} onCheckedChange={field.onChange} />}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Handoff</CardTitle>
          <CardDescription>Optional handoff to a human when the agent isn't confident.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Enabled</span>
            <Controller
              control={form.control}
              name="handoff.enabled"
              render={({ field }) => <Switch checked={field.value} onCheckedChange={field.onChange} />}
            />
          </div>
          <Field label="Handoff message" htmlFor="handoff-msg" hint="Shown to the customer at handoff.">
            <Textarea id="handoff-msg" rows={3} {...form.register("handoff.message")} />
          </Field>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Follow-up</CardTitle>
          <CardDescription>Ping customers who don't respond after a while.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Enabled</span>
            <Controller
              control={form.control}
              name="followup.enabled"
              render={({ field }) => <Switch checked={field.value} onCheckedChange={field.onChange} />}
            />
          </div>
          <Field label="Inactivity interval" hint="How long the customer must be silent before the agent follows up.">
            <Controller
              control={form.control}
              name="followup.followup_interval_in_seconds"
              render={({ field }) => (
                <Select
                  value={String(field.value ?? 900)}
                  onValueChange={(v) => field.onChange(Number(v) as FollowupInterval)}
                >
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {FOLLOWUP_INTERVALS.map((s) => (
                      <SelectItem key={s} value={String(s)}>{INTERVAL_LABEL[s]}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </Field>
          <Field label="Follow-up message" htmlFor="followup-msg">
            <Textarea id="followup-msg" rows={3} {...form.register("followup.message")} />
          </Field>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AI audience</CardTitle>
          <CardDescription>Which customers the agent should respond to.</CardDescription>
        </CardHeader>
        <CardContent>
          <Field label="Audience">
            <Controller
              control={form.control}
              name="ai_audience"
              render={({ field }) => (
                <Select value={field.value} onValueChange={(v) => field.onChange(v as SettingsInput["ai_audience"])}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="EVERYONE">Everyone</SelectItem>
                    <SelectItem value="ALLOWLISTED_ONLY">Allowlisted only</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </Field>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <LoadingButton type="submit" loading={update.isPending} disabled={!form.formState.isDirty}>
          <Save className="h-4 w-4" /> Save settings
        </LoadingButton>
      </div>
    </form>
  );
}
