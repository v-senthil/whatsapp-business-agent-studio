"use client";
import { Suspense } from "react";
import { DevDrawer } from "@/components/dev/DevDrawer";

// Suspense wrapper because DevDrawer uses useSearchParams() which requires
// one in Next 15's App Router.
export function DevDrawerMount() {
  return (
    <Suspense fallback={null}>
      <DevDrawer />
    </Suspense>
  );
}
