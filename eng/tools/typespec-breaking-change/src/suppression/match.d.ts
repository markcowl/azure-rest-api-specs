import type { OperationIdentity } from "../types.js";
import type { ResolvedOperation, OperationIdentityMap } from "../diff/operation-identity.js";
/**
 * Result of matching base operations to head operations.
 */
export interface OperationMatchResult {
    /** Operations present in both base and head, matched by identity. */
    matched: MatchedOperation[];
    /** Operations in base but not in head (removed). */
    removed: ResolvedOperation[];
    /** Operations in head but not in base (added). */
    added: ResolvedOperation[];
}
/**
 * A pair of matched operations (same wire identity in base and head).
 */
export interface MatchedOperation {
    identity: OperationIdentity;
    base: ResolvedOperation;
    head: ResolvedOperation;
}
/**
 * Match operations between base and head by wire identity.
 * Identifies matched pairs, added operations, and removed operations.
 *
 * @param baseOps - Resolved operations from the base version
 * @param headOps - Resolved operations from the head version
 * @returns Matched, added, and removed operations
 */
export declare function matchOperations(baseOps: OperationIdentityMap, headOps: OperationIdentityMap): OperationMatchResult;
//# sourceMappingURL=match.d.ts.map