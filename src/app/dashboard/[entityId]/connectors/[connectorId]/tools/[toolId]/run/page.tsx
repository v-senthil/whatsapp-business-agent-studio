"use client";
import { use, useMemo, useState } from "react";
import { Loader2, Play } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Field } from "@/components/common/FormField";
import { LoadingButton } from "@/components/common/LoadingButton";
import { ErrorState } from "@/components/common/ErrorState";
import { JsonViewer } from "@/components/common/JsonViewer";
import { useRunTool, useTool } from "@/lib/client/hooks/useConnectors";

export default function ToolRunPage({ params }: { params: Promise<{ entityId: string; connectorId: string; toolId: string }> }) {
  const { entityId, connectorId, toolId } = use(params);
  const tool = useTool(entityId, connectorId, toolId);
  const run = useRunTool(entityId, connectorId, toolId);

  const stub = useMemo(() => {
    if (!tool.data) return "{}";
    const params = tool.data.request_definition?.body?.params ?? {};
    const obj: Record<string, unknown> = {};
    for (const k of Object.keys(params)) obj[k] = "";
    return JSON.stringify(obj, null, 2);
  }, [tool.data]);

  const [input, setInput] = useState<string>("{}");
  const [error, setError] = useState<string | null>(null);

  const useStub = () => setInput(stub);

  async function submit() {
    setError(null);
    try { JSON.parse(input); } catch (e) { setError(`Invalid JSON: ${(e as Error).message}`); return; }
    try { await run.mutateAsync(input); } catch { /* shown below */ }
  }

  if (tool.isLoading) return <Loader2 className="mt-8 h-4 w-4 animate-spin" />;
  if (tool.error) return <ErrorState error={tool.error} />;
  if (!tool.data) return null;

  return (
    <div className="mx-auto max-w-3xl space-y-4 py-4">
      <div>
        <h1 className="text-2xl font-semibold">Test run: {tool.data.name}</h1>
        <p className="text-sm text-muted-foreground">{tool.data.description}</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Input</CardTitle>
          <CardDescription>
            <button className="underline" type="button" onClick={useStub}>Insert param stub</button>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Field label="JSON input" hint="Sent as `{ input: JSON.stringify(...) }`" error={error ?? undefined}>
            <Textarea rows={10} className="font-mono text-xs" value={input} onChange={(e) => setInput(e.target.value)} />
          </Field>
        </CardContent>
        <CardFooter className="justify-end">
          <LoadingButton onClick={submit} loading={run.isPending}><Play className="h-4 w-4" /> Run</LoadingButton>
        </CardFooter>
      </Card>
      {run.error && <ErrorState error={run.error} />}
      {run.data !== undefined && (
        <Card>
          <CardHeader><CardTitle>Response</CardTitle></CardHeader>
          <CardContent><JsonViewer data={run.data} /></CardContent>
        </Card>
      )}
    </div>
  );
}
