# Connector auth rotation

Every connector has an **Auth** page that rotates credentials without recreating the connector.

## What you'll do

- Rotate an API key, OAuth client secret, or mTLS certificate.

## Step-by-step

1. Open a connector's detail page.
2. Click **Auth** in the header (or in the tabs, depending on your layout).
3. The form matches the connector's current auth type.
4. Enter the new credentials:
   - **API key**, update the header value.
   - **OAuth2 client credentials**, paste a new client secret (and other fields if they changed).
   - **mTLS**, paste the new PEM certificate and private key.
5. Click **Save**.

## When to rotate

- **On a schedule**, per your internal secret rotation policy.
- **After an incident**, if a credential may have leaked.
- **After importing a config JSON without credentials**, since imports strip secrets by default. An amber alert on import reminds you to rotate. See [Config export and import](../advanced/config-export-import.md).

## Good to know

Rotation happens instantly and takes effect on the next tool call. There is no propagation delay.

## Troubleshooting

- **Rotation succeeds but tool calls still fail with 401**, the credentials are wrong. Test them against the vendor directly (for example a manual curl) before saving. The app does not validate credentials at save time.
- **You are on the Auth page but the form does not match your auth type**, edit the connector first and confirm the auth type is set correctly. See [Connectors](connectors.md).
