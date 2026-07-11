"use client";
import { Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { DevDrawer } from "@/components/dev/DevDrawer";

const HIDDEN_PATHS = new Set<string>(["/", "/login"]);

function DevDrawerGate() {
  const pathname = usePathname() ?? "/";
  const search = useSearchParams();
  // Always allow the ?debug=1 escape hatch, otherwise hide on marketing/help/
  // API-docs surfaces where the floating button would be noisy.
  const forceOpen = search?.get("debug") === "1";
  if (!forceOpen) {
    if (HIDDEN_PATHS.has(pathname)) return null;
    if (pathname.startsWith("/help")) return null;
    if (pathname.startsWith("/api-docs")) return null;
  }
  return <DevDrawer />;
}

// Suspense wrapper because DevDrawer (and now the gate) uses useSearchParams()
// which requires one in Next 15's App Router.
export function DevDrawerMount() {
  return (
    <Suspense fallback={null}>
      <DevDrawerGate />
    </Suspense>
  );
}
