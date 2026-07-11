# Webhooks

Receive Meta webhook events on a live page, filter by signed vs unverified, and expand rows for detail.

## What you'll do

- Configure Meta to send webhooks to this app.
- Watch events land in the live UI.
- Filter and inspect events.

## Configure Meta

1. In Meta Business Suite, configure your app's webhook to point at `https://<your-host>/api/webhooks/meta` with a verify token that matches your app's configured verify token.
2. Save. The app responds to Meta's verification handshake automatically.
3. Subscribe to the events you care about.

You need to have set `META_APP_SECRET` and `META_WEBHOOK_VERIFY_TOKEN` for the signature check and verification handshake to work. See [Prerequisites](../getting-started/prerequisites.md).

## Watch events in the UI

1. Open **Webhooks** from the sidebar.
2. New events stream in live as Meta delivers them.
3. Use the **search** input to filter across the summary, headers, and body text.
4. Use the **Signed / Unverified** segmented control to filter by signature status.
5. Click a row to expand and see the full headers and body.

## Good to know

- If `META_APP_SECRET` is not set, incoming events are still accepted but marked as **unverified**. This is fine for local development but not for production.
- The event history on this page is in-memory only. On a server restart or cold start, the list is cleared. The UI shows a note about this.

## Troubleshooting

- **All events show "unverified"**, the app secret is not set on the server. Set it and restart.
- **Meta shows "Callback URL could not be validated"**, your verify token in Meta's UI does not match the one on the server.
- **Events vanish after a deploy**, the buffer is in-memory. Expected behavior after a restart.
