import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Sparkles, Wand2 } from "lucide-react";
import { getSession } from "@/lib/session";
import { Button } from "@/components/ui/button";
import { AiSettingsForm } from "@/components/settings/AiSettingsForm";
import { DocumentGenerator } from "@/components/ai-generator/DocumentGenerator";
import { HelpButton } from "@/components/common/HelpButton";

export default async function AiSettingsPage() {
  const session = await getSession();
  if (!session.token) redirect("/login");
  const backHref = session.lastEntityId ? `/dashboard/${session.lastEntityId}` : "/home";
  const lastEntity = session.lastEntityId;

  return (
    <div className="mx-auto min-h-screen max-w-3xl px-6 py-6">
      <div className="mb-6 flex items-center justify-between gap-2">
        <Button asChild variant="ghost" size="sm">
          <Link href={backHref}><ArrowLeft className="h-4 w-4" /> Back</Link>
        </Button>
        <HelpButton variant="text" slug="advanced/ai-provider" />
      </div>
      <div className="mb-6">
        <h1 className="flex items-center gap-2 text-2xl font-semibold">
          <Sparkles className="h-5 w-5" /> AI assistant
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Configure how the app calls out to a language model for skill drafting and other AI-assisted flows.
        </p>
      </div>
      <AiSettingsForm />

      <div className="mt-10 mb-4">
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <Wand2 className="h-5 w-5" /> Generate from document
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Paste or upload a Markdown document about your business, and the AI will draft FAQs, skills, and connector
          suggestions. To create the drafts against a specific phone, open the same tool from that dashboard{" "}
          {lastEntity ? (
            <Link className="underline" href={`/dashboard/${lastEntity}/generate`}>
              (jump to last phone)
            </Link>
          ) : (
            <span>(pick a phone from Home first)</span>
          )}
          .
        </p>
      </div>
      <DocumentGenerator />
    </div>
  );
}
