"use client";
import * as React from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

interface Props {
  value: string;
  label?: string;
  className?: string;
}

export function CopyButton({ value, label = "Copied to clipboard", className }: Props) {
  const [copied, setCopied] = React.useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast.success(label);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast.error("Could not copy");
    }
  }
  const Icon = copied ? Check : Copy;
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7 shrink-0", className)}
      onClick={copy}
      aria-label={copied ? "Copied" : "Copy"}
    >
      <Icon className={cn("h-3.5 w-3.5", copied && "text-emerald-600 dark:text-emerald-400")} />
    </Button>
  );
}
