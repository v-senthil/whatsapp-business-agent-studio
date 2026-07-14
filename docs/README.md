# WhatsApp Business Agent Studio, Help Documentation

Welcome to the help library for **WhatsApp Business Agent Studio**, a visual builder for WhatsApp Business AI agents. Use this index to jump to any topic.

## Getting started

- [Introduction](getting-started/introduction.md), what the product is and the core concepts.
- [Try the demo](getting-started/try-the-demo.md), explore every screen with seeded data and no Meta access token.
- [Prerequisites](getting-started/prerequisites.md), the Meta accounts, phone numbers, and setup you need.
- [Generating an access token](getting-started/access-token.md), how to mint a token in Meta Business Suite and rotate it safely.
- [First run](getting-started/first-run.md), install, configure, and boot the app locally.
- [Signing in](getting-started/sign-in.md), how the login screen works.
- [Picking a business and phone](getting-started/pick-business-and-phone.md), choosing which WABA and phone number to work on.
- [Onboarding your first agent](getting-started/onboard-your-first-agent.md), eligibility checks, the onboarding checklist, and the one-agent-per-channel rule.
- [WABA terms not accepted](getting-started/tos-not-accepted.md), what the block banner means and how to unblock the dashboard.

## Configure your agent

- [Configure overview](configure/overview.md), the entity dashboard and the sidebar groups.
- [Agent settings](configure/settings.md), rollout, handoff, follow-up, and AI audience.
- [Business info](configure/business-info.md), description, contact, and policies.
- [Skills](configure/skills.md), authoring, CSV bulk operations, templates, and AI drafting.
- [Knowledge, files](configure/knowledge-files.md), uploading documents the agent can use.
- [Knowledge, websites](configure/knowledge-websites.md), URL management with CSV import and export.
- [Knowledge, FAQs](configure/knowledge-faqs.md), question and answer pairs with CSV support.
- [Knowledge, allowlist](configure/knowledge-allowlist.md), consumer phone numbers that gate the audience.
- [Connectors](configure/connectors.md), external APIs and the template gallery.
- [Import connector from OpenAPI spec](configure/connectors-openapi-import.md), create a connector and tools in one step from a YAML or JSON spec file.
- [Connector auth rotation](configure/connector-auth-rotation.md), how to swap API keys, OAuth secrets, and certificates.
- [Connector auth, API key (Stripe example)](configure/connector-auth-api-key-stripe.md), where to get the key, where it goes, and rotation.
- [Connector auth, OAuth client credentials (Salesforce example)](configure/connector-auth-oauth-salesforce.md), Connected App setup and token exchange.
- [Connector auth, mTLS (bank example)](configure/connector-auth-mtls-bank.md), client certificates, CSRs, and rotation.
- [Connector health](configure/connector-health.md), 24-hour stats and top failure patterns.
- [Tools](configure/tools.md), building tool operations on a connector.
- [Generate from document](configure/generate-from-document.md), draft FAQs, skills, and connectors from a Markdown or text file.

## Ship and operate

- [Test chat](ship/test-chat.md), the WhatsApp-style bubble UI for sanity checks.
- [Scenarios, save and replay](ship/scenarios.md), regression tests against the live agent.
- [Evals](ship/evals.md), running Meta eval cases and inspecting results.
- [Agent events](ship/agent-events.md), triggering partner-defined events and watching status.
- [Thread control](ship/thread-control.md), releasing or passing control to a human agent.
- [Webhooks](ship/webhooks.md), receiving Meta events on the live stream page.
- [API playground](ship/playground.md), a free-form request builder scoped to a phone.

## Advanced

- [Config export and import](advanced/config-export-import.md), the JSON bundle for promoting configs across phones.
- [Read-only mode](advanced/read-only-mode.md), block writes for demos and shared browsers.
- [Dev drawer and Copy as cURL](advanced/dev-drawer.md), inspecting recent client calls.
- [AI provider settings](advanced/ai-provider.md), Claude Agent SDK or any OpenAI-compatible endpoint.
- [API reference viewer](advanced/api-reference.md), how to browse the API reference inside the app.
- [Theming and dark mode](advanced/theming.md), Light, Dark, and System modes.

## Recipes

- [Build a payment reminder agent](recipes/payment-reminder-agent.md), end-to-end walkthrough that stitches skills, connectors, and settings together.
- [Handle refund escalations](recipes/refund-escalations.md), triage skill, handoff, and never-promise-a-refund safety net.
- [Wire your CRM as a connector](recipes/wire-your-crm.md), HubSpot walkthrough with adaptation notes for Salesforce, Zoho, and Pipedrive.

## Migration

- [Migrate from a custom Meta wrapper](migration/from-custom-meta-wrapper.md), step-by-step handover from a homegrown app.
- [Migrate an API-configured agent](migration/from-api-configured-agent.md), adopt an agent that was set up entirely via curl or Postman.

## Reference

- [Architecture and security](reference/architecture-and-security.md), where the token lives, the single-proxy hinge, and threat model summary.
- [Security](reference/security.md), how the token is kept private and how webhooks are verified.
- [Compliance notes](reference/compliance.md), GDPR posture, Meta ToS, retention, third-party data flows.
- [Deployment](reference/deployment.md), the one-shot script and pre-built ZIP flow.
- [Deploy on Vercel](reference/deploy-vercel.md), fastest path to a public URL.
- [Deploy on Fly.io](reference/deploy-fly.md), dedicated VM with regional control.
- [Deploy on Railway](reference/deploy-railway.md), managed container without a Dockerfile.
- [Deploy with Docker Compose](reference/deploy-docker-compose.md), full control on your own hardware.
- [Troubleshooting](reference/troubleshooting.md), common problems and how to fix them.
