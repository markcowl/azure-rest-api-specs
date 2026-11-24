# no-resource-name-conflict details

- Spec: `specification/automation/resource-manager/Microsoft.Automation/Automation`
- Source commit: `965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6`
- [Aggregate report](../../../../../../documentation/typespec-arm-resource-data/Report_20261124_no-resource-name-conflict/README.md)
- [Machine-readable diagnostics](diagnostics.json)

## Conflicts

### NRNC-3C1862CCCA52

**Logical resource name:** `AutomationAccount`  
**Diagnostic:** [`specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp:116:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L116)  
**Correlation:** `matched`  
**Recommendation (override-operation-resource-name):** Set the optional resource-name argument on the ARM resource decorator for `nodeCountInformationGet` to a distinct value such as `AutomationAccountResourceGroup`, and use the same value for every operation that belongs to this resolved resource. If the operations are currently declared independently, refactor them into one resource operation interface so the name is defined once.

**Evidence:**

- `nodeCountInformationGet` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L116).
- It is instantiated from `ArmResourceRead`.
- It is declared in interface `AutomationAccounts` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L60).
- The conflicting operation resolves to `Microsoft.Automation/automationAccounts/nodecounts`.

**Conflicting resources and operations:**

- [`Microsoft.Automation/automationAccounts/nodecounts`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L13) — resource group scope
  - [`nodeCountInformationGet`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L116) — `GET` (read)
- [`Microsoft.Automation/automationAccounts/softwareUpdateConfigurationMachineRuns`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L13) — resource group scope
  - [`getById`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L340) — `GET` (read)
- [`Microsoft.Automation/automationAccounts/softwareUpdateConfigurationRuns`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L13) — resource group scope
  - [`softwareUpdateConfigurationRunsGetById`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L399) — `GET` (read)
- [`Microsoft.Automation/automationAccounts`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L13) — resource group scope
  - [`agentRegistrationInformationGet`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L177) — `GET` (action)
  - [`automation`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L164) — `GET` (action)
  - [`convertGraphRunbookContent`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L328) — `POST` (action)
  - [`createOrUpdate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L70) — `PUT` (createOrUpdate)
  - [`delete`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L93) — `DELETE` (delete)
  - [`generateUri`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L458) — `POST` (action)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L62) — `GET` (read)
  - [`jobListByAutomationAccount`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L263) — `GET` (action)
  - [`keysListByAutomationAccount`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L252) — `POST` (action)
  - [`linkedWorkspaceGet`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L291) — `GET` (action)
  - [`list`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L109) — `GET` (list)
  - [`listByAutomationAccount`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L215) — `GET` (action)
  - [`listByResourceGroup`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L101) — `GET` (list)
  - [`listDeletedRunbooks`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L204) — `POST` (action)
  - [`regenerateKey`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L191) — `POST` (action)
  - [`softwareUpdateConfigurationMachineRunsList`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L360) — `GET` (action)
  - [`softwareUpdateConfigurationRunsList`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L419) — `GET` (action)
  - [`softwareUpdateConfigurationsList`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L137) — `GET` (action)
  - [`update`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L81) — `PATCH` (update)
  - [`usagesListByAutomationAccount`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L237) — `GET` (action)

### NRNC-A088692069CA

