---
mode: agent
---

Find every violation of the ARM linter rule
`@azure-tools/typespec-azure-resource-manager/no-resource-duplicates` in the TypeSpec specs on
`main`. Fix each violation and open one draft pull request per TypeSpec project. The fixes must not
change the wire contract.

[documentation/no-resource-duplicates-assessment.md](../../documentation/no-resource-duplicates-assessment.md)
records an earlier run of this analysis, with verified fixes for each finding. Use it as a guide,
but re-check every finding against the current `main`, because specs may have changed since then.

Invoke the `azure-typespec-author` skill before editing any `.tsp` file.

## 1. Find violations

1. Start from an up-to-date upstream `main`. Run `pnpm install` (or `npm ci`) from the repository
   root, and confirm the resolved `@azure-tools/typespec-azure-resource-manager` version includes
   the rule.
2. The rule is disabled in the central ARM ruleset. Write a temporary config **outside the
   repository**, e.g. `$env:TEMP\nrd-tspconfig.yaml`, that enables only this rule:

   ```yaml
   linter:
     extends: []
     enable:
       "@azure-tools/typespec-azure-resource-manager/no-resource-duplicates": true
   ```

3. For every `specification/**/main.tsp` that sits next to a `tspconfig.yaml` with an ARM
   (`resource-manager`) emitter, run:
   `npx tsp compile <dir>/main.tsp --config $env:TEMP\nrd-tspconfig.yaml --no-emit`.
   Record each `no-resource-duplicates` diagnostic with:
   - its file and line
   - the two logical resource names
   - the resource type
   - the instance path

   Also count compile errors per project. A project that does not compile cleanly cannot be
   assessed; report it separately.

4. Group the findings by TypeSpec project. Each project gets one branch and one PR.

## 2. Choose the fix (in preference order)

The most common cause is mixing legacy _interface_ templates
(`Azure.ResourceManager.Legacy.LegacyOperations`, `Legacy.ExtensionOperations`,
`Legacy.RoutedOperations`) with standard operation templates at the **same** instance path. The
interface templates derive a different logical resource name, so the same resource is registered
twice. Those templates are only needed when an operation's path differs from the resource's standard
`@autoRoute` path.

1. **Preferred: remove the interface template when its operations use the standard path.** Replace
   its operations with simpler templates:
   - Standard templates with parameters, e.g.
     `ArmResourceRead<R, Error = X>`,
     `ArmResourceListByParent<R, Response = ..., Error = X>`,
     `ArmResourceActionSync<R, Req, Resp, Error = X>`.
   - Legacy _operation_ templates, when a PUT or PATCH needs an optional or custom body, or custom
     responses:
     - `Legacy.CreateOrReplaceSync/Async<R, Request?, BaseParameters?, Parameters?, Response?, Error?, OptionalRequestBody?>`
     - `Legacy.CustomPatchSync/Async<R, PatchModel, ...>`
     - `Legacy.Extension.CreateOrReplace*/CustomPatch*<Target, R, ...>` for extension resources.

   Delete interface aliases and their decorators (e.g. `@@added`) once nothing uses them. Keep
   interface templates that serve genuinely different paths.

   Note the argument names: interface operations use `ErrorType`/`OverrideErrorType`; operation
   templates use `Error`. Keep existing version decorators, `@sharedRoute`, `#suppress` directives,
   headers and `@useFinalStateVia`.

2. **Fallback: align the logical name.** Use this when a simpler template cannot express the same
   contract. Set `ResourceName = "<name of the standard record>"` on the interface instantiation, or
   `OverrideResourceName = "<name>"` on the operation (also on `Legacy.Extension.*`). Known cases:
   - A legacy PUT whose resource has no `@parentResource`, but whose path must include a parent
     segment before the provider segment. Example: API Management private endpoint connections with
     a custom request model, because the `PrivateEndpoints` templates have no `Request` parameter.
   - Single-page extension list operations, because no `Legacy.Extension` single-page list template
     exists.

   Explain in the PR why the fallback was used.

3. **Unknown.** Some findings come from version-model transitions or dormant source, not from
   legacy templates. Do not fix these; list them in the summary for a manual decision. Never
   suppress the rule to make a finding go away.

## 3. Verify each project

For each project:

1. Edit the `.tsp` file(s), then run `npx tsp format <files>`.
2. Rerun the rule-only compile. It must report zero `no-resource-duplicates` hits and no new errors.
3. Emit with the project's own config (`npx tsp compile <dir>`).
4. Inspect `git diff` of the generated `openapi.json`/Swagger files and the examples. Acceptable
   changes:
   - none, or
   - documentation only: parameter `description`/`pattern` values now matching the resource's other
     operations, or a `$ref` inlined to an identical definition.

   Any change to paths, operationIds, request or response schemas, status codes, LRO behavior,
   `x-ms-pageable` or parameter requiredness is a wire change. If you see one, try the next option
   in section 2, or mark the finding unknown.

5. Run `npx tsv <dir>` (TypeSpec Validation) for the project, and make sure `client.tsp` references
   (`@@...` augment decorators) still resolve.

## 4. Create one draft PR per project

1. Branch from upstream `main`: `fix-no-resource-duplicates-<service>`. Each branch contains only
   that project's spec and generated-file changes.
2. Commit with the message
   `[<Service>] Fix no-resource-duplicates by removing redundant legacy interface templates` (or
   `... by aligning legacy resource names` for a fallback-only fix). End the message with this
   trailer:

   ```
   Co-authored-by: Copilot App <223556219+Copilot@users.noreply.github.com>
   ```

3. Push the branch and open a **draft** PR against `Azure/azure-rest-api-specs` `main`. Use
   [`.github/PULL_REQUEST_TEMPLATE/control_plane_template.md`](../PULL_REQUEST_TEMPLATE/control_plane_template.md)
   and keep its headings and checklist. Check "Other" under Purpose and state: "Fix
   `no-resource-duplicates` lint violations; no API contract change". Add a section that lists, for
   each finding:
   - the colliding names and path
   - the change made
   - the fallback rationale, if a fallback was used
   - the verification results: the exact commands run and their outcomes, and whether the Swagger
     diff was none or doc-only, with details

   Link the assessment report.

4. Do not combine projects, change API versions, or add suppressions.

## 5. Report back

Give a table of projects with these columns:

- PR link
- findings fixed
- fix type (simplified templates or name override)
- Swagger impact (none or doc-only)

List any findings left unknown, and why.
