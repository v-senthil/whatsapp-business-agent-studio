"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetcher, metaUrl } from "@/lib/client/fetcher";
import { qk } from "@/lib/client/query-keys";
import type { Skill } from "@/types/meta";
import type { SkillInput } from "@/lib/schemas/skill";

type SkillsResponse = Skill[] | { data: Skill[] };
function normalize(r: SkillsResponse): Skill[] { return Array.isArray(r) ? r : (r?.data ?? []); }

export function useSkills(entityId: string, agentId?: string) {
  return useQuery({
    queryKey: qk.skills(entityId),
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

export function useCreateSkill(entityId: string, agentId?: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (body: SkillInput) => fetcher<Skill>(metaUrl(entityId, "agent_config/skills", { agent_id: agentId }), { method: "POST", json: body }),
    onSuccess: () => qc.invalidateQueries({ queryKey: qk.skills(entityId) }),
  });
}

export function useUpdateSkill(entityId: string, skillId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (body: SkillInput) => fetcher<Skill>(metaUrl(entityId, `agent_config/skills/${skillId}`), { method: "PUT", json: body }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: qk.skills(entityId) });
      qc.invalidateQueries({ queryKey: qk.skill(entityId, skillId) });
    },
  });
}

export function useDeleteSkill(entityId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (skillId: string) => fetcher(metaUrl(entityId, `agent_config/skills/${skillId}`), { method: "DELETE" }),
    onSuccess: () => qc.invalidateQueries({ queryKey: qk.skills(entityId) }),
  });
}
