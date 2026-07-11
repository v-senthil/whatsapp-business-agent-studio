"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetcher, metaUrl } from "@/lib/client/fetcher";
import { qk } from "@/lib/client/query-keys";
import type { Skill } from "@/types/meta";
import type { SkillInput } from "@/lib/schemas/skill";

type SkillsResponse = Skill[] | { data: Skill[] };
function normalize(r: SkillsResponse): Skill[] { return Array.isArray(r) ? r : (r?.data ?? []); }

// Every skills invalidation invalidates the "skills" subtree (with or without
// an agentId variant) so callers do not have to pass agentId to invalidate.
function invalidateAllSkills(qc: ReturnType<typeof useQueryClient>, entityId: string) {
  qc.invalidateQueries({ queryKey: ["entity", entityId, "skills"], exact: false });
}

export function useSkills(entityId: string, agentId?: string) {
  return useQuery({
    queryKey: qk.skills(entityId, agentId),
    queryFn: () => fetcher<SkillsResponse>(metaUrl(entityId, "agent_config/skills", { agent_id: agentId })).then(normalize),
  });
}

export function useSkill(entityId: string, skillId: string) {
  return useQuery({
    queryKey: qk.skill(entityId, skillId),
    queryFn: () => fetcher<Skill>(metaUrl(entityId, `agent_config/skills/${skillId}`)),
    enabled: !!skillId,
  });
}

// Compute the URL at mutate time (not hook time) so a caller that constructs
// the hook without an agentId can still target a specific agent per-call.
export function useCreateSkill(entityId: string, defaultAgentId?: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (body: SkillInput | { body: SkillInput; agentId?: string }) => {
      const isWrapped = typeof body === "object" && body !== null && "body" in body;
      const payload = isWrapped ? body.body : body;
      const agentId = isWrapped ? body.agentId ?? defaultAgentId : defaultAgentId;
      return fetcher<Skill>(metaUrl(entityId, "agent_config/skills", { agent_id: agentId }), {
        method: "POST",
        json: payload,
      });
    },
    onSuccess: () => invalidateAllSkills(qc, entityId),
  });
}

export function useUpdateSkill(entityId: string, skillId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (body: SkillInput) => fetcher<Skill>(metaUrl(entityId, `agent_config/skills/${skillId}`), { method: "PUT", json: body }),
    onSuccess: () => {
      invalidateAllSkills(qc, entityId);
      qc.invalidateQueries({ queryKey: qk.skill(entityId, skillId) });
    },
  });
}

export function useDeleteSkill(entityId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (skillId: string) => fetcher(metaUrl(entityId, `agent_config/skills/${skillId}`), { method: "DELETE" }),
    onSuccess: () => invalidateAllSkills(qc, entityId),
  });
}
