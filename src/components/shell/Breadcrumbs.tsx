"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { HelpButton } from "@/components/common/HelpButton";

const LABELS: Record<string, string> = {
  dashboard: "Dashboard",
  settings: "Settings",
  "business-info": "Business info",
  skills: "Skills",
  knowledge: "Knowledge",
  files: "Files",
  websites: "Websites",
  faqs: "FAQs",
  allowlist: "Allowlist",
  connectors: "Connectors",
  tools: "Tools",
  auth: "Credentials",
  logs: "Logs",
  new: "New",
  evals: "Evals",
  runs: "Run",
  test: "Test chat",
  "thread-control": "Thread control",
  onboarding: "Onboarding",
  run: "Run",
};

// Compact display for id-shaped path segments. UUID-ish and long numeric ids
// get truncated with an ellipsis so the crumb bar stays readable.
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function shortenIdSegment(seg: string): string {
  if (LABELS[seg]) return LABELS[seg];
  if (UUID_RE.test(seg)) return `${seg.slice(0, 4)}…${seg.slice(-4)}`;
  if (/^\d+$/.test(seg) && seg.length > 12) return `${seg.slice(0, 6)}…${seg.slice(-4)}`;
  return seg;
}

export function Breadcrumbs() {
  const pathname = usePathname() ?? "/";
  const parts = pathname.split("/").filter(Boolean);
  const crumbs = parts.map((p, i) => {
    const href = "/" + parts.slice(0, i + 1).join("/");
    const label = shortenIdSegment(p);
    return { href, label };
  });
  if (crumbs.length === 0) return null;
  return (
    <div className="flex items-center justify-between gap-3 px-6 py-3 text-xs text-muted-foreground">
      <div className="flex min-w-0 items-center gap-1">
        {crumbs.map((c, i) => (
          <React.Fragment key={c.href}>
            {i > 0 && <ChevronRight className="h-3 w-3" />}
            {i === crumbs.length - 1 ? (
              <span className="text-foreground">{c.label}</span>
            ) : (
              <Link href={c.href} className="hover:text-foreground">
                {c.label}
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>
      <HelpButton variant="text" />
    </div>
  );
}
