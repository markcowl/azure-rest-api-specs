---
name: typespec-suppression-comparison
license: MIT
metadata:
  version: "1.0.0"
description: 'Compare inline TypeSpec #suppress directive totals between two Git revisions, branches, or commits and independently selected project directories, producing a Markdown report and optional JSON. USE FOR: "compare TypeSpec suppressions", "how many suppressions were removed", "suppression reduction between branches", "count #suppress directives", "compare suppression totals". DO NOT USE FOR: approving new suppressions in a PR, analyzing tspconfig linter.disable entries, or modifying TypeSpec source.'
compatibility: "Git repository checkout, Node.js >= 24.14.1, repository dependencies installed"
---

# TypeSpec Suppression Comparison

Use `eng/scripts/compare-typespec-suppressions.ts` to compare inline `#suppress` directive totals across two Git revisions and project roots. The script reads Git objects directly; neither revision needs to be checked out.

## Rules

- Count only inline `#suppress` directives in `.tsp` files. Do not include `linter.disable` entries from `tspconfig.yaml`.
- Require an explicit revision and repository-relative project directory for both base and head.
- Recursively include every `.tsp` file beneath each selected directory, including nested TypeSpec projects.
- For reorganized, split, or consolidated services, select roots that cover equivalent API scope on both sides. A common parent directory is appropriate when one side contains multiple projects.
- Always generate a `.md` report. Generate JSON only when the user requests structured output or subsequent automation needs it.
- Do not infer success from the process exit code alone; read the Markdown summary and verify the resolved commits, paths, and totals.
- Do not modify or check out either analyzed revision.

## Steps

1. Identify the Git repository containing both revisions. If a remote branch is not locally resolvable, fetch that specific branch or commit without switching the checkout.
2. Determine the base revision and base project directory.
3. Determine the head revision and head project directory.
4. Confirm the two directories represent equivalent service scope. For a consolidated-versus-split comparison, use the nearest parent containing all relevant projects.
5. Choose a Markdown output path outside tracked source unless the user explicitly wants the report committed.
6. Run:

   ```bash
   node eng/scripts/compare-typespec-suppressions.ts \
     --base <base-commitish> \
     --base-path <base-project-directory> \
     --head <head-commitish> \
     --head-path <head-project-directory> \
     --markdown-output <report.md>
   ```

7. Add `--json-output <report.json>` only when structured output is useful.
8. Read the generated Markdown and report:
   - resolved base and head commit SHAs;
   - base and head suppression totals;
   - net suppressions removed or added;
   - percentage reduction, when the base count is nonzero;
   - meaningful first-level path differences.

## Example

Compare Azure main with a fork branch whose Network projects were consolidated:

```bash
node eng/scripts/compare-typespec-suppressions.ts \
  --base upstream/main \
  --base-path specification/network/resource-manager/Microsoft.Network/Network \
  --head origin/copilot/network-single-project-minimize-suppressions \
  --head-path specification/network/resource-manager/Microsoft.Network/Network \
  --markdown-output network-suppression-comparison.md \
  --json-output network-suppression-comparison.json
```

## Troubleshooting

- **Revision cannot be resolved:** fetch the named remote branch or use a full commit SHA, then rerun.
- **Project path does not exist:** inspect the tree at that revision; paths may differ between base and head.
- **No `.tsp` files:** select the actual TypeSpec project or a parent containing the relevant projects.
- **TypeSpec parse failure:** report the failing file. Do not silently substitute text matching because comments and malformed source would make the count unreliable.
- **Unexpected total:** verify that both selected roots cover equivalent scope and inspect the first-level path breakdown in the Markdown report.
