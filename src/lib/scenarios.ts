export interface ScenarioTurn {
  role: "user" | "agent";
  text: string;
  quick_replies?: string[];
  handoff_reason?: string;
  ts: number;
}

export interface Scenario {
  id: string;
  entity_id: string;
  name: string;
  notes: string;
  turns: ScenarioTurn[];
  original_conversation_id?: string;
  saved_at: number;
}

const storageKey = (entityId: string) => `wabiz.scenarios.${entityId}`;

function safeParse(raw: string | null): Scenario[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function listScenarios(entityId: string): Scenario[] {
  if (typeof window === "undefined") return [];
  return safeParse(window.localStorage.getItem(storageKey(entityId)));
}

export function saveScenario(entityId: string, scenario: Omit<Scenario, "id" | "entity_id" | "saved_at">): Scenario {
  const list = listScenarios(entityId);
  const s: Scenario = {
    ...scenario,
    id: crypto.randomUUID(),
    entity_id: entityId,
    saved_at: Date.now(),
  };
  window.localStorage.setItem(storageKey(entityId), JSON.stringify([s, ...list]));
  return s;
}

export function deleteScenario(entityId: string, id: string): void {
  const list = listScenarios(entityId).filter((s) => s.id !== id);
  window.localStorage.setItem(storageKey(entityId), JSON.stringify(list));
}

export function getScenario(entityId: string, id: string): Scenario | undefined {
  return listScenarios(entityId).find((s) => s.id === id);
}
