"use client";
import * as React from "react";

interface EntityContextValue {
  entityId: string;
  agentId?: string;
  setAgentId: (id: string | undefined) => void;
}

const EntityContext = React.createContext<EntityContextValue | null>(null);

export function EntityProvider({ entityId, children }: { entityId: string; children: React.ReactNode }) {
  const [agentId, setAgentId] = React.useState<string | undefined>(undefined);
  const value = React.useMemo(() => ({ entityId, agentId, setAgentId }), [entityId, agentId]);
  return <EntityContext.Provider value={value}>{children}</EntityContext.Provider>;
}

export function useEntity() {
  const ctx = React.useContext(EntityContext);
  if (!ctx) throw new Error("useEntity must be used inside EntityProvider");
  return ctx;
}
