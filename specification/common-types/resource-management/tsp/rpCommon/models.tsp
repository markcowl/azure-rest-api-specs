import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-azure-resource-manager";
import "./main.tsp";
using Http;
using Rest;
using Versioning;
using Azure.Core;
using Azure.ResourceManager;

@armLibraryNamespace
namespace Microsoft.RpCommon;

/** Common properties */
model RpCommonProperties {
  ...DefaultProvisioningStateProperty;

  /** When this resource was acquired */
  @added(Versions.`2024-10-01`)
  acquired?: utcDateTime;

  // This would require a common-types dependency
  //...ManagedServiceIdentityProperty;
}

model MyResource is TrackedResource<{}> {
  ...ResourceNameParameter<MyResource>;
}
