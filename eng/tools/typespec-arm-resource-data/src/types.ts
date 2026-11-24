export const targetRuleCode =
  "@azure-tools/typespec-azure-resource-manager/no-resource-name-conflict";
export const targetRuleShortName = "no-resource-name-conflict";
export const targetRuleDocumentationUrl =
  "https://azure.github.io/typespec-azure/docs/libraries/azure-resource-manager/rules/no-resource-name-conflict/";
export const referenceToolCommit = "59e16c42bb15e830d4c7cffc126a2ef2beae0b81";
export const verifiedRuleBehaviorCommit = "6a4865808cd7429cdb1ae1758ecc6b24212f89c9";

export type ProjectClassification = "main-bearing" | "client-only";
export type ProjectStatus =
  | "succeeded-findings"
  | "succeeded-clean"
  | "zero-resource"
  | "failed-compilation"
  | "timed-out"
  | "skipped-client-only"
  | "blocked-rule-unavailable";
export type CorrelationState = "matched" | "partial" | "unmatched";

export interface ProjectInventory {
  service: string;
  root: string;
  tspconfig: string;
  classification: ProjectClassification;
  main: string | null;
  client: string | null;
}

export interface ResourceRow {
  resourceKey: string;
  resourceType: string;
  resourceInstancePath: string;
  resourceName: string;
  resourceDefinition: string;
  bicepResource: boolean;
  readOperation: string;
  createOrUpdateOperation: string;
  nameClash: boolean;
  nameClashAnalysis: string;
  duplicateResourceError: boolean;
  duplicateResourceErrorAnalysis: string;
}

export interface OperationRow {
  operationKey: string;
  operationName: string;
  operationVerb: string;
  operationPath: string;
  operationKind: string;
  operationDefinition: string;
  resourceKey: string;
  resourceType: string;
  resourceInstancePath: string;
  resourceName: string;
}

export interface DiagnosticSummary {
  errors: number;
  warnings: number;
  total: number;
}

export interface DuplicateResourceErrorResource {
  resourceName: string;
  resourceType: string;
  sourceUrl: string;
}

export interface DuplicateResourceErrorGroup {
  normalizedInstancePath: string;
  resources: DuplicateResourceErrorResource[];
}

export type NameClashClassification = "case-only" | "genuine";

export interface NameClashResource {
  resourceType: string;
  resourceInstancePath: string;
  sourceUrl: string;
}

export interface NameClashGroup {
  resourceName: string;
  classification: NameClashClassification;
  resources: NameClashResource[];
}

export interface CorrelatedResource {
  resourceKey: string;
  resourceType: string;
  resourceInstancePath: string;
  resourceName: string;
  resourceDefinition: string;
  authoredSource: string;
  operations: OperationRow[];
}

export interface TargetRuleDiagnostic {
  findingId: string;
  code: string;
  severity: string;
  message: string;
  sourceFile: string;
  line: number;
  column: number;
  sourceUrl: string;
  projectRoot: string;
  entrypoint: string;
  service: string;
  resourceName: string;
  conflictingInstancePaths: string[];
  correlationState: CorrelationState;
  correlatedResources: CorrelatedResource[];
  correlationReason?: string;
  suggestedFix: string;
}

export interface OutputHashes {
  resourcesCsv?: string;
  operationsCsv?: string;
  diagnosticsJson?: string;
  statusJson: string;
  errorsMd?: string;
}

export interface ArmLibraryProvenance {
  packageUrl: string;
  packageVersion: string;
  packageIntegrity: string;
  packageSha256: string;
  pullRequest: number;
  prHeadSha: string;
}

export interface ProjectResult {
  service: string;
  projectRoot: string;
  entrypoint: string | null;
  classification: ProjectClassification;
  status: ProjectStatus;
  resourceCount: number;
  operationCount: number;
  diagnosticCount: number;
  findingCount: number;
  affectedLogicalNames: string[];
  correlatedResourceCount: number;
  matchedDiagnosticCount: number;
  partialDiagnosticCount: number;
  unmatchedDiagnosticCount: number;
  targetDiagnostics: TargetRuleDiagnostic[];
  reportDirectory: string;
  sourceSha: string;
  sourceLockHash: string;
  reportLockHash: string;
  projectInputHash: string;
  toolVersion: string;
  toolSourceCommit: string;
  compilerVersion: string;
  armLibraryVersion: string;
  rulesetVersion: string;
  armLibraryProvenance?: ArmLibraryProvenance;
  diagnostics: DiagnosticSummary;
  outputHashes: OutputHashes;
  error?: string;
}

export interface TargetRuleMetadata {
  code: string;
  shortName: string;
  documentationUrl: string;
  severity: string;
  enabledByDefault: boolean;
  installedPackage: string;
  verifiedBehaviorCommit: string;
}

export interface InventoryReconciliation {
  configuredTypeSpecProjects: number;
  configuredArmProjects: number;
  discoveredArmProjects: number;
  missingFromReportInventory: string[];
  reportOnlyProjects: string[];
  explanation: string;
}

export interface Manifest {
  schemaVersion: 6;
  repository: string;
  sourceSha: string;
  sourceTimestamp: string;
  generationTimestamp: string;
  reportId: string;
  sourceLockHash: string;
  reportLockHash: string;
  customTool: {
    packageName: string;
    packageVersion: string;
    referenceCommit: string;
    sourceCommit: string;
  };
  nodeVersion: string;
  pnpmVersion: string;
  compilerVersion: string;
  armLibraryVersion: string;
  rulesetVersion: string;
  armLibraryProvenance?: ArmLibraryProvenance;
  targetRule: TargetRuleMetadata;
  reportDirectory: string;
  inventory: InventoryReconciliation;
  summary: ManifestSummary;
  aggregateOutputHashes: {
    readmeMd: string;
  };
  projects: ProjectResult[];
}

export interface ManifestSummary {
  discovered: number;
  attempted: number;
  succeeded: number;
  clean: number;
  affected: number;
  zeroResource: number;
  failed: number;
  timedOut: number;
  skipped: number;
  blocked: number;
  resources: number;
  operations: number;
  diagnostics: number;
  findings: number;
  affectedLogicalNames: number;
  correlatedResourceRecords: number;
  matchedDiagnostics: number;
  partialDiagnostics: number;
  unmatchedDiagnostics: number;
}
