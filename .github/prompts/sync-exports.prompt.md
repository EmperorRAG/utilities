---
mode: 'agent'
description: 'Automatically add missing exports from module files to src/index.ts and refactor for clarity'
---

Automate the process of keeping src/index.ts in sync with all exported symbols from module files in the src/lib directory.

Steps to perform:

1. Run the script: `node scripts/find-missing-exports.cjs` in the terminal.
2. Read the output, which contains export statements for any symbols exported from module files but not yet re-exported in src/index.ts.
3. Add these missing export statements to src/index.ts, merging them with existing exports from the same file where possible.
4. Refactor src/index.ts so that there are no duplicate or separate export statements from the same file; combine exports from the same file into a single statement.
5. Ensure the file remains well-formatted and easy to read.

If there are no missing exports, make no changes.

Show a summary of the changes made, or state "No changes needed" if the file was already up to date.
