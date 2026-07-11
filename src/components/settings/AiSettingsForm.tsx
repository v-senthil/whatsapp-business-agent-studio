"use client";
import * as React from "react";
import { toast } from "sonner";
import { CheckCircle2, Eye, EyeOff, Loader2, RefreshCw, Save, Sparkles, Terminal, XCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Field } from "@/components/common/FormField";
import { LoadingButton } from "@/components/common/LoadingButton";
import { ErrorState } from "@/components/common/ErrorState";
import { fetcher } from "@/lib/client/fetcher";
import { useSession, usePatchSession } from "@/lib/client/hooks/useSession";

type Provider = "claude" | "openai";

const MODEL_DATALIST_ID = "wabiz-ai-model-list";

export function AiSettingsForm() {
  const { data, isLoading } = useSession();
  const patch = usePatchSession();
  const ai = data?.ai;

  const [provider, setProvider] = React.useState<Provider>("claude");
  const [baseUrl, setBaseUrl] = React.useState("https://api.openai.com/v1");
  const [model, setModel] = React.useState("gpt-4o-mini");
  const [apiKey, setApiKey] = React.useState("");
  const [clearKey, setClearKey] = React.useState(false);
  const [showKey, setShowKey] = React.useState(false);
  const [dirty, setDirty] = React.useState(false);

  const [availableModels, setAvailableModels] = React.useState<string[]>([]);
  const [modelsLoading, setModelsLoading] = React.useState(false);
  const [modelsError, setModelsError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!ai) return;
    if (ai.provider) setProvider(ai.provider);
    if (ai.baseUrl) setBaseUrl(ai.baseUrl);
    if (ai.model) setModel(ai.model);
    setDirty(false);
    setClearKey(false);
    setApiKey("");
    setAvailableModels([]);
    setModelsError(null);
  }, [ai?.provider, ai?.baseUrl, ai?.model, ai?.hasApiKey]);

  async function loadModels() {
    setModelsError(null);
    setModelsLoading(true);
    try {
      const resp = await fetcher<{ ok: boolean; models?: string[]; error?: string }>(
        "/api/ai/list-models",
        {
          method: "POST",
          json: {
            baseUrl: baseUrl.trim(),
            apiKey: apiKey || undefined,
          },
        },
      );
      if (resp.ok && resp.models) {
        setAvailableModels(resp.models);
        if (resp.models.length === 0) {
          setModelsError("The endpoint returned an empty list. You can still type a model name.");
        } else {
          toast.success(`Loaded ${resp.models.length} model${resp.models.length === 1 ? "" : "s"}`);
        }
      } else {
        setModelsError(resp.error ?? "Could not load models.");
      }
    } catch (e) {
      setModelsError(e instanceof Error ? e.message : "Could not load models.");
    } finally {
      setModelsLoading(false);
    }
  }

  async function save() {
    const body: Parameters<typeof patch.mutateAsync>[0] = {
      aiProvider: provider,
    };
    if (provider === "openai") {
      body.aiBaseUrl = baseUrl.trim() || null;
      body.aiModel = model.trim() || null;
      if (apiKey) body.aiApiKey = apiKey;
      else if (clearKey) body.aiApiKey = null;
    } else {
      // Claude Agent SDK — clear OpenAI-only fields to avoid stale state.
      body.aiBaseUrl = null;
      body.aiApiKey = null;
      body.aiModel = null;
    }
    try {
      await patch.mutateAsync(body);
      toast.success("AI settings saved");
      setDirty(false);
      setClearKey(false);
      setApiKey("");
    } catch {
      /* rendered below */
    }
  }

  return (
    <div className="space-y-6">
      {patch.error && <ErrorState error={patch.error} />}

      <Card>
        <CardHeader>
          <CardTitle>Provider</CardTitle>
          <CardDescription>Pick where AI-assisted drafts come from.</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={provider}
            onValueChange={(v) => { setProvider(v as Provider); setDirty(true); }}
            className="grid gap-2 md:grid-cols-2"
          >
            <ProviderOption
              value="claude"
              current={provider}
              icon={<Terminal className="h-4 w-4" />}
              title="Claude Agent SDK (local)"
              description="Uses the locally-installed Claude Code CLI. Nothing to configure; consumes your Claude Code session."
              badges={["No API key"]}
            />
            <ProviderOption
              value="openai"
              current={provider}
              icon={<Sparkles className="h-4 w-4" />}
              title="OpenAI-compatible endpoint"
              description="Any /v1/chat/completions API — OpenAI, Ollama, LM Studio, Together, Anthropic-via-proxy, etc. Local endpoints often don't need a key."
              badges={["Base URL + model"]}
            />
          </RadioGroup>
        </CardContent>
      </Card>

      {provider === "openai" && (
        <Card>
          <CardHeader>
            <CardTitle>OpenAI-compatible endpoint</CardTitle>
            <CardDescription>
              Any endpoint that speaks the <code className="font-mono">POST /chat/completions</code> shape.
              Common bases: OpenAI = <code className="font-mono">https://api.openai.com/v1</code>,
              Ollama = <code className="font-mono">http://localhost:11434/v1</code>,
              LM Studio = <code className="font-mono">http://localhost:1234/v1</code>.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Field label="Base URL" required>
              <Input
                value={baseUrl}
                onChange={(e) => { setBaseUrl(e.target.value); setDirty(true); }}
                placeholder="https://api.openai.com/v1"
              />
            </Field>

            <Field
              label="Model"
              required
              hint={
                availableModels.length > 0
                  ? `${availableModels.length} model${availableModels.length === 1 ? "" : "s"} loaded from the endpoint — start typing to filter.`
                  : "Type a model name, or click Load models to browse what the endpoint offers."
              }
              error={modelsError ?? undefined}
            >
              <div className="flex gap-2">
                <Input
                  value={model}
                  onChange={(e) => { setModel(e.target.value); setDirty(true); }}
                  placeholder="gpt-4o-mini"
                  list={availableModels.length > 0 ? MODEL_DATALIST_ID : undefined}
                />
                <Button type="button" variant="outline" size="sm" onClick={loadModels} disabled={modelsLoading || !baseUrl.trim()}>
                  {modelsLoading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <RefreshCw className="h-3.5 w-3.5" />}
                  Load models
                </Button>
              </div>
              {availableModels.length > 0 && (
                <datalist id={MODEL_DATALIST_ID}>
                  {availableModels.map((m) => <option key={m} value={m} />)}
                </datalist>
              )}
            </Field>

            <Field
              label="API key"
              hint={
                ai?.hasApiKey
                  ? "A key is already stored. Leave blank to keep it, or check Clear to remove it. Local endpoints (Ollama, LM Studio) usually don't need one."
                  : "Optional — local endpoints (Ollama, LM Studio) usually don't need one. Kept server-side in an encrypted cookie; never returned to the browser."
              }
            >
              <div className="flex gap-2">
                <Input
                  type={showKey ? "text" : "password"}
                  value={apiKey}
                  onChange={(e) => { setApiKey(e.target.value); setDirty(true); }}
                  placeholder={ai?.hasApiKey ? "•••• leave blank to keep existing ••••" : "leave blank for local LLMs"}
                  autoComplete="off"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  aria-label={showKey ? "Hide key" : "Show key"}
                  onClick={() => setShowKey((v) => !v)}
                >
                  {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              {ai?.hasApiKey && !apiKey && (
                <label className="mt-2 flex items-center gap-2 text-xs">
                  <input
                    type="checkbox"
                    checked={clearKey}
                    onChange={(e) => { setClearKey(e.target.checked); setDirty(true); }}
                  />
                  Clear the stored API key
                </label>
              )}
            </Field>
          </CardContent>
        </Card>
      )}

      {provider === "claude" && (
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Local-only provider</AlertTitle>
          <AlertDescription>
            Runs via the local <code className="font-mono">claude</code> binary. Install once with{" "}
            <code className="font-mono">npm i -g @anthropic-ai/claude-code</code>{" "}
            and run <code className="font-mono">claude</code> to sign in. Uses whatever model Claude Code defaults to; no further configuration.
          </AlertDescription>
        </Alert>
      )}

      <div className="flex items-center justify-between">
        <TestButton disabled={!ai?.provider} />
        <LoadingButton onClick={save} loading={patch.isPending} disabled={!dirty || isLoading}>
          <Save className="h-4 w-4" /> Save
        </LoadingButton>
      </div>
    </div>
  );
}

