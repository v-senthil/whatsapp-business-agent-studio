"use client";
import * as React from "react";
import { useRouter } from "next/navigation";

export function UserMenuLogout({ children }: { children: React.ReactElement<{ onClick?: () => void }> }) {
  const router = useRouter();
  async function logout() {
    await fetch("/api/session", { method: "DELETE" });
    router.replace("/login");
  }
  return React.cloneElement(children, { onClick: logout });
}
