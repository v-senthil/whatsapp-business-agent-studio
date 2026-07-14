"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { FileCode, AlertTriangle, ChevronDown, ChevronUp, Check, Download } from "lucide-react";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCreateConnector } from "@/lib/client/hooks/useConnectors";
import { fetcher, metaUrl } from "@/lib/client/fetcher";
import { paramsToRecord } from "@/lib/schemas/tool";
import { qk } from "@/lib/client/query-keys";
import { parseOpenApi, applyAuth, type ParseResult, type ParsedTool, ParseError } from "@/lib/openapi/parse";
import { OAUTH_TOKEN_URL_PLACEHOLDER, type AuthCandidate } from "@/lib/openapi/security-map";

function isValidUrl(s: string): boolean {
  try {
    new URL(s);
    return true;
  } catch {
    return false;
  }
}

const MAX_PASTE_BYTES = 500 * 1024; // 500 KB
const MAX_FILE_BYTES = 2 * 1024 * 1024; // 2 MB

type DialogState = "input" | "preview" | "creating" | "done";

interface Props {
  entityId: string;
}

export function OpenApiImportDialog({ entityId }: Props) {
  const router = useRouter();
  const qc = useQueryClient();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState<DialogState>("input");

  // Input state
  const [text, setText] = React.useState("");
  const [parseError, setParseError] = React.useState<string | null>(null);

  // Preview state
  const [result, setResult] = React.useState<ParseResult | null>(null);
  const [connectorName, setConnectorName] = React.useState("");
  const [connectorDescription, setConnectorDescription] = React.useState("");
  const [baseUrl, setBaseUrl] = React.useState("");
  const [selectedAuthKey, setSelectedAuthKey] = React.useState<string>("");
  const [oauthTokenUrl, setOauthTokenUrl] = React.useState<string>("");
  const [selectedTools, setSelectedTools] = React.useState<Set<string>>(new Set());
  const [showWarnings, setShowWarnings] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  // Creating state
  const [progress, setProgress] = React.useState<string>("");

  const createConnector = useCreateConnector(entityId);
  const redirectTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  function clearRedirectTimeout() {
    if (redirectTimeoutRef.current) {
      clearTimeout(redirectTimeoutRef.current);
      redirectTimeoutRef.current = null;
    }
  }

  React.useEffect(() => {
    return () => clearRedirectTimeout();
  }, []);

  function resetDialog() {
    clearRedirectTimeout();
    setState("input");
    setText("");
    setParseError(null);
    setResult(null);
    setConnectorName("");
    setConnectorDescription("");
    setBaseUrl("");
    setSelectedAuthKey("");
    setOauthTokenUrl("");
    setSelectedTools(new Set());
    setShowWarnings(false);
    setSubmitError(null);
    setProgress("");
  }

  function handleOpenChange(v: boolean) {
    if (!v) resetDialog();
    setOpen(v);
  }

  const selectedCandidate: AuthCandidate | undefined = result?.authCandidates.find(
    (c) => c.schemeKey === selectedAuthKey,
  ) ?? result?.authCandidates[0];
  const isOauth = selectedCandidate?.input.auth_type === "OAUTH2_CLIENT_CREDENTIALS";

  // ---------------------------------------------------------------------------
  // File upload
  // ---------------------------------------------------------------------------
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
    // Reset value so the same file can be re-selected.
    e.target.value = "";
  }

  // ---------------------------------------------------------------------------
  // Parse
  // ---------------------------------------------------------------------------
  function handleParse() {
    setParseError(null);

    if (!text.trim()) {
      setParseError("Paste a spec or upload a file first.");
      return;
    }
    if (new TextEncoder().encode(text).length > MAX_PASTE_BYTES) {
      setParseError(`Pasted text exceeds 500 KB limit. Use file upload instead.`);
      return;
    }

    let raw: unknown;
    try {
      // Try JSON first, fall back to YAML.
      try {
        raw = JSON.parse(text);
      } catch {
        raw = YAML.parse(text);
      }
    } catch (err: unknown) {
      setParseError(`Could not parse: ${err instanceof Error ? err.message : String(err)}`);
      return;
    }

    let parsed: ParseResult;
    try {
      parsed = parseOpenApi(raw);
    } catch (err: unknown) {
      if (err instanceof ParseError) {
        setParseError(err.message);
      } else {
        setParseError(`Unexpected error: ${err instanceof Error ? err.message : String(err)}`);
      }
      return;
    }

    setResult(parsed);
    setConnectorName(parsed.connector.name);
    setConnectorDescription(parsed.connector.description);
    setBaseUrl(parsed.connector.base_url);
    const firstKey = parsed.authCandidates[0]?.schemeKey ?? "";
    setSelectedAuthKey(firstKey);
    setOauthTokenUrl(readOauthTokenUrl(parsed.authCandidates[0]));
    setSelectedTools(new Set(parsed.tools.map((t) => t.name)));
    setSubmitError(null);
    setState("preview");
  }

  function readOauthTokenUrl(candidate: AuthCandidate | undefined): string {
    if (!candidate || candidate.input.auth_type !== "OAUTH2_CLIENT_CREDENTIALS") return "";
    const url = candidate.input.auth_config.oauth2_client_credentials.token_url;
    return url === OAUTH_TOKEN_URL_PLACEHOLDER ? "" : url;
  }

  function handleAuthKeyChange(key: string) {
    setSelectedAuthKey(key);
    const candidate = result?.authCandidates.find((c) => c.schemeKey === key);
    setOauthTokenUrl(readOauthTokenUrl(candidate));
    setSubmitError(null);
  }

  // ---------------------------------------------------------------------------
  // Submit
  // ---------------------------------------------------------------------------
  async function handleCreate() {
    if (!result) return;

    // Pre-submit validation of user-editable fields. Credential values (API key
    // value, OAuth client_id/client_secret, mTLS cert) are intentionally left
    // empty at import time — the user rotates them via the "Rotate credentials"
    // flow after creation, so we do NOT run connectorSchema.safeParse (which
    // would reject empty creds by design).
    const trimmedBaseUrl = baseUrl.trim();
    if (!isValidUrl(trimmedBaseUrl)) {
      setSubmitError("Base URL is not a valid URL. Fix it before creating the connector.");
      return;
    }
    const candidate: AuthCandidate =
      result.authCandidates.find((c) => c.schemeKey === selectedAuthKey) ?? result.authCandidates[0];
    const trimmedOauth = oauthTokenUrl.trim();
    if (candidate.input.auth_type === "OAUTH2_CLIENT_CREDENTIALS" && !isValidUrl(trimmedOauth)) {
      setSubmitError("OAuth token URL is not a valid URL. Fill it in before creating the connector.");
      return;
    }
    setSubmitError(null);
    setState("creating");

    // Build connector input with edited fields and (if OAuth) the user-supplied token URL.
    const authForSubmit: AuthCandidate =
      candidate.input.auth_type === "OAUTH2_CLIENT_CREDENTIALS"
        ? {
            ...candidate,
            input: {
              auth_type: "OAUTH2_CLIENT_CREDENTIALS",
              auth_config: {
                oauth2_client_credentials: {
                  ...candidate.input.auth_config.oauth2_client_credentials,
                  token_url: trimmedOauth,
                },
              },
            },
          }
        : candidate;

    const connectorInput = applyAuth(
      {
        ...result.connector,
        name: connectorName.trim() || result.connector.name,
        description: connectorDescription.trim() || result.connector.description,
        base_url: trimmedBaseUrl || result.connector.base_url,
      },
      authForSubmit,
    );

    // Create connector.
    setProgress("Creating connector...");
    let connId: string;
    try {
      const created = await createConnector.mutateAsync(connectorInput);
      connId = (created as { id: string }).id;
    } catch (err: unknown) {
      toast.error(`Failed to create connector: ${err instanceof Error ? err.message : String(err)}`);
      setState("preview");
      setProgress("");
      return;
    }

    // Create selected tools sequentially. We call fetcher directly instead of
    // useCreateTool because the hook's connectorId is bound at render time and
    // the newly created connId isn't available in this closure via a hook.
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

        await fetcher(metaUrl(entityId, `agent_connectors/${connId}/tools`), {
          method: "POST",
          json: body,
        });
      } catch (err: unknown) {
        failCount++;
        toast.error(`Tool "${tool.name}" failed: ${err instanceof Error ? err.message : String(err)}`);
      }
    }

    // Invalidate the tools cache for the new connector so the detail page
    // renders the freshly created tools on first paint after redirect.
    qc.invalidateQueries({ queryKey: qk.tools(entityId, connId) });

    setState("done");
    setProgress("");

    const successCount = toolsToCreate.length - failCount;
    if (failCount === 0) {
      toast.success(`Connector created with ${successCount} tool${successCount !== 1 ? "s" : ""}.`);
    } else {
      toast.warning(`Connector created. ${successCount} tools succeeded, ${failCount} failed.`);
    }

    // Auto-redirect after 1.5s. Store the timeout id so we can clear it if
    // the user closes the dialog before it fires.
    clearRedirectTimeout();
    redirectTimeoutRef.current = setTimeout(() => {
      redirectTimeoutRef.current = null;
      setOpen(false);
      resetDialog();
      router.replace(`/dashboard/${entityId}/connectors/${connId}`);
    }, 1500);
  }

  // ---------------------------------------------------------------------------
  // Tool selection helpers
  // ---------------------------------------------------------------------------
  function toggleTool(name: string) {
    setSelectedTools((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }

  function selectAll() {
    if (result) setSelectedTools(new Set(result.tools.map((t) => t.name)));
  }

  function selectNone() {
    setSelectedTools(new Set());
  }

  // ---------------------------------------------------------------------------
  // Render helpers
  // ---------------------------------------------------------------------------
  const noToolsSelected = selectedTools.size === 0;

  function renderInputState() {
    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="oa-file">Upload file (.yaml, .yml, .json, max 2 MB)</Label>
          <Input
            id="oa-file"
            type="file"
            accept=".yaml,.yml,.json"
            onChange={handleFile}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="oa-paste">Or paste YAML / JSON</Label>
          <Textarea
            id="oa-paste"
            placeholder={`openapi: 3.0.3\ninfo:\n  title: My API\n  version: "1.0"\nservers:\n  - url: https://api.example.com\npaths:\n  /ping:\n    get:\n      operationId: ping\n      summary: Health check\n      responses:\n        "200":\n          description: OK`}
            value={text}
            onChange={(e) => { setText(e.target.value); setParseError(null); }}
            className="h-48 font-mono text-xs"
          />
        </div>
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            New to OpenAPI? Grab the sample spec and upload it to see the preview.
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
    const warnings = result.warnings;

    return (
      <ScrollArea className="max-h-[65vh] pr-3">
        <div className="space-y-5">
          {/* Connector card */}
          <div className="space-y-3 rounded-lg border p-4">
            <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Connector</div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1">
                <Label htmlFor="oa-conn-name">Name</Label>
                <Input
                  id="oa-conn-name"
                  value={connectorName}
                  onChange={(e) => setConnectorName(e.target.value)}
                  maxLength={100}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="oa-base-url">Base URL</Label>
                <Input
                  id="oa-base-url"
                  value={baseUrl}
                  onChange={(e) => setBaseUrl(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="oa-conn-desc">Description</Label>
              <Textarea
                id="oa-conn-desc"
                value={connectorDescription}
                onChange={(e) => setConnectorDescription(e.target.value)}
                className="h-16 text-sm"
                maxLength={1000}
              />
            </div>

            {/* Server picker */}
            {result.servers.length > 1 && (
              <div className="space-y-1">
                <Label htmlFor="oa-server">Server</Label>
                <Select value={baseUrl} onValueChange={setBaseUrl}>
                  <SelectTrigger id="oa-server">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {result.servers.map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Auth scheme picker */}
            {result.authCandidates.length > 1 && (
              <div className="space-y-2">
                <Label>Authentication scheme</Label>
                <RadioGroup value={selectedAuthKey} onValueChange={handleAuthKeyChange} className="space-y-1">
                  {result.authCandidates.map((c) => (
                    <div key={c.schemeKey} className="flex items-center gap-2">
                      <RadioGroupItem value={c.schemeKey} id={`auth-${c.schemeKey}`} />
                      <Label htmlFor={`auth-${c.schemeKey}`} className="cursor-pointer font-normal text-sm">
                        {c.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {result.authCandidates.length === 1 && (
              <div className="text-xs text-muted-foreground">
                Auth: {result.authCandidates[0].label}
                {" "}
                <Badge variant="secondary" className="text-[10px]">credentials empty, rotate after import</Badge>
              </div>
            )}

            {isOauth && (
              <div className="space-y-1">
                <Label htmlFor="oa-oauth-token-url">OAuth token URL</Label>
                <Input
                  id="oa-oauth-token-url"
                  value={oauthTokenUrl}
                  onChange={(e) => { setOauthTokenUrl(e.target.value); setSubmitError(null); }}
                  placeholder="https://auth.example.com/oauth/token"
                />
                <p className="text-xs text-muted-foreground">
                  Where the studio will exchange client credentials for an access token. Client ID and secret stay empty here, rotate them after import.
                </p>
              </div>
            )}
          </div>

          {/* Tools list */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Tools ({result.tools.length})
              </div>
              <div className="flex gap-2 text-xs">
                <button type="button" onClick={selectAll} className="text-primary underline-offset-2 hover:underline">
                  All
                </button>
                <span className="text-muted-foreground">/</span>
                <button type="button" onClick={selectNone} className="text-primary underline-offset-2 hover:underline">
                  None
                </button>
                <span className="text-muted-foreground">{selectedTools.size} selected</span>
              </div>
            </div>

            {result.tools.length === 0 ? (
              <p className="rounded-md border border-amber-300 bg-amber-50 p-3 text-sm text-amber-800 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-300">
                No operations found in the spec. Check that the spec has a <code>paths</code> section with GET/POST/PUT/PATCH/DELETE operations.
              </p>
            ) : (
              <div className="space-y-1">
                {result.tools.map((tool) => (
                  <ToolRow
                    key={tool.name}
                    tool={tool}
                    checked={selectedTools.has(tool.name)}
                    onToggle={() => toggleTool(tool.name)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Warnings */}
          {warnings.length > 0 && (
            <div className="rounded-md border border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-950">
              <button
                type="button"
                onClick={() => setShowWarnings((v) => !v)}
                className="flex w-full items-center justify-between px-3 py-2 text-sm font-medium text-amber-800 dark:text-amber-300"
              >
                <span className="flex items-center gap-1.5">
                  <AlertTriangle className="h-3.5 w-3.5" />
                  {warnings.length} warning{warnings.length !== 1 ? "s" : ""}
                </span>
                {showWarnings ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
              </button>
              {showWarnings && (
                <ul className="space-y-1 border-t border-amber-300 px-3 py-2 dark:border-amber-700">
                  {warnings.map((w, i) => (
                    <li key={i} className="text-xs text-amber-700 dark:text-amber-400">
                      {w}
                    </li>
                  ))}
                </ul>
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
          <p className="font-medium">Import complete</p>
          <p className="text-sm text-muted-foreground">Redirecting to the new connector...</p>
        </div>
      </div>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <FileCode className="h-4 w-4" /> Import OpenAPI
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Import from OpenAPI spec</DialogTitle>
          <DialogDescription>
            Paste or upload an OpenAPI 3.x spec (YAML or JSON). The studio creates one connector and one tool per operation.
          </DialogDescription>
        </DialogHeader>

        {state === "input" && renderInputState()}
        {state === "preview" && renderPreviewState()}
        {state === "creating" && renderCreatingState()}
        {state === "done" && renderDoneState()}

        {(state === "input" || state === "preview") && (
          <>
            {state === "preview" && submitError && (
              <div className="flex items-start gap-2 rounded-md border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{submitError}</span>
              </div>
            )}
            <DialogFooter className="flex-col gap-2 sm:flex-row">
              <Button variant="outline" onClick={() => handleOpenChange(false)}>
                Cancel
              </Button>
              {state === "input" && (
                <Button onClick={handleParse} disabled={!text.trim()}>
                  Parse spec
                </Button>
              )}
              {state === "preview" && (
                <>
                  <Button variant="outline" onClick={() => setState("input")}>
                    Back
                  </Button>
                  <Button
                    onClick={handleCreate}
                    disabled={noToolsSelected && (result?.tools.length ?? 0) > 0}
                  >
                    Create connector{selectedTools.size > 0 ? ` + ${selectedTools.size} tool${selectedTools.size !== 1 ? "s" : ""}` : ""}
                  </Button>
                </>
              )}
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

// ---------------------------------------------------------------------------
// ToolRow sub-component
// ---------------------------------------------------------------------------
function ToolRow({ tool, checked, onToggle }: { tool: ParsedTool; checked: boolean; onToggle: () => void }) {
  const rd = tool.request_definition;
  const methodColors: Record<string, string> = {
    GET: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
    POST: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
    PUT: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
    PATCH: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
    DELETE: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
  };

  return (
    <div
      className="flex items-start gap-3 rounded-md border px-3 py-2.5 transition-colors hover:bg-muted/40"
    >
      <Checkbox
        id={`tool-${tool.name}`}
        checked={checked}
        onCheckedChange={onToggle}
        className="mt-0.5 shrink-0"
      />
      <Label htmlFor={`tool-${tool.name}`} className="flex min-w-0 flex-1 cursor-pointer flex-col gap-0.5">
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
