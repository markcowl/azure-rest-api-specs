# Breaking-change evaluation: PRs merged October 5–11, 2026

This branch records all PRs merged to `main` in `Azure/azure-rest-api-specs` from 2026-10-05T00:00:00Z through 2026-10-11T23:59:59Z that changed a TypeSpec service input under `specification/` (`.tsp` or `tspconfig.yaml`).

## Selection and continuation

- Merged PR candidates inspected: **79**
- Qualifying TypeSpec service PRs: **35**
- Selected in this batch: **35** of a maximum of **40**
- Remaining qualifying PRs: **0**
- Continuation cursor: **none; the full week fits in this batch**
- Ordering: merge time ascending, then PR number ascending.

## Execution status

- Complete evaluations: **12**
- Not qualified by required OAD evidence: **17**
- Partial analyzer executions: **6**
- Failed executions: **0**

Effectiveness totals below include only complete evaluations. Partial reports remain linked with their detector errors and are not converted into success-shaped metrics.

## Effectiveness by phase

| Phase | Comparable OAD | Informational OAD | TypeSpec | Exact | Probable | Intentional gap | Missed equivalent | TypeSpec-only | Ambiguous |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | 0 | 5 | 28 | 0 | 0 | 0 | 0 | 28 | 0 |
| B | 0 | 0 | 83 | 0 | 0 | 0 | 0 | 83 | 0 |

Phase A compares **Swagger BreakingChange** with TypeSpec `same-version`. Phase B compares **Breaking Change (Cross-Version)** with TypeSpec `cross-version` findings retained from the combined analyzer execution.

## Error equivalence by phase

| Phase | OAD errors | TypeSpec errors | Matched OAD errors | Matched TypeSpec errors | OAD error → TypeSpec non-error | TypeSpec error → OAD non-error | OAD errors without equivalent | TypeSpec errors without equivalent |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | 0 | 28 | 0 | 0 | 0 | 0 | 0 | 28 |
| B | 0 | 36 | 0 | 0 | 0 | 0 | 0 | 36 |

## TypeSpec findings by finding type

| Phase | Finding type | Severity | Actionable error | Count |
| --- | --- | --- | --- | ---: |
| A | `RequestPropertyTypeNarrowed` | error | yes | 2 |
| A | `RequestPropertyTypeWidened` | error | yes | 2 |
| A | `ResourcePropertyTypeNarrowed` | error | yes | 9 |
| A | `ResourcePropertyTypeWidened` | error | yes | 9 |
| A | `ResponsePropertyTypeNarrowed` | error | yes | 3 |
| A | `ResponsePropertyTypeWidened` | error | yes | 3 |
| B | `EnumerationMemberAdded` | ignore | no | 2 |
| B | `OperationAdded` | ignore | no | 28 |
| B | `RequestPropertyTypeWidened` | ignore | no | 14 |
| B | `RequestTypeKindChanged` | error | yes | 1 |
| B | `ResourcePropertyAdded` | error | yes | 23 |
| B | `ResourcePropertyTypeWidened` | error | yes | 5 |
| B | `ResponseHeaderAdded` | ignore | no | 1 |
| B | `ResponsePropertyAdded` | ignore | no | 2 |
| B | `ResponsePropertyTypeWidened` | error | yes | 7 |

## OAD findings by finding type

| Phase | Rule | Severity | Count |
| --- | --- | --- | ---: |
| A | `NoVersionChange` | info | 5 |

## Detector performance

| Phase | OAD detector timing | TypeSpec timing | TypeSpec scope |
| --- | --- | --- | --- |
| A | Unavailable | 12 reports; median 2720 ms (4–37236 ms) | same-version phase |
| B | Unavailable | 12 reports; median 2574 ms (5–39960 ms) | combined Phase A+B analyzer execution containing Phase B |

Workflow/job duration is never substituted for detector-emitted timing.

## PR reports

