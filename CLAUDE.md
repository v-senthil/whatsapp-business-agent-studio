# WhatsApp Business Agent Studio — Claude notes

A Next.js 15 App Router wrapper over the Meta Business Agent Platform API + Meta Graph API. If you're touching this codebase, read this file before you edit anything. See `README.md` for the user-facing overview.

**Product name:** *WhatsApp Business Agent Studio*. Use exactly that in any UI copy or docs; the repo/package name (`wabizagent`) is a legacy internal identifier and does not need to change.

## Non-obvious things to know first

1. **The browser NEVER sees the access token.** It lives in an iron-session cookie (`wabiz_session`, encrypted with `SESSION_SECRET`, `httpOnly`). All Meta API calls go through same-origin `/api/*` routes that inject the token server-side. Do not add code that reads the token client-side.
2. **One catch-all proxy handles every Meta Agent Platform call.** `src/app/api/meta/[...path]/route.ts` exports `GET`/`POST`/`PUT`/`PATCH`/`DELETE` — all forward to `${META_API_BASE}/{path}`. When adding a new endpoint from the Postman collection, you do NOT need a new route file — just call `metaUrl(entityId, "…")` from a hook.
3. **Graph API discovery is a separate proxy family** (`/api/graph/wabas`, `/api/graph/phones`) because the base host and error shape differ from the Agent Platform.
4. **Every resource has the same 4-file rhythm.** Schema (`src/lib/schemas/<x>.ts`) → response type (`src/types/<x>.ts`) → hook (`src/lib/client/hooks/use<X>.ts`) → page/component. Follow the pattern of any existing resource (Skills is the simplest CRUD reference).
5. **The build sometimes fails on first run** with `PageNotFoundError: /_document`. Just re-run `npm run build`. It's a Next 15.1.4 quirk, not a bug in our code.

## Meta API cheatsheet

Base URLs from `.env.local`:
- `META_API_BASE=https://api.facebook.com` — Business Agent Platform (Postman collection)
- `GRAPH_API_BASE=https://graph.facebook.com/v20.0` — Business Manager discovery

All Agent Platform calls include `X-API-Version: 2.0.0` (added by the proxy). Auth is `Bearer <access_token>`. Everything is scoped by `entity_id` (= phone_number_id).

**Discovery (Graph)**
- `GET /me?fields=id,name` — used only during login to verify the token
- `GET /{business_id}/owned_whatsapp_business_accounts?fields=id,name`
- `GET /{waba_id}/phone_numbers?fields=id,display_phone_number,verified_name,quality_rating`

**Per-phone (Agent Platform)**
- `GET /{entity_id}/agent_eligibility`
- `POST /{entity_id}/agent_onboarding?channel=whatsapp` → `{ agent_id }`
- `GET|PUT /{entity_id}/agent_config/settings?agent_id=…` — rollout, handoff, followup, ai_audience
- `GET|PUT|DELETE /{entity_id}/agent_config/business_info`
- `GET|POST /{entity_id}/agent_config/skills[?agent_id=…]`, `GET|PUT|DELETE /skills/{skill_id}`
- `GET|POST /{entity_id}/agent_config/files` (multipart), `GET|DELETE /files/{file_id}`
- `GET|POST /{entity_id}/agent_config/websites`, `GET|PUT|DELETE /websites/{id}`
- `GET|POST /{entity_id}/agent_config/faq`, `GET|PUT|DELETE /faq/{id}`
- `GET|POST /{entity_id}/agent_config/allowlist`, `DELETE /allowlist/{id}`
- `GET|POST /{entity_id}/agent_connectors`, `GET|PUT|DELETE /agent_connectors/{id}`
- `POST /agent_connectors/{id}/upsertApiKey | upsertOAuth | upsertCertificate` — credential rotation
- `GET /agent_connectors/{id}/logs?start_time=&end_time=&limit=&tool_id=&…`
- `GET|POST /agent_connectors/{id}/tools`, `GET|PUT|DELETE /tools/{tool_id}`, `POST /tools/{id}/run` with `{ input: "<json>" }`
- `GET /{entity_id}/agent-eval/cases`
- `POST /{entity_id}/agent-eval/run?eval_case_ids=…` → `{ job_id }`
- `GET /{entity_id}/agent-eval/run?job_id=…` (poll 3s while RUNNING)
- `GET /{entity_id}/agent-eval/details?eval_ids=…`, `GET /agent-eval/summary?summary_ids=…`
- `POST /{entity_id}/agent_test` with `{ user_msg, conversation_id? }`
- `POST /{entity_id}/agent_event` — trigger partner-defined event, returns `{ status, agent_event_id? }`
- `GET /{entity_id}/agent_event/{agent_event_id}` — poll event status (`request_received`|`processing`|`sent`|`success`|`failed`|`skipped`)
- `POST /business/whatsapp/phone_numbers/{phone_number_id}/thread_control` — thread control (requires `X-API-Version: 1.0.0`, not the default 2.0.0)

