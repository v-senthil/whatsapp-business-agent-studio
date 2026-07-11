"use client";
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check, Eye, EyeOff, LogOut, Settings as SettingsIcon, Sparkles, User } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EntityPicker } from "@/components/shell/EntityPicker";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { usePhoneDetails } from "@/lib/client/hooks/useDiscovery";
import { useSession, usePatchSession } from "@/lib/client/hooks/useSession";
import { fetcher } from "@/lib/client/fetcher";

interface HeaderProps {
  user?: { id?: string; name?: string };
  entityId?: string;
}

export function Header({ user, entityId }: HeaderProps) {
  const router = useRouter();
  const phone = usePhoneDetails(entityId);
  const session = useSession();
  const patch = usePatchSession();
  const readOnly = !!session.data?.readOnly;

  async function logout() {
    try {
      await fetcher("/api/session", { method: "DELETE" });
    } catch {
      // even on failure, push the user to /login to break the local UI state
    }
    router.replace("/login");
  }

  function toggleReadOnly() {
    patch.mutate(
      { readOnly: !readOnly },
      { onSuccess: () => toast.success(readOnly ? "Read-only mode off" : "Read-only mode on") },
    );
  }

  const primaryLabel = phone.data?.display_phone_number ?? entityId ?? "Select phone number";
  const secondaryLabel = phone.data?.verified_name;

  return (
    <header className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b bg-background px-4">
      <div className="flex-1" />
      <EntityPicker currentEntityId={entityId} primaryLabel={primaryLabel} secondaryLabel={secondaryLabel} />
      <div className="flex flex-1 items-center justify-end gap-1">
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Settings">
              <SettingsIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/settings/ai"><Sparkles className="h-4 w-4" /> AI assistant</Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={toggleReadOnly}>
              {readOnly ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
              <span className="flex-1">{readOnly ? "Enable writes" : "Read-only mode"}</span>
              {readOnly && <Check className="h-3.5 w-3.5" />}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="gap-2">
              <User className="h-4 w-4" />
              {user?.name ?? "Account"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>{user?.name ?? "Account"}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logout} className="text-destructive">
              <LogOut className="h-4 w-4" /> Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
