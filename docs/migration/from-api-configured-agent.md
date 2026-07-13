# Migrate an agent configured via the API

If your existing agent was set up entirely through curl or Postman against the Meta Business Agent Platform, this guide walks through adopting it in the studio.

There is nothing to import. The studio reads Meta's state directly. Once you sign in with your access token and pick the right phone number, everything your agent has (skills, knowledge, connectors, tools, settings) shows up in the UI.

## Assumptions

- You have a Meta access token, business ID, WABA ID, and phone number ID.
- Your agent already exists in Meta and is either live or ready to go live.
- You do not have a custom application in front of Meta; you have been calling Meta's API directly.

## 1. Sign in and pick the phone number

- Deploy the studio (see [Deployment](../reference/deployment.md)) or use the hosted URL.
- Paste your access token on **Sign in**.
- Enter your **Business ID**, pick the **WABA**, then click the phone number.
- You land on the phone's overview page.

## 2. Confirm the studio sees what you expect

At the top of the overview page, you should see:

- An **Eligibility** panel confirming the phone is eligible for the Beta.
- A card showing your existing WhatsApp agent's `agent_id`.
- The **Onboarding checklist** with most items already checked.

If the eligibility panel is red or the checklist shows fewer completed items than you expect, either the terms and conditions were never accepted (see the enable-URL in the amber banner) or the token you pasted does not have permission to read this agent.

## 3. Walk the sidebar top to bottom

Open each section in the sidebar and confirm the data matches what you configured via API:

- **Settings**: rollout, handoff message, follow-up interval, AI audience.
- **Business info**: description, contact, payment method, return policy, purchase info, delivery.
- **Skills**: each skill's title, description, body, channel.
- **Knowledge > Files**: file names, sizes, status.
- **Knowledge > Websites**: URLs, indexing status.
- **Knowledge > FAQs**: questions, answers, any metadata.
- **Knowledge > Allowlist**: E.164 phone numbers.
- **Connectors**: each connector's name, base URL, auth type. Credentials will show as configured but not visible (that is by design).
- Open one connector and check its **Tools**: paths, methods, params, required fields.

Anything missing or wrong indicates drift between your last API call and Meta's stored state. Fix in the studio going forward.

## 4. Export a baseline

Click **Export config** on the overview header, uncheck **Include credentials**, and save the JSON somewhere version-controlled. This is your rollback point and your reference for future migrations.

## 5. Stop calling the API directly

At this point the studio is your source of truth. Retire any scripts, Postman collections, or teammates' notebooks that write to Meta directly. Two writers is where drift starts.

Exceptions where you might legitimately keep API access:

- **Bulk operations at scale**. The studio's CSV import handles hundreds of rows well. For tens of thousands, you may want to script it. Import through the studio anyway if you can; the fetcher records every call so you can audit.
- **Scheduled agent events**. The studio's Event page is manual. If you cron-fire events, keep the cron.
- **Custom analytics**. The studio does not have a built-in analytics dashboard yet. Read from Meta's logs directly if you already have that pipeline.

## 6. Adopt the workflows you did not have before

Now that the agent is in the studio, use the features that were painful over raw API:

- **Test chat** with sticky conversation ID lets you probe a skill without spinning up Postman requests.
- **Save as scenario** captures a working conversation and replays it against future edits.
- **Evals** run pre-seeded cases against your agent and score them.
- **Webhooks** page shows a live stream of incoming Meta events with signature verification badges.
- **Dev drawer** (Cmd/Ctrl+Shift+D) records every studio-to-Meta call so you can copy-as-cURL and paste into your notebook when you want to inspect a specific request.

## 7. Set up backups

The studio does not automatically back up your config to your own storage. Schedule a weekly export:

- Manually: click **Export config** and commit the JSON to a private repo.
- Programmatically: use the API playground or your existing scripting to hit the same endpoints; the studio's config export is not a special endpoint, it is a sequence of standard reads.

## Common issues

**The token I use in the studio does not work in Postman anymore.** Iron-session encrypts the cookie but the token itself is unchanged. Your API access is not affected by signing in to the studio. If Postman broke, your token expired independently.

**"Onboarded" but the checklist says "Onboard WhatsApp agent" is not done.** The studio checks eligibility, an existing settings entry for the WhatsApp channel, and at least one skill. If your agent lives on a different channel (Instagram, Messenger, etc.), the WhatsApp checklist will not show green. This is a UI hint, not a real problem.

**Connector shows "Disconnected" even though it works.** The studio pings the connector's base URL at load time; some vendors reject unauthenticated pings to root even with valid credentials. Run any tool on the connector to confirm auth works.

**Business info fields are all empty.** You never set them via the API. Fill them in now; the agent uses these in customer replies. Empty business info leads to hallucinated policies.

## Checklist

- [ ] Signed in with existing access token
- [ ] Correct business, WABA, and phone number selected
- [ ] Eligibility green
- [ ] Every sidebar section reviewed for accuracy
- [ ] Config exported and stored
- [ ] Direct API scripts retired (or explicitly scoped to bulk/scheduling/analytics)
- [ ] Test chat used to probe at least one skill
- [ ] Save-as-scenario used to capture at least one working conversation
- [ ] Backup schedule set
