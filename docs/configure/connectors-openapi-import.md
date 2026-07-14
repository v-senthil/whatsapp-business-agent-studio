# Import a connector from an OpenAPI spec

If you already have an OpenAPI 3.x spec for your API, you can import it directly instead of filling in every field by hand. The studio reads the spec and creates one connector plus one tool per HTTP operation.

## What gets created

- **One connector** with its name, description, and base URL taken from the spec's `info` and `servers` fields.
- **One tool per operation** (GET, POST, PUT, PATCH, DELETE) found under `paths`. Each tool gets the operation's `operationId` as its name, its `summary` as its description, and all path, query, header, and body parameters mapped to the studio's parameter types.

Authentication credentials are always left empty after import. Use the **Rotate credentials** page on the connector to add them after creation.

## Try it with the sample spec

If you want to see the flow end-to-end before pointing it at your own API, [download the sample OpenAPI spec](/samples/openapi.yaml) and upload it in the dialog. It defines two endpoints (`/customers/{customer_id}` and `/orders`) with three methods each, so the preview shows six tools spanning path parameters, query parameters, and JSON request bodies.

The full sample:

```yaml
openapi: 3.0.3
info:
  title: Sample Store API
  version: "1.0.0"
  description: A tiny sample spec demonstrating how the studio maps OpenAPI operations to connector tools.
servers:
  - url: https://api.sample-store.example.com/v1

security:
  - BearerAuth: []

paths:
  /customers/{customer_id}:
    get:
      operationId: get_customer
      summary: Fetch a customer by ID
      parameters:
        - name: customer_id
          in: path
          required: true
          schema: { type: string }
    put:
      operationId: update_customer
      summary: Replace the customer record
      parameters:
        - name: customer_id
          in: path
          required: true
          schema: { type: string }
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [name, email]
              properties:
                name: { type: string, description: Customer display name. }
                email: { type: string, description: Customer contact email. }
                phone: { type: string, description: Optional E.164 phone number. }
    delete:
      operationId: delete_customer
      summary: Permanently delete a customer
      parameters:
        - name: customer_id
          in: path
          required: true
          schema: { type: string }

  /orders:
    get:
      operationId: list_orders
      summary: List recent orders
      parameters:
        - name: customer_id
          in: query
          schema: { type: string }
        - name: status
          in: query
          schema:
            type: string
            enum: [pending, paid, shipped, delivered, cancelled]
        - name: limit
          in: query
          schema: { type: integer }
    post:
      operationId: create_order
      summary: Create a new order
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [customer_id, items]
              properties:
                customer_id: { type: string }
                items: { type: array, items: { type: object } }
                notes: { type: string }
    patch:
      operationId: bulk_update_orders
      summary: Bulk update multiple orders
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [order_ids, status]
              properties:
                order_ids: { type: array, items: { type: string } }
                status:
                  type: string
                  enum: [pending, paid, shipped, delivered, cancelled]

components:
  securitySchemes:
    BearerAuth:
      type: http
      scheme: bearer
      description: Store API bearer token.
```

## Open the dialog

Go to **Connectors** in the sidebar and click **Import OpenAPI** in the header. The dialog itself also has a **Download sample spec** link at the bottom of the input step if you would rather grab it from there.

## Step 1: Provide the spec

You can provide the spec in two ways:

- **Upload a file:** click **Upload file** and select a `.yaml`, `.yml`, or `.json` file. Maximum size is 2 MB.
- **Paste text:** copy your spec and paste it into the text area. Maximum paste size is 500 KB. For larger specs, use file upload.

Both YAML and JSON formats are accepted. OpenAPI 3.x only. Swagger 2.0 is not supported. Use Swagger Editor's one-click convert to upgrade it first.

Click **Parse spec** when ready. Any syntax error is shown inline.

## Step 2: Review and adjust the preview

The preview has three sections.

### Connector

- **Name:** pre-filled from `info.title`. Edit it if you want a different display name.
- **Base URL:** pre-filled from `servers[0].url`. If the spec defines multiple servers, a dropdown appears so you can pick one. If the URL contains template variables like `{host}`, replace them with the actual value before submitting.
- **Description:** pre-filled from `info.description`. Edit as needed.

### Authentication scheme

The studio infers auth from `components.securitySchemes`:

