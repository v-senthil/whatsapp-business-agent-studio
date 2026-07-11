"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetcher, metaUrl } from "@/lib/client/fetcher";
import { qk } from "@/lib/client/query-keys";
import type { Connector } from "@/types/connector";
import type { Tool } from "@/types/tool";

function toArray<T>(r: T[] | { data: T[] } | undefined): T[] { return Array.isArray(r) ? r : (r?.data ?? []); }

export function useConnectors(entityId: string) {
  return useQuery({
    queryKey: qk.connectors(entityId),
    queryFn: () => fetcher<Connector[] | { data: Connector[] }>(metaUrl(entityId, "agent_connectors")).then(toArray),
  });
}

export function useConnector(entityId: string, connectorId: string) {
  return useQuery({
    queryKey: qk.connector(entityId, connectorId),
    queryFn: () => fetcher<Connector>(metaUrl(entityId, `agent_connectors/${connectorId}`)),
    enabled: !!connectorId,
  });
}

export function useCreateConnector(entityId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (body: unknown) => fetcher<Connector>(metaUrl(entityId, "agent_connectors"), { method: "POST", json: body }),
    onSuccess: (created) => {
      // Optimistic list update: prepend the created connector to the cached
      // list so the /connectors page renders it on the first frame after
      // navigation, before the background invalidation refetch resolves.
      qc.setQueryData<Connector[] | undefined>(qk.connectors(entityId), (prev) =>
        prev ? [created, ...prev] : [created],
      );
      qc.invalidateQueries({ queryKey: qk.connectors(entityId) });
    },
  });
}

export function useUpdateConnector(entityId: string, connectorId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (body: unknown) => fetcher<Connector>(metaUrl(entityId, `agent_connectors/${connectorId}`), { method: "PUT", json: body }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: qk.connectors(entityId) });
      qc.invalidateQueries({ queryKey: qk.connector(entityId, connectorId) });
    },
  });
}

export function useDeleteConnector(entityId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (connectorId: string) => fetcher(metaUrl(entityId, `agent_connectors/${connectorId}`), { method: "DELETE" }),
    onSuccess: (_data, connectorId) => {
      // Remove immediately from the list cache so the /connectors page paints
      // without the deleted item on the first frame after navigation.
      qc.setQueryData<Connector[] | undefined>(qk.connectors(entityId), (prev) =>
        prev ? prev.filter((c) => c.id !== connectorId) : prev,
      );
      // Drop the deleted item's own detail + tools caches so a stale return
      // trip via back button does not briefly render the removed record.
      qc.removeQueries({ queryKey: qk.connector(entityId, connectorId) });
      qc.removeQueries({ queryKey: qk.tools(entityId, connectorId) });
      qc.invalidateQueries({ queryKey: qk.connectors(entityId) });
    },
  });
}

export function useUpsertApiKey(entityId: string, connectorId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (body: unknown) => fetcher(metaUrl(entityId, `agent_connectors/${connectorId}/upsertApiKey`), { method: "POST", json: body }),
    onSuccess: () => qc.invalidateQueries({ queryKey: qk.connector(entityId, connectorId) }),
  });
}

export function useUpsertOAuth(entityId: string, connectorId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (body: unknown) => fetcher(metaUrl(entityId, `agent_connectors/${connectorId}/upsertOAuth`), { method: "POST", json: body }),
    onSuccess: () => qc.invalidateQueries({ queryKey: qk.connector(entityId, connectorId) }),
  });
}

export function useUpsertCertificate(entityId: string, connectorId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (body: unknown) => fetcher(metaUrl(entityId, `agent_connectors/${connectorId}/upsertCertificate`), { method: "POST", json: body }),
    onSuccess: () => qc.invalidateQueries({ queryKey: qk.connector(entityId, connectorId) }),
  });
}

export function useConnectorLogs(entityId: string, connectorId: string, params: Record<string, string | undefined>) {
  return useQuery({
    queryKey: [...qk.connectorLogs(entityId, connectorId), params],
    queryFn: () => fetcher<unknown>(metaUrl(entityId, `agent_connectors/${connectorId}/logs`, params)),
    enabled: !!connectorId,
  });
}

// Tools
export function useTools(entityId: string, connectorId: string) {
  return useQuery({
    queryKey: qk.tools(entityId, connectorId),
    queryFn: () => fetcher<Tool[] | { data: Tool[] }>(metaUrl(entityId, `agent_connectors/${connectorId}/tools`)).then(toArray),
    enabled: !!connectorId,
  });
}

export function useTool(entityId: string, connectorId: string, toolId: string) {
  return useQuery({
    queryKey: qk.tool(entityId, connectorId, toolId),
    queryFn: () => fetcher<Tool>(metaUrl(entityId, `agent_connectors/${connectorId}/tools/${toolId}`)),
    enabled: !!connectorId && !!toolId,
  });
}

export function useCreateTool(entityId: string, connectorId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (body: unknown) => fetcher<Tool>(metaUrl(entityId, `agent_connectors/${connectorId}/tools`), { method: "POST", json: body }),
    onSuccess: (created) => {
      qc.setQueryData<Tool[] | undefined>(qk.tools(entityId, connectorId), (prev) =>
        prev ? [created, ...prev] : [created],
      );
      qc.invalidateQueries({ queryKey: qk.tools(entityId, connectorId) });
    },
  });
}

export function useUpdateTool(entityId: string, connectorId: string, toolId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (body: unknown) => fetcher<Tool>(metaUrl(entityId, `agent_connectors/${connectorId}/tools/${toolId}`), { method: "PUT", json: body }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: qk.tools(entityId, connectorId) });
      qc.invalidateQueries({ queryKey: qk.tool(entityId, connectorId, toolId) });
    },
  });
}

export function useDeleteTool(entityId: string, connectorId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (toolId: string) => fetcher(metaUrl(entityId, `agent_connectors/${connectorId}/tools/${toolId}`), { method: "DELETE" }),
    onSuccess: (_data, toolId) => {
      qc.setQueryData<Tool[] | undefined>(qk.tools(entityId, connectorId), (prev) =>
        prev ? prev.filter((t) => t.id !== toolId) : prev,
      );
      qc.removeQueries({ queryKey: qk.tool(entityId, connectorId, toolId) });
      qc.invalidateQueries({ queryKey: qk.tools(entityId, connectorId) });
    },
  });
}

export function useRunTool(entityId: string, connectorId: string, toolId: string) {
  return useMutation({
    mutationFn: (input: string) => fetcher<unknown>(metaUrl(entityId, `agent_connectors/${connectorId}/tools/${toolId}/run`), { method: "POST", json: { input } }),
  });
}
