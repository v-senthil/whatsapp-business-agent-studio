"use client";
import * as React from "react";
import { toast } from "sonner";
import { CheckCircle2, Eye, EyeOff, Loader2, Save, Sparkles, Terminal, XCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Field } from "@/components/common/FormField";
import { LoadingButton } from "@/components/common/LoadingButton";
import { ErrorState } from "@/components/common/ErrorState";
import { fetcher } from "@/lib/client/fetcher";
import { useSession, usePatchSession } from "@/lib/client/hooks/useSession";

type Provider = "claude" | "openai";

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

  React.useEffect(() => {
    if (!ai) return;
    if (ai.provider) setProvider(ai.provider);
    if (ai.baseUrl) setBaseUrl(ai.baseUrl);
    if (ai.model) setModel(ai.model);
    setDirty(false);
    setClearKey(false);
    setApiKey("");
  }, [ai?.provider, ai?.baseUrl, ai?.model, ai?.hasApiKey]);

  function markDirty<T>(setter: (v: T) => void) {
    return (v: T) => { setter(v); setDirty(true); };
  }

  async function save() {
    const body: Parameters<typeof patch.mutateAsync>[0] = {
      aiProvider: provider,
      aiModel: model || null,
    };
    if (provider === "openai") {
      body.aiBaseUrl = baseUrl || null;
      if (apiKey) body.aiApiKey = apiKey;
      else if (clearKey) body.aiApiKey = null;
    } else {
      // Clear OpenAI-only fields when switching to Claude to avoid stale state.
      body.aiBaseUrl = null;
      body.aiApiKey = null;
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
              description="Uses the locally-installed Claude Code CLI. No API key needed; consumes your Claude Code session."
              badges={["No API key"]}
            />
            <ProviderOption
              value="openai"
              current={provider}
              icon={<Sparkles className="h-4 w-4" />}
              title="OpenAI-compatible endpoint"
              description="Any /v1/chat/completions API — OpenAI, Ollama, LM Studio, Together, Anthropic-via-proxy, etc."
              badges={["Requires API key"]}
            />
          </RadioGroup>
        </CardContent>
      </Card>

      {provider === "claude" && (
        <Card>
          <CardHeader>
            <CardTitle>Claude Agent SDK settings</CardTitle>
            <CardDescription>
              This provider spawns the local <code className="font-mono">claude</code> binary via the Claude Agent SDK.
              Install and log in first: <code className="font-mono">npm install -g @anthropic-ai/claude-code</code> then run <code className="font-mono">claude</code> once and sign in.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Field label="Model (optional)" hint="Leave blank to use Claude Code's default.">
              <Input value={model} onChange={(e) => markDirty(setModel)(e.target.value)} placeholder="claude-sonnet-4-6" />
            </Field>
            <Alert>
              <AlertTitle>Local-only</AlertTitle>
              <AlertDescription>
                This provider works on machines that have Claude Code installed and authenticated.
                It will fail on hosts (like AppSail) that don&apos;t ship the CLI. Use the OpenAI-compatible option there.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}

      {provider === "openai" && (
        <Card>
          <CardHeader>
            <CardTitle>OpenAI-compatible endpoint</CardTitle>
            <CardDescription>Any endpoint that speaks the <code className="font-mono">POST /chat/completions</code> shape.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Field label="Base URL" hint="e.g. https://api.openai.com/v1 or http://localhost:11434/v1">
              <Input value={baseUrl} onChange={(e) => markDirty(setBaseUrl)(e.target.value)} placeholder="https://api.openai.com/v1" />
            </Field>
            <Field label="Model" required>
              <Input value={model} onChange={(e) => markDirty(setModel)(e.target.value)} placeholder="gpt-4o-mini" />
            </Field>
            <Field
              label="API key"
              hint={ai?.hasApiKey ? "A key is already stored. Leave blank to keep it. Use Clear to remove it." : "Kept in the encrypted session cookie server-side; never returned to the browser."}
            >
              <div className="flex gap-2">
                <Input
                  type={showKey ? "text" : "password"}
                  value={apiKey}
                  onChange={(e) => { setApiKey(e.target.value); setDirty(true); }}
                  placeholder={ai?.hasApiKey ? "•••• leave blank to keep existing ••••" : "sk-..."}
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
