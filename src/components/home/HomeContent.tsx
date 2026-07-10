"use client";
import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BusinessIdInput } from "@/components/home/BusinessIdInput";
import { WabaList } from "@/components/home/WabaList";

export function HomeContent({ initialBusinessId }: { initialBusinessId: string }) {
  const [businessId, setBusinessId] = React.useState(initialBusinessId);

  return (
    <div className="space-y-6">
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
