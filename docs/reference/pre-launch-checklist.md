# Pre-launch checklist

Before you flip rollout to 100% on a live phone number, walk through this list. Most production issues trace back to skipping one of these steps.

The onboarding checklist on the entity overview covers the setup half of this list (eligibility, agent onboarded, business info, first skill, first connector, rollout). This document covers the operational half: what has to be true beyond having built things.

## 1. Configuration

- [ ] **Every skill has been tested in the test chat** with at least three inputs each: a clear trigger, a clear non-trigger, and an edge case. If a skill has never been tested, it will not work in production.
- [ ] **Skill collisions have been reviewed.** Open the Skills page and read the collision banner if one is showing. Either merge the colliding skills or narrow one of the descriptions.
- [ ] **Every tool has been run manually with a real payload.** The Run panel on the tool detail page. If a tool has never made a live call, the first production call will surface the config error to a customer.
- [ ] **Connector credentials are real, not placeholder.** Open each connector's Rotate credentials page and confirm the last-rotated timestamp is recent. Empty API keys or placeholder OAuth secrets will make the agent silently fail.
- [ ] **Business info is complete.** Description, contact email, and return policy at minimum. The model reads business info on every turn, and empty fields hurt output quality.
- [ ] **At least one FAQ or website is registered.** An agent with zero knowledge answers every question with "I do not know."

## 2. Handoff and audience

- [ ] **Handoff is configured.** Open Settings and confirm the handoff phone number or Meta thread control target is set. If handoff is off, the fallback in every skill body has nowhere to route to.
- [ ] **Follow-up interval is set.** Settings > Follow-up. Users who go silent get a nudge after N minutes. If unset, silent conversations stay open forever.
- [ ] **AI audience is intentional.** `EVERYONE` means every user who messages your business talks to the agent. `ALLOWLISTED_ONLY` means only phone numbers in your allowlist do. Verify which you have set. For a first launch, `ALLOWLISTED_ONLY` with a handful of internal testers is the safest starting point.

## 3. Testing

- [ ] **Scenarios are recorded for at least five happy-path conversations.** Save them in the Test chat. When you change a skill or connector later, replay them to catch regressions.
- [ ] **Scenarios are recorded for at least three failure modes.** Bad order ID, unknown customer, connector timeout. If the agent behaves badly on failure, your customers will see it.
- [ ] **Meta eval cases have been run at least once.** Open Evals, run against the seeded set, and review the summary. Any FAIL cases should be understood before launch.
- [ ] **A real WhatsApp message has been sent to the phone number.** Not from the test chat, from an actual WhatsApp app. This catches routing, webhook, and rendering issues the test chat cannot see.

## 4. Observability

- [ ] **Webhook receiver is configured** if you want to see production traffic. Set `META_APP_SECRET` and `META_WEBHOOK_VERIFY_TOKEN` in the environment and confirm the [Webhooks page](../ship/webhooks.md) is showing signed events.
- [ ] **Connector health cards have been checked** on each connector detail page. Success rate should be over 95%, p95 latency under a few seconds. If a connector is failing in the test chat it will fail worse in production.
- [ ] **A monitoring plan exists** for what to watch after launch. See [Monitoring in production](monitoring-in-production.md).

## 5. Safety and compliance

- [ ] **The agent has an explicit refusal for out-of-scope questions.** At least one skill should catch "unknown intent" and hand off cleanly. Otherwise the model will confabulate.
- [ ] **Sensitive rules are enforced server-side, not just in prompts.** "Do not quote prices above $500" in a skill body is a suggestion, not a guard. If the rule is business-critical, enforce it in your API and let the tool return an error.
- [ ] **Data retention is understood.** WhatsApp conversation content is subject to Meta's retention policy; anything the studio writes to a connector is subject to that connector's retention policy. Confirm both meet your compliance requirements.
- [ ] **The Beta terms of service have been accepted** in Meta Business Manager. If eligibility is failing, the studio surfaces this as a "Meta Business AI Terms" banner with the enable URL.

## 6. Rollback plan

- [ ] **The current config has been exported as JSON.** Overview > Export config. If a launch-day change breaks something, you can re-import the last-known-good version.
- [ ] **The rollout is staged.** Start at 10%, watch for an hour, bump to 50%, watch, then 100%. Do not go from 0% to 100% in one step.
- [ ] **Someone owns the phone.** For at least the first 24 hours after launch, one human should be watching webhook events and be reachable to disable the rollout if something is on fire.

## 7. Communication

- [ ] **Internal stakeholders know about the launch.** Sales, support, and whoever owns the phone number all know the agent is going live.
- [ ] **External customers have been told what the agent can and cannot do**, either in launch messaging or in the first message the agent sends. Setting expectations up front reduces confusion.

## Cutover procedure

Once every box above is ticked:

1. Set rollout to 10% and open the Webhooks page.
2. Wait 15 to 60 minutes. Watch signed events come in. Confirm no unexpected errors on the connector health cards.
3. Bump to 50%. Wait another 30 to 60 minutes.
4. Bump to 100%.
5. Post the launch link in your team's chat with the "who owns it for the first 24 hours" name.

## Related

- [Onboard your first agent](../getting-started/onboard-your-first-agent.md)
- [Monitoring in production](monitoring-in-production.md)
- [Config export / import](../advanced/config-export-import.md)
- [Scenarios](../ship/scenarios.md)
- [Webhooks](../ship/webhooks.md)
