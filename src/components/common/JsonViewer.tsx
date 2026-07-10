"use client";
import * as React from "react";
import { cn } from "@/lib/utils/cn";

interface JsonViewerProps {
  data: unknown;
  className?: string;
}

export function JsonViewer({ data, className }: JsonViewerProps) {
  const text = React.useMemo(() => {
    try {
      return JSON.stringify(data, null, 2);
    } catch {
      return String(data);
    }
  }, [data]);
  return (
    <pre className={cn("max-h-96 overflow-auto rounded-md bg-muted p-3 font-mono text-xs leading-relaxed", className)}>{text}</pre>
  );
}
