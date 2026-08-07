import type { AnalysisResult, AnalysisSummary, SourceTraceLevel, TimingInfo } from "../types.js";
/**
 * Full structured JSON report — aligned with typespec-suppressions report pattern.
 */
export interface JsonReport {
    /** Spec paths analyzed. */
    specPaths: string[];
    /** Base revision or file path (if applicable). */
    baseRevision?: string;
    /** Head revision or file path. */
    headRevision?: string;
    /** Whether this report requires action (unsuppressed breaking changes exist). */
    requiresAction: boolean;
    /** Aggregate counts for quick CI gating. */
    counts: {
        errors: number;
        suppressed: number;
        ignored: number;
        totalFindings: number;
        servicesAnalyzed: number;
        comparisonsPerformed: number;
    };
    /** Analysis summary metadata. */
    summary: AnalysisSummary;
    /** Explanation if no comparisons were performed. */
    noComparisonReason?: string;
    /** All classified findings. */
    findings: JsonFinding[];
    /** Performance timing. */
    timing: TimingInfo;
}
export interface JsonFinding {
    kind: string;
    severity: string;
    rule: string;
    phase: string;
    suppressed: boolean;
    suppressionReason?: string;
    message: string;
    operation?: {
        method: string;
        path: string;
    };
    element?: string;
    component?: string;
    statusCode?: string;
    versionPair: {
        baseVersion: string;
        headVersion: string;
    };
    location?: {
        file: string;
        line: number;
    };
    sourceTraceLevel?: SourceTraceLevel;
    sourceElementPath?: string;
    /** How to suppress this finding if the breaking change is intentional. */
    suppression?: {
        decorator: string;
        placement: string;
        file?: string;
        example: string;
    };
}
export interface JsonReportOptions {
    /** Spec folder paths that were analyzed. */
    specPaths?: string[];
    /** Base revision/path label. */
    baseRevision?: string;
    /** Head revision/path label. */
    headRevision?: string;
}
export declare function formatJsonReport(result: AnalysisResult, options?: JsonReportOptions): string;
//# sourceMappingURL=reporter-json.d.ts.map