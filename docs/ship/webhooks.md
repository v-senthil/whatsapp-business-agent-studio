# Webhooks

Receive Meta webhook events on a live page, filter by phone number and signature status, and register a per-phone callback URL without leaving the app.

## What you'll do

- Point Meta at this app so it starts sending events.
- Register a per-phone callback URL for the current phone, so multiple phones can share one Meta app but route events independently.
- Watch events land in the live UI, filter to only the events for this phone, and inspect their headers and body.

## Set up the server

Before Meta can send events, two values need to be set in your server environment:

- `META_WEBHOOK_VERIFY_TOKEN`, a string of your choosing. Meta calls the callback URL once with this value and expects the server to echo back the challenge.
- `META_APP_SECRET`, your Meta app's secret. Used to verify the HMAC signature on incoming events. Optional, but events without a valid signature will show as **Unverified** in the UI.

See [Prerequisites](../getting-started/prerequisites.md) for how to set these.

## Register a callback URL

You have two ways to tell Meta where to send events.

### Option A. App-level (all phones on the app)

1. In Meta Business Suite, open your app's Webhooks section.
2. Set the callback URL to `https://<your-host>/api/webhooks/meta`.
3. Set the verify token to the same value you put in `META_WEBHOOK_VERIFY_TOKEN`.
4. Save. Meta hits the callback URL to verify.
5. Subscribe to the WhatsApp fields you care about (usually **messages**).

This sends events for every phone attached to the app to the same URL.

### Option B. Per-phone (this phone only)

Use this when several phones share one Meta app but you want each phone to point at a different callback URL.

1. Open **Webhooks** from the sidebar for the phone you want to configure.
2. Click **Configure webhook** at the top right.
3. The dialog shows the phone number ID (read-only) and a callback URL, prefilled with the current app URL.
4. Optionally change the callback URL if you want to send events elsewhere.
5. Click **Save configuration**. The app sends the callback URL to Meta and uses `META_WEBHOOK_VERIFY_TOKEN` from the server as the verify token, so you never need to type or paste it into the browser.
6. To remove the override and fall back to the app-level URL, open the dialog again and click **Clear override**.

## Watch events in the UI

1. Open **Webhooks** from the sidebar.
2. New events stream in live as Meta delivers them. Each card shows a summary, the timestamp, and the phone number ID the event was for.
3. **This phone only** is on by default. It hides events whose phone number does not match the current phone. When there are events for other phones, a small `+N for other phones` link appears next to the event count so you can widen the filter with one click.
4. Use the **search** input to filter across the summary, headers, and body text.
5. Use the **Signed / Unverified** segmented control to filter by signature status.
6. Click a row to expand and see the full headers and body.

## Good to know

- The verify token is only ever handled on the server. The dialog does not ask for it and no browser code has access to it.
- If `META_APP_SECRET` is not set, events still land in the UI but are flagged as **Unverified**. This is fine locally but not for production.
- The event history is in-memory. On a server restart or cold start, the list is cleared.
- The per-phone override wins over the app-level callback URL. Meta routes an event to whichever URL is registered on the phone at the moment the event happens.

## Troubleshooting

- **Configure webhook returns "META_WEBHOOK_VERIFY_TOKEN is not set on the server"**, add the variable to `.env.local` (or the deploy environment) and restart the app, then click **Save configuration** again.
- **Meta shows "Callback URL could not be validated"**, the verify token on the server does not match what Meta expects. Make sure Meta's dashboard is using the same value as `META_WEBHOOK_VERIFY_TOKEN`.
- **All events show "Unverified"**, `META_APP_SECRET` is not set on the server. Set it and restart.
- **Events for this phone are not appearing but the raw feed has them**, check whether **This phone only** is on and the event's `phone_number_id` matches the current phone. If it does not, either configure the per-phone override or turn the filter off.
- **Events vanish after a deploy**, the buffer is in-memory. Expected behavior after a restart.
