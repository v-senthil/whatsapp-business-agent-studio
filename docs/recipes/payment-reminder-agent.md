# Build a payment reminder agent

Walk through a complete WhatsApp agent that finds outstanding invoices, sends polite reminders, offers to collect payment, and hands off to a human when the customer disputes a charge.

## What you'll build

- A phone number that customers can message with "where is my bill" or "I paid already".
- A skill that looks up open invoices by phone number.
- A skill that answers "why do I owe this" with the invoice line items.
- A skill that offers a payment link when the customer confirms they want to pay.
- A handoff rule that escalates disputes to a human within one turn.

## Before you start

- A Meta Business Agent Platform account with a WABA and phone number onboarded through the studio. See [Onboard your first agent](../getting-started/onboard-your-first-agent.md).
- Access to your billing system's read API (Stripe, QuickBooks, or an internal one). You only need read-only credentials.
- Your billing system's payment link generator, if you plan to offer inline payment.

## 1. Fill in business info

Open **Business info** in the sidebar and add:

- Description: "We are Nimbus Coffee, a specialty roaster shipping single-origin beans across the US."
- Contact email and hours of operation.
- Payment method: "Card, ACH, and Apple Pay."
- Return policy: at least a sentence so the agent has a source when someone asks why they owe money.

Save. The agent uses these fields verbatim in customer replies, so make each field a complete sentence.

## 2. Wire the billing connector

Open **Connectors** and click **From template** to pick your billing platform, or click **New** for a custom API.

- **Base URL**: the billing API's root, for example `https://api.stripe.com/v1`.
- **Auth type**: usually **API Key**. Paste the read-only key into the header named `Authorization` with prefix `Bearer`.
- **Description**: "Reads open invoices and generates payment links."

Save. If the connector needs OAuth or mTLS, see the matching auth deep dive.

## 3. Add two tools on the connector

Open the connector and click **New tool** twice to add:

### Tool 1: list-open-invoices

- **Method**: GET
- **Path**: `/invoices?status=open&customer_phone={phone}` (adjust for your billing system)
- **Path parameters**: `phone` as a string with description "E.164 customer phone number, e.g. +14155550100".
- **Description**: "List open invoices for a customer's phone number. Returns amount due, due date, and invoice ID."

### Tool 2: create-payment-link

- **Method**: POST
- **Path**: `/checkout/sessions`
- **Body**: JSON with fields for `invoice_id` and `success_url`.
- **Description**: "Create a payment link the customer can tap to pay a specific invoice. Only call this after the customer confirms they want to pay."

Save each tool and click **Run** with a real invoice ID to verify the payload before you rely on the agent to call it.

## 4. Add the reminder skills

Open **Skills** and click **New**. Add three skills.

### Skill: check-invoices

- **Title**: `check-invoices`
- **Description**: Look up open invoices when a customer asks about their bill.
- **Skill body**:
  ```
  Trigger: user asks about their bill, invoice, or payment status. Examples: "where is my bill", "how much do I owe", "did my payment go through".
  Actions:
  1. Call list-open-invoices with the customer's phone number.
  2. If there are no open invoices, reply "You are all caught up, nothing is owed."
  3. If there is one open invoice, reply with the amount, due date, and offer the payment link.
  4. If there are multiple, list them by invoice ID and total, and ask which one they want to pay.
  Fallback: if the connector errors, apologize and hand off to a human.
  ```

### Skill: explain-charge

- **Title**: `explain-charge`
- **Description**: Explain why a customer owes what they owe.
- **Skill body**:
  ```
  Trigger: user asks why they owe money, disputes an amount, or asks for a breakdown.
  Actions:
  1. Call list-open-invoices to pull the invoice line items.
  2. Read back the line items in plain language, one item per line.
  3. Ask "Does this match what you expected?"
  Fallback: if the customer says the amount is wrong or uses words like "fraud", "unauthorized", or "dispute", hand off immediately.
  ```

### Skill: send-payment-link

- **Title**: `send-payment-link`
- **Description**: Offer a payment link when the customer says they want to pay.
- **Skill body**:
  ```
  Trigger: user confirms they want to pay, replies "yes" to a payment offer, or asks how to pay.
  Actions:
  1. Confirm the invoice they want to pay if more than one is open.
  2. Call create-payment-link with that invoice ID.
  3. Reply with the URL and a short note that the link expires in 24 hours.
  ```

Save each.

## 5. Configure handoff for disputes

Open **Settings**, expand the Handoff card, and enable it. Set the message:

```
Thanks, let me connect you with a teammate who can look into this. Someone will be with you shortly.
```

Handoff triggers on the fallback conditions in the skills above (dispute language, connector errors).

## 6. Test with the demo scenarios

Open **Test chat** and try these:

- "Where is my bill" - should trigger check-invoices and read back the open invoice.
- "Why do I owe $47" - should trigger explain-charge and show line items.
- "This charge is wrong, I never bought this" - should trigger handoff.
- "Yes send me the link" - should trigger send-payment-link and reply with a URL.

If any of these behave differently than expected, open the skill and refine the trigger examples.

## 7. Save the working conversations as scenarios

Once each flow works, click **Save as scenario** in the Test chat header for each one. Later, when you edit the skills, use **Replay** to make sure you did not break a passing case.

## 8. Turn rollout on

Open **Settings** and toggle **Rollout enabled**. From this point real WhatsApp messages to your number reach the agent.

## Rollout tips

- Start with a small allowlist under **Knowledge > Allowlist** so only your test phone numbers receive agent responses for the first day. Widen after you are confident.
- Watch **Webhooks** for the first few live conversations to make sure the agent's tool calls are landing correctly.
- Use **Connectors > Health** to spot any latency or failure spikes on the billing connector.
