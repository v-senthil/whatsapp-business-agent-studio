# Config export and import

Bundle everything about an agent's configuration into a single JSON file, then reimport it on another phone to promote staging to prod (or to hand a config to a teammate).

## What you'll do

- Export a phone's full agent configuration to JSON.
- Optionally include credentials, with a warning.
- Import a JSON bundle onto another phone with live progress.

## Where the buttons live

Both **Export config** and **Import config** sit in the header of the phone dashboard (the overview page).

## What is included

Export bundles:

- Settings, business info, skills, websites, FAQs, allowlist.
- Files, as metadata only (binaries are not portable across phones).
- Every connector plus its tools.

## Credential handling

- **Default**, credentials are stripped from the export (API key values, OAuth client secrets, mTLS certificates).
- **Opt-in**, tick **Include credentials** to keep them in the file. A red warning banner reminds you that the file now contains secrets and should be treated accordingly.

## Filename

Exports download with a filename like:

```
agent-config-<entityId>-<yyyy-mm-dd>.json
```

## Step-by-step, export

1. Open the phone dashboard.
2. Click **Export config** in the header.
3. Choose whether to include credentials (off by default).
4. Confirm to download the JSON.

## Step-by-step, import

1. On the destination phone's dashboard, click **Import config**.
2. Upload the JSON file. The dialog validates the shape; if the file is not a valid bundle, the dialog explains why and blocks the import.
3. Review the **preview counts** per resource (skills, FAQs, connectors, etc.).
4. Click **Import**. A progress indicator shows each stage as it runs:
   1. Business info
   2. Skills
   3. Websites
   4. FAQs
   5. Allowlist
   6. Connectors
   7. Tools
5. If credentials were not included in the bundle, an amber alert reminds you that connectors were created but their auth still needs to be filled in. See [Connector auth rotation](../configure/connector-auth-rotation.md).

## Good to know

- Files are not moved across phones. Re-upload knowledge files on the destination phone if you need them there.
- The import is sequential, not transactional. If a stage fails partway, earlier stages have already been applied. The dialog surfaces which stage failed so you can decide whether to rerun the failing stage or roll back manually.

## Troubleshooting

- **Bundle rejected as invalid**, the file may be from a much older version of the app. Regenerate the export from a current version.
- **Import stalls partway**, open the [dev drawer](dev-drawer.md) to see which call failed. Fix the underlying issue and rerun the import (already-created items will be duplicated; delete them first if you need a clean slate).
- **Imported connectors do not work**, credentials were stripped. Rotate auth on each connector.
