// Robustly pull the first balanced JSON object out of a possibly noisy LLM
// response. Models frequently wrap output in code fences, prepend a prose
// preamble, or emit trailing commentary; a naive lastIndexOf("}") picks the
// wrong closing brace whenever any of that trailing text contains a } too.
//
// Strategy: strip a leading code fence, then walk the string with a
// depth-counter that respects JSON string quoting (backslash escapes are
// honored) so a } inside a string literal does not decrement depth. The first
// balanced object substring is returned.

function stripCodeFence(text: string): string {
  let s = text.trim();
  s = s.replace(/^```(?:json)?\s*/i, "");
  s = s.replace(/```\s*$/, "");
  return s.trim();
}

// Returns the substring of the first balanced { ... } run starting at or after
// the earliest {, or null if no balanced object is found.
function firstBalancedObject(text: string): string | null {
  const start = text.indexOf("{");
  if (start < 0) return null;
  let depth = 0;
  let inString = false;
  let escape = false;
  for (let i = start; i < text.length; i++) {
    const c = text[i];
    if (inString) {
      if (escape) {
        escape = false;
      } else if (c === "\\") {
        escape = true;
      } else if (c === '"') {
        inString = false;
      }
      continue;
    }
    if (c === '"') {
      inString = true;
      continue;
    }
    if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth === 0) return text.slice(start, i + 1);
    }
  }
  return null;
}

// Extract and JSON.parse the first balanced object from a model response.
// Returns undefined when nothing parseable is present. `predicate` can be used
// to require certain fields; the walker will try both the raw stripped text
// and the balanced-object slice.
export function extractJsonObject<T = unknown>(
  text: string,
  predicate?: (parsed: unknown) => parsed is T,
): T | undefined {
  const stripped = stripCodeFence(text);
  const candidates: string[] = [stripped];
  const balanced = firstBalancedObject(stripped);
  if (balanced && balanced !== stripped) candidates.push(balanced);
  for (const c of candidates) {
    try {
      const parsed = JSON.parse(c);
      if (predicate) {
        if (predicate(parsed)) return parsed;
        continue;
      }
      if (parsed && typeof parsed === "object") return parsed as T;
    } catch {
      // try next candidate
    }
  }
  return undefined;
}
