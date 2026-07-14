# Connectors

![Connectors list](/help/screenshots/configure/connectors/list.png)

Connectors are external APIs the agent can call. Each connector defines a base URL and one auth method, and hosts one or more tools that describe individual operations.

## What you'll do

- Understand the three connector auth types.
- Create a connector from a template, from an OpenAPI spec, or manually.
- Move on to defining tools, rotating credentials, and reading the health card.

## Auth types

A connector uses exactly one of these auth methods:

- **API key**, one or more headers, each with a name and value (for example `Authorization: Bearer <key>`).
- **OAuth2 client credentials**, a client ID, client secret, token URL, and scopes.
- **mTLS**, a PEM-encoded certificate and private key.

You pick the auth type when you create the connector. Switching auth types on an existing connector preserves the fields you already filled in for the previous type, so you can flip back without losing data.

## Step-by-step

### Create from a template

The template library ships 14 prefilled connector shells for common SaaS APIs, grouped by category:

- **E-commerce**: Shopify, WooCommerce
- **Payments**: Stripe
- **Support**: Zendesk, Freshdesk, Intercom
- **CRM**: HubSpot, Salesforce
- **Communication**: Twilio, Slack
- **Marketing**: SendGrid, Mailchimp
- **Productivity**: Calendly, Notion

Each template comes with the right `auth_type`, base URL, and (for OAuth templates) token URL and default scopes. You only need to fill in your own credentials.

1. On the Connectors list page, click **From template** in the header.
2. Pick a template. You land on the New connector page with the fields prefilled.
3. Follow the linked docs on the template card to mint credentials for the target API (usually an API key or an OAuth client).
4. Paste the credentials into the auth fields and click **Save**.

### Create from an OpenAPI spec

If you already have an OpenAPI 3.x spec for your API, you can create the whole connector plus one tool per operation in one step. This is the fastest path when the vendor publishes a spec and there is no template for it.

1. On the Connectors list page, click **Import OpenAPI** in the header.
2. Paste the spec into the text area (500 KB cap) or upload a `.yaml`, `.yml`, or `.json` file (2 MB cap).
3. Review the auto-generated connector card, pick a server if the spec defines several, pick an auth scheme if it defines several, uncheck any tools you do not want, then click **Create**.
4. Credentials stay empty. Open **Rotate credentials** on the new connector and fill them in.

See [Import connector from OpenAPI spec](connectors-openapi-import.md) for the full walkthrough, including how each OpenAPI security scheme maps to a studio auth type.

### Create a connector manually

1. Open **Connectors** from the sidebar.
2. Click **New connector** in the top-right.
3. Fill in the base URL and description.
4. Choose an **Auth type**. The form below switches to the fields for that auth type.
5. Fill in the auth fields.
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
