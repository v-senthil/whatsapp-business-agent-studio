# Deploy with Docker Compose

Running the studio in Docker gives you full control: no vendor cloud, no cold starts, and a single YAML file that describes the whole deployment. This is the right choice when your data must stay on your own hardware or in a specific cloud region a managed platform does not offer.

## What you get

- Full control of the runtime, network, and TLS termination.
- No cold starts; the process runs 24/7.
- Straightforward integration with your existing container orchestration (Kubernetes, Nomad, Portainer).
- Reverse-proxy-friendly out of the box; the studio's same-origin check trusts `X-Forwarded-Host`.

## What you provide

- A host with Docker and Docker Compose installed.
- HTTPS termination in front of the container. Options: Traefik, Caddy, nginx, Cloudflare Tunnel.
- A place to store `SESSION_SECRET` securely (host env file, Docker secret, or your secret store).

## The Compose file

Create `docker-compose.yml`:

```yaml
services:
  studio:
    build: .
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: production
      SESSION_SECRET: ${SESSION_SECRET}
      META_API_BASE: https://api.facebook.com
      GRAPH_API_BASE: https://graph.facebook.com/v20.0
      META_APP_SECRET: ${META_APP_SECRET:-}
      META_WEBHOOK_VERIFY_TOKEN: ${META_WEBHOOK_VERIFY_TOKEN:-}
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "wget", "--spider", "-q", "http://localhost:3000/api/session/me"]
      interval: 30s
      timeout: 5s
      retries: 3
```

If you already have the pre-built ZIP from `sh scripts/build-deploy-zip.sh`, skip the `build:` step and use a prebuilt image instead:

```yaml
services:
  studio:
    image: your-registry/whatsapp-business-agent-studio:latest
    # ... rest unchanged
```

## The Dockerfile

If you are building from source, use this minimal Dockerfile:

```
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --include=dev --no-audit --no-fund

FROM node:22-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN npm run build && npm prune --production

FROM node:22-alpine AS runtime
WORKDIR /app
COPY --from=build /app ./
EXPOSE 3000
ENV PORT=3000
CMD ["node_modules/.bin/next", "start", "-p", "3000", "-H", "0.0.0.0"]
```

Alpine is used to keep the image small. If you need OpenSSL for mTLS connectors, switch the base to `node:22-slim`.

## The env file

Create `.env` next to the Compose file (add it to `.gitignore`, do not check it in):

```
SESSION_SECRET=64-hex-chars-from-openssl-rand
META_APP_SECRET=your-meta-app-secret-if-using-webhooks
META_WEBHOOK_VERIFY_TOKEN=a-random-string-if-using-webhooks
```

## Bring it up

```
docker compose up --build -d
```

The `-d` runs detached. The `--build` rebuilds the image if the Dockerfile or source changed. Follow logs:

```
docker compose logs -f studio
```

## Put a reverse proxy in front

The studio speaks plain HTTP on port 3000. Do not expose that directly to the internet. Common patterns:

### Traefik

If Traefik is already in your Compose stack, add labels:

```yaml
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.studio.rule=Host(`agents.example.com`)"
      - "traefik.http.routers.studio.entrypoints=websecure"
      - "traefik.http.routers.studio.tls.certresolver=le"
      - "traefik.http.services.studio.loadbalancer.server.port=3000"
```

### Caddy

`Caddyfile`:

```
agents.example.com {
  reverse_proxy studio:3000
}
```

Caddy sets `X-Forwarded-Host` automatically; the studio's same-origin check picks it up.

### nginx

```
server {
  listen 443 ssl http2;
  server_name agents.example.com;

  ssl_certificate     /etc/letsencrypt/live/agents.example.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/agents.example.com/privkey.pem;

  location / {
    proxy_pass http://studio:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-Host $host;
    proxy_set_header X-Forwarded-Proto https;
  }
}
```

The `X-Forwarded-Host` line is what makes the studio's session same-origin check work; without it you get 403s on `DELETE /api/session`.

## Backups

The studio has no local database. Backups are for:

- Your Compose file and Dockerfile (commit to git).
- Your `.env` file (store in your secret manager).
- Weekly export of the studio's config as JSON. Log in, click **Export config** on any phone number's overview, and commit to a private repo.

Meta itself stores the agent configuration, so a lost container is not a lost agent.

## Rolling back

Because everything is a container image, roll back by tagging your images by version and pointing the Compose file at the previous tag:

```
image: your-registry/whatsapp-business-agent-studio:2026-07-13
```

`docker compose up -d` picks up the change.

## Scaling

Compose is single-host. If you need multi-host, move to Kubernetes or Nomad; the container image and env config are identical. The studio is stateless per request (session cookie + Meta as the source of truth), so horizontal scaling is safe.

## Common issues

**Cookies not being set.** Confirm TLS terminates before the studio container, and confirm the reverse proxy is setting `X-Forwarded-Proto: https`. The studio only sets `secure` cookies when it sees this header.

**"Cross-origin request rejected" on DELETE /api/session.** The reverse proxy is not setting `X-Forwarded-Host`. Add it (see nginx/Caddy/Traefik snippets above), or set `WABIZ_PUBLIC_HOST` explicitly in the env.

**"Cannot find module 'next'" at start.** The image build did not complete. Rebuild with `docker compose build --no-cache studio`.

**Container restarts every few seconds.** Check `docker compose logs studio` for the underlying error. Common causes: missing `SESSION_SECRET`, wrong Node version.

**"Connection refused" from the reverse proxy.** The studio has not finished starting yet. Add a `depends_on: [studio]` and healthcheck to the proxy service.

## Observability

- `docker compose logs -f studio`: live stdout.
- `docker stats`: CPU and memory per container.
- If you use Prometheus/Grafana, scrape your reverse proxy's metrics; the studio itself does not expose a metrics endpoint yet.

See [Architecture and security](./architecture-and-security.md) for what the studio does and does not log.
