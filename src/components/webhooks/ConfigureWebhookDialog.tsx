"use client";
import * as React from "react";
import { toast } from "sonner";
import { Loader2, Radio } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface Props {
  entityId: string;
}

export function ConfigureWebhookDialog({ entityId }: Props) {
  const [open, setOpen] = React.useState(false);
  const [callbackUrl, setCallbackUrl] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (open && !callbackUrl && typeof window !== "undefined") {
      setCallbackUrl(`${window.location.origin}/api/webhooks/meta`);
    }
  }, [open, callbackUrl]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/graph/phone-webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone_number_id: entityId,
          callback_url: callbackUrl,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data?.detail ?? data?.title ?? "Configuration failed");
        return;
      }
      toast.success("Webhook configured for this phone");
      setOpen(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Configuration failed");
    } finally {
      setLoading(false);
    }
  }

  async function onClear() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `/api/graph/phone-webhook?phone_number_id=${encodeURIComponent(entityId)}`,
        { method: "DELETE" },
      );
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data?.detail ?? data?.title ?? "Clear failed");
        return;
      }
      toast.success("Phone-scoped webhook cleared. Events fall back to the app-level callback URL.");
      setOpen(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Clear failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="gap-1">
          <Radio className="h-3.5 w-3.5" />
          Configure webhook
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Configure webhook for this phone</DialogTitle>
          <DialogDescription>
            Sets an override callback URL on this specific phone number. This wins over any
            app-level webhook. Useful when several phones share one app but need to route to
            different callbacks.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="phone_number_id">Phone number ID</Label>
            <Input id="phone_number_id" value={entityId} readOnly className="font-mono text-xs" />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="callback_url">Callback URL</Label>
            <Input
              id="callback_url"
              value={callbackUrl}
              onChange={(e) => setCallbackUrl(e.target.value)}
              placeholder="https://your-host/api/webhooks/meta"
              required
            />
            <p className="text-[11px] text-muted-foreground">
              The verify token is read from{" "}
              <code className="font-mono">META_WEBHOOK_VERIFY_TOKEN</code> on the server. Meta
              will call GET on this URL first to verify.
            </p>
          </div>

          {error ? (
            <Alert variant="destructive">
              <AlertTitle>Meta rejected the configuration</AlertTitle>
              <AlertDescription className="text-xs">{error}</AlertDescription>
            </Alert>
          ) : null}

          <DialogFooter className="gap-2 sm:justify-between">
            <Button type="button" variant="ghost" onClick={onClear} disabled={loading}>
              Clear override
            </Button>
            <div className="flex gap-2">
              <Button type="button" variant="outline" onClick={() => setOpen(false)} disabled={loading}>
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : null}
                Save configuration
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
