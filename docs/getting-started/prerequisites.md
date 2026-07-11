# Prerequisites

Before you can use WhatsApp Business Agent Studio, confirm your Meta setup is ready.

## What you'll do

- Verify your Meta Business Manager, WABA, and phone number.
- Confirm you have permission to onboard the Agent Platform.
- (Self-hosting only) install Node.js and populate a small env file.

## Meta prerequisites

1. A **Meta Business Manager** account. You will need the Business ID.
2. A **WhatsApp Business Account (WABA)** owned by that Business.
3. At least one **WhatsApp Cloud API phone number** attached to the WABA.
4. Permission to onboard the **Business Agent Platform** on that phone number. Contact your Meta partner if the eligibility check inside the app returns false.
5. A long-lived **access token** with the required scopes. See [Generating an access token](access-token.md).

## Local prerequisites (self-hosting)

Skip this section if someone else is running the app for you.

- **Node.js 20** or later.
- **npm** (bundled with Node).
- A terminal with `openssl` available if you need to generate a session secret.

## Environment variables (self-hosting)

Copy `.env.example` to `.env.local`, then fill in the values.

```bash
cp .env.example .env.local
```

Required variables:

```env
SESSION_SECRET=<32+ character random string>
META_API_BASE=https://api.facebook.com
GRAPH_API_BASE=https://graph.facebook.com/v20.0
```

Optional variables, only needed if this app receives Meta webhooks:

```env
META_APP_SECRET=<Meta app secret used to verify webhook signatures>
META_WEBHOOK_VERIFY_TOKEN=<the verify token you configure in Meta for the webhook>
```

What each variable does:

- `SESSION_SECRET`, used to encrypt the session where your access token lives. Must be 32 or more characters. Generate one with `openssl rand -hex 32`.
- `META_API_BASE`, the base URL for the Meta Business Agent Platform. Do not change unless Meta moves the endpoint.
- `GRAPH_API_BASE`, the base URL used for discovery calls (looking up your WABAs and phone numbers).
- `META_APP_SECRET`, used to verify that incoming webhook posts really came from Meta. If unset, webhook posts are still accepted but marked as unverified.
- `META_WEBHOOK_VERIFY_TOKEN`, matched against the verify token you enter in Meta's webhook configuration UI.

## Troubleshooting

- **`SESSION_SECRET` is rejected as too short**, regenerate with `openssl rand -hex 32`.
- **Business ID unknown**, ask an admin on Meta Business Manager. The app does not auto-discover businesses; you paste one Business ID at a time. See [Picking a business and phone](pick-business-and-phone.md).