## Feature-by-feature map

### `/login` — `src/app/login/page.tsx`
Paste access token → `POST /api/session` → verifies against Graph `/me` → session saved. On success, redirects to `/home`. Everything else lives behind the middleware in `middleware.ts` matching `/dashboard/*` and `/home`.

### `/home` — `src/app/home/page.tsx`
Server component; reads `lastBusinessId` from session and hands to `HomeContent` (`src/components/home/`). The user pastes a business ID via `BusinessIdInput`; on submit it PATCHes the session and triggers `WabaList` which chains `useWabas(businessId)` → per-WABA `usePhones(wabaId)`. Clicking a phone routes to `/dashboard/[entityId]` and PATCHes `lastEntityId`.

Note: `/me/businesses` discovery is intentionally NOT called — the user chose to input a business ID rather than list all. If you re-add auto-discovery, restore `src/app/api/graph/businesses/route.ts` and `useBusinesses` hook.

### `/dashboard/[entityId]` — overview
Shows `agent_eligibility`, lists configured agents from `agent_config/settings`, and renders **`<OnboardingChecklist>`** (`src/components/overview/OnboardingChecklist.tsx`) at the top. When a WhatsApp agent already exists, footer CTA is "Configure agent"; otherwise "Onboard WhatsApp agent". A phone can host at most one agent per channel — we currently allow only `whatsapp`. The overview header also exposes **`<AgentConfigActions>`** (Export/Import config JSON).

### Onboarding checklist
`src/components/overview/OnboardingChecklist.tsx`. 6 steps derived live from the existing hooks — no new API calls: eligibility (`useEligibility`), agent onboarded (`useSettings` where a WhatsApp entry exists), business info filled (`useBusinessInfo` — any of description/email/return_policy), at least one skill (`useSkills.length > 0`), at least one connector (`useConnectors.length > 0`, marked optional), rollout enabled (`useSettings` rollout.enabled). Progress bar, next-actionable step highlighted with a right arrow, auto-hides once all 6 are done. Do NOT add API-hitting logic to this component — every signal must come from a hook that some other page already runs, so we don't inflate the network graph.

### `/dashboard/[entityId]/onboarding`
Reads `agent_config/settings` first. If any entry has `channel == "whatsapp"`, renders the "already onboarded" card and links to Settings/Test. Otherwise shows an Onboard button that POSTs `agent_onboarding?channel=whatsapp`.

### Settings
`src/app/dashboard/[entityId]/settings/page.tsx`. Sub-cards for rollout, handoff, follow-up, ai_audience. Uses `pickFirst()` to unwrap the array returned by GET (settings endpoint returns `AgentSettings[]`, one per channel). `ai_audience` values are exactly `"EVERYONE" | "ALLOWLISTED_ONLY"` per the Meta doc — do NOT add other values.

