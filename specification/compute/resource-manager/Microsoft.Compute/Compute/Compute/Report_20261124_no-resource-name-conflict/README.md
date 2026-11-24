# no-resource-name-conflict details

- Spec: `specification/compute/resource-manager/Microsoft.Compute/Compute/Compute`
- Source commit: `965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6`
- [Aggregate report](../../../../../../../documentation/typespec-arm-resource-data/Report_20261124_no-resource-name-conflict/README.md)
- [Machine-readable diagnostics](diagnostics.json)

## Conflicts

### NRNC-86EEA9334B75

**Logical resource name:** `VirtualMachinesDiagnosticRunCommands`  
**Diagnostic:** [`specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineDiagnosticRunCommand.tsp:136:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineDiagnosticRunCommand.tsp#L136)  
**Correlation:** `matched`  
**Recommendation (add-template-resource-name):** Give the operation set containing `get` a distinct logical resource name such as `VirtualMachinesDiagnosticRunCommandsResourceGroup`. Pass that name through the `VirtualMachineScaleSetVMDiagnosticRunCommandOps.Read` invocation using its `OverrideResourceName` argument, or add a `ResourceName` parameter to the containing interface template `VirtualMachineScaleSetVMDiagnosticRunCommands` and forward it consistently to every lifecycle/list operation for this resource.

**Evidence:**

- `get` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineDiagnosticRunCommand.tsp#L136).
- It is instantiated from `VirtualMachineScaleSetVMDiagnosticRunCommandOps.Read`.
- It is declared in interface `VirtualMachineScaleSetVMDiagnosticRunCommands` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineDiagnosticRunCommand.tsp#L134).
- The conflicting operation resolves to `Microsoft.Compute/virtualMachineScaleSets/virtualMachines/diagnosticRunCommands`.

**Conflicting resources and operations:**

- [`Microsoft.Compute/virtualMachines/diagnosticRunCommands`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineDiagnosticRunCommand.tsp#L19) — resource group scope
  - [`createOrUpdate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineDiagnosticRunCommand.tsp#L65) — `PUT` (createOrUpdate)
  - [`delete`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineDiagnosticRunCommand.tsp#L87) — `DELETE` (delete)
  - [`diagnosticListByVirtualMachine`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineDiagnosticRunCommand.tsp#L102) — `GET` (list)
  - [`getByVirtualMachine`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineDiagnosticRunCommand.tsp#L50) — `GET` (read)
  - [`update`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineDiagnosticRunCommand.tsp#L74) — `PATCH` (update)
- [`Microsoft.Compute/virtualMachineScaleSets/virtualMachines/diagnosticRunCommands`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineDiagnosticRunCommand.tsp#L19) — resource group scope
  - [`createOrUpdate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineDiagnosticRunCommand.tsp#L153) — `PUT` (createOrUpdate)
  - [`delete`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineDiagnosticRunCommand.tsp#L179) — `DELETE` (delete)
  - [`diagnosticList`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineDiagnosticRunCommand.tsp#L194) — `GET` (list)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineDiagnosticRunCommand.tsp#L136) — `GET` (read)
  - [`update`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineDiagnosticRunCommand.tsp#L164) — `PATCH` (update)

### NRNC-1F7BAFD48789

**Logical resource name:** `VirtualMachinesRunCommands`  
**Diagnostic:** [`specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineRunCommand.tsp:158:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineRunCommand.tsp#L158)  
**Correlation:** `matched`  
**Recommendation (add-template-resource-name):** Give the operation set containing `get` a distinct logical resource name such as `VirtualMachinesRunCommandsResourceGroup`. Pass that name through the `VirtualMachineScaleSetVMRunCommandOps.Read` invocation using its `OverrideResourceName` argument, or add a `ResourceName` parameter to the containing interface template `VirtualMachineScaleSetVMRunCommands` and forward it consistently to every lifecycle/list operation for this resource.

**Evidence:**

- `get` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineRunCommand.tsp#L158).
- It is instantiated from `VirtualMachineScaleSetVMRunCommandOps.Read`.
- It is declared in interface `VirtualMachineScaleSetVMRunCommands` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineRunCommand.tsp#L156).
- The conflicting operation resolves to `Microsoft.Compute/virtualMachineScaleSets/virtualMachines/runCommands`.

**Conflicting resources and operations:**

- [`Microsoft.Compute/virtualMachines/runCommands`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineRunCommand.tsp#L15) — resource group scope
  - [`createOrUpdate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineRunCommand.tsp#L73) — `PUT` (createOrUpdate)
  - [`delete`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineRunCommand.tsp#L94) — `DELETE` (delete)
  - [`getByVirtualMachine`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineRunCommand.tsp#L59) — `GET` (read)
  - [`listByVirtualMachine`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineRunCommand.tsp#L105) — `GET` (list)
  - [`update`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineRunCommand.tsp#L82) — `PATCH` (update)
- [`Microsoft.Compute/virtualMachineScaleSets/virtualMachines/runCommands`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineRunCommand.tsp#L15) — resource group scope
  - [`createOrUpdate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineRunCommand.tsp#L174) — `PUT` (createOrUpdate)
  - [`delete`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineRunCommand.tsp#L199) — `DELETE` (delete)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineRunCommand.tsp#L158) — `GET` (read)
  - [`list`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineRunCommand.tsp#L213) — `GET` (list)
  - [`update`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineRunCommand.tsp#L185) — `PATCH` (update)
