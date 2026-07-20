# Delete an agent

Sometimes you need to remove the WhatsApp agent from a phone number. The Studio wires the Meta Business Agent Platform's Delete Agent endpoint into two places so you can do it without a curl call.

## What you'll do

- Open the phone dashboard.
- Click **Remove** on the agent row, or open the Onboarding page and use **Delete agent**.
- Confirm by typing the phone number ID.

## Where the button lives

**Overview page.** On `/dashboard/{entityId}`, the "Agents on this phone" card lists every configured agent. Each WhatsApp row now has a small red **Remove** button on the right, next to the Active badge.

**Onboarding page.** On `/dashboard/{entityId}/onboarding`, when the "WhatsApp agent already onboarded" card is showing, the footer now includes a **Delete agent** button in addition to Configure settings and Test chat.

Both buttons open the same confirmation dialog.

## Confirmation dialog

Delete is destructive, so the dialog blocks accidental clicks in two ways:

- A red warning banner explains that when this is the last agent on the WhatsApp Business Account, the Meta Business Agent integration is disconnected. You will need to re-onboard afterwards.
- The **Delete agent** button is disabled until you type the phone number ID into the confirmation field. The field placeholder shows exactly what to type.

Click **Delete agent** to submit. The dialog stays open while the request runs and closes on success. Errors surface inside the dialog so you can retry without losing state.

## What happens next

- A toast fires with the returned agent ID (`Agent removed: <id>`) or `Nothing to remove on this phone.` if the response is `deleted_agent_id: null`.
- Every entity-scoped query is invalidated. Eligibility, settings, business info, skills, connectors, everything refetches.
- The onboarding checklist flips its second step from done to actionable, and the overview footer switches back to **Onboard WhatsApp agent**.
- The action shows up in Recent activity as `Agent, Removed`.

## When to use it

- Rotating the agent because you changed skills or knowledge and want a clean slate.
- Migrating the phone number to a different Business ID.
- Turning off the AI agent for this phone entirely. If it is the last agent on the WABA, the integration is disconnected on Meta's side.

## Read-only mode

The Delete button appears in read-only mode too, but the confirm click throws a `ReadOnlyError` client-side before hitting Meta. Turn off read-only from the account dropdown if you actually want to delete.

## Troubleshooting

- **Nothing to remove** toast. There was no agent to delete for this phone number. This happens if you already removed it in another browser or via the Meta Business Suite.
- **403 Forbidden.** The access token does not have the `whatsapp_business_management` permission. See [Generating an access token](access-token.md).
- **429 Too many requests.** Wait a minute and retry. Delete is rate-limited by Meta.

## Related

- [Onboarding your first agent](onboard-your-first-agent.md).
- [Agent settings](../configure/settings.md).
- [Config export and import](../advanced/config-export-import.md), if you want to save the current config before deleting.
