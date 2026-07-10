"use client";
import * as React from "react";
import { Controller, useWatch, type Control, type FieldValues, type Path } from "react-hook-form";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { Field } from "@/components/common/FormField";

interface Props<TFormValues extends FieldValues> {
  control: Control<TFormValues>;
  paramsName: Path<TFormValues>;
  requiredName: Path<TFormValues>;
}

interface InnerProps {
  value: string[];
  onChange: (next: string[]) => void;
  names: string[];
}

function RequiredPickerInner({ value, onChange, names }: InnerProps) {
  const namesKey = names.join("|");
  React.useEffect(() => {
    const filtered = value.filter((v) => names.includes(v));
    if (filtered.length !== value.length) onChange(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [namesKey]);

  function toggle(name: string) {
    onChange(value.includes(name) ? value.filter((v) => v !== name) : [...value, name]);
  }

  return (
    <Field label="Required parameters" hint="Pick which body params the agent must supply.">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="outline"
            role="combobox"
            aria-label="Required parameters picker"
            aria-expanded="false"
            className="w-full justify-between"
          >
            <span className="flex flex-wrap gap-1">
              {value.length === 0 && <span className="text-muted-foreground">None</span>}
              {value.map((v) => <Badge key={v} variant="secondary">{v}</Badge>)}
            </span>
            <ChevronsUpDown className="h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[280px] p-0" align="start">
          <Command>
            <CommandInput placeholder="Search params..." />
            <CommandList>
              <CommandEmpty>{names.length === 0 ? "Add body params first." : "No matches."}</CommandEmpty>
              <CommandGroup>
                {names.map((n) => {
                  const selected = value.includes(n);
                  return (
                    <CommandItem key={n} value={n} onSelect={() => toggle(n)}>
                      <Check className={"mr-2 h-4 w-4 " + (selected ? "opacity-100" : "opacity-0")} />
                      {n}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </Field>
  );
}

export function RequiredParamsPicker<TFormValues extends FieldValues>({ control, paramsName, requiredName }: Props<TFormValues>) {
  const params = useWatch({ control, name: paramsName as never }) as Array<{ name?: string }> | undefined;
  const names = React.useMemo(() => (params ?? []).map((p) => p?.name ?? "").filter(Boolean), [params]);

  return (
    <Controller
      control={control}
      name={requiredName as never}
      render={({ field }) => {
        const value: string[] = Array.isArray(field.value) ? field.value : [];
        return <RequiredPickerInner value={value} onChange={field.onChange} names={names} />;
      }}
    />
  );
}
