import type { Program } from "@typespec/compiler";
import type { AnalysisResult, ComparisonPhase } from "../types.js";
export interface AnalysisOptions {
    /** If provided, only analyze this specific service namespace. */
    serviceName?: string;
    /** If provided, only run this phase. */
    phase?: ComparisonPhase;
    /** Optional callback for progress logging (appears in CI logs). */
    log?: (message: string) => void;
}
/**
 * Run full breaking change analysis on a single program (Phase B only).
 * Compares consecutive versions within the head program.
 */
export declare function analyzeProgram(program: Program, options?: AnalysisOptions): AnalysisResult;
/**
 * Run full breaking change analysis comparing base and head programs (Phase A + Phase B).
 */
export declare function analyzeBaseAndHead(baseProgram: Program, headProgram: Program, options?: AnalysisOptions): AnalysisResult;
//# sourceMappingURL=orchestrator.d.ts.map