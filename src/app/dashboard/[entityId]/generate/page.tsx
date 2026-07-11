"use client";
import { use } from "react";
import { Wand2 } from "lucide-react";
import { DocumentGenerator } from "@/components/ai-generator/DocumentGenerator";

export default function GeneratePage({ params }: { params: Promise<{ entityId: string }> }) {
  const { entityId } = use(params);
  return (
    <div className="mx-auto max-w-4xl space-y-6 py-4">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-semibold">
          <Wand2 className="h-5 w-5" /> Generate from document
        </h1>
        <p className="text-sm text-muted-foreground">
          Upload a Markdown document about the business. The AI will draft FAQs, skills, and connector suggestions
          you can review and apply to this phone.
        </p>
      </div>

      <DocumentGenerator entityId={entityId} />
    </div>
  );
}
