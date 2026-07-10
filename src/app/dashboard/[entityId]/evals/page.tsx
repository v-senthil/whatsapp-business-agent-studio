"use client";
import { use, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ClipboardCheck, Play } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/common/EmptyState";
import { ErrorState } from "@/components/common/ErrorState";
import { LoadingButton } from "@/components/common/LoadingButton";
import { useEvalCases, useRunEval } from "@/lib/client/hooks/useEvals";

export default function EvalsPage({ params }: { params: Promise<{ entityId: string }> }) {
  const { entityId } = use(params);
  const router = useRouter();
  const { data, isLoading, error } = useEvalCases(entityId);
  const run = useRunEval(entityId);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const grouped = useMemo(() => {
    const bucket: Record<string, typeof data> = {};
    (data ?? []).forEach((c) => {
      const key = c.categories?.[0] ?? "Uncategorized";
      (bucket[key] ??= []).push(c);
    });
    return bucket;
  }, [data]);

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }
  function selectAll() { setSelected(new Set((data ?? []).map((c) => c.id))); }
  function clearAll() { setSelected(new Set()); }

  async function submit() {
    try {
      const job = await run.mutateAsync([...selected]);
      toast.success("Evaluation started");
      router.push(`/dashboard/${entityId}/evals/runs/${job.job_id}`);
    } catch { /* shown below */ }
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6 py-4">
      <div>
        <h1 className="text-2xl font-semibold">Evals</h1>
        <p className="text-sm text-muted-foreground">Pick cases and run to see how the agent scores.</p>
      </div>
      {error && <ErrorState error={error} />}
      {run.error && <ErrorState error={run.error} />}
      {isLoading ? (
        <div className="space-y-2">{[0,1,2,3].map((i) => <Skeleton key={i} className="h-12" />)}</div>
      ) : data && data.length > 0 ? (
        <>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={selectAll}>Select all</Button>
            <Button variant="outline" size="sm" onClick={clearAll}>Clear</Button>
            <span className="text-xs text-muted-foreground ml-auto">{selected.size} of {data.length} selected</span>
          </div>
          <div className="space-y-4">
            {Object.entries(grouped).map(([cat, cases]) => (
              <Card key={cat}>
                <CardHeader className="pb-2"><CardTitle className="text-sm">{cat}</CardTitle></CardHeader>
                <CardContent className="divide-y">
                  {cases!.map((c) => (
                    <div key={c.id} className="flex items-start gap-3 py-2">
                      <Checkbox checked={selected.has(c.id)} onCheckedChange={() => toggle(c.id)} className="mt-1" />
                      <div className="flex-1">
                        <div className="text-sm">{c.scenario}</div>
                        {c.success_criteria && c.success_criteria.length > 0 && (
                          <ul className="mt-1 list-disc pl-5 text-xs text-muted-foreground">
                            {c.success_criteria.map((s, i) => <li key={i}>{s}</li>)}
                          </ul>
                        )}
                      </div>
                      {c.max_turns && <span className="text-xs text-muted-foreground">{c.max_turns} turns</span>}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
          <CardFooter className="justify-end p-0">
            <LoadingButton disabled={selected.size === 0} loading={run.isPending} onClick={submit}>
              <Play className="h-4 w-4" /> Run {selected.size ? `(${selected.size})` : ""}
            </LoadingButton>
          </CardFooter>
        </>
      ) : (
        <EmptyState icon={<ClipboardCheck className="h-8 w-8" />} title="No eval cases available" description="Your agent may not have eval cases seeded yet." />
      )}
    </div>
  );
}
