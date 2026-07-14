# Appointment booking on WhatsApp

Let customers book, reschedule, or cancel an appointment on WhatsApp. This recipe uses Calendly as the example. The shape adapts to Google Calendar, Cal.com, Acuity, or a custom scheduling API.

## What you will build

- A **Calendly connector** authenticated with a personal access token.
- Three **tools**: list available time slots, create a scheduled event, and cancel a scheduled event.
- Two **skills**: one for booking, one for cancel or reschedule.
- One **FAQ** with your appointment policy so the agent quotes it consistently.

## Before you start

- A Calendly account with at least one active event type (a 30-minute meeting, for example).
- The Calendly personal access token: log into Calendly, go to Integrations and Apps > API and Webhooks > Generate New Token. Copy it.
- The event type UUID from the URL of the event you want to expose. Calendly URLs look like `https://calendly.com/your-name/30min`. The API refers to event types by UUID, not slug; you fetch the UUID once from `GET /event_types` and hard-code it in the tool or store it as a skill body constant.

## 1. Create the connector

Open **Connectors** and click **New connector**.

- **Name**: `Calendly`
- **Description**: `Schedules customer appointments. Reads available slots and writes new bookings.`
- **Base URL**: `https://api.calendly.com`
- **Auth type**: API Key
- **Header field**: `Authorization`
- **Header value**: your personal access token, prefixed with `Bearer ` (with a space).

Save. Open the connector detail page. The Health card should say **Connected**.

## 2. Add the tools

### Tool 1: `list_available_slots`

- **Name**: `list_available_slots`
- **Description**: `Returns the next available appointment slots for a specific event type. Requires the event_type_uri and a start_time range in ISO-8601. Returns an array of slots each with a start_time and a booking_url.`
- **Method**: GET
- **Path**: `/scheduled_events` (Calendly's real API for slot discovery uses `/event_type_available_times`; adjust based on your account's API version)
- **Query parameters**:
  - `event_type` (string, required): The URI of the event type. Example: `https://api.calendly.com/event_types/AAAAAAAA-BBBB-CCCC-DDDD-EEEEEEEEEEEE`.
  - `start_time` (string, required): ISO-8601 timestamp for the earliest slot to include. Use the current time to get all future slots.
  - `end_time` (string): ISO-8601 timestamp for the latest slot to include. Defaults to 7 days from `start_time`.

Save. Run it with a real event type URI and confirm you get a list of slots back.

### Tool 2: `create_booking`

Calendly's public API does not support programmatic booking on the free tier. Users book via the returned booking URL. If you have a paid tier that exposes `POST /scheduling_links` or similar, register it as this tool. Otherwise skip this tool and let the skill quote the booking URL back.

If you can create the tool:

- **Name**: `create_booking`
- **Description**: `Creates a booking on a specific time slot. Requires the slot_url, customer_name, and customer_email. Returns the confirmation code and calendar invite URL.`
- **Method**: POST
- **Path**: `/scheduling_links`
- **Body parameters**:
  - `slot_url` (string, required): The booking URL returned by `list_available_slots`.
  - `customer_name` (string, required): The customer's display name.
  - `customer_email` (string, required): The customer's email in RFC 5322 format.
  - `notes` (string): Optional context for the meeting.

### Tool 3: `cancel_booking`

- **Name**: `cancel_booking`
- **Description**: `Cancels a scheduled event by its UUID. Requires the event_uuid. Returns nothing on success, throws on unknown UUID or already-cancelled events.`
- **Method**: DELETE
- **Path**: `/scheduled_events/{event_uuid}/cancellation`
- **Path parameters**:
  - `event_uuid` (string, required): The UUID of the scheduled event.
- **Body parameters**:
  - `reason` (string): Optional cancellation reason. Passed back to the invitee.

## 3. Write the booking skill

Open **Skills > New skill**.

- **Title**: `book-appointment`
- **Description**: `When the customer wants to schedule, book, or set up a new appointment or meeting.`
- **Skill body**:

