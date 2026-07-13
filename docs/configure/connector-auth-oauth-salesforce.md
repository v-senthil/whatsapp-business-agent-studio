# Connector auth: OAuth client credentials (Salesforce example)

OAuth client credentials is the auth mode you want when the vendor requires an application, not a person, to authenticate, and issues short-lived access tokens rather than one static key.

Salesforce is the canonical example: you create a Connected App, get a client ID and client secret, and the studio exchanges them for a bearer token that expires every couple of hours. The studio refreshes the token automatically before each tool call, so from the agent's perspective the connector is always ready.

## When to use OAuth client credentials

- The vendor's docs walk you through creating an "App" or "Integration" and give you a Client ID and Client Secret.
- The vendor requires a token exchange step to convert those into a bearer token.
- The vendor's docs mention "scopes" that you request when getting the token.
- You want a per-application audit trail rather than a shared API key.

If none of that applies and you just have a long string, use [API-key auth](./connector-auth-api-key-stripe.md) instead.

## Set up a Salesforce Connected App

1. Sign in to Salesforce Setup (the gear icon).
2. Navigate to **App Manager > New Connected App**.
3. Set:
   - **Connected App Name**: `WhatsApp Agent Studio`
   - **API Name**: auto-fills
   - **Contact Email**: yours
4. Under **API (Enable OAuth Settings)**:
   - Check **Enable OAuth Settings**.
   - **Callback URL**: any HTTPS URL; the client-credentials grant does not actually redirect there, but Salesforce requires the field. Use `https://example.com/callback`.
   - **Selected OAuth Scopes**: pick the minimal set you need. For read-only access to accounts and contacts, `Access and manage your data (api)` is usually enough.
   - Check **Enable Client Credentials Flow**.
5. Save. Salesforce warns that the app can take up to 10 minutes to become active.

Once active:

1. Click **Manage** on the new app.
2. Click **Edit Policies**.
3. Under **Client Credentials Flow**, set **Run As** to a dedicated integration user (create one if you have to). The tokens issued via this flow will act as that user, so give it the minimum profile permissions your tools need.
4. Save.

Copy the **Consumer Key** (client ID) and **Consumer Secret** (client secret) from the app detail page.

## Wire it into the studio

Open **Connectors > New** and fill in:

- **Name**: `Salesforce`
- **Description**: `Reads accounts and contacts, creates cases for support handoffs.`
- **Base URL**: your Salesforce instance URL followed by `/services/data/v60.0`, for example `https://myorg.my.salesforce.com/services/data/v60.0`
- **Auth type**: **OAuth Client Credentials**
- **Token URL**: `https://myorg.my.salesforce.com/services/oauth2/token` (adjust `myorg` to your instance)
- **Client ID**: the Consumer Key from Salesforce
- **Client Secret**: the Consumer Secret
- **Scopes**: leave empty for Salesforce; the client-credentials flow uses the scopes configured on the Connected App itself
- **Token request content type**: `application/x-www-form-urlencoded`

Save. The connector Health card should say **Connected** within a few seconds of the first tool call.

## How the token exchange works

You do not have to do anything, but it helps to know what is happening under the hood so you can debug when it breaks:

1. The first time a tool runs on this connector, the studio POSTs to the Token URL with your client ID and secret using the `client_credentials` grant.
2. The vendor returns an access token with an `expires_in` value.
3. The studio caches that token in memory and uses it for every tool call until it approaches expiry.
4. When the token is about to expire, the studio quietly requests a new one before the next tool call.
5. If a tool call ever comes back with a 401 despite a fresh token, the studio requests a new token and retries once.

The client secret is stored server-side; the browser never sees it. The access token lives only in server memory.

## Rotating the client secret

Rotate periodically, and immediately if the secret is exposed.

1. Generate a new client secret in the Salesforce Connected App detail page (**Consumer Details > Regenerate Consumer Secret**).
2. Open the connector in the studio.
3. Click **Rotate credentials**.
4. Paste the new client secret. Leave client ID unchanged unless you also regenerated that.
5. Save. The next tool call fetches a token with the new secret.
6. Revoke or delete the old secret in Salesforce.

## Troubleshooting

**"invalid_client" from the token endpoint.** Client ID or client secret is wrong. Double-check both, and confirm you copied the Consumer Key, not the Connected App name.

**"unsupported_grant_type" from the token endpoint.** Salesforce Connected App does not have Client Credentials Flow enabled. Go back to **App Manager > your app > Manage > Edit Policies** and enable it.

**"Invalid session ID" on tool calls despite a valid token.** The token was issued for the wrong instance URL. Confirm the Base URL and Token URL both point at the same Salesforce instance (production vs sandbox vs a specific pod).

**Tokens keep expiring mid-conversation.** Rare. Client-credentials tokens on Salesforce last about two hours by default. If yours expires faster, check the Connected App's session policies.

## What the browser sees

Nothing sensitive. The client ID, client secret, and access token all live server-side. The browser only sees a "connector configured" flag. When a tool runs, the request path is: browser to studio, studio refreshes the token if needed, studio calls Salesforce, response proxies back.

## Adapting to other OAuth vendors

- **Google Cloud APIs**: use OAuth client credentials with the service-account JSON exchanged via `assertion` grant. Not directly supported; use API-key auth with a service-account API key instead.
- **Microsoft Graph / Azure**: works out of the box. Token URL is `https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token`. Scopes: `https://graph.microsoft.com/.default`.
- **Slack**: use bot tokens (API-key auth), not client-credentials. Slack's OAuth is user-scoped, not app-scoped.
- **HubSpot**: private app tokens (API-key auth). HubSpot's OAuth flow is for public apps distributed to third parties.

Rule of thumb: if the vendor's OAuth section is titled "app-only" or "server-to-server", client-credentials works. If it is titled "user delegation" or "on behalf of", you cannot use this flow.
