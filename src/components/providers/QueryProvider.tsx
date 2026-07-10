"use client";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { MetaApiError } from "@/lib/api/errors";

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [client] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 30_000,
            refetchOnWindowFocus: false,
            retry: (n, err) => {
              if (err instanceof MetaApiError && (err.status === 401 || err.status === 404)) return false;
              return n < 2;
            },
          },
        },
      }),
  );

  React.useEffect(() => {
    const handler = () => router.replace("/login");
    window.addEventListener("wabiz:unauthenticated", handler);
    return () => window.removeEventListener("wabiz:unauthenticated", handler);
  }, [router]);

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
