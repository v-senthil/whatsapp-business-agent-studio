# Security Policy

## Supported versions

Only the current `main` branch is supported. Fixes land there; there are no maintained release branches.

## Reporting a vulnerability

Please report vulnerabilities privately to **senthilpitchappanv@gmail.com**. Do not open a public GitHub issue.

Include:
- A description of the issue and the impact you observed.
- Steps to reproduce (proof-of-concept code, curl commands, or a short narrative).
- The commit SHA or deployed URL you tested against.
- Whether the issue was reproducible against demo mode, a real Meta-connected deployment, or both.

You should hear back within 5 business days. Please give reasonable time for a fix before disclosing publicly. Coordinated disclosure is appreciated.

## Scope

Security-relevant surfaces in this project:

- **Session cookie handling** — `iron-session` encrypted cookie (`wabiz_session`), keyed by `SESSION_SECRET`. The Meta access token is stored server-side only. Report anything that could exfiltrate it to the browser or to a third party.
- **Same-origin enforcement** — state-changing session calls (`DELETE`/`PATCH /api/session`) require `Origin` to match the host (or `X-Forwarded-Host` / `WABIZ_PUBLIC_HOST`). Report bypasses.
- **Meta proxy** — `/api/meta/[...path]` and `/api/graph/*` are the only client-reachable paths to Meta. They inject the token server-side and only forward an allowlist of request headers. Report ways to smuggle headers, bypass the allowlist, or reach Meta without a session.
- **Webhook receiver** — `/api/webhooks/meta` verifies `X-Hub-Signature-256` with a timing-safe comparison against `META_APP_SECRET`. Report signature-verification bypasses or timing side-channels.
- **Demo mode** — the demo router in `src/lib/demo/` short-circuits the Meta proxy when `session.demo === true`. Report any path where demo state could leak into a real session, a real session could be interpreted as demo, or a demo cookie could be forged into a token session.
- **AI provider routing** — `readAiConfig(session)` gates every AI route. Report ways to trigger AI calls without a configured provider, exfiltrate the stored API key, or coerce the server to hit an attacker-controlled endpoint.
- **Config export / import** — `src/lib/utils/agent-config.ts`. Report ways to inject credentials past the default strip, or to trigger arbitrary writes via a malformed import bundle.

## Out of scope

- Rate limiting on public Meta endpoints — this project does not add its own rate limits on top of Meta's.
- Denial of service via large uploads to `/api/meta/*/agent_config/files` — bounded by whatever limits the reverse proxy or Meta itself enforce.
- Anything requiring a compromised Meta access token to exploit — the token is trusted by design.
- Missing security headers on the marketing pages served by GitHub Pages (those are static assets and carry no session).

## No bug bounty

This is a solo, unfunded project. Reports are gratefully received and credited (if you want) in the release notes, but there is no monetary reward.
