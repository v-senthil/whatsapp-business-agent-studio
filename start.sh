#!/bin/sh
# start.sh — one-shot deploy entrypoint for Zoho Catalyst AppSail (and any
# other host that runs a single startup command). POSIX-compliant so it runs
# under /bin/sh (dash/ash) as well as bash. Handles:
#   1. Install dependencies — npm ci when the lockfile is present (fast,
#      deterministic), npm install otherwise (works even if the ZIP omitted
#      package-lock.json, which is what killed the previous deploy).
#   2. Build — next build (also regenerates public/openapi.json via prebuild).
#   3. Start — next start on $PORT (or 3000), bound to 0.0.0.0.

# Fail fast on any error, and on unset variables. `pipefail` is bash-only, so
# it's intentionally omitted — we don't pipe anything load-bearing here.
set -eu

log() { printf '[start.sh] %s\n' "$*"; }

log "Node $(node --version) · npm $(npm --version)"
log "cwd: $(pwd)"
log "PORT=${PORT:-3000}"

# ---- 1. Install ---------------------------------------------------------
if [ -f "package-lock.json" ]; then
  log "package-lock.json present — using npm ci"
  npm ci --include=dev --no-audit --no-fund --loglevel=error
else
  log "package-lock.json NOT present — falling back to npm install"
  log "  (add package-lock.json to your ZIP for faster, reproducible installs)"
  npm install --include=dev --no-audit --no-fund --loglevel=error
fi

# ---- 2. Build -----------------------------------------------------------
if [ -d ".next" ]; then
  log ".next already present — skipping build (delete to force rebuild)"
else
  log "Running next build"
  npm run build
fi

# ---- 3. Start -----------------------------------------------------------
log "Starting next server on 0.0.0.0:${PORT:-3000}"
exec npx next start -p "${PORT:-3000}" -H 0.0.0.0
