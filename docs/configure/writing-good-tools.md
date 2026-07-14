# Writing good tools

A tool is one HTTP operation the agent can call. Whether the model calls it correctly depends on the tool description and the parameter definitions. This page is the design guide.

## The two audiences

Every tool field speaks to two different readers:

- **The model** reads the tool name, tool description, parameter names, parameter descriptions, and which params are required. This is what it uses at runtime to decide whether to call the tool and what arguments to pass.
- **You and your teammates** read those same fields plus the request definition (method, path, headers, body shape). This is what humans use to debug and maintain the tool.

Everything you write is for both audiences. The tool description in particular is not documentation, it is a runtime prompt.

## Tool name

Pick a short, verb-first, kebab-cased name. The model does refer to it in its reasoning, so a clear name reduces ambiguity.

Good:

- `get_customer_by_email`
- `create_order`
- `list_active_subscriptions`

Bad:

- `hubspot_call_1` (opaque)
- `customer` (a noun, not an operation)
- `getCustomerAndAlsoTheirRecentOrders` (should be two tools)

## Tool description

The tool description is the single most important field. The model reads it when deciding whether this tool matches the user's intent. Write it in three sentences:

1. What the tool does, in the present tense.
2. What inputs it needs.
3. What outputs it returns.

Example:

> Fetches a customer record by email address. Requires the email address in the customer_email parameter. Returns the customer's ID, display name, loyalty tier, and last-active timestamp.

Compare with bad:

> Gets a customer. (Too short. The model has nothing to match on.)

Compare with another bad:

> Hits the /customers endpoint of the HubSpot CRM API. Uses OAuth 2 client credentials with the crm.objects.contacts.read scope. Returns a paginated array of contact records, filtered by the query parameters passed in. Under the hood this calls the v3 Search API which is the recommended replacement for the deprecated v1 GET endpoint... (Too much. The model reads the whole thing on every message and pays attention to signals that do not matter for its decision.)

Rule of thumb: 40 to 100 words. Verb first. Name the inputs and the outputs.

## Parameters

Every parameter has a name, a type, and a description. All three matter.

### Name

Match the API's actual parameter name. If the API expects `customerId`, use `customerId`, not `customer_id`, so you can pass it straight through. If you want a different display name, the description is where it goes.

### Type

Studio types are `string`, `integer`, `number`, `boolean`, `array`, `object`. Pick the tightest one. `integer` when the API wants a whole number. `boolean` when the parameter is a flag.

For `array` parameters, also set `items` to the type of each element (`string`, `integer`, etc.). Otherwise the model has to guess what to put in the array.

### Description

The parameter description tells the model what to fill in. Write it so a stranger could figure out the right value from just the description.

Good:

- `The customer's email address in RFC 5322 format. Required.`
- `The order status filter. Accepts one of: pending, paid, shipped, delivered, cancelled.`
- `Maximum number of results to return. Defaults to 20 when omitted. Maximum 100.`

Bad:

- `Email.` (Format not specified. The model may include a display name or angle brackets.)
- `Status.` (Which values are valid? The model will guess.)
- `Limit.` (Of what? What is the default?)

For array parameters, describe both the array and what goes in each element.

### Required parameters

Mark a parameter as **Required** in the studio only if the API rejects the call without it. The model will refuse to call the tool if a required parameter has no source in the conversation, which is the right behaviour for genuinely required inputs but blocks the call unnecessarily for optional inputs you happen to have.

Rule of thumb: required = "the API returns 400 without this."

## Method and path

- **Method:** GET for reads, POST for creates, PUT for full replacement, PATCH for partial update, DELETE for removal. Follow the API's convention, not what feels natural.
- **Path:** relative to the connector's base URL. Path parameters go in braces: `/customers/{customer_id}`. The name inside the braces must match a path parameter you defined.

## Body parameters

Body parameters are the fields inside a JSON request body. Each one is a separate parameter row.

For nested objects, keep the top-level property as `type: object` and describe its shape in the description. The studio does not descend into nested objects at the parameter level. If you need deep validation, do it in your API.

For arrays of objects, use `type: array` with `items: object`. Describe the shape of each element in the description.

## Run a tool before you trust it

Every tool has a **Run** panel on its detail page. Paste a JSON payload matching your parameter shape, hit Run, inspect the response.

Do this before you rely on the tool in production:

1. Run with a valid payload, verify the shape of the successful response.
2. Run with missing required fields, verify the API returns a clear error the model can act on.
3. Run with a bad value (unknown status, malformed date), verify the error is not silently swallowed.

If the API returns rich error messages, the model can retry with better arguments. If it returns a generic 400, the model gives up. Consider adjusting your API to return specific errors, or add hints to the tool description.

## Tools that use the OpenAPI import

If your API publishes an OpenAPI 3.x spec, use the [Import from OpenAPI spec](connectors-openapi-import.md) flow instead of writing tools by hand. The parser generates one tool per operation with method, path, parameters, and body shape already filled in. You can then edit descriptions to be prompt-friendly rather than reference-style.

Common cleanup after import:

- Rewrite terse `summary` fields into three-sentence descriptions.
- Remove response codes and error metadata that the model does not need.
- Add units, formats, and value ranges to parameter descriptions.
- Mark parameters as required only when the API actually requires them (not just when the spec says `required`).

If your spec changes, the studio has a **Re-sync from spec** button on the Tools list that adds only the operations you do not have yet, leaving your customizations to existing tools intact.

## Anti-patterns

- **Descriptions that read like API reference.** The model does not need to know the HTTP status codes. It needs to know what the tool does and what it returns.
- **Everything required.** Marks every parameter as required "to be safe." The model refuses to call the tool if the conversation does not surface every required value, even when the API is fine without some of them.
- **The mega-tool.** One tool with a switch parameter that says "if type=lookup, look up a customer; if type=create, create one." Split it into two tools with clear descriptions.
- **Silent failure.** The API returns 200 with an error message in the body ("Customer not found"). The model treats 200 as success and quotes the error message back to the user. Either make your API return a proper 4xx, or add "returns an `error` field on failure" to the tool description so the model handles it.

## Related

- [Tools page (UI reference)](tools.md)
- [Connectors](connectors.md)
- [Import from OpenAPI spec](connectors-openapi-import.md)
- [Writing good skills](writing-good-skills.md)
