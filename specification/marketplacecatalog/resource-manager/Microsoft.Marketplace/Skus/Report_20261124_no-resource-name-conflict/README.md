# no-resource-name-conflict details

- Spec: `specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Skus`
- Source commit: `965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6`
- [Aggregate report](../../../../../../documentation/typespec-arm-resource-data/Report_20261124_no-resource-name-conflict/README.md)
- [Machine-readable diagnostics](diagnostics.json)

## Conflicts

### NRNC-80ABDA84AB6D

**Logical resource name:** `Sku`  
**Diagnostic:** [`specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Skus/main.tsp:145:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Skus/main.tsp#L145)  
**Correlation:** `matched`  
**Recommendation (override-operation-resource-name):** Set the optional resource-name argument on the ARM resource decorator for `getByBillingProfile` to a distinct value such as `SkuBillingProfile`, and use the same value for every operation that belongs to this resolved resource. If the operations are currently declared independently, refactor them into one resource operation interface so the name is defined once.

**Evidence:**

- `getByBillingProfile` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Skus/main.tsp#L145).
- It is declared in interface `Skus` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Skus/main.tsp#L34).
- The conflicting operation resolves to `Microsoft.Marketplace/skus`.

**Conflicting resources and operations:**

- [`Microsoft.Marketplace/skus`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Skus/main.tsp#L27) — billing profile scope
  - [`getByBillingProfile`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Skus/main.tsp#L145) — `GET` (read)
  - [`listByBillingProfile`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Skus/main.tsp#L76) — `GET` (list)
- [`Microsoft.Marketplace/skus`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Skus/main.tsp#L27) — billing account scope
  - [`getByBillingAccount`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Skus/main.tsp#L116) — `GET` (read)
  - [`listByBillingAccount`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Skus/main.tsp#L36) — `GET` (list)
