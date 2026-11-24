# no-resource-name-conflict details

- Spec: `specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products`
- Source commit: `965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6`
- [Aggregate report](../../../../../../documentation/typespec-arm-resource-data/Report_20261124_no-resource-name-conflict/README.md)
- [Machine-readable diagnostics](diagnostics.json)

## Conflicts

### NRNC-7D0FD533DCFD

**Logical resource name:** `ProductSingle`  
**Diagnostic:** [`specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp:239:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L239)  
**Correlation:** `matched`  
**Recommendation (override-operation-resource-name):** Set the optional resource-name argument on the ARM resource decorator for `getBySubscription` to a distinct value such as `ProductSingleSubscription`, and use the same value for every operation that belongs to this resolved resource. If the operations are currently declared independently, refactor them into one resource operation interface so the name is defined once.

**Evidence:**

- `getBySubscription` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L239).
- It is declared in interface `ProductGet` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L196).
- The conflicting operation resolves to `Microsoft.Marketplace/products`.

**Conflicting resources and operations:**

- [`Microsoft.Marketplace/products`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L31) — billing profile scope
  - [`getByBillingProfile`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L311) — `GET` (read)
- [`Microsoft.Marketplace/products`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L31) — billing account scope
  - [`getByBillingAccount`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L277) — `GET` (read)
- [`Microsoft.Marketplace/products`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L31) — tenant or provider scope
  - [`getByTenant`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L198) — `GET` (read)
- [`Microsoft.Marketplace/products`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L31) — subscription scope
  - [`getBySubscription`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L239) — `GET` (read)

### NRNC-D03142A6FF6C

**Logical resource name:** `ProductSingle`  
**Diagnostic:** [`specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp:277:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L277)  
**Correlation:** `matched`  
**Recommendation (override-operation-resource-name):** Set the optional resource-name argument on the ARM resource decorator for `getByBillingAccount` to a distinct value such as `ProductSingleBillingAccount`, and use the same value for every operation that belongs to this resolved resource. If the operations are currently declared independently, refactor them into one resource operation interface so the name is defined once.

**Evidence:**

- `getByBillingAccount` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L277).
- It is declared in interface `ProductGet` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L196).
- The conflicting operation resolves to `Microsoft.Marketplace/products`.

**Conflicting resources and operations:**

- [`Microsoft.Marketplace/products`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L31) — billing profile scope
  - [`getByBillingProfile`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L311) — `GET` (read)
- [`Microsoft.Marketplace/products`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L31) — billing account scope
  - [`getByBillingAccount`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L277) — `GET` (read)
- [`Microsoft.Marketplace/products`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L31) — tenant or provider scope
  - [`getByTenant`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L198) — `GET` (read)
- [`Microsoft.Marketplace/products`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L31) — subscription scope
  - [`getBySubscription`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L239) — `GET` (read)

### NRNC-1B95C01C42DF

**Logical resource name:** `ProductSingle`  
**Diagnostic:** [`specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp:311:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L311)  
**Correlation:** `matched`  
**Recommendation (override-operation-resource-name):** Set the optional resource-name argument on the ARM resource decorator for `getByBillingProfile` to a distinct value such as `ProductSingleBillingProfile`, and use the same value for every operation that belongs to this resolved resource. If the operations are currently declared independently, refactor them into one resource operation interface so the name is defined once.

**Evidence:**

- `getByBillingProfile` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L311).
- It is declared in interface `ProductGet` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L196).
- The conflicting operation resolves to `Microsoft.Marketplace/products`.

**Conflicting resources and operations:**

- [`Microsoft.Marketplace/products`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L31) — billing profile scope
  - [`getByBillingProfile`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L311) — `GET` (read)
- [`Microsoft.Marketplace/products`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L31) — billing account scope
  - [`getByBillingAccount`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L277) — `GET` (read)
- [`Microsoft.Marketplace/products`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L31) — tenant or provider scope
  - [`getByTenant`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L198) — `GET` (read)
- [`Microsoft.Marketplace/products`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L31) — subscription scope
  - [`getBySubscription`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/main.tsp#L239) — `GET` (read)
