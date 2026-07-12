"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetcher } from "@/lib/client/fetcher";

export interface ClientAiConfig {
  provider: "claude" | "openai" | null;
  baseUrl: string | null;
  model: string | null;
  hasApiKey: boolean;
}

export interface ClientSession {
  authenticated: boolean;
  user?: { id?: string; name?: string };
  lastEntityId?: string | null;
  lastBusinessId?: string | null;
  lastWabaId?: string | null;
  readOnly?: boolean;
  ai?: ClientAiConfig;
}

export interface SessionPatch {
  lastEntityId?: string | null;
  lastBusinessId?: string | null;
  lastWabaId?: string | null;
  readOnly?: boolean;
  aiProvider?: "claude" | "openai" | null;
  aiBaseUrl?: string | null;
  aiApiKey?: string | null;
  aiModel?: string | null;
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
    mutationFn: (body: SessionPatch) => fetcher("/api/session", { method: "PATCH", json: body }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["session"] }),
  });
}
