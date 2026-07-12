"use client";
import * as React from "react";
import { Sparkles } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BusinessIdInput } from "@/components/home/BusinessIdInput";
import { WabaIdInput } from "@/components/home/WabaIdInput";
import { WabaList } from "@/components/home/WabaList";
import { DirectWabaPhones } from "@/components/home/DirectWabaPhones";

export function HomeContent({ initialBusinessId }: { initialBusinessId: string }) {
  const [businessId, setBusinessId] = React.useState(initialBusinessId);
  const [directWabaId, setDirectWabaId] = React.useState("");

  return (
    <div className="space-y-6">
      <Alert variant="warning">
        <Sparkles className="h-4 w-4" />
        <AlertTitle>WhatsApp Business Agent is in Beta</AlertTitle>
        <AlertDescription className="space-y-2">
          <p>
            This feature has not been released for general availability yet. To enable it for your WABA, an admin must accept the Meta terms and conditions from the Business Manager UI.
          </p>
          <p>
            After you enter your Business ID and pick a WABA below, an <strong>Enable WhatsApp Business Agent</strong> link will appear next to each WABA. Opening that link takes you to Meta&apos;s Business Manager where the admin can approve the T&amp;C. If the page loads and shows the T&amp;C prompt, your WABA is eligible.
          </p>
        </AlertDescription>
      </Alert>

      <BusinessIdInput
        initialBusinessId={initialBusinessId}
        activeBusinessId={businessId}
        onChange={setBusinessId}
      />

      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-background px-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Or
          </span>
        </div>
      </div>

      <WabaIdInput activeWabaId={directWabaId} onChange={setDirectWabaId} />

      {directWabaId ? (
        <DirectWabaPhones wabaId={directWabaId} businessId={businessId || undefined} />
      ) : businessId ? (
        <WabaList businessId={businessId} />
      ) : (
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm">Waiting for a business ID or WABA ID</CardTitle></CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Paste your Meta business ID above to browse its WABAs, or paste a WABA ID directly to jump to its phone numbers.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
