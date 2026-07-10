# WhatsApp Business Agent Studio

A visual builder for WhatsApp Business AI agents on the [Meta Business Agent Platform](https://developers.facebook.com/docs/whatsapp/business-management-api/agents). Wraps the entire Meta Business Agent Platform API and Meta Graph API behind a Next.js UI: discover WABAs and phone numbers, onboard an agent, configure settings/knowledge/skills, register external tool connectors, run evals, and chat-test — all without touching Postman.

## What you can do

- **Discover** WABAs and phone numbers on a Meta business (by pasting a business ID) via Graph API
- **Onboard** one WhatsApp AI agent per phone number
- **Configure** rollout, human handoff, follow-up, and AI audience
- **Fill in** business info: description, contact, payment, returns, purchase, delivery
- **Author skills** — free-form instructions the model follows in specific scenarios
- **Manage knowledge** — upload files (PDF/DOCX/CSV/…), add crawlable websites, curate FAQs, and maintain an allowlist
- **Register connectors** — external APIs the agent can call, with `API_KEY` / `OAUTH2_CLIENT_CREDENTIALS` / `MTLS` auth, plus per-tool `request_definition` schemas the model uses to decide arguments
- **Run tools** manually with custom JSON input to verify shape end-to-end
- **Evaluate** the agent against pre-seeded eval cases and inspect per-case transcripts
- **Test chat** the agent in a WhatsApp-style bubble UI with sticky `conversation_id`, quick-reply chips, and handoff banners
- **Release / pass thread control** via the Cloud API

## Tech stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** with shadcn/ui-style primitives (all built in `src/components/ui/`)
- **iron-session** for encrypted, httpOnly server-side sessions
- **TanStack Query v5** for data fetching and cache invalidation
- **react-hook-form** + **zod** for every form
- **sonner** for toasts, **lucide-react** for icons

## Setup

```bash
npm install
cp .env.example .env.local
# edit .env.local — SESSION_SECRET must be 32+ chars
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), paste a Meta access token, then a business ID (or a phone number ID directly).

### Environment

`.env.local`:

```
SESSION_SECRET=<32+ char random string, e.g. openssl rand -hex 32>
META_API_BASE=https://api.facebook.com
GRAPH_API_BASE=https://graph.facebook.com/v20.0
```

### Meta access token requirements

The token you paste on `/login` must be a long-lived user access token with, at minimum:
- `whatsapp_business_management` — to list WABAs and phones
- `business_management` — to enumerate businesses (only needed for the WABA listing page)

Generate it via [Meta Business Suite → System User → Access Tokens](https://business.facebook.com/settings/system-users).

## User flow

1. **`/login`** — paste an access token. Verified server-side against `GET /me` on the Graph API before the session cookie is issued.
2. **`/home`** — paste your Meta business ID. WABAs are fetched, each with its phones. Persisted to session as `lastBusinessId`.
3. **`/dashboard/[entityId]`** — pick a phone; the sidebar unlocks all configuration tabs for that phone.
4. **Onboarding** — creates the WhatsApp agent if one doesn't exist. Only one per phone.
5. Configure → Test → Iterate.

## Architecture

```
Browser ──▶ Next.js route handlers ──▶ Meta APIs
             (inject session token,     (api.facebook.com or
              proxy multipart/JSON)      graph.facebook.com)
```

The browser never sees the access token — it's stored in an encrypted iron-session cookie (`wabiz_session`, `httpOnly`, `sameSite=lax`) and injected by the server route handlers on every outbound call.

**All Meta Business Agent Platform calls** flow through a single catch-all proxy at `src/app/api/meta/[...path]/route.ts` that:
- Requires a valid session (401 otherwise)
- Forwards method + streamed body (multipart uploads pass through untouched)
- Injects `Authorization: Bearer <token>` and `X-API-Version: 2.0.0`
- Retries 429 up to 2× respecting `Retry-After`
- Streams the response back preserving status + error envelope

**Graph API discovery** uses dedicated routes because the base host and error shape differ:
- `GET /api/graph/wabas?business_id=…` → `/{business_id}/owned_whatsapp_business_accounts`
- `GET /api/graph/phones?waba_id=…` → `/{waba_id}/phone_numbers`

## Directory layout

```
src/
├── app/
│   ├── login/                            # token paste
│   ├── home/                             # business → WABA → phone picker
│   ├── dashboard/[entityId]/             # per-phone config
│   │   ├── page.tsx                      # overview (eligibility + agent list)
│   │   ├── onboarding/                   # POST agent_onboarding?channel=whatsapp
│   │   ├── settings/                     # rollout/handoff/followup/ai_audience
│   │   ├── business-info/
│   │   ├── skills/{page, new, [skillId]}/
│   │   ├── knowledge/{files, websites, faqs, allowlist}/
│   │   ├── connectors/…/tools/…/run/     # connectors + tools + credentials + logs + runner
│   │   ├── evals/{page, runs/[jobId]}/
│   │   ├── test/                         # chat sandbox
│   │   └── thread-control/
│   └── api/
│       ├── session/{route.ts, me/}       # POST=login, DELETE=logout, PATCH=lastEntityId/lastBusinessId
│       ├── graph/{wabas, phones}/        # Meta Graph discovery
│       └── meta/[...path]/               # catch-all proxy → api.facebook.com
├── components/
│   ├── ui/                               # shadcn-style primitives (self-built)
│   ├── shell/                            # AppShell, Sidebar, Header, Breadcrumbs, EntityPicker
│   ├── home/                             # BusinessIdInput, WabaList, HomeContent
│   ├── skills/, knowledge/, connectors/, tools/, evals/, test/
│   ├── common/                           # FormField, LoadingButton, EmptyState, ErrorState, ConfirmDialog, JsonViewer
│   └── providers/                        # QueryProvider, EntityProvider
├── lib/
│   ├── env.ts                            # zod-validated env
│   ├── session.ts                        # iron-session config + getSession()
│   ├── api/                              # server-only fetch helpers + error normalizer
│   ├── client/
│   │   ├── fetcher.ts                    # client-side proxy fetch + MetaApiError
│   │   ├── query-keys.ts                 # centralized TanStack keys
│   │   └── hooks/                        # useSettings, useSkills, useConnectors, useEvals, useAgentTest, useDiscovery, …
│   ├── schemas/                          # one zod schema per resource
│   └── utils/cn.ts
├── types/                                # API response types
└── middleware.ts                         # gates /dashboard/* and /home
```

## Scripts

- `npm run dev` — start dev server on `:3000`
- `npm run build` — production build (~34 routes)
- `npm run typecheck` — TypeScript check without emit
- `npm run lint`

## Security notes

- Access token lives in an encrypted, `httpOnly` cookie. It's never sent to the browser or exposed to client JS.
- Browser can only reach Meta APIs via same-origin `/api/*` routes, so a valid session cookie is required.
- Session is 32+ character encrypted (`iron-session`).
- All mutations require a valid session; the middleware gates every non-`/login` route.

## Extending

- **Add a resource:** create a zod schema in `src/lib/schemas/`, response type in `src/types/`, hooks in `src/lib/client/hooks/`, and pages under `src/app/dashboard/[entityId]/…`. Wire the sidebar in `src/components/shell/Sidebar.tsx`.
- **Add a channel** (Messenger/Instagram/etc.): today onboarding is hardcoded to `whatsapp`. To open it up, restore the channel picker in `src/app/dashboard/[entityId]/onboarding/page.tsx` and adjust the guard that checks for an existing WhatsApp agent.
- **Swap the proxy target:** change `META_API_BASE` in `.env.local`. All requests still route through the catch-all.

## License

Internal tool.
