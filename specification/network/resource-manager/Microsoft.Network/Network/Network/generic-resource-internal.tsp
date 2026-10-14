import "@azure-tools/typespec-azure-resource-manager";
import "@typespec/rest";

using TypeSpec.Http;

namespace Azure.ResourceManager.BaseTypes.MicrosoftNetwork {
  #suppress "@azure-tools/typespec-azure-core/no-private-usage" "Required to register standard proxy resource instances while preserving the converted payload shape."
  @Azure.ResourceManager.Private.genericResourceInternal
  @Http.Private.includeInapplicableMetadataInPayload(false)
  model ArmProxyResourceInstance<
    Properties extends {},
    PropertiesOptional extends valueof boolean = true
  > extends Azure.ResourceManager.ProxyResource<
    Properties,
    PropertiesOptional
  > {}
}

namespace Microsoft.Network {
  alias ArmProxyResourceInstance<
    Properties extends {},
    PropertiesOptional extends valueof boolean = true
  > = Azure.ResourceManager.BaseTypes.MicrosoftNetwork.ArmProxyResourceInstance<
    Properties,
    PropertiesOptional
  >;
}