### Business info
`src/app/dashboard/[entityId]/business-info/page.tsx`. Splits into `<BusinessInfoLoading>` and `<BusinessInfoForm>` — the form only mounts once the initial GET resolves, so `useForm` gets real `defaultValues` on first render (no empty-form flash).

### Skills
Cards + monospace textareas. Full CRUD across `/skills`, `/skills/new`, `/skills/[skillId]`. Header exposes three additional actions:
- **Export CSV** — `<ExportCsvButton>` streams the current list as `skills.csv`.
- **Import CSV** — `<BulkImportDialog>` with `skillSchema`; sample at `/samples/skills.csv`.
- **Templates** — `<SkillTemplatesDialog>` (`src/lib/skill-templates.ts`) picks from 10 curated templates. Dedupes against existing skill titles (shows "Added" badge).

### Knowledge (files, websites, FAQs, allowlist)
Tabs in `src/app/dashboard/[entityId]/knowledge/layout.tsx`.
- **Files** — `<FileUploader>` uses `XMLHttpRequest` (not `fetch`) because fetch has no upload-progress in browsers. Multipart passes straight through the catch-all proxy — do not modify the Content-Type header, the boundary must survive.
- **Websites** — URL CRUD. Export/Import CSV in the header.
- **FAQs** — Note the `<Fragment key={f.id}>` for expandable rows. Do not switch to `<>` — Fragments only accept keys via the explicit form. Export/Import CSV; the import path uses `faqRowSchema` which parses the `metadata` column's JSON string during validation so bad JSON is caught in the preview stage.
- **Allowlist** — list of `consumer_phone_number` entries (E.164). Do NOT use a generic `value` field — the Meta API expects exactly `consumer_phone_number`. When AI audience is `ALLOWLISTED_ONLY`, only these consumers receive agent responses. Export/Import CSV.

### Bulk CSV import / export
`src/components/common/BulkImportDialog.tsx` is a generic 4-stage flow (**pick → preview → importing → done**). Parameters: `title`, `columns`, `sampleHref`, `rowSchema` (zod), and a `submit(row)` async function. Uses `papaparse` for parsing (handles multi-line quoted fields correctly). Per-row validation happens client-side against the same zod schema the single-item form uses, so nothing invalid ever reaches the API. Invalid rows are shown in a table so users can fix and re-upload.

`src/components/common/ExportCsvButton.tsx` — thin button that unparses the current list with `papaparse` and triggers a browser download via `downloadText`.

Sample CSVs live at `/public/samples/{skills,faqs,allowlist}.csv` — realistic multi-row examples with proper escaping (quoted multi-line skill bodies, JSON metadata in FAQs).

### Skill templates + Connector templates
- `src/lib/skill-templates.ts` — 10 curated skills across 5 categories (Onboarding, Support, Sales, Escalation, Utility). Add more by appending to the array — no other wiring needed.
- `src/lib/connector-templates.ts` — 8 prefilled connector shells (Shopify, Stripe, Zendesk, HubSpot, Salesforce, Twilio, SendGrid, Slack). Each has a proper `ConnectorInput` with the right `auth_type` and empty-value scaffolds. Picker routes to `/connectors/new?template=<slug>` which the New page reads via `useSearchParams`.

### Agent config JSON export / import
`src/lib/utils/agent-config.ts` + `src/components/config/AgentConfigActions.tsx`. Buttons on the entity overview header.

- **Export** parallel-fetches settings, business info, skills, websites, FAQs, allowlist, files (metadata only — binaries not portable), and every connector + its tools. Bundles into a versioned JSON. Credentials are stripped by default (`api_key.headers[*].value`, `oauth2.client_secret`, etc.); a checkbox opts back in with a red warning banner. Filename: `agent-config-{entityId}-{yyyy-mm-dd}.json`.
- **Import** parses the JSON, validates the shape via `isValidBundle`, shows a preview of counts per resource, then runs `runImport(entityId, bundle, onProgress)` — a sequential mutation plan with a live progress callback (business info → skills → websites → FAQs → allowlist → connectors → tools). If credentials weren't included, an amber alert warns that connectors will be created but need their auth rotated afterwards.

