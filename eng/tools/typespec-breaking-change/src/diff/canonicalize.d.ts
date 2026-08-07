import type { Namespace, Program } from "@typespec/compiler";
import { HttpCanonicalizer, OperationHttpCanonicalization } from "@typespec/http-canonicalization";
import { type HttpOperation } from "@typespec/http";
import type { OperationIdentity } from "../types.js";
/**
 * A canonicalized operation with its wire identity.
 */
export interface CanonicalizedOperation {
    /** Version-independent wire identity. */
    identity: OperationIdentity;
    /** The canonicalized HTTP operation (request/response shapes with wire types). */
    canonical: OperationHttpCanonicalization;
    /** The original HTTP operation (for source location tracing). */
    httpOperation: HttpOperation;
}
/**
 * Map of canonicalized operations keyed by identity string.
 */
export interface CanonicalizationResult {
    /** Operations keyed by identity string ("GET /widgets/{}"). */
    operations: Map<string, CanonicalizedOperation>;
    /** The canonicalizer instance (for reuse if needed). */
    canonicalizer: HttpCanonicalizer;
}
/**
 * Canonicalize all HTTP operations in a versioned namespace.
 *
 * Creates an HttpCanonicalizer, resolves all HTTP operations from the namespace,
 * canonicalizes each one, and returns them keyed by wire identity.
 */
export declare function canonicalizeOperations(program: Program, namespace: Namespace): CanonicalizationResult;
//# sourceMappingURL=canonicalize.d.ts.map