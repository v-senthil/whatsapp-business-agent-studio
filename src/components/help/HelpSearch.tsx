"use client";
import * as React from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import type { SearchEntry } from "@/lib/help-docs";

interface Props {
  index: SearchEntry[];
  placeholder?: string;
  className?: string;
}

interface Ranked {
  entry: SearchEntry;
  score: number;
  snippet: string;
}

const MAX_RESULTS = 12;
const SNIPPET_WINDOW = 80;

function tokens(query: string): string[] {
  return query
    .toLowerCase()
    .split(/\s+/)
    .map((t) => t.trim())
    .filter(Boolean);
}

function rank(entry: SearchEntry, qs: string[]): Ranked | null {
  const label = entry.label.toLowerCase();
  const desc = entry.description.toLowerCase();
  const section = entry.section.toLowerCase();
  const text = entry.text.toLowerCase();
  let score = 0;
  let firstHitIdx = -1;
  for (const q of qs) {
    let matched = false;
    if (label.includes(q)) {
      score += 40;
      matched = true;
    }
    if (section.includes(q)) {
      score += 6;
      matched = true;
    }
    if (desc.includes(q)) {
      score += 15;
      matched = true;
    }
    const idx = text.indexOf(q);
    if (idx >= 0) {
      score += 5;
      matched = true;
      if (firstHitIdx < 0 || idx < firstHitIdx) firstHitIdx = idx;
    }
    if (!matched) return null;
  }
  let snippet = "";
  if (firstHitIdx >= 0) {
    const start = Math.max(0, firstHitIdx - 30);
    const end = Math.min(entry.text.length, firstHitIdx + SNIPPET_WINDOW);
    snippet = (start > 0 ? "..." : "") + entry.text.slice(start, end) + (end < entry.text.length ? "..." : "");
  } else {
    snippet = entry.description || entry.text.slice(0, SNIPPET_WINDOW);
  }
  return { entry, score, snippet };
}

function highlight(text: string, qs: string[]): React.ReactNode {
  if (qs.length === 0) return text;
  const pattern = new RegExp("(" + qs.map((q) => q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")", "gi");
  const parts = text.split(pattern);
  return parts.map((part, i) => {
    const match = qs.some((q) => q === part.toLowerCase());
    if (match) {
      return (
        <mark key={i} className="bg-emerald-500/25 text-foreground">
          {part}
        </mark>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

export function HelpSearch({ index, placeholder = "Search help articles...", className }: Props) {
  const [query, setQuery] = React.useState("");
  const [focused, setFocused] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "/" && !isEditableTarget(e.target)) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape" && document.activeElement === inputRef.current) {
        inputRef.current?.blur();
        setQuery("");
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  React.useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) setFocused(false);
    }
    window.addEventListener("mousedown", onClickOutside);
    return () => window.removeEventListener("mousedown", onClickOutside);
  }, []);

  const qs = tokens(query);
  const results = React.useMemo<Ranked[]>(() => {
    if (qs.length === 0) return [];
    const out: Ranked[] = [];
    for (const entry of index) {
      const r = rank(entry, qs);
      if (r) out.push(r);
    }
    out.sort((a, b) => b.score - a.score);
    return out.slice(0, MAX_RESULTS);
  }, [index, qs]);

  const showResults = focused && query.trim().length > 0;

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          placeholder={placeholder}
          type="search"
          className="h-9 w-full rounded-md border border-border bg-background pl-9 pr-16 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        {query ? (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute right-2 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
            aria-label="Clear search"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        ) : (
          <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
            /
          </kbd>
        )}
      </div>

      {showResults ? (
        <div className="absolute left-0 right-0 top-full z-30 mt-2 max-h-[70vh] overflow-y-auto rounded-lg border border-border bg-popover text-popover-foreground shadow-lg">
          {results.length === 0 ? (
            <div className="px-3 py-6 text-center text-sm text-muted-foreground">
              No matches for &quot;{query}&quot;.
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {results.map((r) => (
                <li key={r.entry.slug}>
                  <Link
                    href={r.entry.href}
                    onClick={() => {
                      setFocused(false);
                    }}
                    className="flex flex-col gap-1 px-3 py-2.5 text-sm hover:bg-accent"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-medium">{highlight(r.entry.label, qs)}</span>
                      <span className="shrink-0 text-[10px] uppercase tracking-wider text-muted-foreground">
                        {r.entry.section}
                      </span>
                    </div>
                    <div className="line-clamp-2 text-xs text-muted-foreground">
                      {highlight(r.snippet, qs)}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </div>
  );
}

function isEditableTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
  if (target.isContentEditable) return true;
  return false;
}
