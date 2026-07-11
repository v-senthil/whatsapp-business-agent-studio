# Security

Summary of how the app keeps your access token private, how sessions work, and how webhook signatures are verified.

## Access token handling

- Your Meta access token is stored on the server, inside an encrypted session. It is never sent to your browser.
- Every Meta API call is made from the server, injecting the token behind the scenes.
- Because of that, browser dev tools, screen shares, and clipboard slips cannot leak the token.

## Session lifecycle

- **Sign in**, you paste the token on the login screen. The app verifies it with Meta before creating a session.
- **Session read**, whenever the app needs to know who you are, it reads the safe subset of your session (never the token itself).
- **Sign out**, choose Sign out from the account menu. Your session is cleared and you return to the login screen.
- If Meta rejects a request as unauthenticated, the app bounces you back to the login screen automatically.

## Webhook signature verification

- When Meta POSTs a webhook to the app, the app computes an HMAC-SHA256 of the request body using the configured app secret and compares it to the signature Meta sent.
- Each entry in the Webhooks page is tagged as **signed** or **unverified** based on that check.
- If the app secret is not configured, entries are still accepted but shown as unverified. This is useful for local development; production should always have the secret configured.

## Verification handshake

When you first configure a webhook in Meta Business Suite, Meta sends a GET request with a verify token. The app compares it to the verify token you set on the server and echoes back Meta's challenge to complete the handshake.

## Read-only mode

- Toggle **Read-only mode** in the account menu to block every write action from the current browser. See [Read-only mode](../advanced/read-only-mode.md).
- Read-only is a client-side safeguard, not a compliance control. Anyone with access to the account menu can turn it off.

## Copy as cURL and the session cookie

The **Copy as cURL** button in the dev drawer intentionally omits your session cookie from the copied command. This is deliberate; it prevents an accidental paste from leaking your session. If you need to reproduce a call outside the app, use your own access token directly against the Meta API. See [Dev drawer](../advanced/dev-drawer.md).

## Deployment secrets

- Do not upload `.env.local` to your deploy target. Set secrets via your deployment provider's dashboard.
- Rotate the session secret if you ever suspect it has leaked; existing sessions will all be invalidated when you do.

## Related docs

- [Deployment](deployment.md), how to configure secrets on your deploy target.
- [Prerequisites](../getting-started/prerequisites.md), the list of env vars.
