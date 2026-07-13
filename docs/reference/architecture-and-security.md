# Architecture and security

A one-page explainer aimed at whoever on your team is answering "how does this handle our Meta access token, and what is the blast radius if it goes wrong?" Bring this to your security review.

## What the studio is

A single Next.js server, deployed on a host you choose (Vercel, Fly, Railway, AppSail, self-hosted Docker), that sits between your browser and the Meta Business Agent Platform. All traffic from the browser to Meta goes through this server.

```
Browser  <-->  Studio server (Next.js)  <-->  Meta APIs
                                             (api.facebook.com,
                                              graph.facebook.com)
```

Nothing else lives in the middle. There is no vendor cloud, no third-party proxy, no analytics service in the request path. You control the server and the box it runs on.

## Where the access token lives

Server side only.

When you paste an access token on the sign-in page, the server:

1. Verifies the token by calling Meta's `GET /me`.
2. On success, writes the token into an encrypted session cookie.
3. Returns the cookie to the browser with `httpOnly`, `sameSite=lax`, and `secure` when in production.

The browser never sees the raw token. It cannot be read by JavaScript, cannot be exfiltrated by a script injected via a compromised third-party dependency, and does not appear in browser DevTools.

The cookie is encrypted with a 32+ character secret you set via the `SESSION_SECRET` environment variable. If the server is compromised, the attacker needs both the cookie and the secret to decrypt. If the secret rotates, all existing cookies invalidate.

## The single proxy hinge

Every call from the browser to Meta goes through one server-side route: `/api/meta/[...path]`. That route:

1. Requires a valid session cookie; otherwise returns 401 before doing anything.
2. Injects the session's access token as `Authorization: Bearer <token>`.
3. Injects `X-API-Version: 2.0.0` (or the version the caller requested).
4. Forwards only a small allowlist of request headers (`accept`, `content-type`, `content-disposition`, `x-api-version`). Everything else is dropped.
5. Streams the body through untouched. Multipart uploads keep their boundary.
6. Retries 429 with `Retry-After` up to twice.
7. Streams the response back with the original status code.

Because every write goes through this route, one file gates all outbound traffic. There is no back door in feature code.

Graph API discovery calls (list WABAs, list phone numbers) use `/api/graph/*` routes that follow the same pattern, with a different upstream host.

## Cross-origin protection

State-changing session endpoints (`DELETE /api/session`, `PATCH /api/session`) verify that the request Origin matches the expected host. The expected host is picked in this order:

1. `WABIZ_PUBLIC_HOST` environment variable if set (explicit operator override).
2. `X-Forwarded-Host` request header (standard reverse-proxy signal).
3. `Host` request header (direct requests without a proxy).

Requests with a mismatched Origin are rejected with 403. This blocks CSRF-style attacks where a third-party page tries to log the user out or flip their session settings.

## Webhook signature verification

If you configure the studio to receive Meta webhooks (`META_APP_SECRET` set), incoming webhook requests are verified against the HMAC-SHA256 signature Meta includes in the `X-Hub-Signature-256` header. The comparison uses `crypto.timingSafeEqual` to avoid timing side-channels.

Unverified events still get recorded, but they are visually flagged as unsigned in the webhook viewer. This keeps the receiver useful for local dev (where signing may not be configured) while making the operator aware of production drift.

## Demo mode isolation

Demo mode replaces the token with a sentinel string (`__demo__`) and short-circuits the proxy before any request leaves the server. Demo sessions never call Meta. Demo write operations go to a per-session in-memory map keyed by the session user ID, so two demo sessions do not see each other's data. The map lives on the server process and is wiped when the process restarts or the session cookie expires.

You cannot escalate from demo to real by editing a cookie. The token itself is checked against Meta's `/me` on real logins; the demo path skips that check but sets the sentinel, so any attempt to hit Meta from a demo session will return a demo fixture, not real data.

## AI provider isolation

The AI-assist features (skill drafting, doc-to-agent generation) are opt-in and point at whatever endpoint you configure. If you use the local Claude Agent SDK, the studio invokes the `claude` CLI on the server and never sends prompts over the network. If you use an OpenAI-compatible endpoint, the studio calls the base URL you provided.

The AI provider API key is stored server-side with the same encryption as the access token. The browser only sees a "provider configured" boolean.

The Meta access token is never included in AI prompts.

## What runs client-side

The browser has:

- The session cookie (encrypted, opaque).
- React Query cache of API responses returned by the studio.
- LocalStorage entries for user-scoped preferences: saved scenarios, submitted agent events, theme preference.

None of the LocalStorage entries include credentials. If a customer service teammate uses the studio on a shared kiosk, they should sign out (clears the cookie) and clear browser storage.

## Log posture

By default, the studio logs to stdout. It logs:

- HTTP status of proxied Meta calls (200, 401, 429, etc.).
- Timing.
- The Meta API path being called.

It does not log:

- The access token.
- Request bodies (including customer messages).
- Response bodies.

If you deploy on a host that captures stdout (Vercel, Fly, AppSail all do), those hosts will see the paths and status codes but not the message content. This is the correct posture for chat data. Do not add body logging without a compliance review.

## Session lifetime

Sessions default to 8 hours. Override with `WABIZ_SESSION_TTL_SECONDS`. When the cookie expires, the browser cannot make authenticated calls; the middleware redirects to the sign-in page. Meta's underlying access token has its own expiration set by Meta; if it expires, the studio surfaces the 401 from Meta as an authentication error and the user is prompted to sign in again.

## Deployment posture

- Set `SESSION_SECRET` to a fresh 32+ character random string per environment. Never share between staging and production.
- Set `META_APP_SECRET` and `META_WEBHOOK_VERIFY_TOKEN` if you use the webhook receiver.
- Enable HTTPS at the reverse proxy. The studio's cookie is set to `secure` in production and will not be sent over HTTP.
- Keep the Meta access token as a short-lived one where possible. The studio verifies against Graph on each sign-in, so token rotation is a re-sign-in for each teammate.

## Threat model summary

| Threat | Mitigation |
| --- | --- |
| Access token leaked to the browser | Token never leaves the server; cookie is `httpOnly` and encrypted |
| XSS-injected script exfiltrates token | Cookie is not readable from JavaScript |
| CSRF sends a state-changing request | Same-origin check on `PATCH`/`DELETE /api/session` |
| Compromised third-party dep sends data to Meta | Only the single proxy route reaches Meta, and it requires a valid session |
| Webhook replay attack | HMAC signature verification, timing-safe compare |
| Demo user tries to hit real Meta | Sentinel token short-circuits every proxy call |
| Config JSON leak | Credentials stripped by default on export; opt-in inclusion is clearly warned |

## Out of scope

- **DDoS protection**. That is the responsibility of your reverse proxy or CDN.
- **Rate limiting**. The studio respects Meta's rate limits (429 retry with `Retry-After`) but does not add its own per-user limits. If needed, add them at your reverse proxy.
- **Multi-tenant isolation**. Each deployment is single-tenant by design; one studio process = one team. If you host multiple teams, deploy separate instances.

## Reporting a vulnerability

Do not open a public issue. See [`SECURITY.md`](../../SECURITY.md) at the repo root for private disclosure instructions.
