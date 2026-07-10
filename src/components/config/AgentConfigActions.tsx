"use client";
import * as React from "react";
import { AlertTriangle, Download, Loader2, Upload } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { downloadText } from "@/lib/utils/csv";
import {
  exportAgentConfig,
  isValidBundle,
  planImport,
  runImport,
  type AgentConfigBundle,
  type ImportPlan,
  type ImportProgress,
} from "@/lib/utils/agent-config";

interface Props {
  entityId: string;
  onImportComplete?: () => void;
}

export function AgentConfigActions({ entityId, onImportComplete }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      <ExportButton entityId={entityId} />
      <ImportButton entityId={entityId} onComplete={onImportComplete} />
    </div>
  );
}

function ExportButton({ entityId }: { entityId: string }) {
  const [open, setOpen] = React.useState(false);
  const [includeCreds, setIncludeCreds] = React.useState(false);
  const [busy, setBusy] = React.useState(false);

  async function run() {
    setBusy(true);
    try {
      const bundle = await exportAgentConfig(entityId, includeCreds);
      const filename = `agent-config-${entityId}-${bundle.exported_at.slice(0, 10)}.json`;
      downloadText(filename, JSON.stringify(bundle, null, 2), "application/json");
      toast.success("Config exported");
      setOpen(false);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Export failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button variant="outline" onClick={() => setOpen(true)}>
        <Download className="h-4 w-4" /> Export config
      </Button>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Export agent config</DialogTitle>
          <DialogDescription>
            Downloads settings, business info, skills, knowledge, allowlist, connectors, and tools as a single JSON file.
            Uploaded files are listed by name only (binaries are not portable).
          </DialogDescription>
        </DialogHeader>
        <label className="flex items-start gap-3 rounded-md border p-3 text-sm">
          <Checkbox checked={includeCreds} onCheckedChange={(v) => setIncludeCreds(!!v)} className="mt-0.5" />
          <span>
            <span className="font-medium">Include connector credentials</span>
            <p className="mt-1 text-xs text-muted-foreground">
              Off by default. When off, API keys, client secrets, and header values are stripped from the export.
            </p>
          </span>
        </label>
        {includeCreds && (
          <Alert variant="warning">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Sensitive data</AlertTitle>
            <AlertDescription>
              The downloaded file will contain plaintext secrets. Treat it like a credential and delete it after use.
            </AlertDescription>
          </Alert>
        )}
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)} disabled={busy}>Cancel</Button>
          <Button onClick={run} disabled={busy}>
            {busy && <Loader2 className="h-4 w-4 animate-spin" />} Download JSON
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

type Stage = "pick" | "preview" | "importing" | "done";

function ImportButton({ entityId, onComplete }: { entityId: string; onComplete?: () => void }) {
  const [open, setOpen] = React.useState(false);
  const [stage, setStage] = React.useState<Stage>("pick");
  const [bundle, setBundle] = React.useState<AgentConfigBundle | null>(null);
  const [plan, setPlan] = React.useState<ImportPlan | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [progress, setProgress] = React.useState<ImportProgress>({ done: 0, failed: 0, total: 0, step: "" });

  function reset() {
    setStage("pick");
    setBundle(null);
    setPlan(null);
    setError(null);
    setProgress({ done: 0, failed: 0, total: 0, step: "" });
  }

  async function onFile(f: File) {
    setError(null);
    try {
      const text = await f.text();
      const parsed = JSON.parse(text);
      if (!isValidBundle(parsed)) {
        setError("This doesn't look like an exported agent config JSON.");
        return;
      }
      setBundle(parsed);
      setPlan(planImport(parsed));
      setStage("preview");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not parse JSON");
    }
  }

  async function apply() {
    if (!bundle) return;
    setStage("importing");
    const result = await runImport(entityId, bundle, setProgress);
    setStage("done");
    if (result.failed > 0) toast.error(`${result.done} imported, ${result.failed} failed`);
    else toast.success(`${result.done} items imported`);
    onComplete?.();
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) setTimeout(reset, 200);
      }}
    >
      <Button variant="outline" onClick={() => setOpen(true)}>
        <Upload className="h-4 w-4" /> Import config
      </Button>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Import agent config</DialogTitle>
          <DialogDescription>
            Recreates skills, knowledge, allowlist, and connectors + tools on the current phone number.
            Settings are not overwritten (edit them from the Settings tab).
          </DialogDescription>
        </DialogHeader>

        {stage === "pick" && (
          <div className="space-y-4">
            <div className="rounded-md border border-dashed p-6 text-center">
              <Upload className="mx-auto mb-2 h-6 w-6 text-muted-foreground" />
              <label className="inline-flex">
                <input
                  type="file"
                  accept=".json,application/json"
                  className="hidden"
                  onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])}
                />
                <Button asChild variant="outline" size="sm"><span>Choose JSON file</span></Button>
              </label>
              <p className="mt-2 text-xs text-muted-foreground">Files exported from any Agent Studio instance.</p>
            </div>
            {error && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Couldn&apos;t read file</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </div>
        )}

        {stage === "preview" && plan && bundle && (
          <div className="space-y-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Contents</CardTitle>
                <CardDescription className="text-xs">Exported {new Date(bundle.exported_at).toLocaleString()} from <code className="font-mono">{bundle.source_entity_id}</code></CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-2 text-sm">
                <Row label="Business info" value={plan.hasBusinessInfo ? "will import" : "—"} />
                <Row label="Skills" value={plan.skills} />
                <Row label="Websites" value={plan.websites} />
                <Row label="FAQs" value={plan.faqs} />
                <Row label="Allowlist" value={plan.allowlist} />
                <Row label="Connectors" value={plan.connectors} />
                <Row label="Tools" value={plan.tools} />
                <Row label="Files (skipped)" value={plan.filesSkipped} muted />
              </CardContent>
            </Card>
            {!plan.credentialsIncluded && plan.connectors > 0 && (
              <Alert variant="warning">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Credentials are missing</AlertTitle>
                <AlertDescription>
                  This bundle was exported without secrets. Connectors will be created but you&apos;ll need to rotate credentials on each one from the Auth tab.
                </AlertDescription>
              </Alert>
            )}
          </div>
        )}

        {stage === "importing" && (
          <div className="space-y-3 py-2">
            <Progress value={progress.total ? Math.round(((progress.done + progress.failed) / progress.total) * 100) : 0} />
            <p className="text-xs text-muted-foreground">
              {progress.step} — {progress.done + progress.failed} / {progress.total}
              {progress.failed > 0 && <> · <span className="text-destructive">{progress.failed} failed</span></>}
            </p>
          </div>
        )}

        {stage === "done" && (
          <Alert>
            <AlertTitle>Import complete</AlertTitle>
            <AlertDescription>{progress.done} items imported. {progress.failed > 0 && `${progress.failed} failed.`}</AlertDescription>
          </Alert>
        )}

        <DialogFooter>
          {stage === "preview" && (
            <>
              <Button variant="outline" onClick={() => setStage("pick")}>Back</Button>
              <Button onClick={apply}>Apply import</Button>
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

function Row({ label, value, muted }: { label: string; value: number | string; muted?: boolean }) {
  return (
    <div className="flex items-center justify-between rounded-md border p-2">
      <span className={"text-xs " + (muted ? "text-muted-foreground" : "")}>{label}</span>
      <Badge variant="secondary">{value}</Badge>
    </div>
  );
}
