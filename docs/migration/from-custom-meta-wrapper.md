# Migrate from your custom Meta wrapper

If your team already built a homegrown app around the Meta Business Agent Platform API, this guide walks through moving to the studio without disrupting live customer traffic.

The good news: because the studio is a proxy over the same underlying Meta API, both your existing app and the studio can point at the same phone number simultaneously. You migrate one surface at a time.

## Assumptions

- Your custom app manages one or more WhatsApp phone numbers via the Meta Business Agent Platform (not just the Cloud API).
- You have your Meta access token, business ID, WABA ID, and phone number IDs.
- You have not written custom logic that Meta itself does not support; if you did, you may need to keep parts of your app running behind the studio.

## Migration order

Move in this order, in separate deploys. Each step is reversible.

1. Stand up the studio as read-only next to your app.
2. Import your existing configuration.
3. Turn on writes for one non-critical resource.
4. Progressively hand off resources.
5. Cut over completely; retire the custom app.

## 1. Stand up the studio in read-only mode

Deploy the studio to a URL you control (Vercel, Fly, AppSail, self-hosted). Do not turn on any writes yet.

- Paste your Meta access token on the sign-in page.
- Enter your business ID, pick your WABA, pick the phone number.
- The dashboard now shows your live agent's current state, read from Meta directly. No changes are being made.
- Toggle **Read-only mode** on from the account menu at the top right, and leave it on.

The studio is now a live viewer for your existing agent. Use this to sanity-check that what your team thinks is configured matches what Meta actually stores.

## 2. Export your existing configuration for reference

Even in read-only mode you can export. Click **Export config** on the entity overview. You get a JSON bundle with everything Meta knows about the agent: settings, business info, skills, knowledge (metadata), allowlist, connectors, tools.

Keep this file. It is your rollback if anything goes wrong.

## 3. Compare against your custom app's source of truth

If your custom app has its own database of "what the agent is supposed to be", diff the export against that database. You will usually find:

- Skills your app thought were there but were deleted manually via Postman.
- Connector credentials that were rotated on Meta's side but not in your app.
- Allowlist entries that drifted between the two sources.

Fix the drift now, while the studio is still read-only. Update your app's database or make the manual corrections through your existing tooling. The goal is that both sources agree.

## 4. Turn off read-only, migrate one non-critical resource

Pick something low-stakes, usually the allowlist or FAQs. Turn off read-only. In the studio:

- Delete one FAQ that you know is stale.
- Add one FAQ that you know is missing.
- Confirm your app sees the change in its next sync (if it syncs), or note that the change is authoritative from the studio going forward.

At this point the studio is the source of truth for that resource, and your custom app should stop writing to it. Update your app to skip writes for the migrated resource.

## 5. Repeat for each resource

Migrate in this order, easiest to hardest:

1. **FAQs** and **Allowlist** (rarely change, no side effects).
2. **Websites** (change occasionally, indexing takes time).
3. **Business info** (single record, low risk).
4. **Files** (upload flow may need re-testing).
5. **Skills** (behavior-visible, take time to validate).
6. **Settings** (rollout, handoff, follow-up, AI audience). Do this last; changing rollout mid-flight can affect live traffic.
7. **Connectors and tools** (rotate credentials only after you have moved to the studio, so both apps do not have the same secret).

At each step: update your custom app to stop writing to the migrated resource, verify the studio owns it end to end, and move on.

## 6. Migrate secondary flows

Your custom app may have surfaces the studio does not cover in the same way, such as:

- **Custom analytics dashboards**: the studio does not have a built-in analytics dashboard yet. Keep yours running.
- **Bespoke webhook handlers**: you can point Meta's webhooks at either your app or the studio's webhook receiver. Pick one; if you keep both, add a header to disambiguate on your infrastructure.
- **Scheduled agent events**: if your app cron-triggers agent events, keep that scheduler. The studio has a manual event submitter but not a scheduler.
- **Bulk mutation scripts**: replace with the studio's CSV import.

## 7. Cut over

Once everything is either migrated or explicitly delegated to a specialized surface, turn your custom app off. If you want a graceful ramp, keep it running with all writes disabled for another week, then remove it.

## Rollback

If something breaks, roll back by:

1. Turn read-only back on in the studio.
2. Turn writes back on in your custom app.
3. Import the JSON bundle you exported in step 2 back into the studio (or use it as a reference to reverse changes manually).

Nothing is deleted from Meta's side by the studio unless you explicitly deleted it. Your custom app can pick back up wherever it left off.

## Common issues

**The studio shows fewer skills than my app thinks exist.** Your app is tracking skills that were deleted from Meta at some point, or created skills that never made it through Meta's write path. The studio shows Meta's current state; that is authoritative.

**Rotation of the Meta access token broke everything.** The studio caches the token in a session cookie; sign out and back in with the new token. Your custom app needs to read the new token from wherever you store it.

**Connector credentials do not match.** Your app may have rotated a connector's API key or OAuth secret. Rotate through the studio's **Rotate credentials** flow rather than editing config directly.

**Two conflicting handoff messages.** If both your app and the studio write to Settings on a cadence, the last writer wins. Pick one; make the other stop writing.

## Checklist

- [ ] Studio deployed, read-only, showing the live agent
- [ ] Config exported as JSON and archived
- [ ] Drift between your app and Meta reconciled
- [ ] Allowlist and FAQs migrated
- [ ] Websites and business info migrated
- [ ] Files migrated
- [ ] Skills migrated and validated
- [ ] Settings migrated
- [ ] Connectors and tools migrated, credentials rotated once through the studio
- [ ] Custom app writes disabled
- [ ] Custom app decommissioned or scoped to analytics/scheduler
