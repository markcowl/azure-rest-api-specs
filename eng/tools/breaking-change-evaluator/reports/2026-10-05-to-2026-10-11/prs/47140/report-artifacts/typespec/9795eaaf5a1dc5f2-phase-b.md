## Breaking Change Analysis

### specification/search/data-plane/Search

❌ **530 unsuppressed breaking changes detected**

530 unsuppressed · 6 version pairs compared

### Unsuppressed Breaking Changes

#### 2025-11-01-preview (base → head)

| Kind                                                                                                                                                                                                                                                                  | Identity                                                                                                                                                                                                                                           | Suppression                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.indexerPermissionOptions.variants.intrinsic`                                                                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.indexerPermissionOptions.variants.intrinsic`                                                                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.parameters.variants.Search.IndexingParametersCreateOrUpdate.properties.configuration.properties.markdownParsingSubmode.variants.intrinsic`                                                                                        | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.parameters.variants.Search.IndexingParametersCreateOrUpdate.properties.configuration.properties.markdownParsingSubmode.variants.intrinsic`                                                                                        | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.parameters.variants.Search.IndexingParametersCreateOrUpdate.properties.configuration.properties.markdownHeaderDepth.variants.intrinsic`                                                                                           | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.parameters.variants.Search.IndexingParametersCreateOrUpdate.properties.configuration.properties.markdownHeaderDepth.variants.intrinsic`                                                                                           | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.fieldMappings.properties.mappingFunction.variants.Search.FieldMappingFunctionCreateOrUpdate.properties.parameters.variants.intrinsic`                                                                                             | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.fieldMappings.properties.mappingFunction.variants.Search.FieldMappingFunctionCreateOrUpdate.properties.parameters.variants.intrinsic`                                                                                             | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.disabled.variants.intrinsic`                                                                                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.disabled.variants.intrinsic`                                                                                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.cache.variants.Search.SearchIndexerCacheCreateOrUpdate.properties.enableReprocessing.variants.intrinsic`                                                                                                                          | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.cache.variants.Search.SearchIndexerCacheCreateOrUpdate.properties.enableReprocessing.variants.intrinsic`                                                                                                                          | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Text.KeyPhraseExtractionSkill.properties.modelVersion.variants.intrinsic`                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.KeyPhraseExtractionSkill.properties.modelVersion.variants.intrinsic`                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Text.LanguageDetectionSkill.properties.defaultCountryHint.variants.intrinsic`                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.LanguageDetectionSkill.properties.defaultCountryHint.variants.intrinsic`                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Text.LanguageDetectionSkill.properties.modelVersion.variants.intrinsic`                                                                                                                         | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.LanguageDetectionSkill.properties.modelVersion.variants.intrinsic`                                                                                                                         | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Text.V3.SentimentSkill.properties.defaultLanguageCode.variants.intrinsic`                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.V3.SentimentSkill.properties.defaultLanguageCode.variants.intrinsic`                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Text.V3.SentimentSkill.properties.modelVersion.variants.intrinsic`                                                                                                                              | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.V3.SentimentSkill.properties.modelVersion.variants.intrinsic`                                                                                                                              | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Text.V3.EntityLinkingSkill.properties.defaultLanguageCode.variants.intrinsic`                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.V3.EntityLinkingSkill.properties.defaultLanguageCode.variants.intrinsic`                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Text.V3.EntityLinkingSkill.properties.modelVersion.variants.intrinsic`                                                                                                                          | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.V3.EntityLinkingSkill.properties.modelVersion.variants.intrinsic`                                                                                                                          | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Text.V3.EntityRecognitionSkill.properties.defaultLanguageCode.variants.intrinsic`                                                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.V3.EntityRecognitionSkill.properties.defaultLanguageCode.variants.intrinsic`                                                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Text.V3.EntityRecognitionSkill.properties.modelVersion.variants.intrinsic`                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.V3.EntityRecognitionSkill.properties.modelVersion.variants.intrinsic`                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Text.PIIDetectionSkill.properties.defaultLanguageCode.variants.intrinsic`                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.PIIDetectionSkill.properties.defaultLanguageCode.variants.intrinsic`                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Text.PIIDetectionSkill.properties.modelVersion.variants.intrinsic`                                                                                                                              | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.PIIDetectionSkill.properties.modelVersion.variants.intrinsic`                                                                                                                              | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Text.PIIDetectionSkill.properties.domain.variants.intrinsic`                                                                                                                                    | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.PIIDetectionSkill.properties.domain.variants.intrinsic`                                                                                                                                    | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Text.SplitSkill.properties.unit.variants.intrinsic`                                                                                                                                             | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.SplitSkill.properties.unit.variants.intrinsic`                                                                                                                                             | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Text.SplitSkill.properties.azureOpenAITokenizerParameters.variants.Search.AzureOpenAITokenizerParametersCreateOrUpdate.properties.encoderModelName.variants.intrinsic`                          | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.SplitSkill.properties.azureOpenAITokenizerParameters.variants.Search.AzureOpenAITokenizerParametersCreateOrUpdate.properties.encoderModelName.variants.intrinsic`                          | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Text.CustomEntityLookupSkill.properties.defaultLanguageCode.variants.intrinsic`                                                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.CustomEntityLookupSkill.properties.defaultLanguageCode.variants.intrinsic`                                                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Text.CustomEntityLookupSkill.properties.entitiesDefinitionUri.variants.intrinsic`                                                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.CustomEntityLookupSkill.properties.entitiesDefinitionUri.variants.intrinsic`                                                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Text.CustomEntityLookupSkill.properties.globalDefaultCaseSensitive.variants.intrinsic`                                                                                                          | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.CustomEntityLookupSkill.properties.globalDefaultCaseSensitive.variants.intrinsic`                                                                                                          | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Text.CustomEntityLookupSkill.properties.globalDefaultAccentSensitive.variants.intrinsic`                                                                                                        | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.CustomEntityLookupSkill.properties.globalDefaultAccentSensitive.variants.intrinsic`                                                                                                        | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Text.TranslationSkill.properties.suggestedFrom.variants.intrinsic`                                                                                                                              | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.TranslationSkill.properties.suggestedFrom.variants.intrinsic`                                                                                                                              | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentExtractionSkill.properties.parsingMode.variants.intrinsic`                                                                                                                         | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentExtractionSkill.properties.parsingMode.variants.intrinsic`                                                                                                                         | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentExtractionSkill.properties.dataToExtract.variants.intrinsic`                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentExtractionSkill.properties.dataToExtract.variants.intrinsic`                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentExtractionSkill.properties.configuration.variants.intrinsic`                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentExtractionSkill.properties.configuration.variants.intrinsic`                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill.properties.outputFormat.variants.intrinsic`                                                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill.properties.outputFormat.variants.intrinsic`                                                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill.properties.outputMode.variants.intrinsic`                                                                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill.properties.outputMode.variants.intrinsic`                                                                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill.properties.markdownHeaderDepth.variants.intrinsic`                                                                                                         | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill.properties.markdownHeaderDepth.variants.intrinsic`                                                                                                         | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill.properties.extractionOptions.variants.intrinsic`                                                                                                           | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill.properties.extractionOptions.variants.intrinsic`                                                                                                           | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill.properties.chunkingProperties.variants.Search.DocumentIntelligenceLayoutSkillChunkingPropertiesCreateOrUpdate.properties.unit.variants.intrinsic`          | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill.properties.chunkingProperties.variants.Search.DocumentIntelligenceLayoutSkillChunkingPropertiesCreateOrUpdate.properties.unit.variants.intrinsic`          | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Custom.WebApiSkill.properties.authResourceId.variants.intrinsic`                                                                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.WebApiSkill.properties.authResourceId.variants.intrinsic`                                                                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Custom.AmlSkill.properties.uri.variants.intrinsic`                                                                                                                                              | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.AmlSkill.properties.uri.variants.intrinsic`                                                                                                                                              | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Custom.AmlSkill.properties.key.variants.intrinsic`                                                                                                                                              | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.AmlSkill.properties.key.variants.intrinsic`                                                                                                                                              | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Custom.AmlSkill.properties.resourceId.variants.intrinsic`                                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.AmlSkill.properties.resourceId.variants.intrinsic`                                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Custom.AmlSkill.properties.timeout.variants.intrinsic`                                                                                                                                          | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.AmlSkill.properties.timeout.variants.intrinsic`                                                                                                                                          | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Custom.AmlSkill.properties.region.variants.intrinsic`                                                                                                                                           | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.AmlSkill.properties.region.variants.intrinsic`                                                                                                                                           | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Vision.VectorizeSkill.properties.modelVersion.variants.intrinsic`                                                                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Vision.VectorizeSkill.properties.modelVersion.variants.intrinsic`                                                                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Util.ContentUnderstandingSkill.properties.extractionOptions.variants.intrinsic`                                                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Util.ContentUnderstandingSkill.properties.extractionOptions.variants.intrinsic`                                                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Util.ContentUnderstandingSkill.properties.chunkingProperties.variants.Search.ContentUnderstandingSkillChunkingPropertiesCreateOrUpdate.properties.unit.variants.intrinsic`                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Util.ContentUnderstandingSkill.properties.chunkingProperties.variants.Search.ContentUnderstandingSkillChunkingPropertiesCreateOrUpdate.properties.unit.variants.intrinsic`                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.authResourceId.variants.intrinsic`                                                                                                                        | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.authResourceId.variants.intrinsic`                                                                                                                        | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.commonModelParameters.properties.modelName.variants.intrinsic`                                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.commonModelParameters.properties.modelName.variants.intrinsic`                                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.commonModelParameters.properties.stop.variants.intrinsic`                                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.commonModelParameters.properties.stop.variants.intrinsic`                                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.extraParameters.variants.intrinsic`                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.extraParameters.variants.intrinsic`                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.responseFormat.properties.jsonSchemaProperties.variants.Search.ChatCompletionSchemaPropertiesCreateOrUpdate.properties.name.variants.intrinsic`           | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.responseFormat.properties.jsonSchemaProperties.variants.Search.ChatCompletionSchemaPropertiesCreateOrUpdate.properties.name.variants.intrinsic`           | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.responseFormat.properties.jsonSchemaProperties.variants.Search.ChatCompletionSchemaPropertiesCreateOrUpdate.properties.description.variants.intrinsic`    | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.responseFormat.properties.jsonSchemaProperties.variants.Search.ChatCompletionSchemaPropertiesCreateOrUpdate.properties.description.variants.intrinsic`    | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.fields.properties.permissionFilter.variants.intrinsic`                                                                                                                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.fields.properties.permissionFilter.variants.intrinsic`                                                                                                                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.fields.properties.sensitivityLabel.variants.intrinsic`                                                                                                                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.fields.properties.sensitivityLabel.variants.intrinsic`                                                                                                                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.fields.properties.analyzer.variants.intrinsic`                                                                                                                                                                                    | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.fields.properties.analyzer.variants.intrinsic`                                                                                                                                                                                    | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.fields.properties.searchAnalyzer.variants.intrinsic`                                                                                                                                                                              | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.fields.properties.searchAnalyzer.variants.intrinsic`                                                                                                                                                                              | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.fields.properties.indexAnalyzer.variants.intrinsic`                                                                                                                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.fields.properties.indexAnalyzer.variants.intrinsic`                                                                                                                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.fields.properties.normalizer.variants.intrinsic`                                                                                                                                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.fields.properties.normalizer.variants.intrinsic`                                                                                                                                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.fields.properties.vectorSearchProfile.variants.intrinsic`                                                                                                                                                                         | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.fields.properties.vectorSearchProfile.variants.intrinsic`                                                                                                                                                                         | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.fields.properties.vectorEncoding.variants.intrinsic`                                                                                                                                                                              | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.fields.properties.vectorEncoding.variants.intrinsic`                                                                                                                                                                              | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.corsOptions.variants.Search.CorsOptionsCreate.properties.maxAgeInSeconds.variants.intrinsic`                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.corsOptions.variants.Search.CorsOptionsCreate.properties.maxAgeInSeconds.variants.intrinsic`                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.semantic.variants.Search.SemanticSearchCreate.properties.configurations.properties.rankingOrder.variants.intrinsic`                                                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.semantic.variants.Search.SemanticSearchCreate.properties.configurations.properties.rankingOrder.variants.intrinsic`                                                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.vectorSearch.variants.Search.VectorSearchCreate.properties.algorithms.variants.hnsw.properties.hnswParameters.properties.metric.variants.intrinsic`                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.vectorSearch.variants.Search.VectorSearchCreate.properties.algorithms.variants.hnsw.properties.hnswParameters.properties.metric.variants.intrinsic`                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.vectorSearch.variants.Search.VectorSearchCreate.properties.algorithms.variants.exhaustiveKnn.properties.exhaustiveKnnParameters.properties.metric.variants.intrinsic`                                                             | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.vectorSearch.variants.Search.VectorSearchCreate.properties.algorithms.variants.exhaustiveKnn.properties.exhaustiveKnnParameters.properties.metric.variants.intrinsic`                                                             | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.vectorSearch.variants.Search.VectorSearchCreate.properties.vectorizers.variants.customWebApi.properties.customWebApiParameters.properties.authResourceId.variants.intrinsic`                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.vectorSearch.variants.Search.VectorSearchCreate.properties.vectorizers.variants.customWebApi.properties.customWebApiParameters.properties.authResourceId.variants.intrinsic`                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.vectorSearch.variants.Search.VectorSearchCreate.properties.vectorizers.variants.aiServicesVision.properties.aiServicesVisionParameters.properties.modelVersion.variants.intrinsic`                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.vectorSearch.variants.Search.VectorSearchCreate.properties.vectorizers.variants.aiServicesVision.properties.aiServicesVisionParameters.properties.modelVersion.variants.intrinsic`                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.vectorSearch.variants.Search.VectorSearchCreate.properties.vectorizers.variants.aml.properties.amlParameters.properties.uri.variants.intrinsic`                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.vectorSearch.variants.Search.VectorSearchCreate.properties.vectorizers.variants.aml.properties.amlParameters.properties.uri.variants.intrinsic`                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.vectorSearch.variants.Search.VectorSearchCreate.properties.vectorizers.variants.aml.properties.amlParameters.properties.key.variants.intrinsic`                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.vectorSearch.variants.Search.VectorSearchCreate.properties.vectorizers.variants.aml.properties.amlParameters.properties.key.variants.intrinsic`                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.vectorSearch.variants.Search.VectorSearchCreate.properties.vectorizers.variants.aml.properties.amlParameters.properties.resourceId.variants.intrinsic`                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.vectorSearch.variants.Search.VectorSearchCreate.properties.vectorizers.variants.aml.properties.amlParameters.properties.resourceId.variants.intrinsic`                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.vectorSearch.variants.Search.VectorSearchCreate.properties.vectorizers.variants.aml.properties.amlParameters.properties.timeout.variants.intrinsic`                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.vectorSearch.variants.Search.VectorSearchCreate.properties.vectorizers.variants.aml.properties.amlParameters.properties.timeout.variants.intrinsic`                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.vectorSearch.variants.Search.VectorSearchCreate.properties.vectorizers.variants.aml.properties.amlParameters.properties.region.variants.intrinsic`                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.vectorSearch.variants.Search.VectorSearchCreate.properties.vectorizers.variants.aml.properties.amlParameters.properties.region.variants.intrinsic`                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.vectorSearch.variants.Search.VectorSearchCreate.properties.compressions.variants.scalarQuantization.properties.scalarQuantizationParameters.properties.quantizedDataType.variants.intrinsic`                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.vectorSearch.variants.Search.VectorSearchCreate.properties.compressions.variants.scalarQuantization.properties.scalarQuantizationParameters.properties.quantizedDataType.variants.intrinsic`                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.permissionFilterOption.variants.intrinsic`                                                                                                                                                                                        | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.permissionFilterOption.variants.intrinsic`                                                                                                                                                                                        | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.purviewEnabled.variants.intrinsic`                                                                                                                                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.purviewEnabled.variants.intrinsic`                                                                                                                                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.counters.properties.aliasesCount.properties.quota.variants.intrinsic`                                                                                                                                                             | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.counters.properties.aliasesCount.properties.quota.variants.intrinsic`                                                                                                                                                             | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.limits.properties.maxFieldsPerIndex.variants.intrinsic`                                                                                                                                                                           | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.limits.properties.maxFieldsPerIndex.variants.intrinsic`                                                                                                                                                                           | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.limits.properties.maxFieldNestingDepthPerIndex.variants.intrinsic`                                                                                                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.limits.properties.maxFieldNestingDepthPerIndex.variants.intrinsic`                                                                                                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.limits.properties.maxComplexCollectionFieldsPerIndex.variants.intrinsic`                                                                                                                                                          | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.limits.properties.maxComplexCollectionFieldsPerIndex.variants.intrinsic`                                                                                                                                                          | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.limits.properties.maxComplexObjectsInCollectionsPerDocument.variants.intrinsic`                                                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.limits.properties.maxComplexObjectsInCollectionsPerDocument.variants.intrinsic`                                                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.limits.properties.maxStoragePerIndex.variants.intrinsic`                                                                                                                                                                          | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.limits.properties.maxStoragePerIndex.variants.intrinsic`                                                                                                                                                                          | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.limits.properties.maxCumulativeIndexerRuntimeSeconds.variants.intrinsic`                                                                                                                                                          | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.limits.properties.maxCumulativeIndexerRuntimeSeconds.variants.intrinsic`                                                                                                                                                          | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.indexersRuntime.properties.remainingSeconds.variants.intrinsic`                                                                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.indexersRuntime.properties.remainingSeconds.variants.intrinsic`                                                                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.identity.variants.intrinsic`                                                                                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.identity.variants.intrinsic`                                                                                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.dataChangeDetectionPolicy.variants.intrinsic`                                                                                                                                                                                     | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.dataChangeDetectionPolicy.variants.intrinsic`                                                                                                                                                                                     | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.dataDeletionDetectionPolicy.variants.intrinsic`                                                                                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.dataDeletionDetectionPolicy.variants.intrinsic`                                                                                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.encryptionKey.variants.Search.SearchResourceEncryptionKeyCreateOrUpdate.properties.identity.variants.intrinsic`                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.encryptionKey.variants.Search.SearchResourceEncryptionKeyCreateOrUpdate.properties.identity.variants.intrinsic`                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.encryptionKey.variants.intrinsic`                                                                                                                                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.encryptionKey.variants.intrinsic`                                                                                                                                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.identity.variants.intrinsic`                                                                                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.identity.variants.intrinsic`                                                                                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.dataChangeDetectionPolicy.variants.intrinsic`                                                                                                                                                                                     | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.dataChangeDetectionPolicy.variants.intrinsic`                                                                                                                                                                                     | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.dataDeletionDetectionPolicy.variants.intrinsic`                                                                                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.dataDeletionDetectionPolicy.variants.intrinsic`                                                                                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.encryptionKey.variants.Search.SearchResourceEncryptionKey.properties.identity.variants.intrinsic`                                                                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.encryptionKey.variants.Search.SearchResourceEncryptionKey.properties.identity.variants.intrinsic`                                                                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.encryptionKey.variants.intrinsic`                                                                                                                                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.encryptionKey.variants.intrinsic`                                                                                                                                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.encryptionKey.variants.Search.SearchResourceEncryptionKeyCreate.properties.identity.variants.intrinsic`                                                                                                                           | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.encryptionKey.variants.Search.SearchResourceEncryptionKeyCreate.properties.identity.variants.intrinsic`                                                                                                                           | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.options.variants.intrinsic`                                                                                                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.options.variants.intrinsic`                                                                                                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.schedule.variants.intrinsic`                                                                                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.schedule.variants.intrinsic`                                                                                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.parameters.variants.Search.IndexingParametersCreateOrUpdate.properties.batchSize.variants.intrinsic`                                                                                                                              | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.parameters.variants.Search.IndexingParametersCreateOrUpdate.properties.batchSize.variants.intrinsic`                                                                                                                              | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.parameters.variants.Search.IndexingParametersCreateOrUpdate.properties.maxFailedItems.variants.intrinsic`                                                                                                                         | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.parameters.variants.Search.IndexingParametersCreateOrUpdate.properties.maxFailedItems.variants.intrinsic`                                                                                                                         | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.parameters.variants.Search.IndexingParametersCreateOrUpdate.properties.maxFailedItemsPerBatch.variants.intrinsic`                                                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.parameters.variants.Search.IndexingParametersCreateOrUpdate.properties.maxFailedItemsPerBatch.variants.intrinsic`                                                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.parameters.variants.intrinsic`                                                                                                                                                                                                    | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.parameters.variants.intrinsic`                                                                                                                                                                                                    | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.fieldMappings.properties.mappingFunction.variants.intrinsic`                                                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.fieldMappings.properties.mappingFunction.variants.intrinsic`                                                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.cache.variants.Search.SearchIndexerCacheCreateOrUpdate.properties.identity.variants.intrinsic`                                                                                                                                    | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.cache.variants.Search.SearchIndexerCacheCreateOrUpdate.properties.identity.variants.intrinsic`                                                                                                                                    | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.cache.variants.intrinsic`                                                                                                                                                                                                         | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.cache.variants.intrinsic`                                                                                                                                                                                                         | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.schedule.variants.intrinsic`                                                                                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.schedule.variants.intrinsic`                                                                                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.parameters.variants.Search.IndexingParameters.properties.batchSize.variants.intrinsic`                                                                                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.parameters.variants.Search.IndexingParameters.properties.batchSize.variants.intrinsic`                                                                                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.parameters.variants.Search.IndexingParameters.properties.maxFailedItems.variants.intrinsic`                                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.parameters.variants.Search.IndexingParameters.properties.maxFailedItems.variants.intrinsic`                                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.parameters.variants.Search.IndexingParameters.properties.maxFailedItemsPerBatch.variants.intrinsic`                                                                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.parameters.variants.Search.IndexingParameters.properties.maxFailedItemsPerBatch.variants.intrinsic`                                                                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.parameters.variants.intrinsic`                                                                                                                                                                                                    | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.parameters.variants.intrinsic`                                                                                                                                                                                                    | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.fieldMappings.properties.mappingFunction.variants.intrinsic`                                                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.fieldMappings.properties.mappingFunction.variants.intrinsic`                                                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.cache.variants.Search.SearchIndexerCache.properties.identity.variants.intrinsic`                                                                                                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.cache.variants.Search.SearchIndexerCache.properties.identity.variants.intrinsic`                                                                                                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.cache.variants.intrinsic`                                                                                                                                                                                                         | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.cache.variants.intrinsic`                                                                                                                                                                                                         | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.parameters.variants.Search.IndexingParametersCreate.properties.batchSize.variants.intrinsic`                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.parameters.variants.Search.IndexingParametersCreate.properties.batchSize.variants.intrinsic`                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.parameters.variants.Search.IndexingParametersCreate.properties.maxFailedItems.variants.intrinsic`                                                                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.parameters.variants.Search.IndexingParametersCreate.properties.maxFailedItems.variants.intrinsic`                                                                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.parameters.variants.Search.IndexingParametersCreate.properties.maxFailedItemsPerBatch.variants.intrinsic`                                                                                                                         | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.parameters.variants.Search.IndexingParametersCreate.properties.maxFailedItemsPerBatch.variants.intrinsic`                                                                                                                         | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.cache.variants.Search.SearchIndexerCacheCreate.properties.identity.variants.intrinsic`                                                                                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.cache.variants.Search.SearchIndexerCacheCreate.properties.identity.variants.intrinsic`                                                                                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.runtime.properties.remainingSeconds.variants.intrinsic`                                                                                                                                                                           | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.runtime.properties.remainingSeconds.variants.intrinsic`                                                                                                                                                                           | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.lastResult.properties.endTime.variants.intrinsic`                                                                                                                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.lastResult.properties.endTime.variants.intrinsic`                                                                                                                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.KeyPhraseExtractionSkill.properties.maxKeyPhraseCount.variants.intrinsic`                                                                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Text.KeyPhraseExtractionSkill.properties.maxKeyPhraseCount.variants.intrinsic`                                                                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.SplitSkill.properties.maximumPageLength.variants.intrinsic`                                                                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Text.SplitSkill.properties.maximumPageLength.variants.intrinsic`                                                                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.SplitSkill.properties.pageOverlapLength.variants.intrinsic`                                                                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Text.SplitSkill.properties.pageOverlapLength.variants.intrinsic`                                                                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.SplitSkill.properties.maximumPagesToTake.variants.intrinsic`                                                                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Text.SplitSkill.properties.maximumPagesToTake.variants.intrinsic`                                                                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.SplitSkill.properties.azureOpenAITokenizerParameters.variants.intrinsic`                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Text.SplitSkill.properties.azureOpenAITokenizerParameters.variants.intrinsic`                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.CustomEntityLookupSkill.properties.inlineEntitiesDefinition.variants.intrinsic`                                                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Text.CustomEntityLookupSkill.properties.inlineEntitiesDefinition.variants.intrinsic`                                                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.CustomEntityLookupSkill.properties.globalDefaultFuzzyEditDistance.variants.intrinsic`                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Text.CustomEntityLookupSkill.properties.globalDefaultFuzzyEditDistance.variants.intrinsic`                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill.properties.chunkingProperties.variants.Search.DocumentIntelligenceLayoutSkillChunkingPropertiesCreateOrUpdate.properties.maximumLength.variants.intrinsic` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill.properties.chunkingProperties.variants.Search.DocumentIntelligenceLayoutSkillChunkingPropertiesCreateOrUpdate.properties.maximumLength.variants.intrinsic` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill.properties.chunkingProperties.variants.Search.DocumentIntelligenceLayoutSkillChunkingPropertiesCreateOrUpdate.properties.overlapLength.variants.intrinsic` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill.properties.chunkingProperties.variants.Search.DocumentIntelligenceLayoutSkillChunkingPropertiesCreateOrUpdate.properties.overlapLength.variants.intrinsic` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill.properties.chunkingProperties.variants.intrinsic`                                                                                                          | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill.properties.chunkingProperties.variants.intrinsic`                                                                                                          | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.WebApiSkill.properties.batchSize.variants.intrinsic`                                                                                                                                     | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Custom.WebApiSkill.properties.batchSize.variants.intrinsic`                                                                                                                                     | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.WebApiSkill.properties.degreeOfParallelism.variants.intrinsic`                                                                                                                           | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Custom.WebApiSkill.properties.degreeOfParallelism.variants.intrinsic`                                                                                                                           | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.WebApiSkill.properties.authIdentity.variants.intrinsic`                                                                                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Custom.WebApiSkill.properties.authIdentity.variants.intrinsic`                                                                                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.AmlSkill.properties.degreeOfParallelism.variants.intrinsic`                                                                                                                              | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Custom.AmlSkill.properties.degreeOfParallelism.variants.intrinsic`                                                                                                                              | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.AzureOpenAIEmbeddingSkill.properties.dimensions.variants.intrinsic`                                                                                                                        | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Text.AzureOpenAIEmbeddingSkill.properties.dimensions.variants.intrinsic`                                                                                                                        | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Util.ContentUnderstandingSkill.properties.chunkingProperties.variants.Search.ContentUnderstandingSkillChunkingPropertiesCreateOrUpdate.properties.maximumLength.variants.intrinsic`             | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Util.ContentUnderstandingSkill.properties.chunkingProperties.variants.Search.ContentUnderstandingSkillChunkingPropertiesCreateOrUpdate.properties.maximumLength.variants.intrinsic`             | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Util.ContentUnderstandingSkill.properties.chunkingProperties.variants.Search.ContentUnderstandingSkillChunkingPropertiesCreateOrUpdate.properties.overlapLength.variants.intrinsic`             | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Util.ContentUnderstandingSkill.properties.chunkingProperties.variants.Search.ContentUnderstandingSkillChunkingPropertiesCreateOrUpdate.properties.overlapLength.variants.intrinsic`             | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Util.ContentUnderstandingSkill.properties.chunkingProperties.variants.intrinsic`                                                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Util.ContentUnderstandingSkill.properties.chunkingProperties.variants.intrinsic`                                                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.batchSize.variants.intrinsic`                                                                                                                             | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.batchSize.variants.intrinsic`                                                                                                                             | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.degreeOfParallelism.variants.intrinsic`                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.degreeOfParallelism.variants.intrinsic`                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.authIdentity.variants.intrinsic`                                                                                                                          | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.authIdentity.variants.intrinsic`                                                                                                                          | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.commonModelParameters.properties.frequencyPenalty.variants.intrinsic`                                                                                     | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.commonModelParameters.properties.frequencyPenalty.variants.intrinsic`                                                                                     | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.commonModelParameters.properties.presencePenalty.variants.intrinsic`                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.commonModelParameters.properties.presencePenalty.variants.intrinsic`                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.commonModelParameters.properties.maxTokens.variants.intrinsic`                                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.commonModelParameters.properties.maxTokens.variants.intrinsic`                                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.commonModelParameters.properties.temperature.variants.intrinsic`                                                                                          | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.commonModelParameters.properties.temperature.variants.intrinsic`                                                                                          | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.commonModelParameters.properties.seed.variants.intrinsic`                                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.commonModelParameters.properties.seed.variants.intrinsic`                                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.responseFormat.properties.jsonSchemaProperties.variants.intrinsic`                                                                                        | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.responseFormat.properties.jsonSchemaProperties.variants.intrinsic`                                                                                        | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.cognitiveServices.variants.#Microsoft.Azure.Search.AIServicesByIdentity.properties.identity.variants.intrinsic`                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.cognitiveServices.variants.#Microsoft.Azure.Search.AIServicesByIdentity.properties.identity.variants.intrinsic`                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.knowledgeStore.properties.identity.variants.intrinsic`                                                                                                                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.knowledgeStore.properties.identity.variants.intrinsic`                                                                                                                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Text.KeyPhraseExtractionSkill.properties.maxKeyPhraseCount.variants.intrinsic`                                                                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.KeyPhraseExtractionSkill.properties.maxKeyPhraseCount.variants.intrinsic`                                                                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Text.SplitSkill.properties.maximumPageLength.variants.intrinsic`                                                                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.SplitSkill.properties.maximumPageLength.variants.intrinsic`                                                                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Text.SplitSkill.properties.pageOverlapLength.variants.intrinsic`                                                                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.SplitSkill.properties.pageOverlapLength.variants.intrinsic`                                                                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Text.SplitSkill.properties.maximumPagesToTake.variants.intrinsic`                                                                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.SplitSkill.properties.maximumPagesToTake.variants.intrinsic`                                                                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Text.SplitSkill.properties.azureOpenAITokenizerParameters.variants.intrinsic`                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.SplitSkill.properties.azureOpenAITokenizerParameters.variants.intrinsic`                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Text.CustomEntityLookupSkill.properties.inlineEntitiesDefinition.variants.intrinsic`                                                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.CustomEntityLookupSkill.properties.inlineEntitiesDefinition.variants.intrinsic`                                                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Text.CustomEntityLookupSkill.properties.globalDefaultFuzzyEditDistance.variants.intrinsic`                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.CustomEntityLookupSkill.properties.globalDefaultFuzzyEditDistance.variants.intrinsic`                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill.properties.chunkingProperties.variants.Search.DocumentIntelligenceLayoutSkillChunkingProperties.properties.maximumLength.variants.intrinsic`               | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill.properties.chunkingProperties.variants.Search.DocumentIntelligenceLayoutSkillChunkingProperties.properties.maximumLength.variants.intrinsic`               | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill.properties.chunkingProperties.variants.Search.DocumentIntelligenceLayoutSkillChunkingProperties.properties.overlapLength.variants.intrinsic`               | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill.properties.chunkingProperties.variants.Search.DocumentIntelligenceLayoutSkillChunkingProperties.properties.overlapLength.variants.intrinsic`               | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill.properties.chunkingProperties.variants.intrinsic`                                                                                                          | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill.properties.chunkingProperties.variants.intrinsic`                                                                                                          | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Custom.WebApiSkill.properties.batchSize.variants.intrinsic`                                                                                                                                     | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.WebApiSkill.properties.batchSize.variants.intrinsic`                                                                                                                                     | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Custom.WebApiSkill.properties.degreeOfParallelism.variants.intrinsic`                                                                                                                           | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.WebApiSkill.properties.degreeOfParallelism.variants.intrinsic`                                                                                                                           | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Custom.WebApiSkill.properties.authIdentity.variants.intrinsic`                                                                                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.WebApiSkill.properties.authIdentity.variants.intrinsic`                                                                                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Custom.AmlSkill.properties.degreeOfParallelism.variants.intrinsic`                                                                                                                              | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.AmlSkill.properties.degreeOfParallelism.variants.intrinsic`                                                                                                                              | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Text.AzureOpenAIEmbeddingSkill.properties.dimensions.variants.intrinsic`                                                                                                                        | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Text.AzureOpenAIEmbeddingSkill.properties.dimensions.variants.intrinsic`                                                                                                                        | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Util.ContentUnderstandingSkill.properties.chunkingProperties.variants.Search.ContentUnderstandingSkillChunkingProperties.properties.maximumLength.variants.intrinsic`                           | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Util.ContentUnderstandingSkill.properties.chunkingProperties.variants.Search.ContentUnderstandingSkillChunkingProperties.properties.maximumLength.variants.intrinsic`                           | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Util.ContentUnderstandingSkill.properties.chunkingProperties.variants.Search.ContentUnderstandingSkillChunkingProperties.properties.overlapLength.variants.intrinsic`                           | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Util.ContentUnderstandingSkill.properties.chunkingProperties.variants.Search.ContentUnderstandingSkillChunkingProperties.properties.overlapLength.variants.intrinsic`                           | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Util.ContentUnderstandingSkill.properties.chunkingProperties.variants.intrinsic`                                                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Util.ContentUnderstandingSkill.properties.chunkingProperties.variants.intrinsic`                                                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.batchSize.variants.intrinsic`                                                                                                                             | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.batchSize.variants.intrinsic`                                                                                                                             | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.degreeOfParallelism.variants.intrinsic`                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.degreeOfParallelism.variants.intrinsic`                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.authIdentity.variants.intrinsic`                                                                                                                          | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.authIdentity.variants.intrinsic`                                                                                                                          | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.commonModelParameters.properties.frequencyPenalty.variants.intrinsic`                                                                                     | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.commonModelParameters.properties.frequencyPenalty.variants.intrinsic`                                                                                     | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.commonModelParameters.properties.presencePenalty.variants.intrinsic`                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.commonModelParameters.properties.presencePenalty.variants.intrinsic`                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.commonModelParameters.properties.maxTokens.variants.intrinsic`                                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.commonModelParameters.properties.maxTokens.variants.intrinsic`                                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.commonModelParameters.properties.temperature.variants.intrinsic`                                                                                          | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.commonModelParameters.properties.temperature.variants.intrinsic`                                                                                          | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.commonModelParameters.properties.seed.variants.intrinsic`                                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.commonModelParameters.properties.seed.variants.intrinsic`                                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.responseFormat.properties.jsonSchemaProperties.variants.intrinsic`                                                                                        | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Custom.ChatCompletionSkill.properties.responseFormat.properties.jsonSchemaProperties.variants.intrinsic`                                                                                        | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.cognitiveServices.variants.#Microsoft.Azure.Search.AIServicesByIdentity.properties.identity.variants.intrinsic`                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.cognitiveServices.variants.#Microsoft.Azure.Search.AIServicesByIdentity.properties.identity.variants.intrinsic`                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.knowledgeStore.properties.identity.variants.intrinsic`                                                                                                                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.knowledgeStore.properties.identity.variants.intrinsic`                                                                                                                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill.properties.chunkingProperties.variants.Search.DocumentIntelligenceLayoutSkillChunkingPropertiesCreate.properties.maximumLength.variants.intrinsic`         | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill.properties.chunkingProperties.variants.Search.DocumentIntelligenceLayoutSkillChunkingPropertiesCreate.properties.maximumLength.variants.intrinsic`         | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill.properties.chunkingProperties.variants.Search.DocumentIntelligenceLayoutSkillChunkingPropertiesCreate.properties.overlapLength.variants.intrinsic`         | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Util.DocumentIntelligenceLayoutSkill.properties.chunkingProperties.variants.Search.DocumentIntelligenceLayoutSkillChunkingPropertiesCreate.properties.overlapLength.variants.intrinsic`         | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Util.ContentUnderstandingSkill.properties.chunkingProperties.variants.Search.ContentUnderstandingSkillChunkingPropertiesCreate.properties.maximumLength.variants.intrinsic`                     | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Util.ContentUnderstandingSkill.properties.chunkingProperties.variants.Search.ContentUnderstandingSkillChunkingPropertiesCreate.properties.maximumLength.variants.intrinsic`                     | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.skills.variants.#Microsoft.Skills.Util.ContentUnderstandingSkill.properties.chunkingProperties.variants.Search.ContentUnderstandingSkillChunkingPropertiesCreate.properties.overlapLength.variants.intrinsic`                     | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.skills.variants.#Microsoft.Skills.Util.ContentUnderstandingSkill.properties.chunkingProperties.variants.Search.ContentUnderstandingSkillChunkingPropertiesCreate.properties.overlapLength.variants.intrinsic`                     | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.scoringProfiles.properties.text.variants.intrinsic`                                                                                                                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.scoringProfiles.properties.text.variants.intrinsic`                                                                                                                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.corsOptions.variants.intrinsic`                                                                                                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.corsOptions.variants.intrinsic`                                                                                                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.similarity.variants.#Microsoft.Azure.Search.BM25Similarity.properties.k1.variants.intrinsic`                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.similarity.variants.#Microsoft.Azure.Search.BM25Similarity.properties.k1.variants.intrinsic`                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.similarity.variants.#Microsoft.Azure.Search.BM25Similarity.properties.b.variants.intrinsic`                                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.similarity.variants.#Microsoft.Azure.Search.BM25Similarity.properties.b.variants.intrinsic`                                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.semantic.variants.intrinsic`                                                                                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.semantic.variants.intrinsic`                                                                                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.vectorSearch.variants.Search.VectorSearchCreate.properties.vectorizers.variants.customWebApi.properties.customWebApiParameters.properties.authIdentity.variants.intrinsic`                                                        | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.vectorSearch.variants.Search.VectorSearchCreate.properties.vectorizers.variants.customWebApi.properties.customWebApiParameters.properties.authIdentity.variants.intrinsic`                                                        | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.vectorSearch.variants.Search.VectorSearchCreate.properties.vectorizers.variants.aiServicesVision.properties.aiServicesVisionParameters.properties.authIdentity.variants.intrinsic`                                                | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.vectorSearch.variants.Search.VectorSearchCreate.properties.vectorizers.variants.aiServicesVision.properties.aiServicesVisionParameters.properties.authIdentity.variants.intrinsic`                                                | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.vectorSearch.variants.intrinsic`                                                                                                                                                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.vectorSearch.variants.intrinsic`                                                                                                                                                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.scoringProfiles.properties.text.variants.intrinsic`                                                                                                                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.scoringProfiles.properties.text.variants.intrinsic`                                                                                                                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.corsOptions.variants.intrinsic`                                                                                                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.corsOptions.variants.intrinsic`                                                                                                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.similarity.variants.#Microsoft.Azure.Search.BM25Similarity.properties.k1.variants.intrinsic`                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.similarity.variants.#Microsoft.Azure.Search.BM25Similarity.properties.k1.variants.intrinsic`                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.similarity.variants.#Microsoft.Azure.Search.BM25Similarity.properties.b.variants.intrinsic`                                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.similarity.variants.#Microsoft.Azure.Search.BM25Similarity.properties.b.variants.intrinsic`                                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.semantic.variants.intrinsic`                                                                                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.semantic.variants.intrinsic`                                                                                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.vectorSearch.variants.Search.VectorSearch.properties.vectorizers.variants.customWebApi.properties.customWebApiParameters.properties.authIdentity.variants.intrinsic`                                                              | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.vectorSearch.variants.Search.VectorSearch.properties.vectorizers.variants.customWebApi.properties.customWebApiParameters.properties.authIdentity.variants.intrinsic`                                                              | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.vectorSearch.variants.Search.VectorSearch.properties.vectorizers.variants.aiServicesVision.properties.aiServicesVisionParameters.properties.authIdentity.variants.intrinsic`                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.vectorSearch.variants.Search.VectorSearch.properties.vectorizers.variants.aiServicesVision.properties.aiServicesVisionParameters.properties.authIdentity.variants.intrinsic`                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.vectorSearch.variants.intrinsic`                                                                                                                                                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.vectorSearch.variants.intrinsic`                                                                                                                                                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.value.properties.corsOptions.variants.intrinsic`                                                                                                                                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.value.properties.corsOptions.variants.intrinsic`                                                                                                                                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.value.properties.encryptionKey.variants.intrinsic`                                                                                                                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.value.properties.encryptionKey.variants.intrinsic`                                                                                                                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.value.properties.semantic.variants.intrinsic`                                                                                                                                                                                     | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.value.properties.semantic.variants.intrinsic`                                                                                                                                                                                     | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.value.properties.vectorSearch.variants.intrinsic`                                                                                                                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.value.properties.vectorSearch.variants.intrinsic`                                                                                                                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.value.properties.permissionFilterOption.variants.intrinsic`                                                                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.value.properties.permissionFilterOption.variants.intrinsic`                                                                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.value.properties.purviewEnabled.variants.intrinsic`                                                                                                                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.value.properties.purviewEnabled.variants.intrinsic`                                                                                                                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.vectorSearch.variants.Search.VectorSearchCreateOrUpdate.properties.vectorizers.variants.customWebApi.properties.customWebApiParameters.properties.authIdentity.variants.intrinsic`                                                | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.vectorSearch.variants.Search.VectorSearchCreateOrUpdate.properties.vectorizers.variants.customWebApi.properties.customWebApiParameters.properties.authIdentity.variants.intrinsic`                                                | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.vectorSearch.variants.Search.VectorSearchCreateOrUpdate.properties.vectorizers.variants.aiServicesVision.properties.aiServicesVisionParameters.properties.authIdentity.variants.intrinsic`                                        | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.vectorSearch.variants.Search.VectorSearchCreateOrUpdate.properties.vectorizers.variants.aiServicesVision.properties.aiServicesVisionParameters.properties.authIdentity.variants.intrinsic`                                        | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.value.variants.azureBlob.properties.azureBlobParameters.properties.folderPath.variants.intrinsic`                                                                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.value.variants.azureBlob.properties.azureBlobParameters.properties.folderPath.variants.intrinsic`                                                                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.value.variants.azureBlob.properties.azureBlobParameters.properties.ingestionParameters.variants.Search.KnowledgeSourceIngestionParameters.properties.identity.variants.intrinsic`                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.value.variants.azureBlob.properties.azureBlobParameters.properties.ingestionParameters.variants.Search.KnowledgeSourceIngestionParameters.properties.identity.variants.intrinsic`                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.value.variants.azureBlob.properties.azureBlobParameters.properties.ingestionParameters.variants.Search.KnowledgeSourceIngestionParameters.properties.embeddingModel.variants.intrinsic`                                           | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.value.variants.azureBlob.properties.azureBlobParameters.properties.ingestionParameters.variants.Search.KnowledgeSourceIngestionParameters.properties.embeddingModel.variants.intrinsic`                                           | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.value.variants.azureBlob.properties.azureBlobParameters.properties.ingestionParameters.variants.Search.KnowledgeSourceIngestionParameters.properties.chatCompletionModel.variants.intrinsic`                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.value.variants.azureBlob.properties.azureBlobParameters.properties.ingestionParameters.variants.Search.KnowledgeSourceIngestionParameters.properties.chatCompletionModel.variants.intrinsic`                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.value.variants.azureBlob.properties.azureBlobParameters.properties.ingestionParameters.variants.Search.KnowledgeSourceIngestionParameters.properties.ingestionSchedule.variants.intrinsic`                                        | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.value.variants.azureBlob.properties.azureBlobParameters.properties.ingestionParameters.variants.Search.KnowledgeSourceIngestionParameters.properties.ingestionSchedule.variants.intrinsic`                                        | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.value.variants.azureBlob.properties.azureBlobParameters.properties.ingestionParameters.variants.Search.KnowledgeSourceIngestionParameters.properties.ingestionPermissionOptions.variants.intrinsic`                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.value.variants.azureBlob.properties.azureBlobParameters.properties.ingestionParameters.variants.Search.KnowledgeSourceIngestionParameters.properties.ingestionPermissionOptions.variants.intrinsic`                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.value.variants.azureBlob.properties.azureBlobParameters.properties.ingestionParameters.variants.Search.KnowledgeSourceIngestionParameters.properties.contentExtractionMode.variants.intrinsic`                                    | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.value.variants.azureBlob.properties.azureBlobParameters.properties.ingestionParameters.variants.Search.KnowledgeSourceIngestionParameters.properties.contentExtractionMode.variants.intrinsic`                                    | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.value.variants.azureBlob.properties.azureBlobParameters.properties.ingestionParameters.variants.Search.KnowledgeSourceIngestionParameters.properties.aiServices.variants.intrinsic`                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.value.variants.azureBlob.properties.azureBlobParameters.properties.ingestionParameters.variants.Search.KnowledgeSourceIngestionParameters.properties.aiServices.variants.intrinsic`                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.value.variants.azureBlob.properties.azureBlobParameters.properties.ingestionParameters.variants.intrinsic`                                                                                                                        | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.value.variants.azureBlob.properties.azureBlobParameters.properties.ingestionParameters.variants.intrinsic`                                                                                                                        | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.value.variants.indexedSharePoint.properties.indexedSharePointParameters.properties.query.variants.intrinsic`                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.value.variants.indexedSharePoint.properties.indexedSharePointParameters.properties.query.variants.intrinsic`                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.value.variants.indexedSharePoint.properties.indexedSharePointParameters.properties.ingestionParameters.variants.intrinsic`                                                                                                        | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.value.variants.indexedSharePoint.properties.indexedSharePointParameters.properties.ingestionParameters.variants.intrinsic`                                                                                                        | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.value.variants.indexedOneLake.properties.indexedOneLakeParameters.properties.targetPath.variants.intrinsic`                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.value.variants.indexedOneLake.properties.indexedOneLakeParameters.properties.targetPath.variants.intrinsic`                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.synchronizationInterval.variants.intrinsic`                                                                                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.synchronizationInterval.variants.intrinsic`                                                                                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.currentSynchronizationState.variants.intrinsic`                                                                                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.currentSynchronizationState.variants.intrinsic`                                                                                                                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.lastSynchronizationState.variants.intrinsic`                                                                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.lastSynchronizationState.variants.intrinsic`                                                                                                                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.statistics.variants.intrinsic`                                                                                                                                                                                                    | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.statistics.variants.intrinsic`                                                                                                                                                                                                    | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.answers.variants.TypeSpec.Array.properties.highlights.variants.intrinsic`                                                                                                                                                         | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.answers.variants.TypeSpec.Array.properties.highlights.variants.intrinsic`                                                                                                                                                         | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.answers.variants.intrinsic`                                                                                                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.answers.variants.intrinsic`                                                                                                                                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.debugInfo.variants.intrinsic`                                                                                                                                                                                                     | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.debugInfo.variants.intrinsic`                                                                                                                                                                                                     | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.value.properties.rerankerScore.variants.intrinsic`                                                                                                                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.value.properties.rerankerScore.variants.intrinsic`                                                                                                                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.value.properties.rerankerBoostedScore.variants.intrinsic`                                                                                                                                                                         | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.value.properties.rerankerBoostedScore.variants.intrinsic`                                                                                                                                                                         | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.value.properties.captions.variants.intrinsic`                                                                                                                                                                                     | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.value.properties.captions.variants.intrinsic`                                                                                                                                                                                     | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.value.properties.documentDebugInfo.variants.intrinsic`                                                                                                                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.value.properties.documentDebugInfo.variants.intrinsic`                                                                                                                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |

