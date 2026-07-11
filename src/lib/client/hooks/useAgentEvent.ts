"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetcher, metaUrl } from "@/lib/client/fetcher";
import { qk } from "@/lib/client/query-keys";
import type { AgentEventInput } from "@/lib/schemas/agent-event";
import type { AgentEventPostResponse, AgentEventStatusResponse } from "@/types/agent-event";

export function useSubmitAgentEvent(entityId: string) {
  return useMutation({
    mutationFn: (body: AgentEventInput) =>
      fetcher<AgentEventPostResponse>(metaUrl(entityId, "agent_event"), { method: "POST", json: body }),
  });
}

export function useAgentEventStatus(entityId: string, agentEventId: string | undefined) {
  return useQuery({
    queryKey: qk.agentEvent(entityId, agentEventId ?? ""),
    queryFn: () => fetcher<AgentEventStatusResponse>(metaUrl(entityId, `agent_event/${agentEventId}`)),
    enabled: !!agentEventId,
    refetchInterval: (query) => {
      const s = (query.state.data as AgentEventStatusResponse | undefined)?.status;
      return s === "request_received" || s === "processing" ? 3000 : false;
    },
  });
}
