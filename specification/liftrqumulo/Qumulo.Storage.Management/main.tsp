import "./LiftrBase.Storage/main.tsp";

import "@typespec/rest";
import "@typespec/openapi";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-azure-resource-manager";

using TypeSpec.Rest;
using TypeSpec.OpenAPI;
using TypeSpec.Http;
using Azure.ResourceManager.Foundations;
using Azure.Core;
using Azure.ResourceManager;
using TypeSpec.Versioning;
using LiftrBase.Storage;
using LiftrBase;

@armProviderNamespace
@useLibraryNamespace(LiftrBase.Storage)
@service({
  title: "Qumulo.Storage",
})
@versioned(Versions)
namespace Qumulo.Storage;

/**
 * The available API versions.
 */
enum Versions {
  /**
   * The 2024-06-19 Stable API version.
   */
  @useDependency(Azure.ResourceManager.Versions.v1_0_Preview_1)
  @useDependency(LiftrBase.Versions.v2_preview)
  @useDependency(LiftrBase.Storage.Versions.v2_preview)
  @armCommonTypesVersion(Azure.ResourceManager.CommonTypes.Versions.v3)
  v2_stable: "2024-06-19",
}

interface Operations extends Azure.ResourceManager.Operations {}

@armResourceOperations
interface FileSystems {
  /**
   * Get a FileSystemResource
   */
  get is ArmResourceRead<FileSystemResource>;

  /**
   * Create a FileSystemResource
   */
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
    FileSystemResource,
    BaseParameters<FileSystemResource>,
    ArmAsyncOperationHeader & Azure.Core.Foundations.RetryAfterHeader
  >;

  /**
   * Update a FileSystemResource
   */
  @parameterVisibility
  update is ArmCustomPatchSync<FileSystemResource, FileSystemResourceUpdate>;

  /**
   * Delete a FileSystemResource
   */
  delete is ArmResourceDeleteWithoutOkAsync<
    FileSystemResource,
    BaseParameters<FileSystemResource>,
    ArmCombinedLroHeaders & Azure.Core.Foundations.RetryAfterHeader
  >;

  /**
   * List FileSystemResource resources by resource group
   */
  listByResourceGroup is ArmResourceListByParent<FileSystemResource>;

  /**
   * List FileSystemResource resources by subscription ID
   */
  listBySubscription is ArmListBySubscription<FileSystemResource>;
}
