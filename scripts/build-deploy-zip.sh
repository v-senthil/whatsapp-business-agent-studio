#!/usr/bin/env bash
# scripts/build-deploy-zip.sh — build a self-contained deployment ZIP for
# Zoho Catalyst AppSail (or any host that just needs to `sh start.sh`).
#
# The output ZIP contains:
#   - source files                     (needed by next start to resolve routes)
#   - package.json + package-lock.json (metadata)
#   - node_modules/                    (pre-installed — skips ~60-90s of install)
#   - .next/                           (pre-built — skips ~30s of build)
#   - start.sh, public/, scripts/      (runtime + assets)
#
# The deployed script then just runs `next start` — well inside AppSail's
# startup timeout.
#
# Usage:
#   sh scripts/build-deploy-zip.sh [output.zip]

set -euo pipefail

OUT="${1:-deploy.zip}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "[build-deploy-zip] Root: $ROOT"
echo "[build-deploy-zip] Output: $OUT"

# 1. Clean install (only production deps not enough — need devDeps to build)
echo "[build-deploy-zip] Installing dependencies"
if [ -f package-lock.json ]; then
  npm ci --include=dev --no-audit --no-fund
else
  npm install --include=dev --no-audit --no-fund
fi

# 2. Build
echo "[build-deploy-zip] Building"
NODE_ENV=production npm run build

# 3. Prune to production deps so the ZIP isn't bloated with devDeps that
#    aren't needed at runtime. Next.js itself is a prod dep so `next start`
#    will still work.
echo "[build-deploy-zip] Pruning dev dependencies"
npm prune --omit=dev

# 4. Zip
echo "[build-deploy-zip] Creating $OUT"
rm -f "$OUT"
# Exclude things we don't want in the archive:
#   - .git/, dev configs, README/docs, source of truth openapi.yaml
#     (public/openapi.json is what Zudoku serves)
#   - previous zip files
#   - .env.local
#   - Meta Docs/ (copyrighted local reference)
zip -rq "$OUT" \
  package.json \
  package-lock.json \
  start.sh \
  next.config.ts \
  next-env.d.ts \
  tsconfig.json \
  middleware.ts \
  postcss.config.mjs \
  tailwind.config.ts \
  src \
  public \
  node_modules \
  .next \
  scripts \
  -x '*.DS_Store' \
     '.env.local' \
     'node_modules/.cache/*' \
     '.next/cache/*' \
     '*.log'

SIZE=$(du -sh "$OUT" | cut -f1)
echo "[build-deploy-zip] Done — $OUT ($SIZE)"
echo "[build-deploy-zip]"
echo "[build-deploy-zip] Upload this to AppSail with startup command:"
echo "[build-deploy-zip]   sh start.sh"
