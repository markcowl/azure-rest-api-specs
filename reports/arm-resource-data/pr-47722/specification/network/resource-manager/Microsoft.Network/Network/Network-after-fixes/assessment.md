# Network ARM resource data assessment after metadata fixes

This report is the post-fix companion to the existing [`Network` baseline](../Network/assessment.md). It covers [markcowl/azure-rest-api-specs#15](https://github.com/markcowl/azure-rest-api-specs/pull/15) at [`f5785b4fb704ad34a9b0835545274eeafe0c397e`](https://github.com/Azure/azure-rest-api-specs/tree/f5785b4fb704ad34a9b0835545274eeafe0c397e/specification/network/resource-manager/Microsoft.Network/Network/Network), stacked on the source of [Azure/azure-rest-api-specs#47722](https://github.com/Azure/azure-rest-api-specs/pull/47722).

The CSVs were regenerated with the same ARM data exporter commit, [`8719b3d95d76a5b2144a3a5fcdcf184b665ebb6d`](https://github.com/Azure/typespec-azure/commit/8719b3d95d76a5b2144a3a5fcdcf184b665ebb6d), and the same TypeSpec 1.18.0 project dependency graph used by the baseline.

## Executive summary

- Both explicitly enabled rules now report **zero diagnostics**:
  - `@azure-tools/typespec-azure-resource-manager/no-resource-duplicates`
  - `@azure-tools/typespec-azure-resource-manager/no-resource-name-conflict`
- All **49** confirmed resource list omissions from the baseline are now associated with their resolved resources and appear in `operations.csv`.
- The `StaticCidr` identity split is resolved: the canonical resource has **one** row and its list operation is no longer duplicated.
- The three false `ExpressRouteCrossConnection` resources are gone. Their POST operations are actions on one resolved `ExpressRouteCrossConnectionPeering` resource.
- No baseline HTTP operation key was lost, all **841** HTTP operations remain accounted for, and generated OpenAPI is unchanged.
- The remaining report findings are unchanged in scope: the exact `ExpressRoutePort` duplicate, unresolved `ConnectionAnalyzer`, 13 ARM-metadata operations outside both resolver buckets, and three expected version-disjoint canonical operation-key duplicates.

## Before and after

| Measure | Baseline | After fixes | Change |
|---|---:|---:|---:|
| HTTP operations | 841 | 841 | 0 |
| Resolved resource occurrences | 145 | 141 | -4 |
| Unique resource keys | 143 | 140 | -3 |
| Resource-associated operation rows | 752 | 800 | +48 |
| Unique canonical operation keys | 748 | 797 | +49 |
| Unique resolved operation objects | 751 | 800 | +49 |
| Resolver `providerOperations` | 77 | 28 | -49 |
| Provider operations with ARM resource-list metadata | 49 | 0 | -49 |
| ARM-metadata operations in neither resolver bucket | 13 | 13 | 0 |
| Unique HTTP operations absent from `operations.csv` | 90 | 41 | -49 |

The operation-row increase is 48 rather than 49 because the baseline emitted `StaticCidrs.list` twice, once for each conflicting resource identity. The fixes add all 49 omitted list operations while removing that duplicate row.

## Resolved findings

### StaticCidr duplicate

[`StaticCidrs.create`](https://github.com/Azure/azure-rest-api-specs/blob/f5785b4fb704ad34a9b0835545274eeafe0c397e/specification/network/resource-manager/Microsoft.Network/Network/Network/StaticCidr.tsp#L78) now uses the same logical resource name as [`StaticCidr`](https://github.com/Azure/azure-rest-api-specs/blob/f5785b4fb704ad34a9b0835545274eeafe0c397e/specification/network/resource-manager/Microsoft.Network/Network/Network/StaticCidr.tsp#L20).

- Resource rows for the canonical StaticCidr key: **2 -> 1**
- `StaticCidrs.list` rows for the canonical list key: **2 -> 1**
- `no-resource-duplicates`: **1 warning -> 0**

### ExpressRoute cross-connection action conflicts

The three diagnostic table POSTs retain their paths, verbs, responses, and LRO behavior, but are now routed actions associated with [`ExpressRouteCrossConnectionPeering`](https://github.com/Azure/azure-rest-api-specs/blob/f5785b4fb704ad34a9b0835545274eeafe0c397e/specification/network/resource-manager/Microsoft.Network/Network/Network/ExpressRouteCrossConnection.tsp#L43):

| Operation | Result |
|---|---|
| [`listArpTable`](https://github.com/Azure/azure-rest-api-specs/blob/f5785b4fb704ad34a9b0835545274eeafe0c397e/specification/network/resource-manager/Microsoft.Network/Network/Network/ExpressRouteCrossConnection.tsp#L267) | `ExpressRouteCrossConnectionPeering` action |
| [`listRoutesTable`](https://github.com/Azure/azure-rest-api-specs/blob/f5785b4fb704ad34a9b0835545274eeafe0c397e/specification/network/resource-manager/Microsoft.Network/Network/Network/ExpressRouteCrossConnection.tsp#L303) | `ExpressRouteCrossConnectionPeering` action |
| [`listRoutesTableSummary`](https://github.com/Azure/azure-rest-api-specs/blob/f5785b4fb704ad34a9b0835545274eeafe0c397e/specification/network/resource-manager/Microsoft.Network/Network/Network/ExpressRouteCrossConnection.tsp#L285) | `ExpressRouteCrossConnectionPeering` action |

- False `ExpressRouteCrossConnection` resource rows: **3 -> 0**
- Resolved `ExpressRouteCrossConnectionPeering` resource rows: **0 -> 1**
- `no-resource-name-conflict`: **3 warnings -> 0**

### Resource list associations

Every operation in the baseline's [49-operation provider resource-list table](../Network/assessment.md#provider-resource-lists-49-operations) now appears exactly once in `operations.csv`, with the same GET route and the intended resource association.

- Provider resource lists: **49 -> 0**
- Resource-associated canonical operation keys: **+49**
- Missing or newly ambiguous list associations: **0**

## Residual findings

### Exact ExpressRoutePort duplicate

The canonical `Microsoft.Network/expressRoutePorts` resource key still occurs twice, from [`ExpressRoutePort.tsp`](https://github.com/Azure/azure-rest-api-specs/blob/f5785b4fb704ad34a9b0835545274eeafe0c397e/specification/network/resource-manager/Microsoft.Network/Network/Network/ExpressRoutePort.tsp#L19) and [`ExpressRoutePortAuthorization.tsp`](https://github.com/Azure/azure-rest-api-specs/blob/f5785b4fb704ad34a9b0835545274eeafe0c397e/specification/network/resource-manager/Microsoft.Network/Network/Network/ExpressRoutePortAuthorization.tsp#L20). Both occurrences have the same logical name, so the explicit duplicate-name rule does not diagnose this emitter-level duplicate.

### Provider operations

The remaining **28** provider operations no longer include any operation carrying ARM list metadata for a named resource. The previously identified likely missing child association, `NetworkWatchers.connectionAnalyzersList`, remains, as does `ExpressRouteLags.membersList`; the other 26 remain expected provider-level catalog, discovery, availability, usage, check, or action endpoints.

[`ConnectionAnalyzer`](https://github.com/Azure/azure-rest-api-specs/blob/f5785b4fb704ad34a9b0835545274eeafe0c397e/specification/network/resource-manager/Microsoft.Network/Network/Network/models.tsp#L28155) is still not a resolved resource and remains outside this fix's scope.

### ARM-metadata operations outside resolver buckets

These **13** operations are unchanged:

| Group | Operations |
|---|---|
| ExpressRoute gateway | `ExpressRouteGateways.listByResourceGroup`, `ExpressRouteGateways.listBySubscription` |
| Firewall policy | `FirewallPolicyIdpsSignaturesOverrides.list` |
| Network security perimeter | `NetworkSecurityPerimeterOperationStatusesOperationGroup.get` |
| Swap resources | `SwapResources.list` |
| VMSS network interface IP configurations | `getVirtualMachineScaleSetIpConfiguration`, `listVirtualMachineScaleSetIpConfigurations` |
| VMSS network interfaces | `getVirtualMachineScaleSetNetworkInterface`, `listVirtualMachineScaleSetVMNetworkInterfaces`, `listVirtualMachineScaleSetNetworkInterfaces` |
| VMSS public IP addresses | `getVirtualMachineScaleSetPublicIPAddress`, `listVirtualMachineScaleSetVMPublicIPAddresses`, `listVirtualMachineScaleSetPublicIPAddresses` |

### Canonical operation-key duplicates

The remaining three duplicate canonical operation keys are the same expected version-disjoint alternatives identified in the baseline:

- `PATCH .../bastionHosts/{}`: `update` and `updateTags`
- `POST .../serviceGateways/{}/updateAddressLocations`: synchronous and LRO alternatives
- `POST .../serviceGateways/{}/updateServices`: synchronous and LRO alternatives

## Methodology and validation

1. Compiled `main.tsp`, which imports `client.tsp`, with Node 24.14.1, pnpm 12.6.0, and TypeSpec 1.18.0.
2. Overlaid built artifacts from TypeSpec Azure commit `8719b3d95d76a5b2144a3a5fcdcf184b665ebb6d` for the ARM resolver and exporter packages.
3. Explicitly enabled `no-resource-duplicates` and `no-resource-name-conflict`; both completed with zero diagnostics.
4. Generated `resources.csv` and `operations.csv` with source links pinned to `f5785b4fb704ad34a9b0835545274eeafe0c397e`.
5. Validated CSV headers and parsing, canonical resource and operation keys, exact emitter sorting, source revision/path/line links, before/after counts, the 49 list associations, and residual duplicate groups.
6. Confirmed the normal Network AutoRest compile succeeds and generated OpenAPI remains byte-for-byte unchanged.

Validation result: **passed**.
