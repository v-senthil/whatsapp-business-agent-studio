# Generating an access token

The token you paste on the login screen is the only credential the app needs. It authorizes every Meta call the server makes on your behalf.

## What you'll do

- Mint a long-lived access token in Meta Business Suite.
- Grant the correct scopes for discovery and agent management.
- Understand rotation expectations and how the token is kept private.

## Step-by-step

1. Open **Meta Business Suite**, then go to **Settings**.
2. Under **Users**, choose **System users** and either create a new system user or open an existing one.
3. Click **Add Assets**, and grant the system user access to the WhatsApp Business Account (WABA) and the app that owns your WhatsApp Cloud API integration.
4. Click **Generate new token**.
5. Select the app associated with your WABA.
6. Under **Token expiration**, choose **Never** for a long-lived token, or 60 days if your policy requires shorter tokens.
7. Under **Available scopes**, check the following:
   - `whatsapp_business_management`, required to list WABAs, phone numbers, and manage the agent.
   - `whatsapp_business_messaging`, required for message sending and Cloud API operations.
   - `business_management`, required if you ever want to enumerate businesses.
8. Click **Generate token**, then copy it immediately. Meta will not show it again.

## Paste the token

1. Open the app in your browser.
2. On the login screen, paste the token into the field and click **Sign in**.
3. The app verifies the token with Meta before storing it. On success you land on the home page.

## Rotation

- Set a calendar reminder for token expiry if you picked a bounded lifetime.
- To rotate, mint a new token in Meta Business Suite, sign out from the account menu in the top-right, and sign back in with the new value.
- If you suspect a leak, revoke the token in Meta Business Suite immediately. Your next action in the app will fail and bounce you back to the login screen.

## How the token stays private

- The token is kept on our servers, inside an encrypted session. The browser never sees it.
- Every Meta API call is made from the server side. Your browser only ever sees the results, never the credential.
- Because of that, sharing your screen or copying anything from the browser dev tools cannot leak the token.

## Troubleshooting

- **Login fails with an authentication error**, the token is invalid or missing scopes. Re-check the scopes above and generate a new token.
- **Login succeeds but discovery shows no WABAs**, your system user is not assigned to any WABA. Go back to **Add Assets** in Meta Business Suite and assign it.
- **Token works locally but not on the deployed instance**, your deployed environment is missing its session secret. Ask whoever manages the deployment to set it. See [Deployment](../reference/deployment.md).
