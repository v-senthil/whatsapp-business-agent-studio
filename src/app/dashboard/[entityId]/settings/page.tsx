"use client";
import { use, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Save } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field } from "@/components/common/FormField";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LoadingButton } from "@/components/common/LoadingButton";
import { ErrorState } from "@/components/common/ErrorState";
import { settingsSchema, type SettingsInput } from "@/lib/schemas/settings";
import { useSettings, useUpdateSettings } from "@/lib/client/hooks/useSettings";
import type { AgentSettings } from "@/types/meta";

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
    form.reset({
      rollout: { enabled: first.rollout?.enabled ?? false },
      handoff: { enabled: first.handoff?.enabled ?? false, message: first.handoff?.message ?? "" },
      followup: {
        enabled: first.followup?.enabled ?? false,
        followup_interval_in_seconds: first.followup?.followup_interval_in_seconds ?? 900,
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
            <Switch
              checked={form.watch("rollout.enabled")}
              onCheckedChange={(v) => form.setValue("rollout.enabled", v, { shouldDirty: true })}
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
            <Switch
              checked={form.watch("handoff.enabled")}
              onCheckedChange={(v) => form.setValue("handoff.enabled", v, { shouldDirty: true })}
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
            <Switch
              checked={form.watch("followup.enabled")}
              onCheckedChange={(v) => form.setValue("followup.enabled", v, { shouldDirty: true })}
            />
          </div>
          <Field label="Interval (seconds)" htmlFor="followup-int" hint="60 – 86400">
            <Input id="followup-int" type="number" min={60} max={86400} {...form.register("followup.followup_interval_in_seconds", { valueAsNumber: true })} />
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
            <Select value={form.watch("ai_audience")} onValueChange={(v) => form.setValue("ai_audience", v as SettingsInput["ai_audience"], { shouldDirty: true })}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="EVERYONE">Everyone</SelectItem>
                <SelectItem value="ALLOWLISTED_ONLY">Allowlisted only</SelectItem>
              </SelectContent>
            </Select>
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
