"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

export function UserMenuLogout({ children }: { children: React.ReactElement<{ onClick?: () => void }> }) {
  const router = useRouter();
  const qc = useQueryClient();
  async function logout() {
    await fetch("/api/session", { method: "DELETE" });
    qc.clear();
    router.replace("/login");
  }
  return React.cloneElement(children, { onClick: logout });
}
