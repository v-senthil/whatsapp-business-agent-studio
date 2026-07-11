import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { HelpShell } from "@/components/help/HelpShell";
import { DocContent } from "@/components/help/DocContent";
import {
  findEntry,
  listSections,
  neighbours,
  readDocMarkdown,
} from "@/lib/help-docs";

interface Params {
  slug: string[];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = await findEntry(slug.join("/"));
  if (!entry) return { title: "Help center" };
  return {
    title: `${entry.label} | Help center`,
    description: entry.description,
  };
}

export async function generateStaticParams() {
  const sections = await listSections();
  return sections.flatMap((s) =>
    s.entries.map((e) => ({ slug: e.slug.split("/") })),
  );
}

export default async function HelpDoc({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const slugStr = slug.join("/");
  const entry = await findEntry(slugStr);
  if (!entry) notFound();

  const markdown = await readDocMarkdown(entry);
  const { prev, next } = await neighbours(slugStr);

  const sectionLabel = (await listSections()).find((s) =>
    s.entries.some((e) => e.slug === entry.slug),
  )?.label;

  return (
    <HelpShell
      activeSlug={entry.slug}
      breadcrumbs={[
        { label: "Help", href: "/help" },
        ...(sectionLabel ? [{ label: sectionLabel }] : []),
        { label: entry.label },
      ]}
    >
      <DocContent markdown={markdown} basePath={`help/${entry.slug}`} />

      <div className="mt-16 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
        {prev ? (
          <Link
            href={prev.href}
            className="group flex flex-col rounded-xl border border-border bg-card p-4 shadow-sm hover:border-emerald-500/40"
          >
            <span className="mb-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
              <ArrowLeft className="h-3 w-3" /> Previous
            </span>
            <span className="text-sm font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
              {prev.label}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={next.href}
            className="group flex flex-col items-end rounded-xl border border-border bg-card p-4 shadow-sm hover:border-emerald-500/40 sm:col-start-2"
          >
            <span className="mb-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
              Next <ArrowRight className="h-3 w-3" />
            </span>
            <span className="text-sm font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
              {next.label}
            </span>
          </Link>
        ) : null}
      </div>
    </HelpShell>
  );
}