#### 2026-04-01 → 2026-05-01-preview

| Kind                                                                                                                                                                                                      | Identity                                                                                                                                                                                                                                                                         | Suppression                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.identity.variants.SearchIndexerDataIdentityUnionCreateOrUpdate.variants.#Microsoft.Azure.Search.DataUserAssignedIdentity.properties.federatedIdentityClientId`                                                                                                  | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.encryptionKey.variants.Search.SearchResourceEncryptionKeyCreateOrUpdate.properties.isServiceLevelKey`                                                                                                                                                           | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.indexerPermissionOptions`                                                                                                                                                                                                                                       | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.cache`                                                                                                                                                                                                                                                          | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.skills.variants.#Microsoft.Skills.Text.SplitSkill.properties.unit`                                                                                                                                                                                              | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.skills.variants.#Microsoft.Skills.Text.SplitSkill.properties.azureOpenAITokenizerParameters`                                                                                                                                                                    | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.skills.variants.#Microsoft.Skills.Text.AzureOpenAIEmbeddingSkill.properties.modelName.variants.Gpt4o`                                                                                                                                                           | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.skills.variants.#Microsoft.Skills.Util.ContentUnderstandingSkill.properties.chunkingProperties.variants.Search.ContentUnderstandingSkillChunkingPropertiesCreateOrUpdate.properties.unit.variants.Search.ContentUnderstandingSkillChunkingUnit.variants.Tokens` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.skills.variants.#Microsoft.Skills.Util.ContentUnderstandingSkill.properties.chunkingProperties.variants.Search.ContentUnderstandingSkillChunkingPropertiesCreateOrUpdate.properties.method`                                                                     | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.skills.variants.#Microsoft.Skills.Util.ContentUnderstandingSkill.properties.modelName`                                                                                                                                                                          | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.skills.variants.#Microsoft.Skills.Util.ContentUnderstandingSkill.properties.modelDeployment`                                                                                                                                                                    | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.knowledgeStore.properties.parameters`                                                                                                                                                                                                                           | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.fields.properties.permissionFilter`                                                                                                                                                                                                                             | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.fields.properties.sensitivityLabelId`                                                                                                                                                                                                                           | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.fields.properties.sensitivityLabelName`                                                                                                                                                                                                                         | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.fields.properties.sourceDocumentId`                                                                                                                                                                                                                             | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.fields.properties.sharepointSiteUrl`                                                                                                                                                                                                                            | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.semantic.variants.Search.SemanticSearchCreate.properties.configurations.properties.flightingOptIn`                                                                                                                                                              | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.permissionFilterOption`                                                                                                                                                                                                                                         | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.purviewEnabled`                                                                                                                                                                                                                                                 | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.sharePointConnectorAppRegistration`                                                                                                                                                                                                                             | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.knowledgeSources.properties.enableImageServing`                                                                                                                                                                                                                 | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.knowledgeSources.properties.enableFreshness`                                                                                                                                                                                                                    | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.retrievalReasoningEffort`                                                                                                                                                                                                                                       | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.outputMode`                                                                                                                                                                                                                                                     | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.retrievalInstructions`                                                                                                                                                                                                                                          | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.answerInstructions`                                                                                                                                                                                                                                             | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.corsOptions`                                                                                                                                                                                                                                                    | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.kind.variants.IndexedSharePoint`                                                                                                                                                                                                                                | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.vectorQueries.variants.text.properties.queryRewrites`                                                                                                                                                                                                           | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.queryLanguage`                                                                                                                                                                                                                                                  | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.speller`                                                                                                                                                                                                                                                        | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.queryRewrites`                                                                                                                                                                                                                                                  | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.semanticFields`                                                                                                                                                                                                                                                 | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.hybridSearch`                                                                                                                                                                                                                                                   | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.skills.variants.#Microsoft.Skills.Custom.AmlSkill`                                                                                                                                                                                                              | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.vectorSearch.variants.Search.VectorSearch.properties.vectorizers.variants.aiServicesVision`                                                                                                                                                                     | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.value.variants.indexedSharePoint`                                                                                                                                                                                                                               | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.activity.variants.agenticReasoning.properties.retrievalReasoningEffort.variants.low`                                                                                                                                                                            | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.activity.variants.indexedSharePoint`                                                                                                                                                                                                                            | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.references.variants.indexedSharePoint`                                                                                                                                                                                                                          | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })` |

