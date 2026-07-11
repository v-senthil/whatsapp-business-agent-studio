import type { SkillInput } from "@/lib/schemas/skill";

export interface SkillTemplate extends SkillInput {
  slug: string;
  category: "Onboarding" | "Support" | "Sales" | "Escalation" | "Utility";
  tags?: string[];
}

export const SKILL_TEMPLATES: SkillTemplate[] = [
  {
    slug: "warm-greeting",
    category: "Onboarding",
    title: "warm-greeting",
    description: "Trigger when the customer sends their first message in a session.",
    skill:
      "When a customer sends their first message:\n- Warmly greet them by first name if you have it, otherwise by a friendly generic (e.g. 'Hi there!').\n- Introduce yourself in one short sentence as the AI assistant for the business.\n- Ask an open-ended question about how you can help today.\nKeep it under 3 short lines. Use the business's tone.",
    tags: ["greeting", "onboarding"],
  },
  {
    slug: "handoff-to-human",
    category: "Escalation",
    title: "handoff-to-human",
    description:
      "Use when the customer explicitly asks for a human, expresses frustration, or asks something outside the agent's knowledge.",
    skill:
      "Trigger handoff when ANY of:\n- Customer types 'human', 'agent', 'representative', 'manager', or similar.\n- Customer expresses strong frustration or anger.\n- Question is outside the business's stated policies, product catalog, or scope.\nOn trigger:\n1. Acknowledge their concern with empathy.\n2. Tell them a human teammate will follow up shortly.\n3. Stop responding on the topic — do NOT retry or guess.",
    tags: ["escalation", "handoff"],
  },
  {
    slug: "return-policy",
    category: "Support",
    title: "return-policy",
    description: "Explain the return / refund policy when the customer asks about returns, refunds, or damaged items.",
    skill:
      "When the customer asks about returns, refunds, exchanges, or damaged items:\n- Reference the business's return policy from the knowledge base as the source of truth.\n- Be specific about the return window and any eligibility conditions.\n- If the customer says the item is damaged, offer both a return and a replacement path, and ask for photos.\n- If the customer is outside the return window, apologize and offer store credit only if the policy allows.",
    tags: ["support", "returns"],
  },
  {
    slug: "shipping-status",
    category: "Support",
    title: "shipping-status",
    description: "Answer 'where is my order' questions.",
    skill:
      "When the customer asks about shipping or order status:\n1. Ask for their order number if not provided.\n2. Use the appropriate connector tool to look up the order (do not guess).\n3. Return: current status, expected delivery window, and the tracking link if available.\n4. If the order can't be found, apologize and offer to escalate to a human.",
    tags: ["support", "shipping"],
  },
  {
    slug: "product-lookup",
    category: "Sales",
    title: "product-lookup",
    description: "Help the customer discover or compare products.",
    skill:
      "When the customer asks about product availability, price, sizes, or comparisons:\n- Use the product connector tool to search the catalog. Never invent SKUs or prices.\n- Present up to 3 relevant products with name, price, and one line about why it fits.\n- End with a follow-up question: quantity, size, or an alternative recommendation.\n- Never quote a discount unless it's in the catalog.",
    tags: ["sales", "catalog"],
  },
  {
    slug: "business-hours",
    category: "Utility",
    title: "business-hours",
    description: "Respond to 'when are you open?' and related questions.",
    skill:
      "When the customer asks about hours, availability, or if the business is open:\n- Read hours-of-operation from the business info.\n- State current status (open/closed) and next open window in the customer's timezone if known.\n- If asked about holidays, only answer if the knowledge base has that data — otherwise say a human will confirm.",
    tags: ["utility", "hours"],
  },
  {
    slug: "faq-deflection",
    category: "Support",
    title: "faq-deflection",
    description: "Route common questions to the FAQ knowledge base rather than improvising.",
    skill:
      "Before answering any policy, shipping, refund, warranty, or account question:\n1. Check the FAQ knowledge base for a matching entry.\n2. If found, answer using that content, in your own words but preserving specifics.\n3. If not found, do NOT invent an answer — say you'll check and follow up, then trigger handoff.",
    tags: ["support", "faq"],
  },
  {
    slug: "collect-contact-details",
    category: "Onboarding",
    title: "collect-contact-details",
    description: "Politely collect email / name when required for an order or callback.",
    skill:
      "When contact details are required (e.g. for a callback or a form-based flow):\n- Ask ONE piece of information per message (name, then email, then phone).\n- Confirm each piece by echoing it back.\n- Never ask for sensitive info (SSN, full card numbers, passwords).\n- If the customer refuses, gracefully skip and continue without pressing.",
    tags: ["onboarding", "collection"],
  },
  {
    slug: "out-of-scope",
    category: "Escalation",
    title: "out-of-scope",
    description: "Handle questions completely outside the business's remit (weather, news, jokes).",
    skill:
      "If the customer asks about topics unrelated to the business (weather, celebrities, general knowledge, coding help, jokes):\n- Briefly acknowledge you can't help with that.\n- Redirect to what you can help with in ONE sentence.\n- Do NOT try to answer — even a partial answer confuses the agent's role.",
    tags: ["escalation", "scope"],
  },
  {
    slug: "confirm-before-mutation",
    category: "Utility",
    title: "confirm-before-mutation",
    description: "Ask for explicit confirmation before any tool call that mutates external state (cancel order, refund, etc.).",
    skill:
      "Before invoking a connector tool that modifies external data (cancel, refund, subscribe, update address, etc.):\n1. Summarize what you're about to do in one short sentence.\n2. Ask for explicit confirmation ('Yes to proceed').\n3. Wait for confirmation before running the tool.\n4. If ambiguous, ask again. Do NOT proceed on silence or an emoji.",
    tags: ["safety", "confirmation"],
  },
  {
    slug: "book-appointment",
    category: "Sales",
    title: "book-appointment",
    description: "Help the customer pick and book an appointment slot.",
    skill:
      "When the customer wants to book an appointment, demo, or consultation:\n1. Ask for preferred date and rough time window (morning / afternoon / evening).\n2. Use the calendar connector tool to look up available slots for that window.\n3. Present up to 3 slots and ask them to pick one.\n4. Collect name and email if not already known.\n5. Confirm the booking back to them with date, time, and a reference number.\n6. If the connector returns no slots, apologize, offer the next-available date, or escalate to a human.",
    tags: ["sales", "booking", "calendar"],
  },
  {
    slug: "reschedule-appointment",
    category: "Utility",
    title: "reschedule-appointment",
    description: "Move an existing appointment to a new time.",
    skill:
      "When the customer wants to reschedule an existing appointment:\n1. Ask for their booking reference or the email the booking is under.\n2. Use the calendar connector to look up the booking. Do not guess.\n3. Confirm the current slot back to them.\n4. Ask for a new preferred window and follow the book-appointment flow to pick and confirm.\n5. If cancellation is required first, follow confirm-before-mutation.",
    tags: ["utility", "calendar"],
  },
  {
    slug: "cancel-order",
    category: "Support",
    title: "cancel-order",
    description: "Cancel a recently placed order within policy.",
    skill:
      "When the customer asks to cancel an order:\n1. Ask for the order number if not provided.\n2. Look up the order via the store connector. If it has already shipped, cancellation is not allowed. Offer a return instead using the return-policy skill.\n3. If cancellable, run the confirm-before-mutation flow, then call the cancel tool.\n4. Confirm cancellation, expected refund window, and refund method.",
    tags: ["support", "orders"],
  },
  {
    slug: "share-payment-link",
    category: "Sales",
    title: "share-payment-link",
    description: "Generate and share a payment link when the customer is ready to pay.",
    skill:
      "When the customer confirms they want to pay:\n1. Summarize the item(s) or invoice and total in one short line.\n2. Ask which currency if not obvious from context.\n3. Call the payments connector to create a payment link. Include the customer's contact detail so they get a receipt.\n4. Reply with the link only, plus a one-line note that the link expires or is valid until X.\n5. Do NOT include partial card numbers, one-time codes, or bank details in-line.",
    tags: ["sales", "payments"],
  },
  {
    slug: "send-invoice",
    category: "Sales",
    title: "send-invoice",
    description: "Generate an invoice and email it to the customer.",
    skill:
      "When the customer asks for an invoice or a proforma:\n1. Confirm the line items, quantities, tax treatment, and billing name/address.\n2. Ask for the destination email if not on file.\n3. Call the invoicing connector to create the invoice and dispatch it to the email.\n4. Reply with the invoice number and a note that it should arrive within a few minutes.\n5. If the customer is a repeat customer, offer to save the billing details for next time.",
    tags: ["sales", "invoicing"],
  },
  {
    slug: "issue-coupon",
    category: "Sales",
    title: "issue-coupon",
    description: "Issue a promo code within business rules.",
    skill:
      "Only issue a coupon when one of the following is true:\n- The customer has an active complaint that qualifies for a make-good per the FAQ.\n- The customer is on a campaign that documents an eligible discount.\n- A human has explicitly asked you to.\nWhen issuing:\n1. Explain the value, expiry, and any product exclusions in ONE line.\n2. Use the promo connector to create a single-use code.\n3. Share the code and expiry date only. Do NOT offer additional discounts on your own.",
    tags: ["sales", "loyalty"],
  },
  {
    slug: "suggest-upsell",
    category: "Sales",
    title: "suggest-upsell",
    description: "Recommend a complementary product after a positive purchase intent.",
    skill:
      "When the customer has just confirmed a purchase or asked about a specific product:\n- Use the product connector to look up 1-2 complementary items (accessories, refills, bigger size).\n- Present each in one line: name, price, why it fits.\n- Ask a soft close: 'Would you like to add either to your order?'.\n- Do NOT upsell more than twice in the same conversation.\n- Never suggest an item that is out of stock.",
    tags: ["sales"],
  },
  {
    slug: "collect-feedback",
    category: "Utility",
    title: "collect-feedback",
    description: "Ask for a rating and a short comment after a resolved conversation.",
    skill:
      "Once a conversation resolves successfully or an order completes:\n1. Ask a single question: 'On a scale of 1-5, how would you rate this experience?'.\n2. If the customer replies with a number, acknowledge and optionally ask for a one-line comment.\n3. Store the rating and comment via the feedback connector.\n4. If the rating is 3 or below, apologize and offer to escalate to a human.",
    tags: ["utility", "feedback", "nps"],
  },
  {
    slug: "match-language",
    category: "Utility",
    title: "match-language",
    description: "Detect the customer's language and respond in the same language.",
    skill:
      "Before replying to a customer message:\n1. Detect the language of the customer's message.\n2. If it differs from the current conversation language, switch to their language starting from the next reply.\n3. Keep proper nouns (product names, brand names) in the original.\n4. If the language is not one you can confidently use, apologize in English and offer to escalate to a human speaker.",
    tags: ["utility", "localization"],
  },
  {
    slug: "verify-identity",
    category: "Onboarding",
    title: "verify-identity",
    description: "Verify who the customer is before disclosing sensitive account details.",
    skill:
      "Before disclosing balance, invoice, or account details:\n1. Ask for two independent identifiers: for example email plus last-4 of an order number, or account ID plus registered phone.\n2. Look them up via the account connector. Do NOT accept close matches; require exact.\n3. If either fails, apologize, refuse to share the sensitive details, and offer to escalate to a human.\n4. Never repeat the sensitive detail if the identity check fails.",
    tags: ["onboarding", "security"],
  },
  {
    slug: "collect-kyc",
    category: "Onboarding",
    title: "collect-kyc",
    description: "Walk the customer through document upload for KYC or onboarding.",
    skill:
      "When KYC or identity documents are required:\n1. Explain in one line why the document is needed and how it will be used.\n2. Ask for the documents one at a time (ID front, ID back, address proof).\n3. For each: confirm receipt and readability. If unclear, ask for a re-upload.\n4. Once complete, store via the KYC connector and confirm submission with an expected review window.\n5. Never store or repeat the actual document values back to the customer.",
    tags: ["onboarding", "kyc"],
  },
  {
    slug: "communicate-outage",
    category: "Support",
    title: "communicate-outage",
    description: "Acknowledge a known incident and set an expectation for resolution.",
    skill:
      "When the business is aware of an ongoing incident that affects the customer's question:\n1. Acknowledge the issue in one honest sentence. Do NOT downplay.\n2. State what is affected, what is not, and the current best ETA if you have it.\n3. Offer to notify them when it is resolved.\n4. If the customer is highly affected (production outage on their end), escalate to a human immediately.\n5. Only claim an incident is over when the status connector confirms it.",
    tags: ["support", "incident"],
  },
  {
    slug: "abandoned-cart-recover",
    category: "Sales",
    title: "abandoned-cart-recover",
    description: "Nudge the customer to complete a cart they left behind.",
    skill:
      "When a scheduled event fires for an abandoned cart:\n1. Open with the item(s) they left, one line each with name, quantity, and price.\n2. Ask if they need help deciding, or if they hit an issue at checkout.\n3. If they mention an issue, follow communicate-outage or handoff-to-human as appropriate.\n4. Never push more than twice. If ignored a second time, close politely and do not follow up automatically.",
    tags: ["sales", "reengagement"],
  },
];
