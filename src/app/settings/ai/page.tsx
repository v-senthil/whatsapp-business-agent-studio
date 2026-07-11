import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { getSession } from "@/lib/session";
import { Button } from "@/components/ui/button";
import { AiSettingsForm } from "@/components/settings/AiSettingsForm";

export default async function AiSettingsPage() {
  const session = await getSession();
  if (!session.token) redirect("/login");
  const backHref = session.lastEntityId ? `/dashboard/${session.lastEntityId}` : "/home";

  return (
    <div className="mx-auto min-h-screen max-w-3xl px-6 py-6">
      <div className="mb-6 flex items-center gap-2">
        <Button asChild variant="ghost" size="sm">
          <Link href={backHref}><ArrowLeft className="h-4 w-4" /> Back</Link>
        </Button>
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
    </div>
  );
}
