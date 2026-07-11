"use client";
import * as React from "react";
import { AlertCircle, Loader2, Sparkles, Wand2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Field } from "@/components/common/FormField";
import { fetcher } from "@/lib/client/fetcher";
import { useSession } from "@/lib/client/hooks/useSession";
import type { SkillInput } from "@/lib/schemas/skill";

interface Props {
  onDraft: (draft: SkillInput) => void;
}

interface DraftResponse {
  ok?: boolean;
  draft?: Partial<SkillInput>;
  title?: string;
  detail?: string;
  code?: string;
}

export function AiDraftDialog({ onDraft }: Props) {
  const { data: session } = useSession();
  const configured = !!session?.ai?.provider;
  const [open, setOpen] = React.useState(false);
  const [intent, setIntent] = React.useState("");
  const [busy, setBusy] = React.useState(false);
  const [draft, setDraft] = React.useState<Partial<SkillInput> | null>(null);
  const [error, setError] = React.useState<{ title: string; detail: string } | null>(null);

  async function run() {
    if (!intent.trim() || busy) return;
    setError(null);
    setDraft(null);
    setBusy(true);
    try {
      const resp = await fetcher<DraftResponse>("/api/ai/draft-skill", {
        method: "POST",
        json: { intent: intent.trim() },
      });
      if (resp.ok && resp.draft) {
        setDraft(resp.draft);
      } else {
        setError({ title: resp.title ?? "Draft failed", detail: resp.detail ?? "" });
      }
    } catch (e) {
      // fetcher throws MetaApiError for non-2xx JSON payloads with { title, detail }
      const err = e as { title?: string; detail?: string; message?: string };
      setError({
        title: err.title ?? "Draft failed",
        detail: err.detail ?? err.message ?? "Unknown error",
      });
    } finally {
      setBusy(false);
    }
  }

  function accept() {
    if (!draft) return;
    onDraft({
      title: (draft.title ?? "").trim(),
      description: (draft.description ?? "").trim(),
      skill: (draft.skill ?? "").trim(),
    });
    toast.success("Draft loaded into the form");
    setOpen(false);
    setIntent("");
    setDraft(null);
    setError(null);
  }

  return (
    <>
      <Button type="button" variant="outline" onClick={() => setOpen(true)}>
        <Wand2 className="h-4 w-4" /> AI assist
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> Draft skill with AI
            </DialogTitle>
            <DialogDescription>
              Describe what the agent should do; the configured provider drafts a skill you can accept or edit.
            </DialogDescription>
          </DialogHeader>

          {!configured ? (
            <Alert variant="warning">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>No AI provider configured</AlertTitle>
              <AlertDescription>
                Pick one in{" "}
                <Link href="/settings/ai" className="underline">Settings → AI</Link>
                {" "}first. Either the local Claude Agent SDK or any OpenAI-compatible endpoint works.
              </AlertDescription>
            </Alert>
          ) : (
            <div className="space-y-3">
              <Field label="What should this skill do?" required>
                <Textarea
                  rows={4}
                  autoFocus
                  value={intent}
                  onChange={(e) => setIntent(e.target.value)}
                  placeholder="Customer asks about return policy — reference the FAQ and cite the 30-day window."
                  disabled={busy}
                />
              </Field>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>{error.title}</AlertTitle>
                  <AlertDescription>{error.detail}</AlertDescription>
                </Alert>
              )}

              {draft && (
                <div className="rounded-md border p-3">
                  <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Draft</div>
                  <div className="mt-2 space-y-2">
                    <div>
                      <div className="text-[10px] uppercase tracking-wide text-muted-foreground">Title</div>
                      <div className="text-sm font-medium">{draft.title ?? "—"}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wide text-muted-foreground">Description</div>
                      <div className="text-sm">{draft.description ?? "—"}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wide text-muted-foreground">Skill body</div>
                      <pre className="max-h-56 overflow-auto whitespace-pre-wrap rounded-md bg-muted p-2 font-mono text-xs">
                        {draft.skill ?? "—"}
                      </pre>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            {draft ? (
              <>
                <Button variant="outline" onClick={run} disabled={busy}>
                  {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : null} Regenerate
                </Button>
                <Button onClick={accept}>Use this draft</Button>
              </>
            ) : (
              <Button onClick={run} disabled={busy || !intent.trim() || !configured}>
                {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />} Draft
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
