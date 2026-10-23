export type ProjectClassification = "main-bearing" | "client-only";
export type ProjectStatus = "succeeded" | "zero-resource" | "failed" | "skipped";

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

export interface OutputHashes {
  resourcesCsv?: string;
  operationsCsv?: string;
  statusJson: string;
  errorsMd?: string;
}

export interface ProjectResult {
  service: string;
  projectRoot: string;
  entrypoint: string | null;
  classification: ProjectClassification;
  status: ProjectStatus;
  resourceCount: number;
  operationCount: number;
  caseOnlyClashCount: number;
  genuineClashCount: number;
  sourceSha: string;
  dependencyLockHash: string;
  projectInputHash: string;
  toolVersion: string;
  compilerVersion: string;
  armLibraryVersion: string;
  diagnostics: DiagnosticSummary;
  outputHashes: OutputHashes;
  error?: string;
}

export interface Manifest {
  schemaVersion: 1;
  generatedAt: string;
  repository: string;
  sourceSha: string;
  dependencyLockHash: string;
  toolVersion: string;
  nodeVersion: string;
  compilerVersion: string;
  armLibraryVersion: string;
  summary: ManifestSummary;
  projects: ProjectResult[];
}

export interface ManifestSummary {
  projects: number;
  succeeded: number;
  zeroResource: number;
  failed: number;
  skipped: number;
  resources: number;
  operations: number;
  caseOnlyClashRecords: number;
  genuineClashRecords: number;
  caseOnlyClashProjects: number;
  genuineClashProjects: number;
}
