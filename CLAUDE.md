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
Shows `agent_eligibility` and lists configured agents from `agent_config/settings`. When a WhatsApp agent already exists, footer CTA is "Configure agent"; otherwise "Onboard WhatsApp agent". A phone can host at most one agent per channel — we currently allow only `whatsapp`.

### `/dashboard/[entityId]/onboarding`
Reads `agent_config/settings` first. If any entry has `channel == "whatsapp"`, renders the "already onboarded" card and links to Settings/Test. Otherwise shows an Onboard button that POSTs `agent_onboarding?channel=whatsapp`.

### Settings
`src/app/dashboard/[entityId]/settings/page.tsx`. Sub-cards for rollout, handoff, follow-up, ai_audience. Uses `pickFirst()` to unwrap the array returned by GET (settings endpoint returns `AgentSettings[]`, one per channel). `ai_audience` values are exactly `"EVERYONE" | "ALLOWLISTED_ONLY"` per the Meta doc — do NOT add other values.

### Business info
`src/app/dashboard/[entityId]/business-info/page.tsx`. Splits into `<BusinessInfoLoading>` and `<BusinessInfoForm>` — the form only mounts once the initial GET resolves, so `useForm` gets real `defaultValues` on first render (no empty-form flash).

### Skills
Cards + monospace textareas. Full CRUD across `/skills`, `/skills/new`, `/skills/[skillId]`.

### Knowledge (files, websites, FAQs, allowlist)
Tabs in `src/app/dashboard/[entityId]/knowledge/layout.tsx`.
- **Files** — `<FileUploader>` uses `XMLHttpRequest` (not `fetch`) because fetch has no upload-progress in browsers. Multipart passes straight through the catch-all proxy — do not modify the Content-Type header, the boundary must survive.
- **Websites** — plain URL CRUD.
- **FAQs** — Note the `<Fragment key={f.id}>` for expandable rows. Do not switch to `<>` — Fragments only accept keys via the explicit form.
- **Allowlist** — list of `consumer_phone_number` entries (E.164). Do NOT use a generic `value` field — the Meta API expects exactly `consumer_phone_number`. When AI audience is `ALLOWLISTED_ONLY`, only these consumers receive agent responses.

### Connectors
`src/app/dashboard/[entityId]/connectors/…`. The complex UI. Auth is a **zod discriminated union** on `auth_type`. `ConnectorForm` switches sub-forms via `RadioGroup` + `React.useRef` stash so toggling auth types doesn't discard prior data.

Credential rotation lives at `/connectors/[connectorId]/auth` and posts to different endpoints depending on `auth_type`:
- `API_KEY` → `upsertApiKey`
- `OAUTH2_CLIENT_CREDENTIALS` → `upsertOAuth`
- `MTLS` → `upsertCertificate` (PEM textareas)

### Tools (inside a connector)
Most involved surface in the app. `RequestDefinitionEditor` splits into HTTP method + path row, then Tabs for path/query/headers/body — each rendering `<ParamListEditor>` (a `useFieldArray` of `{ name, type, description, items? }`).

`RequiredParamsPicker` uses `useWatch` on body params so its options list is always live; it also runs a `useEffect` that prunes stale entries from `required` when a param renames or deletes.

`toolFromApi` / `toolToApi` (in `src/components/tools/ToolForm.tsx`) convert between the Meta API's record shape (`{ [name]: { type, description } }`) and the form's array shape (`[{ name, type, description }]`). If you change the schema, keep these in sync.

### Evals
`src/app/dashboard/[entityId]/evals/page.tsx` lists cases grouped by first category; `<Checkbox>` per case; POST `agent-eval/run?eval_case_ids=…` → routes to `/evals/runs/[jobId]`. The run page polls `agent-eval/run?job_id=…` every 3s via `useQuery({ refetchInterval })` while status is `PENDING`/`RUNNING`, then fetches details + summary.

### Test chat — `src/components/test/ChatShell.tsx`
Container is `flex min-h-0 flex-1 flex-col`; only the inner message list scrolls. Layout is tightly coupled to `AppShell`: root wrapper is `flex h-screen overflow-hidden`, `main` is `flex-1 overflow-y-auto`. Do NOT change `AppShell` without re-verifying the chat page. The typing indicator (`<TypingDots>`) is bound to `send.isPending`, not to a message entry — this keeps state minimal.

`conversation_id` is sticky (set from the first response). "New conversation" resets both `conversationId` and `messages`.

### Agent events
`src/app/dashboard/[entityId]/events/page.tsx`. Submits `POST /agent_event` with `{ to, event: { type, description, payload } }`. `to` is E.164; `payload` must be valid JSON if provided (validated client-side before submit). Successful submissions are tracked in `localStorage` (`wabiz.events.{entityId}`) and rendered as rows via `AgentEventRow`, which uses `useAgentEventStatus` with 3s polling while status is `request_received` or `processing`. There is NO list-events endpoint — the client-side list is the only surface.

### Thread control
Small form posting to `/business/whatsapp/phone_numbers/{entity_id}/thread_control`. Path is fixed under `business/whatsapp/…`, not per-entity — the hook builds the URL manually rather than via `metaUrl()`. Requires `X-API-Version: 1.0.0` (Meta doc explicitly), so the hook passes `headers: { "X-API-Version": "1.0.0" }` to override the proxy's default. `to` is required; `recipient` is optional per the doc ("accepted but not yet wired").

### API reference (`/api-docs`)
`src/app/api-docs/page.tsx` (server) + `ApiDocsClient.tsx` (client). Renders `public/openapi.yaml` via **Zudoku's standalone build**, self-hosted at `public/vendor/zudoku/`. The client just drops a `<script type="module" src="/vendor/zudoku/main.js">` + `<link rel="stylesheet" href="/vendor/zudoku/zudoku.css">` and mounts a `<div data-api-url="/openapi.yaml" />`. Zudoku bootstraps itself into that div at load time.

Why Zudoku and not Stoplight Elements: (1) dark mode is native — no CSS class hacks; (2) modern typography and layout; (3) Stoplight's React build is broken on React 19 (calls the removed `ReactDOM.render`) and we were only using their web-components fallback, which is a dead-end. Zudoku's standalone bundle is React-19-safe because it carries its own React runtime.

Self-hosting details: Zudoku's `main.js` is a tiny loader that imports ~180 chunk files. They're all vendored under `public/vendor/zudoku/`. If you upgrade Zudoku, re-download from `https://cdn.zudoku.dev/latest/main.js` and recursively fetch every relative `./*.js` import — a `zsh` loop that greps for `"./…\\.js"` and downloads works (see git history for the exact script).

`openapi.yaml` covers every Meta Business Agent Platform endpoint — keep it in sync when adding new endpoints (path, method, `operationId`, request/response schemas). Sidebar link sits at the bottom, below all resource groups.

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
- `npm run build` — production build (re-run if you see the transient `_document` error)
- `npm run typecheck` — `tsc --noEmit`

## Files worth reading before deep changes

- `src/app/api/meta/[...path]/route.ts` — the single hinge every write flows through
- `src/lib/session.ts` — session shape (add fields here, add to PATCH schema too)
- `src/lib/schemas/connector.ts` — the discriminated-union template for auth types
- `src/components/tools/RequestDefinitionEditor.tsx` — the most complex UI
- `src/lib/client/query-keys.ts` — the source of truth for cache invalidation

## Plan file

Original design plan for the whole app is at `/Users/senthil-11424/.claude/plans/mellow-growing-grove.md` — good context if you need to understand why a particular choice was made.
