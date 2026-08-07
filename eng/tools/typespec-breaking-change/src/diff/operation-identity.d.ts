import type { Namespace, Operation, Program } from "@typespec/compiler";
import { type HttpOperation } from "@typespec/http";
import type { OperationIdentity } from "../types.js";
/**
 * All resolved HTTP operations in a versioned namespace,
 * keyed by their wire identity (method + normalized path).
 */
export interface OperationIdentityMap {
    /** Operations keyed by identity string ("GET /widgets/{}"). */
    operations: Map<string, ResolvedOperation>;
}
/**
 * A resolved HTTP operation with its wire identity and metadata.
 */
export interface ResolvedOperation {
    /** Version-independent wire identity. */
    identity: OperationIdentity;
    /** The resolved HTTP operation metadata from @typespec/http. */
    httpOperation: HttpOperation;
    /** The original TypeSpec Operation node (for source location tracing). */
    operation: Operation;
}
/**
 * Normalize a path by replacing parameter names with {}.
 * "/subscriptions/{subscriptionId}/providers/{rpName}" → "/subscriptions/{}/providers/{}"
 */
export declare function normalizePath(path: string): string;
/**
 * Create an OperationIdentity from an HttpOperation.
 */
export declare function getOperationIdentity(httpOp: HttpOperation): OperationIdentity;
/**
 * Create a string key for map lookup from an OperationIdentity.
 */
export declare function identityKey(identity: OperationIdentity): string;
/**
 * Resolve all HTTP operations in a versioned namespace and build an identity-keyed map.
 *
 * @param program - The compiled program
 * @param namespace - The versioned namespace to scan for operations
 * @returns Map of resolved operations keyed by identity string
 */
export declare function resolveOperationIdentities(program: Program, namespace: Namespace): OperationIdentityMap;
//# sourceMappingURL=operation-identity.d.ts.map