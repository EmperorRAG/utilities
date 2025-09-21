---
mode: 'agent'
description: 'Automate the process of loading the NPM_TOKEN from .env, incrementing the npm package version, building, and publishing the npm project. If any build or publish issues occur, paste the errors, explain them, and provide possible solutions. Require user approval before important steps.'
---

Automate the following steps for this npm project, **requiring explicit user approval before each important step** (version increment, build, publish):

1. **Load the NPM_TOKEN from the `.env` file into the terminal environment.**
    - Use a tool like `dotenv-cli` or manually export the variable.
    - Example (Linux/macOS): `export $(grep NPM_TOKEN .env | xargs)`
    - Example (Windows CMD): `for /f "usebackq tokens=*" %i in (.env) do set %i`
    - Example (Windows PowerShell): `$env:NPM_TOKEN="$(Get-Content .env | Select-String NPM_TOKEN | ForEach-Object { $_.ToString().Split('=')[1].Trim() })"`
    - Example (dotenv-cli): `dotenv -e .env -- <your command>`

2. **Increment the npm package version.**
    - Before running `npm version <patch|minor|major>`, prompt the user for approval and confirm the version bump type.
    - Use `npm version <patch|minor|major>` as appropriate.

3. **Run the build command.**
    - Before executing `npm run build`, prompt the user for approval.
    - Execute `npm run build`.
    - If there are any build issues, paste the error output in the chat.
    - Analyze the errors, explain what they mean, and provide possible solutions based on the project workspace.

4. **Run a dry-run publish.**
    - Before executing `npm publish --dry-run`, prompt the user for approval.
    - Execute `npm publish --dry-run`.
    - If there are any issues, paste the error output, explain, and provide possible solutions.

5. **Publish the package.**
    - Before executing `npm publish`, prompt the user for final approval.
    - Execute `npm publish`.

**Notes:**

- If any step fails, stop and provide a detailed explanation and troubleshooting steps.
- Ensure the NPM_TOKEN is not exposed in logs or output.
- This automation is intended to streamline the build and publish workflow for this npm project while minimizing risk by requiring user approval at each important step.

---

**Intent:**
The `agent` mode is used because this prompt is designed to guide an AI agent to automate a multi-step workflow (loading environment variables, versioning, building, and publishing an npm package). The previous `automate` mode was not valid; `agent` is the correct supported mode for this use case. User approval is now required before each important step to minimize risk.
