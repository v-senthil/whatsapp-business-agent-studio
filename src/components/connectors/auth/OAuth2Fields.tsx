"use client";
import * as React from "react";
import { Controller, type Control, type FieldValues } from "react-hook-form";
import { Eye, EyeOff, Plus, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Field } from "@/components/common/FormField";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Props<T extends FieldValues> { control: Control<T>; prefix?: string; }

export function OAuth2Fields<T extends FieldValues>({ control, prefix = "auth_config.oauth2_client_credentials" }: Props<T>) {
  const [reveal, setReveal] = React.useState(false);
  const [scopeDraft, setScopeDraft] = React.useState("");
  return (
    <div className="space-y-3">
      <Controller
        control={control}
        name={`${prefix}.token_url` as never}
        render={({ field, fieldState }) => (
          <Field label="Token URL" required error={fieldState.error?.message}>
            <Input placeholder="https://api.example.com/oauth/token" {...field} />
          </Field>
        )}
      />
      <Controller
        control={control}
        name={`${prefix}.client_id` as never}
        render={({ field, fieldState }) => (
          <Field label="Client ID" required error={fieldState.error?.message}><Input {...field} /></Field>
        )}
      />
      <Controller
        control={control}
        name={`${prefix}.client_secret` as never}
        render={({ field, fieldState }) => (
          <Field label="Client secret" required error={fieldState.error?.message}>
            <div className="flex gap-2">
              <Input type={reveal ? "text" : "password"} {...field} />
              <Button type="button" variant="outline" size="icon" onClick={() => setReveal((r) => !r)}>
                {reveal ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </Field>
        )}
      />
      <Controller
        control={control}
        name={`${prefix}.scopes_to_request` as never}
        render={({ field }) => {
          const values: string[] = Array.isArray(field.value) ? field.value : [];
          function add() {
            const v = scopeDraft.trim();
            if (!v) return;
            field.onChange([...values, v]);
            setScopeDraft("");
          }
          function remove(i: number) { field.onChange(values.filter((_, x) => x !== i)); }
          return (
            <Field label="Scopes" hint="Press Enter to add each scope">
              <div className="rounded-md border p-2">
                <div className="flex flex-wrap gap-1">
                  {values.map((s, i) => (
                    <Badge key={`${s}-${i}`} variant="secondary" className="gap-1">
                      {s}
                      <button type="button" onClick={() => remove(i)} className="opacity-60 hover:opacity-100"><X className="h-3 w-3" /></button>
                    </Badge>
                  ))}
                </div>
                <div className="mt-2 flex gap-2">
                  <Input
                    value={scopeDraft}
                    onChange={(e) => setScopeDraft(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); add(); } }}
                    placeholder="scope..."
                    className="h-8"
                  />
                  <Button type="button" variant="outline" size="sm" onClick={add}><Plus className="h-3 w-3" /></Button>
                </div>
              </div>
            </Field>
          );
        }}
      />
      <Controller
        control={control}
        name={`${prefix}.token_request_content_type` as never}
        render={({ field }) => (
          <Field label="Token request content type">
            <Select value={field.value as string} onValueChange={field.onChange}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="application/x-www-form-urlencoded">application/x-www-form-urlencoded</SelectItem>
                <SelectItem value="application/json">application/json</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        )}
      />
    </div>
  );
}
