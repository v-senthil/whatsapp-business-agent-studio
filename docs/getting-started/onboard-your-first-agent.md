# Onboarding your first agent

![Onboarding checklist on the agent overview](/help/screenshots/getting-started/onboard-your-first-agent/overview-checklist.png)

The dashboard for a phone number is the overview page. From here you attach a WhatsApp agent and follow the onboarding checklist.

## What you'll do

- Check that the phone is eligible for the Agent Platform.
- Onboard a WhatsApp agent (one per channel, per phone).
- Follow the six-step onboarding checklist until it auto-hides.

## Step-by-step

1. Open the phone dashboard. The overview shows the phone's eligibility status.
2. If eligible, click the footer button labeled **Onboard WhatsApp agent**. This opens the onboarding page.
3. The onboarding page checks whether a WhatsApp agent already exists on this phone. If one does, you see an "already onboarded" card with quick links to Settings and Test. Otherwise you see the Onboard button.
4. Click **Onboard**. The agent is created and you are returned to the overview.
5. The footer button on the overview now reads **Configure agent** instead of **Onboard WhatsApp agent**.

## The onboarding checklist

At the top of the overview, a checklist widget shows six live signals. It auto-hides once all six are done.

The six signals:

1. **Eligibility**, whether Meta considers this phone eligible.
2. **Agent onboarded**, whether a WhatsApp agent exists on this phone.
3. **Business info filled**, at least one of description, email, or return policy is set.
4. **At least one skill** authored.
5. **At least one connector** (marked optional).
6. **Rollout enabled** in Settings.

A progress bar shows overall completion, and the next actionable step is highlighted with a right arrow. Click the step's label to jump to the relevant page.

## The one-agent-per-channel rule

A phone number can host at most one agent per channel. Today the app only supports the `whatsapp` channel, so effectively there is one agent per phone. If you try to onboard again on a phone that already has a WhatsApp agent, you see the "already onboarded" card instead of a new onboard flow.

## Good to know

The overview header also has **Export config** and **Import config** buttons for the whole agent configuration. See [Config export and import](../advanced/config-export-import.md).

## Troubleshooting

- **Eligibility shows as ineligible**, contact your Meta partner. The phone number needs to be granted access to the Business Agent Platform.
- **Onboard button does nothing**, check your network connection and try again. If the problem persists, open the [dev drawer](../advanced/dev-drawer.md) with `Cmd/Ctrl+Shift+D` to see what request failed.
- **Checklist keeps showing "Rollout enabled" as incomplete**, open Settings and turn the rollout toggle on. See [Agent settings](../configure/settings.md).
