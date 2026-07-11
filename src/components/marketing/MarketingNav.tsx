"use client";
import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Logo } from "@/components/common/Logo";
import { cn } from "@/lib/utils/cn";

interface Props {
  primaryCtaHref: string;
  primaryCtaLabel: string;
  // Optional. When the landing ships from a different origin (e.g. GitHub
  // Pages), the caller passes the absolute /help URL on the live app. Falls
  // back to the same-origin path.
  helpUrl?: string;
}

export function MarketingNav({ primaryCtaHref, primaryCtaLabel, helpUrl }: Props) {
  const links = [
    { href: "#features", label: "Features" },
    { href: "#workflow", label: "How it works" },
    { href: "#platform", label: "Platform" },
    { href: helpUrl ?? "/help", label: "Docs" },
    { href: "#faq", label: "FAQ" },
  ];
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Logo size={32} />
          <span className="text-sm font-semibold tracking-tight">
            WhatsApp Business Agent Studio
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle variant="ghost" />
          <Button asChild size="sm">
            <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2 px-1">
              <ThemeToggle variant="ghost" />
              <Button asChild size="sm" className="flex-1">
                <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