#### 2026-04-01 → 2026-08-01-preview

| Kind                                                                                                                                                                                                      | Identity                                                                                                                                                                                                                                                                         | Suppression                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.identity.variants.SearchIndexerDataIdentityUnionCreateOrUpdate.variants.#Microsoft.Azure.Search.DataUserAssignedIdentity.properties.federatedIdentityClientId`                                                                                                  | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.encryptionKey.variants.Search.SearchResourceEncryptionKeyCreateOrUpdate.properties.isServiceLevelKey`                                                                                                                                                           | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.indexerPermissionOptions`                                                                                                                                                                                                                                       | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.cache`                                                                                                                                                                                                                                                          | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.skills.variants.#Microsoft.Skills.Text.SplitSkill.properties.unit`                                                                                                                                                                                              | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.skills.variants.#Microsoft.Skills.Text.SplitSkill.properties.azureOpenAITokenizerParameters`                                                                                                                                                                    | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.skills.variants.#Microsoft.Skills.Text.AzureOpenAIEmbeddingSkill.properties.modelName.variants.Gpt4o`                                                                                                                                                           | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.skills.variants.#Microsoft.Skills.Util.ContentUnderstandingSkill.properties.chunkingProperties.variants.Search.ContentUnderstandingSkillChunkingPropertiesCreateOrUpdate.properties.unit.variants.Search.ContentUnderstandingSkillChunkingUnit.variants.Tokens` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.skills.variants.#Microsoft.Skills.Util.ContentUnderstandingSkill.properties.chunkingProperties.variants.Search.ContentUnderstandingSkillChunkingPropertiesCreateOrUpdate.properties.method`                                                                     | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.skills.variants.#Microsoft.Skills.Util.ContentUnderstandingSkill.properties.modelName`                                                                                                                                                                          | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.skills.variants.#Microsoft.Skills.Util.ContentUnderstandingSkill.properties.modelDeployment`                                                                                                                                                                    | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.knowledgeStore.properties.parameters`                                                                                                                                                                                                                           | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.fields.properties.permissionFilter`                                                                                                                                                                                                                             | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.fields.properties.sensitivityLabelId`                                                                                                                                                                                                                           | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.fields.properties.sensitivityLabelName`                                                                                                                                                                                                                         | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.fields.properties.sourceDocumentId`                                                                                                                                                                                                                             | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.fields.properties.sharepointSiteUrl`                                                                                                                                                                                                                            | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.semantic.variants.Search.SemanticSearchCreate.properties.configurations.properties.flightingOptIn`                                                                                                                                                              | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.permissionFilterOption`                                                                                                                                                                                                                                         | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.purviewEnabled`                                                                                                                                                                                                                                                 | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.sharePointConnectorAppRegistration`                                                                                                                                                                                                                             | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.knowledgeSources.properties.enableImageServing`                                                                                                                                                                                                                 | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.knowledgeSources.properties.enableFreshness`                                                                                                                                                                                                                    | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.retrievalReasoningEffort`                                                                                                                                                                                                                                       | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.outputMode`                                                                                                                                                                                                                                                     | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.tags`                                                                                                                                                                                                                                                           | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.retrievalInstructions`                                                                                                                                                                                                                                          | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.answerInstructions`                                                                                                                                                                                                                                             | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.corsOptions`                                                                                                                                                                                                                                                    | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.retrieveDefaults`                                                                                                                                                                                                                                               | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.kind.variants.IndexedSharePoint`                                                                                                                                                                                                                                | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.resultsProcessing`                                                                                                                                                                                                                                              | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.vectorQueries.variants.text.properties.queryRewrites`                                                                                                                                                                                                           | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.queryLanguage`                                                                                                                                                                                                                                                  | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.speller`                                                                                                                                                                                                                                                        | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.queryRewrites`                                                                                                                                                                                                                                                  | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.semanticFields`                                                                                                                                                                                                                                                 | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.hybridSearch`                                                                                                                                                                                                                                                   | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.skills.variants.#Microsoft.Skills.Custom.AmlSkill`                                                                                                                                                                                                              | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.vectorSearch.variants.Search.VectorSearch.properties.vectorizers.variants.aiServicesVision`                                                                                                                                                                     | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.value.variants.indexedSharePoint`                                                                                                                                                                                                                               | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })` |
| [`ResponseStatusCodeRemoved`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)   | `body`                                                                                                                                                                                                                                                                           | `@approvedBreakingChange("your reason here", #{ kind: "ResponseStatusCodeRemoved" })`   |
| [`ResponseContentTypeRemoved`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)  | `body`                                                                                                                                                                                                                                                                           | `@approvedBreakingChange("your reason here", #{ kind: "ResponseContentTypeRemoved" })`  |

