"use client";
import { use } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Globe, Plus, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Field } from "@/components/common/FormField";
import { LoadingButton } from "@/components/common/LoadingButton";
import { EmptyState } from "@/components/common/EmptyState";
import { ErrorState } from "@/components/common/ErrorState";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { websiteSchema, type WebsiteInput } from "@/lib/schemas/knowledge";
import { useCreateWebsite, useDeleteWebsite, useWebsites } from "@/lib/client/hooks/useKnowledge";

export default function WebsitesPage({ params }: { params: Promise<{ entityId: string }> }) {
  const { entityId } = use(params);
  const { data, isLoading, error } = useWebsites(entityId);
  const create = useCreateWebsite(entityId);
  const del = useDeleteWebsite(entityId);

  const form = useForm<WebsiteInput>({ resolver: zodResolver(websiteSchema), defaultValues: { url: "" } });
  const submit = form.handleSubmit(async (v) => {
    try { await create.mutateAsync(v); form.reset(); toast.success("Website added"); } catch { /* shown */ }
  });

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader><CardTitle>Add website</CardTitle></CardHeader>
        <CardContent>
          <form onSubmit={submit} className="flex items-end gap-2">
            <div className="flex-1">
              <Field label="URL" htmlFor="url" required error={form.formState.errors.url?.message}>
                <Input id="url" placeholder="https://example.com" {...form.register("url")} />
              </Field>
            </div>
            <LoadingButton type="submit" loading={create.isPending}><Plus className="h-4 w-4" /> Add</LoadingButton>
          </form>
        </CardContent>
      </Card>

      {error && <ErrorState error={error} />}
      {create.error && <ErrorState error={create.error} />}
      {!isLoading && (!data || data.length === 0) && (
        <EmptyState icon={<Globe className="h-8 w-8" />} title="No websites yet" description="Add a URL for the agent to crawl." />
      )}
      {data && data.length > 0 && (
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow><TableHead>URL</TableHead><TableHead>Status</TableHead><TableHead /></TableRow>
              </TableHeader>
              <TableBody>
                {data.map((w) => (
                  <TableRow key={w.id}>
                    <TableCell className="font-medium">{w.url}</TableCell>
                    <TableCell className="text-muted-foreground">{w.status ?? "—"}</TableCell>
                    <TableCell className="text-right">
                      <ConfirmDialog
                        trigger={<Button variant="ghost" size="icon"><Trash2 className="h-4 w-4" /></Button>}
                        title="Remove website?"
                        confirmLabel="Remove"
                        onConfirm={async () => { await del.mutateAsync(w.id); toast.success("Removed"); }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
