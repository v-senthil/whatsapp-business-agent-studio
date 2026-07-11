"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { BookMarked, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { connectorTemplates, type ConnectorVendor } from "@/lib/connector-templates";
import { cn } from "@/lib/utils/cn";

interface Props {
  entityId: string;
}

type VendorFilter = ConnectorVendor | "all";

const FILTERS: { value: VendorFilter; label: string; description: string }[] = [
  { value: "zoho", label: "Zoho", description: "Every Zoho product with a documented API" },
  { value: "google", label: "Google", description: "Workspace, Marketing, and Cloud APIs from Google" },
  { value: "other", label: "Others", description: "Universally available third-party APIs" },
  { value: "all", label: "All", description: "Everything, grouped by vendor" },
];

function authLabel(authType: string): string {
  switch (authType) {
    case "OAUTH2_CLIENT_CREDENTIALS":
      return "OAuth 2";
    case "API_KEY":
      return "API key";
    case "MTLS":
      return "mTLS";
    default:
      return authType.replace(/_/g, " ").toLowerCase();
  }
}

export function ConnectorTemplatesDialog({ entityId }: Props) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [filter, setFilter] = React.useState<VendorFilter>("zoho");

  const all = React.useMemo(() => connectorTemplates(), []);
  const counts = React.useMemo(
    () => ({
      zoho: all.filter((t) => t.vendor === "zoho").length,
      google: all.filter((t) => t.vendor === "google").length,
      other: all.filter((t) => t.vendor === "other").length,
      all: all.length,
    }),
    [all],
  );

  const grouped = React.useMemo(() => {
    const source = filter === "all" ? all : all.filter((t) => t.vendor === filter);
    if (filter === "all") {
      // Group by vendor first, then by category. Ordering below controls the
      // visual order Zoho -> Google -> Others.
      const byVendor: Record<ConnectorVendor, Record<string, typeof source>> = {
        zoho: {},
        google: {},
        other: {},
      };
      for (const t of source) {
        (byVendor[t.vendor][t.category] ??= []).push(t);
      }
      return byVendor;
    }
    const bucket: Record<string, typeof source> = {};
    for (const t of source) {
      (bucket[t.category] ??= []).push(t);
    }
    return bucket;
  }, [all, filter]);

  function pick(slug: string) {
    setOpen(false);
    router.push(`/dashboard/${entityId}/connectors/new?template=${encodeURIComponent(slug)}`);
  }

  function renderCard(t: (typeof all)[number]) {
    return (
      <Card
        key={t.slug}
        role="button"
        tabIndex={0}
        onClick={() => pick(t.slug)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(t.slug); }
        }}
        className="cursor-pointer transition-colors hover:bg-muted/40"
      >
        <CardHeader className="flex-row items-start gap-3 space-y-0 pb-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary">
            {t.iconGlyph}
          </div>
          <div className="min-w-0 flex-1">
            <CardTitle className="text-sm">{t.label}</CardTitle>
            <p className="mt-1 text-xs text-muted-foreground">{t.description}</p>
          </div>
          <Badge variant="outline" className="shrink-0 whitespace-nowrap text-[10px]">{authLabel(t.input.auth_type)}</Badge>
        </CardHeader>
        <CardContent className="flex items-center justify-between pt-0 text-[11px] text-muted-foreground">
          <span className="truncate font-mono">{t.input.base_url}</span>
          {t.docs && (
            <a
              href={t.docs}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="ml-2 inline-flex shrink-0 items-center gap-1 underline hover:text-foreground"
            >
              Docs <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </CardContent>
      </Card>
    );
  }

  function renderCategoryGroup(cat: string, items: typeof all) {
    return (
      <div key={cat} className="space-y-2">
        <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{cat}</div>
        <div className="grid gap-2 md:grid-cols-2">
          {items.map(renderCard)}
        </div>
      </div>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button variant="outline" onClick={() => setOpen(true)}>
        <BookMarked className="h-4 w-4" /> From template
      </Button>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Connector templates</DialogTitle>
          <DialogDescription>
            Prefilled connector shells for common APIs. Pick one, then fill in credentials and adjust the base URL as needed.
          </DialogDescription>
        </DialogHeader>

        <div className="inline-flex w-fit shrink-0 rounded-md border bg-muted p-0.5 text-xs">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-sm px-3 py-1 transition-colors",
                filter === f.value
                  ? "bg-background text-foreground shadow"
                  : "text-muted-foreground hover:text-foreground",
              )}
              title={f.description}
            >
              <span>{f.label}</span>
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[10px] font-medium",
                  filter === f.value ? "bg-muted text-muted-foreground" : "bg-background text-muted-foreground",
                )}
              >
                {counts[f.value]}
              </span>
            </button>
          ))}
        </div>

        <ScrollArea className="max-h-[60vh] pr-3">
          {filter === "all" ? (
            <div className="space-y-6">
              {(["zoho", "google", "other"] as const).map((vendor) => {
                const groups = (grouped as Record<ConnectorVendor, Record<string, typeof all>>)[vendor];
                const entries = Object.entries(groups);
                if (entries.length === 0) return null;
                const heading = vendor === "zoho" ? "Zoho" : vendor === "google" ? "Google" : "Others";
                return (
                  <div key={vendor} className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-semibold">{heading}</div>
                      <div className="h-px flex-1 bg-border" />
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        {counts[vendor]} templates
                      </div>
                    </div>
                    <div className="space-y-4 pl-1">
                      {entries.map(([cat, items]) => renderCategoryGroup(cat, items))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-5">
              {Object.entries(grouped as Record<string, typeof all>).map(([cat, items]) =>
                renderCategoryGroup(cat, items),
              )}
            </div>
          )}
        </ScrollArea>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
