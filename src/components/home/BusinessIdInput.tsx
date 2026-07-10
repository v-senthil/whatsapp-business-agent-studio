"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { Building2, RotateCcw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/common/FormField";

interface Props {
  initialBusinessId?: string;
  activeBusinessId: string;
  onChange: (id: string) => void;
}

export function BusinessIdInput({ initialBusinessId, activeBusinessId, onChange }: Props) {
  const router = useRouter();
  const [value, setValue] = React.useState(initialBusinessId ?? "");
  const [saving, setSaving] = React.useState(false);
  const trimmed = value.trim();
  const dirty = trimmed !== activeBusinessId;

  async function apply() {
    if (!trimmed) return;
    setSaving(true);
    await fetch("/api/session", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lastBusinessId: trimmed }),
    });
    setSaving(false);
    onChange(trimmed);
    router.refresh();
  }

  async function clear() {
    setSaving(true);
    await fetch("/api/session", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lastBusinessId: "" }),
    });
    setValue("");
    setSaving(false);
    onChange("");
    router.refresh();
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Building2 className="h-4 w-4 text-muted-foreground" />
          Meta Business ID
        </CardTitle>
        <CardDescription>
          Paste the ID of the Meta business that owns your WhatsApp Business Accounts. We fetch its WABAs and phone numbers from the Graph API.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Field label="Business ID" htmlFor="biz-id">
          <div className="flex gap-2">
            <Input
              id="biz-id"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="e.g. 1234567890123456"
              onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); apply(); } }}
            />
            <Button onClick={apply} disabled={!trimmed || !dirty || saving}>
              {dirty ? "Load WABAs" : "Loaded"}
            </Button>
            {activeBusinessId && (
              <Button variant="outline" size="icon" aria-label="Clear business ID" onClick={clear} title="Clear">
                <RotateCcw className="h-4 w-4" />
              </Button>
            )}
          </div>
        </Field>
      </CardContent>
    </Card>
  );
}
