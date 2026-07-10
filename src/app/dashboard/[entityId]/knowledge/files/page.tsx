"use client";
import { use } from "react";
import { toast } from "sonner";
import { FileText, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/common/EmptyState";
import { ErrorState } from "@/components/common/ErrorState";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { FileUploader } from "@/components/knowledge/FileUploader";
import { useDeleteFile, useFiles } from "@/lib/client/hooks/useKnowledge";

export default function FilesPage({ params }: { params: Promise<{ entityId: string }> }) {
  const { entityId } = use(params);
  const { data, isLoading, error, refetch } = useFiles(entityId);
  const del = useDeleteFile(entityId);

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader><CardTitle>Upload files</CardTitle></CardHeader>
        <CardContent><FileUploader entityId={entityId} onDone={() => refetch()} /></CardContent>
      </Card>

      {error && <ErrorState error={error} />}
      {!isLoading && (!data || data.length === 0) && (
        <EmptyState icon={<FileText className="h-8 w-8" />} title="No files yet" description="Upload PDFs, docs, or spreadsheets the agent can reference." />
      )}
      {data && data.length > 0 && (
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead />
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((f) => (
                  <TableRow key={f.id}>
                    <TableCell className="font-medium">{f.file_name}</TableCell>
                    <TableCell className="text-muted-foreground">{f.status ?? "—"}</TableCell>
                    <TableCell className="text-muted-foreground">{f.size ? `${Math.round(f.size / 1024)} KB` : "—"}</TableCell>
                    <TableCell className="text-right">
                      <ConfirmDialog
                        trigger={<Button variant="ghost" size="icon" aria-label={`Delete ${f.file_name}`}><Trash2 className="h-4 w-4" /></Button>}
                        title={`Delete ${f.file_name}?`}
                        confirmLabel="Delete"
                        onConfirm={async () => { await del.mutateAsync(f.id); toast.success("Deleted"); }}
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
