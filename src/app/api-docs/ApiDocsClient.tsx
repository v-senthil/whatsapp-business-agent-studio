"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function ApiDocsClient() {
  const ref = useRef<HTMLIFrameElement>(null);
  const { resolvedTheme } = useTheme();

  // When the parent theme changes, push it into the iframe so Zudoku's
  // dark-mode CSS variables flip. Same-origin so we can touch the doc.
  useEffect(() => {
    const iframe = ref.current;
    if (!iframe) return;
    function apply() {
      const doc = iframe?.contentDocument;
      if (!doc) return;
      const isDark = resolvedTheme === "dark";
      doc.documentElement.classList.toggle("dark", isDark);
    }
    apply();
    iframe.addEventListener("load", apply);
    return () => iframe.removeEventListener("load", apply);
  }, [resolvedTheme]);

  return (
    <iframe
      ref={ref}
      src="/vendor/zudoku/docs.html"
      title="API reference"
      className="h-full w-full border-0"
    />
  );
}