**Logical resource name:** `AutomationAccount`  
**Diagnostic:** [`specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp:340:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L340)  
**Correlation:** `matched`  
**Recommendation (override-operation-resource-name):** Set the optional resource-name argument on the ARM resource decorator for `getById` to a distinct value such as `AutomationAccountResourceGroup`, and use the same value for every operation that belongs to this resolved resource. If the operations are currently declared independently, refactor them into one resource operation interface so the name is defined once.

**Evidence:**

- `getById` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L340).
- It is instantiated from `ArmResourceRead`.
- It is declared in interface `AutomationAccounts` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L60).
- The conflicting operation resolves to `Microsoft.Automation/automationAccounts/softwareUpdateConfigurationMachineRuns`.

**Conflicting resources and operations:**

- [`Microsoft.Automation/automationAccounts/nodecounts`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L13) — resource group scope
  - [`nodeCountInformationGet`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L116) — `GET` (read)
- [`Microsoft.Automation/automationAccounts/softwareUpdateConfigurationMachineRuns`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L13) — resource group scope
  - [`getById`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L340) — `GET` (read)
- [`Microsoft.Automation/automationAccounts/softwareUpdateConfigurationRuns`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L13) — resource group scope
  - [`softwareUpdateConfigurationRunsGetById`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L399) — `GET` (read)
- [`Microsoft.Automation/automationAccounts`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L13) — resource group scope
  - [`agentRegistrationInformationGet`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L177) — `GET` (action)
  - [`automation`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L164) — `GET` (action)
  - [`convertGraphRunbookContent`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L328) — `POST` (action)
  - [`createOrUpdate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L70) — `PUT` (createOrUpdate)
  - [`delete`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L93) — `DELETE` (delete)
  - [`generateUri`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L458) — `POST` (action)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L62) — `GET` (read)
  - [`jobListByAutomationAccount`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L263) — `GET` (action)
  - [`keysListByAutomationAccount`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L252) — `POST` (action)
  - [`linkedWorkspaceGet`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L291) — `GET` (action)
  - [`list`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L109) — `GET` (list)
  - [`listByAutomationAccount`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L215) — `GET` (action)
  - [`listByResourceGroup`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L101) — `GET` (list)
  - [`listDeletedRunbooks`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L204) — `POST` (action)
  - [`regenerateKey`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L191) — `POST` (action)
  - [`softwareUpdateConfigurationMachineRunsList`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L360) — `GET` (action)
  - [`softwareUpdateConfigurationRunsList`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L419) — `GET` (action)
  - [`softwareUpdateConfigurationsList`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L137) — `GET` (action)
  - [`update`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L81) — `PATCH` (update)
  - [`usagesListByAutomationAccount`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L237) — `GET` (action)

### NRNC-B225272ABDDE

