import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-azure-resource-manager";
import "./models/models.tsp";
import "./resources/ReportResource.tsp";
import "./resources/WebhookResource.tsp";
import "./resources/SnapshotResource.tsp";
import "./resources/ScopingConfigurationResource.tsp";
import "./resources/EvidenceResource.tsp";
import "./routes.tsp";
import "../../common-types/resource-management/tsp/rpCommon/main.tsp";

using TypeSpec.Rest;
using TypeSpec.Http;
using Azure.Core;
using Azure.ResourceManager;
using TypeSpec.Versioning;
using Microsoft.RpCommon;
/**
 * App Compliance Automation Tool for Microsoft 365 API spec
 */
@armProviderNamespace
@service({
  title: "App Compliance Automation Tool for Microsoft 365",
})
@versioned(Versions)
@armCommonTypesVersion(Azure.ResourceManager.CommonTypes.Versions.v3)
namespace Microsoft.AppComplianceAutomation;

/**
 * The available API versions.
 */
enum Versions {
  /**
   * The 2024-06-27 API version.
   */
  @useDependency(Azure.ResourceManager.Versions.v1_0_Preview_1)
  @useDependency(Azure.Core.Versions.v1_0_Preview_1)
  @useDependency(Microsoft.RpCommon.Versions.`2024-06-01`)
  v2024_06_27: "2024-06-27",

  @useDependency(Azure.ResourceManager.Versions.v1_0_Preview_1)
  @useDependency(Azure.Core.Versions.v1_0_Preview_1)
  @useDependency(Microsoft.RpCommon.Versions.`2024-10-01`)
  v2024_10_03: "2024-10-03",
}

/** The rp-specific properties of the resource */
model TestResourceProperties is RpCommonProperties {
  /** description of the props */
  description: string;
}

model TestResource is TrackedResource<TestResourceProperties> {
  ...ResourceNameParameter<TestResource>;
}
