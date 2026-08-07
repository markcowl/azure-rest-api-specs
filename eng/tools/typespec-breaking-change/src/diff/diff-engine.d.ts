import { type CanonicalizationResult } from "./canonicalize.js";
import type { ApiDiff, VersionedView } from "../types.js";
/**
 * Result of computing diffs between two versioned views.
 */
export interface DiffResult {
    /** All detected structural diffs. */
    diffs: ApiDiff[];
    /** Canonicalization result for the base view (for further inspection). */
    baseCanonicalization: CanonicalizationResult;
    /** Canonicalization result for the head view (for further inspection). */
    headCanonicalization: CanonicalizationResult;
}
/**
 * Compute all API diffs between base and head versioned views.
 *
 * Orchestration:
 * 1. Canonicalize both sides using HttpCanonicalizer
 * 2. Match operations by identity (method + normalized path)
 * 3. For unmatched: emit OperationAdded/OperationRemoved
 * 4. For matched: delegate to diffOperations for structural comparison
 */
export declare function computeDiffs(base: VersionedView, head: VersionedView): DiffResult;
/**
 * Deduplicate diffs that share the same origin declaration and DiffKind.
 *
 * When a model type is used in multiple operations, the same structural change
 * produces duplicate diffs. This groups them by {origin.declarationPath, kind}
 * and collapses each group to a single diff, annotating it with all affected operations.
 *
 * Diffs without an origin (operation-specific) pass through unchanged.
 */
export declare function deduplicateDiffs(diffs: ApiDiff[]): ApiDiff[];
//# sourceMappingURL=diff-engine.d.ts.map