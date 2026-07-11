"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import { HelpCircle } from "lucide-react";
import { helpDocForPath } from "@/lib/help-links";
import { cn } from "@/lib/utils/cn";

interface HelpButtonProps {
  className?: string;
  /**
   * Explicit help doc path (e.g. "advanced/ai-provider"). If provided, wins
   * over the auto path lookup. Useful on pages that live outside the standard
   * dashboard shell (like /settings/ai) where you still want a Help button.
   */
  slug?: string;
  variant?: "compact" | "text";
}

export function HelpButton({ className, slug, variant = "compact" }: HelpButtonProps) {
  const pathname = usePathname() ?? "";
  const href = slug ? `/help/${slug}` : helpDocForPath(pathname);
  if (!href) return null;

  const label = variant === "text" ? "Help" : undefined;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title="Open help for this page in a new tab"
      className={cn(
        "inline-flex items-center gap-1 rounded-md border border-border bg-background px-2 py-1 text-xs text-muted-foreground transition-colors hover:border-emerald-500/40 hover:bg-accent hover:text-foreground",
        className,
      )}
    >
      <HelpCircle className="h-3.5 w-3.5" />
      {label ? <span>{label}</span> : null}
    </a>
  );
}
