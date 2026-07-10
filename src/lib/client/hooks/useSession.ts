"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetcher } from "@/lib/client/fetcher";

export interface ClientSession {
  authenticated: boolean;
  user?: { id?: string; name?: string };
  lastEntityId?: string | null;
  lastBusinessId?: string | null;
  readOnly?: boolean;
}

export function useSession() {
  return useQuery({
    queryKey: ["session"],
    queryFn: () => fetcher<ClientSession>("/api/session/me"),
    staleTime: 30_000,
    retry: false,
  });
}

export function usePatchSession() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (body: Partial<Pick<ClientSession, "lastEntityId" | "lastBusinessId" | "readOnly">>) =>
      fetcher("/api/session", { method: "PATCH", json: body }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["session"] }),
  });
}