#### 2026-05-01-preview (base → head)

| Kind                                                                                                                                                                                                                                                                  | Identity                                          | Suppression                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.errorMessage.variants.intrinsic` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.errorMessage.variants.intrinsic` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |

#### 2026-08-01-preview (base → head)

| Kind                                                                                                                                                                                                                                                                  | Identity                                                                                 | Suppression                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.limits.properties.maxVectorIndexSizePerIndexInBytes.variants.intrinsic` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.limits.properties.maxVectorIndexSizePerIndexInBytes.variants.intrinsic` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |

<details>
<summary>Suppression examples</summary>

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchDataSourceOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchIndexerOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchIndexerOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchIndexerOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchIndexerOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchIndexerOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op getServiceStatistics is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op getServiceStatistics is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op getServiceStatistics is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op getServiceStatistics is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op getServiceStatistics is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op getServiceStatistics is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op getServiceStatistics is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op getServiceStatistics is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchDataSourceOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchDataSourceOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchDataSourceOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchDataSourceOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchDataSourceOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchDataSourceOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchDataSourceOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchDataSourceOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchDataSourceOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchDataSourceOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  create is SearchOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  resync is SearchIndexerOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchIndexerOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchIndexerOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchIndexerOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchIndexerOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchIndexerOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchIndexerOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchIndexerOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchIndexerOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchIndexerOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchIndexerOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchIndexerOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchIndexerOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchIndexerOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchIndexerOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchIndexerOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchIndexerOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  create is SearchOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  create is SearchOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  create is SearchOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  create is SearchOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  getStatus is SearchIndexerOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  getStatus is SearchIndexerOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createOrUpdate is SearchSkillsetOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  create is SearchOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  create is SearchOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  create is SearchOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  create is SearchOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  create is SearchOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  create is SearchOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  create is SearchOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  create is SearchOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  create is SearchOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  create is SearchOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  create is SearchOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  create is SearchOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  create is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  listWithSelectedPropertiesOffsetPaged is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  listWithSelectedPropertiesOffsetPaged is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  listWithSelectedPropertiesOffsetPaged is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  listWithSelectedPropertiesOffsetPaged is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  listWithSelectedPropertiesOffsetPaged is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  listWithSelectedPropertiesOffsetPaged is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchIndexOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is SearchIndexOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  list is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  list is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  list is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  list is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  list is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  list is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  list is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  list is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  list is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  list is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  list is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  list is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  getStatus is SearchSourceOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  getStatus is SearchSourceOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  getStatus is SearchSourceOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  getStatus is SearchSourceOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  searchGet is SearchIndexOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  searchGet is SearchIndexOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  searchGet is SearchIndexOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  searchGet is SearchIndexOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  searchGet is SearchIndexOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  searchGet is SearchIndexOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  searchGet is SearchIndexOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResourcePropertyAdded (federatedIdentityClientId):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  federatedIdentityClientId?: string;
```

**ResourcePropertyAdded (isServiceLevelKey):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  isServiceLevelKey?: boolean = false;
```