### Connectors
`src/app/dashboard/[entityId]/connectors/…`. The complex UI. Auth is a **zod discriminated union** on `auth_type`. `ConnectorForm` switches sub-forms via `RadioGroup` + `React.useRef` stash so toggling auth types doesn't discard prior data. The list header has a **From template** button that opens `<ConnectorTemplatesDialog>` (see above).

Credential rotation lives at `/connectors/[connectorId]/auth` and posts to different endpoints depending on `auth_type`:
- `API_KEY` → `upsertApiKey`
- `OAUTH2_CLIENT_CREDENTIALS` → `upsertOAuth`
- `MTLS` → `upsertCertificate` (PEM textareas)

### Connector health card
`src/components/connectors/ConnectorHealth.tsx`, rendered on the connector detail page. Calls `/logs?include_stats=true&summary_only=true&top_n=5` over a 24-hour lookback. Renders four stat tiles (success rate colored by threshold, calls, p95 latency, failures) and the top-5 failure patterns. Zero new server surface — uses the existing `useConnectorLogs` hook. If Meta ever changes the `stats` shape, update `src/types/connector-logs.ts`.

### Tools (inside a connector)
Most involved surface in the app. `RequestDefinitionEditor` splits into HTTP method + path row, then Tabs for path/query/headers/body — each rendering `<ParamListEditor>` (a `useFieldArray` of `{ name, type, description, items? }`).

`RequiredParamsPicker` uses `useWatch` on body params so its options list is always live; it also runs a `useEffect` that prunes stale entries from `required` when a param renames or deletes.

`toolFromApi` / `toolToApi` (in `src/components/tools/ToolForm.tsx`) convert between the Meta API's record shape (`{ [name]: { type, description } }`) and the form's array shape (`[{ name, type, description }]`). If you change the schema, keep these in sync.

### Evals
`src/app/dashboard/[entityId]/evals/page.tsx` lists cases grouped by first category; `<Checkbox>` per case; POST `agent-eval/run?eval_case_ids=…` → routes to `/evals/runs/[jobId]`. The run page polls `agent-eval/run?job_id=…` every 3s via `useQuery({ refetchInterval })` while status is `PENDING`/`RUNNING`, then fetches details + summary.

### Test chat — `src/components/test/ChatShell.tsx`
Container is `flex min-h-0 flex-1 flex-col`; only the inner message list scrolls. Layout is tightly coupled to `AppShell`: root wrapper is `flex h-screen overflow-hidden`, `main` is `flex-1 overflow-y-auto`. Do NOT change `AppShell` without re-verifying the chat page. The typing indicator (`<TypingDots>`) is bound to `send.isPending`, not to a message entry — this keeps state minimal.

`conversation_id` is sticky (set from the first response). "New conversation" resets both `conversationId` and `messages`. A **Save as scenario** button beside the "New conversation" button persists the current conversation (see below).

### Scenarios — save + replay
- `src/lib/scenarios.ts` — localStorage-backed CRUD keyed by `wabiz.scenarios.{entityId}`.
- `<SaveScenarioButton>` in `ChatShell` opens a small dialog to name a conversation, then writes it to storage.
- `src/app/dashboard/[entityId]/scenarios/page.tsx` — lists saved scenarios (name, notes, turn counts, timestamp) with Replay/Delete.
- `<ScenarioReplayDialog>` (`src/components/scenarios/`) is the payoff: reruns each user turn through `agent_test` (threading a shared `conversation_id`), then renders **saved vs. current** agent responses side-by-side with a per-turn `match / differs / error` badge. Trivial regression harness against the live Meta endpoint — no Meta eval API required.

