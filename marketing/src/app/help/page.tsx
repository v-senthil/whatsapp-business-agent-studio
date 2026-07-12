import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
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

        <div className="mt-6 max-w-3xl rounded-2xl border border-amber-500/40 bg-amber-50 p-5 shadow-sm dark:bg-amber-950/40">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/15 text-amber-700 ring-1 ring-amber-500/30 dark:text-amber-300">
              <Sparkles className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1 text-sm">
              <div className="font-semibold text-amber-900 dark:text-amber-100">
                WhatsApp Business Agent is currently in Beta
              </div>
              <p className="mt-1 text-amber-900/90 dark:text-amber-100/90">
                The feature has not been released for general availability. To enable it for your
                WABA, an admin must accept the terms and conditions from Meta Business Manager.
              </p>
              <div className="mt-3 space-y-1">
                <div className="text-[11px] font-medium uppercase tracking-widest text-amber-900/70 dark:text-amber-100/70">
                  Enable URL
                </div>
                <code className="block truncate rounded-md bg-background/70 px-3 py-1.5 font-mono text-xs text-foreground ring-1 ring-amber-500/20 dark:bg-amber-950/60">
                  https://business.facebook.com/latest/whatsapp_manager/business_ai?business_id={"{Business ID}"}&amp;asset_id={"{WABA ID}"}
                </code>
                <p className="text-xs text-amber-900/80 dark:text-amber-100/80">
                  Replace the placeholders with your own IDs. If the page loads and prompts an
                  admin to accept the T&amp;C, your WABA is eligible for the Beta. See{" "}
                  <Link
                    href="/help/getting-started/pick-business-and-phone"
                    className="underline underline-offset-2 hover:text-foreground"
                  >
                    Picking a business and phone
                  </Link>{" "}
                  for the full walkthrough.
                </p>
              </div>
            </div>
          </div>
        </div>
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
