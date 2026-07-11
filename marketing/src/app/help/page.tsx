import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { HelpShell } from "@/components/help/HelpShell";
import { listSections } from "@/lib/help-docs";

export const metadata: Metadata = {
  title: "Help center | WhatsApp Business Agent Studio",
  description: "Step-by-step documentation for every feature and setting.",
};

export default async function HelpIndex() {
  const sections = await listSections();

  return (
    <HelpShell breadcrumbs={[{ label: "Help" }]}>
      <div className="mb-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground">
          <BookOpen className="h-3 w-3" />
          Documentation
        </div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Help center</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Step-by-step guides for every feature and setting in WhatsApp Business Agent Studio.
          Pick a section below, or jump straight to a topic from the sidebar.
        </p>
      </div>

      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.label}>
            <h2 className="mb-4 text-lg font-semibold tracking-tight">{section.label}</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {section.entries.map((entry) => (
                <Link
                  key={entry.slug}
                  href={entry.href}
                  className="group flex flex-col rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:border-emerald-500/40 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="text-sm font-medium">{entry.label}</div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-emerald-500" />
                  </div>
                  {entry.description ? (
                    <p className="mt-1 text-sm text-muted-foreground">{entry.description}</p>
                  ) : null}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </HelpShell>
  );
}
