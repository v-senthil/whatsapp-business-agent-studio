import { redirect } from "next/navigation";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { getSession } from "@/lib/session";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserMenuLogout } from "@/components/home/UserMenuLogout";
import { HomeContent } from "@/components/home/HomeContent";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { HelpButton } from "@/components/common/HelpButton";

export default async function HomePage() {
  const session = await getSession();
  if (!session.token) redirect("/login");

  return (
    <div className="min-h-screen bg-background">
      <header className="flex h-14 items-center border-b px-6">
        <Link href="/home" className="font-semibold">WhatsApp Business Agent Studio</Link>
        <div className="ml-auto flex items-center gap-3">
          {session.lastEntityId && (
            <Button asChild variant="outline" size="sm">
              <Link href={`/dashboard/${session.lastEntityId}`}>Continue with {session.lastEntityId}</Link>
            </Button>
          )}
          <HelpButton variant="text" slug="getting-started/pick-business-and-phone" />
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">{session.userName ?? "Account"}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{session.userName ?? "Account"}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <UserMenuLogout>
                <DropdownMenuItem className="text-destructive">
                  <LogOut className="h-4 w-4" /> Sign out
                </DropdownMenuItem>
              </UserMenuLogout>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <main className="mx-auto max-w-4xl space-y-6 px-6 py-8">
        <div>
          <h1 className="text-2xl font-semibold">Your WhatsApp Business phone numbers</h1>
          <p className="text-sm text-muted-foreground">Enter your Meta business ID to list its WABAs and phone numbers, or paste a phone number ID directly.</p>
        </div>
        <HomeContent initialBusinessId={session.lastBusinessId ?? ""} />
      </main>
    </div>
  );
}
