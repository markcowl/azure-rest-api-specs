import type { OperationHttpCanonicalization } from "@typespec/http-canonicalization";
import type { ApiDiff, OperationIdentity } from "../types.js";
/**
 * Compare two canonicalized operations and return all structural diffs.
 */
export declare function diffOperations(baseOp: OperationHttpCanonicalization, headOp: OperationHttpCanonicalization, identity: OperationIdentity): ApiDiff[];
//# sourceMappingURL=diff-operations.d.ts.map