```
1. Ask the customer for their preferred day and time if not already mentioned. Example: "Happy to book that for you. What day works best?"

2. Call the list_available_slots tool for our event_type URI, using the customer's preferred date range if given, or the next 7 days if not.

3. Present up to 4 slots as a compact bulleted list with days and times. Example: "Here are the next few openings: Mon 10am, Tue 2pm, Wed 11am, Thu 3pm. Which works?"

4. When the customer picks a slot, ask for their name and email if you do not already have them from earlier in the conversation.

5. If the create_booking tool is available, call it with the slot_url, customer_name, and customer_email. Quote the confirmation code. Otherwise share the booking URL for the chosen slot and ask them to confirm details on the linked page.

6. Once booked, offer a reminder: "You'll get a calendar invite by email. Is there anything else?"

If no slots are available in the requested range, apologize, share our booking policy from the FAQs, and offer to widen the search or hand off to a human.

If any tool errors, apologize and share the direct booking link (https://calendly.com/your-name/30min) so the customer can book manually.
```

Save.

## 4. Write the cancel or reschedule skill

Open **Skills > New skill**.

- **Title**: `cancel-or-reschedule-appointment`
- **Description**: `When the customer wants to cancel, reschedule, move, or change the time of an existing appointment or meeting.`
- **Skill body**:

```
1. Ask if they want to cancel or reschedule.

2. Ask for the confirmation code or the email address on the booking. If they cannot find either, apologize and hand off to a human.

3. Use the confirmation code to find the event UUID (either from prior conversation context or by handing off if the studio does not have that lookup).

4. If cancelling, call the cancel_booking tool with the event_uuid. Confirm cancellation.

5. If rescheduling, cancel the existing booking (as above), then trigger the book-appointment skill's flow starting from step 2.

6. Ask if they need anything else.

If any tool errors, apologize and hand off to a human.
```

Save. The studio flags this as a potential collision with `book-appointment` because both mention appointments. That is expected; the descriptions are narrow enough (one says "schedule/book," one says "cancel/reschedule") that the model will pick correctly. Review the collision banner and dismiss mentally.

## 5. Add the booking-policy FAQ

Open **Knowledge > FAQs > New FAQ**.

- **Question**: `What are your appointment policies?`
- **Answer**: `Appointments must be booked at least 2 hours in advance. Cancellations within 4 hours of the start time may incur a fee. Reschedules are free up to 4 hours before the appointment.`

Save.

## 6. Test

Open the **Test chat**.

**Book a slot**: `I'd like to book a 30-minute call this week.` The model should ask when, list slots, take your name and email, and either book directly or share a booking link.

**Cancel**: `Can I cancel my appointment?` The model should ask for the confirmation code.

**Reschedule**: `I need to move my Tuesday meeting.` The model should cancel then start the booking flow.

**Edge case**: `Anytime tomorrow at 6am` (probably no slot). The model should offer to widen the search.

Save each conversation as a scenario. Replay them any time you change the skill bodies or the tools.

## 7. Rollout

Rollout to 10%, watch the connector health, bump to 50% after an hour, then 100%. See [Pre-launch checklist](../reference/pre-launch-checklist.md).

## Adapting to other schedulers

- **Google Calendar**: use OAuth 2 client credentials with the `https://www.googleapis.com/auth/calendar` scope. Tools: `freebusy_query` for slots, `events_insert` for bookings, `events_delete` for cancellations.
- **Cal.com**: similar to Calendly but with a different auth model (API key in `Authorization` header). Endpoints under `https://api.cal.com/v1`.
- **Acuity**: HTTP Basic with a user ID + API key. Endpoints under `https://acuityscheduling.com/api/v1`.
- **Custom scheduler**: whichever auth you already use. Keep the same three-tool shape.

## Troubleshooting

- **`list_available_slots` returns nothing** but the calendar has openings. The `start_time` you passed may be in the past, or the event type UUID is wrong.
- **The model quotes booking URLs verbatim, including the http prefix.** That is correct for WhatsApp; the link becomes clickable in the app.
- **Timezones**: Calendly returns UTC. If your customer is in a different timezone, either instruct the skill body to translate ("interpret times in the customer's timezone; the tool returns UTC") or store the customer's timezone in your CRM and pass it into the tool call.

## Related

- [Connectors](../configure/connectors.md)
- [Writing good skills](../configure/writing-good-skills.md)
- [Test chat](../ship/test-chat.md)
- [Scenarios](../ship/scenarios.md)
