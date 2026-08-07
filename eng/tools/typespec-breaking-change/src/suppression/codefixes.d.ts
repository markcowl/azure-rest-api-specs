import { type CodeFix } from "@typespec/compiler";
import type { Finding } from "../types.js";
/**
 * Create a codefix that adds @approvedBreakingChange decorator to suppress a finding.
 *
 * Targets the origin declaration type when available (suppresses all uses of that declaration),
 * falling back to the head type (wire type where the change was detected).
 *
 * @param finding - The finding to create a codefix for
 * @returns A CodeFix, or undefined if no suitable target exists
 */
export declare function createApproveBreakingChangeCodeFix(finding: Finding): CodeFix | undefined;
//# sourceMappingURL=codefixes.d.ts.map