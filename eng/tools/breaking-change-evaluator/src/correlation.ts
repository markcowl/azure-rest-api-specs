import type { OadRuleCode } from "../../openapi-diff-runner/src/types/oad-types.ts";

export interface Correlation {
  diffKinds: readonly string[];
  phaseB: "error" | "directional" | "ignore" | "n/a";
  intentionalGap?: string;
  informationalRecord?: string;
}

const gap = (reason: string): Correlation => ({
  diffKinds: [],
  phaseB: "n/a",
  intentionalGap: reason,
});

const informational = (reason: string): Correlation => ({
  diffKinds: [],
  phaseB: "n/a",
  informationalRecord: reason,
});

export const oadCorrelation = {
  AddedAdditionalProperties: {
    diffKinds: ["RequestTypeKindChanged", "ResponseTypeKindChanged"],
    phaseB: "error",
  },
  AddedEnumValue: {
    diffKinds: ["EnumValueAdded", "UnionVariantAdded"],
    phaseB: "directional",
  },
  AddedOperation: { diffKinds: ["OperationAdded"], phaseB: "ignore" },
  AddedOptionalProperty: {
    diffKinds: ["RequestPropertyAdded", "ResourcePropertyAdded"],
    phaseB: "ignore",
  },
  AddedPath: { diffKinds: ["OperationAdded"], phaseB: "ignore" },
  AddedPropertyInResponse: {
    diffKinds: ["ResponsePropertyAdded", "ResourcePropertyAdded"],
    phaseB: "ignore",
  },
  AddedReadOnlyPropertyInResponse: {
    diffKinds: ["ResponsePropertyAdded", "ResourcePropertyAdded"],
    phaseB: "ignore",
  },
  AddedRequiredProperty: {
    diffKinds: [
      "RequestPropertyAdded",
      "ResponsePropertyMadeRequired",
      "ResourcePropertyAdded",
      "ResourcePropertyMadeRequired",
    ],
    phaseB: "error",
  },
  AddedXmsEnum: gap("SDK/code-generation concern"),
  AddingHeader: { diffKinds: ["ResponseHeaderAdded"], phaseB: "directional" },
  AddingOptionalParameter: {
    diffKinds: ["RequestQueryParameterAdded", "RequestHeaderAdded"],
    phaseB: "ignore",
  },
  AddingRequiredParameter: {
    diffKinds: ["RequestPathParameterAdded", "RequestQueryParameterAdded", "RequestHeaderAdded"],
    phaseB: "error",
  },
  AddingResponseCode: { diffKinds: ["ResponseStatusCodeAdded"], phaseB: "error" },
  ArrayCollectionFormatChanged: { diffKinds: ["RequestEncodingChanged"], phaseB: "error" },
  ChangedParameterOrder: gap("Parameter order is not wire-relevant"),
  ConstantStatusHasChanged: {
    diffKinds: ["RequestTypeChanged", "ResponseTypeChanged"],
    phaseB: "error",
  },
  ConstraintChanged: {
    diffKinds: [
      "RequestConstraintStrengthened",
      "RequestConstraintRelaxed",
      "ResponseConstraintStrengthened",
      "ResponseConstraintRelaxed",
    ],
    phaseB: "directional",
  },
  ConstraintIsStronger: {
    diffKinds: ["RequestConstraintStrengthened"],
    phaseB: "error",
  },
  ConstraintIsWeaker: {
    diffKinds: ["RequestConstraintRelaxed", "ResponseConstraintRelaxed"],
    phaseB: "directional",
  },
  DefaultValueChanged: {
    diffKinds: ["RequestParameterDefaultChanged", "RequestPropertyDefaultChanged"],
    phaseB: "error",
  },
  DifferentAllOf: gap("OpenAPI structural change"),
  DifferentDiscriminator: { diffKinds: ["DiscriminatorChanged"], phaseB: "error" },
  DifferentExtends: gap("OpenAPI structural change"),
  ModifiedOperationId: gap("Operation ID is not wire-level"),
  NoVersionChange: informational(
    "OAD reports unchanged document versions as comparison context; this is not an API difference",
  ),
  ParameterInHasChanged: {
    diffKinds: ["RequestParameterLocationChanged"],
    phaseB: "error",
  },
  ParameterLocationHasChanged: {
    diffKinds: ["RequestParameterLocationChanged"],
    phaseB: "error",
  },
  ProtocolNoLongerSupported: gap("Transport scheme is outside the per-version contract"),
  ReadonlyPropertyChanged: {
    diffKinds: [
      "RequestPropertyRemoved",
      "RequestPropertyAdded",
      "ResourcePropertyRemoved",
      "ResourcePropertyAdded",
    ],
    phaseB: "error",
  },
  ReferenceRedirection: gap("OpenAPI reference structure is not wire-level"),
  RemovedAdditionalProperties: {
    diffKinds: ["RequestTypeKindChanged", "ResponseTypeKindChanged"],
    phaseB: "error",
  },
  RemovedClientParameter: gap("SDK/client concern"),
  RemovedDefinition: gap("Definition removal is covered through effective wire impacts"),
  RemovedEnumValue: {
    diffKinds: ["EnumValueRemoved", "UnionVariantRemoved"],
    phaseB: "directional",
  },
  RemovedOperation: { diffKinds: ["OperationRemoved"], phaseB: "error" },
  RemovedOptionalParameter: {
    diffKinds: ["RequestQueryParameterRemoved", "RequestHeaderRemoved"],
    phaseB: "error",
  },
  RemovedPath: { diffKinds: ["OperationRemoved"], phaseB: "error" },
  RemovedProperty: {
    diffKinds: ["RequestPropertyRemoved", "ResponsePropertyRemoved", "ResourcePropertyRemoved"],
    phaseB: "error",
  },
  RemovedRequiredParameter: {
    diffKinds: [
      "RequestPathParameterRemoved",
      "RequestQueryParameterRemoved",
      "RequestHeaderRemoved",
    ],
    phaseB: "error",
  },
  RemovedResponseCode: { diffKinds: ["ResponseStatusCodeRemoved"], phaseB: "error" },
  RemovedXmsEnum: gap("SDK/code-generation concern"),
  RemovingHeader: { diffKinds: ["ResponseHeaderRemoved"], phaseB: "error" },
  RequestBodyFormatNoLongerSupported: {
    diffKinds: ["RequestContentTypeRemoved"],
    phaseB: "error",
  },
  RequiredStatusChange: {
    diffKinds: [
      "RequestParameterMadeRequired",
      "RequestPropertyMadeRequired",
      "ResponsePropertyMadeOptional",
      "ResponsePropertyMadeRequired",
      "ResourcePropertyMadeOptional",
      "ResourcePropertyMadeRequired",
    ],
    phaseB: "directional",
  },
  ResponseBodyFormatNowSupported: {
    diffKinds: ["ResponseContentTypeAdded"],
    phaseB: "error",
  },
  TypeChanged: {
    diffKinds: [
      "RequestTypeChanged",
      "ResponseTypeChanged",
      "RequestTypeNarrowed",
      "RequestTypeWidened",
      "ResponseTypeNarrowed",
      "ResponseTypeWidened",
      "ResourcePropertyTypeChanged",
      "ResourcePropertyTypeNarrowed",
      "ResourcePropertyTypeWidened",
    ],
    phaseB: "error",
  },
  TypeFormatChanged: {
    diffKinds: [
      "RequestTypeChanged",
      "ResponseTypeChanged",
      "RequestEncodingChanged",
      "ResponseEncodingChanged",
    ],
    phaseB: "error",
  },
  VersionsReversed: { diffKinds: ["ApiVersionRemoved"], phaseB: "error" },
  XmsEnumChanged: gap("SDK/code-generation concern"),
  XmsLongRunningOperationChanged: gap("Long-running operation metadata is a non-goal"),
} as const satisfies Record<OadRuleCode, Correlation>;

export function correlatedKinds(rule: OadRuleCode): readonly string[] {
  return oadCorrelation[rule].diffKinds;
}
