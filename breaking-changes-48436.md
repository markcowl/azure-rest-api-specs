# Breaking changes: Microsoft.AzureDataTransfer 2026-11-04-preview

**Pull request:** [Azure/azure-rest-api-specs#48436](https://github.com/Azure/azure-rest-api-specs/pull/48436) (`[Microsoft.AzureDataTransfer] 2026-11-04-preview ruleset actions`)

**Checked head:** [`93ccd7ad29e9`](https://github.com/avikaagarwal-msft/azure-rest-api-specs/commit/93ccd7ad29e9e0f4fda6587422a01b226719e817) in `avikaagarwal-msft/azure-rest-api-specs`; PR target: `Azure/azure-rest-api-specs:main`.

**Baseline revision:** the cross-version worktree's exact checkout SHA was not logged. Old links use the historical merge checkout's base parent [`4183a9a4a505`](https://github.com/Azure/azure-rest-api-specs/commit/4183a9a4a505e05eff5d736176416ba76a2f672c) as a fallback, not as a proven worktree revision. The diagnostic's old JSON paths and line positions match this fallback; its schema contents may nevertheless differ from the unrecorded worktree revision.

**Scope:** This report includes all final errors, not warnings or informational messages. Original raw severities may differ from the final applied severities. A version-comparison finding is not, by itself, proof that this PR introduced it.

## Swagger BreakingChange (same-version)

[Run 45153085024, job 137619119437, attempt 1](https://github.com/Azure/azure-rest-api-specs/actions/runs/45153085024/job/137619119437) completed successfully on 2026-11-23 10:10 UTC: **0 messages and no breaking changes**. The only changed Swagger was in a new API version; the job found no changed existing-version Swagger to compare. There are no errors to list for this check.

## Breaking Change (Cross-Version)

[Run 45153085450, job 137619121222, attempt 1](https://github.com/Azure/azure-rest-api-specs/actions/runs/45153085450/job/137619121222) failed on 2026-11-23 10:09 UTC: **19 errors and 44 warnings**. The comparison against stable `2025-05-21` produced all 19 errors; the comparison against `2026-06-29-preview` produced no final errors. The 19 occurrences below are distinct final error records, including individual and aggregate diagnostics.

**Log coordinates:** Line numbers refer to the full output of `gh run view 45153085450 --repo Azure/azure-rest-api-specs --job 137619121222 --log` for attempt 1, not GitHub's per-step line numbers. Search tokens and timestamps are copied from those full-job lines.

### [RemovedDefinition (1006)](https://github.com/Azure/openapi-diff/tree/master/docs/rules/1006.md)

#### 1. UserAssignedIdentities definition reported removed

The detector reports a missing `UserAssignedIdentities` definition, but its locations point only to the service files' `definitions` roots. Neither cited file contains a top-level definition with that name at the inspected revisions, so the alleged removal and its source declaration could not be verified.

**Log:** full-job line 3663; timestamp `2026-11-23T10:09:27.0353090Z`. Search for `"path":"definitions"` and `"message":"The new version is missing a definition that was found in the old version. Was 'UserAssignedIdentities' removed or renamed?"`.

```json
{
  "id": "1006",
  "code": "RemovedDefinition",
  "message": "The new version is missing a definition that was found in the old version. Was 'UserAssignedIdentities' removed or renamed?",
  "old": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json#/definitions",
    "path": "definitions",
    "location": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json:2641:3"
  },
  "new": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#/definitions",
    "path": "definitions",
    "location": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json:4383:3"
  },
  "type": "Error",
  "docUrl": "https://github.com/Azure/openapi-diff/tree/master/docs/rules/1006.md",
  "mode": "Removal"
}
```

**New:** [definitions](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#L4383)

**Old:** [definitions](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json#L2641)

**TypeSpec (head):** Not available - the diagnostic does not identify a verifiable source definition. Related configuration: [common-types v6 selection](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/main.tsp#L72-L76).

### [TypeFormatChanged (1023)](https://github.com/Azure/openapi-diff/tree/master/docs/rules/1023.md)

#### 2. FlowProperties.passphrase

The stable property is a plain string without a format; the preview property adds `format: password` and `x-ms-secret: true`. The detector flags the format change.

**Log:** full-job line 3614; timestamp `2026-11-23T10:09:26.9880738Z`. Search for `"path":"definitions.FlowProperties.properties.passphrase"` and `"message":"The new version has a different format 'password' than the previous one ''."`.

```json
{
  "id": "1023",
  "code": "TypeFormatChanged",
  "message": "The new version has a different format 'password' than the previous one ''.",
  "old": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json#/definitions/FlowProperties/properties/passphrase",
    "path": "definitions.FlowProperties.properties.passphrase",
    "location": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json:3315:9"
  },
  "new": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#/definitions/FlowProperties/properties/passphrase",
    "path": "definitions.FlowProperties.properties.passphrase",
    "location": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json:5849:9"
  },
  "type": "Error",
  "docUrl": "https://github.com/Azure/openapi-diff/tree/master/docs/rules/1023.md",
  "mode": "Update"
}
```

**New:** [definitions.FlowProperties.properties.passphrase](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#L5849)

**Old:** [definitions.FlowProperties.properties.passphrase](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json#L3315)

**TypeSpec (head):** [FlowProperties.passphrase](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/models.tsp#L1076-L1087)

#### 3. SetStreamPassphrase.value

The stable `value` is a plain string without a format; the preview gives it `format: password` and `x-ms-secret: true`. The head TypeSpec version-selects the old non-secret and new `@secret` declarations.

**Log:** full-job line 3617; timestamp `2026-11-23T10:09:26.9912229Z`. Search for `"path":"definitions.SetStreamPassphrase.properties.value"` and `"message":"The new version has a different format 'password' than the previous one ''."`.

```json
{
  "id": "1023",
  "code": "TypeFormatChanged",
  "message": "The new version has a different format 'password' than the previous one ''.",
  "old": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json#/definitions/SetStreamPassphrase/properties/value",
    "path": "definitions.SetStreamPassphrase.properties.value",
    "location": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json:4616:9"
  },
  "new": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#/definitions/SetStreamPassphrase/properties/value",
    "path": "definitions.SetStreamPassphrase.properties.value",
    "location": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json:7608:9"
  },
  "type": "Error",
  "docUrl": "https://github.com/Azure/openapi-diff/tree/master/docs/rules/1023.md",
  "mode": "Update"
}
```

**New:** [definitions.SetStreamPassphrase.properties.value](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#L7608)

**Old:** [definitions.SetStreamPassphrase.properties.value](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json#L4616)

**TypeSpec (head):** [SetStreamPassphrase.value](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/models.tsp#L1430-L1443)

#### 4. PendingFlow.passphrase

The stable property is a plain string without a format; the preview adds `format: password` and `x-ms-secret: true`. It is spread from `FlowProperties`.

**Log:** full-job line 3622; timestamp `2026-11-23T10:09:26.9966240Z`. Search for `"path":"definitions.PendingFlow.properties.passphrase"` and `"message":"The new version has a different format 'password' than the previous one ''."`.

```json
{
  "id": "1023",
  "code": "TypeFormatChanged",
  "message": "The new version has a different format 'password' than the previous one ''.",
  "old": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json#/definitions/PendingFlow/properties/passphrase",
    "path": "definitions.PendingFlow.properties.passphrase",
    "location": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json:4036:9"
  },
  "new": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#/definitions/PendingFlow/properties/passphrase",
    "path": "definitions.PendingFlow.properties.passphrase",
    "location": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json:6990:9"
  },
  "type": "Error",
  "docUrl": "https://github.com/Azure/openapi-diff/tree/master/docs/rules/1023.md",
  "mode": "Update"
}
```

**New:** [definitions.PendingFlow.properties.passphrase](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#L6990)

**Old:** [definitions.PendingFlow.properties.passphrase](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json#L4036)

**TypeSpec (head):** [PendingFlow spread](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/models.tsp#L1473-L1487) (source schema: [FlowProperties.passphrase](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/models.tsp#L1076-L1087))

### [RequiredStatusChange (1025)](https://github.com/Azure/openapi-diff/tree/master/docs/rules/1025.md)

#### 5. Action.targets becomes optional

The stable `Action.required` includes `targets`; the preview required list does not. The head declaration uses `@madeOptional` for a prior preview version.

**Log:** full-job line 3626; timestamp `2026-11-23T10:09:27.0009680Z`. Search for `"path":"definitions.Action.properties"` and `"message":"The 'required' status changed from the old version('True') to the new version('False')."`.

```json
{
  "id": "1025",
  "code": "RequiredStatusChange",
  "message": "The 'required' status changed from the old version('True') to the new version('False').",
  "old": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json#/definitions/Action/properties",
    "path": "definitions.Action.properties",
    "location": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json:2645:7"
  },
  "new": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#/definitions/Action/properties",
    "path": "definitions.Action.properties",
    "location": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json:4387:7"
  },
  "type": "Error",
  "docUrl": "https://github.com/Azure/openapi-diff/tree/master/docs/rules/1025.md",
  "mode": "Update"
}
```

**New:** [definitions.Action.properties](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#L4387); [Action.required](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#L4408)

**Old:** [definitions.Action.properties](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json#L2645); [Action.required](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json#L2666)

**TypeSpec (head):** [Action.targets](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/models.tsp#L1528-L1543)

### [TypeChanged (1026)](https://github.com/Azure/openapi-diff/tree/master/docs/rules/1026.md)

#### 6. ResourceModelWithAllowedPropertySet.identity

The v5 property wraps an `Identity` reference in `allOf`; v6 directly references `ManagedServiceIdentity`. The detector reports a type change from empty to `object`; this structural difference alone does not establish a wire-format incompatibility.

**Log:** full-job line 3665; timestamp `2026-11-23T10:09:27.0371906Z`. Search for `"path":"definitions.ResourceModelWithAllowedPropertySet.properties.identity"` and `"message":"The new version has a different type 'object' than the previous one ''."`.

```json
{
  "id": "1026",
  "code": "TypeChanged",
  "message": "The new version has a different type 'object' than the previous one ''.",
  "old": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/common-types/resource-management/v5/types.json#/definitions/ResourceModelWithAllowedPropertySet/properties/identity",
    "path": "definitions.ResourceModelWithAllowedPropertySet.properties.identity",
    "location": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/common-types/resource-management/v5/types.json:422:9"
  },
  "new": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/common-types/resource-management/v6/types.json#/definitions/ResourceModelWithAllowedPropertySet/properties/identity",
    "path": "definitions.ResourceModelWithAllowedPropertySet.properties.identity",
    "location": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/common-types/resource-management/v6/types.json:393:9"
  },
  "type": "Error",
  "docUrl": "https://github.com/Azure/openapi-diff/tree/master/docs/rules/1026.md",
  "mode": "Update"
}
```

**New:** [definitions.ResourceModelWithAllowedPropertySet.properties.identity](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/common-types/resource-management/v6/types.json#L393) (source schema: [ManagedServiceIdentity](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/common-types/resource-management/v6/managedidentity.json#L9))

**Old:** [definitions.ResourceModelWithAllowedPropertySet.properties.identity](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/common-types/resource-management/v5/types.json#L422) (source schema: [Identity](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/common-types/resource-management/v5/types.json#L136))

**TypeSpec (head):** Not available - this diagnostic points into shared ARM common-types Swagger, not a service-owned TypeSpec declaration. The head spec's [common-types v6 selection](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/main.tsp#L72-L76) is relevant configuration, but is not the declaration.

#### 7. ResourceModelWithAllowedPropertySet.sku

The v5 property wraps a `Sku` reference in `allOf`; v6 directly references `Sku`. The detector reports a type change from empty to `object`; the reference-shape difference alone does not establish a wire-format incompatibility.

**Log:** full-job line 3673; timestamp `2026-11-23T10:09:27.0431831Z`. Search for `"path":"definitions.ResourceModelWithAllowedPropertySet.properties.sku"` and `"message":"The new version has a different type 'object' than the previous one ''."`.

```json
{
  "id": "1026",
  "code": "TypeChanged",
  "message": "The new version has a different type 'object' than the previous one ''.",
  "old": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/common-types/resource-management/v5/types.json#/definitions/ResourceModelWithAllowedPropertySet/properties/sku",
    "path": "definitions.ResourceModelWithAllowedPropertySet.properties.sku",
    "location": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/common-types/resource-management/v5/types.json:429:9"
  },
  "new": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/common-types/resource-management/v6/types.json#/definitions/ResourceModelWithAllowedPropertySet/properties/sku",
    "path": "definitions.ResourceModelWithAllowedPropertySet.properties.sku",
    "location": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/common-types/resource-management/v6/types.json:396:9"
  },
  "type": "Error",
  "docUrl": "https://github.com/Azure/openapi-diff/tree/master/docs/rules/1026.md",
  "mode": "Update"
}
```

**New:** [definitions.ResourceModelWithAllowedPropertySet.properties.sku](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/common-types/resource-management/v6/types.json#L396) (source schema: [Sku](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/common-types/resource-management/v6/types.json#L410))

**Old:** [definitions.ResourceModelWithAllowedPropertySet.properties.sku](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/common-types/resource-management/v5/types.json#L429) (source schema: [Sku](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/common-types/resource-management/v5/types.json#L451))

**TypeSpec (head):** Not available - this diagnostic points into shared ARM common-types Swagger, not a service-owned TypeSpec declaration. The head spec's [common-types v6 selection](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/main.tsp#L72-L76) is relevant configuration, but is not the declaration.

#### 8. ResourceModelWithAllowedPropertySet.plan

The v5 property wraps a `Plan` reference in `allOf`; v6 directly references `Plan`. The detector reports a type change from empty to `object`; this reference-shape difference alone does not establish a wire-format incompatibility.

**Log:** full-job line 3678; timestamp `2026-11-23T10:09:27.0474436Z`. Search for `"path":"definitions.ResourceModelWithAllowedPropertySet.properties.plan"` and `"message":"The new version has a different type 'object' than the previous one ''."`.

```json
{
  "id": "1026",
  "code": "TypeChanged",
  "message": "The new version has a different type 'object' than the previous one ''.",
  "old": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/common-types/resource-management/v5/types.json#/definitions/ResourceModelWithAllowedPropertySet/properties/plan",
    "path": "definitions.ResourceModelWithAllowedPropertySet.properties.plan",
    "location": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/common-types/resource-management/v5/types.json:436:9"
  },
  "new": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/common-types/resource-management/v6/types.json#/definitions/ResourceModelWithAllowedPropertySet/properties/plan",
    "path": "definitions.ResourceModelWithAllowedPropertySet.properties.plan",
    "location": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/common-types/resource-management/v6/types.json:399:9"
  },
  "type": "Error",
  "docUrl": "https://github.com/Azure/openapi-diff/tree/master/docs/rules/1026.md",
  "mode": "Update"
}
```

**New:** [definitions.ResourceModelWithAllowedPropertySet.properties.plan](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/common-types/resource-management/v6/types.json#L399) (source schema: [Plan](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/common-types/resource-management/v6/types.json#L296))

**Old:** [definitions.ResourceModelWithAllowedPropertySet.properties.plan](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/common-types/resource-management/v5/types.json#L436) (source schema: [Plan](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/common-types/resource-management/v5/types.json#L325))

**TypeSpec (head):** Not available - this diagnostic points into shared ARM common-types Swagger, not a service-owned TypeSpec declaration. The head spec's [common-types v6 selection](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/main.tsp#L72-L76) is relevant configuration, but is not the declaration.

### [AddedRequiredProperty (1034)](https://github.com/Azure/openapi-diff/tree/master/docs/rules/1034.md)

#### 9. TextMatch.matchType

The stable `TextMatch` requires only `text`; the preview also requires `matchType`. The TypeSpec property has a default of `MatchType.Partial`, but the emitted Swagger still lists it as required.

**Log:** full-job line 3660; timestamp `2026-11-23T10:09:27.0320527Z`. Search for `"path":"definitions.TextMatch.properties"` and `"message":"The new version lists new non-read-only properties as required: 'matchType'. These properties were not listed as required in the old version."`.

```json
{
  "id": "1034",
  "code": "AddedRequiredProperty",
  "message": "The new version lists new non-read-only properties as required: 'matchType'. These properties were not listed as required in the old version.",
  "old": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json#/definitions/TextMatch/properties",
    "path": "definitions.TextMatch.properties",
    "location": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json:4713:7"
  },
  "new": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#/definitions/TextMatch/properties",
    "path": "definitions.TextMatch.properties",
    "location": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json:7863:7"
  },
  "type": "Error",
  "docUrl": "https://github.com/Azure/openapi-diff/tree/master/docs/rules/1034.md",
  "mode": "Addition"
}
```

**New:** [definitions.TextMatch.properties](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#L7863); [TextMatch.matchType](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#L7868); [TextMatch.required](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#L7919)

**Old:** [definitions.TextMatch.properties](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json#L4713); [TextMatch.required](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json#L4719)

**TypeSpec (head):** [TextMatch.matchType](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/models.flowprofile.tsp#L451-L455)

#### 10. TextMatch.caseSensitivity

The stable `TextMatch` requires only `text`; the preview also requires `caseSensitivity`. The TypeSpec property has a default of `Casing.Insensitive`, but the emitted Swagger still lists it as required.

**Log:** full-job line 3661; timestamp `2026-11-23T10:09:27.0331840Z`. Search for `"path":"definitions.TextMatch.properties"` and `"message":"The new version lists new non-read-only properties as required: 'caseSensitivity'. These properties were not listed as required in the old version."`.

```json
{
  "id": "1034",
  "code": "AddedRequiredProperty",
  "message": "The new version lists new non-read-only properties as required: 'caseSensitivity'. These properties were not listed as required in the old version.",
  "old": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json#/definitions/TextMatch/properties",
    "path": "definitions.TextMatch.properties",
    "location": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json:4713:7"
  },
  "new": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#/definitions/TextMatch/properties",
    "path": "definitions.TextMatch.properties",
    "location": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json:7863:7"
  },
  "type": "Error",
  "docUrl": "https://github.com/Azure/openapi-diff/tree/master/docs/rules/1034.md",
  "mode": "Addition"
}
```

**New:** [definitions.TextMatch.properties](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#L7863); [TextMatch.caseSensitivity](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#L7893); [TextMatch.required](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#L7919)

**Old:** [definitions.TextMatch.properties](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json#L4713); [TextMatch.required](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json#L4719)

**TypeSpec (head):** [TextMatch.caseSensitivity](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/models.flowprofile.tsp#L457-L461)

#### 11. TextMatch required-property aggregate

A separate aggregate error reports both `matchType` and `caseSensitivity`. The old required list contains only `text`; the preview list contains all three.

**Log:** full-job line 3662; timestamp `2026-11-23T10:09:27.0342740Z`. Search for `"path":"definitions.TextMatch"` and `"message":"The new version lists new non-read-only properties as required: 'matchType, caseSensitivity'. These properties were not listed as required in the old version."`.

```json
{
  "id": "1034",
  "code": "AddedRequiredProperty",
  "message": "The new version lists new non-read-only properties as required: 'matchType, caseSensitivity'. These properties were not listed as required in the old version.",
  "old": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json#/definitions/TextMatch",
    "path": "definitions.TextMatch",
    "location": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json:4710:5"
  },
  "new": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#/definitions/TextMatch",
    "path": "definitions.TextMatch",
    "location": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json:7860:5"
  },
  "type": "Error",
  "docUrl": "https://github.com/Azure/openapi-diff/tree/master/docs/rules/1034.md",
  "mode": "Addition"
}
```

**New:** [definitions.TextMatch](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#L7860); [TextMatch.required](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#L7919)

**Old:** [definitions.TextMatch](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json#L4710); [TextMatch.required](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json#L4719)

**TypeSpec (head):** [TextMatch](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/models.flowprofile.tsp#L445-L461) (source schema: [TextMatch.matchType](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/models.flowprofile.tsp#L451-L455), [TextMatch.caseSensitivity](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/models.flowprofile.tsp#L457-L461))

#### 12. ManagedServiceIdentity.type

The v6 `ManagedServiceIdentity` requires `type`; the contextual v5 `Identity` has no required list. The individual diagnostic supplies no old location.

**Log:** full-job line 3669; timestamp `2026-11-23T10:09:27.0399677Z`. Search for `"path":"definitions.ManagedServiceIdentity.properties"` and `"message":"The new version lists new non-read-only properties as required: 'type'. These properties were not listed as required in the old version."`.

```json
{
  "id": "1034",
  "code": "AddedRequiredProperty",
  "message": "The new version lists new non-read-only properties as required: 'type'. These properties were not listed as required in the old version.",
  "old": {},
  "new": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/common-types/resource-management/v6/managedidentity.json#/definitions/ManagedServiceIdentity/properties",
    "path": "definitions.ManagedServiceIdentity.properties",
    "location": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/common-types/resource-management/v6/managedidentity.json:12:7"
  },
  "type": "Error",
  "docUrl": "https://github.com/Azure/openapi-diff/tree/master/docs/rules/1034.md",
  "mode": "Addition"
}
```

**New:** [definitions.ManagedServiceIdentity.properties](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/common-types/resource-management/v6/managedidentity.json#L12); [ManagedServiceIdentity.type](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/common-types/resource-management/v6/managedidentity.json#L25); [ManagedServiceIdentity.required](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/common-types/resource-management/v6/managedidentity.json#L37)

**Old:** Not provided by the diagnostic; [baseline Identity (context)](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/common-types/resource-management/v5/types.json#L136)

**TypeSpec (head):** Not available - this diagnostic points into shared ARM common-types Swagger, not a service-owned TypeSpec declaration. The head spec's [common-types v6 selection](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/main.tsp#L72-L76) is relevant configuration, but is not the declaration.

#### 13. ResourceModelWithAllowedPropertySet.identity requires type

Through the resource property, the detector reports `type` newly required: v5 `Identity` has no required list, while v6 `ManagedServiceIdentity` requires it.

**Log:** full-job line 3671; timestamp `2026-11-23T10:09:27.0413153Z`. Search for `"path":"definitions.ResourceModelWithAllowedPropertySet.properties.identity"` and `"message":"The new version lists new non-read-only properties as required: 'type'. These properties were not listed as required in the old version."`.

```json
{
  "id": "1034",
  "code": "AddedRequiredProperty",
  "message": "The new version lists new non-read-only properties as required: 'type'. These properties were not listed as required in the old version.",
  "old": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/common-types/resource-management/v5/types.json#/definitions/ResourceModelWithAllowedPropertySet/properties/identity",
    "path": "definitions.ResourceModelWithAllowedPropertySet.properties.identity",
    "location": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/common-types/resource-management/v5/types.json:422:9"
  },
  "new": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/common-types/resource-management/v6/types.json#/definitions/ResourceModelWithAllowedPropertySet/properties/identity",
    "path": "definitions.ResourceModelWithAllowedPropertySet.properties.identity",
    "location": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/common-types/resource-management/v6/types.json:393:9"
  },
  "type": "Error",
  "docUrl": "https://github.com/Azure/openapi-diff/tree/master/docs/rules/1034.md",
  "mode": "Addition"
}
```

**New:** [definitions.ResourceModelWithAllowedPropertySet.properties.identity](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/common-types/resource-management/v6/types.json#L393) (source schema: [ManagedServiceIdentity](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/common-types/resource-management/v6/managedidentity.json#L9))

**Old:** [definitions.ResourceModelWithAllowedPropertySet.properties.identity](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/common-types/resource-management/v5/types.json#L422) (source schema: [Identity](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/common-types/resource-management/v5/types.json#L136))

**TypeSpec (head):** Not available - this diagnostic points into shared ARM common-types Swagger, not a service-owned TypeSpec declaration. The head spec's [common-types v6 selection](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/main.tsp#L72-L76) is relevant configuration, but is not the declaration.

#### 14. Sku.name

The detector says `name` is newly required and supplies no old location. However, the contextual v5 `Sku` already requires `name`, as does v6; the detector's apparent mismatch is not explained by these schemas.

**Log:** full-job line 3675; timestamp `2026-11-23T10:09:27.0448037Z`. Search for `"path":"definitions.Sku.properties"` and `"message":"The new version lists new non-read-only properties as required: 'name'. These properties were not listed as required in the old version."`.

```json
{
  "id": "1034",
  "code": "AddedRequiredProperty",
  "message": "The new version lists new non-read-only properties as required: 'name'. These properties were not listed as required in the old version.",
  "old": {},
  "new": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/common-types/resource-management/v6/types.json#/definitions/Sku/properties",
    "path": "definitions.Sku.properties",
    "location": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/common-types/resource-management/v6/types.json:413:7"
  },
  "type": "Error",
  "docUrl": "https://github.com/Azure/openapi-diff/tree/master/docs/rules/1034.md",
  "mode": "Addition"
}
```

**New:** [definitions.Sku.properties](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/common-types/resource-management/v6/types.json#L413); [Sku.name](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/common-types/resource-management/v6/types.json#L414); [Sku.required](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/common-types/resource-management/v6/types.json#L435)

**Old:** Not provided by the diagnostic; [baseline Sku (context)](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/common-types/resource-management/v5/types.json#L451); [Sku.required](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/common-types/resource-management/v5/types.json#L476)

**TypeSpec (head):** Not available - this diagnostic points into shared ARM common-types Swagger, not a service-owned TypeSpec declaration. The head spec's [common-types v6 selection](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/main.tsp#L72-L76) is relevant configuration, but is not the declaration.

#### 15. ResourceModelWithAllowedPropertySet.sku requires name

The detector reports `name` newly required through `sku`, but the referenced v5 and v6 `Sku` schemas both already list `name` as required. The apparent mismatch needs investigation rather than assuming a changed requirement.

**Log:** full-job line 3676; timestamp `2026-11-23T10:09:27.0455616Z`. Search for `"path":"definitions.ResourceModelWithAllowedPropertySet.properties.sku"` and `"message":"The new version lists new non-read-only properties as required: 'name'. These properties were not listed as required in the old version."`.

```json
{
  "id": "1034",
  "code": "AddedRequiredProperty",
  "message": "The new version lists new non-read-only properties as required: 'name'. These properties were not listed as required in the old version.",
  "old": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/common-types/resource-management/v5/types.json#/definitions/ResourceModelWithAllowedPropertySet/properties/sku",
    "path": "definitions.ResourceModelWithAllowedPropertySet.properties.sku",
    "location": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/common-types/resource-management/v5/types.json:429:9"
  },
  "new": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/common-types/resource-management/v6/types.json#/definitions/ResourceModelWithAllowedPropertySet/properties/sku",
    "path": "definitions.ResourceModelWithAllowedPropertySet.properties.sku",
    "location": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/common-types/resource-management/v6/types.json:396:9"
  },
  "type": "Error",
  "docUrl": "https://github.com/Azure/openapi-diff/tree/master/docs/rules/1034.md",
  "mode": "Addition"
}
```

**New:** [definitions.ResourceModelWithAllowedPropertySet.properties.sku](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/common-types/resource-management/v6/types.json#L396) (source schema: [Sku](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/common-types/resource-management/v6/types.json#L410))

**Old:** [definitions.ResourceModelWithAllowedPropertySet.properties.sku](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/common-types/resource-management/v5/types.json#L429) (source schema: [Sku](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/common-types/resource-management/v5/types.json#L451))

**TypeSpec (head):** Not available - this diagnostic points into shared ARM common-types Swagger, not a service-owned TypeSpec declaration. The head spec's [common-types v6 selection](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/main.tsp#L72-L76) is relevant configuration, but is not the declaration.

#### 16. Plan.name

The individual diagnostic reports `name` newly required and supplies no old location. The contextual stable service `Plan` and preview service `Plan` both require `name`, `publisher`, and `product`; the mismatch is unverified.

**Log:** full-job line 3680; timestamp `2026-11-23T10:09:27.0491262Z`. Search for `"path":"definitions.Plan.properties"` and `"message":"The new version lists new non-read-only properties as required: 'name'. These properties were not listed as required in the old version."`.

```json
{
  "id": "1034",
  "code": "AddedRequiredProperty",
  "message": "The new version lists new non-read-only properties as required: 'name'. These properties were not listed as required in the old version.",
  "old": {},
  "new": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#/definitions/Plan/properties",
    "path": "definitions.Plan.properties",
    "location": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json:7294:7"
  },
  "type": "Error",
  "docUrl": "https://github.com/Azure/openapi-diff/tree/master/docs/rules/1034.md",
  "mode": "Addition"
}
```

**New:** [definitions.Plan.properties](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#L7294); [Plan.name](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#L7295); [Plan.required](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#L7316)

**Old:** Not provided by the diagnostic; [baseline Plan (context)](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json#L4320); [Plan.required](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json#L4345)

**TypeSpec (head):** [Plan.name](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/models.tsp#L1292-L1296)

#### 17. Plan.publisher

The individual diagnostic reports `publisher` newly required and supplies no old location. The contextual stable service `Plan` and preview service `Plan` both require `name`, `publisher`, and `product`; the mismatch is unverified.

**Log:** full-job line 3681; timestamp `2026-11-23T10:09:27.0498143Z`. Search for `"path":"definitions.Plan.properties"` and `"message":"The new version lists new non-read-only properties as required: 'publisher'. These properties were not listed as required in the old version."`.

```json
{
  "id": "1034",
  "code": "AddedRequiredProperty",
  "message": "The new version lists new non-read-only properties as required: 'publisher'. These properties were not listed as required in the old version.",
  "old": {},
  "new": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#/definitions/Plan/properties",
    "path": "definitions.Plan.properties",
    "location": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json:7294:7"
  },
  "type": "Error",
  "docUrl": "https://github.com/Azure/openapi-diff/tree/master/docs/rules/1034.md",
  "mode": "Addition"
}
```

**New:** [definitions.Plan.properties](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#L7294); [Plan.publisher](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#L7299); [Plan.required](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#L7316)

**Old:** Not provided by the diagnostic; [baseline Plan (context)](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json#L4320); [Plan.required](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json#L4345)

**TypeSpec (head):** [Plan.publisher](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/models.tsp#L1298-L1301)

#### 18. Plan.product

The individual diagnostic reports `product` newly required and supplies no old location. The contextual stable service `Plan` and preview service `Plan` both require `name`, `publisher`, and `product`; the mismatch is unverified.

**Log:** full-job line 3682; timestamp `2026-11-23T10:09:27.0505146Z`. Search for `"path":"definitions.Plan.properties"` and `"message":"The new version lists new non-read-only properties as required: 'product'. These properties were not listed as required in the old version."`.

```json
{
  "id": "1034",
  "code": "AddedRequiredProperty",
  "message": "The new version lists new non-read-only properties as required: 'product'. These properties were not listed as required in the old version.",
  "old": {},
  "new": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#/definitions/Plan/properties",
    "path": "definitions.Plan.properties",
    "location": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json:7294:7"
  },
  "type": "Error",
  "docUrl": "https://github.com/Azure/openapi-diff/tree/master/docs/rules/1034.md",
  "mode": "Addition"
}
```

**New:** [definitions.Plan.properties](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#L7294); [Plan.product](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#L7303); [Plan.required](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/preview/2026-11-04-preview/azuredatatransfer.json#L7316)

**Old:** Not provided by the diagnostic; [baseline Plan (context)](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json#L4320); [Plan.required](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/stable/2025-05-21/azuredatatransfer.json#L4345)

**TypeSpec (head):** [Plan.product](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/models.tsp#L1303-L1306)

#### 19. ResourceModelWithAllowedPropertySet.plan required-property aggregate

The detector reports `name`, `publisher`, and `product` newly required through `plan`, but both referenced common-types `Plan` schemas already require all three. This aggregate diagnostic is separate from the service `Plan` findings.

**Log:** full-job line 3685; timestamp `2026-11-23T10:09:27.0526045Z`. Search for `"path":"definitions.ResourceModelWithAllowedPropertySet.properties.plan"` and `"message":"The new version lists new non-read-only properties as required: 'name, publisher, product'. These properties were not listed as required in the old version."`.

```json
{
  "id": "1034",
  "code": "AddedRequiredProperty",
  "message": "The new version lists new non-read-only properties as required: 'name, publisher, product'. These properties were not listed as required in the old version.",
  "old": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/common-types/resource-management/v5/types.json#/definitions/ResourceModelWithAllowedPropertySet/properties/plan",
    "path": "definitions.ResourceModelWithAllowedPropertySet.properties.plan",
    "location": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/common-types/resource-management/v5/types.json:436:9"
  },
  "new": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/common-types/resource-management/v6/types.json#/definitions/ResourceModelWithAllowedPropertySet/properties/plan",
    "path": "definitions.ResourceModelWithAllowedPropertySet.properties.plan",
    "location": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/common-types/resource-management/v6/types.json:399:9"
  },
  "type": "Error",
  "docUrl": "https://github.com/Azure/openapi-diff/tree/master/docs/rules/1034.md",
  "mode": "Addition"
}
```

**New:** [definitions.ResourceModelWithAllowedPropertySet.properties.plan](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/common-types/resource-management/v6/types.json#L399) (source schema: [Plan](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/common-types/resource-management/v6/types.json#L296))

**Old:** [definitions.ResourceModelWithAllowedPropertySet.properties.plan](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/common-types/resource-management/v5/types.json#L436) (source schema: [Plan](https://github.com/Azure/azure-rest-api-specs/blob/4183a9a4a505e05eff5d736176416ba76a2f672c/specification/common-types/resource-management/v5/types.json#L325))

**TypeSpec (head):** Not available - this diagnostic points into shared ARM common-types Swagger, not a service-owned TypeSpec declaration. The head spec's [common-types v6 selection](https://github.com/avikaagarwal-msft/azure-rest-api-specs/blob/93ccd7ad29e9e0f4fda6587422a01b226719e817/specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/main.tsp#L72-L76) is relevant configuration, but is not the declaration.
