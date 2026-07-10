"use client";
import Papa from "papaparse";

export interface ParsedCsv<T> {
  rows: T[];
  errors: Array<{ row: number; message: string }>;
}

export function parseCsvText<T = Record<string, string>>(text: string): ParsedCsv<T> {
  const result = Papa.parse<T>(text, {
    header: true,
    skipEmptyLines: "greedy",
    transformHeader: (h) => h.trim(),
    transform: (value) => (typeof value === "string" ? value.trim() : value),
  });
  const errors = (result.errors ?? []).map((e) => ({
    row: (e.row ?? 0) + 2,
    message: e.message,
  }));
  return { rows: (result.data ?? []) as T[], errors };
}

export async function parseCsvFile<T = Record<string, string>>(file: File): Promise<ParsedCsv<T>> {
  const text = await file.text();
  return parseCsvText<T>(text);
}

export function toCsv<T extends Record<string, unknown>>(rows: T[], columns: string[]): string {
  return Papa.unparse(
    { fields: columns, data: rows.map((r) => columns.map((c) => r[c] ?? "")) },
    { header: true, newline: "\n" },
  );
}

export function downloadText(filename: string, text: string, mime = "text/csv") {
  const blob = new Blob([text], { type: `${mime};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
