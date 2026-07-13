# Contributing to WhatsApp Business Agent Studio

Thanks for taking the time to look. This is a solo-maintained project, but issues, ideas, and pull requests are welcome. The goal is to keep the studio a friendly, honest wrapper over the Meta Business Agent Platform, with clean UX and no surprises. If you're new here, the fastest way in is to try the built-in demo — no Meta credentials required.

## Where to help

- **Bug reports.** Something behaved unexpectedly, threw an error, or contradicted the docs? Open an issue with the reproduction steps below.
- **Feature ideas.** Especially anything that reduces the number of Postman round-trips a user has to do. Small ideas welcome.
- **Docs fixes.** The `docs/` folder feeds the in-app help center — pull requests that fix a typo, tighten a step, or add a screenshot are just as welcome as code changes.
- **New skill / connector templates.** Append to `src/lib/skill-templates.ts` or `src/lib/connector-templates.ts` — no other wiring needed.
- **New AI providers.** Extend `AiConfig` and add a `run<Provider>` branch in `src/lib/ai/index.ts`.

If you're planning a substantial change (new page, new resource, new external dependency), open an issue first so we can agree on scope before you write code.

## Local setup

Prereqs: Node 20+, npm 10+.

```
git clone https://github.com/v-senthil/whatsapp-business-agent-studio.git
cd whatsapp-business-agent-studio
npm install
cp .env.example .env.local
# edit .env.local — set SESSION_SECRET to `openssl rand -hex 32`
npm run dev
```

Open http://localhost:3000 and either paste a Meta access token or click **Try the demo** to explore with seeded data.

## Working on the code

- `npm run typecheck` — must pass before you push.
- `npm run build` — must succeed. If a first-run `PageNotFoundError: /_document` ever crops up, re-run it — it's a known Next flake and the retry is harmless.
- `npm run dev` — hot-reloads. The dev drawer (Cmd/Ctrl+Shift+D) records every client → server call and can export any of them as cURL.
- No test suite yet; verify UI changes by hand in the browser and mention what you clicked through in the PR description.

Read [`CLAUDE.md`](./CLAUDE.md) before making non-trivial changes. It documents the non-obvious decisions (single Meta proxy, session token safety, form patterns, demo mode routing) that shape the codebase.

## Coding conventions

- TypeScript strict throughout. No `any` unless commented.
- Forms: `react-hook-form` + `zod` resolvers. Schemas colocated in `src/lib/schemas/`.
- Client fetches: use the `fetcher` helper in `src/lib/client/fetcher.ts`. Do not call `fetch` directly.
- Query keys go through `qk` in `src/lib/client/query-keys.ts`. Never inline query keys.
- Semantic Tailwind tokens (`bg-background`, `text-foreground`, `bg-card`, …), not `bg-white` / `text-black`. Dark mode is a first-class variant.
- No em-dashes in user-facing copy or docs. Prefer commas or colons.
- Default to writing no code comments. Only add one when the *why* is non-obvious.

## Walkthrough: add a new resource

The studio ships every resource on the same rhythm. Once you've done one, the rest are copy-paste. Here's the full path for a hypothetical new resource called **Announcements** (a per-agent list of messages the agent can broadcast on demand).

### 1. Schema

Create `src/lib/schemas/announcement.ts`:

```ts
import { z } from "zod";

export const announcementSchema = z.object({
  title: z.string().min(1).max(120),
  body: z.string().min(1).max(5000),
  channel: z.enum(["whatsapp"]).default("whatsapp"),
});

export type AnnouncementInput = z.infer<typeof announcementSchema>;
```

### 2. Response type

Create `src/types/announcement.ts`:

```ts
export interface Announcement {
  id: string;
  title: string;
  body: string;
  channel?: "whatsapp";
  created_at?: number;
}
```

### 3. Hooks

Create `src/lib/client/hooks/useAnnouncements.ts`, mirroring `useSkills.ts`. Wire the same normalize pattern (`Array.isArray(r) ? r : r?.data ?? []`), and invalidate `qk.announcements(entityId)` on every mutation. Add the query key to `src/lib/client/query-keys.ts`.

### 4. Pages

Create the pages under `src/app/dashboard/[entityId]/announcements/`:

- `page.tsx` — list view
- `new/page.tsx` — creation form
- `[announcementId]/page.tsx` — edit view

Use existing skill pages as a template. Every form uses `react-hook-form` + `zod` resolvers, and the mutations come from your new hooks.

### 5. Sidebar

Add an entry to `src/components/shell/Sidebar.tsx` under the appropriate group.

### 6. Demo router

Extend `src/lib/demo/router.ts` to handle the new endpoint. Add fixture data to `src/lib/demo/fixtures.ts` and a `Map<string, Announcement>` to `src/lib/demo/store.ts`. Without this, the demo will 404 on your new page.

### 7. OpenAPI

Add the endpoint to `public/openapi.yaml`. The `prebuild` hook regenerates `public/openapi.json`, which Zudoku reads for the `/api-docs` page.

### 8. Help doc

Write `docs/configure/announcements.md` explaining the resource from a user perspective. Add a line under the right section in `docs/README.md` so the `/help` sidebar picks it up. This is required, not optional; PRs that add a feature without touching the docs are considered incomplete.

### 9. Config export/import

If your resource should promote across phones, add it to `src/lib/utils/agent-config.ts`. If not (per-agent-only, like session settings), skip.

### Rough time budget

For an experienced contributor working on a resource that follows an existing pattern (roughly like Skills), expect:

- 30 minutes for schema, type, hooks.
- 60 to 90 minutes for the three pages.
- 15 minutes for sidebar and demo router.
- 30 minutes for OpenAPI and the help doc.

Total: half a day for a straightforward CRUD resource, more if the resource has custom sub-forms or multi-step flows (see Connectors and Tools for examples of the harder end).

## Pull requests

- Branch from `main`. Keep PRs focused — one feature or fix per PR.
- Every feature change should update the matching help article under `docs/**` in the same PR (add a line to `docs/README.md` if you introduce a new article — the help sidebar reads from there).
- Fill in the PR template (`.github/pull_request_template.md`) — what changed, why, how you tested.
- Commits: imperative present-tense subject, wrap at ~72 chars, explain the *why* in the body if it isn't obvious from the diff.
- Do not force-push shared branches.

## Reporting bugs

Include:
1. Which browser + OS.
2. Whether you were in demo mode or signed in with a real Meta token.
3. Steps to reproduce (the exact clicks / inputs).
4. What you expected vs. what happened.
5. Any error output in the dev drawer or browser console.

Please do **not** paste real access tokens, WABA IDs, or phone numbers into public issues. Redact them.

## Security disclosures

If you find a vulnerability, do **not** file a public issue. Follow [`SECURITY.md`](./SECURITY.md) for private disclosure.

## Code of Conduct

By participating in this project you agree to abide by the [Code of Conduct](./CODE_OF_CONDUCT.md).

## Contact

Questions that don't fit in an issue: senthilpitchappanv@gmail.com.
