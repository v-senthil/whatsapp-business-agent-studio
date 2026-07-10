"use client";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";

export default function ApiDocsClient() {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  // Zudoku's standalone loader treats data-api-url as a URL only if it contains
  // "://" — otherwise it falls back to YAML parsing and throws "Unsupported
  // schema input". Set the absolute URL after mount, THEN mount the script.
  useEffect(() => {
    if (!ref.current) return;
    ref.current.setAttribute("data-api-url", `${window.location.origin}/openapi.json`);
    setReady(true);
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/vendor/zudoku/zudoku.css" />
      {ready && (
        <Script type="module" src="/vendor/zudoku/main.js" strategy="afterInteractive" />
      )}
      <div
        ref={ref}
        className="h-full min-h-0 flex-1 overflow-hidden"
        style={{ height: "100%", display: "block" }}
      />
    </>
  );
}
