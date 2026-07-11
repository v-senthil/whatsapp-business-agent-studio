# Tools

Tools are the operations a connector exposes to the model. Each tool has a **request definition** (HTTP method, path, parameters) plus a description. At runtime the model picks arguments and calls the tool. This is the most involved surface in the app.

## What you'll do

- Create a tool with a full request definition.
- Manage path, query, headers, and body parameters.
- Mark parameters as required.
- Run the tool manually with a JSON payload to verify it works.

## Step-by-step

### Create or edit a tool

1. Open a connector detail page and scroll to the **Tools** section.
2. Click **New tool** (or click an existing tool to edit).
3. Fill in the top-level fields: tool name and description. The description is what the model reads when deciding whether to call the tool, so be specific.
4. In the **Request definition** editor:
   - Pick the **HTTP method** (GET, POST, PUT, PATCH, DELETE).
   - Enter the **path**, relative to the connector's base URL.
   - Use the **Path**, **Query**, **Headers**, and **Body** tabs to define parameters. Each tab is a list of rows with **Name**, **Type**, and **Description**.
5. Under **Required**, tick the body parameters that must always be provided.
6. Click **Save**.

### Delete a tool

1. Open the tool.
2. Click **Delete** and confirm.

### Run a tool manually

1. Open a tool's detail page.
2. Scroll to the **Run** panel.
3. Paste a JSON payload matching the parameters you declared.
4. Click **Run**.
5. Inspect the response body to confirm the shape end-to-end.

## Good to know

- The **Required** picker updates automatically as you add, rename, or remove parameters. You do not need to keep it in sync by hand.
- Manual runs are the fastest way to catch a mismatch between what you declared and what the vendor actually expects.

## Troubleshooting

- **"Unknown parameter" error on save**, one of the entries under **Required** references a parameter that no longer exists. Refresh the page and re-tick required.
- **Tool run returns a validation error**, the JSON in the Run panel does not match the parameters you declared. Compare the field names carefully.
- **Model never calls the tool at runtime**, the description may be too vague. Sharpen it, and mention concrete inputs the model can key on.