### Agent events
`src/app/dashboard/[entityId]/events/page.tsx`. Submits `POST /agent_event` with `{ to, event: { type, description, payload } }`. `to` is E.164; `payload` must be valid JSON if provided (validated client-side before submit). Successful submissions are tracked in `localStorage` (`wabiz.events.{entityId}`) and rendered as rows via `AgentEventRow`, which uses `useAgentEventStatus` with 3s polling while status is `request_received` or `processing`. There is NO list-events endpoint — the client-side list is the only surface.

### Thread control
Small form posting to `/business/whatsapp/phone_numbers/{entity_id}/thread_control`. Path is fixed under `business/whatsapp/…`, not per-entity — the hook builds the URL manually rather than via `metaUrl()`. Requires `X-API-Version: 1.0.0` (Meta doc explicitly), so the hook passes `headers: { "X-API-Version": "1.0.0" }` to override the proxy's default. `to` is required; `recipient` is optional per the doc ("accepted but not yet wired").

### Webhook receiver
- `src/app/api/webhooks/meta/route.ts` — `GET` handles Meta's verification challenge (checks `META_WEBHOOK_VERIFY_TOKEN`); `POST` reads the raw body, verifies `X-Hub-Signature-256` HMAC against `META_APP_SECRET` with `crypto.timingSafeEqual`, parses JSON, records with a `signature_ok` boolean. Always returns 200 so Meta doesn't retry-forever when signing isn't configured (useful for local dev).
- `src/lib/webhook-store.ts` — module-scoped ring buffer attached to `globalThis` so it survives Next hot-reload. Cold-start-wipes-state on serverless is called out in the UI.
- `src/app/api/webhooks/stream/route.ts` — SSE endpoint; snapshot on connect, live push, 25s heartbeats. Session-gated.
- `src/app/dashboard/[entityId]/webhooks/page.tsx` — live-updating card list with a **filter bar** (text search across summary/headers/body, plus signed/unverified segmented control) and expand-for-detail. `.env.example` has the two optional env vars.

### API playground
`src/app/dashboard/[entityId]/playground/page.tsx`. Free-form request builder scoped to the current phone:
- Method select + relative path input (prefixed with `/api/meta/{entityId}/`) + optional query string + JSON body.
- **Quick calls** row prefills the form from a static list (Eligibility, List settings, Business info, List skills, List connectors, Eval cases, Test message).
- Response viewer with a JsonViewer tab and a raw-text tab; status + duration badges.
- Uses the client `fetcher`, so every playground call also lands in the dev drawer with a Copy-as-cURL affordance.
- Sidebar entry under "Advanced".

### API reference (`/api-docs`)
`src/app/api-docs/page.tsx` (server, session-gated) → `ApiDocsClient.tsx` (client) → `<iframe src="/vendor/zudoku/docs.html">`. Zudoku runs **in the iframe**, not directly inside Next's React tree. Everything else in `public/vendor/zudoku/` is Zudoku's self-hosted standalone bundle (`main.js` loader + ~180 chunks + `zudoku.css`).

**Why iframe?** Zudoku's standalone bundle assumes it owns the page: it sets `basename: window.location.pathname`, injects its own React root, and reads `<title>` for the site header. When we tried to embed it directly under a Next-rendered page, it stalled in a mobile-collapsed layout (empty content area, "Menu" button only) because the parent layout + basename/route mismatch broke its router. Iframing gives Zudoku a clean top-level document (`/vendor/zudoku/docs.html`) — its basename is that path, the URL is a match, and there are no parent styles fighting it.

**Theme sync.** `ApiDocsClient.tsx` uses `useTheme()` from `next-themes` and, on load and on theme change, sets/removes the `dark` class on the iframe document's `<html>`. Same-origin so this works. Zudoku's built-in dark-mode CSS then flips.

