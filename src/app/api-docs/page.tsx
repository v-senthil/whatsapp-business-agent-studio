import { redirect } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowLeft } from "lucide-react";
import { getSession } from "@/lib/session";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/ThemeToggle";

const ApiDocsClient = dynamic(() => import("./ApiDocsClient"), {
  loading: () => (
    <div className="flex h-screen items-center justify-center text-sm text-muted-foreground">
      Loading API reference…
    </div>
  ),
});

export default async function ApiDocsPage() {
  const session = await getSession();
  if (!session.token) redirect("/login");

  const backHref = session.lastEntityId ? `/dashboard/${session.lastEntityId}` : "/home";

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background">
      <ApiDocsClient />
      {/* Floating controls — kept out of Zudoku's flow so it can use the
          full viewport width for its 3-column layout. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-40 flex items-start justify-between p-3">
        <Button
          asChild
          variant="secondary"
          size="sm"
          className="pointer-events-auto shadow-md"
        >
          <Link href={backHref}>
            <ArrowLeft className="h-4 w-4" /> Back to studio
          </Link>
        </Button>
        <div className="pointer-events-auto">
          <ThemeToggle variant="outline" />
        </div>
      </div>
    </div>
  );
}
