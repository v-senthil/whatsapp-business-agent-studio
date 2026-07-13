# Connector auth: API key (Stripe example)

API-key auth is the simplest connector auth mode. You paste a static secret (in a header, a query parameter, or a body field) and the studio sends it verbatim on every call to that connector.

Stripe is the canonical example: you get a live secret key (`sk_live_...`) from the Stripe dashboard, wire it into the `Authorization` header with the prefix `Bearer `, and every tool on the connector inherits that auth.

## When to use API-key auth

- The vendor gives you a long-lived secret string, not an OAuth client ID and secret.
- Requests are server-to-server; there is no per-user consent flow.
- The vendor's API docs show examples with headers like `Authorization: Bearer <key>`, `X-API-Key: <key>`, or `Api-Key <key>`.

If any of those are true, use API-key auth. If instead the vendor's docs walk you through generating a client ID and secret and exchanging them for a token, use [OAuth client credentials](./connector-auth-oauth-salesforce.md).

## Where to get a Stripe key

1. Sign in to Stripe Dashboard.
2. Open **Developers > API keys**.
3. Copy the **Secret key** starting with `sk_live_...` (or `sk_test_...` for a sandbox).

Use the restricted-key option if you can. A restricted key can be scoped to just the endpoints your tools actually call, which limits blast radius if the key ever leaks.

## Wire it into the studio

Open **Connectors > New** (or **From template > Stripe**) and fill in:

- **Name**: `Stripe`
- **Description**: One sentence, so the agent understands when to call these tools. Example: `Reads charges, creates payment links, and issues refunds.`
- **Base URL**: `https://api.stripe.com/v1`
- **Auth type**: **API Key**
- **Field name**: `Authorization`
- **Value**: your `sk_live_...` key
- **Prefix**: `Bearer ` (note the trailing space)
- **Location**: Header

Save. The connector detail page's Health card should say **Connected**. If it says **Disconnected** or **Error**, the key is wrong or the prefix does not match what Stripe expects.

## Header, query, or body?

Different vendors put API keys in different places. The picker on the New Connector form lets you choose. Some common patterns:

| Vendor | Location | Field name | Prefix |
| --- | --- | --- | --- |
| Stripe | Header | `Authorization` | `Bearer ` |
| SendGrid | Header | `Authorization` | `Bearer ` |
| Twilio | Header | `Authorization` | `Basic ` (base64 of `SID:TOKEN`) |
| Pipedrive | Query | `api_token` | (none) |
| Mailchimp | Header | `Authorization` | `apikey ` |
| Postmark | Header | `X-Postmark-Server-Token` | (none) |

If the vendor's docs say "add the header `X-API-Key: yourkey`", set field name to `X-API-Key` and leave prefix blank.

## Rotating the key

You should rotate API keys periodically, at minimum whenever a teammate with access leaves.

1. Generate a new key in the vendor dashboard.
2. Open the connector in the studio.
3. Click **Rotate credentials**.
4. Paste the new key.
5. Save. The next tool call uses the new key immediately.
6. Delete or revoke the old key from the vendor dashboard.

The studio does not roll keys automatically. That is a deliberate choice: you control when the cutover happens, so you can watch for failures.

## Troubleshooting

**401 Unauthorized on every call.** Confirm the prefix matches exactly (`Bearer ` with a space, not `bearer` and no space). Stripe rejects any casing other than the documented `Bearer `.

**403 Forbidden on some calls but not others.** You are using a restricted key that does not have permission for that endpoint. Widen the restrictions or generate a new key with the needed scopes.

**429 Too Many Requests.** You are hitting the vendor's rate limit. Slow down: reduce how often the skill calls this tool, or spread calls across multiple agents.

**"Connection status: Disconnected" but the key is correct.** The studio checks connectivity by attempting a lightweight call to the base URL. Some vendors reject arbitrary root-URL requests even with a valid key. This is cosmetic; try running an actual tool to confirm the key works.

## What the browser sees

Nothing. API keys are stored server-side in the studio's session store. The browser only ever sees a boolean "has an API key configured" flag. When a tool runs, the request goes from the browser to the studio to the vendor; the vendor's response is proxied back. The key never touches the customer's device or the agent's response text.

## Export considerations

When you export the agent config as JSON, credentials are stripped by default. If you check **Include credentials**, the API key is included in the exported bundle. Only do this for backup, and encrypt the file at rest. See [Config export and import](../advanced/config-export-import.md).
