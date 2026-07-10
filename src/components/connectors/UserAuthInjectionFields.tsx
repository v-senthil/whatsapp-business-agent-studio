"use client";
import { Controller, type Control, type FieldValues } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Field } from "@/components/common/FormField";

interface Props<T extends FieldValues> { control: Control<T>; }

export function UserAuthInjectionFields<T extends FieldValues>({ control }: Props<T>) {
  return (
    <div className="space-y-3">
      <Controller
        control={control}
        name={"user_auth_injection_config.location" as never}
        render={({ field }) => (
          <Field label="Location" hint="Where the per-user token gets injected on outgoing calls.">
            <Select value={(field.value as string) ?? ""} onValueChange={field.onChange}>
              <SelectTrigger><SelectValue placeholder="Choose..." /></SelectTrigger>
              <SelectContent>
                <SelectItem value="headers">Headers</SelectItem>
                <SelectItem value="query">Query</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        )}
      />
      <Controller
        control={control}
        name={"user_auth_injection_config.field_name" as never}
        render={({ field }) => (
          <Field label="Field name"><Input placeholder="Authorization" {...field} /></Field>
        )}
      />
      <Controller
        control={control}
        name={"user_auth_injection_config.prefix" as never}
        render={({ field }) => (
          <Field label="Prefix" hint="e.g. `Bearer `"><Input placeholder="Bearer " {...field} /></Field>
        )}
      />
    </div>
  );
}
