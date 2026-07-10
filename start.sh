#!/bin/sh
# start.sh — one-shot deploy entrypoint for Zoho Catalyst AppSail (and any
# other host that runs a single startup command). POSIX-compliant so it runs
# under /bin/sh (dash/ash) as well as bash.
#
# Optimized for AppSail's startup timeout by SKIPPING install and build when
# the ZIP already contains node_modules and .next. Ship a pre-built bundle
# (see scripts/build-deploy-zip.sh) and this script finishes in ~2 seconds.

set -eu

log() { printf '[start.sh] %s\n' "$*"; }

dump_npm_debug() {
  latest="$(ls -t /tmp/_logs/*.log 2>/dev/null | head -1 || true)"
  if [ -n "$latest" ] && [ -f "$latest" ]; then
    log "--- npm debug log tail ($latest) ---"
    tail -60 "$latest"
    log "--- end npm debug log ---"
  fi
}

log "Node $(node --version) · npm $(npm --version)"
log "cwd: $(pwd)"
log "PORT=${PORT:-3000}"

export NODE_ENV=development

# ---- 1. Install ---------------------------------------------------------
if [ -d "node_modules" ] && [ -x "node_modules/.bin/next" ]; then
  log "node_modules present (next binary found) — skipping install"
elif [ -f "package-lock.json" ]; then
  log "package-lock.json present — trying npm ci"
  if ! npm ci --include=dev --no-audit --no-fund --loglevel=error; then
    log "npm ci failed — falling back to npm install"
    dump_npm_debug
    rm -rf node_modules
    if ! npm install --include=dev --no-audit --no-fund --loglevel=error; then
      log "npm install failed"
      dump_npm_debug
      exit 1
    fi
  fi
else
  log "Neither node_modules nor package-lock.json — running full npm install"
  log "  (this is slow — pre-build your deploy ZIP to avoid the AppSail timeout)"
  if ! npm install --include=dev --no-audit --no-fund --loglevel=error; then
    log "npm install failed"
    dump_npm_debug
    exit 1
  fi
fi

# ---- 2. Build -----------------------------------------------------------
if [ -d ".next" ] && [ -f ".next/BUILD_ID" ]; then
  log ".next/BUILD_ID present — skipping build"
else
  log "Running next build"
  npm run build
fi

# ---- 3. Start -----------------------------------------------------------
export NODE_ENV=production
log "Starting next server on 0.0.0.0:${PORT:-3000}"
exec node_modules/.bin/next start -p "${PORT:-3000}" -H 0.0.0.0
