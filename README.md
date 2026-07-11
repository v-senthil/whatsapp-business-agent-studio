# WhatsApp Business Agent Studio

A visual builder for WhatsApp Business AI agents on the [Meta Business Agent Platform](https://developers.facebook.com/docs/whatsapp/business-management-api/agents). Wraps the entire Meta Business Agent Platform API and Meta Graph API behind a Next.js UI: discover WABAs and phone numbers, onboard an agent, configure settings/knowledge/skills, register external tool connectors, run evals, and chat-test — all without touching Postman.

## Features

### Core

- **Discover** WABAs and phone numbers on a Meta business (paste a business ID) via Graph API
- **Onboard** one WhatsApp AI agent per phone number
- **Configure** rollout, human handoff, follow-up interval, and AI audience (`EVERYONE` / `ALLOWLISTED_ONLY`)
- **Fill in** business info: description, contact, payment, returns, purchase, delivery
- **Author skills** — free-form instructions the model follows in specific scenarios
- **Manage knowledge** — upload files (PDF/DOCX/CSV/…), add crawlable websites, curate FAQs, and maintain an E.164 allowlist
- **Register connectors** — external APIs the agent can call, with `API_KEY` / `OAUTH2_CLIENT_CREDENTIALS` / `MTLS` auth, plus per-tool `request_definition` schemas the model uses to decide arguments
- **Run tools** manually with custom JSON input to verify shape end-to-end
- **Evaluate** the agent against pre-seeded eval cases and inspect per-case transcripts
- **Test chat** the agent in a WhatsApp-style bubble UI with sticky `conversation_id`, quick-reply chips, and handoff banners
- **Trigger agent events** — POST partner-defined events (`document_verified`, `payment_received`, …) with client-side status polling
- **Release / pass thread control** via the Cloud API (with the required `X-API-Version: 1.0.0` override)

### Bulk operations

- **CSV import + export** for skills, FAQs, and allowlist entries. Downloads sample CSVs; per-row validation against the same zod schemas the forms use; preview with valid/invalid counts before submitting.
- **Skill templates library** — 10 curated starter skills across five categories (Onboarding, Support, Sales, Escalation, Utility); multi-select and add.
- **Connector templates library** — 8 prefilled shells (Shopify, Stripe, Zendesk, HubSpot, Salesforce, Twilio, SendGrid, Slack). Pick one, fill in credentials.
- **Agent config JSON export / import** — bundle everything (settings, business info, skills, knowledge, allowlist, connectors + tools) into a single JSON, with optional credential strip. Reimport on another phone to promote staging → prod.

### AI-assisted authoring

- **AI provider settings** at `/settings/ai` — pick between the local Claude Agent SDK (uses your logged-in `claude` CLI, no key needed) or any OpenAI-compatible endpoint (OpenAI, Ollama, LM Studio, Together, …). Base URL + model + optional API key stored server-side in the encrypted session; browser only sees a `hasApiKey` flag. Includes a "Load models" button that hits `/v1/models` and a "Test connection" round-trip.
- **Generate from document** — paste a Markdown/plain-text description of the business (or upload `.md`/`.markdown`/`.txt`), and the AI drafts:
  - 3–10 **FAQs** extracted verbatim from the source,
  - 2–6 **skills** with kebab-case titles, "When ..." trigger clauses, numbered action lists, and explicit human-handoff fallbacks,
  - up to 5 **connector suggestions** mapped to the built-in template catalog by slug (with freeform proposals when no template fits).

  Available in two places: `/settings/ai` (utility mode — preview + copy JSON), and `/dashboard/[entityId]/generate` (apply mode — per-item checkboxes + one-click creation against the current phone, plus deep-links into `connectors/new?template=<slug>`). PDF/DOCX inputs need conversion to Markdown first (pandoc, copy-paste from a reader, etc.).
- **Draft a skill from intent** — on the skill creation flow, describe the intent in one sentence and the AI drafts the title/description/body against the configured provider.

### Testing & regression

- **Scenario recording → replay** — save any test-chat conversation as a scenario; replay it later through `agent_test` and see original vs. current responses side-by-side with match/differs badges.
- **Onboarding checklist** — a live-computed 6-step checklist on the entity overview (eligibility → agent → business info → skill → connector → rollout). Progress bar, next-actionable step highlighted, auto-hides once complete.

### Developer tools

- **Dev drawer** with **Copy as cURL** — floating button (or `Cmd/Ctrl+Shift+D`, or `?debug=1`) opens a slide-in panel of the last 50 client-side API calls. Each has request headers/body, response body, status, duration, and a one-click cURL export.
- **API playground** — `/dashboard/[entityId]/playground`. Free-form request builder scoped to the current phone number: method + path + query + JSON body. Seven quick-call presets (Eligibility, List settings, Business info, List skills, List connectors, Eval cases, Test message). Response viewer with pretty/raw tabs.
- **Read-only mode** — session flag that blocks any `POST/PUT/PATCH/DELETE` against `/api/meta/*` client-side. Amber banner shows the state; toggle from the account menu. Useful for demos and shift-handoffs.
- **OpenAPI reference** — `/api-docs` renders the whole Meta Business Agent Platform spec via [Zudoku](https://zudoku.dev/). Kept in sync with `public/openapi.yaml`; a `prebuild` hook regenerates `openapi.json` on every `next build`.

### Observability

- **Connector health card** on each connector page — success rate (colored by threshold), total calls, p95 latency, failure count, top-5 failure patterns. Uses Meta's `/logs?include_stats=true&summary_only=true` over a 24-hour window.
- **Live webhook receiver** at `POST /api/webhooks/meta` — HMAC-SHA256 signature verification against `META_APP_SECRET`, GET verification challenge, in-memory ring buffer (200), SSE stream to `/api/webhooks/stream`, live-updating UI at `/dashboard/[entityId]/webhooks` with text search + signed/unverified filter.

### Marketing and help

- **Public landing page** at `/` — full marketing site (hero, feature bento, workflow, platform deep-dive, FAQ, final CTA) shown to anyone. Session-aware nav: a single **Dashboard** button jumps signed-in visitors straight to `/home` and non-authed visitors to `/login`.
- **In-app help center** at `/help` — every article in the `docs/` tree rendered as browsable help pages with a left sidebar, breadcrumbs, per-article prev/next pager, and internal link resolution. Backed by `react-markdown` + `remark-gfm` + `@tailwindcss/typography`; the sidebar and index are built from `docs/README.md` at request time so a Markdown edit is all it takes to add a new topic. Includes an instant search box at the top of every help page (press `/` to focus) that ranks matches across article titles, descriptions, section names, and body text with highlighted snippets.
- **Contextual Help button on every page** — a small **Help** chip in the top-right of each dashboard page opens the matching article in a new tab. The mapping from route to article lives in `src/lib/help-links.ts`.
- **Shared product mark** — `src/components/common/Logo.tsx` renders the same green-gradient speech-bubble sparkle used by the favicon (`src/app/icon.svg`) and Apple touch icon (`src/app/apple-icon.tsx`). Reused across login, dashboard sidebar, marketing nav/footer, and the chat mock.
- **User-facing help library** in `docs/` — 37 Markdown files (Getting started, Configure, Ship, Advanced, Reference) with imperative step-by-step instructions and no developer internals; safe to lift into any static site generator later.

### Polish

- **Dark mode** — `next-themes` with `attribute="class"`, `enableSystem`; all colors go through CSS vars. Theme toggle in the dashboard header, home header, and login page.
- **Session persistence** — last-used business ID and phone number auto-selected on next visit.
- **Copy buttons** everywhere long IDs appear.
- **Multipart file uploads** stream straight through the proxy (no header rewriting); progress bar per file, cancel via `XMLHttpRequest.abort()`.

## Tech stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** with shadcn/ui-style primitives (all built in `src/components/ui/`)
- **iron-session** for encrypted, httpOnly server-side sessions
- **TanStack Query v5** for data fetching and cache invalidation
- **react-hook-form** + **zod** for every form
- **next-themes** for dark mode
- **papaparse** for CSV import/export
- **Zudoku** (self-hosted, iframe-isolated) for the OpenAPI reference
- **react-markdown** + **remark-gfm** + **@tailwindcss/typography** for the in-app help center
- **sonner** for toasts, **lucide-react** for icons

## Setup

```bash
npm install
cp .env.example .env.local
# edit .env.local — set SESSION_SECRET to `openssl rand -hex 32` (64 hex chars)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to hit the landing page, click **Dashboard** to jump to `/login`, paste a Meta access token, then a business ID (or a phone number ID directly). The in-app help center is at [/help](http://localhost:3000/help).

### Environment

`.env.local`:

```
SESSION_SECRET=<48+ char random string, generate with `openssl rand -hex 32`>
META_API_BASE=https://api.facebook.com
GRAPH_API_BASE=https://graph.facebook.com/v20.0
# Optional — only if this app is a Meta webhook callback:
# META_APP_SECRET=
# META_WEBHOOK_VERIFY_TOKEN=
# Optional — session lifetime, defaults to 8 hours (28800 seconds):
# WABIZ_SESSION_TTL_SECONDS=28800
# Optional — expected host for same-origin CSRF check behind a reverse proxy:
# WABIZ_PUBLIC_HOST=agents.example.com
```

### Meta access token requirements

The token you paste on `/login` must be a long-lived user access token with, at minimum:
- `whatsapp_business_management` — to list WABAs and phones
- `business_management` — to enumerate businesses (only needed for the WABA listing page)

Generate it via [Meta Business Suite → System User → Access Tokens](https://business.facebook.com/settings/system-users).

## Deploying to Zoho Catalyst AppSail

AppSail kills the process if the startup command doesn't bind a port within a short timeout (~15–30s). A cold `npm install + next build` takes 1–2 minutes, so **pre-build the ZIP locally** — the deployed script then only has to `next start`, which is a couple of seconds.

### 1. Build the deploy ZIP locally

From the project root:

```
sh scripts/build-deploy-zip.sh
```

That runs `npm ci` + `npm run build`, prunes dev dependencies, and produces a `deploy.zip` containing `node_modules/`, `.next/`, all source, and the `start.sh` entrypoint. The ZIP will be a few hundred MB — that's expected.

### 2. Upload to AppSail

- Upload `deploy.zip`.
- Startup command: `sh start.sh`
- Port: `3000` (or whatever AppSail routes to — the script also honors `$PORT`).

`start.sh` detects the pre-built `node_modules/` and `.next/`, skips install and build, and jumps straight to `next start`. It falls back to full install + build if anything is missing, so it still works with a source-only ZIP — just too slowly for AppSail's startup timeout.

### 3. Environment variables

Set in the AppSail dashboard, **not** in the ZIP:

```
SESSION_SECRET=<48+ char random, generate with `openssl rand -hex 32`>
META_API_BASE=https://api.facebook.com
GRAPH_API_BASE=https://graph.facebook.com/v20.0
# Optional, only if this app is a Meta webhook callback:
# META_APP_SECRET=
# META_WEBHOOK_VERIFY_TOKEN=
# Optional, session lifetime in seconds (default 28800 = 8 hours)
# WABIZ_SESSION_TTL_SECONDS=28800
# Optional, expected host for same-origin CSRF check behind a reverse proxy
# WABIZ_PUBLIC_HOST=agents.example.com
```

Do **not** upload `.env.local`. `.gitignore` already excludes it; make sure your ZIP does too.

### Common failure modes

- **`sh: 1: next: not found`** — you uploaded a source-only ZIP without `node_modules/`. Run `sh scripts/build-deploy-zip.sh` to make a pre-built one.
- **`npm error code EUSAGE`** — `npm ci` couldn't find `package-lock.json`. The script now falls back to `npm install`, but pre-building is faster.
- **Process restarts every 10–15 seconds** — AppSail's startup timeout is killing you mid-install. Pre-build fixes this.
- **`Illegal option -o pipefail`** — the runtime uses `dash`, not `bash`. Fixed: the script is POSIX-compliant.
- **Startup command `npm run dev`** — wrong; that's the Next.js dev server. Use `sh start.sh`.

## User flow

0. **`/`** — public landing page. Signed-in visitors see a **Dashboard** button that jumps to `/home`; anyone else lands on `/login`. The marketing nav also links to the in-app **Docs** at `/help`, which is public.
1. **`/login`** — paste an access token. Verified server-side against `GET /me` on the Graph API before the session cookie is issued.
2. **`/home`** — paste your Meta business ID. WABAs are fetched, each with its phones. Persisted to session as `lastBusinessId`.
3. **`/dashboard/[entityId]`** — pick a phone; the sidebar unlocks all configuration tabs for that phone. The onboarding checklist walks you through eligibility → agent → business info → skill → connector → rollout.
4. **Onboarding** — creates the WhatsApp agent if one doesn't exist. Only one per phone.
5. Configure → Test → Iterate. Use the Dev drawer (`Cmd/Ctrl+Shift+D`) at any time to inspect the underlying API calls.

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
- Injects `Authorization: Bearer <token>` and `X-API-Version: 2.0.0` (overridable per-call for thread control)
- Retries 429 up to 2× respecting `Retry-After` (skipped for streaming bodies)
- Streams the response back preserving status + error envelope

**Graph API discovery** uses dedicated routes because the base host and error shape differ:
- `GET /api/graph/wabas?business_id=…` → `/{business_id}/owned_whatsapp_business_accounts`
- `GET /api/graph/phones?waba_id=…` → `/{waba_id}/phone_numbers`
- `GET /api/graph/phone?phone_number_id=…` → phone details for the header picker

**Client fetcher** (`src/lib/client/fetcher.ts`) is instrumented — every call is recorded into a ring buffer that the dev drawer reads from. Also enforces read-only mode by short-circuiting non-GET calls to `/api/meta/*` when the session flag is set.

## Directory layout

```
src/
├── app/
│   ├── page.tsx                          # public marketing landing page
│   ├── icon.svg, apple-icon.tsx          # favicon (SVG) + dynamic Apple touch icon (PNG)
│   ├── help/                             # in-app help center (renders docs/*.md)
│   │   ├── page.tsx                      # index (cards grouped by section)
│   │   └── [...slug]/page.tsx            # article route with prev/next + generateStaticParams
│   ├── login/                            # token paste
│   ├── home/                             # business → WABA → phone picker
│   ├── api-docs/                         # Zudoku iframe wrapper
│   ├── dashboard/[entityId]/             # per-phone config
│   │   ├── page.tsx                      # overview + onboarding checklist
│   │   ├── onboarding/                   # POST agent_onboarding?channel=whatsapp
│   │   ├── settings/                     # rollout/handoff/followup/ai_audience
│   │   ├── business-info/
│   │   ├── skills/{page, new, [skillId]}/
│   │   ├── generate/                     # AI-generated FAQs/skills/connectors from a doc
│   │   ├── knowledge/{files, websites, faqs, allowlist}/
│   │   ├── connectors/…/tools/…/run/     # connectors + health + tools + credentials + logs + runner
│   │   ├── evals/{page, runs/[jobId]}/
│   │   ├── test/                         # chat sandbox with "save as scenario"
│   │   ├── scenarios/                    # saved conversations + replay
│   │   ├── events/                       # agent event submit + status polling
│   │   ├── webhooks/                     # live SSE stream + filter
│   │   ├── playground/                   # free-form API request builder
│   │   └── thread-control/
│   ├── settings/ai/                      # AI provider config + document generator (utility mode)
│   └── api/
│       ├── session/{route.ts, me/}       # POST=login, DELETE=logout, PATCH=lastEntityId/lastBusinessId/readOnly/ai*
│       ├── ai/{draft-skill, generate-from-document, list-models, test}/ # AI-assisted endpoints
│       ├── graph/{wabas, phones, phone}/ # Meta Graph discovery
│       ├── webhooks/{meta, stream}/      # incoming webhook + SSE feed
│       └── meta/[...path]/               # catch-all proxy → api.facebook.com
├── components/
│   ├── ui/                               # shadcn-style primitives (self-built)
│   ├── shell/                            # AppShell, Sidebar, Header, Breadcrumbs, EntityPicker, ReadOnlyBanner
│   ├── marketing/                        # LandingPage, MarketingNav, HeroPreview (used by src/app/page.tsx)
│   ├── help/                             # HelpShell, HelpSidebar, DocContent (Markdown renderer)
│   ├── dev/                              # DevDrawer + DevDrawerMount
│   ├── home/                             # BusinessIdInput, WabaList, HomeContent
│   ├── overview/                         # OnboardingChecklist
│   ├── config/                           # AgentConfigActions (export/import JSON)
│   ├── skills/, knowledge/, connectors/, tools/, evals/, test/
│   ├── scenarios/                        # ScenarioReplayDialog
│   ├── events/                           # AgentEventRow
│   ├── common/                           # Logo (product mark), FormField, LoadingButton, EmptyState, ErrorState, ConfirmDialog, JsonViewer, CopyButton, BulkImportDialog, ExportCsvButton, ThemeToggle
│   └── providers/                        # QueryProvider, EntityProvider, ThemeProvider, ReadOnlySync
├── lib/
│   ├── env.ts                            # zod-validated env
│   ├── session.ts                        # iron-session config + getSession()
│   ├── api/                              # server-only fetch helpers + error normalizer
│   ├── client/
│   │   ├── fetcher.ts                    # instrumented client fetch + read-only guard + MetaApiError
│   │   ├── api-log.ts                    # ring buffer for the dev drawer
│   │   ├── query-keys.ts                 # centralized TanStack keys
│   │   └── hooks/                        # useSettings, useSkills, useConnectors, useEvals, useAgentTest, useDiscovery, useSession, useAgentEvent, …
│   ├── schemas/                          # one zod schema per resource
│   ├── help-docs.ts                      # parses docs/README.md into the help center nav
│   ├── skill-templates.ts                # curated skill library
│   ├── connector-templates.ts            # curated connector library
│   ├── scenarios.ts                      # localStorage CRUD for saved chats
│   ├── webhook-store.ts                  # in-memory ring buffer for received webhooks
│   ├── ai/{index, document-generator}.ts # provider abstraction (Claude CLI / OpenAI-compat) + doc → FAQ/skill/connector prompt
│   ├── utils/{cn, csv, agent-config}.ts
│   └── ...
├── types/                                # API response types
├── scripts/
│   ├── openapi-yaml-to-json.mjs          # prebuild — YAML → JSON for Zudoku
│   └── build-deploy-zip.sh               # local ZIP builder for AppSail
├── public/
│   ├── openapi.{yaml,json}               # spec source + generated JSON
│   ├── samples/                          # sample CSVs for bulk import
│   └── vendor/zudoku/                    # self-hosted OpenAPI renderer
├── docs/                                 # user-facing help articles (rendered at /help)
│   ├── README.md                         # source of truth for the help center index + sidebar
│   ├── getting-started/                  # 7 articles: intro → onboard first agent
│   ├── configure/                        # 13 articles: settings, business info, skills, knowledge, connectors, tools, doc-generation
│   ├── ship/                             # 7 articles: chat, scenarios, evals, events, thread control, webhooks, playground
│   ├── advanced/                         # 6 articles: export/import, read-only, dev drawer, AI provider, API reference viewer, theming
│   └── reference/                        # 3 articles: security, deployment, troubleshooting
├── start.sh                              # POSIX-only deploy entrypoint
└── middleware.ts                         # gates /dashboard/*, /home, /api-docs (/, /help, /login are public)
```

## Scripts

- `npm run dev` — start dev server on `:3000`
- `npm run build` — production build (regenerates `openapi.json` via the `prebuild` hook)
- `npm run openapi:build` — regenerate `public/openapi.json` from `public/openapi.yaml`
- `npm run typecheck` — TypeScript check without emit
- `npm run lint`
- `npm run deploy:start` / `sh start.sh` — one-shot install + build + start (used by AppSail)

## Keyboard shortcuts

- `Cmd/Ctrl+Shift+D` — toggle the dev drawer
- `Enter` — submit forms and send test-chat messages
- `Shift+Enter` — newline in the test-chat input

## Security notes

- Access token lives in an encrypted, `httpOnly` cookie. It's never sent to the browser or exposed to client JS.
- Browser can only reach Meta APIs via same-origin `/api/*` routes, so a valid session cookie is required.
- Session secret is 32+ characters (`iron-session`).
- All mutations require a valid session; the middleware gates every non-`/login` route.
- Webhook receiver verifies `X-Hub-Signature-256` against `META_APP_SECRET` with a timing-safe comparison; unverified events are still recorded but flagged.
- Config export strips connector credentials by default; users must opt in to include secrets.

## Extending

- **Add a resource:** create a zod schema in `src/lib/schemas/`, response type in `src/types/`, hooks in `src/lib/client/hooks/`, and pages under `src/app/dashboard/[entityId]/…`. Wire the sidebar in `src/components/shell/Sidebar.tsx`. Add the endpoint to `public/openapi.yaml`; `next build` regenerates `openapi.json`.
- **Add a channel** (Messenger/Instagram/etc.): today onboarding is hardcoded to `whatsapp`. To open it up, restore the channel picker in `src/app/dashboard/[entityId]/onboarding/page.tsx` and adjust the guard that checks for an existing WhatsApp agent.
- **Add a skill/connector template:** append to `src/lib/skill-templates.ts` or `src/lib/connector-templates.ts` — no other wiring needed. New connector-template slugs are automatically included in the document-generator's suggestion catalog.
- **Add a new AI provider:** extend the `AiConfig` discriminated union in `src/lib/ai/index.ts` and add a `run<Provider>` branch. Everything else (settings UI, doc generator, draft-skill) uses `runPrompt(cfg, prompt, system)` so no downstream changes are needed.
- **Support PDF/DOCX in the doc generator:** currently the generator accepts Markdown/text only. To add binary parsing, install `pdf-parse` + `mammoth`, dispatch on file extension inside `src/app/api/ai/generate-from-document/route.ts`, and relax the `accept` list in `src/components/ai-generator/DocumentGenerator.tsx`.
- **Swap the proxy target:** change `META_API_BASE` in `.env.local`. All requests still route through the catch-all.

## License

Internal tool.