**Absolute URL trick.** Zudoku's loader `Rp` (`createServer-*.js`) treats `data-api-url` as a URL only if it contains `"://"` — a relative path like `/openapi.json` gets parsed as a YAML literal and throws `GraphQLError: Unsupported schema input`. Inside `docs.html`, a synchronous `<script>` runs before the module script and rewrites the div's `data-api-url` to `window.location.origin + "/openapi.json"`. Do NOT change back to a relative URL.

**OpenAPI spec pipeline.** `public/openapi.yaml` is the human-editable source of truth. Zudoku's fetcher accepts only JSON, so `public/openapi.json` is a generated artifact. The `prebuild` npm hook (and the explicit `npm run openapi:build`) regenerates JSON from YAML via `scripts/openapi-yaml-to-json.mjs`. Both files are committed so `npm run dev` without a prior build still serves valid JSON.

**Self-hosting.** Zudoku's `main.js` imports ~180 chunk files. All vendored under `public/vendor/zudoku/`. To upgrade Zudoku, re-download from `https://cdn.zudoku.dev/latest/main.js` and recursively fetch every relative `./*.js` import (a `zsh` loop that greps for `"./…\\.js"` and curls works — see git history).

Sidebar link sits at the bottom, below all resource groups.

### Dev drawer + Copy-as-cURL
- `src/lib/client/api-log.ts` — module-level ring buffer (50 entries) with a subscribe/notify pattern. Not persisted.
- `src/lib/client/fetcher.ts` is instrumented — every call records `{ method, url, requestHeaders, requestBody, ts }` on start and updates with `{ duration_ms, status, ok, responseBody, error }` on completion (or on network error).
- `src/components/dev/DevDrawer.tsx` — slide-in panel with a call list + detail pane. Opens via a floating bottom-right button, `Cmd/Ctrl+Shift+D`, or `?debug=1`.
- **Copy as cURL** in the detail pane synthesizes a runnable command from the recorded call (`toCurl` in `api-log.ts`). Omits the Cookie header so the copied command doesn't leak the session cookie.
- Mounted at the root layout via `<DevDrawerMount>` (inside a Suspense boundary because `DevDrawer` uses `useSearchParams`).

### Read-only mode
Session field `readOnly?: boolean`. `PATCH /api/session` accepts it; `GET /api/session/me` returns it.
- `src/components/providers/ReadOnlySync.tsx` — reads it via `useSession` and pushes into a module-level flag in `fetcher.ts` (`setReadOnlyMode`).
- `src/lib/client/fetcher.ts` — before any non-GET/HEAD/OPTIONS request against `/api/meta/*`, throws `ReadOnlyError`. Guards are client-only; the server is not the enforcement point.
- `<ReadOnlyBanner>` between `Header` and `Breadcrumbs` in `AppShell` shows the state, with a one-click "Turn off".
- Toggle in the account dropdown in `Header.tsx`.
- When mounting new mutation flows, no per-hook action needed — the fetcher intercepts.

## Conventions

- **Every form** uses `react-hook-form` + `@hookform/resolvers/zod`. Schemas colocated in `src/lib/schemas/`. Types inferred via `z.infer<typeof …>`.
- **Every list hook** normalizes the API response — Meta returns bare arrays sometimes and `{ data: [...] }` other times. Grep for `toArray` in `src/lib/client/hooks/` for the pattern.
- **Every mutation** invalidates its list key and, where applicable, the parent (e.g. creating a tool invalidates `qk.tools(entityId, connectorId)` and `qk.connector(...)`).
- **Query keys** are centralized in `src/lib/client/query-keys.ts`. Never inline `["entity", …]` — always use `qk.something(…)`.
- **Errors** flow through `MetaApiError` (`src/lib/api/errors.ts`) with `{ title, detail, status }` shape. Client renders via `<ErrorState error={…} />`.
- **On 401**, the client `fetcher` dispatches a `wabiz:unauthenticated` window event; `QueryProvider` listens and redirects to `/login`. Preserve this if you touch fetcher/provider.
- **No emojis in code or docs.** No comments except when the *why* is non-obvious.
- **Dark mode.** `next-themes` is wired in `src/components/providers/ThemeProvider.tsx` (`attribute="class"`, `enableSystem`). Tailwind is `darkMode: ["class"]`. All colors go through CSS vars in `src/app/globals.css` (`--background`, `--foreground`, `--card`, `--muted`, etc. — the `.dark` block flips them). Do NOT use raw `bg-white`/`text-black` in feature code — use semantic tokens (`bg-background`, `text-foreground`, `bg-card`, `text-muted-foreground`). If you need a status color (emerald/amber/red), pair with a `dark:` variant. `ThemeToggle` (`src/components/common/ThemeToggle.tsx`) offers Light/Dark/System; mounted in dashboard header, home header, and login page.

