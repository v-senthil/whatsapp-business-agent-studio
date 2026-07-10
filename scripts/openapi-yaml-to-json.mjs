// Regenerate public/openapi.json from public/openapi.yaml.
// The YAML file is the human-editable source of truth; the JSON is what
// Zudoku loads at runtime (its standalone build's fetcher expects JSON).
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import YAML from "yaml";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const yamlPath = join(root, "public", "openapi.yaml");
const jsonPath = join(root, "public", "openapi.json");

const spec = YAML.parse(readFileSync(yamlPath, "utf8"));
writeFileSync(jsonPath, JSON.stringify(spec, null, 2) + "\n");

const paths = Object.keys(spec.paths ?? {}).length;
const schemas = Object.keys(spec.components?.schemas ?? {}).length;
console.log(`Wrote ${jsonPath} — ${paths} paths, ${schemas} schemas`);