**ResourcePropertyAdded (indexerPermissionOptions):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  indexerPermissionOptions?: IndexerPermissionOption[] | null;
```

**ResourcePropertyAdded (cache):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  cache?: SearchIndexerCache | null;
```

**ResourcePropertyAdded (unit):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  unit?: SplitSkillUnit | null;
```

**ResourcePropertyAdded (azureOpenAITokenizerParameters):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  azureOpenAITokenizerParameters?: AzureOpenAITokenizerParameters | null;
```

**ResourcePropertyTypeWidened (Gpt4o):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened" })
  Gpt4o: "gpt-4o",
```

**ResourcePropertyTypeWidened (Tokens):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened" })
  Tokens: "tokens",
```

**ResourcePropertyAdded (method):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  method?: ContentUnderstandingSkillChunkingMethod = ContentUnderstandingSkillChunkingMethod.FixedSize;
```

**ResourcePropertyAdded (modelName):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  modelName?: string;
```

**ResourcePropertyAdded (modelDeployment):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  modelDeployment?: string;
```

**ResourcePropertyAdded (parameters):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  parameters?: SearchIndexerKnowledgeStoreParameters;
```

**ResourcePropertyAdded (permissionFilter):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  permissionFilter?: PermissionFilter | null;
```

**ResourcePropertyAdded (sensitivityLabelId):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  sensitivityLabelId?: boolean;
```