## Watch out

- **`form.reset()` with no args** + a zod `.optional().default("")` can flash `undefined` → `""`, triggering React's "uncontrolled → controlled" warning. Always call `form.reset(EMPTY_OBJECT)` with an explicit object. See `faqs/page.tsx` for the pattern.
- **`<Fragment key>` not `<>`.** React fragments only accept keys via the explicit form. FAQs page hits this.
- **Multipart uploads** must not have their headers rewritten. The proxy explicitly avoids setting `Content-Type` so the browser's multipart boundary survives.
- **Streaming responses** need the `duplex: "half"` flag on the upstream `fetch` for POST/PUT with a body. See `metaFetch` in `src/lib/api/meta-client.ts`.
- **`request_definition.body.params`** are stored as records in the API but edited as arrays in the form. `toolFromApi` / `toolToApi` bridge that.
- The `RequiredParamsPicker` `useEffect` prunes stale entries — do not remove it; without it, renaming a param leaves a dangling name in `required`.
- **AppShell layout has been tuned for the chat page.** `h-screen overflow-hidden` at the root; only `main` scrolls. Changing this affects every page.

## Scripts

- `npm run dev` — dev on `:3000`
- `npm run build` — production build (re-run if you see the transient `_document` error). `prebuild` hook auto-regenerates `public/openapi.json` from the YAML.
- `npm run openapi:build` — regenerate `openapi.json` manually.
- `npm run typecheck` — `tsc --noEmit`
- `npm run deploy:start` / `sh start.sh` — one-shot install + build + start for AppSail.
- `sh scripts/build-deploy-zip.sh` — build the pre-installed, pre-built ZIP for AppSail.

## Deployment

`start.sh` is POSIX-only (`/bin/sh`, no `pipefail`) because AppSail's shell is `dash`. It:
1. Skips install if `node_modules/.bin/next` exists.
2. Skips build if `.next/BUILD_ID` exists.
3. `exec`s `next start -p $PORT -H 0.0.0.0`.

`scripts/build-deploy-zip.sh` pre-builds the artifact locally so the deployed script does ~2s of work (well inside AppSail's ~15-30s startup timeout). Ship a source-only ZIP and AppSail will kill the process mid-install.

## Files worth reading before deep changes

- `src/app/api/meta/[...path]/route.ts` — the single hinge every write flows through
- `src/lib/session.ts` — session shape (add fields here, add to PATCH schema too)
- `src/lib/schemas/connector.ts` — the discriminated-union template for auth types
- `src/components/tools/RequestDefinitionEditor.tsx` — the most complex UI
- `src/lib/client/query-keys.ts` — the source of truth for cache invalidation
- `src/lib/client/fetcher.ts` — client fetch, read-only guard, dev-drawer instrumentation, MetaApiError
- `src/lib/client/api-log.ts` — dev drawer ring buffer and cURL export

## Plan file

Original design plan for the whole app is at `/Users/senthil-11424/.claude/plans/mellow-growing-grove.md` — good context if you need to understand why a particular choice was made.
