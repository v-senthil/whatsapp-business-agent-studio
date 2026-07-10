"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetcher, metaUrl } from "@/lib/client/fetcher";
import { qk } from "@/lib/client/query-keys";
import type { AllowlistEntry, Faq, KnowledgeFile, KnowledgeWebsite } from "@/types/knowledge";

function toArray<T>(r: T[] | { data: T[] }): T[] { return Array.isArray(r) ? r : (r?.data ?? []); }

// FILES
export function useFiles(entityId: string) {
  return useQuery({
    queryKey: qk.files(entityId),
    queryFn: () => fetcher<KnowledgeFile[] | { data: KnowledgeFile[] }>(metaUrl(entityId, "agent_config/files")).then(toArray),
  });
}
export function useDeleteFile(entityId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => fetcher(metaUrl(entityId, `agent_config/files/${id}`), { method: "DELETE" }),
    onSuccess: () => qc.invalidateQueries({ queryKey: qk.files(entityId) }),
  });
}

// WEBSITES
export function useWebsites(entityId: string) {
  return useQuery({
    queryKey: qk.websites(entityId),
    queryFn: () => fetcher<KnowledgeWebsite[] | { data: KnowledgeWebsite[] }>(metaUrl(entityId, "agent_config/websites")).then(toArray),
  });
}
export function useCreateWebsite(entityId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (body: { url: string }) => fetcher<KnowledgeWebsite>(metaUrl(entityId, "agent_config/websites"), { method: "POST", json: body }),
    onSuccess: () => qc.invalidateQueries({ queryKey: qk.websites(entityId) }),
  });
}
export function useUpdateWebsite(entityId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, url }: { id: string; url: string }) => fetcher<KnowledgeWebsite>(metaUrl(entityId, `agent_config/websites/${id}`), { method: "PUT", json: { url } }),
    onSuccess: () => qc.invalidateQueries({ queryKey: qk.websites(entityId) }),
  });
}
export function useDeleteWebsite(entityId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => fetcher(metaUrl(entityId, `agent_config/websites/${id}`), { method: "DELETE" }),
    onSuccess: () => qc.invalidateQueries({ queryKey: qk.websites(entityId) }),
  });
}

// FAQS
export function useFaqs(entityId: string) {
  return useQuery({
    queryKey: qk.faqs(entityId),
    queryFn: () => fetcher<Faq[] | { data: Faq[] }>(metaUrl(entityId, "agent_config/faq")).then(toArray),
  });
}
export function useCreateFaq(entityId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (body: Omit<Faq, "id">) => fetcher<Faq>(metaUrl(entityId, "agent_config/faq"), { method: "POST", json: body }),
    onSuccess: () => qc.invalidateQueries({ queryKey: qk.faqs(entityId) }),
  });
}
export function useUpdateFaq(entityId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...body }: Faq) => fetcher<Faq>(metaUrl(entityId, `agent_config/faq/${id}`), { method: "PUT", json: body }),
    onSuccess: () => qc.invalidateQueries({ queryKey: qk.faqs(entityId) }),
  });
}
export function useDeleteFaq(entityId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => fetcher(metaUrl(entityId, `agent_config/faq/${id}`), { method: "DELETE" }),
    onSuccess: () => qc.invalidateQueries({ queryKey: qk.faqs(entityId) }),
  });
}

// ALLOWLIST
export function useAllowlist(entityId: string) {
  return useQuery({
    queryKey: qk.allowlist(entityId),
    queryFn: () => fetcher<AllowlistEntry[] | { data: AllowlistEntry[] }>(metaUrl(entityId, "agent_config/allowlist")).then(toArray),
  });
}
export function useCreateAllowlist(entityId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (body: { consumer_phone_number: string }) => fetcher<AllowlistEntry>(metaUrl(entityId, "agent_config/allowlist"), { method: "POST", json: body }),
    onSuccess: () => qc.invalidateQueries({ queryKey: qk.allowlist(entityId) }),
  });
}
export function useDeleteAllowlist(entityId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => fetcher(metaUrl(entityId, `agent_config/allowlist/${id}`), { method: "DELETE" }),
    onSuccess: () => qc.invalidateQueries({ queryKey: qk.allowlist(entityId) }),
  });
}
