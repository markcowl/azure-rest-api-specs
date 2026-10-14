# Breaking-change evaluator

**Status:** partial
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46924 — [Commvault] Align nine preview APIs with pinned private source](https://github.com/Azure/azure-rest-api-specs/pull/46924)
- **Author:** saurabh-jaiswal-333
- **State:** closed (merged) at 2026-10-07T09:23:40Z
- **Base:** `main` at `bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb`
- **Head:** `saurabh-jaiswal-333-commvault-preview-alignment` at `d7bddff73316c6472c4712ca7c16d84d90c5aa14`
- **Changed TypeSpec files:** `specification/liftrcommvault/Commvault.ContentStore.Management/back-compatible.tsp`, `specification/liftrcommvault/Commvault.ContentStore.Management/client.tsp`, `specification/liftrcommvault/Commvault.ContentStore.Management/main.tsp`

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (no detector timing emitted) |
| B | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705513) (no detector timing emitted) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/liftrcommvault/Commvault.ContentStore.Management` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/0b8d0c5d536b771c-phase-a.md) |
| `specification/liftrcommvault/Commvault.ContentStore.Management` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/0b8d0c5d536b771c-phase-b.md) |

## Error finding equivalence details

### Intentional Swagger-only coverage gaps

#### DifferentAllOf

- **Swagger finding:** `A-oad-1` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 343](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L343) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 343](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L343) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-11` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 337](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L337) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 337](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L337) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-14` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 2026](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L2026) — JSONPath `definitions.CloudAccountUpdate`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 2064](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L2064) — JSONPath `definitions.CloudAccountUpdate`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-21` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 337](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L337) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 337](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L337) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-24` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 2082](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L2082) — JSONPath `definitions.CloudAccountUpdate`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 2120](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L2120) — JSONPath `definitions.CloudAccountUpdate`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-31` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 337](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L337) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 337](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L337) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-34` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 2150](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L2150) — JSONPath `definitions.CloudAccountUpdate`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 2188](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L2188) — JSONPath `definitions.CloudAccountUpdate`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-4` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 1964](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L1964) — JSONPath `definitions.CloudAccountUpdate`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 2002](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L2002) — JSONPath `definitions.CloudAccountUpdate`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-41` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 343](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L343) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 343](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L343) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-44` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 2167](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L2167) — JSONPath `definitions.CloudAccountUpdate`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 2205](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L2205) — JSONPath `definitions.CloudAccountUpdate`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-51` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 406](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L406) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 406](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L406) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-54` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 2374](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L2374) — JSONPath `definitions.CloudAccountUpdate`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 2412](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L2412) — JSONPath `definitions.CloudAccountUpdate`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-61` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 448](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L448) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 448](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L448) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-64` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 2416](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L2416) — JSONPath `definitions.CloudAccountUpdate`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 2454](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L2454) — JSONPath `definitions.CloudAccountUpdate`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-74` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 454](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L454) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 454](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L454) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-84` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2655](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2655) — JSONPath `definitions.CloudAccountUpdate`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2869](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2869) — JSONPath `definitions.CloudAccountUpdate`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

#### ReferenceRedirection

