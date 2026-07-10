"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Save, Trash2 } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field } from "@/components/common/FormField";
import { LoadingButton } from "@/components/common/LoadingButton";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { skillSchema, type SkillInput } from "@/lib/schemas/skill";

interface SkillFormProps {
  initial?: Partial<SkillInput>;
  loading?: boolean;
  onSubmit: (values: SkillInput) => void | Promise<void>;
  onDelete?: () => void;
  onCancel?: () => void;
}

export function SkillForm({ initial, loading, onSubmit, onDelete, onCancel }: SkillFormProps) {
  const form = useForm<SkillInput>({
    resolver: zodResolver(skillSchema),
    defaultValues: { title: initial?.title ?? "", description: initial?.description ?? "", skill: initial?.skill ?? "" },
  });
  const submit = form.handleSubmit((v) => onSubmit(v));
  return (
    <form onSubmit={submit}>
      <Card>
        <CardHeader>
          <CardTitle>{initial ? "Edit skill" : "New skill"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Field label="Title" required error={form.formState.errors.title?.message}>
            <Input {...form.register("title")} placeholder="e.g. return-policy-lookup" />
          </Field>
          <Field label="Description" required hint="When should the agent use this skill?" error={form.formState.errors.description?.message}>
            <Textarea rows={3} {...form.register("description")} />
          </Field>
          <Field label="Instruction body" required hint="The prompt-style instruction the agent follows." error={form.formState.errors.skill?.message}>
            <Textarea rows={14} className="font-mono text-sm" {...form.register("skill")} />
          </Field>
        </CardContent>
        <CardFooter className="justify-between">
          <div className="flex gap-2">
            {onDelete && (
              <ConfirmDialog
                trigger={<Button type="button" variant="outline"><Trash2 className="h-4 w-4" /> Delete</Button>}
                title="Delete skill?"
                description="This cannot be undone."
                confirmLabel="Delete"
                onConfirm={onDelete}
              />
            )}
          </div>
          <div className="flex gap-2">
            {onCancel && <Button type="button" variant="ghost" onClick={onCancel}>Cancel</Button>}
            <LoadingButton type="submit" loading={loading}>
              <Save className="h-4 w-4" /> Save
            </LoadingButton>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
}
