"use client";
import * as React from "react";
import { Layers, RotateCcw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/common/FormField";

interface Props {
  activeWabaId: string;
  onChange: (id: string) => void;
}

export function WabaIdInput({ activeWabaId, onChange }: Props) {
  const [value, setValue] = React.useState(activeWabaId);
  const trimmed = value.trim();
  const dirty = trimmed !== activeWabaId;

  function apply() {
    if (!trimmed) return;
    onChange(trimmed);
  }

  function clear() {
    setValue("");
    onChange("");
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Layers className="h-4 w-4 text-muted-foreground" />
          WhatsApp Business Account ID
        </CardTitle>
        <CardDescription>
          Skip the business step and jump directly to the phone numbers on a specific WABA. Useful when you already know the WABA ID.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Field label="WABA ID" htmlFor="waba-id">
          <div className="flex gap-2">
            <Input
              id="waba-id"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="e.g. 4502371576781002"
              onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); apply(); } }}
            />
            <Button onClick={apply} disabled={!trimmed || !dirty}>
              {dirty ? "Load phones" : "Loaded"}
            </Button>
            {activeWabaId && (
              <Button variant="outline" size="icon" aria-label="Clear WABA ID" onClick={clear} title="Clear">
                <RotateCcw className="h-4 w-4" />
              </Button>
            )}
          </div>
        </Field>
      </CardContent>
    </Card>
  );
}
