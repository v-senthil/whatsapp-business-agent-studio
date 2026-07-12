"use client";
import * as React from "react";
import { Sparkles } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BusinessIdInput } from "@/components/home/BusinessIdInput";
import { WabaList } from "@/components/home/WabaList";

export function HomeContent({ initialBusinessId }: { initialBusinessId: string }) {
  const [businessId, setBusinessId] = React.useState(initialBusinessId);

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

      {businessId ? (
        <WabaList businessId={businessId} />
      ) : (
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm">Waiting for a business ID</CardTitle></CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Paste your Meta business ID above and click <strong>Load WABAs</strong> to see the phone numbers you can build agents on.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
