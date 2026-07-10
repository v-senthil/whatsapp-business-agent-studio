"use client";
import { Fragment, use, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { BookOpen, Plus, Trash2 } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Field } from "@/components/common/FormField";
import { LoadingButton } from "@/components/common/LoadingButton";
import { EmptyState } from "@/components/common/EmptyState";
import { ErrorState } from "@/components/common/ErrorState";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { faqSchema, type FaqInput } from "@/lib/schemas/knowledge";
import { useCreateFaq, useDeleteFaq, useFaqs } from "@/lib/client/hooks/useKnowledge";

export default function FaqsPage({ params }: { params: Promise<{ entityId: string }> }) {
  const { entityId } = use(params);
  const { data, isLoading, error } = useFaqs(entityId);
  const create = useCreateFaq(entityId);
  const del = useDeleteFaq(entityId);
  const [expanded, setExpanded] = useState<string | null>(null);

  const FAQ_EMPTY: FaqInput = { question: "", answer: "", metadata: "" };
  const form = useForm<FaqInput>({ resolver: zodResolver(faqSchema), defaultValues: FAQ_EMPTY });
  const submit = form.handleSubmit(async (v) => {
    let meta: Record<string, string> | undefined;
    if (v.metadata) { try { meta = JSON.parse(v.metadata); } catch { form.setError("metadata", { message: "Invalid JSON" }); return; } }
    try {
      await create.mutateAsync({ question: v.question, answer: v.answer, metadata: meta });
      form.reset(FAQ_EMPTY); toast.success("FAQ added");
    } catch { /* shown */ }
  });

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader><CardTitle>Add FAQ</CardTitle></CardHeader>
        <form onSubmit={submit}>
          <CardContent className="space-y-3">
            <Field label="Question" required error={form.formState.errors.question?.message}>
              <Input {...form.register("question")} placeholder="What is your return policy?" />
            </Field>
            <Field label="Answer" required error={form.formState.errors.answer?.message}>
              <Textarea rows={4} {...form.register("answer")} />
            </Field>
            <Field label="Metadata (JSON)" hint="Optional. e.g. {&quot;category&quot;: &quot;returns&quot;}" error={form.formState.errors.metadata?.message}>
              <Textarea rows={2} className="font-mono text-xs" {...form.register("metadata")} />
            </Field>
          </CardContent>
          <CardFooter className="justify-end"><LoadingButton type="submit" loading={create.isPending}><Plus className="h-4 w-4" /> Add FAQ</LoadingButton></CardFooter>
        </form>
      </Card>

      {error && <ErrorState error={error} />}
      {create.error && <ErrorState error={create.error} />}
      {!isLoading && (!data || data.length === 0) && (
        <EmptyState icon={<BookOpen className="h-8 w-8" />} title="No FAQs yet" description="Common questions and their answers help the agent respond faster." />
      )}
      {data && data.length > 0 && (
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow><TableHead>Question</TableHead><TableHead /></TableRow>
              </TableHeader>
              <TableBody>
                {data.map((f) => (
                  <Fragment key={f.id}>
                    <TableRow onClick={() => setExpanded(expanded === f.id ? null : f.id)} className="cursor-pointer">
                      <TableCell className="font-medium">{f.question}</TableCell>
                      <TableCell className="text-right">
                        <ConfirmDialog
                          trigger={<Button variant="ghost" size="icon" onClick={(e) => e.stopPropagation()}><Trash2 className="h-4 w-4" /></Button>}
                          title="Delete FAQ?"
                          confirmLabel="Delete"
                          onConfirm={async () => { await del.mutateAsync(f.id); toast.success("Deleted"); }}
                        />
                      </TableCell>
                    </TableRow>
                    {expanded === f.id && (
                      <TableRow>
                        <TableCell colSpan={2} className="whitespace-pre-wrap bg-muted/30 text-sm">{f.answer}</TableCell>
                      </TableRow>
                    )}
                  </Fragment>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
