"use client";
import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Field } from "@/components/common/FormField";
import { LoadingButton } from "@/components/common/LoadingButton";
import { connectorSchema, type ConnectorInput } from "@/lib/schemas/connector";
import { ApiKeyFields } from "@/components/connectors/auth/ApiKeyFields";
import { OAuth2Fields } from "@/components/connectors/auth/OAuth2Fields";
import { MtlsFields } from "@/components/connectors/auth/MtlsFields";
import { UserAuthInjectionFields } from "@/components/connectors/UserAuthInjectionFields";

interface Props {
  initial?: Partial<ConnectorInput>;
  loading?: boolean;
  submitLabel?: string;
  onSubmit: (values: ConnectorInput) => void | Promise<void>;
}

const EMPTY: ConnectorInput = {
  name: "",
  description: "",
  base_url: "",
  auth_type: "API_KEY",
  auth_config: { api_key: { headers: [], query_params: [], body_params: [] } },
};

export function ConnectorForm({ initial, loading, submitLabel = "Save", onSubmit }: Props) {
  const form = useForm<ConnectorInput>({
    resolver: zodResolver(connectorSchema),
    defaultValues: { ...EMPTY, ...(initial as ConnectorInput | undefined) },
  });
  const authType = form.watch("auth_type");

  // preserve prior sub-object per auth type so toggling doesn't discard data
  const stash = React.useRef<Record<string, unknown>>({});
  const prevAuth = React.useRef<string>(authType);
  React.useEffect(() => {
    if (prevAuth.current === authType) return;
    // stash the previous auth config
    stash.current[prevAuth.current] = form.getValues("auth_config" as never);
    // restore or set defaults for the new type
    if (authType === "API_KEY") {
      form.setValue("auth_config", (stash.current["API_KEY"] as never) ?? ({ api_key: { headers: [], query_params: [], body_params: [] } } as never));
    } else if (authType === "OAUTH2_CLIENT_CREDENTIALS") {
      form.setValue("auth_config", (stash.current["OAUTH2_CLIENT_CREDENTIALS"] as never) ?? ({
        oauth2_client_credentials: {
          token_url: "",
          scopes_to_request: [],
          client_id: "",
          client_secret: "",
          token_request_content_type: "application/x-www-form-urlencoded",
        },
      } as never));
    }
    prevAuth.current = authType;
  }, [authType, form]);

  const submit = form.handleSubmit((values) => onSubmit(values));

  return (
    <form onSubmit={submit} className="space-y-6">
      <Card>
        <CardHeader><CardTitle>Basic info</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <Field label="Name" required error={form.formState.errors.name?.message}>
            <Input {...form.register("name")} placeholder="e.g. Shopify Orders" />
          </Field>
          <Field label="Description" required error={form.formState.errors.description?.message}>
            <Textarea rows={3} {...form.register("description")} />
          </Field>
          <Field label="Base URL" required error={form.formState.errors.base_url?.message}>
            <Input {...form.register("base_url")} placeholder="https://api.example.com" />
          </Field>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Authentication</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <Controller
            control={form.control}
            name="auth_type"
            render={({ field }) => (
              <RadioGroup value={field.value} onValueChange={field.onChange} className="grid grid-cols-3 gap-3">
                {[
                  { v: "API_KEY", label: "API key" },
                  { v: "OAUTH2_CLIENT_CREDENTIALS", label: "OAuth2 client credentials" },
                  { v: "MTLS", label: "mTLS" },
                ].map((opt) => (
                  <Label
                    key={opt.v}
                    htmlFor={`at-${opt.v}`}
                    className="flex cursor-pointer items-center gap-2 rounded-md border p-3 has-[[data-state=checked]]:border-primary"
                  >
                    <RadioGroupItem id={`at-${opt.v}`} value={opt.v} />
                    <span className="text-sm">{opt.label}</span>
                  </Label>
                ))}
              </RadioGroup>
            )}
          />
          {authType === "API_KEY" && <ApiKeyFields control={form.control as never} />}
          {authType === "OAUTH2_CLIENT_CREDENTIALS" && <OAuth2Fields control={form.control as never} />}
          {authType === "MTLS" && <MtlsFields control={form.control as never} />}
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Per-user auth injection (optional)</CardTitle></CardHeader>
        <CardContent><UserAuthInjectionFields control={form.control as never} /></CardContent>
      </Card>

      <div className="flex justify-end">
        <LoadingButton type="submit" loading={loading}><Save className="h-4 w-4" /> {submitLabel}</LoadingButton>
      </div>
    </form>
  );
}