| Spec scheme | Studio auth type | Notes |
|---|---|---|
| `apiKey` in header | API Key | Header field name taken from the scheme's `name` |
| `apiKey` in query | API Key | Query parameter name taken from the scheme's `name` |
| `http bearer` | API Key | `Authorization` header with `Bearer ` prefix |
| `http basic` | API Key | `Authorization` header with `Basic ` prefix. You must base64-encode `user:pass` yourself. |
| `oauth2 clientCredentials` | OAuth 2 client credentials | Token URL and scopes taken from the spec. Client ID and secret are left empty. |
| `oauth2` other flows | API Key (skeleton) | The studio only supports `clientCredentials` flow. A warning explains what to do. |
| `mutualTLS` | mTLS | Certificate fields are left empty. Upload your certificate via Rotate credentials. |

If the spec defines multiple schemes, a radio group appears so you can pick which one to use.

If no schemes are defined, the studio defaults to an API Key connector with an empty `Authorization` header.

If you pick an OAuth 2 client-credentials scheme, an **OAuth token URL** field appears below the picker. It is prefilled from `flows.clientCredentials.tokenUrl` when the spec has one, otherwise it starts empty. You must fill in a valid token URL before the studio will let you create the connector.

Credentials are never pre-populated. After the connector is created, go to **Connectors > your connector > Rotate credentials** to add them.

### Tools

Each operation found in `paths` appears as a row with a checkbox. All tools are selected by default. Uncheck any tools you do not want to create. Use the **All** and **None** shortcuts to select or deselect everything at once.

Each row shows:

- The HTTP method badge (color-coded by verb)
- The path template (for example, `/users/{id}`)
- The tool name derived from `operationId`
- The operation's summary

#### How parameters are mapped

| OpenAPI location | Studio field |
|---|---|
| `in: path` | Path parameters |
| `in: query` | Query parameters |
| `in: header` (except Authorization, Content-Type, Accept) | Headers |
| `requestBody` top-level properties | Body params |

Nested object properties in the body are kept as a single `object`-typed parameter. Refine them in the tool editor after import.

### Warnings

If the spec has unusual or unsupported features, a collapsible warnings section appears. Common warnings include:

- Server URL contains template variables
- No security schemes defined
- OAuth2 flow is not `clientCredentials`
- Parameters with no `type` field
- Circular or external `$ref` references

Warnings are non-blocking. You can still submit after reviewing them.

## Step 3: Create

Click **Create connector + N tools**. The dialog shows live progress:

1. Creating connector...
2. Creating tool 1 of N: tool-name...
3. Creating tool 2 of N: ...

If a tool fails, an error toast appears and the import continues with the remaining tools. When complete, the dialog redirects you to the new connector's detail page where you can inspect each tool and rotate credentials.

## After import

- **Rotate credentials:** go to the connector's **Rotate credentials** tab and add your API key, OAuth client credentials, or certificate.
- **Adjust tools:** open any tool to edit its description, rename parameters, or fix body schemas that came in as `object`.
- **Run a tool:** use the **Run** button on a tool to verify the request shape end-to-end before the agent uses it.

## Re-sync when the spec changes

When the API you imported from ships a new version of its spec, use **Re-sync from spec** on the connector's Tools page instead of re-importing from scratch. Re-sync compares the new spec against your existing tools by name and only adds the new operations. Existing tools stay exactly as they are (customized descriptions, tightened required flags, and all).

1. Open **Connectors > your connector > Tools**.
2. Click **Re-sync from spec** in the header.
3. Upload or paste the updated OpenAPI spec.
4. The preview shows a summary: **N new tools** and **M already exist and will be skipped**. Expand the already-exist section to double-check the name matching.
5. Uncheck any of the new tools you do not want, then click **Add N tools**.

Re-sync is additive only. It does not update or delete anything. If an operation was renamed in the spec, the studio treats the old name as an existing tool (untouched) and the new name as a new tool (added). Delete the old one manually if you no longer want it.

If nothing is new (every operation in the spec already has a matching tool), the Add button disables and the preview shows the reason.

## Limitations

- **Swagger 2.0 not supported.** Convert to OpenAPI 3.x using Swagger Editor.
- **PDF and DOCX not accepted.** Paste or upload `.yaml`, `.yml`, or `.json` only.
- **External `$ref` not resolved.** References pointing to other files or URLs are replaced with `type: object`. Re-specify those parameters manually in the tool editor.
- **`allOf`, `oneOf`, `anyOf` not expanded.** These composition keywords produce a single `object`-typed parameter with a warning.
- **Body schema flattening is shallow.** Only top-level properties of a request body schema are turned into named parameters. Nested objects stay as `type: object`.
- **URL fetch not supported.** You cannot paste a URL pointing at a hosted spec. Download the spec file and upload it instead.
