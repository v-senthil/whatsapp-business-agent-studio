"use client";
import { useMutation } from "@tanstack/react-query";
import { fetcher, metaUrl } from "@/lib/client/fetcher";
import type { AgentTestResponse } from "@/types/eval";

export function useAgentTest(entityId: string) {
  return useMutation({
    mutationFn: (body: { user_msg: string; conversation_id?: string }) =>
      fetcher<AgentTestResponse>(metaUrl(entityId, "agent_test"), { method: "POST", json: body }),
  });
}

export function useThreadControl(entityId: string) {
  return useMutation({
    mutationFn: (body: { messaging_product: string; action: string; to: string; recipient?: string }) =>
      fetcher(`/api/meta/business/whatsapp/phone_numbers/${entityId}/thread_control`, {
        method: "POST",
        json: body,
        headers: { "X-API-Version": "1.0.0" },
      }),
  });
}