| PR | Merged | Status | Phase A | Phase B | Qualification or execution detail |
| --- | --- | --- | --- | --- | --- |
| [#45102](prs/45102/report.md) | 2026-10-09 | Not qualified | — | — | `evidence-incomplete` |
| [#45368](prs/45368/report.md) | 2026-10-07 | Not qualified | — | — | `invalid-oad-output` |
| [#45523](prs/45523/report.md) | 2026-10-09 | Not qualified | — | — | `run-association-unverified` |
| [#45556](prs/45556/report.md) | 2026-10-10 | Not qualified | — | — | `run-association-unverified` |
| [#45799](prs/45799/report.md) | 2026-10-09 | Not qualified | — | — | `run-association-unverified` |
| [#46044](prs/46044/report.md) | 2026-10-08 | Not qualified | — | — | `evidence-incomplete` |
| [#46338](prs/46338/report.md) | 2026-10-05 | Not qualified | — | — | `invalid-oad-output` |
| [#46377](prs/46377/report.md) | 2026-10-05 | Not qualified | — | — | `run-association-unverified` |
| [#46391](prs/46391/report.md) | 2026-10-09 | Evaluated | OAD 0; TypeSpec 0; exact 0; probable 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; exact 0; probable 0; TypeSpec-only 0 | — |
| [#46546](prs/46546/report.md) | 2026-10-09 | Not qualified | — | — | `run-association-unverified` |
| [#46583](prs/46583/report.md) | 2026-10-09 | Evaluated | OAD 0; TypeSpec 24; exact 0; probable 0; TypeSpec-only 24 | OAD 0; TypeSpec 5; exact 0; probable 0; TypeSpec-only 5 | — |
| [#46585](prs/46585/report.md) | 2026-10-08 | Not qualified | — | — | `run-association-unverified` |
| [#46656](prs/46656/report.md) | 2026-10-07 | Evaluated | OAD 0; TypeSpec 0; exact 0; probable 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; exact 0; probable 0; TypeSpec-only 0 | — |
| [#46674](prs/46674/report.md) | 2026-10-09 | Evaluated | OAD 0; TypeSpec 4; exact 0; probable 0; TypeSpec-only 4 | OAD 0; TypeSpec 78; exact 0; probable 0; TypeSpec-only 78 | — |
| [#46676](prs/46676/report.md) | 2026-10-08 | Not qualified | — | — | `run-association-unverified` |
| [#46715](prs/46715/report.md) | 2026-10-10 | Partial | — | — | specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions: Analysis failed: Cannot read properties of undefined (reading 'get') ; Analysis failed: Cannot read properties of undefined (reading 'get') |
| [#46751](prs/46751/report.md) | 2026-10-05 | Not qualified | — | — | `run-association-unverified` |
| [#46832](prs/46832/report.md) | 2026-10-09 | Not qualified | — | — | `run-association-unverified` |
| [#46855](prs/46855/report.md) | 2026-10-08 | Evaluated | OAD 0; TypeSpec 0; exact 0; probable 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; exact 0; probable 0; TypeSpec-only 0 | — |
| [#46860](prs/46860/report.md) | 2026-10-09 | Not qualified | — | — | `run-association-unverified` |
| [#46924](prs/46924/report.md) | 2026-10-07 | Partial | — | — | specification/liftrcommvault/Commvault.ContentStore.Management: Analysis failed: Cannot read properties of undefined (reading 'get') ; Analysis failed: Cannot read properties of undefined (reading 'get') |
| [#46950](prs/46950/report.md) | 2026-10-06 | Evaluated | OAD 0; TypeSpec 0; exact 0; probable 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; exact 0; probable 0; TypeSpec-only 0 | — |
| [#46967](prs/46967/report.md) | 2026-10-08 | Evaluated | OAD 0; TypeSpec 0; exact 0; probable 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; exact 0; probable 0; TypeSpec-only 0 | — |
| [#47005](prs/47005/report.md) | 2026-10-06 | Evaluated | OAD 0; TypeSpec 0; exact 0; probable 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; exact 0; probable 0; TypeSpec-only 0 | — |
| [#47015](prs/47015/report.md) | 2026-10-09 | Not qualified | — | — | `run-association-unverified` |
| [#47019](prs/47019/report.md) | 2026-10-10 | Not qualified | — | — | `invalid-oad-output` |
| [#47033](prs/47033/report.md) | 2026-10-07 | Not qualified | — | — | `run-association-unverified` |
| [#47047](prs/47047/report.md) | 2026-10-06 | Evaluated | OAD 0; TypeSpec 0; exact 0; probable 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; exact 0; probable 0; TypeSpec-only 0 | — |
| [#47118](prs/47118/report.md) | 2026-10-08 | Partial | — | — | specification/network/resource-manager/Microsoft.Network/Network: Analysis failed: Failed to compile the base revision (be97609d55160e8d06e2fcbba9ddefbf2ee89bf8): 1 error(s) found: error file-not-found: File <temp>/typespec-breaking-change… |
| [#47123](prs/47123/report.md) | 2026-10-09 | Partial | — | — | specification/verifiedid/resource-manager/Microsoft.VerifiedId/VerifiedId: Analysis failed: Cannot read properties of undefined (reading 'get') ; Analysis failed: Cannot read properties of undefined (reading 'get') |
| [#47139](prs/47139/report.md) | 2026-10-09 | Partial | — | — | specification/azureresiliencemanagement/resource-manager/Microsoft.AzureResilienceManagement/AzureResilienceManagement: Analysis failed: Unable to distinguish language type of union variant "Symbol(name)" with available runtime checks. Ind… |
| [#47140](prs/47140/report.md) | 2026-10-09 | Partial | — | — | specification/ai-foundry/data-plane/Foundry: Analysis failed: Failed to compile the base revision (8f99c33c108147fcc716e71a764010084fe5d034): 68 error(s) found: <temp>/typespec-breaking-change-base-b5v5TD/specification/ai-foundry/data-plan…; specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents: Analysis failed: Failed to compile the base revision (8f99c33c108147fcc716e71a764010084fe5d034): 1 error(s) found: error file-not-found: File <temp>/typespec-breakin…; specification/ai/data-plane/OpenAIAssistants: Analysis failed: Unable to distinguish language type of union variant "vectorStoreIds" with available runtime checks. Indistinguishable from: [vectorStores]. Variant type category: array. Avail…; specification/cognitiveservices/data-plane/OpenAIInference: Analysis failed: Unable to determine distinguishing runtime checks for language type of union variant "Symbol(name)". Indistinguishable from: [Symbol(name)]. Variant type category…; specification/keyvault/data-plane/Administration: Analysis failed: Cannot read properties of undefined (reading 'get') ; Analysis failed: Cannot read properties of undefined (reading 'get'); specification/maps/data-plane/Weather: Analysis failed: Cannot read properties of undefined (reading 'get') ; Analysis failed: Cannot read properties of undefined (reading 'get') |
| [#47160](prs/47160/report.md) | 2026-10-09 | Evaluated | OAD 0; TypeSpec 0; exact 0; probable 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; exact 0; probable 0; TypeSpec-only 0 | — |
| [#47161](prs/47161/report.md) | 2026-10-09 | Evaluated | OAD 0; TypeSpec 0; exact 0; probable 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; exact 0; probable 0; TypeSpec-only 0 | — |
| [#47170](prs/47170/report.md) | 2026-10-10 | Evaluated | OAD 0; TypeSpec 0; exact 0; probable 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; exact 0; probable 0; TypeSpec-only 0 | — |

## Not-qualified reasons

| Reason | PR count |
| --- | ---: |
| `evidence-incomplete` | 2 |
| `invalid-oad-output` | 3 |
| `run-association-unverified` | 12 |

## Partial and failed executions

- [#46715](prs/46715/report.md): specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions: Analysis failed: Cannot read properties of undefined (reading 'get') ; Analysis failed: Cannot read properties of undefined (reading 'get')
- [#46924](prs/46924/report.md): specification/liftrcommvault/Commvault.ContentStore.Management: Analysis failed: Cannot read properties of undefined (reading 'get') ; Analysis failed: Cannot read properties of undefined (reading 'get')
- [#47118](prs/47118/report.md): specification/network/resource-manager/Microsoft.Network/Network: Analysis failed: Failed to compile the base revision (be97609d55160e8d06e2fcbba9ddefbf2ee89bf8): 1 error(s) found: error file-not-found: File <temp>/typespec-breaking-change…
- [#47123](prs/47123/report.md): specification/verifiedid/resource-manager/Microsoft.VerifiedId/VerifiedId: Analysis failed: Cannot read properties of undefined (reading 'get') ; Analysis failed: Cannot read properties of undefined (reading 'get')
- [#47139](prs/47139/report.md): specification/azureresiliencemanagement/resource-manager/Microsoft.AzureResilienceManagement/AzureResilienceManagement: Analysis failed: Unable to distinguish language type of union variant "Symbol(name)" with available runtime checks. Ind…
- [#47140](prs/47140/report.md): specification/ai-foundry/data-plane/Foundry: Analysis failed: Failed to compile the base revision (8f99c33c108147fcc716e71a764010084fe5d034): 68 error(s) found: <temp>/typespec-breaking-change-base-b5v5TD/specification/ai-foundry/data-plan…; specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents: Analysis failed: Failed to compile the base revision (8f99c33c108147fcc716e71a764010084fe5d034): 1 error(s) found: error file-not-found: File <temp>/typespec-breakin…; specification/ai/data-plane/OpenAIAssistants: Analysis failed: Unable to distinguish language type of union variant "vectorStoreIds" with available runtime checks. Indistinguishable from: [vectorStores]. Variant type category: array. Avail…; specification/cognitiveservices/data-plane/OpenAIInference: Analysis failed: Unable to determine distinguishing runtime checks for language type of union variant "Symbol(name)". Indistinguishable from: [Symbol(name)]. Variant type category…; specification/keyvault/data-plane/Administration: Analysis failed: Cannot read properties of undefined (reading 'get') ; Analysis failed: Cannot read properties of undefined (reading 'get'); specification/maps/data-plane/Weather: Analysis failed: Cannot read properties of undefined (reading 'get') ; Analysis failed: Cannot read properties of undefined (reading 'get')

## Reproduction

- Evaluator commit: `0d458e940caf56cd5069ec16389524d2186c786f`
- Analyzer source: `d0ab464d60c47d6699bfea0292c901864b5d8ba0`
- Analyzer artifact digest: `0ae9893ccdc9016ab4e0916f3f34f57959f0ce0eb4e445cfe91a04597eaa93d2`
- Each detailed report contains immutable PR revisions, workflow evidence, generated TypeSpec Markdown/JSON artifacts, and reproduction commands.

