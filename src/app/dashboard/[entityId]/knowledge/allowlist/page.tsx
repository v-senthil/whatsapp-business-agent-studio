"use client";
import { use } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ListChecks, Plus, Trash2, Upload } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Field } from "@/components/common/FormField";
import { LoadingButton } from "@/components/common/LoadingButton";
import { EmptyState } from "@/components/common/EmptyState";
import { ErrorState } from "@/components/common/ErrorState";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { BulkImportDialog } from "@/components/common/BulkImportDialog";
import { ExportCsvButton } from "@/components/common/ExportCsvButton";
import { allowlistSchema, type AllowlistInput } from "@/lib/schemas/knowledge";
import { useAllowlist, useCreateAllowlist, useDeleteAllowlist } from "@/lib/client/hooks/useKnowledge";

const EMPTY: AllowlistInput = { consumer_phone_number: "" };

export default function AllowlistPage({ params }: { params: Promise<{ entityId: string }> }) {
  const { entityId } = use(params);
  const { data, isLoading, error, refetch } = useAllowlist(entityId);
  const create = useCreateAllowlist(entityId);
  const del = useDeleteAllowlist(entityId);

  const exportRows = (data ?? []).map((e) => ({ consumer_phone_number: e.consumer_phone_number }));

  const form = useForm<AllowlistInput>({ resolver: zodResolver(allowlistSchema), defaultValues: EMPTY });
  const submit = form.handleSubmit(async (v) => {
    try {
      await create.mutateAsync(v);
      form.reset(EMPTY);
      toast.success("Added");
    } catch { /* shown */ }
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-end gap-2">
        <ExportCsvButton filename="allowlist.csv" columns={["consumer_phone_number"]} rows={exportRows} />
        <BulkImportDialog
          trigger={<Button variant="outline"><Upload className="h-4 w-4" /> Import CSV</Button>}
          title="Import allowlist from CSV"
          description="Each row is a consumer phone number in E.164 format."
          columns={["consumer_phone_number"]}
          sampleHref="/samples/allowlist.csv"
          rowSchema={allowlistSchema}
          submit={(row) => create.mutateAsync(row)}
          onComplete={() => refetch()}
        />
      </div>
      <Card>
        <CardHeader><CardTitle>Add allowlisted consumer</CardTitle></CardHeader>
        <CardContent>
          <form onSubmit={submit} className="flex items-end gap-2">
            <div className="flex-1">
              <Field
                label="Consumer phone number"
                required
                hint="E.164 format, e.g. +15551234567"
                error={form.formState.errors.consumer_phone_number?.message}
              >
                <Input {...form.register("consumer_phone_number")} placeholder="+15551234567" />
              </Field>
            </div>
            <LoadingButton type="submit" loading={create.isPending}><Plus className="h-4 w-4" /> Add</LoadingButton>
          </form>
        </CardContent>
      </Card>

      {error && <ErrorState error={error} />}
      {create.error && <ErrorState error={create.error} />}
      {!isLoading && (!data || data.length === 0) && (
        <EmptyState
          icon={<ListChecks className="h-8 w-8" />}
          title="Allowlist is empty"
          description="When AI audience is set to Allowlisted only, only these consumers will get agent responses."
        />
      )}
      {data && data.length > 0 && (
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader><TableRow><TableHead>Consumer phone number</TableHead><TableHead /></TableRow></TableHeader>
              <TableBody>
                {data.map((e) => (
                  <TableRow key={e.id}>
                    <TableCell className="font-mono text-xs">{e.consumer_phone_number}</TableCell>
                    <TableCell className="text-right">
                      <ConfirmDialog
                        trigger={<Button variant="ghost" size="icon" aria-label="Remove entry"><Trash2 className="h-4 w-4" /></Button>}
                        title="Remove entry?" confirmLabel="Remove"
                        onConfirm={async () => { await del.mutateAsync(e.id); toast.success("Removed"); }}
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
