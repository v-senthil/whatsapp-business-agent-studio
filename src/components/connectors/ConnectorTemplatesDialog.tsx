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
import { connectorTemplates } from "@/lib/connector-templates";

interface Props {
  entityId: string;
}

export function ConnectorTemplatesDialog({ entityId }: Props) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const templates = React.useMemo(() => {
    const bucket: Record<string, ReturnType<typeof connectorTemplates>> = {};
    connectorTemplates().forEach((t) => {
      (bucket[t.category] ??= []).push(t);
    });
    return bucket;
  }, []);

  function pick(slug: string) {
    setOpen(false);
    router.push(`/dashboard/${entityId}/connectors/new?template=${encodeURIComponent(slug)}`);
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
        <ScrollArea className="max-h-[60vh] pr-3">
          <div className="space-y-5">
            {Object.entries(templates).map(([cat, items]) => (
              <div key={cat} className="space-y-2">
                <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{cat}</div>
                <div className="grid gap-2 md:grid-cols-2">
                  {items.map((t) => (
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
                        <Badge variant="outline" className="shrink-0 text-[10px]">{t.input.auth_type.replace("_", " ")}</Badge>
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
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