**ResourcePropertyAdded (sensitivityLabelName):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  sensitivityLabelName?: boolean;
```

**ResourcePropertyAdded (sourceDocumentId):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  sourceDocumentId?: boolean;
```

**ResourcePropertyAdded (sharepointSiteUrl):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  sharepointSiteUrl?: boolean;
```

**ResourcePropertyAdded (flightingOptIn):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  flightingOptIn?: boolean = false;
```

**ResourcePropertyAdded (permissionFilterOption):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  permissionFilterOption?: SearchIndexPermissionFilterOption | null;
```

**ResourcePropertyAdded (purviewEnabled):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  purviewEnabled?: boolean | null;
```

**ResourcePropertyAdded (sharePointConnectorAppRegistration):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  sharePointConnectorAppRegistration?: SharePointConnectorAppRegistration;
```

**ResourcePropertyAdded (enableImageServing):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  enableImageServing?: boolean;
```

**ResourcePropertyAdded (enableFreshness):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  enableFreshness?: boolean;
```

**ResourcePropertyAdded (retrievalReasoningEffort):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  retrievalReasoningEffort?: KnowledgeRetrievalReasoningEffort;
```

**ResourcePropertyAdded (outputMode):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  outputMode?: KnowledgeRetrievalOutputMode;
```

**ResourcePropertyAdded (retrievalInstructions):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  retrievalInstructions?: string;
```

