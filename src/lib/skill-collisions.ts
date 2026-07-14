/**
 * Detects potential collisions between skills. A collision is a pair of skills
 * whose triggers or descriptions overlap enough that the model is likely to
 * pick the wrong one in production.
 *
 * Purely static: runs against whatever the caller passes in (usually the full
 * skill list from useSkills). No API calls, no ranking beyond a Jaccard token
 * similarity + a stopword-filtered term overlap.
 */

export interface CollidingSkill {
  id?: string;
  title: string;
  description: string;
}

export type CollisionSeverity = "high" | "medium";

export interface Collision {
  a: CollidingSkill;
  b: CollidingSkill;
  severity: CollisionSeverity;
  reason: string;
}

const STOPWORDS = new Set([
  "the", "a", "an", "and", "or", "but", "if", "then", "else", "when", "while",
  "for", "to", "of", "in", "on", "at", "by", "with", "from", "as", "is", "are",
  "be", "been", "being", "was", "were", "has", "have", "had", "do", "does",
  "did", "this", "that", "these", "those", "it", "its", "their", "they",
  "them", "there", "here", "into", "about", "over", "under", "than", "so",
  "such", "not", "no", "yes", "will", "would", "should", "could", "can",
  "may", "might", "must", "any", "all", "each", "every", "some", "very",
  "just", "also", "only", "up", "down", "out", "off", "you", "your", "user",
  "customer", "please", "when", "want", "wants", "need", "needs", "asks",
  "ask", "asking",
]);

function normalize(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9\s]+/g, " ").replace(/\s+/g, " ").trim();
}

function tokens(s: string): Set<string> {
  const set = new Set<string>();
  for (const raw of normalize(s).split(" ")) {
    if (raw.length < 3) continue;
    if (STOPWORDS.has(raw)) continue;
    set.add(raw);
  }
  return set;
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let intersection = 0;
  for (const t of a) {
    if (b.has(t)) intersection++;
  }
  const union = a.size + b.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

function intersection(a: Set<string>, b: Set<string>): string[] {
  const out: string[] = [];
  for (const t of a) {
    if (b.has(t)) out.push(t);
  }
  return out;
}

/**
 * Return every pair of skills whose titles or descriptions overlap. Skills
 * with identical titles are always flagged; near-identical titles (Jaccard
 * ≥ 0.6) and descriptions sharing four or more significant tokens are also
 * flagged.
 */
export function detectCollisions(skills: CollidingSkill[]): Collision[] {
  const results: Collision[] = [];
  const titleTokens = skills.map((s) => tokens(s.title));
  const descTokens = skills.map((s) => tokens(s.description));
  const normalizedTitles = skills.map((s) => normalize(s.title));

  for (let i = 0; i < skills.length; i++) {
    for (let j = i + 1; j < skills.length; j++) {
      const a = skills[i];
      const b = skills[j];

      if (normalizedTitles[i] && normalizedTitles[i] === normalizedTitles[j]) {
        results.push({
          a,
          b,
          severity: "high",
          reason: "Titles are identical after normalization.",
        });
        continue;
      }

      const titleSim = jaccard(titleTokens[i], titleTokens[j]);
      if (titleSim >= 0.6) {
        results.push({
          a,
          b,
          severity: "high",
          reason: `Titles are ${Math.round(titleSim * 100)}% similar.`,
        });
        continue;
      }

      const shared = intersection(descTokens[i], descTokens[j]);
      if (shared.length >= 4) {
        results.push({
          a,
          b,
          severity: "medium",
          reason: `Descriptions share ${shared.length} significant terms: ${shared.slice(0, 5).join(", ")}${shared.length > 5 ? "…" : ""}.`,
        });
      }
    }
  }

  return results;
}
