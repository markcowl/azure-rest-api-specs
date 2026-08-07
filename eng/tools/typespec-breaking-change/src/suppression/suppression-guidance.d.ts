import type { Finding } from "../types.js";
/**
 * Suppression guidance for a finding — tells the user exactly how to suppress
 * a detected breaking change if it is intentional.
 */
export interface SuppressionGuidance {
    /** The decorator to add (e.g., `@approvedBreakingChange("reason", #{ kind: "SomeKind" })`). */
    decorator: string;
    /** Where to place it: description of the target location. */
    placement: string;
    /** The file path where the decorator should be placed (if known). */
    file?: string;
    /** A complete code example showing the decorator in context. */
    example: string;
}
/**
 * Generate suppression guidance for a finding.
 * Tells the user what decorator to use and where to place it.
 */
export declare function formatSuppressionGuidance(finding: Finding): SuppressionGuidance;
/**
 * Get a one-line suppression hint suitable for console/annotation output.
 */
export declare function formatSuppressionHint(finding: Finding): string;
/**
 * Format a diff-style suppression snippet showing the decorator (as added line)
 * above the target declaration line it would decorate, with optional line numbers.
 *
 * For removed elements where no head source exists (unversioned removal in Phase A),
 * targets the parent model declaration since the property no longer exists.
 */
export declare function formatSuppressionDiff(finding: Finding): string;
//# sourceMappingURL=suppression-guidance.d.ts.map