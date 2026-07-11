import { redirect } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowLeft } from "lucide-react";
import { getSession } from "@/lib/session";
import { Button } from "@/components/ui/button";
import { HelpButton } from "@/components/common/HelpButton";

const ApiDocsClient = dynamic(() => import("./ApiDocsClient"), {
  loading: () => (
    <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
      Loading API reference…
    </div>
  ),
});

export default async function ApiDocsPage() {
  const session = await getSession();
  if (!session.token) redirect("/login");

  const backHref = session.lastEntityId ? `/dashboard/${session.lastEntityId}` : "/home";

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-background">
      <div className="flex h-9 shrink-0 items-center justify-between border-b px-2">
        <Button asChild variant="ghost" size="sm" className="h-7 gap-1 text-xs">
          <Link href={backHref}>
            <ArrowLeft className="h-3.5 w-3.5" /> Back to studio
          </Link>
        </Button>
        <HelpButton variant="text" slug="advanced/api-reference" />
      </div>
      <div className="min-h-0 flex-1">
        <ApiDocsClient />
      </div>
    </div>
  );
}
