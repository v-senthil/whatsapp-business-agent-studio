"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetcher, metaUrl } from "@/lib/client/fetcher";
import { qk } from "@/lib/client/query-keys";
import type { BusinessInfo } from "@/types/meta";

export function useBusinessInfo(entityId: string) {
  return useQuery({
    queryKey: qk.businessInfo(entityId),
    queryFn: () => fetcher<BusinessInfo>(metaUrl(entityId, "agent_config/business_info")),
  });
}

export function useUpdateBusinessInfo(entityId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (body: BusinessInfo) =>
      fetcher(metaUrl(entityId, "agent_config/business_info"), { method: "PUT", json: body }),
    onSuccess: () => qc.invalidateQueries({ queryKey: qk.businessInfo(entityId) }),
  });
}

export function useResetBusinessInfo(entityId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: () => fetcher(metaUrl(entityId, "agent_config/business_info"), { method: "DELETE" }),
    onSuccess: () => qc.invalidateQueries({ queryKey: qk.businessInfo(entityId) }),
  });
}
