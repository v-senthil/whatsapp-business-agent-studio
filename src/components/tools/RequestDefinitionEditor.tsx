"use client";
import * as React from "react";
import { Controller, useWatch, type Control } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Field } from "@/components/common/FormField";
import { JsonViewer } from "@/components/common/JsonViewer";
import { ParamListEditor } from "@/components/tools/ParamListEditor";
import { RequiredParamsPicker } from "@/components/tools/RequiredParamsPicker";
import type { ToolInput } from "@/lib/schemas/tool";
import { paramsToRecord } from "@/lib/schemas/tool";

interface Props { control: Control<ToolInput>; }

const METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE"] as const;

export function RequestDefinitionEditor({ control }: Props) {
  const rd = useWatch({ control, name: "request_definition" });

  const preview = React.useMemo(() => {
    return {
      method: rd?.method,
      path: rd?.path,
      path_parameters: paramsToRecord(rd?.path_parameters ?? []),
      query_parameters: paramsToRecord(rd?.query_parameters ?? []),
      headers: paramsToRecord(rd?.headers ?? []),
      body: rd?.body
        ? {
            content_type: rd.body.content_type,
            params: paramsToRecord(rd.body.params ?? []),
            required: rd.body.required ?? [],
          }
        : undefined,
    };
  }, [rd]);

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
      <Card>
        <CardHeader><CardTitle>Request definition</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-[140px_1fr] gap-2">
            <Controller
              control={control}
              name="request_definition.method"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>{METHODS.map((m) => <SelectItem key={m} value={m}>{m}</SelectItem>)}</SelectContent>
                </Select>
              )}
            />
            <Controller
              control={control}
              name="request_definition.path"
              render={({ field, fieldState }) => (
                <div>
                  <Input placeholder="/items/{item_id}" className="font-mono" {...field} />
                  {fieldState.error && <p className="mt-1 text-xs text-destructive">{fieldState.error.message}</p>}
                </div>
              )}
            />
          </div>

          <Tabs defaultValue="path">
            <TabsList>
              <TabsTrigger value="path">Path</TabsTrigger>
              <TabsTrigger value="query">Query</TabsTrigger>
              <TabsTrigger value="headers">Headers</TabsTrigger>
              <TabsTrigger value="body">Body</TabsTrigger>
            </TabsList>
            <TabsContent value="path">
              <ParamListEditor control={control} name="request_definition.path_parameters" />
            </TabsContent>
            <TabsContent value="query">
              <ParamListEditor control={control} name="request_definition.query_parameters" />
            </TabsContent>
            <TabsContent value="headers">
              <ParamListEditor control={control} name="request_definition.headers" />
            </TabsContent>
            <TabsContent value="body" className="space-y-3">
              <Controller
                control={control}
                name="request_definition.body.content_type"
                render={({ field }) => (
                  <Field label="Content type">
                    <Input placeholder="application/json" {...field} value={field.value ?? "application/json"} />
                  </Field>
                )}
              />
              <div>
                <div className="mb-1 text-sm font-medium">Body params</div>
                <ParamListEditor control={control} name="request_definition.body.params" />
              </div>
              <RequiredParamsPicker
                control={control}
                paramsName="request_definition.body.params"
                requiredName="request_definition.body.required"
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="space-y-2">
        <div className="text-xs font-medium text-muted-foreground">Live preview</div>
        <JsonViewer data={preview} />
      </div>
    </div>
  );
}
