import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { HelpSidebar } from "@/components/help/HelpSidebar";
import { HelpSearch } from "@/components/help/HelpSearch";
import { getSearchIndex, listSections } from "@/lib/help-docs";

interface Props {
  activeSlug?: string;
  breadcrumbs: { label: string; href?: string }[];
  children: React.ReactNode;
}

export async function HelpShell({ activeSlug, breadcrumbs, children }: Props) {
  const [sections, searchIndex] = await Promise.all([listSections(), getSearchIndex()]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-4 px-4 sm:px-6">
          <div className="flex shrink-0 items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Logo size={28} />
              <span className="hidden text-sm font-semibold tracking-tight sm:inline">
                WhatsApp Business Agent Studio
              </span>
            </Link>
            <span className="hidden text-sm text-muted-foreground sm:inline">/</span>
            <Link href="/help" className="hidden text-sm font-medium text-foreground sm:inline">
              Help
            </Link>
          </div>
          <div className="min-w-0 flex-1 sm:max-w-lg">
            <HelpSearch index={searchIndex} />
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle variant="ghost" />
            <Link
              href="/home"
              className="hidden rounded-md border border-border px-3 py-1.5 text-sm hover:bg-accent sm:inline-flex"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-7xl flex-1 gap-8 px-4 py-8 sm:px-6">
        <HelpSidebar sections={sections} activeSlug={activeSlug} />
        <main className="min-w-0 flex-1">
          <nav className="mb-6 flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
            {breadcrumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 ? <ChevronRight className="h-3 w-3" /> : null}
                {c.href ? (
                  <Link href={c.href} className="hover:text-foreground">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-foreground">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
          {children}
        </main>
      </div>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 text-xs text-muted-foreground sm:px-6">
          <span>Help center</span>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <Link href="/help" className="hover:text-foreground">
              All docs
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
