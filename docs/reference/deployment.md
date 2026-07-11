# Deployment

Deploying to Zoho Catalyst AppSail requires a pre-built ZIP so the process binds a port within the platform's startup timeout.

## What you'll do

- Pre-build a deploy ZIP locally.
- Upload it to AppSail with the correct startup command.
- Configure environment variables in the AppSail dashboard.

## Scripts

- `npm run dev`, dev server on port 3000.
- `npm run build`, production build.
- `npm run typecheck`, TypeScript check without emitting files.
- `npm run deploy:start` or `sh start.sh`, one-shot install plus build plus start for AppSail.

## `start.sh`

`start.sh` is POSIX-only. It uses `/bin/sh` (not bash) because AppSail's shell is `dash`. It:

1. Skips install if `node_modules/.bin/next` exists.
2. Skips build if `.next/BUILD_ID` exists.
3. Starts the app on `$PORT`.

## Pre-built ZIP

`scripts/build-deploy-zip.sh` pre-builds the artifact locally so the deployed script only does a couple of seconds of work, well inside AppSail's startup timeout. Ship a source-only ZIP and AppSail will kill the process mid-install.

Command:

```bash
sh scripts/build-deploy-zip.sh
```

That runs the install and build, prunes dev dependencies, and produces a `deploy.zip` containing `node_modules/`, `.next/`, all source, and the `start.sh` entrypoint. The ZIP is a few hundred MB, which is expected.

## AppSail configuration

1. Upload `deploy.zip`.
2. Startup command: `sh start.sh`.
3. Port: `3000` (or whatever AppSail routes to; the script honors `$PORT`).
4. Set environment variables in the AppSail dashboard (do not upload `.env.local`):

   ```env
   SESSION_SECRET=<32+ char random>
   META_API_BASE=https://api.facebook.com
   GRAPH_API_BASE=https://graph.facebook.com/v20.0
   # Optional, only if this app receives Meta webhooks:
   # META_APP_SECRET=
   # META_WEBHOOK_VERIFY_TOKEN=
   ```

## Common failure modes

- **`sh: 1: next: not found`**, you uploaded a source-only ZIP without `node_modules/`. Rebuild with `sh scripts/build-deploy-zip.sh`.
- **`npm error code EUSAGE`**, `npm ci` could not find `package-lock.json`. Pre-building avoids this.
- **Process restarts every 10 to 15 seconds**, AppSail's startup timeout is killing you mid-install. Pre-build fixes it.
- **`Illegal option -o pipefail`**, the runtime shell is `dash`, not bash. Keep `start.sh` POSIX-compliant.
- **Startup command is `npm run dev`**, wrong. Use `sh start.sh`.

## Related docs

- [Security](security.md), how the encrypted session relies on `SESSION_SECRET`.
- [Prerequisites](../getting-started/prerequisites.md), full env var list.
