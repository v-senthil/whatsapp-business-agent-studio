"use client";
import * as React from "react";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoadingButton } from "@/components/common/LoadingButton";
import { ErrorState } from "@/components/common/ErrorState";
import { useDeleteAgent } from "@/lib/client/hooks/useSettings";

interface Props {
  entityId: string;
  agentId?: string;
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onSuccess?: () => void;
}

export function DeleteAgentDialog({ entityId, agentId, open, onOpenChange, onSuccess }: Props) {
  const [confirmText, setConfirmText] = React.useState("");
  const del = useDeleteAgent(entityId);

  React.useEffect(() => {
    if (!open) {
      setConfirmText("");
      del.reset();
    }
  }, [open, del]);

  const confirmed = confirmText.trim() === entityId;

  async function submit() {
    try {
      const res = await del.mutateAsync();
      if (res.deleted_agent_id) {
        toast.success(`Agent removed: ${res.deleted_agent_id}`);
      } else {
        toast.info("Nothing to remove on this phone.");
      }
      onOpenChange(false);
      onSuccess?.();
    } catch {
      // ErrorState renders inside the dialog
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete WhatsApp agent</AlertDialogTitle>
          <AlertDialogDescription>
            Removes the Meta Business Agent from this phone number. When this is the last
            agent on the WABA, the integration is disconnected on Meta&apos;s side.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <Alert variant="warning">
          <AlertTitle>This cannot be undone from the app</AlertTitle>
          <AlertDescription>
            You will need to re-onboard the agent afterwards. Skills, knowledge, and
            connectors stored on Meta are cleared along with the agent.
          </AlertDescription>
        </Alert>

        {agentId ? (
          <div className="rounded-md border p-3 text-sm">
            <div className="font-medium">Agent ID</div>
            <div className="mt-1 truncate font-mono text-xs text-muted-foreground" title={agentId}>
              {agentId}
            </div>
          </div>
        ) : null}

        <div className="space-y-2">
          <Label htmlFor="delete-agent-confirm">
            Type the phone number ID <code className="font-mono">{entityId}</code> to confirm
          </Label>
          <Input
            id="delete-agent-confirm"
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
            placeholder={entityId}
            autoComplete="off"
          />
        </div>

        {del.error ? <ErrorState error={del.error} /> : null}

        <AlertDialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={del.isPending}>
            Cancel
          </Button>
          <LoadingButton
            variant="destructive"
            onClick={submit}
            disabled={!confirmed}
            loading={del.isPending}
          >
            <Trash2 className="h-4 w-4" /> Delete agent
          </LoadingButton>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
