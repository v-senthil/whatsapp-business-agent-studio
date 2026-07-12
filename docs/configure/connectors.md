# Connectors

![Connectors list](/help/screenshots/configure/connectors/list.png)

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

The template library has three families: **Zoho** (default, every Zoho product with a documented API), **Google** (Workspace, Marketing, and Cloud APIs), and **Others** (universally available third-party APIs). Every template ships with OAuth 2.0 scopes and the correct token URL preset.

1. On the Connectors list page, click **From template** in the header.
2. The dialog opens with a filter row at the top: **Zoho · Google · Others · All**. It defaults to **Zoho**. Each tab shows a count next to its label so you know what's under each.
3. Under **Zoho**, templates are grouped by product family:
   - **Sales & CRM**: CRM, Bigin, SalesIQ, Backstage.
   - **Support**: Desk, Assist, Lens.
   - **Finance**: Books, Invoice, Expense, Billing (formerly Subscriptions), Checkout, Practice.
   - **Inventory & Commerce**: Inventory, Commerce.
   - **HR & People**: People, Recruit, Payroll, Shifts.
   - **Marketing**: Campaigns, Marketing Automation, Social, Survey, Forms, PageSense, Sites.
   - **Productivity**: Mail, Cliq, Meeting, WorkDrive, Writer, Sheet, Show, Notebook, Bookings, Calendar, Vault, Connect.
   - **Analytics**: Analytics, DataPrep.
   - **Developer**: Creator, Flow, Catalyst, Directory.
   - **Sign & Contracts**: Sign, Contracts.
   - **Events & Learning**: Learn, Webinar.
4. Under **Google**, templates are grouped by function:
   - **Productivity**: Sheets, Docs, Slides, Drive, Calendar, Tasks, Contacts.
   - **Communication**: Gmail, Chat, Meet.
   - **Marketing**: Ads, Search Console, YouTube Data.
   - **CRM**: Business Profile.
   - **Analytics**: Google Analytics (GA4 Data API).
   - **Developer**: Cloud Translation, Cloud Vision, Cloud Speech-to-Text, Cloud Text-to-Speech, Cloud Natural Language, Cloud Pub/Sub, Firebase Cloud Messaging.
5. Under **Others**, templates are grouped by industry category:
   - **E-commerce**: Shopify, WooCommerce.
   - **Payments**: Stripe.
   - **Support**: Zendesk, Freshdesk, Intercom.
   - **CRM**: HubSpot, Salesforce.
   - **Communication**: Twilio, Slack.
   - **Marketing**: SendGrid, Mailchimp.
   - **Productivity**: Calendly, Notion.
6. Pick one. You land on the New connector page with the fields prefilled.
7. Mint credentials for the target API:
   - **Zoho** templates: register a client on the [Zoho API Console](https://api-console.zoho.com/) for your data center, then paste the **Client ID** and **Client Secret**.
   - **Google** templates: create a project on [Google Cloud Console](https://console.cloud.google.com/), enable the specific API for the product you picked, create an OAuth 2.0 client, and paste its **Client ID** and **Client Secret**.
   - **Others**: follow the linked docs on the template card to mint the credentials the connector needs (usually an API key or an OAuth client).
8. **Data center for Zoho**: swap the `.com` suffix on both the token URL and the base URL if your Zoho org is in another region: `.in`, `.eu`, `.com.au`, `.jp`, `.com.cn`, or `.ca`.
9. **Scopes**: each template ships with a minimum set. Add more if a tool needs them; keep the list tight so client-secret leaks have limited blast radius.
10. Click **Save**.

### Zoho region cheatsheet

| Region                | Accounts server               | API host                        |
|-----------------------|-------------------------------|---------------------------------|
| United States         | `accounts.zoho.com`           | `www.zohoapis.com`              |
| India                 | `accounts.zoho.in`            | `www.zohoapis.in`               |
| Europe                | `accounts.zoho.eu`            | `www.zohoapis.eu`               |
| Australia             | `accounts.zoho.com.au`        | `www.zohoapis.com.au`           |
| Japan                 | `accounts.zoho.jp`            | `www.zohoapis.jp`               |
| China                 | `accounts.zoho.com.cn`        | `www.zohoapis.com.cn`           |
| Canada                | `accounts.zohocloud.ca`       | `www.zohoapis.ca`               |

Update both the **token URL** in the OAuth section and the connector's **base URL** to match your region before saving.

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
