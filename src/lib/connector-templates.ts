import type { ConnectorInput } from "@/lib/schemas/connector";

export interface ConnectorTemplate {
  slug: string;
  label: string;
  description: string;
  iconGlyph: string;
  category: "E-commerce" | "Support" | "CRM" | "Payments" | "Communication" | "Marketing";
  docs?: string;
  input: ConnectorInput;
}

const TEMPLATES: ConnectorTemplate[] = [
  {
    slug: "shopify",
    label: "Shopify Admin API",
    description: "Orders, products, and customers via Shopify Admin API.",
    iconGlyph: "S",
    category: "E-commerce",
    docs: "https://shopify.dev/docs/api/admin",
    input: {
      name: "Shopify",
      description: "Query orders, products, and customers from a Shopify store.",
      base_url: "https://YOUR-STORE.myshopify.com/admin/api/2024-10",
      auth_type: "API_KEY",
      auth_config: {
        api_key: {
          headers: [{ field_name: "X-Shopify-Access-Token", value: "", prefix: "" }],
          query_params: [],
          body_params: [],
        },
      },
    },
  },
  {
    slug: "stripe",
    label: "Stripe",
    description: "Charges, customers, subscriptions, refunds.",
    iconGlyph: "$",
    category: "Payments",
    docs: "https://stripe.com/docs/api",
    input: {
      name: "Stripe",
      description: "Look up customers, charges, subscriptions, and issue refunds.",
      base_url: "https://api.stripe.com/v1",
      auth_type: "API_KEY",
      auth_config: {
        api_key: {
          headers: [{ field_name: "Authorization", value: "", prefix: "Bearer " }],
          query_params: [],
          body_params: [],
        },
      },
    },
  },
  {
    slug: "zendesk",
    label: "Zendesk Support",
    description: "Tickets, users, organizations via Zendesk REST API.",
    iconGlyph: "Z",
    category: "Support",
    docs: "https://developer.zendesk.com/api-reference/",
    input: {
      name: "Zendesk",
      description: "Read and create Zendesk tickets, look up users and organizations.",
      base_url: "https://YOUR-SUBDOMAIN.zendesk.com/api/v2",
      auth_type: "API_KEY",
      auth_config: {
        api_key: {
          headers: [{ field_name: "Authorization", value: "", prefix: "Basic " }],
          query_params: [],
          body_params: [],
        },
      },
    },
  },
  {
    slug: "hubspot",
    label: "HubSpot",
    description: "Contacts, deals, tickets, and CRM objects.",
    iconGlyph: "H",
    category: "CRM",
    docs: "https://developers.hubspot.com/docs/api/overview",
    input: {
      name: "HubSpot",
      description: "Query and mutate HubSpot contacts, companies, deals, and tickets.",
      base_url: "https://api.hubapi.com",
      auth_type: "OAUTH2_CLIENT_CREDENTIALS",
      auth_config: {
        oauth2_client_credentials: {
          token_url: "https://api.hubapi.com/oauth/v1/token",
          scopes_to_request: ["crm.objects.contacts.read", "crm.objects.deals.read"],
          client_id: "",
          client_secret: "",
          token_request_content_type: "application/x-www-form-urlencoded",
        },
      },
    },
  },
  {
    slug: "salesforce",
    label: "Salesforce",
    description: "Accounts, leads, opportunities via Salesforce REST API.",
    iconGlyph: "SF",
    category: "CRM",
    docs: "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/",
    input: {
      name: "Salesforce",
      description: "Query Salesforce accounts, leads, and opportunities.",
      base_url: "https://YOUR-INSTANCE.my.salesforce.com/services/data/v60.0",
      auth_type: "OAUTH2_CLIENT_CREDENTIALS",
      auth_config: {
        oauth2_client_credentials: {
          token_url: "https://YOUR-INSTANCE.my.salesforce.com/services/oauth2/token",
          scopes_to_request: ["api", "refresh_token"],
          client_id: "",
          client_secret: "",
          token_request_content_type: "application/x-www-form-urlencoded",
        },
      },
    },
  },
  {
    slug: "twilio",
    label: "Twilio",
    description: "SMS, voice, WhatsApp business messaging.",
    iconGlyph: "T",
    category: "Communication",
    docs: "https://www.twilio.com/docs/usage/api",
    input: {
      name: "Twilio",
      description: "Send SMS, initiate calls, and query messaging logs on Twilio.",
      base_url: "https://api.twilio.com/2010-04-01",
      auth_type: "API_KEY",
      auth_config: {
        api_key: {
          headers: [{ field_name: "Authorization", value: "", prefix: "Basic " }],
          query_params: [],
          body_params: [],
        },
      },
    },
  },
  {
    slug: "sendgrid",
    label: "SendGrid",
    description: "Send transactional email via SendGrid v3 API.",
    iconGlyph: "SG",
    category: "Marketing",
    docs: "https://docs.sendgrid.com/api-reference",
    input: {
      name: "SendGrid",
      description: "Send transactional emails via SendGrid.",
      base_url: "https://api.sendgrid.com/v3",
      auth_type: "API_KEY",
      auth_config: {
        api_key: {
          headers: [{ field_name: "Authorization", value: "", prefix: "Bearer " }],
          query_params: [],
          body_params: [],
        },
      },
    },
  },
  {
    slug: "slack",
    label: "Slack",
    description: "Post messages, look up users and channels.",
    iconGlyph: "SL",
    category: "Communication",
    docs: "https://api.slack.com/methods",
    input: {
      name: "Slack",
      description: "Post messages, look up users and channels on Slack.",
      base_url: "https://slack.com/api",
      auth_type: "OAUTH2_CLIENT_CREDENTIALS",
      auth_config: {
        oauth2_client_credentials: {
          token_url: "https://slack.com/api/oauth.v2.access",
          scopes_to_request: ["chat:write", "users:read"],
          client_id: "",
          client_secret: "",
          token_request_content_type: "application/x-www-form-urlencoded",
        },
      },
    },
  },
];

export function connectorTemplates(): ConnectorTemplate[] {
  return TEMPLATES;
}

export function findConnectorTemplate(slug: string): ConnectorTemplate | undefined {
  return TEMPLATES.find((t) => t.slug === slug);
}
