"use client";
import * as React from "react";
import Link from "next/link";
import { toast } from "sonner";
import {
  AlertCircle,
  BookOpen,
  Check,
  Copy,
  ExternalLink,
  FileText,
  Layers,
  Plug,
  Sparkles,
  Upload,
  X,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { LoadingButton } from "@/components/common/LoadingButton";
import { fetcher } from "@/lib/client/fetcher";
import { useCreateSkill } from "@/lib/client/hooks/useSkills";
import { useCreateFaq } from "@/lib/client/hooks/useKnowledge";
import { useSession } from "@/lib/client/hooks/useSession";
import { findConnectorTemplate } from "@/lib/connector-templates";

interface GeneratedFaq { question: string; answer: string; }
interface GeneratedSkill { title: string; description: string; skill: string; }
interface GeneratedConnector { slug: string | null; label: string; reason: string; }
interface GeneratedBundle { faqs: GeneratedFaq[]; skills: GeneratedSkill[]; connectors: GeneratedConnector[]; }

interface Props {
  entityId?: string;
}

const ACCEPTED_EXTS = [".md", ".markdown", ".txt"];

export function DocumentGenerator({ entityId }: Props) {
  const { data: session } = useSession();
  const aiConfigured = !!session?.ai?.provider;
  const [text, setText] = React.useState("");
  const [fileName, setFileName] = React.useState<string | null>(null);
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [bundle, setBundle] = React.useState<GeneratedBundle | null>(null);
  const [truncated, setTruncated] = React.useState(false);
  const [selectedFaqs, setSelectedFaqs] = React.useState<Set<number>>(new Set());
  const [selectedSkills, setSelectedSkills] = React.useState<Set<number>>(new Set());
  const [applying, setApplying] = React.useState(false);
  const [applied, setApplied] = React.useState<{ faqs: number; skills: number } | null>(null);
  const fileRef = React.useRef<HTMLInputElement>(null);

  const createSkill = useCreateSkill(entityId ?? "");
  const createFaq = useCreateFaq(entityId ?? "");

  function onFilePicked(f: File) {
    const lower = f.name.toLowerCase();
    if (!ACCEPTED_EXTS.some((ext) => lower.endsWith(ext))) {
      toast.error("Only .md, .markdown, and .txt are supported. Convert PDF/DOCX to Markdown first.");
      return;
    }
    if (f.size > 2 * 1024 * 1024) {
      toast.error("File is larger than 2 MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const content = String(reader.result ?? "");
      setText(content);
      setFileName(f.name);
    };
    reader.onerror = () => toast.error("Could not read the file.");
    reader.readAsText(f);
  }

  async function generate() {
    setError(null);
    setBundle(null);
    setTruncated(false);
    setApplied(null);
    setBusy(true);
    try {
      const resp = await fetcher<{ ok: boolean; bundle: GeneratedBundle; truncated?: boolean; sourceLength?: number }>(
        "/api/ai/generate-from-document",
        {
          method: "POST",
          json: { text: text.trim() },
        },
      );
      setBundle(resp.bundle);
      setTruncated(!!resp.truncated);
      setSelectedFaqs(new Set(resp.bundle.faqs.map((_, i) => i)));
      setSelectedSkills(new Set(resp.bundle.skills.map((_, i) => i)));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Generation failed.");
    } finally {
      setBusy(false);
    }
  }

  function toggle(set: Set<number>, i: number, setter: (s: Set<number>) => void) {
    const next = new Set(set);
    if (next.has(i)) next.delete(i);
    else next.add(i);
    setter(next);
  }

  async function apply() {
    if (!entityId || !bundle) return;
    setApplying(true);
    setApplied(null);
    let faqCount = 0;
    let skillCount = 0;
    const errs: string[] = [];

    for (const i of selectedFaqs) {
      const f = bundle.faqs[i];
      if (!f) continue;
      try {
        await createFaq.mutateAsync({ question: f.question, answer: f.answer });
        faqCount += 1;
      } catch (e) {
        errs.push(`FAQ "${f.question.slice(0, 40)}": ${e instanceof Error ? e.message : String(e)}`);
      }
    }
    for (const i of selectedSkills) {
      const s = bundle.skills[i];
      if (!s) continue;
      try {
        await createSkill.mutateAsync({ title: s.title, description: s.description, skill: s.skill });
        skillCount += 1;
      } catch (e) {
        errs.push(`Skill "${s.title}": ${e instanceof Error ? e.message : String(e)}`);
      }
    }

    setApplied({ faqs: faqCount, skills: skillCount });
    setApplying(false);
    if (errs.length === 0) toast.success(`Created ${faqCount} FAQ${faqCount === 1 ? "" : "s"} and ${skillCount} skill${skillCount === 1 ? "" : "s"}`);
    else toast.error(`Some items failed: ${errs[0]}${errs.length > 1 ? ` (+${errs.length - 1} more)` : ""}`);
  }

  function copyJson() {
    if (!bundle) return;
    navigator.clipboard.writeText(JSON.stringify(bundle, null, 2));
    toast.success("Copied JSON to clipboard");
  }

  const hasInput = text.trim().length > 0;
  const totalSelected = selectedFaqs.size + selectedSkills.size;

  return (
    <div className="space-y-6">
      {!aiConfigured && (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>AI provider not configured</AlertTitle>
          <AlertDescription>
            Set a provider on the{" "}
            <Link className="underline" href="/settings/ai">AI settings</Link> page before generating.
          </AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" /> Source document
          </CardTitle>
          <CardDescription>
            Upload a Markdown file (.md, .markdown, .txt) or paste text below. For PDF or DOCX, convert to Markdown first
            (e.g. copy-paste from your reader, or use{" "}
            <a
              className="underline"
              href="https://pandoc.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              pandoc
            </a>
            ).
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <input
              ref={fileRef}
              type="file"
              accept={ACCEPTED_EXTS.join(",")}
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) onFilePicked(f);
                if (fileRef.current) fileRef.current.value = "";
              }}
            />
            <Button type="button" variant="outline" size="sm" onClick={() => fileRef.current?.click()}>
              <Upload className="h-3.5 w-3.5" /> Upload Markdown
            </Button>
            {fileName && (
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <FileText className="h-3.5 w-3.5" />
                {fileName}
                <button
                  type="button"
                  className="ml-1 rounded p-0.5 hover:bg-accent"
                  onClick={() => { setFileName(null); setText(""); }}
                  aria-label="Clear"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            <span className="ml-auto text-xs text-muted-foreground">
              {text.length.toLocaleString()} characters
            </span>
          </div>
          <Textarea
            value={text}
            onChange={(e) => { setText(e.target.value); setFileName(null); }}
            rows={10}
            placeholder="Paste your business knowledge, FAQ document, product notes, or support playbook here."
            className="font-mono text-xs"
          />
          <div className="flex justify-end">
            <LoadingButton onClick={generate} loading={busy} disabled={!hasInput || !aiConfigured}>
              <Sparkles className="h-4 w-4" /> Generate
            </LoadingButton>
          </div>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Generation failed</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {bundle && (
        <>
          {truncated && (
            <Alert variant="warning">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Long document truncated</AlertTitle>
              <AlertDescription>
                Only the first 40,000 characters were sent to the model. Some content near the end of the document may be missing from the results.
              </AlertDescription>
            </Alert>
          )}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-sm">
              <span className="font-medium">{bundle.faqs.length}</span> FAQ{bundle.faqs.length === 1 ? "" : "s"}
              {", "}
              <span className="font-medium">{bundle.skills.length}</span> skill{bundle.skills.length === 1 ? "" : "s"}
              {", "}
              <span className="font-medium">{bundle.connectors.length}</span> connector suggestion{bundle.connectors.length === 1 ? "" : "s"}
            </div>
            <div className="flex items-center gap-2">
              <Button type="button" variant="outline" size="sm" onClick={copyJson}>
                <Copy className="h-3.5 w-3.5" /> Copy JSON
              </Button>
              {entityId ? (
                <LoadingButton
                  size="sm"
                  onClick={apply}
                  loading={applying}
                  disabled={totalSelected === 0}
                >
                  <Check className="h-4 w-4" /> Create {totalSelected} selected
                </LoadingButton>
              ) : (
                <span className="text-xs text-muted-foreground">
                  Pick a phone to apply
                </span>
              )}
            </div>
          </div>

          {applied && (
            <Alert>
              <Check className="h-4 w-4" />
              <AlertTitle>Applied</AlertTitle>
              <AlertDescription>
                Created {applied.faqs} FAQ{applied.faqs === 1 ? "" : "s"} and {applied.skills} skill{applied.skills === 1 ? "" : "s"}.
              </AlertDescription>
            </Alert>
          )}

          <FaqPreview
            faqs={bundle.faqs}
            selected={selectedFaqs}
            onToggle={(i) => toggle(selectedFaqs, i, setSelectedFaqs)}
            selectable={!!entityId}
          />

          <SkillPreview
            skills={bundle.skills}
            selected={selectedSkills}
            onToggle={(i) => toggle(selectedSkills, i, setSelectedSkills)}
            selectable={!!entityId}
          />

          <ConnectorPreview connectors={bundle.connectors} entityId={entityId} />
        </>
      )}
    </div>
  );
}

function FaqPreview({
  faqs,
  selected,
  onToggle,
  selectable,
}: {
  faqs: GeneratedFaq[];
  selected: Set<number>;
  onToggle: (i: number) => void;
  selectable: boolean;
}) {
  if (faqs.length === 0) return null;
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-4 w-4" /> FAQs ({faqs.length})
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {faqs.map((f, i) => (
          <div key={i} className="flex gap-3 rounded-md border p-3">
            {selectable && (
              <Checkbox
                checked={selected.has(i)}
                onCheckedChange={() => onToggle(i)}
                className="mt-1"
                aria-label={`Include FAQ ${i + 1}`}
              />
            )}
            <div className="flex-1 space-y-1">
              <div className="text-sm font-medium">{f.question}</div>
              <div className="whitespace-pre-wrap text-sm text-muted-foreground">{f.answer}</div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function SkillPreview({
  skills,
  selected,
  onToggle,
  selectable,
}: {
  skills: GeneratedSkill[];
  selected: Set<number>;
  onToggle: (i: number) => void;
  selectable: boolean;
}) {
  if (skills.length === 0) return null;
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Layers className="h-4 w-4" /> Skills ({skills.length})
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {skills.map((s, i) => (
          <div key={i} className="flex gap-3 rounded-md border p-3">
            {selectable && (
              <Checkbox
                checked={selected.has(i)}
                onCheckedChange={() => onToggle(i)}
                className="mt-1"
                aria-label={`Include skill ${i + 1}`}
              />
            )}
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-baseline gap-2">
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">{s.title}</code>
                <span className="text-xs text-muted-foreground">{s.description}</span>
              </div>
              <pre className="whitespace-pre-wrap rounded bg-muted/50 p-2 font-mono text-xs">{s.skill}</pre>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function ConnectorPreview({ connectors, entityId }: { connectors: GeneratedConnector[]; entityId?: string }) {
  if (connectors.length === 0) return null;
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plug className="h-4 w-4" /> Suggested connectors ({connectors.length})
        </CardTitle>
        <CardDescription>
          Templates matched from the built-in catalog. Freeform suggestions have no slug and need to be built from scratch.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {connectors.map((c, i) => {
          const tpl = c.slug ? findConnectorTemplate(c.slug) : undefined;
          const href = entityId
            ? tpl
              ? `/dashboard/${entityId}/connectors/new?template=${tpl.slug}`
              : `/dashboard/${entityId}/connectors/new`
            : undefined;
          return (
            <div key={i} className="rounded-md border p-3">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-sm font-medium">{tpl?.label ?? c.label ?? "Custom connector"}</span>
                {tpl && <Badge variant="outline" className="text-[10px]">{tpl.category}</Badge>}
                {!tpl && <Badge variant="secondary" className="text-[10px]">Custom</Badge>}
                {href && (
                  <Button asChild variant="ghost" size="sm" className="ml-auto">
                    <Link href={href}>
                      Configure <ExternalLink className="h-3 w-3" />
                    </Link>
                  </Button>
                )}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{c.reason}</p>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
