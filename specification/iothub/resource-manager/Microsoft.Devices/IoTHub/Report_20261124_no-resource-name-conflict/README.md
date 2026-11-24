# no-resource-name-conflict details

- Spec: `specification/iothub/resource-manager/Microsoft.Devices/IoTHub`
- Source commit: `965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6`
- [Aggregate report](../../../../../../documentation/typespec-arm-resource-data/Report_20261124_no-resource-name-conflict/README.md)
- [Machine-readable diagnostics](diagnostics.json)

## Conflicts

### NRNC-5A6F41F19845

**Logical resource name:** `IotHubDescription`  
**Diagnostic:** [`specification/iothub/resource-manager/Microsoft.Devices/IoTHub/IotHubDescription.tsp:177:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/iothub/resource-manager/Microsoft.Devices/IoTHub/IotHubDescription.tsp#L177)  
**Correlation:** `matched`  
**Recommendation (override-operation-resource-name):** Set the optional resource-name argument on the ARM resource decorator for `getJob` to a distinct value such as `IotHubDescriptionResourceGroup`, and use the same value for every operation that belongs to this resolved resource. If the operations are currently declared independently, refactor them into one resource operation interface so the name is defined once.

**Evidence:**

- `getJob` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/iothub/resource-manager/Microsoft.Devices/IoTHub/IotHubDescription.tsp#L177).
- It is instantiated from `ArmResourceRead`.
- It is declared in interface `IotHubDescriptions` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/iothub/resource-manager/Microsoft.Devices/IoTHub/IotHubDescription.tsp#L60).
- The conflicting operation resolves to `Microsoft.Devices/IotHubs/jobs`.

**Conflicting resources and operations:**

- [`Microsoft.Devices/IotHubs/jobs`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/iothub/resource-manager/Microsoft.Devices/IoTHub/IotHubDescription.tsp#L13) — resource group scope
  - [`getJob`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/iothub/resource-manager/Microsoft.Devices/IoTHub/IotHubDescription.tsp#L177) — `GET` (read)
- [`Microsoft.Devices/IotHubs`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/iothub/resource-manager/Microsoft.Devices/IoTHub/IotHubDescription.tsp#L13) — resource group scope
  - [`createOrUpdate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/iothub/resource-manager/Microsoft.Devices/IoTHub/IotHubDescription.tsp#L69) — `PUT` (createOrUpdate)
  - [`delete`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/iothub/resource-manager/Microsoft.Devices/IoTHub/IotHubDescription.tsp#L108) — `DELETE` (delete)
  - [`exportDevices`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/iothub/resource-manager/Microsoft.Devices/IoTHub/IotHubDescription.tsp#L288) — `POST` (action)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/iothub/resource-manager/Microsoft.Devices/IoTHub/IotHubDescription.tsp#L62) — `GET` (read)
  - [`getEndpointHealth`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/iothub/resource-manager/Microsoft.Devices/IoTHub/IotHubDescription.tsp#L212) — `GET` (action)
  - [`getKeysForKeyName`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/iothub/resource-manager/Microsoft.Devices/IoTHub/IotHubDescription.tsp#L267) — `POST` (action)
  - [`getQuotaMetrics`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/iothub/resource-manager/Microsoft.Devices/IoTHub/IotHubDescription.tsp#L197) — `GET` (action)
  - [`getValidSkus`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/iothub/resource-manager/Microsoft.Devices/IoTHub/IotHubDescription.tsp#L147) — `GET` (action)
  - [`importDevices`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/iothub/resource-manager/Microsoft.Devices/IoTHub/IotHubDescription.tsp#L300) — `POST` (action)
  - [`listByResourceGroup`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/iothub/resource-manager/Microsoft.Devices/IoTHub/IotHubDescription.tsp#L127) — `GET` (list)
  - [`listBySubscription`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/iothub/resource-manager/Microsoft.Devices/IoTHub/IotHubDescription.tsp#L137) — `GET` (list)
  - [`listJobs`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/iothub/resource-manager/Microsoft.Devices/IoTHub/IotHubDescription.tsp#L162) — `GET` (action)
  - [`listKeys`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/iothub/resource-manager/Microsoft.Devices/IoTHub/IotHubDescription.tsp#L253) — `POST` (action)
  - [`manualFailover`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/iothub/resource-manager/Microsoft.Devices/IoTHub/IotHubDescription.tsp#L312) — `POST` (action)
  - [`testAllRoutes`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/iothub/resource-manager/Microsoft.Devices/IoTHub/IotHubDescription.tsp#L227) — `POST` (action)
  - [`testRoute`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/iothub/resource-manager/Microsoft.Devices/IoTHub/IotHubDescription.tsp#L240) — `POST` (action)
  - [`update`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/iothub/resource-manager/Microsoft.Devices/IoTHub/IotHubDescription.tsp#L91) — `PATCH` (update)
