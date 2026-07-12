import type { AgentSettings, BusinessInfo, Skill, Eligibility } from "@/types/meta";
import type { Faq, KnowledgeWebsite, AllowlistEntry, KnowledgeFile } from "@/types/knowledge";
import type { Connector } from "@/types/connector";
import type { Tool } from "@/types/tool";
import type { EvalCase } from "@/types/eval";

// Graph API discovery: one business, one WABA, two phones.
export const demoWabas = [
  { id: "demo-waba", name: "Nimbus Coffee Roasters (demo)" },
];

export const demoPhones = [
  {
    id: "demo-phone-1",
    display_phone_number: "+1 555 010 0001",
    verified_name: "Nimbus Coffee",
    quality_rating: "GREEN",
  },
  {
    id: "demo-phone-2",
    display_phone_number: "+1 555 010 0002",
    verified_name: "Nimbus Coffee Support",
    quality_rating: "YELLOW",
  },
];

export const demoEligibility: Eligibility = {
  is_eligible: true,
  reasons: [],
};

export const demoSettings: AgentSettings[] = [
  {
    agent_id: "demo-agent-1",
    channel: "whatsapp",
    rollout: { enabled: true },
    handoff: {
      enabled: true,
      message: "Thanks for your patience. A human teammate will be with you shortly.",
    },
    followup: {
      enabled: true,
      followup_interval_in_seconds: 3600,
      message: "Just checking back in — is there anything else I can help with?",
    },
    ai_audience: "EVERYONE",
  },
];

export const demoBusinessInfo: BusinessInfo = {
  business_description:
    "Nimbus Coffee is a specialty roaster shipping single-origin beans, brewing gear, and subscription boxes across North America.",
  contact_info: {
    email: "hello@nimbus.demo",
    address: "221 Fillmore St, Denver, CO 80206",
    hours_of_operation: "Mon-Fri 7am-6pm MT",
  },
  payment_method: "Visa, Mastercard, Amex, Apple Pay",
  return_policy: "30-day return on unopened bags. Subscription boxes can be paused any time.",
  purchase_info: "Orders over $45 ship free within the US.",
  delivery_and_shipping: "Standard shipping is 2-4 business days via UPS Ground.",
};

export const demoSkills: Skill[] = [
  {
    id: "demo-skill-order-status",
    title: "check-order-status",
    description: "Look up an order by its number and read back the current shipping stage.",
    skill:
      "Trigger: user asks about the status of a specific order or types an order number.\nActions: 1) confirm order number format (NC-#####), 2) fetch status via the order-lookup connector, 3) reply with stage + tracking URL.\nFallback: if the number is invalid, ask for the confirmation email instead.",
    channel: "whatsapp",
    created_at: 1719878400,
  },
  {
    id: "demo-skill-recommend-beans",
    title: "recommend-beans",
    description: "Suggest a coffee bag based on flavor preference and brew method.",
    skill:
      "Trigger: user asks for a coffee recommendation, mentions a brew method, or shares a flavor preference.\nActions: 1) ask for brew method if unknown, 2) narrow by roast level, 3) return top two bags with tasting notes.\nFallback: hand off to a barista when the user asks for anything roasted after this month.",
    channel: "whatsapp",
    created_at: 1719964800,
  },
  {
    id: "demo-skill-hours-locations",
    title: "hours-and-locations",
    description: "Answer where the cafés are and when they open.",
    skill:
      "Trigger: user asks for hours, address, phone, or directions.\nActions: reply with the closest café based on the ZIP if provided, otherwise list all three.\nFallback: none — this should never miss.",
    channel: "whatsapp",
    created_at: 1720051200,
  },
];

export const demoWebsites: KnowledgeWebsite[] = [
  {
    id: "demo-web-1",
    url: "https://nimbus.demo/faq",
    status: "READY",
    last_crawled_at: 1720137600,
  },
  {
    id: "demo-web-2",
    url: "https://nimbus.demo/shipping",
    status: "READY",
    last_crawled_at: 1720137600,
  },
];

export const demoFaqs: Faq[] = [
  {
    id: "demo-faq-1",
    question: "Do you ship internationally?",
    answer:
      "Right now we ship across the US and Canada. International customers can join the waitlist at nimbus.demo/international.",
  },
  {
    id: "demo-faq-2",
    question: "How do I pause my subscription?",
    answer:
      "Sign in at nimbus.demo/account and open Subscriptions. You can pause for up to 90 days or skip a single shipment. Changes take effect the next billing cycle.",
    metadata: { category: "subscriptions" },
  },
  {
    id: "demo-faq-3",
    question: "Are the beans decaf-friendly?",
    answer:
      "Every roast has a Swiss Water decaf variant. Add \"decaf\" to your order note or pick the decaf option on the product page.",
  },
];

export const demoAllowlist: AllowlistEntry[] = [
  { id: "demo-allow-1", consumer_phone_number: "+15550110001" },
  { id: "demo-allow-2", consumer_phone_number: "+15550110002" },
];

export const demoFiles: KnowledgeFile[] = [
  {
    id: "demo-file-menu",
    file_name: "seasonal-menu.pdf",
    size: 184320,
    status: "READY",
    content_type: "application/pdf",
    created_at: 1720224000,
  },
];

