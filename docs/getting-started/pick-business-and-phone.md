# Picking a business and phone

The home page is where you enter a Meta Business ID, browse its WABAs, and click through to a specific phone number.

## What you'll do

- Paste a Business ID.
- Browse WABAs and their phone numbers.
- Enter the per-phone dashboard.

## Step-by-step

1. Sign in and land on the home page.
2. Paste a **Meta Business ID** into the input.
3. Click submit. The app remembers this Business ID so you do not have to enter it every time.
4. A list of **WhatsApp Business Accounts** (WABAs) owned by that Business appears.
5. Each WABA expands to show the phone numbers attached to it. Each row shows the display phone number, the verified name, and the quality rating.
6. Click a phone number. You land on the dashboard for that phone.

## Why you paste a Business ID instead of picking from a list

The home page does not auto-list every Business your token can see. Instead, you paste one Business ID at a time. This keeps the picker fast and predictable, and it avoids surfacing dozens of unrelated businesses your token may happen to have access to.

If you do not know your Business ID, ask an admin on Meta Business Manager.

## Troubleshooting

- **WABA list is empty**, your token likely lacks the `whatsapp_business_management` scope, or your system user is not assigned to the WABA. Regenerate the token with the correct scopes (see [Generating an access token](access-token.md)) and assign the system user.
- **Phone list is empty for a WABA**, confirm the WABA has at least one Cloud API phone number attached.
- **Clicking a phone bounces you back to the login screen**, your session has expired. Sign in again.

## Where to go next

- [Onboarding your first agent](onboard-your-first-agent.md) to attach an agent to the phone.
