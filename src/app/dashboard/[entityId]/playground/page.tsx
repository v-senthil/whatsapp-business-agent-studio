"use client";
import { use, useMemo, useState } from "react";
import { AlertCircle, Loader2, Play, TerminalSquare } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Field } from "@/components/common/FormField";
import { JsonViewer } from "@/components/common/JsonViewer";
import { fetcher } from "@/lib/client/fetcher";

interface QuickCall {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  label: string;
  path: string; // relative to entity_id; empty = the entity_id itself
  description: string;
  body?: string;
}

const QUICK_CALLS: QuickCall[] = [
  { method: "GET",  label: "Eligibility",        path: "agent_eligibility",       description: "Can this phone host an AI agent?" },
  { method: "GET",  label: "List settings",      path: "agent_config/settings",   description: "All agent configs on this phone." },
  { method: "GET",  label: "Business info",      path: "agent_config/business_info", description: "Current business info payload." },
  { method: "GET",  label: "List skills",        path: "agent_config/skills",     description: "All configured skills." },
  { method: "GET",  label: "List connectors",    path: "agent_connectors",        description: "All registered connectors." },
  { method: "GET",  label: "Eval cases",         path: "agent-eval/cases",        description: "Seeded eval cases available." },
  { method: "POST", label: "Test message",       path: "agent_test",              description: "Send a message to the agent.", body: `{\n  "user_msg": "Hi, what are your hours?"\n}` },
];

interface Response {
  status: number;
  ok: boolean;
  duration_ms: number;
  body: unknown;
  headers?: Record<string, string>;
}

export default function PlaygroundPage({ params }: { params: Promise<{ entityId: string }> }) {
  const { entityId } = use(params);
  const [method, setMethod] = useState<QuickCall["method"]>("GET");
  const [path, setPath] = useState("agent_eligibility");
  const [query, setQuery] = useState("");
  const [body, setBody] = useState("");
  const [running, setRunning] = useState(false);
  const [response, setResponse] = useState<Response | null>(null);
  const [error, setError] = useState<string | null>(null);

  const url = useMemo(() => {
    const cleaned = path.replace(/^\/+/, "");
    const q = query.trim().replace(/^\?/, "");
    return `/api/meta/${entityId}${cleaned ? `/${cleaned}` : ""}${q ? `?${q}` : ""}`;
  }, [entityId, path, query]);

  const bodyRequired = method !== "GET" && method !== "DELETE";

  function loadQuickCall(qc: QuickCall) {
    setMethod(qc.method);
    setPath(qc.path);
    setQuery("");
    setBody(qc.body ?? "");
    setResponse(null);
    setError(null);
  }

  async function run() {
    setError(null);
    setResponse(null);
    let jsonBody: unknown = undefined;
    if (bodyRequired && body.trim()) {
      try {
        jsonBody = JSON.parse(body);
      } catch (e) {
        setError(`Invalid JSON body: ${(e as Error).message}`);
        return;
      }
    }
    setRunning(true);
    const start = performance.now();
    try {
      const data = await fetcher<unknown>(url, {
        method,
        json: jsonBody,
      });
      setResponse({
        status: 200,
        ok: true,
        duration_ms: Math.round(performance.now() - start),
        body: data,
      });
    } catch (e) {
      const duration_ms = Math.round(performance.now() - start);
      // fetcher throws MetaApiError with { status, title, detail }.
      const err = e as { status?: number; title?: string; detail?: string; message?: string };
      setResponse({
        status: err.status ?? 0,
        ok: false,
        duration_ms,
        body: {
          title: err.title ?? "Request failed",
          detail: err.detail ?? err.message ?? "Unknown error",
        },
      });
    } finally {
      setRunning(false);
    }
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6 py-4">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-semibold">
          <TerminalSquare className="h-5 w-5" /> API playground
        </h1>
        <p className="text-sm text-muted-foreground">
          Fire any Meta Business Agent Platform call scoped to this phone number. Auth and headers are injected by the proxy.
        </p>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Quick calls</CardTitle>
          <CardDescription>Common endpoints — click to load, then Run.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {QUICK_CALLS.map((qc) => (
            <Button key={`${qc.method}-${qc.path}`} variant="outline" size="sm" onClick={() => loadQuickCall(qc)}>
              <Badge variant="secondary" className="font-mono text-[10px]">{qc.method}</Badge>
              <span className="ml-1">{qc.label}</span>
            </Button>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Request</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-[120px_1fr] gap-2">
            <Select value={method} onValueChange={(v) => setMethod(v as QuickCall["method"])}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {(["GET", "POST", "PUT", "PATCH", "DELETE"] as const).map((m) => (
                  <SelectItem key={m} value={m}>{m}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex items-center gap-1 rounded-md border bg-muted/30 pl-2 font-mono text-xs">
              <span className="text-muted-foreground shrink-0">/api/meta/{entityId}/</span>
              <Input
                className="border-0 bg-transparent font-mono text-xs focus-visible:ring-0"
                value={path}
                onChange={(e) => setPath(e.target.value)}
                placeholder="agent_config/skills"
                aria-label="Endpoint path"
              />
            </div>
          </div>
          <Field label="Query string" hint="Optional, without the leading `?`. E.g. `agent_id=abc&limit=5`.">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder=""
              className="font-mono text-xs"
            />
          </Field>
          {bodyRequired && (
            <Field label="Body (JSON)" hint="Sent as application/json when non-empty.">
              <Textarea
                rows={8}
                className="font-mono text-xs"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="{}"
              />
            </Field>
          )}
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Client-side error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <div className="flex items-center justify-between">
            <div className="text-xs text-muted-foreground font-mono">{url}</div>
            <Button onClick={run} disabled={running}>
              {running ? <Loader2 className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />} Run
            </Button>
          </div>
        </CardContent>
      </Card>

      {response && (
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <CardTitle className="text-sm">Response</CardTitle>
              <Badge variant={response.ok ? "success" : "destructive"}>
                {response.ok ? "OK" : `HTTP ${response.status}`}
              </Badge>
              <span className="text-xs text-muted-foreground">{response.duration_ms}ms</span>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="body">
              <TabsList>
                <TabsTrigger value="body">Body</TabsTrigger>
                <TabsTrigger value="raw">Raw</TabsTrigger>
              </TabsList>
              <TabsContent value="body">
                <JsonViewer data={response.body} />
              </TabsContent>
              <TabsContent value="raw">
                <pre className="max-h-96 overflow-auto rounded-md bg-muted p-3 font-mono text-xs">
                  {typeof response.body === "string" ? response.body : JSON.stringify(response.body, null, 2)}
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
