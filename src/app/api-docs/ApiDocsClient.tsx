"use client";
import * as React from "react";
import Script from "next/script";
import { useTheme } from "next-themes";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "elements-api": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          apiDescriptionUrl?: string;
          router?: string;
          layout?: string;
          hideExport?: boolean;
          hideInternal?: boolean;
          tryItCredentialsPolicy?: string;
        },
        HTMLElement
      >;
    }
  }
}

export default function ApiDocsClient() {
  const { resolvedTheme } = useTheme();
  return (
    <>
      {/* Stoplight Elements web-component build (React-independent) */}
      <link rel="stylesheet" href="/vendor/stoplight/styles.min.css" />
      <Script
        src="/vendor/stoplight/web-components.min.js"
        strategy="afterInteractive"
      />
      <div
        className={"h-full min-h-0 flex-1 overflow-hidden " + (resolvedTheme === "dark" ? "sl-elements-dark" : "")}
        data-theme={resolvedTheme}
      >
        {/* @ts-expect-error - custom element */}
        <elements-api
          apiDescriptionUrl="/openapi.yaml"
          router="hash"
          layout="sidebar"
          hideExport
          tryItCredentialsPolicy="omit"
          style={{ height: "100%", display: "block" }}
        />
      </div>
    </>
  );
}
