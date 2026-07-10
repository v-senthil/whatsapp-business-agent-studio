"use client";
import * as React from "react";
import { Controller, useFieldArray, type Control, type FieldValues, type Path } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props<TFormValues extends FieldValues> {
  control: Control<TFormValues>;
  name: Path<TFormValues>;
  addLabel: string;
}

export function KeyValuePrefixArray<TFormValues extends FieldValues>({ control, name, addLabel }: Props<TFormValues>) {
  const { fields, append, remove } = useFieldArray({ control, name: name as never });
  return (
    <div className="space-y-2">
      {fields.length === 0 && <p className="text-xs text-muted-foreground">None</p>}
      {fields.map((f, i) => (
        <div key={f.id} className="grid grid-cols-[1fr_1fr_120px_36px] gap-2">
          <Controller
            control={control}
            name={`${name}.${i}.field_name` as never}
            render={({ field }) => <Input placeholder="field name" {...field} />}
          />
          <Controller
            control={control}
            name={`${name}.${i}.value` as never}
            render={({ field }) => <Input placeholder="value" {...field} />}
          />
          <Controller
            control={control}
            name={`${name}.${i}.prefix` as never}
            render={({ field }) => <Input placeholder="prefix" {...field} />}
          />
          <Button type="button" variant="ghost" size="icon" onClick={() => remove(i)}><Trash2 className="h-4 w-4" /></Button>
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => append({ field_name: "", value: "", prefix: "" } as never)}
      >
        <Plus className="h-4 w-4" /> {addLabel}
      </Button>
    </div>
  );
}
