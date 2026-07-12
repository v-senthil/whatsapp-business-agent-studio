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
- `npm run build` — must succeed. If the first run fails with `PageNotFoundError: /_document`, that's a Next 15.1.4 flake — re-run it.
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