- **Swagger finding:** `A-oad-12` — `ReferenceRedirection` — The '$ref' property points to different models in the old and new versions.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 2041](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L2041) — JSONPath `definitions.CloudAccountUpdate.properties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 2068](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L2068) — JSONPath `definitions.CloudAccountUpdate.properties.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI reference structure is not wire-level
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-2` — `ReferenceRedirection` — The '$ref' property points to different models in the old and new versions.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 1979](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L1979) — JSONPath `definitions.CloudAccountUpdate.properties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 2006](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L2006) — JSONPath `definitions.CloudAccountUpdate.properties.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI reference structure is not wire-level
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-22` — `ReferenceRedirection` — The '$ref' property points to different models in the old and new versions.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 2097](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L2097) — JSONPath `definitions.CloudAccountUpdate.properties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 2124](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L2124) — JSONPath `definitions.CloudAccountUpdate.properties.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI reference structure is not wire-level
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-32` — `ReferenceRedirection` — The '$ref' property points to different models in the old and new versions.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 2165](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L2165) — JSONPath `definitions.CloudAccountUpdate.properties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 2192](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L2192) — JSONPath `definitions.CloudAccountUpdate.properties.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI reference structure is not wire-level
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-42` — `ReferenceRedirection` — The '$ref' property points to different models in the old and new versions.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 2182](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L2182) — JSONPath `definitions.CloudAccountUpdate.properties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 2209](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L2209) — JSONPath `definitions.CloudAccountUpdate.properties.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI reference structure is not wire-level
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-52` — `ReferenceRedirection` — The '$ref' property points to different models in the old and new versions.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 2389](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L2389) — JSONPath `definitions.CloudAccountUpdate.properties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 2416](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L2416) — JSONPath `definitions.CloudAccountUpdate.properties.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI reference structure is not wire-level
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-62` — `ReferenceRedirection` — The '$ref' property points to different models in the old and new versions.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 2431](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L2431) — JSONPath `definitions.CloudAccountUpdate.properties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 2458](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L2458) — JSONPath `definitions.CloudAccountUpdate.properties.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI reference structure is not wire-level
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-75` — `ReferenceRedirection` — The '$ref' property points to different models in the old and new versions.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2670](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2670) — JSONPath `definitions.CloudAccountUpdate.properties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2873](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2873) — JSONPath `definitions.CloudAccountUpdate.properties.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI reference structure is not wire-level
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

#### RemovedDefinition

- **Swagger finding:** `A-oad-19` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'CloudAccountUpdateProperties' removed or renamed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 1677](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L1677) — JSONPath `definitions`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 1677](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L1677) — JSONPath `definitions`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document commvault.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-29` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'CloudAccountUpdateProperties' removed or renamed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 1733](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L1733) — JSONPath `definitions`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 1733](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L1733) — JSONPath `definitions`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document commvault.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-39` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'CloudAccountUpdateProperties' removed or renamed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 1801](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L1801) — JSONPath `definitions`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 1801](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L1801) — JSONPath `definitions`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document commvault.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-49` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'CloudAccountUpdateProperties' removed or renamed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 1807](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L1807) — JSONPath `definitions`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 1807](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L1807) — JSONPath `definitions`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document commvault.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-59` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'CloudAccountUpdateProperties' removed or renamed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 2001](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L2001) — JSONPath `definitions`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 2001](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L2001) — JSONPath `definitions`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document commvault.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-69` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'CloudAccountUpdateProperties' removed or renamed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 2043](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L2043) — JSONPath `definitions`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 2043](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L2043) — JSONPath `definitions`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document commvault.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-89` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'CloudAccountUpdateProperties' removed or renamed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2268](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2268) — JSONPath `definitions`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2445](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2445) — JSONPath `definitions`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document commvault.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-9` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'CloudAccountUpdateProperties' removed or renamed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 1615](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L1615) — JSONPath `definitions`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 1615](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L1615) — JSONPath `definitions`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document commvault.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

### Findings missing from the TypeSpec detector

#### AddedOptionalProperty

