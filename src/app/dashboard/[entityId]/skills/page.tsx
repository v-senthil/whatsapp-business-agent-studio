"use client";
import { use } from "react";
import Link from "next/link";
import { Layers, Plus, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState } from "@/components/common/EmptyState";
import { ErrorState } from "@/components/common/ErrorState";
import { Skeleton } from "@/components/ui/skeleton";
import { BulkImportDialog } from "@/components/common/BulkImportDialog";
import { ExportCsvButton } from "@/components/common/ExportCsvButton";
import { SkillTemplatesDialog } from "@/components/skills/SkillTemplatesDialog";
import { useCreateSkill, useSkills } from "@/lib/client/hooks/useSkills";
import { skillSchema } from "@/lib/schemas/skill";

export default function SkillsPage({ params }: { params: Promise<{ entityId: string }> }) {
  const { entityId } = use(params);
  const { data, isLoading, error, refetch } = useSkills(entityId);
  const create = useCreateSkill(entityId);

  const exportRows = (data ?? []).map((s) => ({ title: s.title, description: s.description, skill: s.skill }));

  return (
    <div className="space-y-6 py-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h1 className="text-2xl font-semibold">Skills</h1>
          <p className="text-sm text-muted-foreground">Prompt-style instructions the agent follows in specific scenarios.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <ExportCsvButton filename="skills.csv" columns={["title", "description", "skill"]} rows={exportRows} />
          <BulkImportDialog
            trigger={<Button variant="outline"><Upload className="h-4 w-4" /> Import CSV</Button>}
            title="Import skills from CSV"
            description="Bulk-add skills. Each row is validated against the same schema as the single-skill form."
            columns={["title", "description", "skill"]}
            sampleHref="/samples/skills.csv"
            rowSchema={skillSchema}
            submit={(row) => create.mutateAsync(row)}
            onComplete={() => refetch()}
          />
          <SkillTemplatesDialog
            entityId={entityId}
            onComplete={() => refetch()}
            existingTitles={(data ?? []).map((s) => s.title)}
          />
          <Button asChild>
            <Link href={`/dashboard/${entityId}/skills/new`}>
              <Plus className="h-4 w-4" /> New skill
            </Link>
          </Button>
        </div>
      </div>

      {error && <ErrorState error={error} />}

      {isLoading ? (
        <div className="grid gap-3 md:grid-cols-2">
          {[0, 1, 2, 3].map((i) => <Skeleton key={i} className="h-32" />)}
        </div>
      ) : data && data.length > 0 ? (
        <div className="grid gap-3 md:grid-cols-2">
          {data.map((skill) => (
            <Link key={skill.id} href={`/dashboard/${entityId}/skills/${skill.id}`}>
              <Card className="h-full transition-colors hover:bg-muted/40">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">{skill.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{skill.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="line-clamp-4 whitespace-pre-wrap text-xs text-muted-foreground font-mono">{skill.skill}</pre>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<Layers className="h-8 w-8" />}
          title="No skills yet"
          description="Create your first skill, pick from templates, or import a CSV."
          action={<Button asChild><Link href={`/dashboard/${entityId}/skills/new`}><Plus className="h-4 w-4" /> New skill</Link></Button>}
        />
      )}
    </div>
  );
}
