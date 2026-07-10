"use client";
import { use, useMemo } from "react";
import { Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ErrorState } from "@/components/common/ErrorState";
import { JsonViewer } from "@/components/common/JsonViewer";
import { useEvalDetails, useEvalJob, useEvalSummary } from "@/lib/client/hooks/useEvals";

export default function EvalRunPage({ params }: { params: Promise<{ entityId: string; jobId: string }> }) {
  const { entityId, jobId } = use(params);
  const job = useEvalJob(entityId, jobId);
  const evalIds = useMemo(() => job.data?.eval_ids ?? [], [job.data]);
  const summaryIds = useMemo(() => job.data?.summary_ids ?? [], [job.data]);
  const details = useEvalDetails(entityId, evalIds);
  const summary = useEvalSummary(entityId, summaryIds);

  const total = job.data?.progress?.total ?? evalIds.length ?? 1;
  const done = job.data?.progress?.completed ?? 0;
  const pct = total ? Math.round((done / total) * 100) : 0;

  return (
    <div className="mx-auto max-w-4xl space-y-4 py-4">
      <div>
        <h1 className="text-2xl font-semibold">Eval run</h1>
        <p className="text-xs text-muted-foreground font-mono">{jobId}</p>
      </div>
      {job.error && <ErrorState error={job.error} />}
      <Card>
        <CardHeader className="flex-row items-center justify-between space-y-0">
          <CardTitle className="text-sm">Status</CardTitle>
          {job.data && (
            <Badge variant={job.data.status === "SUCCEEDED" ? "success" : job.data.status === "FAILED" ? "destructive" : "secondary"}>
              {job.data.status}
            </Badge>
          )}
        </CardHeader>
        <CardContent>
          {job.isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
          {job.data && (job.data.status === "RUNNING" || job.data.status === "PENDING") && (
            <div className="space-y-2">
              <Progress value={pct} />
              <p className="text-xs text-muted-foreground">{done} / {total}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {summary.data && summary.data.length > 0 && (
        <Card>
          <CardHeader><CardTitle className="text-sm">Summary</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {summary.data.map((s) => (
              <div key={s.id}>
                <div className="flex gap-4 text-sm">
                  <span>Passed: <span className="font-medium text-emerald-700 dark:text-emerald-400">{s.totals?.passed ?? 0}</span></span>
                  <span>Failed: <span className="font-medium text-destructive">{s.totals?.failed ?? 0}</span></span>
                  <span>Total: {s.totals?.total ?? 0}</span>
                </div>
                {s.insights && s.insights.length > 0 && (
                  <ul className="mt-2 list-disc pl-5 text-xs text-muted-foreground">
                    {s.insights.map((i, idx) => <li key={idx}>{i}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {details.data && details.data.length > 0 && (
        <Card>
          <CardHeader><CardTitle className="text-sm">Details</CardTitle></CardHeader>
          <CardContent>
            <Accordion type="multiple">
              {details.data.map((d) => (
                <AccordionItem key={d.id} value={d.id}>
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Badge variant={d.passed ? "success" : "destructive"}>{d.passed ? "PASS" : "FAIL"}</Badge>
                      <span className="text-sm">{d.case_id}</span>
                      {typeof d.score === "number" && <span className="text-xs text-muted-foreground">score {d.score}</span>}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {d.notes && <p className="mb-2 text-sm">{d.notes}</p>}
                    {d.transcript && <JsonViewer data={d.transcript} />}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
