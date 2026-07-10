"use client";
import { use } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";

const TABS = [
  { slug: "files", label: "Files" },
  { slug: "websites", label: "Websites" },
  { slug: "faqs", label: "FAQs" },
  { slug: "allowlist", label: "Allowlist" },
];

export default function KnowledgeLayout({
  params,
  children,
}: {
  params: Promise<{ entityId: string }>;
  children: React.ReactNode;
}) {
  const { entityId } = use(params);
  const pathname = usePathname() ?? "";
  return (
    <div className="space-y-4 py-4">
      <div>
        <h1 className="text-2xl font-semibold">Knowledge</h1>
        <p className="text-sm text-muted-foreground">What the agent knows about your business.</p>
      </div>
      <div className="inline-flex rounded-lg bg-muted p-1">
        {TABS.map((t) => {
          const href = `/dashboard/${entityId}/knowledge/${t.slug}`;
          const active = pathname.startsWith(href);
          return (
            <Link
              key={t.slug}
              href={href}
              className={cn(
                "rounded-md px-3 py-1 text-sm font-medium text-muted-foreground",
                active && "bg-background text-foreground shadow",
              )}
            >
              {t.label}
            </Link>
          );
        })}
      </div>
      <div>{children}</div>
    </div>
  );
}
