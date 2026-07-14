# Writing good skills

A skill is a short prompt. Whether the agent actually does the right thing at runtime depends almost entirely on how you write it. This page is the design guide.

## The three-part shape

Every skill has a title, a description, and a body. Treat them as three different jobs.

### Title

The title is a display name and a hint to the model. Keep it short, kebab-cased if you like the convention, and specific.

Good:

- `order-status-lookup`
- `refund-policy-quote`
- `book-service-appointment`

Bad:

- `Help` (too vague, will collide with every other skill)
- `Handle customer requests about their orders, refunds, appointments, and account issues` (too long, actually a bundle of skills)

Rule of thumb: if the title has "and" in it, split into two skills.

### Description

The description is what the model reads on every user turn to decide whether the skill applies. It is the trigger. Write it as a "when..." clause.

Good:

- `When the user asks about the status of an existing order, or shares an order ID that starts with NC-, or wants to know when their delivery will arrive.`
- `When the user asks about return, refund, or exchange policy for items they have already received.`
- `When the user wants to schedule, reschedule, or cancel a haircut appointment.`

Bad:

- `Order support.` (Not a trigger. The model has nothing to match on.)
- `Any question about orders.` (Too broad. Will fire on "how do I place an order?" too, which needs a different skill.)

Rule of thumb: name at least one concrete signal (a keyword, a phrase, an ID format) the user is likely to include.

### Body

The body is what the model does once the skill fires. Structure it as **numbered actions** followed by an explicit fallback.

Good:

```
1. Extract the order ID from the user's message. It matches the pattern NC-##### (5 digits).
2. Call the get_order_status tool with the order_id.
3. Quote the status and delivery ETA back to the customer.
4. Ask if they need anything else about this order.

If the tool errors or the order is not found, apologize, share the customer support number (555-0123), and hand off to a human agent.
```

Bad:

```
Help the customer with their order.
```

The bad version does not tell the model what tool to call, what data to extract, or what to do on failure. The model will guess.

Rule of thumb: every skill body should mention at least one tool name (if it needs data), name at least one thing to say back, and end with an explicit fallback.

## What to put in each field

| Situation | Field |
|---|---|
| Deciding when the skill applies | Description |
| The customer-facing script | Body |
| A named external operation | Body, reference the tool by name |
| A general policy ("do not quote prices above $500") | Body |
| A fact the customer will ask about ("we ship on Tuesdays") | Not a skill. Put it in Business info or an FAQ. |
| A phone number to hand off to | Body, hardcoded in the fallback |

## Collision avoidance

If two skills could fire on the same user message, the model has to pick one and the pick is not always consistent. The studio flags likely collisions on the [Skills page](skills.md) as a yellow banner. Two failure modes to watch for:

1. **Overlapping descriptions.** Two skills that both say "when the user asks about orders" will fight for every order-related message. Rewrite one to be narrower ("when the user asks about the status of an existing order") and the other to catch the leftover cases ("when the user wants to place a new order").
2. **Shared keywords in descriptions.** If four skills all mention "refund," the model picks based on total match strength, which is opaque. Anchor each skill on a keyword the others do not use.

The collision detector fires on:

- **High severity:** two skill titles that are identical or over 60% similar after tokenization.
- **Medium severity:** two skill descriptions that share four or more significant terms.

High severity almost always means you have a real duplicate. Medium can be a false positive (both skills legitimately talk about "customer" and "email"), but is worth reviewing.

## Test as you go

Every time you add or edit a skill:

1. Open the [Test chat](../ship/test-chat.md).
2. Send at least three messages: one that should clearly trigger the new skill, one that should clearly NOT trigger it, and one edge case.
3. If the model picks a different skill or says the wrong thing, iterate on the description or body until it settles.
4. Once it works, save the conversation as a **scenario**. You can replay it later to catch regressions when other skills change.

## Skills that use tools

If your skill calls a tool, name the tool explicitly in the body. Do not rely on the model to guess.

Good:

```
1. Ask the user for the account email if not already provided.
2. Call the lookup_customer tool with the email.
3. If the response contains a `loyalty_tier`, greet the customer by that tier.
```

The tool's own description also matters. See [Writing good tools](writing-good-tools.md) for how to make sure the model uses the right tool with the right arguments.

## When to use knowledge instead

A skill is the wrong tool for facts that never change. If the answer is "we ship in 3 business days," put it in an FAQ or on the return-policy field of business info. The model reads knowledge on every turn without needing a skill to trigger it.

Rule of thumb: skills are for **behaviour**, knowledge is for **facts**.

## Starting points

If you are staring at a blank skills page, the studio ships 22 curated templates across five categories. Open **Templates** in the header to browse. Most templates cover common WhatsApp use cases (greeting, order lookup, handoff, appointment booking). Pick two or three, customize them, and use them as a scaffold for skills you write from scratch.

Or draft with AI: on the New skill page, describe your intent in one sentence and let the configured AI provider suggest a title, description, and body. See the [AI provider settings](../advanced/ai-provider.md).

## Anti-patterns

- **The kitchen sink skill.** One skill that says "handle anything about orders, refunds, complaints, or general questions." Split it up. The model will pick this skill for every message and then fail to follow the vague body.
- **The unreachable fallback.** "If the customer asks about anything else, ..." at the end of a skill body. If the description already narrows the trigger, this fallback is dead code.
- **The tool-less skill body.** A skill body that says "look up the customer" without naming a tool. The model will hallucinate a response.
- **The undefined term.** A skill body that references "the customer's tier" but never says what a tier is or where it comes from.

## Related

- [Skills page (UI reference)](skills.md)
- [Writing good tools](writing-good-tools.md)
- [Test chat](../ship/test-chat.md)
- [Scenarios](../ship/scenarios.md)
