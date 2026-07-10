"use client";
import { use } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { PhoneOff, Save } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Field } from "@/components/common/FormField";
import { LoadingButton } from "@/components/common/LoadingButton";
import { ErrorState } from "@/components/common/ErrorState";
import { threadControlSchema, type ThreadControlInput } from "@/lib/schemas/thread-control";
import { useThreadControl } from "@/lib/client/hooks/useAgentTest";

export default function ThreadControlPage({ params }: { params: Promise<{ entityId: string }> }) {
  const { entityId } = use(params);
  const mut = useThreadControl(entityId);
  const form = useForm<ThreadControlInput>({
    resolver: zodResolver(threadControlSchema),
    defaultValues: { action: "release", to: "", recipient: "" },
  });

  const submit = form.handleSubmit(async (v) => {
    try {
      const body: { messaging_product: string; action: string; to: string; recipient?: string } = {
        messaging_product: "whatsapp",
        action: v.action,
        to: v.to,
      };
      if (v.recipient) body.recipient = v.recipient;
      await mut.mutateAsync(body);
      toast.success("Thread control action sent");
      form.reset({ action: v.action, to: "", recipient: "" });
    } catch { /* shown below */ }
  });

  return (
    <div className="mx-auto max-w-2xl py-4">
      <div className="mb-4">
        <h1 className="flex items-center gap-2 text-2xl font-semibold"><PhoneOff className="h-5 w-5" /> Thread control</h1>
        <p className="text-sm text-muted-foreground">Pass or release control of a conversation.</p>
      </div>
      {mut.error && <ErrorState error={mut.error} />}
      <Card>
        <form onSubmit={submit}>
          <CardHeader>
            <CardTitle>Action</CardTitle>
            <CardDescription>Uses `/business/whatsapp/phone_numbers/{"{"}phone_number_id{"}"}/thread_control`.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Field label="Action" required hint="Only `release` is currently supported by Meta.">
              <Select value={form.watch("action")} onValueChange={(v) => form.setValue("action", v as ThreadControlInput["action"], { shouldDirty: true })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="release">release</SelectItem>
                  <SelectItem value="pass">pass (reserved)</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field label="To" required hint="Consumer phone number or WhatsApp ID" error={form.formState.errors.to?.message}>
              <Input {...form.register("to")} placeholder="+15551234567" />
            </Field>
            <Field label="Recipient" hint="Optional. Business-scoped user ID (accepted but not yet wired by Meta)." error={form.formState.errors.recipient?.message}>
              <Input {...form.register("recipient")} placeholder="" />
            </Field>
          </CardContent>
          <CardFooter className="justify-end">
            <LoadingButton type="submit" loading={mut.isPending}><Save className="h-4 w-4" /> Send</LoadingButton>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
