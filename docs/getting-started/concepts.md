# Concepts

Before you build an agent, it helps to have a clear mental model of the five pieces that make it work: **skills**, **knowledge**, **connectors**, **tools**, and **evals**. This page defines each one and shows how they fit together.

## The one-line version

The agent is a conversation engine. **Skills** tell it how to behave, **knowledge** gives it facts it can cite, **tools** let it call your APIs, **connectors** are the buckets those tools live in, and **evals** prove the whole thing still works after you change something.

## Skills

A skill is a short prompt that describes one thing the agent should do. Each skill has three fields:

- **Title:** what the skill is called. Used for display, and referenced when the model decides which skill applies.
- **Description:** when this skill kicks in. This is the trigger the model reads at runtime.
- **Skill body:** what to do once the skill is active. Actions in order, plus a fallback.

You can have as many skills as you want. The model reads all of them on every message and picks the one whose description best matches what the user just said.

Good skill boundaries:

- **One clear intent per skill.** Do not lump "order lookup" and "refund" into the same skill. Split them.
- **Non-overlapping triggers.** If two skills could fire on the same message, the model has to guess. The studio flags likely collisions on the skills page.
- **Explicit fallback.** Every skill should say what to do if the user's message does not match a step. Usually "hand off to a human agent."

See [Writing good skills](../configure/writing-good-skills.md) for the design guide.

## Knowledge

Knowledge is anything the agent can cite back at the user without making things up. It comes in four flavours:

- **Files:** PDFs, CSVs, DOCXs. Anything you upload gets indexed for retrieval.
- **Websites:** URLs the studio crawls periodically.
- **FAQs:** structured question and answer pairs. Fastest to author, most reliable at runtime.
- **Allowlist:** phone numbers that gate the audience when `ai_audience: ALLOWLISTED_ONLY` is set. Not really "knowledge," but this is where it lives in the UI.

Skills call knowledge implicitly. If you have a skill "Answer product questions" and an FAQ that matches the user's question, the model will cite the FAQ verbatim.

## Connectors

A connector is one external API the agent can call. Each connector holds:

- A **base URL** (for example `https://api.hubapi.com`)
- One **auth method** (API key header, OAuth 2 client credentials, or mTLS)
- A set of **tools** (see below)

Connectors are the bucket. You would have one connector per third-party service: one for HubSpot, one for Stripe, one for your internal shipping API.

The studio ships 14 prefilled templates for common SaaS APIs (Shopify, Stripe, HubSpot, Salesforce, Zendesk, Slack, and more). It can also generate a connector from an OpenAPI spec, plus one tool per operation. See [Connectors](../configure/connectors.md) and [Import from OpenAPI spec](../configure/connectors-openapi-import.md).

## Tools

A tool is one operation inside a connector. Every tool has:

- A **name** the model uses to refer to it (kebab-case, unique inside the connector)
- A **description** the model reads when deciding whether to call it
- A **request definition:** HTTP method, path, path parameters, query parameters, headers, body parameters, and which body parameters are required

At runtime the model picks a tool, fills in the parameters, and the studio makes the HTTP call server-side. Response goes back into the conversation.

Rules of thumb:

- **One operation, one tool.** "Fetch a customer" and "Update a customer" are two tools, even if they hit the same URL.
- **Descriptions are read by the model.** They are not just documentation. See [Writing good tools](../configure/writing-good-tools.md).
- **Required params matter.** The model will not call the tool if a required param has no source in the conversation.

## Evals

An eval is a saved test case with an expected answer. The studio runs evals against your live agent config through the Meta eval API, then reports pass/fail per case.

Meta ships a set of pre-seeded eval cases you can use as a smoke test. You can also record any test-chat conversation as a **scenario** and replay it later side-by-side with the current config, which is a lighter-weight regression check that does not need the Meta eval API.

See [Evals](../ship/evals.md) and [Scenarios](../ship/scenarios.md).

## How they fit together

A user says:

> "Hi, I placed order NC-12345 last week, can you tell me when it's arriving?"

Here is what happens:

1. The agent reads every skill's description and picks the one that matches (probably "Order tracking").
2. The skill body says: "Look up the order using the order-tracking connector's `get_order_status` tool, then quote the delivery ETA back to the customer."
3. The model extracts `NC-12345` from the message, calls `get_order_status`, and receives `{ status: "shipped", eta: "2026-07-16" }`.
4. The model composes a reply: "Your order NC-12345 is shipped and should arrive on July 16."
5. If the tool failed (bad ID, API down), the skill's fallback kicks in: "If the tool errors, apologize and offer to hand off to support."

Every step is something you configure. The studio's job is to make each step visible and editable.

## What NOT to overload

Some things look like they might belong to skills or tools, but they don't:

- **Business hours, contact details, return policy:** put them in **Business info**, not a skill. The model reads business info on every message.
- **Static Q&A ("what are your hours?"):** put them in **FAQs**, not a skill. FAQs are faster and more reliable.
- **Sensitive rules ("never quote a price above $500 without approval"):** put them in a skill, but also enforce them in the tool's server (the studio has no runtime guard beyond prompt text).

## Next steps

- If you have not built anything yet, follow [Onboard your first agent](onboard-your-first-agent.md).
- If you have an agent live and want to make it better, read [Writing good skills](../configure/writing-good-skills.md) and [Writing good tools](../configure/writing-good-tools.md).
- Before you flip rollout to 100%, walk through the [Pre-launch checklist](../reference/pre-launch-checklist.md).