export const demoConnectors: Connector[] = [
  {
    id: "demo-connector-orders",
    name: "Order lookup",
    description: "Fetches order status and tracking numbers from the Nimbus commerce backend.",
    base_url: "https://api.nimbus.demo",
    auth_type: "API_KEY",
    auth_config: {
      api_key: {
        headers: [{ field_name: "X-API-Key", value: "demo-key-redacted" }],
        query_params: [],
        body_params: [],
      },
    },
    connection_status: { status: "CONNECTED" },
  },
];

export const demoTools: Record<string, Tool[]> = {
  "demo-connector-orders": [
    {
      id: "demo-tool-get-order",
      name: "get_order",
      description: "Retrieve an order by its confirmation number.",
      request_definition: {
        method: "GET",
        path: "/orders/{order_id}",
        path_parameters: {
          order_id: { type: "string", description: "Confirmation number, e.g. NC-12345" },
        },
        query_parameters: {},
        headers: {},
      },
    },
    {
      id: "demo-tool-list-orders",
      name: "list_recent_orders",
      description: "List the last N orders for a customer's phone number.",
      request_definition: {
        method: "GET",
        path: "/customers/orders",
        path_parameters: {},
        query_parameters: {
          phone: { type: "string", description: "E.164 phone number" },
          limit: { type: "integer", description: "Max orders to return (default 5)" },
        },
        headers: {},
      },
    },
  ],
};

export const demoEvalCases: EvalCase[] = [
  {
    id: "demo-eval-order-status-happy",
    scenario:
      "Customer texts \"where is order NC-45123?\" and the agent must return the shipping stage.",
    categories: ["orders"],
    max_turns: 3,
    success_criteria: ["Agent uses the order-lookup connector", "Reply includes a tracking URL"],
  },
  {
    id: "demo-eval-order-status-invalid",
    scenario:
      "Customer texts a malformed order number \"12345\" — agent should ask for the correct format.",
    categories: ["orders"],
    max_turns: 2,
    success_criteria: ["Agent asks to confirm format", "No connector call is made"],
  },
  {
    id: "demo-eval-recommend-happy",
    scenario:
      "Customer asks \"any recommendation for a chocolate-forward espresso?\"",
    categories: ["recommendation"],
    max_turns: 4,
    success_criteria: ["Reply lists at least one specific bag", "Includes tasting notes"],
  },
  {
    id: "demo-eval-handoff-refund",
    scenario:
      "Customer demands a refund citing a broken grinder — agent must escalate to a human.",
    categories: ["handoff"],
    max_turns: 3,
    success_criteria: ["Handoff message is sent", "Agent does not promise a refund"],
  },
];

// Reply table for the /agent_test endpoint. Keyword matching only — enough
// for a live-feeling demo without an LLM. Falls back to a friendly generic.
export function demoAgentReply(userMsg: string): {
  agent_response: string;
  handoff_reason?: string;
  quick_replies?: string[];
} {
  const m = userMsg.toLowerCase();
  if (/nc-\d{4,}/i.test(userMsg)) {
    return {
      agent_response:
        "Order NC-45123 is in transit and should arrive by Thursday. Tracking: https://nimbus.demo/track/NC-45123",
      quick_replies: ["Any subscription orders?", "Speak to a human"],
    };
  }
  if (m.includes("order") || m.includes("track")) {
    return {
      agent_response:
        "Happy to help — could you share the order number? It looks like NC- followed by five digits (for example NC-12345).",
      quick_replies: ["NC-45123", "I don't have it"],
    };
  }
  if (m.includes("recommend") || m.includes("suggest") || m.includes("bean") || m.includes("coffee")) {
    return {
      agent_response:
        "For a chocolate-forward espresso, try the Nimbus Fog (dark, cocoa + brown sugar) or the Rangeview blend (medium-dark, hazelnut + fig). Which brew method are you using?",
      quick_replies: ["Espresso", "Pour over", "French press"],
    };
  }
  if (m.includes("hours") || m.includes("open") || m.includes("location") || m.includes("address")) {
    return {
      agent_response:
        "Our Denver café (221 Fillmore St) is open Mon-Fri 7am-6pm and weekends 8am-5pm. We also have popups in Boulder on Saturdays.",
    };
  }
  if (m.includes("refund") || m.includes("broken") || m.includes("angry") || m.includes("manager")) {
    return {
      agent_response:
        "That's frustrating — I want to make sure this gets resolved properly. Handing you off to a teammate now.",
      handoff_reason: "customer_requested_refund",
    };
  }
  if (m.includes("hi") || m.includes("hello") || m.includes("hey")) {
    return {
      agent_response:
        "Hey! I'm the Nimbus Coffee agent. I can help with orders, subscriptions, and recommendations. What's up?",
      quick_replies: ["Where's my order?", "Recommend a bean", "Café hours"],
    };
  }
  return {
    agent_response:
      "I hear you. This is a demo agent — try asking about an order (say NC-45123), a coffee recommendation, or café hours.",
    quick_replies: ["NC-45123", "Recommend a bean", "Café hours"],
  };
}
