"use client";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Save, Trash2 } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/common/FormField";
import { LoadingButton } from "@/components/common/LoadingButton";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { RequestDefinitionEditor } from "@/components/tools/RequestDefinitionEditor";
import { toolSchema, type ToolInput } from "@/lib/schemas/tool";

interface Props {
  initial?: Partial<ToolInput>;
  loading?: boolean;
  onSubmit: (v: ToolInput) => void | Promise<void>;
  onDelete?: () => void;
  submitLabel?: string;
}

const EMPTY: ToolInput = {
  name: "",
  description: "",
  request_definition: {
    method: "GET",
    path: "/",
    path_parameters: [],
    query_parameters: [],
    headers: [],
    body: { content_type: "application/json", params: [], required: [] },
  },
  user_auth_required: false,
};

export function ToolForm({ initial, loading, onSubmit, onDelete, submitLabel = "Save tool" }: Props) {
  const form = useForm<ToolInput>({ resolver: zodResolver(toolSchema), defaultValues: { ...EMPTY, ...(initial as ToolInput | undefined) } });
  const submit = form.handleSubmit((v) => onSubmit(v));

  return (
    <form onSubmit={submit} className="space-y-6">
      <Card>
        <CardHeader><CardTitle>Basic info</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <Field label="Name" required error={form.formState.errors.name?.message}>
            <Input placeholder="e.g. check_order_status" {...form.register("name")} />
          </Field>
          <Field label="Description" required hint="When should the agent invoke this tool?" error={form.formState.errors.description?.message}>
            <Textarea rows={3} {...form.register("description")} />
          </Field>
          <div className="flex items-center justify-between rounded-md border p-3">
            <div>
              <div className="text-sm font-medium">Requires per-user auth</div>
              <div className="text-xs text-muted-foreground">Uses the connector's user-auth injection to add the user's token.</div>
            </div>
            <Controller
              control={form.control}
              name="user_auth_required"
              render={({ field }) => (
                <Switch checked={!!field.value} onCheckedChange={field.onChange} />
              )}
            />
          </div>
        </CardContent>
      </Card>

      <RequestDefinitionEditor control={form.control} />

      <CardFooter className="justify-between p-0">
        <div>
          {onDelete && (
            <ConfirmDialog
              trigger={<Button type="button" variant="outline"><Trash2 className="h-4 w-4" /> Delete</Button>}
              title="Delete tool?" confirmLabel="Delete" onConfirm={onDelete}
            />
          )}
        </div>
        <LoadingButton type="submit" loading={loading}><Save className="h-4 w-4" /> {submitLabel}</LoadingButton>
      </CardFooter>
    </form>
  );
}

export function toolFromApi(t: {
  name?: string;
  description?: string;
  request_definition?: {
    method?: ToolInput["request_definition"]["method"];
    path?: string;
    path_parameters?: Record<string, { type: string; description?: string; items?: string }>;
    query_parameters?: Record<string, { type: string; description?: string; items?: string }>;
    headers?: Record<string, { type: string; description?: string; items?: string }>;
    body?: { content_type?: string; params?: Record<string, { type: string; description?: string; items?: string }>; required?: string[] };
  };
  user_auth_required?: boolean;
}): Partial<ToolInput> {
  const rec = (r?: Record<string, { type: string; description?: string; items?: string }>) =>
    Object.entries(r ?? {}).map(([name, p]) => ({ name, type: (p.type as ToolInput["request_definition"]["path_parameters"][number]["type"]) ?? "string", description: p.description ?? "", items: p.items ?? "" }));
  return {
    name: t.name,
    description: t.description,
    user_auth_required: t.user_auth_required,
    request_definition: {
      method: t.request_definition?.method ?? "GET",
      path: t.request_definition?.path ?? "/",
      path_parameters: rec(t.request_definition?.path_parameters),
      query_parameters: rec(t.request_definition?.query_parameters),
      headers: rec(t.request_definition?.headers),
      body: {
        content_type: t.request_definition?.body?.content_type ?? "application/json",
        params: rec(t.request_definition?.body?.params),
        required: t.request_definition?.body?.required ?? [],
      },
    },
  };
}

export function toolToApi(v: ToolInput) {
  const rec = (arr: ToolInput["request_definition"]["path_parameters"]) => {
    const out: Record<string, { type: string; description: string; items?: string }> = {};
    for (const p of arr) {
      if (!p.name) continue;
      out[p.name] = { type: p.type, description: p.description ?? "" };
      if (p.type === "array" && p.items) out[p.name].items = p.items;
    }
    return out;
  };
  return {
    name: v.name,
    description: v.description,
    user_auth_required: !!v.user_auth_required,
    request_definition: {
      method: v.request_definition.method,
      path: v.request_definition.path,
      path_parameters: rec(v.request_definition.path_parameters),
      query_parameters: rec(v.request_definition.query_parameters),
      headers: rec(v.request_definition.headers),
      body: v.request_definition.body
        ? {
            content_type: v.request_definition.body.content_type,
            params: rec(v.request_definition.body.params),
            required: v.request_definition.body.required,
          }
        : undefined,
    },
  };
}
