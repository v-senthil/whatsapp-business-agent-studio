"use client";

// Small module-level store for the dev drawer's open/closed state so the
// Header's settings menu and the drawer itself can share it without an extra
// context provider. Subscribe/notify pattern is the same shape used by
// `api-log.ts` and matches how React Query stores tiny bits of client state.

type Listener = (open: boolean) => void;

let isOpen = false;
const listeners = new Set<Listener>();

export function getDevDrawerOpen(): boolean {
  return isOpen;
}

export function setDevDrawerOpen(next: boolean): void {
  if (next === isOpen) return;
  isOpen = next;
  listeners.forEach((fn) => fn(isOpen));
}

export function toggleDevDrawer(): void {
  setDevDrawerOpen(!isOpen);
}

export function subscribeDevDrawer(fn: Listener): () => void {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}
