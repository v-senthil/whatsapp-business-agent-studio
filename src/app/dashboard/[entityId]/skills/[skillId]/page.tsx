"use client";
import { use } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { SkillForm } from "@/components/skills/SkillForm";
import { ErrorState } from "@/components/common/ErrorState";
import { useDeleteSkill, useSkill, useUpdateSkill } from "@/lib/client/hooks/useSkills";

export default function EditSkillPage({ params }: { params: Promise<{ entityId: string; skillId: string }> }) {
  const { entityId, skillId } = use(params);
  const router = useRouter();
  const query = useSkill(entityId, skillId);
  const update = useUpdateSkill(entityId, skillId);
  const del = useDeleteSkill(entityId);

  if (query.isLoading) return <Loader2 className="mt-8 h-4 w-4 animate-spin" />;
  if (query.error) return <ErrorState error={query.error} />;
  if (!query.data) return null;

  return (
    <div className="mx-auto max-w-3xl space-y-4 py-4">
      <div>
        <h1 className="text-2xl font-semibold">Edit skill</h1>
      </div>
      {update.error && <ErrorState error={update.error} />}
      <SkillForm
        initial={query.data}
        loading={update.isPending}
        onCancel={() => router.push(`/dashboard/${entityId}/skills`)}
        onSubmit={async (values) => {
          try {
            await update.mutateAsync(values);
            toast.success("Saved");
          } catch { /* shown */ }
        }}
        onDelete={async () => {
          try {
            await del.mutateAsync(skillId);
            toast.success("Deleted");
            router.push(`/dashboard/${entityId}/skills`);
          } catch { toast.error("Delete failed"); }
        }}
      />
    </div>
  );
}
