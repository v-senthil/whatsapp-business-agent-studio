"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

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

export function Breadcrumbs() {
  const pathname = usePathname() ?? "/";
  const parts = pathname.split("/").filter(Boolean);
  const crumbs = parts.map((p, i) => {
    const href = "/" + parts.slice(0, i + 1).join("/");
    const label = LABELS[p] ?? p;
    return { href, label };
  });
  if (crumbs.length === 0) return null;
  return (
    <div className="flex items-center gap-1 px-6 py-3 text-xs text-muted-foreground">
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
  );
}
