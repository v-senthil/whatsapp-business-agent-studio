# Try the demo

The studio ships with a self-contained demo mode so you can explore every screen without a Meta access token, a business ID, or a WABA. Nothing you do in demo mode reaches Meta, no real messages are sent, and all your changes are stored in memory on the server for the lifetime of your session.

## Start the demo

Two ways in:

- On the landing page, click **Try the demo, no token needed** in the hero or the top nav.
- On the sign-in page, click **Try the demo (no token)** under the sign-in button.

Either path drops you on **Home** already scoped to a seeded phone number (Nimbus Coffee Roasters, a fictional specialty coffee brand). From there, click **Continue** to jump straight into the dashboard for that phone.

## What is seeded

The demo starts pre-populated so every page has something to show:

- One business, one WABA, two phone numbers.
- One onboarded WhatsApp agent with rollout enabled.
- Three skills, three FAQs, two websites, two allowlist entries, one uploaded file.
- One connector with two tools, wired to a fake e-commerce API.
- A handful of eval cases you can run end to end.
- Sensible business info, hours, and policies.

## What you can do

Everything the real app supports, with a few carve-outs:

- **Create, edit, delete** anything in the sidebar. The demo store treats each write as if it succeeded, so lists update immediately.
- **Test chat.** Try messages like `NC-45123`, `recommend a bean`, or `café hours` to see how the agent replies. Message `refund` to trigger a handoff.
- **Evals.** Kick off a run, poll it, and view the passing summary. The job completes on a fixed 12-second timeline.
- **Agent events.** Submit an event, watch it flip from `processing` to `success` after a few seconds.
- **Config export.** Download the seeded config as JSON to see the shape.

## What is different from a real account

- **File uploads** accept your file but only record the file name and content type. The binary is discarded.
- **AI-assist features** (skill drafting, generate-from-document) still need a real AI provider under `/settings/ai`. They call your provider directly, they do not use demo fixtures.
- **Webhooks and thread control** return canned success responses. No real Meta signature is verified.
- **Data is per session.** When you sign out or your session cookie expires, the demo store is wiped.

## Ending the demo

Click **End demo** in the amber banner at the top of any dashboard page, or use the account menu to sign out. Signing back in with a real access token clears any demo state.