**ResourcePropertyAdded (answerInstructions):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  answerInstructions?: string;
```

**ResourcePropertyAdded (corsOptions):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  corsOptions?: CorsOptions;
```

**ResourcePropertyTypeWidened (IndexedSharePoint):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened" })
  IndexedSharePoint: "indexedSharePoint",
```

**ResourcePropertyAdded (queryRewrites):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  queryRewrites?: QueryRewritesType;
```

**ResourcePropertyAdded (queryLanguage):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  queryLanguage?: QueryLanguage;
```

**ResourcePropertyAdded (speller):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  speller?: QuerySpellerType;
```

**ResourcePropertyAdded (queryRewrites):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  queryRewrites?: QueryRewritesType;
```

**ResourcePropertyAdded (semanticFields):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  semanticFields?: string[];
```

**ResourcePropertyAdded (hybridSearch):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  hybridSearch?: HybridSearch;
```

**ResponsePropertyTypeWidened (AmlSkill):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeWidened (aiServicesVision):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeWidened (indexedSharePoint):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeWidened (low):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeWidened (indexedSharePoint):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeWidened (indexedSharePoint):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResourcePropertyAdded (federatedIdentityClientId):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  federatedIdentityClientId?: string;
```

**ResourcePropertyAdded (isServiceLevelKey):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  isServiceLevelKey?: boolean = false;
```

**ResourcePropertyAdded (indexerPermissionOptions):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  indexerPermissionOptions?: IndexerPermissionOption[] | null;
```

