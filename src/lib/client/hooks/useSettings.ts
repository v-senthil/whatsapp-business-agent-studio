"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetcher, metaUrl } from "@/lib/client/fetcher";
import { qk } from "@/lib/client/query-keys";
import type { AgentSettings } from "@/types/meta";

export function useSettings(entityId: string, agentId?: string) {
  return useQuery({
    queryKey: qk.settings(entityId, agentId),
    queryFn: () => fetcher<AgentSettings[] | { data: AgentSettings[] } | AgentSettings>(metaUrl(entityId, "agent_config/settings", { agent_id: agentId })),
  });
}

export function useUpdateSettings(entityId: string, agentId?: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (body: Partial<AgentSettings>) =>
      fetcher(metaUrl(entityId, "agent_config/settings", { agent_id: agentId }), { method: "PUT", json: body }),
    onSuccess: () => qc.invalidateQueries({ queryKey: qk.settings(entityId), exact: false }),
  });
}

export function useEligibility(entityId: string) {
  // Rely on the provider default retry policy (which already skips 401/404).
  // The prior retry:false override made every eligibility read give up after a
  // single transient blip.
  return useQuery({
    queryKey: qk.eligibility(entityId),
    queryFn: () => fetcher<unknown>(metaUrl(entityId, "agent_eligibility")),
  });
}

export function useOnboardAgent(entityId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (channel: string) =>
      fetcher<{ agent_id: string }>(metaUrl(entityId, "agent_onboarding", { channel }), { method: "POST" }),
    onSuccess: () => qc.invalidateQueries({ queryKey: qk.entity(entityId), exact: false }),
  });
}
