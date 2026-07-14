"use client";
import * as React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { AlertTriangle, Check, ChevronDown, ChevronUp, Download, RefreshCw } from "lucide-react";
import YAML from "yaml";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { fetcher, metaUrl } from "@/lib/client/fetcher";
import { paramsToRecord } from "@/lib/schemas/tool";
import { qk } from "@/lib/client/query-keys";
import { parseOpenApi, type ParseResult, type ParsedTool, ParseError } from "@/lib/openapi/parse";
import type { Tool } from "@/types/tool";

const MAX_PASTE_BYTES = 500 * 1024;
const MAX_FILE_BYTES = 2 * 1024 * 1024;

type DialogState = "input" | "preview" | "creating" | "done";

interface Props {
  entityId: string;
  connectorId: string;
  existingTools: Tool[];
}

export function OpenApiResyncDialog({ entityId, connectorId, existingTools }: Props) {
  const qc = useQueryClient();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState<DialogState>("input");

  const [text, setText] = React.useState("");
  const [parseError, setParseError] = React.useState<string | null>(null);

  const [result, setResult] = React.useState<ParseResult | null>(null);
  const [selectedTools, setSelectedTools] = React.useState<Set<string>>(new Set());
  const [showExisting, setShowExisting] = React.useState(false);

  const [progress, setProgress] = React.useState("");
  const closeTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const existingNames = React.useMemo(
    () => new Set(existingTools.map((t) => t.name)),
    [existingTools],
  );

  function clearCloseTimeout() {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }

  React.useEffect(() => () => clearCloseTimeout(), []);

  function resetDialog() {
    clearCloseTimeout();
    setState("input");
    setText("");
    setParseError(null);
    setResult(null);
    setSelectedTools(new Set());
    setShowExisting(false);
    setProgress("");
  }

  function handleOpenChange(v: boolean) {
    if (!v) resetDialog();
    setOpen(v);
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > MAX_FILE_BYTES) {
      setParseError(`File is too large (${(file.size / 1024 / 1024).toFixed(1)} MB). Maximum is 2 MB.`);
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      const content = ev.target?.result as string;
      setText(content);
      setParseError(null);
    };
    reader.readAsText(file);
    e.target.value = "";
  }

  function handleParse() {
    setParseError(null);
    if (!text.trim()) {
      setParseError("Paste a spec or upload a file first.");
      return;
    }
    if (new TextEncoder().encode(text).length > MAX_PASTE_BYTES) {
      setParseError("Pasted text exceeds 500 KB limit. Use file upload instead.");
      return;
    }
    let raw: unknown;
    try {
      try { raw = JSON.parse(text); } catch { raw = YAML.parse(text); }
    } catch (err: unknown) {
      setParseError(`Could not parse: ${err instanceof Error ? err.message : String(err)}`);
      return;
    }
    let parsed: ParseResult;
    try {
      parsed = parseOpenApi(raw);
    } catch (err: unknown) {
      if (err instanceof ParseError) setParseError(err.message);
      else setParseError(`Unexpected error: ${err instanceof Error ? err.message : String(err)}`);
      return;
    }
    setResult(parsed);
    const newNames = parsed.tools.filter((t) => !existingNames.has(t.name)).map((t) => t.name);
    setSelectedTools(new Set(newNames));
    setState("preview");
  }

  async function handleCreate() {
    if (!result) return;
    setState("creating");

    const toolsToCreate = result.tools.filter((t) => selectedTools.has(t.name));
    let failCount = 0;
    for (let i = 0; i < toolsToCreate.length; i++) {
      const tool = toolsToCreate[i];
      setProgress(`Creating tool ${i + 1} of ${toolsToCreate.length}: ${tool.name}...`);
      try {
        const rd = tool.request_definition;
        const body: Record<string, unknown> = {
          name: tool.name,
          description: tool.description,
          user_auth_required: tool.user_auth_required,
          request_definition: {
            method: rd.method,
            path: rd.path,
            path_parameters: paramsToRecord(rd.path_parameters),
            query_parameters: paramsToRecord(rd.query_parameters),
            headers: paramsToRecord(rd.headers),
            ...(rd.body
              ? {
                  body: {
                    content_type: rd.body.content_type,
                    params: paramsToRecord(rd.body.params),
                    required: rd.body.required,
                  },
                }
              : {}),
          },
        };
        await fetcher(metaUrl(entityId, `agent_connectors/${connectorId}/tools`), {
          method: "POST",
          json: body,
        });
      } catch (err: unknown) {
        failCount++;
        toast.error(`Tool "${tool.name}" failed: ${err instanceof Error ? err.message : String(err)}`);
      }
    }

    qc.invalidateQueries({ queryKey: qk.tools(entityId, connectorId) });
    setState("done");
    setProgress("");

    const successCount = toolsToCreate.length - failCount;
    if (failCount === 0) {
      toast.success(`Added ${successCount} tool${successCount !== 1 ? "s" : ""}.`);
    } else {
      toast.warning(`${successCount} tools added, ${failCount} failed.`);
    }

    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      closeTimeoutRef.current = null;
      setOpen(false);
      resetDialog();
    }, 1500);
  }

  function toggleTool(name: string) {
    setSelectedTools((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }

  const newTools = result?.tools.filter((t) => !existingNames.has(t.name)) ?? [];
  const alreadyExisting = result?.tools.filter((t) => existingNames.has(t.name)) ?? [];

  function selectAllNew() {
    setSelectedTools(new Set(newTools.map((t) => t.name)));
  }
  function selectNone() {
    setSelectedTools(new Set());
  }

  function renderInputState() {
    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="oa-resync-file">Upload updated file (.yaml, .yml, .json, max 2 MB)</Label>
          <Input id="oa-resync-file" type="file" accept=".yaml,.yml,.json" onChange={handleFile} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="oa-resync-paste">Or paste YAML / JSON</Label>
          <Textarea
            id="oa-resync-paste"
            placeholder="Paste the updated OpenAPI 3.x spec here..."
            value={text}
            onChange={(e) => { setText(e.target.value); setParseError(null); }}
            className="h-48 font-mono text-xs"
          />
        </div>
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            Existing tools with the same name are left untouched. Only genuinely new operations are added.
          </p>
          <a
            href="/samples/openapi.yaml"
            download
            className="inline-flex shrink-0 items-center gap-1 text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground"
          >
            <Download className="h-3 w-3" /> Download sample spec
          </a>
        </div>
        {parseError && (
          <div className="flex items-start gap-2 rounded-md border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{parseError}</span>
          </div>
        )}
      </div>
    );
  }

  function renderPreviewState() {
    if (!result) return null;
    return (
      <ScrollArea className="max-h-[65vh] pr-3">
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-2 rounded-lg border p-4 text-sm">
            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Parsed from spec</div>
              <div className="mt-1 text-2xl font-semibold">{result.tools.length}</div>
              <div className="text-xs text-muted-foreground">total operations</div>
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">New</div>
              <div className="mt-1 text-2xl font-semibold text-emerald-600 dark:text-emerald-400">{newTools.length}</div>
              <div className="text-xs text-muted-foreground">{alreadyExisting.length} already exist and will be skipped</div>
            </div>
          </div>

          {newTools.length === 0 ? (
            <p className="rounded-md border border-amber-300 bg-amber-50 p-3 text-sm text-amber-800 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-300">
              No new operations detected. Every operation in the spec is already registered as a tool on this connector.
            </p>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  New tools ({newTools.length})
                </div>
                <div className="flex gap-2 text-xs">
                  <button type="button" onClick={selectAllNew} className="text-primary underline-offset-2 hover:underline">All</button>
                  <span className="text-muted-foreground">/</span>
                  <button type="button" onClick={selectNone} className="text-primary underline-offset-2 hover:underline">None</button>
                  <span className="text-muted-foreground">{selectedTools.size} selected</span>
                </div>
              </div>
              <div className="space-y-1">
                {newTools.map((tool) => (
                  <ToolRow
                    key={tool.name}
                    tool={tool}
                    checked={selectedTools.has(tool.name)}
                    onToggle={() => toggleTool(tool.name)}
                  />
                ))}
              </div>
            </div>
          )}

          {alreadyExisting.length > 0 && (
            <div className="rounded-md border">
              <button
                type="button"
                onClick={() => setShowExisting((v) => !v)}
                className="flex w-full items-center justify-between px-3 py-2 text-sm font-medium text-muted-foreground"
              >
                <span>Already exist ({alreadyExisting.length})</span>
                {showExisting ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
              </button>
              {showExisting && (
                <div className="space-y-1 border-t px-3 py-2">
                  {alreadyExisting.map((t) => (
                    <div key={t.name} className="flex items-center gap-2 text-xs">
                      <Badge variant="outline" className="font-mono text-[10px]">{t.request_definition.method}</Badge>
                      <span className="truncate font-mono text-muted-foreground">{t.request_definition.path}</span>
                      <span className="ml-auto shrink-0 text-muted-foreground">{t.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </ScrollArea>
    );
  }

  function renderCreatingState() {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted border-t-primary" />
        <p className="text-sm text-muted-foreground">{progress || "Working..."}</p>
      </div>
    );
  }

  function renderDoneState() {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
          <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
        </div>
        <div>
          <p className="font-medium">Re-sync complete</p>
          <p className="text-sm text-muted-foreground">Closing...</p>
        </div>
      </div>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <RefreshCw className="h-4 w-4" /> Re-sync from spec
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Re-sync tools from OpenAPI spec</DialogTitle>
          <DialogDescription>
            Upload an updated spec. Only new operations are added. Tools matching by name stay as they are.
          </DialogDescription>
        </DialogHeader>

        {state === "input" && renderInputState()}
        {state === "preview" && renderPreviewState()}
        {state === "creating" && renderCreatingState()}
        {state === "done" && renderDoneState()}

        {(state === "input" || state === "preview") && (
          <DialogFooter className="flex-col gap-2 sm:flex-row">
            <Button variant="outline" onClick={() => handleOpenChange(false)}>Cancel</Button>
            {state === "input" && (
              <Button onClick={handleParse} disabled={!text.trim()}>Parse spec</Button>
            )}
            {state === "preview" && (
              <>
                <Button variant="outline" onClick={() => setState("input")}>Back</Button>
                <Button onClick={handleCreate} disabled={selectedTools.size === 0}>
                  Add {selectedTools.size} tool{selectedTools.size !== 1 ? "s" : ""}
                </Button>
              </>
            )}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}

function ToolRow({
  tool,
  checked,
  onToggle,
}: {
  tool: ParsedTool;
  checked: boolean;
  onToggle: () => void;
}) {
  const rd = tool.request_definition;
  const methodColors: Record<string, string> = {
    GET: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
    POST: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
    PUT: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
    PATCH: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
    DELETE: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
  };
  return (
    <div className="flex items-start gap-3 rounded-md border px-3 py-2.5 transition-colors hover:bg-muted/40">
      <Checkbox
        id={`resync-tool-${tool.name}`}
        checked={checked}
        onCheckedChange={onToggle}
        className="mt-0.5 shrink-0"
      />
      <Label
        htmlFor={`resync-tool-${tool.name}`}
        className="flex min-w-0 flex-1 cursor-pointer flex-col gap-0.5"
      >
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex shrink-0 rounded px-1.5 py-0.5 font-mono text-[10px] font-semibold ${methodColors[rd.method] ?? ""}`}
          >
            {rd.method}
          </span>
          <span className="truncate font-mono text-xs text-muted-foreground">{rd.path}</span>
        </div>
        <span className="text-sm font-medium">{tool.name}</span>
        {tool.description && (
          <span className="line-clamp-1 text-xs text-muted-foreground">{tool.description}</span>
        )}
      </Label>
    </div>
  );
}
