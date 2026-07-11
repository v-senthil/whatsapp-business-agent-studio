# Troubleshooting

Common problems and how to fix them from the UI.

## Sign-in

- **"Invalid token"**, the token you pasted is not accepted by Meta. Regenerate it with the right scopes. See [Generating an access token](../getting-started/access-token.md).
- **Login succeeds but you land back on the login screen**, your session was created against a different server secret. Ask whoever manages the deployment to keep the session secret consistent.
- **Login succeeds but the home page shows no WABAs**, your token is missing the `whatsapp_business_management` scope, or your system user is not assigned to the WABA.

## Onboarding

- **Eligibility shows as ineligible**, contact your Meta partner. The phone needs to be granted access to the Business Agent Platform.
- **Onboard button does nothing**, open the [dev drawer](../advanced/dev-drawer.md) to see which request failed and why.
- **Checklist keeps showing "Rollout enabled" as incomplete**, open Settings and turn the rollout toggle on. See [Agent settings](../configure/settings.md).

## Skills and knowledge

- **CSV import stuck on preview**, the preview flagged invalid rows. Fix them in the source CSV and re-upload.
- **"AI not configured"** when clicking Draft with AI or Generate, open [AI provider settings](../advanced/ai-provider.md) and configure a provider.
- **A file uploaded but does not appear in the list**, refresh the page.
- **AI audience change was rejected**, only **Everyone** and **Allowlisted only** are valid choices.
- **Allowlist entry rejected**, the phone number must be in E.164 format, including the leading `+` and country code.

## Connectors and tools

- **Toggling auth types loses my fields**, refresh the page. Report the issue if it persists.
- **Rotation succeeded but tool calls still fail with 401**, the credentials are wrong. Test them against the vendor before saving.
- **A tool run returns a validation error**, the JSON payload does not match the parameters you declared. Compare field names carefully.
- **The model never calls a tool at runtime**, the tool description may be too vague. Sharpen it, and mention concrete inputs the model can key on.
- **Connector health card shows "No data"**, no calls have gone through the connector in the last 24 hours.

## Chat, evals, and events

- **Typing dots stay after a response should have arrived**, check the [dev drawer](../advanced/dev-drawer.md) for a stalled request.
- **Eval job never finishes**, Meta may be slow. Wait several minutes. If it hangs indefinitely, note the job id and report the issue.
- **Agent event stuck on "processing"**, Meta is still handling the event. The row will update on the next poll.
- **Thread control returns an error mentioning API version**, this is a server-side wiring issue; report it.

## Webhooks

- **All events show "unverified"**, the app secret is not configured on the server. Set it and restart.
- **Meta says "Callback URL could not be validated"**, your verify token in Meta's UI does not match the one on the server.
- **Events vanish after a deploy**, the buffer is in-memory. This is expected.

## Config export and import

- **Bundle rejected as invalid**, the file may be from an older version of the app. Re-export from a current version.
- **Import stalls partway**, open the [dev drawer](../advanced/dev-drawer.md) to see which call failed.
- **Imported connectors do not work**, credentials were stripped by default on export. Rotate auth on each connector. See [Connector auth rotation](../configure/connector-auth-rotation.md).

## Read-only mode

- **A mutation still fires despite the toggle**, refresh the page and try again. Report the issue if it persists.
- **Banner won't go away**, refresh the page.

## Theme

- **Text unreadable in dark mode on a specific screen**, refresh and report the issue.
- **API reference stays dark in light mode**, refresh the page.

## Deployment (self-hosting)

- **`sh: 1: next: not found`**, you uploaded a source-only ZIP. Rebuild with `sh scripts/build-deploy-zip.sh`. See [Deployment](deployment.md).
- **Process restarts every 10 to 15 seconds**, AppSail's startup timeout is killing you mid-install. Ship a pre-built ZIP.
- **`npm run build` fails with `PageNotFoundError: /_document`**, a transient framework issue. Re-run `npm run build`.

## Still stuck?

Open the [dev drawer](../advanced/dev-drawer.md) with `Cmd/Ctrl+Shift+D`, click the failing call, and use **Copy as cURL** to capture the exact request. Share that with your team or your Meta partner along with a description of what you clicked.
