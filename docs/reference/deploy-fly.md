# Deploy on Fly.io

Fly runs your app as a small VM (a Fly Machine) close to your users. It is a good fit for the studio when you want more control than Vercel gives you but less operational overhead than running Docker on your own hardware.

## What you get

- A dedicated process, not serverless. Long-running requests (large uploads to Meta) work fine.
- Persistent local disk if you want it (Fly Volumes). The studio does not need this today, but the option is there.
- Global regions; deploy close to your team or your customers.
- Free HTTPS via Fly's edge.

## Steps

### 1. Install flyctl and sign in

```
brew install flyctl
fly auth signup   # first time
fly auth login    # subsequent times
```

### 2. Add a Fly config to the repo

Create a file named `fly.toml` at the repo root:

```
app = "your-app-name"
primary_region = "iad"

[build]
  builder = "paketobuildpacks/builder:base"

[env]
  META_API_BASE = "https://api.facebook.com"
  GRAPH_API_BASE = "https://graph.facebook.com/v20.0"
  PORT = "3000"

[http_service]
  internal_port = 3000
  force_https = true
  auto_start_machines = true
  auto_stop_machines = true
  min_machines_running = 1

[[vm]]
  cpu_kind = "shared"
  cpus = 1
  memory_mb = 512
```

Alternatively, if you have the pre-built `deploy.zip` from `sh scripts/build-deploy-zip.sh`, use a Dockerfile that just unzips and runs `start.sh`. The buildpack approach is fine for most cases.

### 3. Launch

```
fly launch --no-deploy
```

Answer prompts (name, region, no database, no Redis). This creates the app on Fly's side.

### 4. Set secrets

Secrets go through `fly secrets set`, not the config file. They are encrypted at rest and injected at runtime.

```
fly secrets set \
  SESSION_SECRET="$(openssl rand -hex 32)" \
  META_APP_SECRET="your-meta-app-secret" \
  META_WEBHOOK_VERIFY_TOKEN="a-random-string"
```

If you do not use the webhook receiver, omit the last two.

### 5. Deploy

```
fly deploy
```

First deploy pulls the buildpack, installs dependencies, and builds Next.js. Expect 3 to 5 minutes.

### 6. Confirm it is up

```
fly status
fly open        # opens the URL in your browser
```

Click **Try the demo** on the landing page to sanity-check.

## Custom domain

```
fly certs add your.domain.com
```

Fly prints the DNS records you need to add. HTTPS is automatic once DNS resolves.

## Rolling back

Fly keeps prior releases. Roll back with:

```
fly releases        # find the version you want
fly releases rollback <version>
```

## Scaling

By default the app runs one small VM. Scale up:

```
fly scale count 2      # two machines behind the proxy
fly scale memory 1024  # bump each machine to 1 GB RAM
```

The studio is stateless per request (all persistence is in the session cookie and in Meta), so horizontal scaling is safe.

## Common issues

**"could not find pages-manifest.json" at boot.** The build failed silently. Look at `fly logs` and try `fly deploy --no-cache` to force a clean rebuild.

**Cookies missing.** Confirm `force_https = true` in `fly.toml`. The session cookie is `secure` in production.

**Meta webhook verification 403.** `X-Forwarded-Host` is set by Fly's edge; the same-origin check should pass. If it fails, log the incoming headers on a webhook call to see what Fly is actually sending.

**High memory usage crashes the VM.** The studio itself sits around 100 to 200 MB. Node's default heap can grow if you keep long conversations open. Bump to 1 GB memory with `fly scale memory 1024`.

## Observability

- `fly logs`: streams stdout in real time.
- `fly logs --json`: structured output for piping to a log aggregator.
- Fly's metrics tab: CPU, memory, request rate, HTTP status codes.

The studio emits stdout only. See [Architecture and security](./architecture-and-security.md) for what is and is not logged.