- **Swagger finding:** `A-oad-15` — `AddedOptionalProperty` — The new version has a new optional property 'id' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 2029](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L2029) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 2067](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L2067) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-16` — `AddedOptionalProperty` — The new version has a new optional property 'name' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 2029](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L2029) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 2067](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L2067) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-17` — `AddedOptionalProperty` — The new version has a new optional property 'type' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 2029](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L2029) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 2067](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L2067) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-18` — `AddedOptionalProperty` — The new version has a new optional property 'systemData' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 2029](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L2029) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 2067](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L2067) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-25` — `AddedOptionalProperty` — The new version has a new optional property 'id' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 2085](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L2085) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 2123](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L2123) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-26` — `AddedOptionalProperty` — The new version has a new optional property 'name' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 2085](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L2085) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 2123](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L2123) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-27` — `AddedOptionalProperty` — The new version has a new optional property 'type' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 2085](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L2085) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 2123](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L2123) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-28` — `AddedOptionalProperty` — The new version has a new optional property 'systemData' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 2085](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L2085) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 2123](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L2123) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-35` — `AddedOptionalProperty` — The new version has a new optional property 'id' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 2153](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L2153) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 2191](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L2191) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-36` — `AddedOptionalProperty` — The new version has a new optional property 'name' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 2153](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L2153) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 2191](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L2191) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-37` — `AddedOptionalProperty` — The new version has a new optional property 'type' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 2153](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L2153) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 2191](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L2191) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-38` — `AddedOptionalProperty` — The new version has a new optional property 'systemData' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 2153](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L2153) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 2191](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L2191) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-45` — `AddedOptionalProperty` — The new version has a new optional property 'id' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 2170](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L2170) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 2208](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L2208) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-46` — `AddedOptionalProperty` — The new version has a new optional property 'name' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 2170](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L2170) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 2208](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L2208) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-47` — `AddedOptionalProperty` — The new version has a new optional property 'type' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 2170](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L2170) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 2208](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L2208) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-48` — `AddedOptionalProperty` — The new version has a new optional property 'systemData' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 2170](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L2170) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 2208](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L2208) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-5` — `AddedOptionalProperty` — The new version has a new optional property 'id' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 1967](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L1967) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 2005](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L2005) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-55` — `AddedOptionalProperty` — The new version has a new optional property 'id' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 2377](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L2377) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 2415](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L2415) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-56` — `AddedOptionalProperty` — The new version has a new optional property 'name' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 2377](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L2377) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 2415](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L2415) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-57` — `AddedOptionalProperty` — The new version has a new optional property 'type' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 2377](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L2377) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 2415](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L2415) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-58` — `AddedOptionalProperty` — The new version has a new optional property 'systemData' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 2377](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L2377) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 2415](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L2415) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-6` — `AddedOptionalProperty` — The new version has a new optional property 'name' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 1967](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L1967) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 2005](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L2005) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-65` — `AddedOptionalProperty` — The new version has a new optional property 'id' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 2419](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L2419) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 2457](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L2457) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-66` — `AddedOptionalProperty` — The new version has a new optional property 'name' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 2419](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L2419) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 2457](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L2457) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-67` — `AddedOptionalProperty` — The new version has a new optional property 'type' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 2419](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L2419) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 2457](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L2457) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-68` — `AddedOptionalProperty` — The new version has a new optional property 'systemData' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 2419](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L2419) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 2457](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L2457) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-7` — `AddedOptionalProperty` — The new version has a new optional property 'type' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 1967](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L1967) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 2005](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L2005) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-8` — `AddedOptionalProperty` — The new version has a new optional property 'systemData' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 1967](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L1967) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 2005](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L2005) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-83` — `AddedOptionalProperty` — The new version has a new optional property 'roleAssignmentsOnCcaCreate' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2611](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2611) — JSONPath `definitions.CloudAccountProperties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2807](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2807) — JSONPath `definitions.CloudAccountProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/linksaas response 200 | GET /subscriptions/{}/providers/commvault.contentstore/cloudaccounts response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-85` — `AddedOptionalProperty` — The new version has a new optional property 'id' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2658](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2658) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2872](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2872) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-86` — `AddedOptionalProperty` — The new version has a new optional property 'name' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2658](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2658) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2872](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2872) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-87` — `AddedOptionalProperty` — The new version has a new optional property 'type' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2658](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2658) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2872](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2872) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-88` — `AddedOptionalProperty` — The new version has a new optional property 'systemData' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2658](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2658) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2872](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2872) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-92` — `AddedOptionalProperty` — The new version has a new optional property 'complianceLockStatus' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 4240](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L4240) — JSONPath `definitions.StorageProperties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 4471](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L4471) — JSONPath `definitions.StorageProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{} response 201 | POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{}/disablecompliancelock response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{}/enablecompliancelock response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{}/refresh response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

#### AddedPropertyInResponse

- **Swagger finding:** `A-oad-73` — `AddedPropertyInResponse` — The new version has a new property 'roleAssignmentsOnCcaCreate' in response that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2611](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2611) — JSONPath `definitions.CloudAccountProperties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2807](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2807) — JSONPath `definitions.CloudAccountProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/linksaas response 200 | GET /subscriptions/{}/providers/commvault.contentstore/cloudaccounts response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

#### AddedRequiredProperty

- **Swagger finding:** `A-oad-78` — `AddedRequiredProperty` — The new version lists new non-read-only properties as required: 'roleName, entities'. These properties were not listed as required in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 3858](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L3858) — JSONPath `definitions.RoleMappingProperties.properties.roles.items`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 4089](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L4089) — JSONPath `definitions.RoleMappingProperties.properties.roles.items`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/linksaas response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default response 201 | GET /subscriptions/{}/providers/commvault.contentstore/cloudaccounts response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-91` — `AddedRequiredProperty` — The new version lists new non-read-only properties as required: 'roleName, entities'. These properties were not listed as required in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 3797](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L3797) — JSONPath `definitions.RoleAssignment`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 4023](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L4023) — JSONPath `definitions.RoleAssignment`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/linksaas response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default response 201 | GET /subscriptions/{}/providers/commvault.contentstore/cloudaccounts response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