**Logical resource name:** `AutomationAccount`  
**Diagnostic:** [`specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp:399:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L399)  
**Correlation:** `matched`  
**Recommendation (override-operation-resource-name):** Set the optional resource-name argument on the ARM resource decorator for `softwareUpdateConfigurationRunsGetById` to a distinct value such as `AutomationAccountResourceGroup`, and use the same value for every operation that belongs to this resolved resource. If the operations are currently declared independently, refactor them into one resource operation interface so the name is defined once.

**Evidence:**

- `softwareUpdateConfigurationRunsGetById` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L399).
- It is instantiated from `ArmResourceRead`.
- It is declared in interface `AutomationAccounts` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L60).
- The conflicting operation resolves to `Microsoft.Automation/automationAccounts/softwareUpdateConfigurationRuns`.

**Conflicting resources and operations:**

- [`Microsoft.Automation/automationAccounts/nodecounts`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L13) — resource group scope
  - [`nodeCountInformationGet`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L116) — `GET` (read)
- [`Microsoft.Automation/automationAccounts/softwareUpdateConfigurationMachineRuns`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L13) — resource group scope
  - [`getById`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L340) — `GET` (read)
- [`Microsoft.Automation/automationAccounts/softwareUpdateConfigurationRuns`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L13) — resource group scope
  - [`softwareUpdateConfigurationRunsGetById`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L399) — `GET` (read)
- [`Microsoft.Automation/automationAccounts`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L13) — resource group scope
  - [`agentRegistrationInformationGet`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L177) — `GET` (action)
  - [`automation`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L164) — `GET` (action)
  - [`convertGraphRunbookContent`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L328) — `POST` (action)
  - [`createOrUpdate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L70) — `PUT` (createOrUpdate)
  - [`delete`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L93) — `DELETE` (delete)
  - [`generateUri`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L458) — `POST` (action)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L62) — `GET` (read)
  - [`jobListByAutomationAccount`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L263) — `GET` (action)
  - [`keysListByAutomationAccount`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L252) — `POST` (action)
  - [`linkedWorkspaceGet`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L291) — `GET` (action)
  - [`list`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L109) — `GET` (list)
  - [`listByAutomationAccount`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L215) — `GET` (action)
  - [`listByResourceGroup`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L101) — `GET` (list)
  - [`listDeletedRunbooks`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L204) — `POST` (action)
  - [`regenerateKey`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L191) — `POST` (action)
  - [`softwareUpdateConfigurationMachineRunsList`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L360) — `GET` (action)
  - [`softwareUpdateConfigurationRunsList`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L419) — `GET` (action)
  - [`softwareUpdateConfigurationsList`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L137) — `GET` (action)
  - [`update`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L81) — `PATCH` (update)
  - [`usagesListByAutomationAccount`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/AutomationAccount.tsp#L237) — `GET` (action)

### NRNC-EE915EA109FE

**Logical resource name:** `DscNode`  
**Diagnostic:** [`specification/automation/resource-manager/Microsoft.Automation/Automation/DscNode.tsp:114:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/DscNode.tsp#L114)  
**Correlation:** `matched`  
**Recommendation (override-operation-resource-name):** Set the optional resource-name argument on the ARM resource decorator for `nodeReportsGet` to a distinct value such as `DscNodeResourceGroup`, and use the same value for every operation that belongs to this resolved resource. If the operations are currently declared independently, refactor them into one resource operation interface so the name is defined once.

**Evidence:**

- `nodeReportsGet` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/DscNode.tsp#L114).
- It is instantiated from `ArmResourceRead`.
- It is declared in interface `DscNodes` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/DscNode.tsp#L28).
- The conflicting operation resolves to `Microsoft.Automation/automationAccounts/nodes/reports`.

**Conflicting resources and operations:**

- [`Microsoft.Automation/automationAccounts/nodes/reports`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/DscNode.tsp#L15) — resource group scope
  - [`nodeReportsGet`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/DscNode.tsp#L114) — `GET` (read)
- [`Microsoft.Automation/automationAccounts/nodes`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/DscNode.tsp#L15) — resource group scope
  - [`delete`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/DscNode.tsp#L47) — `DELETE` (delete)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/DscNode.tsp#L30) — `GET` (read)
  - [`listByAutomationAccount`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/DscNode.tsp#L56) — `GET` (list)
  - [`listByNode`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/DscNode.tsp#L92) — `GET` (action)
  - [`update`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/DscNode.tsp#L38) — `PATCH` (update)

### NRNC-21E5C489ADE8

**Logical resource name:** `Job`  
**Diagnostic:** [`specification/automation/resource-manager/Microsoft.Automation/Automation/Job.tsp:180:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/Job.tsp#L180)  
**Correlation:** `matched`  
**Recommendation (override-operation-resource-name):** Set the optional resource-name argument on the ARM resource decorator for `jobStreamGet` to a distinct value such as `JobResourceGroup`, and use the same value for every operation that belongs to this resolved resource. If the operations are currently declared independently, refactor them into one resource operation interface so the name is defined once.

**Evidence:**

- `jobStreamGet` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/Job.tsp#L180).
- It is instantiated from `ArmResourceRead`.
- It is declared in interface `Jobs` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/Job.tsp#L27).
- The conflicting operation resolves to `Microsoft.Automation/automationAccounts/jobs/streams`.

**Conflicting resources and operations:**

- [`Microsoft.Automation/automationAccounts/jobs/streams`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/Job.tsp#L14) — resource group scope
  - [`jobStreamGet`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/Job.tsp#L180) — `GET` (read)
- [`Microsoft.Automation/automationAccounts/jobs`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/Job.tsp#L14) — resource group scope
  - [`create`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/Job.tsp#L47) — `PUT` (createOrUpdate)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/Job.tsp#L30) — `GET` (read)
  - [`getOutput`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/Job.tsp#L67) — `GET` (action)
  - [`getRunbookContent`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/Job.tsp#L95) — `GET` (action)
  - [`listByJob`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/Job.tsp#L207) — `GET` (action)
  - [`resume`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/Job.tsp#L161) — `POST` (action)
  - [`stop`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/Job.tsp#L142) — `POST` (action)
  - [`suspend`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/Job.tsp#L123) — `POST` (action)

### NRNC-75942DABE3DB

**Logical resource name:** `SourceControl`  
**Diagnostic:** [`specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp:98:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L98)  
**Correlation:** `matched`  
**Recommendation (override-operation-resource-name):** Set the optional resource-name argument on the ARM resource decorator for `create` to a distinct value such as `SourceControlResourceGroup`, and use the same value for every operation that belongs to this resolved resource. If the operations are currently declared independently, refactor them into one resource operation interface so the name is defined once.

**Evidence:**

- `create` is a `PUT` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L98).
- It is instantiated from `ArmResourceRead`.
- It is declared in interface `SourceControls` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L39).
- The conflicting operation resolves to `Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs`.

**Conflicting resources and operations:**

- [`Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs/streams`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L14) — resource group scope
  - [`sourceControlSyncJobStreamsGet`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L176) — `GET` (read)
- [`Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L14) — resource group scope
  - [`create`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L98) — `PUT` (read)
  - [`listBySyncJob`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L154) — `GET` (action)
  - [`sourceControlSyncJobGet`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L118) — `GET` (read)
- [`Microsoft.Automation/automationAccounts/sourceControls`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L14) — resource group scope
  - [`createOrUpdate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L49) — `PUT` (createOrUpdate)
  - [`delete`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L72) — `DELETE` (delete)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L41) — `GET` (read)
  - [`listByAutomationAccount`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L81) — `GET` (list)
  - [`listBySyncJob`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L154) — `GET` (action)
  - [`sourceControlSyncJobListByAutomationAccount`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L132) — `GET` (action)
  - [`update`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L60) — `PATCH` (update)

### NRNC-12A0F6A0940D

**Logical resource name:** `SourceControl`  
**Diagnostic:** [`specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp:176:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L176)  
**Correlation:** `matched`  
**Recommendation (override-operation-resource-name):** Set the optional resource-name argument on the ARM resource decorator for `sourceControlSyncJobStreamsGet` to a distinct value such as `SourceControlResourceGroup`, and use the same value for every operation that belongs to this resolved resource. If the operations are currently declared independently, refactor them into one resource operation interface so the name is defined once.

**Evidence:**

- `sourceControlSyncJobStreamsGet` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L176).
- It is instantiated from `ArmResourceRead`.
- It is declared in interface `SourceControls` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L39).
- The conflicting operation resolves to `Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs/streams`.

**Conflicting resources and operations:**

- [`Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs/streams`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L14) — resource group scope
  - [`sourceControlSyncJobStreamsGet`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L176) — `GET` (read)
- [`Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L14) — resource group scope
  - [`create`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L98) — `PUT` (read)
  - [`listBySyncJob`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L154) — `GET` (action)
  - [`sourceControlSyncJobGet`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L118) — `GET` (read)
- [`Microsoft.Automation/automationAccounts/sourceControls`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L14) — resource group scope
  - [`createOrUpdate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L49) — `PUT` (createOrUpdate)
  - [`delete`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L72) — `DELETE` (delete)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L41) — `GET` (read)
  - [`listByAutomationAccount`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L81) — `GET` (list)
  - [`listBySyncJob`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L154) — `GET` (action)
  - [`sourceControlSyncJobListByAutomationAccount`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L132) — `GET` (action)
  - [`update`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/automation/resource-manager/Microsoft.Automation/Automation/SourceControl.tsp#L60) — `PATCH` (update)
