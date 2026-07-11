# Connector health

Each connector detail page includes a **Health** card that summarizes recent traffic through the connector.

## What you'll do

- Read connector traffic stats over a 24-hour window.
- Diagnose the top failure patterns quickly.

## What the card shows

- **Success rate**, colored green, amber, or red based on threshold.
- **Total calls** in the window.
- **p95 latency** in milliseconds.
- **Failure count**.
- **Top failure patterns**, a compact list of the most common failure shapes.

## Step-by-step

1. Open a connector's detail page.
2. Scroll to the **Health** card.
3. Read the four stat tiles for a quick pulse check.
4. Scan the top failure patterns. Each is a short fingerprint of a recurring error, useful for spotting a bad tool argument shape or a downstream outage.

## Good to know

The 24-hour window is fixed. If the connector has not been called in that window, the card shows "No data". This is normal for a new connector or one whose tools have not been wired into a skill yet.

## Troubleshooting

- **Card shows "No data"**, the connector has not been invoked in the last 24 hours. Try running a tool manually (see [Tools](tools.md)) to generate a log entry.
- **Success rate looks unexpectedly low**, expand the top failure patterns to see which shape is dominant. Common culprits are misconfigured auth, a wrong path, or a body param the vendor rejects.
