# Compliance notes

This page collects the posture the studio takes on data handling, retention, and third-party terms. Use it as a starting point for your own compliance review; nothing here is legal advice.

## Data the studio handles

The studio is a proxy between your team and the Meta Business Agent Platform. It handles:

- **Your Meta access token**. Stored server-side in an encrypted session cookie. Never sent to the browser. Never logged.
- **Customer messages during Test chat**. Sent to Meta's `agent_test` endpoint, response streamed back. Not persisted server-side beyond the session's React Query cache.
- **Live customer messages via the webhook receiver** (if configured). Held in a server-side in-memory ring buffer (200 events) so operators can view recent traffic. Wiped on process restart. Not persisted to disk.
- **Uploaded knowledge files**. Streamed through to Meta and stored there. The studio does not keep a copy.
- **Agent configuration**: skills, FAQs, websites, allowlist, connectors, tools. Stored by Meta. The studio reads and writes but does not cache configuration content on disk.
- **Connector credentials** (API keys, OAuth secrets, mTLS certs). Stored server-side in the session store, encrypted with the session secret.
- **Local scenarios and event history**. Stored in the operator's browser LocalStorage, per phone number. Never sent server-side.

## GDPR posture

If any of your customers are in the EU or UK, you are a data controller for their WhatsApp messages. Meta is a processor for the messages themselves; the studio is a processor for its cached view of them.

- **Right to access**: request the customer's message history from Meta's Customer Support tool. The studio does not have an "export a customer's data" button because it does not persist message content.
- **Right to deletion**: initiate deletion at Meta. Because the studio does not persist message content past the in-memory webhook buffer, there is nothing to delete on the studio's side beyond the buffer, which wipes on restart.
- **Purpose limitation**: the studio is scoped to WhatsApp Business Agent operations. Do not use it as a general customer data warehouse.
- **Data minimization**: the studio only forwards data Meta requires. It does not ship customer data to any third party unless you explicitly configure a connector or AI provider that does so (see below).
- **Cross-border transfers**: Meta hosts customer messages in the region their WhatsApp Business Account is provisioned in. The studio can run in any region you choose. If your compliance requires EU-hosted processing, host the studio in the EU (Vercel Frankfurt, Fly `fra` or `ams`, Railway EU regions, or your own EU infrastructure).

## Meta Terms of Service

The Meta Business Agent Platform is currently in Beta. This creates specific obligations:

- An admin on your WhatsApp Business Account must accept the Meta Business AI terms and conditions before the platform will accept API calls for that account. The studio surfaces this as a blocked-dashboard state with a link to the terms page.
- Beta features may change without notice. The studio tracks Meta's public API surface, not undocumented endpoints.
- Do not misrepresent the agent as a human. Meta's terms require agent disclosure in appropriate contexts (regulated industries, certain jurisdictions). The studio does not enforce this; your skills should.
- Rate limits are enforced by Meta. The studio retries 429 responses respecting `Retry-After`, but if you exceed limits repeatedly Meta may throttle or suspend the WABA.

Full terms: [Meta Business Terms](https://business.facebook.com/policies_center/) and [WhatsApp Business Solution Terms](https://www.whatsapp.com/legal/business-solution-terms).

## Third-party data flows

By default the studio talks only to Meta. Every additional connector or AI provider is an explicit data flow you configure:

- **AI provider (Claude Agent SDK, OpenAI, Ollama, etc.)**. When you use "Draft with AI" or "Generate from document", the studio sends the prompt content to the configured provider. If the provider is external (OpenAI, Anthropic API, hosted Ollama), the prompt leaves your infrastructure. If the provider is the local Claude Agent SDK, the prompt is processed by the `claude` CLI running on your server.
- **Connectors**. Each connector calls the vendor's API. The exact data sent depends on your tool definitions.
- **Webhooks**. Meta sends event data to whatever URL you configure. If you deploy the studio's webhook receiver, that data hits your studio host.

Document each of these flows in your Record of Processing Activities.

## Log posture

The studio logs to stdout:

- HTTP path and status of proxied Meta calls.
- Timing.
- Auth failures.

It does not log:

- Access tokens.
- Request bodies (including customer messages).
- Response bodies (including agent replies).
- Connector credentials.

Your host platform (Vercel, Fly, Railway, AppSail, self-hosted) captures stdout. Review that host's retention policy and any log ingestion pipelines you enable. Do not add body logging without a data-classification review.

## Retention

| Data | Where | Retention |
| --- | --- | --- |
| Session cookie | Browser | 8 hours by default (`WABIZ_SESSION_TTL_SECONDS`). Delete on sign out |
| Access token | Inside session cookie | Same as cookie |
| React Query cache | Browser memory | Cleared on tab close |
| Scenarios | Browser LocalStorage | Until user clears browser storage |
| Agent events history | Browser LocalStorage | Until user clears |
| Webhook ring buffer | Server memory | Wiped on restart; 200 event cap |
| Meta agent configuration | Meta | Whatever Meta retains |
| Stdout logs | Host platform | Whatever your host retains |

## PII posture

The studio does not classify or redact PII in transit. Customer messages flow through unmodified.

If you have a duty to redact PII before it reaches a third-party AI provider or a connector, do it in the skill body (instruct the agent to not include the phone number in tool calls, for example) or in the connector's request definition. The studio itself has no redaction layer.

## Encryption

- **In transit**: HTTPS everywhere. The session cookie is `secure` in production and will not be sent over HTTP.
- **At rest**: the session cookie is encrypted with `SESSION_SECRET`. Access tokens and connector credentials inside the cookie are protected by that encryption. Meta encrypts its own storage.
- **Uploaded files**: streamed straight to Meta over HTTPS. The studio does not touch the binary content beyond forwarding.

## Access control

- One deployment = one team. There is no per-user role model; whoever has the access token has full studio access.
- To limit blast radius, use restricted Meta access tokens scoped to just the WABAs your team owns.
- Rotate the `SESSION_SECRET` when a teammate with admin access leaves. All existing sessions invalidate.
- Rotate the Meta access token itself when a teammate leaves.

## Vendor list

If you deploy the studio, your vendors are:

- **Meta**: WhatsApp Business Agent Platform, Meta Graph API. Required.
- **Your hosting provider**: Vercel, Fly, Railway, AppSail, or your own infrastructure.
- **Any AI provider you configure**: Anthropic (Claude), OpenAI, or a self-hosted model.
- **Any connector target you configure**: Stripe, HubSpot, Salesforce, etc.

Add each of these to your subprocessor list if your customers require one.

## Reporting

If you find a data-handling issue or a compliance gap, do not open a public issue. See [`SECURITY.md`](../../SECURITY.md) at the repo root for private disclosure instructions.
