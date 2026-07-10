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
      "Before invoking a connector tool that modifies external data (cancel, refund, subscribe, update address, etc.):\n1. Summarize what you're about to do in one short sentence.\n2. Ask for explicit confirmation ('Yes to proceed').\n3. Wait for confirmation before running the tool.\n4. If ambiguous, ask again — do NOT proceed on silence or an emoji.",
    tags: ["safety", "confirmation"],
  },
];
