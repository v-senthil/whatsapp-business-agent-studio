"use client";
import * as React from "react";
import { Controller, useFieldArray, type Control, type FieldValues, type Path } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface Props<TFormValues extends FieldValues> {
  control: Control<TFormValues>;
  name: Path<TFormValues>;
}

const TYPES: Array<{ v: string; label: string }> = [
  { v: "string", label: "string" },
  { v: "integer", label: "integer" },
  { v: "number", label: "number" },
  { v: "boolean", label: "boolean" },
  { v: "array", label: "array" },
  { v: "object", label: "object" },
];

export function ParamListEditor<TFormValues extends FieldValues>({ control, name }: Props<TFormValues>) {
  const { fields, append, remove } = useFieldArray({ control, name: name as never });
  return (
    <div className="space-y-3">
      {fields.length === 0 && <p className="text-xs text-muted-foreground">No parameters.</p>}
      {fields.map((f, i) => (
        <div key={f.id} className="rounded-md border p-3">
          <div className="grid grid-cols-[1fr_140px_36px] gap-2">
            <Controller
              control={control}
              name={`${name}.${i}.name` as never}
              render={({ field, fieldState }) => (
                <div>
                  <Input placeholder="name" {...field} />
                  {fieldState.error && <p className="mt-1 text-xs text-destructive">{fieldState.error.message}</p>}
                </div>
              )}
            />
            <Controller
              control={control}
              name={`${name}.${i}.type` as never}
              render={({ field }) => (
                <Select value={field.value as string} onValueChange={field.onChange}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {TYPES.map((t) => <SelectItem key={t.v} value={t.v}>{t.label}</SelectItem>)}
                  </SelectContent>
                </Select>
              )}
            />
            <Button type="button" variant="ghost" size="icon" aria-label="Remove parameter" onClick={() => remove(i)}><Trash2 className="h-4 w-4" /></Button>
          </div>
          <Controller
            control={control}
            name={`${name}.${i}.description` as never}
            render={({ field }) => (
              <Textarea rows={2} placeholder="Description (helps the model pick this param)" className="mt-2 text-sm" {...field} />
            )}
          />
          <Controller
            control={control}
            name={`${name}.${i}.type` as never}
            render={({ field }) => {
              if (field.value !== "array") return <></>;
              return (
                <Controller
                  control={control}
                  name={`${name}.${i}.items` as never}
                  render={({ field: itemsField }) => (
                    <Textarea
                      rows={2}
                      className="mt-2 font-mono text-xs"
                      placeholder='Items schema (JSON) — e.g. {"type": "string"}'
                      {...itemsField}
                    />
                  )}
                />
              );
            }}
          />
        </div>
      ))}
      <Button type="button" variant="outline" size="sm" onClick={() => append({ name: "", type: "string", description: "", items: "" } as never)}>
        <Plus className="h-4 w-4" /> Add parameter
      </Button>
    </div>
  );
}
