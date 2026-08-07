import type { Program } from "@typespec/compiler";
import type { Finding, OperationDiffIdentity } from "../types.js";
/**
 * Apply suppression metadata to classified findings.
 *
 * A suppression matches if:
 * 1. Its `kind` is undefined (wildcard) OR matches the finding's diff kind
 * 2. Its `version` is undefined (no scope) OR the finding's head version is >= the since version
 * 3. Path matching:
 *    - Direct suppression (target === finding type): no path needed, wildcard OK
 *    - Ancestor suppression (target !== finding type): path MUST be specified and match
 */
export declare function applySuppressions(findings: Finding[], program: Program): Finding[];
/**
 * Compose the full identity path from an OperationDiffIdentity.
 *
 * Per design doc §3.1:
 * - Request elements: request.{element} (e.g., request.body.properties.tags, request.query.filter)
 * - Response elements: responses.{statusCode}.{element} (e.g., responses.200.body.properties.name)
 */
export declare function composeFullIdentityPath(identity: OperationDiffIdentity): string;
//# sourceMappingURL=suppression.d.ts.map