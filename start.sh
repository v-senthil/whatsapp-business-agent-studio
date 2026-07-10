#!/bin/sh
# start.sh — one-shot deploy entrypoint for Zoho Catalyst AppSail (and any
# other host that runs a single startup command). POSIX-compliant so it runs
# under /bin/sh (dash/ash) as well as bash. Handles:
#   1. Install dependencies — npm ci when the lockfile is present (fast,
#      deterministic), falls back to npm install if npm ci fails or if the
#      lockfile is missing.
#   2. Build — next build (also regenerates public/openapi.json via prebuild).
#   3. Start — next start on $PORT (or 3000), bound to 0.0.0.0.

set -eu

log() { printf '[start.sh] %s\n' "$*"; }

dump_npm_debug() {
  # Print the last npm debug log so the deploy log viewer shows the real error
  # instead of just the "log path" hint.
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

# Force NODE_ENV=development during install so devDependencies (needed by
# `next build`) are installed even if the host set NODE_ENV=production.
export NODE_ENV=development

# ---- 1. Install ---------------------------------------------------------
install_ok=0
if [ -f "package-lock.json" ]; then
  log "package-lock.json present — trying npm ci"
  if npm ci --include=dev --no-audit --no-fund --loglevel=error; then
    install_ok=1
  else
    log "npm ci failed — falling back to npm install"
    log "  (usually means the lockfile is out of sync with package.json)"
    dump_npm_debug
    rm -rf node_modules
  fi
fi

if [ "$install_ok" -eq 0 ]; then
  log "Running npm install"
  if ! npm install --include=dev --no-audit --no-fund --loglevel=error; then
    log "npm install failed"
    dump_npm_debug
    exit 1
  fi
fi

# ---- 2. Build -----------------------------------------------------------
if [ -d ".next" ]; then
  log ".next already present — skipping build (delete to force rebuild)"
else
  log "Running next build"
  npm run build
fi

# ---- 3. Start -----------------------------------------------------------
export NODE_ENV=production
log "Starting next server on 0.0.0.0:${PORT:-3000}"
exec npx next start -p "${PORT:-3000}" -H 0.0.0.0
