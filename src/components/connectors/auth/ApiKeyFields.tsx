"use client";
import type { Control, FieldValues } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { KeyValuePrefixArray } from "@/components/connectors/KeyValuePrefixArray";

interface Props<T extends FieldValues> { control: Control<T>; prefix?: string; }

export function ApiKeyFields<T extends FieldValues>({ control, prefix = "auth_config.api_key" }: Props<T>) {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-sm">Header credentials</CardTitle></CardHeader>
        <CardContent>
          <KeyValuePrefixArray control={control} name={`${prefix}.headers` as never} addLabel="Add header" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-sm">Query parameters</CardTitle></CardHeader>
        <CardContent>
          <KeyValuePrefixArray control={control} name={`${prefix}.query_params` as never} addLabel="Add query param" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2"><CardTitle className="text-sm">JSON body parameters</CardTitle></CardHeader>
        <CardContent>
          <KeyValuePrefixArray control={control} name={`${prefix}.body_params` as never} addLabel="Add body param" />
        </CardContent>
      </Card>
    </div>
  );
}
