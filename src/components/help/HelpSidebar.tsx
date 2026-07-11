"use client";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import type { DocSection } from "@/lib/help-docs";

interface Props {
  sections: DocSection[];
  activeSlug?: string;
}

export function HelpSidebar({ sections, activeSlug }: Props) {
  return (
    <aside className="sticky top-20 hidden h-[calc(100vh-6rem)] w-64 shrink-0 overflow-y-auto pr-2 lg:block">
      <nav className="space-y-6 text-sm">
        <div>
          <Link
            href="/help"
            className={cn(
              "block rounded-md px-2 py-1.5 text-sm font-medium",
              !activeSlug
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
            )}
          >
            All docs
          </Link>
        </div>

        {sections.map((section) => (
          <div key={section.label}>
            <div className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              {section.label}
            </div>
            <ul className="space-y-0.5">
              {section.entries.map((entry) => {
                const active = entry.slug === activeSlug;
                return (
                  <li key={entry.slug}>
                    <Link
                      href={entry.href}
                      className={cn(
                        "block rounded-md px-2 py-1.5 text-sm leading-snug",
                        active
                          ? "bg-accent font-medium text-accent-foreground"
                          : "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
                      )}
                    >
                      {entry.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
