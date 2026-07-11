"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  Bell,
  BookOpen,
  BookText,
  Clapperboard,
  ClipboardCheck,
  FileText,
  Globe,
  Home,
  Info,
  Layers,
  ListChecks,
  MessageSquare,
  PhoneOff,
  Plug,
  RadioTower,
  Settings,
  Sparkles,
  TerminalSquare,
  Wand2,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { Logo } from "@/components/common/Logo";

interface SidebarProps { entityId: string; }

interface NavItem { href: string; label: string; icon: React.ComponentType<{ className?: string }>; }
interface NavGroup { heading: string; items: NavItem[]; }

function groups(entityId: string): NavGroup[] {
  const base = `/dashboard/${entityId}`;
  return [
    {
      heading: "Overview",
      items: [
        { href: base, label: "Dashboard", icon: Activity },
        { href: `${base}/onboarding`, label: "Onboarding", icon: Sparkles },
      ],
    },
    {
      heading: "Configure",
      items: [
        { href: `${base}/settings`, label: "Settings", icon: Settings },
        { href: `${base}/business-info`, label: "Business info", icon: Info },
        { href: `${base}/skills`, label: "Skills", icon: Layers },
        { href: `${base}/generate`, label: "Generate from doc", icon: Wand2 },
      ],
    },
    {
      heading: "Knowledge",
      items: [
        { href: `${base}/knowledge/files`, label: "Files", icon: FileText },
        { href: `${base}/knowledge/websites`, label: "Websites", icon: Globe },
        { href: `${base}/knowledge/faqs`, label: "FAQs", icon: BookOpen },
        { href: `${base}/knowledge/allowlist`, label: "Allowlist", icon: ListChecks },
      ],
    },
    {
      heading: "Integrations",
      items: [{ href: `${base}/connectors`, label: "Connectors", icon: Plug }],
    },
    {
      heading: "Verify",
      items: [
        { href: `${base}/evals`, label: "Evals", icon: ClipboardCheck },
        { href: `${base}/test`, label: "Test chat", icon: MessageSquare },
        { href: `${base}/scenarios`, label: "Scenarios", icon: Clapperboard },
      ],
    },
    {
      heading: "Advanced",
      items: [
        { href: `${base}/playground`, label: "API playground", icon: TerminalSquare },
        { href: `${base}/events`, label: "Agent events", icon: Bell },
        { href: `${base}/webhooks`, label: "Webhooks", icon: RadioTower },
        { href: `${base}/thread-control`, label: "Thread control", icon: PhoneOff },
      ],
    },
  ];
}

export function Sidebar({ entityId }: SidebarProps) {
  const pathname = usePathname();
  const nav = groups(entityId);
  const apiDocsActive = pathname?.startsWith("/api-docs");
  const helpActive = pathname?.startsWith("/help");
  return (
    <aside className="hidden h-full w-60 shrink-0 flex-col border-r bg-muted/30 md:flex">
      <div className="flex h-14 shrink-0 items-center border-b px-4">
        <Link href="/dashboard" className="flex min-w-0 items-center gap-2">
          <Logo size={22} />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">WhatsApp Business</span>
            <span className="truncate text-sm font-semibold">Agent Studio</span>
          </span>
        </Link>
      </div>
      <nav className="flex flex-1 flex-col gap-4 overflow-y-auto px-3 py-4">
        <ul className="space-y-0.5">
          <li>
            <Link
              href="/home"
              className={cn(
                "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                pathname === "/home" && "bg-accent text-accent-foreground",
              )}
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
          </li>
        </ul>
        {nav.map((group) => (
          <div key={group.heading}>
            <div className="mb-1 px-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {group.heading}
            </div>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== `/dashboard/${entityId}` && pathname?.startsWith(item.href));
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                        active && "bg-accent text-accent-foreground",
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
      <div className="space-y-0.5 border-t p-3">
        <Link
          href="/help"
          className={cn(
            "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground",
            helpActive && "bg-accent text-accent-foreground",
          )}
        >
          <BookOpen className="h-4 w-4" />
          Help center
        </Link>
        <Link
          href="/api-docs"
          className={cn(
            "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground",
            apiDocsActive && "bg-accent text-accent-foreground",
          )}
        >
          <BookText className="h-4 w-4" />
          API reference
        </Link>
      </div>
    </aside>
  );
}
