"use client";
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check, Eye, EyeOff, LogOut, User } from "lucide-react";
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
    await fetch("/api/session", { method: "DELETE" });
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
            <Button variant="ghost" size="sm" className="gap-2">
              <User className="h-4 w-4" />
              {user?.name ?? "Account"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>{user?.name ?? "Account"}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/home">Change phone number</Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={toggleReadOnly}>
              {readOnly ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
              <span className="flex-1">{readOnly ? "Enable writes" : "Read-only mode"}</span>
              {readOnly && <Check className="h-3.5 w-3.5" />}
            </DropdownMenuItem>
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
