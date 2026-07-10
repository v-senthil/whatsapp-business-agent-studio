"use client";
import { use } from "react";
import { ChatShell } from "@/components/test/ChatShell";

export default function TestPage({ params }: { params: Promise<{ entityId: string }> }) {
  const { entityId } = use(params);
  return (
    <div className="flex h-full min-h-0 flex-col gap-3 pt-4">
      <div>
        <h1 className="text-2xl font-semibold">Test chat</h1>
        <p className="text-sm text-muted-foreground">Send messages to the agent and iterate.</p>
      </div>
      <ChatShell entityId={entityId} />
    </div>
  );
}
