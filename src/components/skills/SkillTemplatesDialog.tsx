"use client";
import * as React from "react";
import { BookMarked, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
import { SKILL_TEMPLATES, type SkillTemplate } from "@/lib/skill-templates";
import { useCreateSkill } from "@/lib/client/hooks/useSkills";

interface Props {
  entityId: string;
  onComplete?: () => void;
  existingTitles?: string[];
}

export function SkillTemplatesDialog({ entityId, onComplete, existingTitles = [] }: Props) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<Set<string>>(new Set());
  const [importing, setImporting] = React.useState(false);
  const [progress, setProgress] = React.useState<{ done: number; failed: number }>({ done: 0, failed: 0 });
  const create = useCreateSkill(entityId);

  const categories = React.useMemo(() => {
    const bucket: Record<string, SkillTemplate[]> = {};
    SKILL_TEMPLATES.forEach((t) => {
      (bucket[t.category] ??= []).push(t);
    });
    return bucket;
  }, []);
  const existing = React.useMemo(() => new Set(existingTitles), [existingTitles]);

  function toggle(slug: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug); else next.add(slug);
      return next;
    });
  }

  async function addSelected() {
    if (selected.size === 0) return;
    setImporting(true);
    setProgress({ done: 0, failed: 0 });
    let done = 0;
    let failed = 0;
    for (const slug of selected) {
      const t = SKILL_TEMPLATES.find((x) => x.slug === slug);
      if (!t) continue;
      try {
        await create.mutateAsync({ title: t.title, description: t.description, skill: t.skill });
        done++;
      } catch {
        failed++;
      }
      setProgress({ done, failed });
    }
    setImporting(false);
    if (failed > 0) toast.error(`${done} added, ${failed} failed`);
    else toast.success(`${done} skill${done === 1 ? "" : "s"} added`);
    setSelected(new Set());
    onComplete?.();
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <BookMarked className="h-4 w-4" /> Templates
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2"><Sparkles className="h-4 w-4" /> Skill templates</DialogTitle>
          <DialogDescription>
            Pre-written skills you can drop in and tweak. Pick one or more and click Add.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-3">
          <div className="space-y-5">
            {Object.entries(categories).map(([cat, items]) => (
              <div key={cat} className="space-y-2">
                <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{cat}</div>
                <div className="grid gap-2 md:grid-cols-2">
                  {items.map((t) => {
                    const isSelected = selected.has(t.slug);
                    const alreadyAdded = existing.has(t.title);
                    return (
                      <Card
                        key={t.slug}
                        role="button"
                        tabIndex={alreadyAdded ? -1 : 0}
                        aria-pressed={isSelected}
                        aria-disabled={alreadyAdded}
                        onClick={() => !alreadyAdded && toggle(t.slug)}
                        onKeyDown={(e) => {
                          if (alreadyAdded) return;
                          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(t.slug); }
                        }}
                        className={
                          "cursor-pointer transition-colors " +
                          (alreadyAdded ? "opacity-60 pointer-events-none" : "hover:bg-muted/40 ") +
                          (isSelected ? "border-primary" : "")
                        }
                      >
                        <CardHeader className="pb-2">
                          <div className="flex items-start gap-2">
                            <Checkbox
                              checked={isSelected}
                              disabled={alreadyAdded}
                              onCheckedChange={() => toggle(t.slug)}
                              // Prevent the card's onClick from firing again
                              // so clicking the checkbox itself doesn't
                              // double-toggle the state.
                              onClick={(e) => e.stopPropagation()}
                              className="mt-0.5"
                            />
                            <div className="flex-1 min-w-0">
                              <CardTitle className="text-sm">{t.title}</CardTitle>
                              <p className="mt-1 text-xs text-muted-foreground">{t.description}</p>
                            </div>
                            {alreadyAdded && (
                              <Badge variant="secondary" className="gap-1">
                                <CheckCircle2 className="h-3 w-3" /> Added
                              </Badge>
                            )}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <pre className="line-clamp-3 whitespace-pre-wrap font-mono text-[11px] text-muted-foreground">{t.skill}</pre>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <DialogFooter className="flex-row items-center justify-between gap-2 sm:justify-between">
          <span className="text-xs text-muted-foreground">
            {selected.size} selected
            {importing && (
              <> · <Loader2 className="inline h-3 w-3 animate-spin" /> Adding {progress.done + progress.failed} / {selected.size}</>
            )}
          </span>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setOpen(false)} disabled={importing}>Cancel</Button>
            <Button onClick={addSelected} disabled={selected.size === 0 || importing}>
              {importing && <Loader2 className="h-4 w-4 animate-spin" />} Add {selected.size || ""}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
