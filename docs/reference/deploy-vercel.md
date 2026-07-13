# Deploy on Vercel

Vercel is the fastest path to a public URL. It supports Next.js natively, so there is no build script to write and no container to package.

## What you get

- Automatic deploys on every push to your chosen branch.
- Preview URLs on every pull request.
- HTTPS and a `.vercel.app` subdomain out of the box.
- Environment variables in the dashboard, per environment (production, preview, development).

## What you do not get

- Persistent local disk. Uploaded files (Knowledge > Files) still work because Meta stores them, not the studio. But do not rely on the studio's process-local memory for anything that must survive restarts. Demo mode state, for example, resets on each cold start.
- Long-running processes. Vercel functions cap at a few minutes per request, which is fine for every studio endpoint except large multipart uploads to Meta. If you regularly upload huge knowledge files, prefer a container platform.

## Steps

### 1. Fork or clone the repository

If you plan to customize, fork on GitHub. If you plan to consume as-is, connect the upstream repo directly.

### 2. Create a Vercel project

- Go to Vercel's dashboard and click **Add New > Project**.
- Import your GitHub repository.
- Framework preset: **Next.js** (auto-detected).
- Root directory: leave as the repo root.
- Build command and install command: leave defaults.

### 3. Set environment variables

Under **Settings > Environment Variables**, add for the **Production** environment:

| Name | Value | Notes |
| --- | --- | --- |
| `SESSION_SECRET` | 64 hex chars from `openssl rand -hex 32` | Required |
| `META_API_BASE` | `https://api.facebook.com` | |
| `GRAPH_API_BASE` | `https://graph.facebook.com/v20.0` | |
| `META_APP_SECRET` | your Meta app secret | Optional; only if using the webhook receiver |
| `META_WEBHOOK_VERIFY_TOKEN` | any string you pick | Optional; must match what you set in Meta |
| `WABIZ_SESSION_TTL_SECONDS` | `28800` (8 hours) | Optional |

Do not set `WABIZ_PUBLIC_HOST`; Vercel sets `X-Forwarded-Host` and the same-origin check picks it up automatically.

### 4. Deploy

Click **Deploy**. First build takes 2 to 3 minutes.

### 5. Point Meta webhooks at Vercel

If you use the webhook receiver, set your Meta app's callback URL to:

```
https://your-app.vercel.app/api/webhooks/meta
```

Meta will send a GET verification challenge; the studio replies with the `META_WEBHOOK_VERIFY_TOKEN` value automatically.

### 6. Try the demo to confirm

Open your Vercel URL. Click **Try the demo**. The demo tour should run entirely inside the Vercel deployment, no Meta credentials needed.

## Custom domain

Under **Settings > Domains**, add your domain and update DNS as Vercel instructs. HTTPS is automatic via Let's Encrypt. No code changes required.

## Rolling back

Vercel keeps every deploy. Under **Deployments**, click the previous good one and **Promote to Production**. Rollback is instant.

## Common issues

**"NEXT_PUBLIC_APP_URL is not set" during build.** Ignore. That variable is only used by the GitHub Pages marketing microsite, not the main app.

**"Serverless function exceeded max duration".** A multipart upload to Meta took longer than Vercel's function timeout. Either upload smaller files, or deploy on a container platform (Fly, Railway, Docker) for long uploads.

**Cookies not being set.** Confirm the deploy is served over HTTPS. The studio's session cookie is `secure` in production and will not be set on an HTTP URL.

**Meta webhook verification failing.** The `META_APP_SECRET` in Vercel does not match the one in your Meta app dashboard, or Meta is sending to the wrong URL. Confirm both.

## Observability

- **Vercel Logs**: `vercel logs your-app` or the Deployments tab. Streams stdout.
- **Vercel Analytics**: enable in the dashboard for basic traffic charts.

The studio itself does not emit metrics beyond stdout logging. See [Architecture and security](./architecture-and-security.md) for the log posture.
