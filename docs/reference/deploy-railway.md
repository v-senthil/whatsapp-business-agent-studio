# Deploy on Railway

Railway builds and runs the studio in a container without you writing a Dockerfile. It sits between Vercel (fully managed, opinionated) and Fly (VM, more control) in complexity.

## What you get

- Automatic detection of Next.js; builds via Nixpacks.
- Deploys on push, with per-branch environments.
- Managed HTTPS on a `.up.railway.app` subdomain.
- Environment variables in the dashboard.
- A generous free tier for testing.

## Steps

### 1. Create a Railway project

- Sign in to Railway with GitHub.
- Click **New Project > Deploy from GitHub repo**.
- Select the studio repository.
- Railway detects Next.js and configures build/start automatically.

### 2. Set environment variables

Open the service, go to the **Variables** tab, and add:

| Name | Value |
| --- | --- |
| `SESSION_SECRET` | 64 hex chars, `openssl rand -hex 32` |
| `META_API_BASE` | `https://api.facebook.com` |
| `GRAPH_API_BASE` | `https://graph.facebook.com/v20.0` |
| `META_APP_SECRET` | your Meta app secret (only if using webhooks) |
| `META_WEBHOOK_VERIFY_TOKEN` | any random string (only if using webhooks) |

Railway injects a `PORT` variable automatically; the studio honors it via `start.sh`.

### 3. Deploy

The first deploy triggers automatically. Expect 3 to 5 minutes.

### 4. Generate a public URL

Railway does not expose a public URL by default. In the service's **Settings > Networking**, click **Generate Domain**. You get a URL like `https://studio-production.up.railway.app`.

### 5. Confirm

Open the URL. Click **Try the demo**. If the demo works end-to-end, real Meta traffic will too.

## Custom domain

**Settings > Networking > Custom Domain**. Add your domain, follow the DNS instructions. HTTPS is automatic.

## Rolling back

Deployments tab shows every build. Click a previous one and **Redeploy**. Railway spins up the old build immediately.

## Scaling

Railway's Hobby plan runs one instance. For higher tiers, use the **Replicas** control in the service settings to run multiple. Because the studio is stateless per request, replicas are safe.

Vertical scaling (RAM, CPU) is available under the same tab.

## Common issues

**"Cannot find module" during build.** Railway's Nixpacks caches Node modules aggressively. Trigger a clean build by clicking **Deploy** and selecting **No cache** under the three-dot menu.

**Cookies not being set.** Confirm you are visiting the HTTPS URL, not HTTP. Railway serves both; the studio's session cookie only sets on HTTPS in production.

**Meta webhook 403 on verification.** Point Meta at your Railway URL, not the internal Railway host. Public URL only.

**Random request failures at ~5 seconds.** You are on the Hobby plan and hitting the sleep timer. Move to a paid plan or accept the cold starts.

## Observability

- Service **Deployments > Logs**: live streaming logs.
- **Metrics**: CPU, memory, network, request rate.

The studio emits stdout only. See [Architecture and security](./architecture-and-security.md) for what is and is not logged.
