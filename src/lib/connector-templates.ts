import type { ConnectorInput } from "@/lib/schemas/connector";

export interface ConnectorTemplate {
  slug: string;
  label: string;
  description: string;
  iconGlyph: string;
  category:
    | "E-commerce"
    | "Support"
    | "CRM"
    | "Payments"
    | "Communication"
    | "Marketing"
    | "Productivity"
    | "Accounting"
    | "Zoho";
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

  // ---- Third-party additions ---------------------------------------------

  {
    slug: "woocommerce",
    label: "WooCommerce",
    description: "Orders, products, and customers on a WooCommerce store.",
    iconGlyph: "W",
    category: "E-commerce",
    docs: "https://woocommerce.github.io/woocommerce-rest-api-docs/",
    input: {
      name: "WooCommerce",
      description: "Query orders, products, and customers from a WooCommerce store.",
      base_url: "https://YOUR-STORE.com/wp-json/wc/v3",
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
    slug: "freshdesk",
    label: "Freshdesk",
    description: "Tickets, contacts, and companies on Freshdesk Support.",
    iconGlyph: "F",
    category: "Support",
    docs: "https://developers.freshdesk.com/api/",
    input: {
      name: "Freshdesk",
      description: "Read and create Freshdesk tickets, look up contacts and companies.",
      base_url: "https://YOUR-DOMAIN.freshdesk.com/api/v2",
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
    slug: "intercom",
    label: "Intercom",
    description: "Conversations, contacts, and companies on Intercom.",
    iconGlyph: "I",
    category: "Support",
    docs: "https://developers.intercom.com/docs/references/rest-api/",
    input: {
      name: "Intercom",
      description: "Read and reply to Intercom conversations, look up contacts and companies.",
      base_url: "https://api.intercom.io",
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
    slug: "mailchimp",
    label: "Mailchimp",
    description: "Lists, campaigns, and members via Mailchimp Marketing API.",
    iconGlyph: "MC",
    category: "Marketing",
    docs: "https://mailchimp.com/developer/marketing/api/",
    input: {
      name: "Mailchimp",
      description: "Manage lists, campaigns, and members on Mailchimp. Replace DC with your data center suffix (e.g. us14).",
      base_url: "https://DC.api.mailchimp.com/3.0",
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
    slug: "google-sheets",
    label: "Google Sheets",
    description: "Read and write spreadsheet data via the Sheets API.",
    iconGlyph: "GS",
    category: "Productivity",
    docs: "https://developers.google.com/sheets/api/reference/rest",
    input: {
      name: "Google Sheets",
      description: "Read and write ranges on Google Sheets. Use as a lightweight datastore or lookup table.",
      base_url: "https://sheets.googleapis.com/v4",
      auth_type: "OAUTH2_CLIENT_CREDENTIALS",
      auth_config: {
        oauth2_client_credentials: {
          token_url: "https://oauth2.googleapis.com/token",
          scopes_to_request: ["https://www.googleapis.com/auth/spreadsheets"],
          client_id: "",
          client_secret: "",
          token_request_content_type: "application/x-www-form-urlencoded",
        },
      },
    },
  },
  {
    slug: "google-calendar",
    label: "Google Calendar",
    description: "List free/busy, create events on Google Calendar.",
    iconGlyph: "GC",
    category: "Productivity",
    docs: "https://developers.google.com/calendar/api",
    input: {
      name: "Google Calendar",
      description: "Read availability and create events on Google Calendar.",
      base_url: "https://www.googleapis.com/calendar/v3",
      auth_type: "OAUTH2_CLIENT_CREDENTIALS",
      auth_config: {
        oauth2_client_credentials: {
          token_url: "https://oauth2.googleapis.com/token",
          scopes_to_request: ["https://www.googleapis.com/auth/calendar"],
          client_id: "",
          client_secret: "",
          token_request_content_type: "application/x-www-form-urlencoded",
        },
      },
    },
  },
  {
    slug: "calendly",
    label: "Calendly",
    description: "Read event types and scheduled events from Calendly.",
    iconGlyph: "CL",
    category: "Productivity",
    docs: "https://developer.calendly.com/api-docs",
    input: {
      name: "Calendly",
      description: "List event types, read scheduled events, and generate one-off booking links.",
      base_url: "https://api.calendly.com",
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
    slug: "notion",
    label: "Notion",
    description: "Databases and pages on Notion.",
    iconGlyph: "N",
    category: "Productivity",
    docs: "https://developers.notion.com/",
    input: {
      name: "Notion",
      description: "Query Notion databases and update pages.",
      base_url: "https://api.notion.com/v1",
      auth_type: "API_KEY",
      auth_config: {
        api_key: {
          headers: [
            { field_name: "Authorization", value: "", prefix: "Bearer " },
            { field_name: "Notion-Version", value: "2022-06-28", prefix: "" },
          ],
          query_params: [],
          body_params: [],
        },
      },
    },
  },

  // ---- Zoho product family ----------------------------------------------
  // All Zoho APIs share one accounts server for token issuance. Change the
  // .com suffix to match your data center (.eu, .in, .com.au, .jp, .com.cn,
  // .ca). Scopes vary per product; the ones below are minimum common sets.

  {
    slug: "zoho-crm",
    label: "Zoho CRM",
    description: "Leads, deals, accounts, and contacts on Zoho CRM.",
    iconGlyph: "ZC",
    category: "Zoho",
    docs: "https://www.zoho.com/crm/developer/docs/api/v6/",
    input: {
      name: "Zoho CRM",
      description: "Query and mutate Zoho CRM leads, deals, accounts, and contacts.",
      base_url: "https://www.zohoapis.com/crm/v6",
      auth_type: "OAUTH2_CLIENT_CREDENTIALS",
      auth_config: {
        oauth2_client_credentials: {
          token_url: "https://accounts.zoho.com/oauth/v2/token",
          scopes_to_request: ["ZohoCRM.modules.ALL", "ZohoCRM.settings.ALL"],
          client_id: "",
          client_secret: "",
          token_request_content_type: "application/x-www-form-urlencoded",
        },
      },
    },
  },
  {
    slug: "zoho-desk",
    label: "Zoho Desk",
    description: "Tickets, contacts, and departments on Zoho Desk.",
    iconGlyph: "ZD",
    category: "Zoho",
    docs: "https://desk.zoho.com/DeskAPIDocument",
    input: {
      name: "Zoho Desk",
      description: "Read and create Zoho Desk tickets, look up contacts and departments.",
      base_url: "https://desk.zoho.com/api/v1",
      auth_type: "OAUTH2_CLIENT_CREDENTIALS",
      auth_config: {
        oauth2_client_credentials: {
          token_url: "https://accounts.zoho.com/oauth/v2/token",
          scopes_to_request: ["Desk.tickets.ALL", "Desk.contacts.READ", "Desk.basic.READ"],
          client_id: "",
          client_secret: "",
          token_request_content_type: "application/x-www-form-urlencoded",
        },
      },
    },
  },
  {
    slug: "zoho-books",
    label: "Zoho Books",
    description: "Invoices, estimates, customers, and payments on Zoho Books.",
    iconGlyph: "ZB",
    category: "Zoho",
    docs: "https://www.zoho.com/books/api/v3/",
    input: {
      name: "Zoho Books",
      description: "Create invoices and estimates, read customers and payments on Zoho Books.",
      base_url: "https://www.zohoapis.com/books/v3",
      auth_type: "OAUTH2_CLIENT_CREDENTIALS",
      auth_config: {
        oauth2_client_credentials: {
          token_url: "https://accounts.zoho.com/oauth/v2/token",
          scopes_to_request: [
            "ZohoBooks.invoices.ALL",
            "ZohoBooks.contacts.ALL",
            "ZohoBooks.estimates.ALL",
            "ZohoBooks.settings.READ",
          ],
          client_id: "",
          client_secret: "",
          token_request_content_type: "application/x-www-form-urlencoded",
        },
      },
    },
  },
  {
    slug: "zoho-inventory",
    label: "Zoho Inventory",
    description: "Items, orders, and shipments on Zoho Inventory.",
    iconGlyph: "ZI",
    category: "Zoho",
    docs: "https://www.zoho.com/inventory/api/v1/",
    input: {
      name: "Zoho Inventory",
      description: "Query stock, sales orders, and shipments on Zoho Inventory.",
      base_url: "https://www.zohoapis.com/inventory/v1",
      auth_type: "OAUTH2_CLIENT_CREDENTIALS",
      auth_config: {
        oauth2_client_credentials: {
          token_url: "https://accounts.zoho.com/oauth/v2/token",
          scopes_to_request: [
            "ZohoInventory.items.ALL",
            "ZohoInventory.salesorders.ALL",
            "ZohoInventory.shipmentorders.ALL",
          ],
          client_id: "",
          client_secret: "",
          token_request_content_type: "application/x-www-form-urlencoded",
        },
      },
    },
  },
  {
    slug: "zoho-campaigns",
    label: "Zoho Campaigns",
    description: "Email campaigns, lists, and subscribers on Zoho Campaigns.",
    iconGlyph: "ZM",
    category: "Zoho",
    docs: "https://www.zoho.com/campaigns/help/api/",
    input: {
      name: "Zoho Campaigns",
      description: "Manage lists and subscribers, launch email campaigns on Zoho Campaigns.",
      base_url: "https://campaigns.zoho.com/api/v1.1",
      auth_type: "OAUTH2_CLIENT_CREDENTIALS",
      auth_config: {
        oauth2_client_credentials: {
          token_url: "https://accounts.zoho.com/oauth/v2/token",
          scopes_to_request: ["ZohoCampaigns.campaign.ALL", "ZohoCampaigns.contact.ALL"],
          client_id: "",
          client_secret: "",
          token_request_content_type: "application/x-www-form-urlencoded",
        },
      },
    },
  },
  {
    slug: "zoho-bookings",
    label: "Zoho Bookings",
    description: "Appointments and workspaces on Zoho Bookings.",
    iconGlyph: "ZK",
    category: "Zoho",
    docs: "https://www.zoho.com/bookings/help/api/v1/",
    input: {
      name: "Zoho Bookings",
      description: "Read availability and book appointments on Zoho Bookings.",
      base_url: "https://www.zohoapis.com/bookings/v1",
      auth_type: "OAUTH2_CLIENT_CREDENTIALS",
      auth_config: {
        oauth2_client_credentials: {
          token_url: "https://accounts.zoho.com/oauth/v2/token",
          scopes_to_request: ["zohobookings.data.CREATE", "zohobookings.data.READ"],
          client_id: "",
          client_secret: "",
          token_request_content_type: "application/x-www-form-urlencoded",
        },
      },
    },
  },
  {
    slug: "zoho-salesiq",
    label: "Zoho SalesIQ",
    description: "Website visitors, chats, and departments on Zoho SalesIQ.",
    iconGlyph: "ZS",
    category: "Zoho",
    docs: "https://www.zoho.com/salesiq/help/developer-section/rest-api-v2.html",
    input: {
      name: "Zoho SalesIQ",
      description: "Read live visitors, chats, and department data from Zoho SalesIQ.",
      base_url: "https://salesiq.zoho.com/api/v2",
      auth_type: "OAUTH2_CLIENT_CREDENTIALS",
      auth_config: {
        oauth2_client_credentials: {
          token_url: "https://accounts.zoho.com/oauth/v2/token",
          scopes_to_request: ["SalesIQ.visitors.ALL", "SalesIQ.chats.ALL"],
          client_id: "",
          client_secret: "",
          token_request_content_type: "application/x-www-form-urlencoded",
        },
      },
    },
  },
  {
    slug: "zoho-sign",
    label: "Zoho Sign",
    description: "Send documents for e-signature via Zoho Sign.",
    iconGlyph: "ZG",
    category: "Zoho",
    docs: "https://www.zoho.com/sign/api/",
    input: {
      name: "Zoho Sign",
      description: "Create and dispatch e-signature requests, and read signing status on Zoho Sign.",
      base_url: "https://sign.zoho.com/api/v1",
      auth_type: "OAUTH2_CLIENT_CREDENTIALS",
      auth_config: {
        oauth2_client_credentials: {
          token_url: "https://accounts.zoho.com/oauth/v2/token",
          scopes_to_request: ["ZohoSign.documents.ALL"],
          client_id: "",
          client_secret: "",
          token_request_content_type: "application/x-www-form-urlencoded",
        },
      },
    },
  },
  {
    slug: "zoho-mail",
    label: "Zoho Mail",
    description: "Send and read messages on Zoho Mail.",
    iconGlyph: "ZE",
    category: "Zoho",
    docs: "https://www.zoho.com/mail/help/api/",
    input: {
      name: "Zoho Mail",
      description: "Send and read email through Zoho Mail's API.",
      base_url: "https://mail.zoho.com/api",
      auth_type: "OAUTH2_CLIENT_CREDENTIALS",
      auth_config: {
        oauth2_client_credentials: {
          token_url: "https://accounts.zoho.com/oauth/v2/token",
          scopes_to_request: ["ZohoMail.messages.ALL", "ZohoMail.accounts.READ"],
          client_id: "",
          client_secret: "",
          token_request_content_type: "application/x-www-form-urlencoded",
        },
      },
    },
  },
  {
    slug: "zoho-cliq",
    label: "Zoho Cliq",
    description: "Post messages to channels and DMs on Zoho Cliq.",
    iconGlyph: "ZQ",
    category: "Zoho",
    docs: "https://www.zoho.com/cliq/help/restapi/",
    input: {
      name: "Zoho Cliq",
      description: "Post messages to Zoho Cliq channels, look up users, list channels.",
      base_url: "https://cliq.zoho.com/api/v2",
      auth_type: "OAUTH2_CLIENT_CREDENTIALS",
      auth_config: {
        oauth2_client_credentials: {
          token_url: "https://accounts.zoho.com/oauth/v2/token",
          scopes_to_request: ["ZohoCliq.Webhooks.CREATE", "ZohoCliq.Channels.READ"],
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
