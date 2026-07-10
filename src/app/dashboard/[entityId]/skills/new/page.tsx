"use client";
import { use } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { SkillForm } from "@/components/skills/SkillForm";
import { ErrorState } from "@/components/common/ErrorState";
import { useCreateSkill } from "@/lib/client/hooks/useSkills";

export default function NewSkillPage({ params }: { params: Promise<{ entityId: string }> }) {
  const { entityId } = use(params);
  const router = useRouter();
  const create = useCreateSkill(entityId);
  return (
    <div className="mx-auto max-w-3xl space-y-4 py-4">
      <div>
        <h1 className="text-2xl font-semibold">New skill</h1>
      </div>
      {create.error && <ErrorState error={create.error} />}
      <SkillForm
        loading={create.isPending}
        onCancel={() => router.push(`/dashboard/${entityId}/skills`)}
        onSubmit={async (values) => {
          try {
            await create.mutateAsync(values);
            toast.success("Skill created");
            router.push(`/dashboard/${entityId}/skills`);
          } catch { /* shown above */ }
        }}
      />
    </div>
  );
}
