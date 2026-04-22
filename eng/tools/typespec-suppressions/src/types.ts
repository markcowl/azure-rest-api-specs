export interface SourceLocation {
  line: number;
  column: number;
}

export interface SuppressionRecord {
  specPath: string;
  sourceKind: "inline" | "tspconfig";
  ruleName: string;
  justification: string;
  sourceFile: string;
  anchorPath: string;
  location: SourceLocation;
  rawText: string;
}

export interface SuppressionChange {
  before: SuppressionRecord;
  after: SuppressionRecord;
}

export interface SpecSuppressionReport {
  specPath: string;
  baseSuppressions: SuppressionRecord[];
  headSuppressions: SuppressionRecord[];
  newSuppressions: SuppressionRecord[];
  removedSuppressions: SuppressionRecord[];
  changedSuppressions: SuppressionChange[];
  unchangedSuppressions: SuppressionRecord[];
}

export interface SuppressionCounts {
  specs: number;
  base: number;
  head: number;
  new: number;
  removed: number;
  changed: number;
  unchanged: number;
}

export interface SuppressionReport {
  repoRoot: string;
  baseRevision: string;
  headRevision: string;
  specPaths: string[];
  requiresApproval: boolean;
  counts: SuppressionCounts;
  specs: SpecSuppressionReport[];
  newSuppressions: SuppressionRecord[];
  removedSuppressions: SuppressionRecord[];
  changedSuppressions: SuppressionChange[];
}

export interface AnalyzeSuppressionsOptions {
  cwd?: string;
  baseRevision: string;
  headRevision: string;
  specPaths: string[];
}
