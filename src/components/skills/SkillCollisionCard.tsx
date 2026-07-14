"use client";
import * as React from "react";
import Link from "next/link";
import { AlertTriangle, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { detectCollisions, type CollidingSkill } from "@/lib/skill-collisions";

interface SkillLike extends CollidingSkill {
  id: string;
}

interface Props {
  entityId: string;
  skills: SkillLike[];
}

export function SkillCollisionCard({ entityId, skills }: Props) {
  const collisions = React.useMemo(() => detectCollisions(skills), [skills]);
  const [open, setOpen] = React.useState(false);

  if (collisions.length === 0) return null;

  const highCount = collisions.filter((c) => c.severity === "high").length;
  const mediumCount = collisions.length - highCount;

  return (
    <div className="rounded-lg border border-amber-300 bg-amber-50/60 dark:border-amber-700 dark:bg-amber-950/40">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
      >
        <div className="flex items-start gap-2">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
          <div>
            <div className="text-sm font-medium text-amber-900 dark:text-amber-100">
              {collisions.length} potential skill collision{collisions.length !== 1 ? "s" : ""}
            </div>
            <div className="text-xs text-amber-900/80 dark:text-amber-100/80">
              {highCount > 0 && (
                <>
                  <span>{highCount} high{highCount !== 1 ? "" : ""}</span>
                  {mediumCount > 0 && <span>, </span>}
                </>
              )}
              {mediumCount > 0 && <span>{mediumCount} medium</span>}
              <span>. The model may pick the wrong skill when triggers or descriptions overlap.</span>
            </div>
          </div>
        </div>
        {open ? (
          <ChevronUp className="h-4 w-4 shrink-0 text-amber-700 dark:text-amber-300" />
        ) : (
          <ChevronDown className="h-4 w-4 shrink-0 text-amber-700 dark:text-amber-300" />
        )}
      </button>

      {open && (
        <ul className="space-y-3 border-t border-amber-300 px-4 py-3 dark:border-amber-700">
          {collisions.map((c, i) => (
            <li key={i} className="rounded-md border border-amber-200 bg-background/60 p-3 dark:border-amber-800">
              <div className="mb-2 flex items-center gap-2">
                <Badge
                  variant="outline"
                  className={
                    c.severity === "high"
                      ? "border-red-300 text-red-700 dark:border-red-700 dark:text-red-300"
                      : "border-amber-300 text-amber-700 dark:border-amber-700 dark:text-amber-300"
                  }
                >
                  {c.severity}
                </Badge>
                <span className="text-xs text-muted-foreground">{c.reason}</span>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                <SkillRef entityId={entityId} skill={c.a as SkillLike} />
                <SkillRef entityId={entityId} skill={c.b as SkillLike} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SkillRef({ entityId, skill }: { entityId: string; skill: SkillLike }) {
  const href = skill.id ? `/dashboard/${entityId}/skills/${skill.id}` : "#";
  return (
    <Link
      href={href}
      className="group flex items-start gap-2 rounded-md border bg-card p-2 text-sm transition-colors hover:bg-muted/40"
    >
      <div className="min-w-0 flex-1">
        <div className="truncate font-medium">{skill.title}</div>
        <div className="line-clamp-1 text-xs text-muted-foreground">{skill.description}</div>
      </div>
      <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}
