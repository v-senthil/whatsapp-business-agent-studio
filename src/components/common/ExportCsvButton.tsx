"use client";
import * as React from "react";
import { Download } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { downloadText, toCsv } from "@/lib/utils/csv";

interface Props<T extends Record<string, unknown>> {
  filename: string;
  columns: string[];
  rows: T[] | undefined;
  disabled?: boolean;
  label?: string;
}

export function ExportCsvButton<T extends Record<string, unknown>>({ filename, columns, rows, disabled, label = "Export CSV" }: Props<T>) {
  function onClick() {
    if (!rows || rows.length === 0) {
      toast.info("Nothing to export");
      return;
    }
    downloadText(filename, toCsv(rows, columns));
    toast.success(`Downloaded ${rows.length} row${rows.length === 1 ? "" : "s"}`);
  }
  return (
    <Button type="button" variant="outline" size="sm" disabled={disabled || !rows || rows.length === 0} onClick={onClick}>
      <Download className="h-4 w-4" /> {label}
    </Button>
  );
}
