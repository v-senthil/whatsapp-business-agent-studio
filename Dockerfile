# syntax=docker/dockerfile:1.7

# WhatsApp Business Agent Studio, container image.
#
# Multi-stage build:
#   1. deps    - install dependencies (dev + prod) with a warm npm cache.
#   2. builder - copy source, regenerate openapi.json, build Next.js.
#   3. runner  - slim runtime image with production node_modules + .next + docs.
#
# Target Linux runtime uses whichever @next/swc-linux-x64-{gnu,musl} the
# installed npm picks based on the base image libc. Alpine -> musl.

ARG NODE_VERSION=24

# ---- Stage 1: dependencies -----------------------------------------------
FROM node:${NODE_VERSION}-alpine AS deps
WORKDIR /app

# libc6-compat helps sharp and a few other native modules on Alpine.
RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json ./
RUN npm ci --include=dev --no-audit --no-fund --loglevel=error

# ---- Stage 2: build ------------------------------------------------------
FROM node:${NODE_VERSION}-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# next build sets NODE_ENV=production internally; leave it unset here so
# the prebuild hook (openapi.yaml -> openapi.json) runs cleanly and Next
# 15 does not trip its known pages-manifest.json bug.
#
# SESSION_SECRET is validated at module-import time by src/lib/env.ts.
# Next 15 imports every API route module during "Collecting page data",
# so an empty SESSION_SECRET fails the build here even though the value
# is only used at runtime. Feed a throwaway placeholder; the container's
# runtime env replaces it when the server actually starts.
RUN SESSION_SECRET=build-time-placeholder-not-used-at-runtime-32ch npm run build

# Remove dev dependencies from node_modules for the runtime image.
RUN npm prune --omit=dev

# ---- Stage 3: runtime ----------------------------------------------------
FROM node:${NODE_VERSION}-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0 \
    NEXT_TELEMETRY_DISABLED=1

RUN apk add --no-cache libc6-compat \
 && addgroup -g 1001 -S nodejs \
 && adduser -u 1001 -S nextjs -G nodejs

# Copy only what the running server actually needs.
COPY --from=builder --chown=nextjs:nodejs /app/package.json /app/package-lock.json ./
COPY --from=builder --chown=nextjs:nodejs /app/next.config.ts ./
COPY --from=builder --chown=nextjs:nodejs /app/middleware.ts ./
COPY --from=builder --chown=nextjs:nodejs /app/tsconfig.json ./
COPY --from=builder --chown=nextjs:nodejs /app/src ./src
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/docs ./docs
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules

USER nextjs
EXPOSE 3000

# Invoke node directly on the entry file rather than the .bin/next shim,
# same reasoning as start.sh: symlink loss on any layer flattening would
# otherwise break the relative require inside the shim.
CMD ["node", "node_modules/next/dist/bin/next", "start", "-p", "3000", "-H", "0.0.0.0"]
