# Monitoring in production

An agent runs 24/7 on live customer traffic. Passing the [pre-launch checklist](pre-launch-checklist.md) is table stakes. Staying reliable requires ongoing observation. This page lists what to watch, where it lives in the studio, and what thresholds should nudge you to act.

## Daily quick-check (2 minutes)

For each phone number in production, spend two minutes on:

- **Webhooks page.** Recent traffic looks normal (not a sudden spike or a sudden zero). Signed events. No cluster of unsigned events (which would suggest signature verification is failing).
- **Each connector's health card.** Success rate above 95%. P95 latency below your target (usually 2 to 5 seconds). No new failure patterns at the top of the list.
- **Recent test-chat sanity.** Open the test chat, send one message, confirm the reply is coherent. Two-minute reality check that the config is intact.

## Weekly deep-check (15 minutes)

Once a week:

- **Replay every saved scenario.** If any turn now shows "differs" or "error," investigate. Something changed either in your config, in the model, or in a downstream API.
- **Re-run the Meta eval suite.** Same reason. Compare the summary numbers week over week.
- **Read every connector's logs.** Not the health card, the raw log stream. Look for calls with unusual durations, unusual response codes, or unusual argument shapes. The model does surprising things sometimes.
- **Review skills for drift.** If you added a skill in the past week, does it still fit the shape of the other skills? Does it collide with anything? The [Skills page](../configure/skills.md) surfaces collisions but does not auto-resolve them.

## What each signal means

### Connector success rate

The Health card shows success rate over a 24-hour lookback. Interpret it as:

- **Above 98%.** Healthy. Nothing to do.
- **95% to 98%.** Yellow zone. Not urgent, but the top failure pattern in the failures list is worth understanding.
- **Below 95%.** Investigate this week. The pattern usually points to one of: a stale API key, a schema mismatch, a rate limit, or an intermittent downstream outage.
- **Sudden drop.** Investigate now. A working connector at 99% that falls to 60% overnight is almost always a broken credential or an API deprecation.

### Connector p95 latency

- **Under 2 seconds.** WhatsApp-appropriate. Users perceive the reply as instant.
- **2 to 5 seconds.** Acceptable but users notice.
- **Over 5 seconds.** Users will start abandoning conversations. Cache the underlying call, split into smaller tools, or move the slow step into a follow-up message.

Sudden p95 spikes usually mean the downstream API is under load. Not your bug, but worth flagging to that team.

### Failure patterns

The Health card lists the top failure signatures. Each one is a shape of error (HTTP status + a fingerprint of the response body). Watch for:

- **Auth errors (401, 403).** Rotate credentials. If they keep happening, your key or token has expired and you need to reissue it in the target system.
- **Not found (404).** The model is calling the tool with an ID that does not exist. Either the extraction logic in the skill body is wrong, or the customer is quoting invalid IDs.
- **Rate limits (429).** Slow down, or upgrade your tier on the target API. The studio does not have a rate-limit backoff at the tool level, so 429s propagate straight back to the model.
- **Server errors (5xx).** Downstream is broken. Not your fault, but if a tool has 5xx failures for more than a few hours, add a fallback to the skill body ("if the tool returns an error, apologize and hand off").

### Webhook volume

The Webhooks page shows a live stream of signed webhook events from Meta. Volume patterns to watch:

- **Normal:** steady stream matching your business's WhatsApp traffic.
- **Silent for hours:** either you actually have no customers messaging (fine), or the webhook receiver is broken (bad).
- **Sudden 10x spike:** a marketing campaign started (fine), or you're being scraped (bad).
- **Unsigned events:** signature verification is failing. Check `META_APP_SECRET` in the environment.

### Agent conversation quality

There is no automated "quality" metric. You have to sample. Options:

- **Read recent webhook payloads.** They contain the user's message and the agent's reply for at least a slice of traffic.
- **Ask handed-off human agents.** If a customer was frustrated when they landed with a human, ask what the agent got wrong. That's the highest-signal source you have.
- **Run scenarios weekly.** Saved scenarios catch regressions that pure eval numbers miss.

## Alerts worth setting

The studio does not send alerts. If you want proactive notifications, set them up in your own monitoring system on:

- Any connector's 24-hour success rate falling below 90%.
- Any tool's p95 latency exceeding 8 seconds.
- Webhook events stopping for more than 30 minutes during business hours.
- Any 4xx or 5xx from `/api/session/me` on your deployed studio host (means the studio itself is unhealthy).

## When something is broken

The escalation is roughly:

1. **Turn on read-only mode** from the header account menu. This blocks any accidental config changes while you investigate.
2. **Check the connector health card** on the suspect connector. Which tool is failing? What's the error shape?
3. **Run the failing tool manually** with a known-good payload. Compare with a payload the model would generate.
4. **Read the connector logs** if the failure shape is unclear.
5. **Rotate credentials** if it's an auth error.
6. **Roll back the config** if a recent change broke things: overview > Import config > select the last-known-good JSON export.
7. **Drop the rollout to 0%** if the whole agent is misbehaving and you cannot fix it in under an hour. Better a temporarily-off agent than an actively-lying one.

## What NOT to over-monitor

Some signals look like they matter but usually don't:

- **Token usage per conversation.** WhatsApp charges per conversation session, not per token. Focus on session count and quality, not verbosity.
- **Number of skills.** More skills is not worse. The collision detector already catches the real risk (overlap).
- **Total knowledge size.** A large FAQ set is fine as long as each entry is discoverable. The retrieval layer handles ranking.

## Related

- [Pre-launch checklist](pre-launch-checklist.md)
- [Connector health](../configure/connector-health.md)
- [Webhooks](../ship/webhooks.md)
- [Read-only mode](../advanced/read-only-mode.md)
- [Config export / import](../advanced/config-export-import.md)