#### ConstraintChanged

- **Swagger finding:** `A-oad-90` — `ConstraintChanged` — The new version has a different 'minItems' value than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 3805](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L3805) — JSONPath `definitions.RoleAssignment.properties.entities`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 4031](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L4031) — JSONPath `definitions.RoleAssignment.properties.entities`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/linksaas response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default response 201 | GET /subscriptions/{}/providers/commvault.contentstore/cloudaccounts response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

#### RemovedProperty

- **Swagger finding:** `A-oad-71` — `RemovedProperty` — The new version is missing a property found in the old version. Was 'backupAdminOnCcaCreate' renamed or removed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2611](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2611) — JSONPath `definitions.CloudAccountProperties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2807](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2807) — JSONPath `definitions.CloudAccountProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/linksaas response 200 | GET /subscriptions/{}/providers/commvault.contentstore/cloudaccounts response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-72` — `RemovedProperty` — The new version is missing a property found in the old version. Was 'multiPersonAuthorizationOnCcaCreate' renamed or removed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2611](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2611) — JSONPath `definitions.CloudAccountProperties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2807](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2807) — JSONPath `definitions.CloudAccountProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/linksaas response 200 | GET /subscriptions/{}/providers/commvault.contentstore/cloudaccounts response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

#### RequiredStatusChange

- **Swagger finding:** `A-oad-13` — `RequiredStatusChange` — The 'required' status changed from the old version('False') to the new version('True').
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 2769](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L2769) — JSONPath `definitions.ProtectionGroupProperties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 2786](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L2786) — JSONPath `definitions.ProtectionGroupProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 201 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-23` — `RequiredStatusChange` — The 'required' status changed from the old version('False') to the new version('True').
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 2825](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L2825) — JSONPath `definitions.ProtectionGroupProperties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 2842](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L2842) — JSONPath `definitions.ProtectionGroupProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 201 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-3` — `RequiredStatusChange` — The 'required' status changed from the old version('False') to the new version('True').
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 2707](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L2707) — JSONPath `definitions.ProtectionGroupProperties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 2724](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L2724) — JSONPath `definitions.ProtectionGroupProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 201 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-33` — `RequiredStatusChange` — The 'required' status changed from the old version('False') to the new version('True').
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 2893](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L2893) — JSONPath `definitions.ProtectionGroupProperties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 2910](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L2910) — JSONPath `definitions.ProtectionGroupProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 201 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-43` — `RequiredStatusChange` — The 'required' status changed from the old version('False') to the new version('True').
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 2910](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L2910) — JSONPath `definitions.ProtectionGroupProperties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 2927](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L2927) — JSONPath `definitions.ProtectionGroupProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 201 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-53` — `RequiredStatusChange` — The 'required' status changed from the old version('False') to the new version('True').
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 3106](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L3106) — JSONPath `definitions.ProtectionGroupProperties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 3123](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L3123) — JSONPath `definitions.ProtectionGroupProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 201 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-63` — `RequiredStatusChange` — The 'required' status changed from the old version('False') to the new version('True').
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 3191](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L3191) — JSONPath `definitions.ProtectionGroupProperties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 3208](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L3208) — JSONPath `definitions.ProtectionGroupProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 201 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-76` — `RequiredStatusChange` — The 'required' status changed from the old version('False') to the new version('True').
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 3472](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L3472) — JSONPath `definitions.ProtectionGroupProperties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 3695](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L3695) — JSONPath `definitions.ProtectionGroupProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 201 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-77` — `RequiredStatusChange` — The 'required' status changed from the old version('False') to the new version('True').
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 3800](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L3800) — JSONPath `definitions.RoleAssignment.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 4026](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L4026) — JSONPath `definitions.RoleAssignment.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/linksaas response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default response 201 | GET /subscriptions/{}/providers/commvault.contentstore/cloudaccounts response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

## Non-error finding equivalence by phase

This section follows error equivalence and contains findings that neither detector reports as an actionable error, including informational OAD records.

### Informational OAD records

#### NoVersionChange

- **Swagger finding:** `A-oad-0` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L1); [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L1)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document commvault.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

- **Swagger finding:** `A-oad-10` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L1); [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L1)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document commvault.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

- **Swagger finding:** `A-oad-20` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L1); [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L1)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document commvault.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

- **Swagger finding:** `A-oad-30` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L1); [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L1)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document commvault.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

- **Swagger finding:** `A-oad-40` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L1); [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L1)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document commvault.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

- **Swagger finding:** `A-oad-50` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L1); [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L1)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document commvault.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

- **Swagger finding:** `A-oad-60` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L1); [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L1)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document commvault.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

- **Swagger finding:** `A-oad-70` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L1); [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L1)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document commvault.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

- **Swagger finding:** `A-oad-93` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-08-01-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-08-01-preview/commvault.json#L1); [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-08-01-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-08-01-preview/commvault.json#L1)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document commvault.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

### Findings missing from the TypeSpec detector

#### AddedPath

- **Swagger finding:** `A-oad-80` — `AddedPath` — The new version is adding a path that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json); [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2267](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2267) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}/storages/{storageName}/disableComplianceLock']`
- **Resolved targets:** POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{}/disablecompliancelock
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-81` — `AddedPath` — The new version is adding a path that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json); [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2326](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2326) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}/storages/{storageName}/enableComplianceLock']`
- **Resolved targets:** POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{}/enablecompliancelock
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-82` — `AddedPath` — The new version is adding a path that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json); [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2385](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2385) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}/storages/{storageName}/refresh']`
- **Resolved targets:** POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{}/refresh
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

