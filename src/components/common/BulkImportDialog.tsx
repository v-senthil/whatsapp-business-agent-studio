"use client";
import * as React from "react";
import { AlertCircle, CheckCircle2, Download, FileUp, Upload } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LoadingButton } from "@/components/common/LoadingButton";
import { parseCsvFile } from "@/lib/utils/csv";

interface Props<TRow, TInput> {
  trigger: React.ReactNode;
  title: string;
  description: React.ReactNode;
  columns: string[];
  sampleHref: string;
  rowSchema: z.ZodType<TInput, z.ZodTypeDef, TRow>;
  submit: (row: TInput) => Promise<unknown>;
  onComplete?: () => void;
}

type Stage = "pick" | "preview" | "importing" | "done";
interface Parsed<TInput> {
  valid: Array<{ index: number; input: TInput }>;
  invalid: Array<{ index: number; message: string; raw: Record<string, string> }>;
  total: number;
}

export function BulkImportDialog<TRow, TInput>({
  trigger,
  title,
  description,
  columns,
  sampleHref,
  rowSchema,
  submit,
  onComplete,
}: Props<TRow, TInput>) {
  const [open, setOpen] = React.useState(false);
  const [stage, setStage] = React.useState<Stage>("pick");
  const [parsed, setParsed] = React.useState<Parsed<TInput> | null>(null);
  const [progress, setProgress] = React.useState({ done: 0, failed: 0 });
  const [fatalError, setFatalError] = React.useState<string | null>(null);

  function reset() {
    setStage("pick");
    setParsed(null);
    setProgress({ done: 0, failed: 0 });
    setFatalError(null);
  }

  async function onFile(file: File) {
    setFatalError(null);
    try {
      const parsedCsv = await parseCsvFile<Record<string, string>>(file);
      const missing = columns.filter((c) => !(parsedCsv.rows[0] && c in parsedCsv.rows[0]));
      if (parsedCsv.rows.length > 0 && missing.length > 0) {
        setFatalError(`CSV is missing required column${missing.length > 1 ? "s" : ""}: ${missing.join(", ")}. Expected columns: ${columns.join(", ")}.`);
        return;
      }
      const valid: Parsed<TInput>["valid"] = [];
      const invalid: Parsed<TInput>["invalid"] = [];
      parsedCsv.rows.forEach((raw, i) => {
        const result = rowSchema.safeParse(raw);
        if (result.success) {
          valid.push({ index: i + 2, input: result.data });
        } else {
          const message = result.error.issues.map((iss) => `${iss.path.join(".") || "row"}: ${iss.message}`).join("; ");
          invalid.push({ index: i + 2, message, raw });
        }
      });
      setParsed({ valid, invalid, total: parsedCsv.rows.length });
      setStage("preview");
    } catch (e) {
      setFatalError(e instanceof Error ? e.message : "Could not parse CSV");
    }
  }

  async function runImport() {
    if (!parsed) return;
    setStage("importing");
    let done = 0;
    let failed = 0;
    for (const item of parsed.valid) {
      try {
        await submit(item.input);
        done++;
      } catch {
        failed++;
      }
      setProgress({ done, failed });
    }
    setStage("done");
    if (failed > 0) toast.error(`${done} imported, ${failed} failed`);
    else toast.success(`${done} imported`);
    onComplete?.();
  }

  const validCount = parsed?.valid.length ?? 0;
  const invalidCount = parsed?.invalid.length ?? 0;

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        className="max-w-2xl"
        // Reset internal state after Radix finishes its close animation so we
        // do not flash the pick view during the fade-out.
        onCloseAutoFocus={() => {
          if (!open) reset();
        }}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        {stage === "pick" && (
          <div className="space-y-4">
            <div className="rounded-md border border-dashed p-6 text-center">
              <FileUp className="mx-auto mb-2 h-6 w-6 text-muted-foreground" />
              <p className="text-sm">Drop a CSV file or</p>
              <label className="mt-2 inline-flex">
                <input
                  type="file"
                  accept=".csv,text/csv"
                  className="hidden"
                  onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])}
                />
                <Button asChild variant="outline" size="sm"><span>Choose file</span></Button>
              </label>
              <p className="mt-3 text-xs text-muted-foreground">Expected columns: <code>{columns.join(", ")}</code></p>
            </div>
            <a
              href={sampleHref}
              download
              className="inline-flex items-center gap-1 text-xs underline text-muted-foreground hover:text-foreground"
            >
              <Download className="h-3 w-3" /> Download sample CSV
            </a>
            {fatalError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Couldn't read CSV</AlertTitle>
                <AlertDescription>{fatalError}</AlertDescription>
              </Alert>
            )}
          </div>
        )}

        {stage === "preview" && parsed && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <Badge variant="success" className="gap-1">
                <CheckCircle2 className="h-3 w-3" /> {validCount} valid
              </Badge>
              {invalidCount > 0 && (
                <Badge variant="destructive" className="gap-1">
                  <AlertCircle className="h-3 w-3" /> {invalidCount} invalid
                </Badge>
              )}
              <span className="text-muted-foreground text-xs">of {parsed.total} total</span>
            </div>
            {invalidCount > 0 && (
              <div className="rounded-md border">
                <ScrollArea className="max-h-56">
                  <table className="w-full text-xs">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="p-2 text-left">Row</th>
                        <th className="p-2 text-left">Error</th>
                      </tr>
                    </thead>
                    <tbody>
                      {parsed.invalid.map((r) => (
                        <tr key={r.index} className="border-t">
                          <td className="p-2 font-mono">{r.index}</td>
                          <td className="p-2 text-destructive">{r.message}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </ScrollArea>
              </div>
            )}
            <p className="text-xs text-muted-foreground">
              Only the valid rows will be imported. Invalid rows are shown so you can fix them and re-upload.
            </p>
          </div>
        )}

        {stage === "importing" && parsed && (
          <div className="space-y-3 py-4">
            <Progress value={Math.round(((progress.done + progress.failed) / validCount) * 100)} />
            <p className="text-sm text-muted-foreground">
              Importing {progress.done + progress.failed} of {validCount}
              {progress.failed > 0 && <> · <span className="text-destructive">{progress.failed} failed</span></>}
            </p>
          </div>
        )}

        {stage === "done" && (
          <Alert>
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Import complete</AlertTitle>
            <AlertDescription>{progress.done} imported. {progress.failed > 0 && `${progress.failed} failed.`}</AlertDescription>
          </Alert>
        )}

        <DialogFooter>
          {stage === "preview" && (
            <>
              <Button variant="outline" onClick={() => setStage("pick")}>Back</Button>
              <LoadingButton disabled={validCount === 0} onClick={runImport}>
                <Upload className="h-4 w-4" /> Import {validCount} rows
              </LoadingButton>
            </>
          )}
          {(stage === "pick" || stage === "done") && (
            <Button variant="outline" onClick={() => setOpen(false)}>{stage === "done" ? "Close" : "Cancel"}</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
