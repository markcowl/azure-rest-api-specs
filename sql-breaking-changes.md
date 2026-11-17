# Microsoft.Sql 2026-11-01-preview: Breaking changes

Detected: **7 Errors, 32 Warnings**. This report lists the errors only.

Source: [Breaking Change (Cross-Version) job](https://github.com/Azure/azure-rest-api-specs/actions/runs/43336269341/job/131593115560?pr=48199), [PR #48199](https://github.com/Azure/azure-rest-api-specs/pull/48199).

The job compared the new `2026-11-01-preview` Swagger against the latest stable and preview versions. All seven errors are against stable `2025-01-01`. The job checks out `main` for the base; the base links below use the PR base SHA recorded for the run, `26ce488a14ba15eeba8382794d125946570e1d67`, rather than the moving branch.

TypeSpec links point to the source at the head commit used by the job; the declarations may predate this PR.

The code blocks show the full `outputOadMessage` diagnostic from the log, reformatted for readability. Each search string is copied verbatim from the original log line. Line numbers refer to the full output of `gh run view 43336269341 --repo Azure/azure-rest-api-specs --job 131593115560 --log`, not GitHub's per-step line numbers.

## Breaking changes compared to the latest stable version

### [1019 - RemovedEnumValue](https://github.com/Azure/openapi-diff/tree/master/docs/rules/1019.md)

**1. `definitions.PrivateEndpointConnectionProperties.properties.provisioningState`**

The referenced enum no longer includes `Approving`, `Ready`, `Dropping`, or `Rejecting`. The new enum instead contains `Created`, `InProgress`, `Succeeded`, `Failed`, and `Canceled`.

**Log diagnostic (line 39241; JSON reformatted):**

Search the log for `"path":"definitions.PrivateEndpointConnectionProperties.properties.provisioningState"`.

```json
{
  "id": "1019",
  "code": "RemovedEnumValue",
  "message": "The new version is removing enum value(s) 'Approving, Ready, Dropping, Rejecting' from the old version.",
  "old": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/sql/resource-manager/Microsoft.Sql/SQL/stable/2025-01-01/common.json#/definitions/PrivateEndpointConnectionProperties/properties/provisioningState",
    "path": "definitions.PrivateEndpointConnectionProperties.properties.provisioningState",
    "location": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/sql/resource-manager/Microsoft.Sql/SQL/stable/2025-01-01/common.json:4729:9"
  },
  "new": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/sql/resource-manager/Microsoft.Sql/SQL/preview/2026-11-01-preview/common.json#/definitions/PrivateEndpointConnectionProperties/properties/provisioningState",
    "path": "definitions.PrivateEndpointConnectionProperties.properties.provisioningState",
    "location": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/sql/resource-manager/Microsoft.Sql/SQL/preview/2026-11-01-preview/common.json:5001:9"
  },
  "type": "Error",
  "docUrl": "https://github.com/Azure/openapi-diff/tree/master/docs/rules/1019.md",
  "mode": "Removal"
}
```

- **New:** [common.json, line 5001](https://github.com/Azure/azure-rest-api-specs/blob/73e1d1d840a771665dd9ae83a7e1e356db0ca9f1/specification/sql/resource-manager/Microsoft.Sql/SQL/preview/2026-11-01-preview/common.json#L5001) (source schema: [PrivateEndpointProvisioningState, line 5038](https://github.com/Azure/azure-rest-api-specs/blob/73e1d1d840a771665dd9ae83a7e1e356db0ca9f1/specification/sql/resource-manager/Microsoft.Sql/SQL/preview/2026-11-01-preview/common.json#L5038))
- **TypeSpec (head):** [provisioningState property](https://github.com/Azure/azure-rest-api-specs/blob/73e1d1d840a771665dd9ae83a7e1e356db0ca9f1/specification/sql/resource-manager/Microsoft.Sql/SQL/models.tsp#L14261-L14262) (source schema: [PrivateEndpointProvisioningState](https://github.com/Azure/azure-rest-api-specs/blob/73e1d1d840a771665dd9ae83a7e1e356db0ca9f1/specification/sql/resource-manager/Microsoft.Sql/SQL/models.tsp#L2875-L2930))
- **Old:** [common.json, line 4729](https://github.com/Azure/azure-rest-api-specs/blob/26ce488a14ba15eeba8382794d125946570e1d67/specification/sql/resource-manager/Microsoft.Sql/SQL/stable/2025-01-01/common.json#L4729) (source schema: [PrivateEndpointProvisioningState, line 4766](https://github.com/Azure/azure-rest-api-specs/blob/26ce488a14ba15eeba8382794d125946570e1d67/specification/sql/resource-manager/Microsoft.Sql/SQL/stable/2025-01-01/common.json#L4766))

**2. `definitions.PrivateEndpointProvisioningState`**

The enum removes `Approving`, `Ready`, `Dropping`, and `Rejecting`. This is the enum referenced by occurrence 1.

**Log diagnostic (line 39243; JSON reformatted):**

Search the log for `"path":"definitions.PrivateEndpointProvisioningState"`.

```json
{
  "id": "1019",
  "code": "RemovedEnumValue",
  "message": "The new version is removing enum value(s) 'Approving, Ready, Dropping, Rejecting' from the old version.",
  "old": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/sql/resource-manager/Microsoft.Sql/SQL/stable/2025-01-01/common.json#/definitions/PrivateEndpointProvisioningState",
    "path": "definitions.PrivateEndpointProvisioningState",
    "location": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/sql/resource-manager/Microsoft.Sql/SQL/stable/2025-01-01/common.json:4766:5"
  },
  "new": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/sql/resource-manager/Microsoft.Sql/SQL/preview/2026-11-01-preview/common.json#/definitions/PrivateEndpointProvisioningState",
    "path": "definitions.PrivateEndpointProvisioningState",
    "location": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/sql/resource-manager/Microsoft.Sql/SQL/preview/2026-11-01-preview/common.json:5038:5"
  },
  "type": "Error",
  "docUrl": "https://github.com/Azure/openapi-diff/tree/master/docs/rules/1019.md",
  "mode": "Removal"
}
```

- **New:** [common.json, line 5038](https://github.com/Azure/azure-rest-api-specs/blob/73e1d1d840a771665dd9ae83a7e1e356db0ca9f1/specification/sql/resource-manager/Microsoft.Sql/SQL/preview/2026-11-01-preview/common.json#L5038)
- **TypeSpec (head):** [PrivateEndpointProvisioningState and versioned variants](https://github.com/Azure/azure-rest-api-specs/blob/73e1d1d840a771665dd9ae83a7e1e356db0ca9f1/specification/sql/resource-manager/Microsoft.Sql/SQL/models.tsp#L2875-L2930)
- **Old:** [common.json, line 4766](https://github.com/Azure/azure-rest-api-specs/blob/26ce488a14ba15eeba8382794d125946570e1d67/specification/sql/resource-manager/Microsoft.Sql/SQL/stable/2025-01-01/common.json#L4766)

### [1027 - DefaultValueChanged](https://github.com/Azure/openapi-diff/tree/master/docs/rules/1027.md)

**1. `definitions.JobSchedule.properties.startTime`**

The default changes from `0001-01-01T16:00:00-08:00` to `0001-01-01T05:30:00+05:30`. These represent UTC midnights one day apart.

**Log diagnostic (line 49331; JSON reformatted):**

Search the log for `"path":"definitions.JobSchedule.properties.startTime"`.

```json
{
  "id": "1027",
  "code": "DefaultValueChanged",
  "message": "The new version has a different default value than the previous one.",
  "old": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/sql/resource-manager/Microsoft.Sql/SQL/stable/2025-01-01/jobs.json#/definitions/JobSchedule/properties/startTime",
    "path": "definitions.JobSchedule.properties.startTime",
    "location": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/sql/resource-manager/Microsoft.Sql/SQL/stable/2025-01-01/jobs.json:361:9"
  },
  "new": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/sql/resource-manager/Microsoft.Sql/SQL/preview/2026-11-01-preview/jobs.json#/definitions/JobSchedule/properties/startTime",
    "path": "definitions.JobSchedule.properties.startTime",
    "location": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/sql/resource-manager/Microsoft.Sql/SQL/preview/2026-11-01-preview/jobs.json:361:9"
  },
  "type": "Error",
  "docUrl": "https://github.com/Azure/openapi-diff/tree/master/docs/rules/1027.md",
  "mode": "Update"
}
```

- **New:** [jobs.json, line 361](https://github.com/Azure/azure-rest-api-specs/blob/73e1d1d840a771665dd9ae83a7e1e356db0ca9f1/specification/sql/resource-manager/Microsoft.Sql/SQL/preview/2026-11-01-preview/jobs.json#L361)
- **TypeSpec (head):** [JobSchedule.startTime and its versioned defaults](https://github.com/Azure/azure-rest-api-specs/blob/73e1d1d840a771665dd9ae83a7e1e356db0ca9f1/specification/sql/resource-manager/Microsoft.Sql/SQL/models.tsp#L9277-L9287)
- **Old:** [jobs.json, line 361](https://github.com/Azure/azure-rest-api-specs/blob/26ce488a14ba15eeba8382794d125946570e1d67/specification/sql/resource-manager/Microsoft.Sql/SQL/stable/2025-01-01/jobs.json#L361)

### [1047 - XmsEnumChanged](https://github.com/Azure/openapi-diff/tree/master/docs/rules/1047.md)

**1. `definitions.DataMaskingFunction`**

`x-ms-enum.modelAsString` changes from `false` to `true`.

**Log diagnostic (line 39239; JSON reformatted):**

Search the log for `"path":"definitions.DataMaskingFunction"`.

```json
{
  "id": "1047",
  "code": "XmsEnumChanged",
  "message": "The new version has a different x-ms-enum 'modelAsString' than the previous one.",
  "old": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/sql/resource-manager/Microsoft.Sql/SQL/stable/2025-01-01/common.json#/definitions/DataMaskingFunction",
    "path": "definitions.DataMaskingFunction",
    "location": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/sql/resource-manager/Microsoft.Sql/SQL/stable/2025-01-01/common.json:1444:5"
  },
  "new": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/sql/resource-manager/Microsoft.Sql/SQL/preview/2026-11-01-preview/common.json#/definitions/DataMaskingFunction",
    "path": "definitions.DataMaskingFunction",
    "location": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/sql/resource-manager/Microsoft.Sql/SQL/preview/2026-11-01-preview/common.json:1468:5"
  },
  "type": "Error",
  "docUrl": "https://github.com/Azure/openapi-diff/tree/master/docs/rules/1047.md",
  "mode": "Update"
}
```

- **New:** [common.json, line 1468](https://github.com/Azure/azure-rest-api-specs/blob/73e1d1d840a771665dd9ae83a7e1e356db0ca9f1/specification/sql/resource-manager/Microsoft.Sql/SQL/preview/2026-11-01-preview/common.json#L1468)
- **TypeSpec (head):** [DataMaskingFunction union](https://github.com/Azure/azure-rest-api-specs/blob/73e1d1d840a771665dd9ae83a7e1e356db0ca9f1/specification/sql/resource-manager/Microsoft.Sql/SQL/models.tsp#L3399-L3402)
- **Old:** [common.json, line 1444](https://github.com/Azure/azure-rest-api-specs/blob/26ce488a14ba15eeba8382794d125946570e1d67/specification/sql/resource-manager/Microsoft.Sql/SQL/stable/2025-01-01/common.json#L1444)

**2. `definitions.DataMaskingRuleState`**

`x-ms-enum.modelAsString` changes from `false` to `true`.

**Log diagnostic (line 39240; JSON reformatted):**

Search the log for `"path":"definitions.DataMaskingRuleState"`.

```json
{
  "id": "1047",
  "code": "XmsEnumChanged",
  "message": "The new version has a different x-ms-enum 'modelAsString' than the previous one.",
  "old": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/sql/resource-manager/Microsoft.Sql/SQL/stable/2025-01-01/common.json#/definitions/DataMaskingRuleState",
    "path": "definitions.DataMaskingRuleState",
    "location": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/sql/resource-manager/Microsoft.Sql/SQL/stable/2025-01-01/common.json:1509:5"
  },
  "new": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/sql/resource-manager/Microsoft.Sql/SQL/preview/2026-11-01-preview/common.json#/definitions/DataMaskingRuleState",
    "path": "definitions.DataMaskingRuleState",
    "location": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/sql/resource-manager/Microsoft.Sql/SQL/preview/2026-11-01-preview/common.json:1533:5"
  },
  "type": "Error",
  "docUrl": "https://github.com/Azure/openapi-diff/tree/master/docs/rules/1047.md",
  "mode": "Update"
}
```

- **New:** [common.json, line 1533](https://github.com/Azure/azure-rest-api-specs/blob/73e1d1d840a771665dd9ae83a7e1e356db0ca9f1/specification/sql/resource-manager/Microsoft.Sql/SQL/preview/2026-11-01-preview/common.json#L1533)
- **TypeSpec (head):** [DataMaskingRuleState union](https://github.com/Azure/azure-rest-api-specs/blob/73e1d1d840a771665dd9ae83a7e1e356db0ca9f1/specification/sql/resource-manager/Microsoft.Sql/SQL/models.tsp#L3650-L3653)
- **Old:** [common.json, line 1509](https://github.com/Azure/azure-rest-api-specs/blob/26ce488a14ba15eeba8382794d125946570e1d67/specification/sql/resource-manager/Microsoft.Sql/SQL/stable/2025-01-01/common.json#L1509)

**3. `definitions.DataMaskingRuleProperties.properties.ruleState`**

The property references `DataMaskingRuleState`, whose `modelAsString` changes from `false` to `true` (occurrence 2).

**Log diagnostic (line 39301; JSON reformatted):**

Search the log for `"path":"definitions.DataMaskingRuleProperties.properties.ruleState"`.

```json
{
  "id": "1047",
  "code": "XmsEnumChanged",
  "message": "The new version has a different x-ms-enum 'modelAsString' than the previous one.",
  "old": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/sql/resource-manager/Microsoft.Sql/SQL/stable/2025-01-01/dataMaskingRules.json#/definitions/DataMaskingRuleProperties/properties/ruleState",
    "path": "definitions.DataMaskingRuleProperties.properties.ruleState",
    "location": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/sql/resource-manager/Microsoft.Sql/SQL/stable/2025-01-01/dataMaskingRules.json:287:9"
  },
  "new": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/sql/resource-manager/Microsoft.Sql/SQL/preview/2026-11-01-preview/dataMaskingRules.json#/definitions/DataMaskingRuleProperties/properties/ruleState",
    "path": "definitions.DataMaskingRuleProperties.properties.ruleState",
    "location": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/sql/resource-manager/Microsoft.Sql/SQL/preview/2026-11-01-preview/dataMaskingRules.json:295:9"
  },
  "type": "Error",
  "docUrl": "https://github.com/Azure/openapi-diff/tree/master/docs/rules/1047.md",
  "mode": "Update"
}
```

- **New:** [dataMaskingRules.json, line 295](https://github.com/Azure/azure-rest-api-specs/blob/73e1d1d840a771665dd9ae83a7e1e356db0ca9f1/specification/sql/resource-manager/Microsoft.Sql/SQL/preview/2026-11-01-preview/dataMaskingRules.json#L295) (source schema: [DataMaskingRuleState, line 1533](https://github.com/Azure/azure-rest-api-specs/blob/73e1d1d840a771665dd9ae83a7e1e356db0ca9f1/specification/sql/resource-manager/Microsoft.Sql/SQL/preview/2026-11-01-preview/common.json#L1533))
- **TypeSpec (head):** [ruleState property](https://github.com/Azure/azure-rest-api-specs/blob/73e1d1d840a771665dd9ae83a7e1e356db0ca9f1/specification/sql/resource-manager/Microsoft.Sql/SQL/models.tsp#L7590-L7591) (source schema: [DataMaskingRuleState](https://github.com/Azure/azure-rest-api-specs/blob/73e1d1d840a771665dd9ae83a7e1e356db0ca9f1/specification/sql/resource-manager/Microsoft.Sql/SQL/models.tsp#L3650-L3653))
- **Old:** [dataMaskingRules.json, line 287](https://github.com/Azure/azure-rest-api-specs/blob/26ce488a14ba15eeba8382794d125946570e1d67/specification/sql/resource-manager/Microsoft.Sql/SQL/stable/2025-01-01/dataMaskingRules.json#L287) (source schema: [DataMaskingRuleState, line 1509](https://github.com/Azure/azure-rest-api-specs/blob/26ce488a14ba15eeba8382794d125946570e1d67/specification/sql/resource-manager/Microsoft.Sql/SQL/stable/2025-01-01/common.json#L1509))

**4. `definitions.DataMaskingRuleProperties.properties.maskingFunction`**

The property references `DataMaskingFunction`, whose `modelAsString` changes from `false` to `true` (occurrence 1).

**Log diagnostic (line 39302; JSON reformatted):**

Search the log for `"path":"definitions.DataMaskingRuleProperties.properties.maskingFunction"`.

```json
{
  "id": "1047",
  "code": "XmsEnumChanged",
  "message": "The new version has a different x-ms-enum 'modelAsString' than the previous one.",
  "old": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/sql/resource-manager/Microsoft.Sql/SQL/stable/2025-01-01/dataMaskingRules.json#/definitions/DataMaskingRuleProperties/properties/maskingFunction",
    "path": "definitions.DataMaskingRuleProperties.properties.maskingFunction",
    "location": "file:///home/runner/work/azure-rest-api-specs/cross-version-c93b354fd9c14905bb574a8834c4d69b/specification/sql/resource-manager/Microsoft.Sql/SQL/stable/2025-01-01/dataMaskingRules.json:307:9"
  },
  "new": {
    "ref": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/sql/resource-manager/Microsoft.Sql/SQL/preview/2026-11-01-preview/dataMaskingRules.json#/definitions/DataMaskingRuleProperties/properties/maskingFunction",
    "path": "definitions.DataMaskingRuleProperties.properties.maskingFunction",
    "location": "file:///home/runner/work/azure-rest-api-specs/azure-rest-api-specs/specification/sql/resource-manager/Microsoft.Sql/SQL/preview/2026-11-01-preview/dataMaskingRules.json:315:9"
  },
  "type": "Error",
  "docUrl": "https://github.com/Azure/openapi-diff/tree/master/docs/rules/1047.md",
  "mode": "Update"
}
```

- **New:** [dataMaskingRules.json, line 315](https://github.com/Azure/azure-rest-api-specs/blob/73e1d1d840a771665dd9ae83a7e1e356db0ca9f1/specification/sql/resource-manager/Microsoft.Sql/SQL/preview/2026-11-01-preview/dataMaskingRules.json#L315) (source schema: [DataMaskingFunction, line 1468](https://github.com/Azure/azure-rest-api-specs/blob/73e1d1d840a771665dd9ae83a7e1e356db0ca9f1/specification/sql/resource-manager/Microsoft.Sql/SQL/preview/2026-11-01-preview/common.json#L1468))
- **TypeSpec (head):** [maskingFunction property](https://github.com/Azure/azure-rest-api-specs/blob/73e1d1d840a771665dd9ae83a7e1e356db0ca9f1/specification/sql/resource-manager/Microsoft.Sql/SQL/models.tsp#L7623-L7624) (source schema: [DataMaskingFunction](https://github.com/Azure/azure-rest-api-specs/blob/73e1d1d840a771665dd9ae83a7e1e356db0ca9f1/specification/sql/resource-manager/Microsoft.Sql/SQL/models.tsp#L3399-L3402))
- **Old:** [dataMaskingRules.json, line 307](https://github.com/Azure/azure-rest-api-specs/blob/26ce488a14ba15eeba8382794d125946570e1d67/specification/sql/resource-manager/Microsoft.Sql/SQL/stable/2025-01-01/dataMaskingRules.json#L307) (source schema: [DataMaskingFunction, line 1444](https://github.com/Azure/azure-rest-api-specs/blob/26ce488a14ba15eeba8382794d125946570e1d67/specification/sql/resource-manager/Microsoft.Sql/SQL/stable/2025-01-01/common.json#L1444))
