import type { Diagnostic, Program } from "@typespec/compiler";
import type { AnalysisResult } from "../types.js";
/**
 * Emit breaking change findings as TypeSpec diagnostics on the program.
 *
 * Each unsuppressed error-severity finding becomes a diagnostic with:
 * - Source location pointing to the origin or head declaration
 * - A codefix to add @approvedBreakingChange decorator
 *
 * This integrates with the TypeSpec IDE experience (VS Code, etc.) so users
 * see breaking changes inline and can apply the suppression codefix.
 */
export declare function emitFindingDiagnostics(program: Program, result: AnalysisResult): Diagnostic[];
//# sourceMappingURL=diagnostics.d.ts.map