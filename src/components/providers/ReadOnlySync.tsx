"use client";
import { useEffect } from "react";
import { setReadOnlyMode } from "@/lib/client/fetcher";
import { useSession } from "@/lib/client/hooks/useSession";

// Bridges the server-side session's readOnly flag to the client fetcher's
// module-level guard. Mount once inside the QueryProvider tree.
export function ReadOnlySync() {
  const q = useSession();
  useEffect(() => {
    setReadOnlyMode(!!q.data?.readOnly);
  }, [q.data?.readOnly]);
  return null;
}
