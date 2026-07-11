import { AiFailure, type AiConfig, runPrompt } from "@/lib/ai";
import { connectorTemplates } from "@/lib/connector-templates";

export interface GeneratedFaq {
  question: string;
  answer: string;
}

export interface GeneratedSkill {
  title: string;
  description: string;
  skill: string;
}

export interface GeneratedConnector {
  slug: string | null;
  label: string;
  reason: string;
}

export interface GeneratedBundle {
  faqs: GeneratedFaq[];
  skills: GeneratedSkill[];
  connectors: GeneratedConnector[];
}

const MAX_TEXT_CHARS = 40_000;

function buildSystemPrompt(): string {
  const catalog = connectorTemplates()
    .map((t) => `- ${t.slug}: ${t.label} (${t.category}) — ${t.description}`)
    .join("\n");

  return `You extract training material for a WhatsApp Business AI agent from a business's knowledge document.

Return ONLY a single JSON object (no markdown, no code fences, no prose) with this exact shape:
{
  "faqs": [ { "question": "...", "answer": "..." } ],
  "skills": [ { "title": "kebab-case-id", "description": "one sentence, WHEN the agent should apply this. <=500 chars", "skill": "instruction body the agent follows. <=8000 chars" } ],
  "connectors": [ { "slug": "one of the catalog slugs OR null", "label": "human name if slug is null", "reason": "why this connector is suggested, referencing the document" } ]
}

Rules:
- Extract 3-10 FAQs verbatim from customer-relevant questions the document answers. Do NOT invent policy.
- Draft 2-6 skills covering distinct scenarios the agent will handle (support, sales, escalation, onboarding, etc.). Skill titles are kebab-case, 1-80 chars. Each skill body should include a "Trigger" line ("When ..."), a numbered action list, and a fallback ("If unsure, hand off to a human").
- Suggest 0-5 connectors. Prefer slugs from this catalog:
${catalog}
  If none fit, propose a freeform connector with slug=null and a descriptive label (e.g. "Warehouse inventory API"). Only suggest connectors the document actually implies the agent needs (order lookup, payment, ticketing, etc.).
- If a section has no relevant material, return an empty array. Do NOT hallucinate.
- Keep everything grounded in the provided document text.`;
}

export async function generateFromText(cfg: AiConfig, text: string): Promise<GeneratedBundle> {
  const trimmed = text.trim();
  if (!trimmed) throw new AiFailure({ code: "invalid_response", message: "Document text is empty." });

  const clipped =
    trimmed.length > MAX_TEXT_CHARS
      ? `${trimmed.slice(0, MAX_TEXT_CHARS)}\n\n[... truncated to ${MAX_TEXT_CHARS} chars]`
      : trimmed;

  const prompt = `Extract FAQs, skills, and connector suggestions from this document:\n\n---\n${clipped}\n---`;
  const raw = await runPrompt(cfg, prompt, buildSystemPrompt());
  const parsed = extractJson(raw);
  if (!parsed) {
    throw new AiFailure({
      code: "invalid_response",
      message: `The model did not return a parseable JSON object. First 500 chars: ${raw.slice(0, 500)}`,
    });
  }
  return normalize(parsed);
}

function extractJson(text: string): unknown | null {
  let s = text.trim();
  s = s.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/, "");
  const attempts = [s];
  const start = s.indexOf("{");
  const end = s.lastIndexOf("}");
  if (start >= 0 && end > start) attempts.push(s.slice(start, end + 1));
  for (const c of attempts) {
    try {
      return JSON.parse(c);
    } catch {
      /* try next */
    }
  }
  return null;
}

function normalize(raw: unknown): GeneratedBundle {
  const obj = (raw ?? {}) as Record<string, unknown>;
  const faqs = Array.isArray(obj.faqs)
    ? obj.faqs
        .map((f) => (f && typeof f === "object" ? (f as Record<string, unknown>) : null))
        .filter((f): f is Record<string, unknown> => !!f && typeof f.question === "string" && typeof f.answer === "string")
        .map((f) => ({ question: String(f.question).trim(), answer: String(f.answer).trim() }))
        .filter((f) => f.question && f.answer)
    : [];

  const skills = Array.isArray(obj.skills)
    ? obj.skills
        .map((s) => (s && typeof s === "object" ? (s as Record<string, unknown>) : null))
        .filter((s): s is Record<string, unknown> => !!s)
        .map((s) => ({
          title: typeof s.title === "string" ? s.title.trim() : "",
          description: typeof s.description === "string" ? s.description.trim() : "",
          skill: typeof s.skill === "string" ? s.skill.trim() : "",
        }))
        .filter((s) => s.title && s.description && s.skill)
    : [];

  const knownSlugs = new Set(connectorTemplates().map((t) => t.slug));
  const connectors = Array.isArray(obj.connectors)
    ? obj.connectors
        .map((c) => (c && typeof c === "object" ? (c as Record<string, unknown>) : null))
        .filter((c): c is Record<string, unknown> => !!c)
        .map((c) => {
          const rawSlug = typeof c.slug === "string" ? c.slug.trim().toLowerCase() : "";
          const slug = rawSlug && knownSlugs.has(rawSlug) ? rawSlug : null;
          const label = typeof c.label === "string" ? c.label.trim() : "";
          const reason = typeof c.reason === "string" ? c.reason.trim() : "";
          return { slug, label, reason } as GeneratedConnector;
        })
        .filter((c) => (c.slug || c.label) && c.reason)
    : [];

  return { faqs, skills, connectors };
}
