# Handle refund escalations

Build a refund flow that catches disputed charges early, asks the customer a short set of qualifying questions, then hands off to a human with enough context that the teammate can act on the first message.

The point is not to let the agent issue refunds by itself. It is to reduce the "please hold while I get a manager" latency that customers hate.

## What you'll build

- A skill that catches refund-adjacent language early.
- A short, structured triage that captures order number, reason, and desired outcome.
- A handoff message that gives the human teammate the full context.
- A safety net: the agent never promises a refund, only escalates.

## Before you start

- The billing / order-lookup connector from the [payment reminder recipe](./payment-reminder-agent.md), or your own equivalent that can fetch an order by number.
- Human coverage on your handoff queue. If no one is available, refund escalations sit in limbo and customers get angrier.

## 1. Add a refund triage skill

Open **Skills** and click **New**.

- **Title**: `refund-triage`
- **Description**: Catch refund and dispute language, collect the details, escalate to a human.
- **Skill body**:
  ```
  Trigger: user asks for a refund, disputes a charge, says an item was broken, uses words like "return", "refund", "unauthorized", "cancel my order", "money back", "chargeback".
  Actions:
  1. Acknowledge in one sentence, warmly but briefly: "Sorry to hear that, let me help sort this out."
  2. Ask for the order number if not already in the conversation. Format: "NC-#####".
  3. Once you have the order number, call get-order and confirm the item and the amount.
  4. Ask two short questions in one message:
     - "What went wrong?"
     - "Would you like a replacement or a refund?"
  5. As soon as the customer answers both, hand off.
  Fallback: at any point if the customer types "human", "manager", "agent", or gets frustrated, hand off immediately.
  Never promise a refund. Only say "a teammate will look into this."
  ```

Save.

## 2. Configure the handoff message

Open **Settings > Handoff** and enable handoff. Set the message so it reads naturally after the triage:

```
Thanks for the details. I am connecting you with a teammate who can approve refunds. They will pick this up shortly and have your full conversation for context.
```

## 3. Fill in the return policy

Open **Business info** and write a concrete return policy field. The agent uses this when the customer asks "what is your policy" during triage. Example:

```
30-day return on unopened bags. Damaged or defective items are refunded in full within 60 days. Subscription boxes can be paused any time.
```

Vague policies make the agent hedge, which makes customers angrier.

## 4. Add an FAQ that references the policy

Open **Knowledge > FAQs** and add:

- **Question**: "What is your refund policy?"
- **Answer**: mirror the policy in Business info, in full sentences. The agent will read this to customers who ask policy questions during triage instead of just before it.

## 5. Add a saved scenario for the ideal path

Open **Test chat**. Play out a refund case exactly the way you want it to go:

```
User: My grinder arrived broken
Agent: Sorry to hear that. Can you share the order number? It looks like NC- followed by five digits.
User: NC-45123
Agent: Got it, that is the Nimbus Pro grinder for $189. Two quick questions: what went wrong, and would you like a replacement or a refund?
User: The lid does not close. I'd like a replacement.
Agent: Thanks for the details. I am connecting you with a teammate...
```

Click **Save as scenario** and name it `refund-broken-item-replacement`. Save a second one for the refund path.

## 6. Add an eval case

Open **Evals** and add:

- **Scenario**: "Customer texts that a grinder arrived broken, expects triage and handoff."
- **Categories**: `handoff`, `refund`
- **Max turns**: 4
- **Success criteria**:
  - Agent asks for order number.
  - Agent asks the two qualifying questions in one message.
  - Handoff message is sent.
  - Agent does not promise a refund.

Run the eval and confirm it passes.

## 7. Test the escape hatches

In Test chat, try messages that should trigger immediate handoff:

- "I want to speak to a manager"
- "This is fraud"
- "Cancel and refund now"

Each should hand off within one turn, no triage questions. If any of them get stuck in triage, tighten the trigger examples in `refund-triage`.

## 8. Turn rollout on

Toggle **Rollout enabled** in Settings.

## Rollout tips

- Watch the first few live refund conversations in **Webhooks**. Real customer language is messier than your test cases.
- If you see repeated "I typed 'refund' and the agent asked me what went wrong before I even had a chance" complaints, add more direct-escalation examples to the fallback in `refund-triage`.
- If disputes come in outside human coverage hours, add a follow-up (**Settings > Follow-up**) that pings the customer with an ETA rather than leaving them silent.
- Review saved refund scenarios weekly and add any new patterns you see in the wild as new scenarios or eval cases.

## What the customer never sees

- The agent does not commit to a refund amount.
- The agent does not tell the customer what your policy says the outcome will be.
- The agent does not ask for card or bank details in the chat.

Keep the triage skill focused on collecting facts, not offering solutions. The human teammate offers the solution.
