"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetcher, metaUrl } from "@/lib/client/fetcher";
import { qk } from "@/lib/client/query-keys";
import type { EvalCase, EvalDetail, EvalJob, EvalSummary } from "@/types/eval";

function toArray<T>(r: T[] | { data: T[]; eval_cases?: T[] } | undefined): T[] {
  if (!r) return [];
  if (Array.isArray(r)) return r;
  if ("eval_cases" in r && r.eval_cases) return r.eval_cases;
  return r.data ?? [];
}

export function useEvalCases(entityId: string) {
  return useQuery({
    queryKey: qk.evalCases(entityId),
    queryFn: () => fetcher<EvalCase[] | { data: EvalCase[]; eval_cases?: EvalCase[] }>(metaUrl(entityId, "agent-eval/cases")).then(toArray),
  });
}

export function useRunEval(entityId: string) {
  return useMutation({
    mutationFn: (caseIds: string[]) =>
      fetcher<EvalJob>(metaUrl(entityId, "agent-eval/run", { eval_case_ids: caseIds.join(",") }), { method: "POST", json: {} }),
  });
}

export function useEvalJob(entityId: string, jobId: string) {
  return useQuery({
    queryKey: qk.evalJob(entityId, jobId),
    queryFn: () => fetcher<EvalJob>(metaUrl(entityId, "agent-eval/run", { job_id: jobId })),
    enabled: !!jobId,
    refetchInterval: (query) => {
      const data = query.state.data as EvalJob | undefined;
      return data?.status === "PENDING" || data?.status === "RUNNING" ? 3000 : false;
    },
  });
}

export function useEvalDetails(entityId: string, ids: string[]) {
  return useQuery({
    queryKey: ["entity", entityId, "evals", "details", ids.join(",")],
    queryFn: () => fetcher<EvalDetail[] | { data: EvalDetail[] }>(metaUrl(entityId, "agent-eval/details", { eval_ids: ids.join(",") })).then(toArray),
    enabled: ids.length > 0,
  });
}

export function useEvalSummary(entityId: string, ids: string[]) {
  return useQuery({
    queryKey: ["entity", entityId, "evals", "summary", ids.join(",")],
    queryFn: () => fetcher<EvalSummary[] | { data: EvalSummary[] }>(metaUrl(entityId, "agent-eval/summary", { summary_ids: ids.join(",") })).then(toArray),
    enabled: ids.length > 0,
  });
}
