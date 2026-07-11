import { promises as fs } from "node:fs";
import path from "node:path";

export interface DocEntry {
  slug: string;
  href: string;
  label: string;
  description: string;
  file: string;
}

export interface DocSection {
  label: string;
  entries: DocEntry[];
}

// When the main Next app runs from the repo root, `docs/` sits next to
// `src/`. When the marketing microsite runs from `marketing/`, the same
// folder lives one level up. HELP_DOCS_DIR overrides the resolution so both
// builds share the same source of truth without symlinks or copies.
const DOCS_DIR = process.env.HELP_DOCS_DIR
  ? path.resolve(process.env.HELP_DOCS_DIR)
  : path.join(process.cwd(), "docs");
const INDEX_FILE = path.join(DOCS_DIR, "README.md");

let cache: { sections: DocSection[]; flat: DocEntry[] } | null = null;

async function loadIndex() {
  // In development, drop every cache so newly-added or renamed docs are
  // visible on the next request without a server restart.
  if (process.env.NODE_ENV !== "production") {
    cache = null;
    searchCache = null;
  }
  if (cache) return cache;
  const raw = await fs.readFile(INDEX_FILE, "utf8");
  const sections: DocSection[] = [];
  const flat: DocEntry[] = [];
  let current: DocSection | null = null;

  const lines = raw.split("\n");
  for (const line of lines) {
    const secMatch = line.match(/^##\s+(.+?)\s*$/);
    if (secMatch) {
      current = { label: secMatch[1].trim(), entries: [] };
      sections.push(current);
      continue;
    }
    const itemMatch = line.match(/^\-\s+\[([^\]]+)\]\(([^)]+)\)(?:,\s*(.+?))?\s*$/);
    if (itemMatch && current) {
      const [, label, relPath, description] = itemMatch;
      const slug = relPath.replace(/\.md$/i, "");
      const entry: DocEntry = {
        slug,
        href: `/help/${slug}`,
        label: label.trim(),
        description: (description ?? "").trim(),
        file: path.join(DOCS_DIR, relPath),
      };
      current.entries.push(entry);
      flat.push(entry);
    }
  }
  cache = { sections, flat };
  return cache;
}

export async function listSections(): Promise<DocSection[]> {
  return (await loadIndex()).sections;
}

export async function findEntry(slug: string): Promise<DocEntry | null> {
  const { flat } = await loadIndex();
  return flat.find((e) => e.slug === slug) ?? null;
}

export async function readIndexMarkdown(): Promise<string> {
  return fs.readFile(INDEX_FILE, "utf8");
}

export async function readDocMarkdown(entry: DocEntry): Promise<string> {
  return fs.readFile(entry.file, "utf8");
}

export async function neighbours(slug: string): Promise<{
  prev: DocEntry | null;
  next: DocEntry | null;
}> {
  const { flat } = await loadIndex();
  const i = flat.findIndex((e) => e.slug === slug);
  if (i < 0) return { prev: null, next: null };
  return {
    prev: i > 0 ? flat[i - 1] : null,
    next: i < flat.length - 1 ? flat[i + 1] : null,
  };
}

export interface SearchEntry {
  slug: string;
  href: string;
  label: string;
  description: string;
  section: string;
  text: string;
}

let searchCache: SearchEntry[] | null = null;

function stripMarkdown(body: string): string {
  return body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`\n]*`/g, " ")
    .replace(/^\s*#{1,6}\s+/gm, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_~>#-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export async function getSearchIndex(): Promise<SearchEntry[]> {
  if (searchCache) return searchCache;
  const { sections } = await loadIndex();
  const out: SearchEntry[] = [];
  for (const section of sections) {
    for (const entry of section.entries) {
      let text = "";
      try {
        const body = await fs.readFile(entry.file, "utf8");
        text = stripMarkdown(body);
      } catch (e) {
        // Warn once at index-build time so a missing linked doc surfaces in
        // dev logs rather than silently rendering an empty search hit.
        console.warn(`help-docs: could not read ${entry.file}`, e);
        text = "";
      }
      out.push({
        slug: entry.slug,
        href: entry.href,
        label: entry.label,
        description: entry.description,
        section: section.label,
        text,
      });
    }
  }
  searchCache = out;
  return out;
}
