"use client";
import { use } from "react";
import Link from "next/link";
import { Layers, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState } from "@/components/common/EmptyState";
import { ErrorState } from "@/components/common/ErrorState";
import { Skeleton } from "@/components/ui/skeleton";
import { useSkills } from "@/lib/client/hooks/useSkills";

export default function SkillsPage({ params }: { params: Promise<{ entityId: string }> }) {
  const { entityId } = use(params);
  const { data, isLoading, error } = useSkills(entityId);

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Skills</h1>
          <p className="text-sm text-muted-foreground">Prompt-style instructions the agent follows in specific scenarios.</p>
        </div>
        <Button asChild>
          <Link href={`/dashboard/${entityId}/skills/new`}>
            <Plus className="h-4 w-4" /> New skill
          </Link>
        </Button>
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
          description="Create your first skill to tell the agent how to handle a specific scenario."
          action={<Button asChild><Link href={`/dashboard/${entityId}/skills/new`}><Plus className="h-4 w-4" /> New skill</Link></Button>}
        />
      )}
    </div>
  );
}