**ResourcePropertyAdded (cache):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  cache?: SearchIndexerCache | null;
```

**ResourcePropertyAdded (unit):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  unit?: SplitSkillUnit | null;
```

**ResourcePropertyAdded (azureOpenAITokenizerParameters):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  azureOpenAITokenizerParameters?: AzureOpenAITokenizerParameters | null;
```

**ResourcePropertyTypeWidened (Gpt4o):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened" })
  Gpt4o: "gpt-4o",
```

**ResourcePropertyTypeWidened (Tokens):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened" })
  Tokens: "tokens",
```

**ResourcePropertyAdded (method):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  method?: ContentUnderstandingSkillChunkingMethod = ContentUnderstandingSkillChunkingMethod.FixedSize;
```

**ResourcePropertyAdded (modelName):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  modelName?: string;
```

**ResourcePropertyAdded (modelDeployment):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  modelDeployment?: string;
```

**ResourcePropertyAdded (parameters):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  parameters?: SearchIndexerKnowledgeStoreParameters;
```

**ResourcePropertyAdded (permissionFilter):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  permissionFilter?: PermissionFilter | null;
```

**ResourcePropertyAdded (sensitivityLabelId):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  sensitivityLabelId?: boolean;
```

**ResourcePropertyAdded (sensitivityLabelName):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  sensitivityLabelName?: boolean;
```

**ResourcePropertyAdded (sourceDocumentId):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  sourceDocumentId?: boolean;
```

**ResourcePropertyAdded (sharepointSiteUrl):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  sharepointSiteUrl?: boolean;
```

**ResourcePropertyAdded (flightingOptIn):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  flightingOptIn?: boolean = false;
```

**ResourcePropertyAdded (permissionFilterOption):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  permissionFilterOption?: SearchIndexPermissionFilterOption | null;
```

**ResourcePropertyAdded (purviewEnabled):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  purviewEnabled?: boolean | null;
```

**ResourcePropertyAdded (sharePointConnectorAppRegistration):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  sharePointConnectorAppRegistration?: SharePointConnectorAppRegistration;
```

**ResourcePropertyAdded (enableImageServing):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  enableImageServing?: boolean;
```

**ResourcePropertyAdded (enableFreshness):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  enableFreshness?: boolean;
```

**ResourcePropertyAdded (retrievalReasoningEffort):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  retrievalReasoningEffort?: KnowledgeRetrievalReasoningEffort;
```

**ResourcePropertyAdded (outputMode):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  outputMode?: KnowledgeRetrievalOutputMode;
```

**ResourcePropertyAdded (tags):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  tags?: Record<string>;
```

**ResourcePropertyAdded (retrievalInstructions):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  retrievalInstructions?: string;
```

**ResourcePropertyAdded (answerInstructions):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  answerInstructions?: string;
```

**ResourcePropertyAdded (corsOptions):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  corsOptions?: CorsOptions;
```

**ResourcePropertyAdded (retrieveDefaults):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  retrieveDefaults?: KnowledgeBaseRetrieveDefaults;
```

**ResourcePropertyTypeWidened (IndexedSharePoint):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened" })
  IndexedSharePoint: "indexedSharePoint",
```

**ResourcePropertyAdded (resultsProcessing):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  resultsProcessing?: KnowledgeSourceResultsProcessing;
```

**ResourcePropertyAdded (queryRewrites):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  queryRewrites?: QueryRewritesType;
```

**ResourcePropertyAdded (queryLanguage):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  queryLanguage?: QueryLanguage;
```

**ResourcePropertyAdded (speller):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  speller?: QuerySpellerType;
```

**ResourcePropertyAdded (queryRewrites):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  queryRewrites?: QueryRewritesType;
```

**ResourcePropertyAdded (semanticFields):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  semanticFields?: string[];
```

**ResourcePropertyAdded (hybridSearch):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  hybridSearch?: HybridSearch;
```

**ResponsePropertyTypeWidened (AmlSkill):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeWidened (aiServicesVision):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeWidened (indexedSharePoint):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponseStatusCodeRemoved (body):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponseStatusCodeRemoved" })
  retrieveStream is Foundations.Operation<
```

**ResponseContentTypeRemoved (body):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponseContentTypeRemoved" })
  retrieveStream is Foundations.Operation<
```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  uploadFile is SearchSourceOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op getServiceStatistics is SearchOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

</details>

<details>
<summary>Version Comparisons</summary>

| Service | Version Pair                     | Phase         | Result           |
| ------- | -------------------------------- | ------------- | ---------------- |
| Search  | 2025-11-01-preview (base → head) | Same-version  | ❌ 1838 findings |
| Search  | 2026-04-01 (base → head)         | Same-version  | ❌ 1514 findings |
| Search  | 2026-05-01-preview (base → head) | Same-version  | ❌ 1840 findings |
| Search  | 2026-08-01-preview (base → head) | Same-version  | ❌ 1846 findings |
| Search  | 2026-04-01 → 2026-05-01-preview  | Cross-version | ❌ 142 findings  |
| Search  | 2026-04-01 → 2026-08-01-preview  | Cross-version | ❌ 180 findings  |

</details>

<details>
<summary>Performance</summary>

Total: 29.2s · Version mutators: 11.3s · Diff engine: 17.8s · Classify: 18ms

</details>