function ProviderOption({
  value,
  current,
  icon,
  title,
  description,
  badges,
}: {
  value: Provider;
  current: Provider;
  icon: React.ReactNode;
  title: string;
  description: string;
  badges?: string[];
}) {
  const isSelected = current === value;
  return (
    <Label
      htmlFor={`ai-provider-${value}`}
      className={
        "flex cursor-pointer flex-col gap-2 rounded-md border p-3 " +
        (isSelected ? "border-primary" : "hover:bg-accent")
      }
    >
      <div className="flex items-center gap-2">
        <RadioGroupItem id={`ai-provider-${value}`} value={value} />
        {icon}
        <span className="text-sm font-medium">{title}</span>
      </div>
      <p className="text-xs text-muted-foreground">{description}</p>
      {badges && (
        <div className="flex gap-1">
          {badges.map((b) => <Badge key={b} variant="outline" className="text-[10px]">{b}</Badge>)}
        </div>
      )}
    </Label>
  );
}

function TestButton({ disabled }: { disabled: boolean }) {
  const [state, setState] = React.useState<{ ok: boolean; msg: string } | null>(null);
  const [busy, setBusy] = React.useState(false);
  async function run() {
    setState(null);
    setBusy(true);
    try {
      const resp = await fetcher<{ ok: boolean; provider?: string; sample?: string; error?: string }>(
        "/api/ai/test",
        { method: "POST", json: {} },
      );
      if (resp.ok) setState({ ok: true, msg: `Connected · ${resp.sample?.slice(0, 60) ?? "OK"}` });
      else setState({ ok: false, msg: resp.error ?? "Test failed" });
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Test failed";
      setState({ ok: false, msg });
    } finally {
      setBusy(false);
    }
  }
  return (
    <div className="flex items-center gap-2">
      <Button type="button" variant="outline" size="sm" disabled={disabled || busy} onClick={run}>
        {busy ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : null} Test connection
      </Button>
      {state && (
        <span className={"flex items-center gap-1 text-xs " + (state.ok ? "text-emerald-600 dark:text-emerald-400" : "text-destructive")}>
          {state.ok ? <CheckCircle2 className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
          {state.msg}
        </span>
      )}
    </div>
  );
}
