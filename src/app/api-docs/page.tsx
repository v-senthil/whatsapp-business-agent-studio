import { redirect } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowLeft } from "lucide-react";
import { getSession } from "@/lib/session";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/ThemeToggle";

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

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <header className="flex h-14 shrink-0 items-center border-b px-6">
        <Button asChild variant="ghost" size="sm">
          <Link href={session.lastEntityId ? `/dashboard/${session.lastEntityId}` : "/home"}>
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
        </Button>
        <h1 className="ml-4 text-sm font-semibold">API reference</h1>
        <span className="ml-2 text-xs text-muted-foreground">Meta Business Agent Platform</span>
        <div className="ml-auto"><ThemeToggle /></div>
      </header>
      <main className="min-h-0 flex-1 overflow-hidden">
        <ApiDocsClient />
      </main>
    </div>
  );
}
