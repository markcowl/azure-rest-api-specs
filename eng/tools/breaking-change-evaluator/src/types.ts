import type { OadRuleCode } from "../../openapi-diff-runner/src/types/oad-types.ts";

export type Phase = "A" | "B";
export type EvaluationStatus = "evaluated" | "partial" | "not-qualified" | "failed";
export type MatchCategory =
  | "exact"
  | "probable-review"
  | "intentional-swagger-only"
  | "missed-equivalent"
  | "typespec-only"
  | "ambiguous"
  | "errors";

export type ReasonCode =
  | "unsupported-repository"
  | "pull-request-not-open-or-merged"
  | "no-typespec-changes"
  | "missing-phase-a-run"
  | "missing-phase-b-run"
  | "incomplete-phase-a-run"
  | "incomplete-phase-b-run"
  | "missing-run-logs"
  | "missing-job-summary"
  | "evidence-incomplete"
  | "run-association-unverified"
  | "invalid-oad-output";

export interface PrReference {
  owner: string;
  repo: string;
  number: number;
}

export interface QualificationEvidence {
  prUrl?: string;
  state?: string;
  merged?: boolean;
  headSha?: string;
  baseSha?: string;
  changedTypeSpecFiles?: string[];
  runs?: Partial<Record<Phase, RunEvidence>>;
  evidenceErrors?: string[];
}

export interface RunEvidence {
  id: number;
  name: string;
  headSha: string;
  status: string;
  conclusion: string | null;
  htmlUrl: string;
  logDigest?: string;
  summaryDigest?: string;
  oadVersion?: string;
}

export interface Qualification {
  qualified: boolean;
  reasonCodes: ReasonCode[];
  evidence: QualificationEvidence;
}

export interface SwaggerComparison {
  phase: Phase;
  oldPath: string;
  newPath: string;
  oldVersion?: string;
  newVersion?: string;
}

export interface OadFinding {
  occurrenceId: string;
  phase: Phase;
  id: string;
  rule: OadRuleCode;
  severity: string;
  message: string;
  oldPath?: string;
  newPath?: string;
  oldJsonPath?: string;
  newJsonPath?: string;
  comparison?: SwaggerComparison;
  evidence: string;
}

export interface TypeSpecFinding {
  occurrenceId: string;
  project: string;
  kind: string;
  rule: string;
  phase: string;
  severity: string;
  message: string;
  operation?: { method: string; path: string };
  element?: string;
  component?: string;
  statusCode?: string;
  versionPair: { baseVersion: string; headVersion: string };
  location?: { file: string; line: number };
}

export interface CanonicalTarget {
  project?: string;
  spec?: string;
  phase?: Phase;
  baseVersion?: string;
  headVersion?: string;
  method?: string;
  route?: string;
  operationId?: string;
  direction?: "request" | "response";
  parameterLocation?: string;
  parameterName?: string;
  statusCode?: string;
  headerName?: string;
  propertyPath?: string[];
  schema?: string;
  declaration?: string;
  element?: string;
  source?: { file: string; line?: number };
  evidence: string[];
}

export interface MatchCandidate {
  typeSpecOccurrenceId: string;
  target: CanonicalTarget;
  score: number;
  exactIdentity: string[];
  scoreEvidence: string[];
  rejectionReasons: string[];
}

export interface MatchTrace {
  oadOccurrenceId: string;
  target: CanonicalTarget;
  targets: CanonicalTarget[];
  candidates: MatchCandidate[];
  selectedTypeSpecOccurrenceIds: string[];
  category: MatchCategory;
  reviewRequired: boolean;
}

export interface Rollup {
  oadTotal: number;
  typeSpecTotal: number;
  exact: number;
  probableReview: number;
  intentionalSwaggerOnly: number;
  missedEquivalent: number;
  typeSpecOnly: number;
  ambiguous: number;
  errors: number;
  exactRecall?: number;
  probableInclusiveRecall?: number;
}

export interface ProjectResult {
  project: string;
  status: "complete" | "error";
  exitCode?: number;
  reportDigest?: string;
  findings: TypeSpecFinding[];
  error?: string;
}

export interface EvaluationReport {
  schemaVersion: 1;
  status: EvaluationStatus;
  complete: boolean;
  generatedAt: string;
  qualification: Qualification;
  provenance: {
    pr?: { url: string; headSha: string; baseSha: string };
    tool?: { sourceSha: string; artifactDigest: string };
  };
  dimensions: { phase: Phase; project: string; baseVersion?: string; headVersion?: string }[];
  oadFindings: OadFinding[];
  typeSpecProjects: ProjectResult[];
  matches: MatchTrace[];
  rollup?: Rollup;
  errors: string[];
}
