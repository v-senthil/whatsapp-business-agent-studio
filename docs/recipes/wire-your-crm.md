# Wire your CRM as a connector

Give the agent access to your customer database so it can address customers by name, pull recent activity, and log conversations back into the CRM. This walkthrough uses HubSpot as the example, but the shape is identical for Salesforce, Zoho, Pipedrive, and most other CRMs.

## What you'll build

- A HubSpot connector authenticated with a private app token.
- Three tools: look up a contact by phone, list recent activities, and create a note against the contact.
- A skill that greets returning customers by name.
- A skill that logs every conversation back into HubSpot when it ends.

## Before you start

- A HubSpot private app with the following scopes: `crm.objects.contacts.read`, `crm.objects.contacts.write`, `crm.schemas.contacts.read`, and `crm.objects.notes.write`. Copy the private-app access token; you will paste it into the studio in a moment.
- A test contact in HubSpot whose Phone field matches the phone number you are testing with, in E.164 format.

## 1. Create the connector

Open **Connectors** and click **From template**. Pick **HubSpot** if listed, otherwise click **New**.

- **Name**: `HubSpot CRM`
- **Description**: `Reads contacts and writes conversation notes for the sales team.`
- **Base URL**: `https://api.hubapi.com`
- **Auth type**: **API Key**
- **Header field**: `Authorization`
- **Header value**: your private app token, prefixed with `Bearer ` (with a trailing space before the token).

Save.

Open the connector detail page. The **Health** card should say **Connected**. If it says **Disconnected**, the token is wrong or the scopes are missing.

## 2. Add three tools

Click **New tool** three times.

### Tool 1: find-contact-by-phone

- **Name**: `find_contact_by_phone`
- **Description**: `Look up a contact by their phone number. Returns their first name, last name, and last activity date if a match exists.`
- **Method**: `POST`
- **Path**: `/crm/v3/objects/contacts/search`
- **Body content type**: `application/json`
- **Body params**:
  - `filterGroups`: array of objects, description `Search filters. Provide one filterGroup with one filter matching the phone property to the customer's E.164 phone number.`
  - `properties`: array of strings, description `Fields to return. Pass ["firstname","lastname","lastmodifieddate"].`
- **Required**: `filterGroups`

### Tool 2: get-recent-activities

- **Name**: `get_recent_activities`
- **Description**: `Fetch the last five engagements (calls, emails, meetings) for a HubSpot contact. Use this to give context on why the customer might be reaching out.`
- **Method**: `GET`
- **Path**: `/crm/v3/objects/contacts/{contactId}/associations/engagements`
- **Path parameters**:
  - `contactId`: string, description `The HubSpot contact ID returned by find_contact_by_phone.`
- **Query parameters**:
  - `limit`: integer, description `Max engagements to return. Default 5.`

### Tool 3: log-conversation-note

- **Name**: `log_conversation_note`
- **Description**: `Attach a note to a HubSpot contact summarizing the WhatsApp conversation. Call this once at the end of every conversation.`
- **Method**: `POST`
- **Path**: `/crm/v3/objects/notes`
- **Body params**:
  - `properties`: object, description `Note properties. Include hs_note_body (string, the conversation summary) and hs_timestamp (integer, current epoch ms).`
  - `associations`: array of objects, description `Association linking the note to the contact ID.`
- **Required**: `properties`, `associations`

Save each. Use the **Run** button on each tool to verify with a real contact before wiring skills to them.

## 3. Add a personalized greeting skill

Open **Skills** and click **New**.

- **Title**: `personalized-greeting`
- **Description**: `Greet returning customers by first name and reference their last activity when available.`
- **Skill body**:
  ```
  Trigger: user sends the first message of a new conversation. Examples: "hi", "hello", "hey there", or any opener before the conversation topic is clear.
  Actions:
  1. Call find_contact_by_phone with the sender's number.
  2. If a contact is found and has a firstname, greet by first name: "Hey {firstname}, welcome back."
  3. If get-recent-activities returns something within the last 14 days, mention it in one line: "Looks like we spoke about {topic} on {date}, want to pick up there?"
  4. If no contact is found, greet generically: "Hey, thanks for reaching out. What can I help with?"
  Fallback: if the connector errors, use the generic greeting.
  ```

Save.

## 4. Add a conversation-logging skill

- **Title**: `log-when-done`
- **Description**: `Write a summary note back to HubSpot when the conversation ends or hands off.`
- **Skill body**:
  ```
  Trigger: the conversation is ending because the customer's question was answered, or a handoff has been triggered.
  Actions:
  1. Compose a 2-3 sentence summary: what the customer asked, what the agent did or promised, and any outcome.
  2. Call log_conversation_note with the contact ID from earlier in the conversation and the summary as hs_note_body.
  3. Do not tell the customer that a note was created; log silently.
  ```

Save.

## 5. Update the follow-up settings

Open **Settings > Follow-up** and enable it with a 24-hour interval and message:

```
Just checking back in, was there anything else I can help with?
```

Because the agent knows the customer's name from HubSpot, this follow-up feels personal even though it is automated.

## 6. Test end to end

Open **Test chat** using the phone number of your test contact.

1. Send "hi". The agent should greet you by first name.
2. Ask a normal question and let the conversation reach a natural end.
3. Close the chat and confirm a new note appeared on the contact in HubSpot within a minute.

If the greeting is generic even though the contact exists, check that the Phone field in HubSpot is in E.164 format. Non-E.164 formats will not match.

## 7. Add saved scenarios and evals

- Save a "returning customer" scenario in Test chat.
- Save a "new customer, no CRM record" scenario.
- Add an eval case for each, with a success criterion of "log_conversation_note is called".

## 8. Turn rollout on

Toggle **Rollout enabled** in Settings.

## Rollout tips

- Watch **Connectors > Health** for the first few days. HubSpot has rate limits and if you fire many `find_contact_by_phone` calls per minute you can hit them.
- If you have more than one CRM (or a data warehouse and a CRM), add each as a separate connector and give each tool a distinct name. The agent picks by name.
- If your CRM has custom properties, add them to the `properties` list in `find_contact_by_phone`. The agent can then reference "your subscription tier" or "your account manager" in replies.
- Never expose sensitive CRM properties (SSN, card last four, medical) to the agent. Only include properties you would be comfortable reading aloud on speakerphone.

## Adapting to Salesforce, Zoho, or another CRM

The shape is the same, only the endpoints and auth change:

- **Salesforce**: use OAuth client credentials, not API key. See [Connector auth: OAuth](../configure/connector-auth-oauth-salesforce.md).
- **Zoho**: use OAuth with a refresh token. Base URL is region-specific (`https://www.zohoapis.com` for US, `https://www.zohoapis.in` for India, etc.).
- **Pipedrive**: API key in a query parameter (`?api_token=...`) rather than a header. Configure the API-key auth to place the key in `query_params`.

The three tools (find, list activities, log note) map to whatever each CRM calls its equivalents.
