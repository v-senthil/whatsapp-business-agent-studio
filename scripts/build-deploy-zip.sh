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

# 4. Cross-platform binaries for the AppSail runtime (Linux x64 glibc).
#    npm's optionalDependencies only fetch host-matching platform binaries by
#    default, so a Mac build has no @next/swc-linux-x64 in node_modules and
#    `next start` on the Linux runtime crashes immediately. Fetch the Linux
#    binaries alongside the host ones, at the exact version of next installed.
NEXT_VERSION="$(node -e 'console.log(require("./node_modules/next/package.json").version)')"
echo "[build-deploy-zip] Adding Linux x64 target binaries (Next.js $NEXT_VERSION)"
# --force is required because npm 11 refuses to install a package whose
# package.json declares os/cpu that don't match the host, even with
# --os/--cpu overrides. All Linux binaries MUST be installed in a single
# npm command; back-to-back `npm install --no-save` calls wipe each other's
# additions.
LINUX_PKGS="@next/swc-linux-x64-gnu@$NEXT_VERSION @next/swc-linux-x64-musl@$NEXT_VERSION"
if [ -d node_modules/sharp ]; then
  SHARP_VERSION="$(node -e 'console.log(require("./node_modules/sharp/package.json").version)')"
  # libvips version is pinned in sharp; read from an existing platform variant.
  LIBVIPS_VERSION="$(node -e 'try{const d=require("fs").readdirSync("./node_modules/@img").find(x=>x.startsWith("sharp-libvips-"));console.log(require("./node_modules/@img/"+d+"/package.json").version)}catch(e){console.log("")}')"
  LINUX_PKGS="$LINUX_PKGS @img/sharp-linux-x64@$SHARP_VERSION"
  [ -n "$LIBVIPS_VERSION" ] && LINUX_PKGS="$LINUX_PKGS @img/sharp-libvips-linux-x64@$LIBVIPS_VERSION"
fi
# shellcheck disable=SC2086
npm install --no-save --no-audit --no-fund --loglevel=error --force \
  --cpu=x64 --os=linux \
  $LINUX_PKGS \
  || echo "[build-deploy-zip] warning: Linux binary install failed (continuing)"

# 5. Zip. `-y` preserves symlinks (critical for node_modules/.bin/* shims);
#    without it, extraction on the target flattens them to plain files that
#    can no longer resolve their relative require paths.
echo "[build-deploy-zip] Creating $OUT"
rm -f "$OUT"
# Exclude things we don't want in the archive:
#   - .git/, dev configs, README/docs, source of truth openapi.yaml
#     (public/openapi.json is what Zudoku serves)
#   - previous zip files
#   - .env.local
#   - Meta Docs/ (copyrighted local reference)
zip -ryq "$OUT" \
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
  docs \
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