#### AddedReadOnlyPropertyInResponse

- **Swagger finding:** `A-oad-79` — `AddedReadOnlyPropertyInResponse` — The new version has a new read-only property 'complianceLockStatus' in response that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 4240](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L4240) — JSONPath `definitions.StorageProperties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 4471](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L4471) — JSONPath `definitions.StorageProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{} response 201 | POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{}/disablecompliancelock response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{}/enablecompliancelock response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{}/refresh response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

## Reproduce

**Shell:** powershell

### Check out the evaluator

```powershell
git clone 'https://github.com/markcowl/azure-rest-api-specs.git' evaluator
git -C evaluator checkout '0d458e940caf56cd5069ec16389524d2186c786f'
corepack pnpm --dir evaluator install --frozen-lockfile
```

### Prepare the immutable analyzer

```powershell
$prepared = node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js prepare --typespec-revision d0ab464d60c47d6699bfea0292c901864b5d8ba0 | ConvertFrom-Json
if ($prepared.artifactDigest -ne '0ae9893ccdc9016ab4e0916f3f34f57959f0ce0eb4e445cfe91a04597eaa93d2') { throw 'Prepared analyzer digest does not match the report' }
```

### Check out the evaluated target

```powershell
git clone --filter=blob:none --no-checkout 'https://github.com/Azure/azure-rest-api-specs.git' target
git -C target fetch --no-tags origin bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb d7bddff73316c6472c4712ca7c16d84d90c5aa14
git -C target checkout --detach d7bddff73316c6472c4712ca7c16d84d90c5aa14
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/46924' --tool-revision d0ab464d60c47d6699bfea0292c901864b5d8ba0 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/liftrcommvault/Commvault.ContentStore.Management

```powershell
Push-Location target
node $prepared.executable 'specification/liftrcommvault/Commvault.ContentStore.Management' --base-ref bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb --phase same-version --json-output '../specification-liftrcommvault-Commvault.ContentStore.Management-phase-a.json' --markdown-output '../specification-liftrcommvault-Commvault.ContentStore.Management-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/liftrcommvault/Commvault.ContentStore.Management' --base-ref bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb --json-output '../specification-liftrcommvault-Commvault.ContentStore.Management-phase-b-evidence.json' --markdown-output '../specification-liftrcommvault-Commvault.ContentStore.Management-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

## Errors

- specification/liftrcommvault/Commvault.ContentStore.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

