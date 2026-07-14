# Order tracking on WhatsApp

Let customers ask "where is my order?" on WhatsApp and get an accurate answer without waiting for a human. This recipe uses Shopify as the example. The shape is identical for WooCommerce, BigCommerce, Magento, or an internal orders API.

## What you will build

- A **Shopify connector** authenticated with an Admin API access token.
- Two **tools**: one to look up an order by name (the customer-facing ID) and one to fetch the latest fulfillment status.
- One **skill** that recognizes order IDs and calls the tools.
- One **FAQ** with the shipping policy so the agent has a fallback answer.

## Before you start

- A Shopify store you have admin access to.
- A test order in that store with a customer whose phone matches the number you will test with.
- A rough idea of what your order IDs look like ("NC-12345" or "#1234" or a UUID).

## 1. Create the connector

Open **Connectors** and click **From template**. Pick **Shopify**.

You land on the New connector page with the base URL and auth scaffolding prefilled. Replace the store domain placeholder in the base URL with yours: `https://<your-store>.myshopify.com/admin/api/2024-10`.

Auth: API Key.

- **Header field**: `X-Shopify-Access-Token`
- **Header value**: your Admin API access token (created under Settings > Apps > Develop apps > your custom app > API credentials in the Shopify admin).

Save. Open the connector detail page. The Health card should say **Connected**. If it says **Disconnected** the token is wrong, revoked, or missing the required scopes.

Required scopes: `read_orders`, `read_fulfillments`, `read_customers`.

## 2. Add the tools

You have two options: type them by hand or import from Shopify's OpenAPI spec. If you go the OpenAPI route, use [Import from OpenAPI spec](../configure/connectors-openapi-import.md) with a slice of Shopify's spec covering orders and fulfillments. Otherwise:

### Tool 1: `find_order_by_name`

On the connector detail page, click **Tools > New tool**.

- **Name**: `find_order_by_name`
- **Description**: `Looks up an order by its customer-facing name (starts with # or NC-, followed by digits). Requires the order name in the order_name parameter. Returns the order ID, financial status, fulfillment status, current total, and customer contact.`
- **Method**: GET
- **Path**: `/orders.json`
- **Query parameters**:
  - `name` (string, required): The order name including the leading # or NC- prefix.
  - `status` (string): Filter to a specific status. Defaults to "any". Accepts "open", "closed", "cancelled", "any".

Save. Open the Run panel and try a name you know exists. Confirm you get back an order.

### Tool 2: `get_fulfillment_status`

Click **New tool** again.

- **Name**: `get_fulfillment_status`
- **Description**: `Fetches the latest fulfillment details for a specific order. Requires the order ID in the order_id parameter. Returns tracking numbers, carrier name, shipped-at timestamp, and estimated delivery date if available.`
- **Method**: GET
- **Path**: `/orders/{order_id}/fulfillments.json`
- **Path parameters**:
  - `order_id` (string, required): The internal Shopify order ID returned by `find_order_by_name` (not the customer-facing name).

Save. Test with a valid order ID.

## 3. Write the skill

Open **Skills > New skill**.

- **Title**: `order-tracking-lookup`
- **Description**: `When the customer asks about the status of an existing order, or shares an order name (a value starting with # followed by digits, or with NC- followed by digits), or asks when their delivery will arrive.`
- **Skill body**:

```
1. Extract the order name from the user's message. Order names start with # or NC-, followed by digits.

2. If no order name is present in the message or the recent conversation, politely ask for it. Example: "Sure, I can help. What's your order number? It starts with # or NC- and has 4 or more digits."

3. Once you have an order name, call the find_order_by_name tool with the name.

4. If the tool returns no order, apologize and confirm the format: "I couldn't find #12345. Order numbers start with # or NC-. Can you double-check?"

5. If the tool returns an order, note the internal order ID and the current fulfillment_status. If the status is "unfulfilled", tell the customer the order has not shipped yet and quote the estimated ship date from our shipping policy (see FAQs).

6. If the status is "fulfilled" or "partial", call the get_fulfillment_status tool with the order_id. Quote the tracking number, carrier, and estimated delivery date. Provide the tracking URL if available.

7. Ask if they need anything else about this order.

If any tool errors, apologize, share our support email (support@example.com), and hand off to a human agent.
```

Save.

## 4. Add the shipping-policy FAQ

The skill body refers to a shipping policy for unfulfilled orders. Add it as an FAQ so the agent quotes it consistently.

Open **Knowledge > FAQs > New FAQ**.

- **Question**: `How long does shipping take?`
- **Answer**: `We ship orders within 2 business days of placement. Standard shipping takes 3 to 5 business days in the continental US and 7 to 14 days internationally. You will receive a tracking number by email once the order ships.`
- **Metadata (optional)**: `{"topic": "shipping", "region": "global"}`

Save.

## 5. Test in the studio

Open the **Test chat**.

Send: `Where is order #12345?` (use a real order name).

Expected flow:
- The model picks the `order-tracking-lookup` skill.
- It calls `find_order_by_name` with `name: "#12345"`.
- It calls `get_fulfillment_status` if applicable.
- It quotes the tracking number and estimated delivery.

Now try the failure paths:

- **No order name**: `Where is my order?` should get the polite ask.
- **Bad format**: `Where is order 12345?` (no # prefix) should be caught by the ask step, or the model may still find it. Confirm behaviour matches your expectation.
- **Unknown order**: `Where is order #99999999?` should get an apology, not a fabricated answer.
- **Unfulfilled**: place a test order, do not fulfill it, ask about it. The reply should quote the shipping policy.

Once each path works, click **Save as scenario** on each conversation and label them. Replay them any time you change the skill or connector.

## 6. Rollout

Set rollout to 10% and monitor the connector health card for a few hours. If the success rate stays above 95% and p95 latency is under 3 seconds, bump to 50%. See [Pre-launch checklist](../reference/pre-launch-checklist.md) for the full cutover procedure.

## Adapting to WooCommerce, BigCommerce, or an internal API

The shape is identical:

- **WooCommerce**: use Consumer Key + Consumer Secret with HTTP Basic auth, base URL `https://<store>/wp-json/wc/v3`, endpoints `/orders` and `/orders/{id}`. See [Connector auth API-key](../configure/connector-auth-api-key-stripe.md) for the base64 encoding trick if the Basic auth checkbox is not applicable.
- **BigCommerce**: use API Account token with `X-Auth-Token` header, base URL `https://api.bigcommerce.com/stores/<hash>/v2`, endpoints `/orders` and `/orders/{id}/shipments`.
- **Internal API**: whichever auth you already use. The skill body stays the same, just point the tools at your own endpoints.

## Troubleshooting

- **`find_order_by_name` returns an empty array for orders you know exist.** Your token is missing the `read_orders` scope, or you are looking in the wrong store. Recheck the store domain in the base URL and the token scopes.
- **The model calls the tool with `#12345` and gets nothing back.** Shopify's API may strip the leading `#` when normalizing. Add "Remove the leading # before calling the tool if the API requires it" to step 3 in the skill body.
- **Delivery estimates are wrong.** The `estimated_delivery_at` field is not always populated. If the tool response omits it, the skill body should fall back to quoting the shipping policy rather than making up a date.

## Related

- [Connectors](../configure/connectors.md)
- [Tools](../configure/tools.md)
- [Writing good skills](../configure/writing-good-skills.md)
- [Import from OpenAPI spec](../configure/connectors-openapi-import.md)
