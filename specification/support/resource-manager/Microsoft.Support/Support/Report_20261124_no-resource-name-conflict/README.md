# no-resource-name-conflict details

- Spec: `specification/support/resource-manager/Microsoft.Support/Support`
- Source commit: `965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6`
- [Aggregate report](../../../../../../documentation/typespec-arm-resource-data/Report_20261124_no-resource-name-conflict/README.md)
- [Machine-readable diagnostics](diagnostics.json)

## Conflicts

### NRNC-9C9A815AD9F6

**Logical resource name:** `SupportTicketsChatTranscripts`  
**Diagnostic:** [`specification/support/resource-manager/Microsoft.Support/Support/ChatTranscriptDetails.tsp:70:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/ChatTranscriptDetails.tsp#L70)  
**Correlation:** `matched`  
**Recommendation (add-template-resource-name):** Give the operation set containing `get` a distinct logical resource name such as `SupportTicketsChatTranscriptsSubscription`. Pass that name through the `ChatTranscriptOps.Read` invocation using its `OverrideResourceName` argument, or add a `ResourceName` parameter to the containing interface template `ChatTranscripts` and forward it consistently to every lifecycle/list operation for this resource.

**Evidence:**

- `get` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/ChatTranscriptDetails.tsp#L70).
- It is instantiated from `ChatTranscriptOps.Read`.
- It is declared in interface `ChatTranscripts` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/ChatTranscriptDetails.tsp#L68).
- The conflicting operation resolves to `Microsoft.Support/supportTickets/chatTranscripts`.

**Conflicting resources and operations:**

- [`Microsoft.Support/supportTickets/chatTranscripts`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/ChatTranscriptDetails.tsp#L15) — tenant or provider scope
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/ChatTranscriptDetails.tsp#L106) — `GET` (read)
  - [`list`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/ChatTranscriptDetails.tsp#L111) — `GET` (list)
- [`Microsoft.Support/supportTickets/chatTranscripts`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/ChatTranscriptDetails.tsp#L15) — subscription scope
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/ChatTranscriptDetails.tsp#L70) — `GET` (read)
  - [`list`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/ChatTranscriptDetails.tsp#L75) — `GET` (list)

### NRNC-B7E92876F475

**Logical resource name:** `SupportTicketsCommunications`  
**Diagnostic:** [`specification/support/resource-manager/Microsoft.Support/Support/CommunicationDetails.tsp:72:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/CommunicationDetails.tsp#L72)  
**Correlation:** `matched`  
**Recommendation (add-template-resource-name):** Give the operation set containing `get` a distinct logical resource name such as `SupportTicketsCommunicationsSubscription`. Pass that name through the `CommunicationOps.Read` invocation using its `OverrideResourceName` argument, or add a `ResourceName` parameter to the containing interface template `Communications` and forward it consistently to every lifecycle/list operation for this resource.

**Evidence:**

- `get` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/CommunicationDetails.tsp#L72).
- It is instantiated from `CommunicationOps.Read`.
- It is declared in interface `Communications` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/CommunicationDetails.tsp#L70).
- The conflicting operation resolves to `Microsoft.Support/supportTickets/communications`.

**Conflicting resources and operations:**

- [`Microsoft.Support/supportTickets/communications`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/CommunicationDetails.tsp#L15) — tenant or provider scope
  - [`create`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/CommunicationDetails.tsp#L141) — `PUT` (createOrUpdate)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/CommunicationDetails.tsp#L136) — `GET` (read)
  - [`list`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/CommunicationDetails.tsp#L155) — `GET` (list)
- [`Microsoft.Support/supportTickets/communications`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/CommunicationDetails.tsp#L15) — subscription scope
  - [`create`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/CommunicationDetails.tsp#L77) — `PUT` (createOrUpdate)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/CommunicationDetails.tsp#L72) — `GET` (read)
  - [`list`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/CommunicationDetails.tsp#L91) — `GET` (list)

### NRNC-4BB1800F4C2B

**Logical resource name:** `FileWorkspacesFiles`  
**Diagnostic:** [`specification/support/resource-manager/Microsoft.Support/Support/FileDetails.tsp:67:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/FileDetails.tsp#L67)  
**Correlation:** `matched`  
**Recommendation (add-template-resource-name):** Give the operation set containing `get` a distinct logical resource name such as `FileWorkspacesFilesSubscription`. Pass that name through the `FileOps.Read` invocation using its `OverrideResourceName` argument, or add a `ResourceName` parameter to the containing interface template `Files` and forward it consistently to every lifecycle/list operation for this resource.

**Evidence:**

- `get` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/FileDetails.tsp#L67).
- It is instantiated from `FileOps.Read`.
- It is declared in interface `Files` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/FileDetails.tsp#L65).
- The conflicting operation resolves to `Microsoft.Support/fileWorkspaces/files`.

**Conflicting resources and operations:**

- [`Microsoft.Support/fileWorkspaces/files`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/FileDetails.tsp#L13) — tenant or provider scope
  - [`create`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/FileDetails.tsp#L120) — `PUT` (createOrUpdate)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/FileDetails.tsp#L115) — `GET` (read)
  - [`list`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/FileDetails.tsp#L129) — `GET` (list)
  - [`upload`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/FileDetails.tsp#L134) — `POST` (action)
- [`Microsoft.Support/fileWorkspaces/files`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/FileDetails.tsp#L13) — subscription scope
  - [`create`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/FileDetails.tsp#L72) — `PUT` (createOrUpdate)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/FileDetails.tsp#L67) — `GET` (read)
  - [`list`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/FileDetails.tsp#L81) — `GET` (list)
  - [`upload`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/FileDetails.tsp#L86) — `POST` (action)

### NRNC-B4144C266C51

**Logical resource name:** `FileWorkspaces`  
**Diagnostic:** [`specification/support/resource-manager/Microsoft.Support/Support/FileWorkspaceDetails.tsp:44:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/FileWorkspaceDetails.tsp#L44)  
**Correlation:** `matched`  
**Recommendation (add-template-resource-name):** Give the operation set containing `get` a distinct logical resource name such as `FileWorkspacesSubscription`. Pass that name through the `FileWorkspaceOps.Read` invocation using its `OverrideResourceName` argument, or add a `ResourceName` parameter to the containing interface template `FileWorkspaces` and forward it consistently to every lifecycle/list operation for this resource.

**Evidence:**

- `get` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/FileWorkspaceDetails.tsp#L44).
- It is instantiated from `FileWorkspaceOps.Read`.
- It is declared in interface `FileWorkspaces` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/FileWorkspaceDetails.tsp#L42).
- The conflicting operation resolves to `Microsoft.Support/fileWorkspaces`.

**Conflicting resources and operations:**

- [`Microsoft.Support/fileWorkspaces`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/FileWorkspaceDetails.tsp#L13) — tenant or provider scope
  - [`create`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/FileWorkspaceDetails.tsp#L83) — `PUT` (createOrUpdate)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/FileWorkspaceDetails.tsp#L78) — `GET` (read)
- [`Microsoft.Support/fileWorkspaces`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/FileWorkspaceDetails.tsp#L13) — subscription scope
  - [`create`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/FileWorkspaceDetails.tsp#L50) — `PUT` (createOrUpdate)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/FileWorkspaceDetails.tsp#L44) — `GET` (read)

### NRNC-F07F90E864A3

**Logical resource name:** `SupportTickets`  
**Diagnostic:** [`specification/support/resource-manager/Microsoft.Support/Support/SupportTicketDetails.tsp:65:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/SupportTicketDetails.tsp#L65)  
**Correlation:** `matched`  
**Recommendation (add-template-resource-name):** Give the operation set containing `get` a distinct logical resource name such as `SupportTicketsSubscription`. Pass that name through the `SupportTicketOps.Read` invocation using its `OverrideResourceName` argument, or add a `ResourceName` parameter to the containing interface template `SupportTickets` and forward it consistently to every lifecycle/list operation for this resource.

**Evidence:**

- `get` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/SupportTicketDetails.tsp#L65).
- It is instantiated from `SupportTicketOps.Read`.
- It is declared in interface `SupportTickets` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/SupportTicketDetails.tsp#L63).
- The conflicting operation resolves to `Microsoft.Support/supportTickets`.

**Conflicting resources and operations:**

- [`Microsoft.Support/supportTickets`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/SupportTicketDetails.tsp#L15) — tenant or provider scope
  - [`checkNameAvailability`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/SupportTicketDetails.tsp#L203) — `POST` (action)
  - [`create`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/SupportTicketDetails.tsp#L159) — `PUT` (createOrUpdate)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/SupportTicketDetails.tsp#L154) — `GET` (read)
  - [`list`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/SupportTicketDetails.tsp#L182) — `GET` (list)
  - [`update`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/SupportTicketDetails.tsp#L173) — `PATCH` (update)
- [`Microsoft.Support/supportTickets`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/SupportTicketDetails.tsp#L15) — subscription scope
  - [`checkNameAvailability`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/SupportTicketDetails.tsp#L114) — `POST` (action)
  - [`create`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/SupportTicketDetails.tsp#L70) — `PUT` (createOrUpdate)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/SupportTicketDetails.tsp#L65) — `GET` (read)
  - [`list`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/SupportTicketDetails.tsp#L93) — `GET` (list)
  - [`update`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/support/resource-manager/Microsoft.Support/Support/SupportTicketDetails.tsp#L84) — `PATCH` (update)
