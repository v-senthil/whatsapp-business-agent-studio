"use client";
import { useTheme } from "next-themes";
import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  const { resolvedTheme } = useTheme();
  return (
    <SonnerToaster
      position="top-right"
      richColors
      closeButton
      theme={(resolvedTheme as "light" | "dark") ?? "system"}
    />
  );
}
