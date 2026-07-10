"use client";
import Script from "next/script";

export default function ApiDocsClient() {
  return (
    <>
      {/* Zudoku standalone build — self-hosted from public/vendor/zudoku */}
      <link rel="stylesheet" href="/vendor/zudoku/zudoku.css" />
      <Script type="module" src="/vendor/zudoku/main.js" strategy="afterInteractive" />
      <div
        data-api-url="/openapi.json"
        className="h-full min-h-0 flex-1 overflow-hidden"
        style={{ height: "100%", display: "block" }}
      />
    </>
  );
}
