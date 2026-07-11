# Connectors

Connectors are external APIs the agent can call. Each connector defines a base URL and one auth method, and hosts one or more tools that describe individual operations.

## What you'll do

- Understand the three connector auth types.
- Create a connector manually or from a template.
- Move on to defining tools, rotating credentials, and reading the health card.

## Auth types

A connector uses exactly one of these auth methods:

- **API key**, one or more headers, each with a name and value (for example `Authorization: Bearer <key>`).
- **OAuth2 client credentials**, a client ID, client secret, token URL, and scopes.
- **mTLS**, a PEM-encoded certificate and private key.

You pick the auth type when you create the connector. Switching auth types on an existing connector preserves the fields you already filled in for the previous type, so you can flip back without losing data.

## Step-by-step

### Create a connector manually

1. Open **Connectors** from the sidebar.
2. Click **New connector** in the top-right.
3. Fill in the base URL and description.
4. Choose an **Auth type**. The form below switches to the fields for that auth type.
5. Fill in the auth fields.
6. Click **Save**.

### Create from a template

1. On the Connectors list page, click **From template** in the header.
2. A dialog groups prefilled shells by category:
   - **E-commerce**: Shopify, WooCommerce.
   - **Support**: Zendesk, Freshdesk, Intercom.
   - **CRM**: HubSpot, Salesforce.
   - **Payments**: Stripe.
   - **Communication**: Twilio, Slack.
   - **Marketing**: SendGrid, Mailchimp.
   - **Productivity**: Google Sheets, Google Calendar, Calendly, Notion.
   - **Zoho**: CRM, Desk, Books, Inventory, Campaigns, Bookings, SalesIQ, Sign, Mail, Cliq.
3. Pick one. You land on the New connector page with the fields prefilled (correct auth type, header scaffolding, sensible scopes for OAuth).
4. Adjust the base URL where the template has a placeholder like `YOUR-DOMAIN` or `YOUR-STORE`, and swap the Zoho `.com` accounts server for `.in`, `.eu`, `.com.au`, `.jp`, `.com.cn`, or `.ca` if your data is in another region.
5. Fill in your own credentials.
6. Click **Save**.

### Edit or delete

1. Click a connector card. You land on the connector detail page.
2. Edit fields and **Save**.
3. Click **Delete** to remove the connector. Its tools go with it.

## What lives on the detail page

- **Auth rotation** page (link at the top). See [Connector auth rotation](connector-auth-rotation.md).
- **Health** card with 24-hour stats. See [Connector health](connector-health.md).
- **Tools** list. See [Tools](tools.md).

## Troubleshooting

- **Toggling auth types loses my fields**, refresh the page and try again. If the problem persists, note which auth types you flipped between and report the issue.
- **A template did not prefill**, the template link may be stale. Refresh the page.
- **Save is rejected with a schema error**, all fields required by the chosen auth type must be filled in. Missing a client secret on OAuth, for example, will block the save.
