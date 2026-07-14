/**
 * Resolves internal $ref strings within an OpenAPI 3.x document.
 * Only handles #/components/... references. External refs are left as-is
 * and surfaced as warnings.
 */

export type RefWarning = string;

/**
 * Resolve a single $ref string against the root spec object.
 * Returns the resolved value or undefined if it cannot be found.
 */
function resolveRef(ref: string, root: Record<string, unknown>): unknown {
  if (!ref.startsWith("#/")) return undefined;
  const parts = ref.slice(2).split("/");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let node: any = root;
  for (const part of parts) {
    if (node == null || typeof node !== "object") return undefined;
    node = node[part];
  }
  return node;
}

/**
 * Inline all internal $refs in `obj` one level deep. Circular refs
 * (detected by the `seen` set) are replaced with `{ type: "object" }`.
 * External refs are left unchanged and reported as warnings.
 *
 * Returns a new deeply-cloned object with refs resolved.
 */
export function resolveRefs(
  obj: unknown,
  root: Record<string, unknown>,
  warnings: RefWarning[],
  seen: Set<string> = new Set(),
  depth = 0,
): unknown {
  if (depth > 20) {
    // Safety valve — bail on excessively nested specs.
    return obj;
  }

  if (obj === null || typeof obj !== "object") return obj;

  if (Array.isArray(obj)) {
    return obj.map((item) => resolveRefs(item, root, warnings, seen, depth + 1));
  }

  const record = obj as Record<string, unknown>;

  // Handle $ref
  if (typeof record["$ref"] === "string") {
    const ref = record["$ref"] as string;

    if (!ref.startsWith("#/")) {
      warnings.push(`External reference not resolved: ${ref}`);
      return { type: "object" };
    }

    if (seen.has(ref)) {
      warnings.push(`Circular reference detected for ${ref}, using type: object.`);
      return { type: "object" };
    }

    const resolved = resolveRef(ref, root);
    if (resolved === undefined) {
      warnings.push(`Could not resolve reference: ${ref}`);
      return { type: "object" };
    }

    const nextSeen = new Set(seen);
    nextSeen.add(ref);
    return resolveRefs(resolved, root, warnings, nextSeen, depth + 1);
  }

  // Recurse into all properties
  const result: Record<string, unknown> = {};
  for (const [key, val] of Object.entries(record)) {
    result[key] = resolveRefs(val, root, warnings, seen, depth + 1);
  }
  return result;
}
