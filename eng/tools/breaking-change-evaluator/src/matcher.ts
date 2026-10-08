import { correlatedKinds, oadCorrelation } from "./correlation.ts";
import { normalizeRoute } from "./swagger-target.ts";
import type {
  CanonicalTarget,
  MatchCandidate,
  MatchTrace,
  OadFinding,
  TypeSpecFinding,
} from "./types.ts";

const probableThreshold = 9;

function propertyPath(value: string | string[] | undefined): string[] {
  const segments = Array.isArray(value) ? value : value?.split(".");
  return segments?.filter((segment) => !["body", "properties", "schema"].includes(segment)) ?? [];
}

function typeSpecTarget(finding: TypeSpecFinding): CanonicalTarget {
  return {
    project: finding.project,
    phase: finding.phase === "same-version" ? "A" : "B",
    baseVersion: finding.versionPair.baseVersion,
    headVersion: finding.versionPair.headVersion,
    method: finding.operation?.method.toUpperCase(),
    route: finding.operation ? normalizeRoute(finding.operation.path) : undefined,
    direction: finding.kind.startsWith("Request")
      ? "request"
      : finding.kind.startsWith("Response")
        ? "response"
        : undefined,
    statusCode: finding.statusCode,
    declaration: finding.component,
    schema: finding.component,
    element: finding.element,
    source: finding.location,
    evidence: [`TypeSpec ${finding.kind}`, finding.message],
  };
}

function contradicts(oad: CanonicalTarget, tsp: CanonicalTarget): string[] {
  const contradictions: string[] = [];
  const compare = (label: string, left?: string, right?: string) => {
    if (left && right && left.toLowerCase() !== right.toLowerCase()) contradictions.push(label);
  };
  compare("phase differs", oad.phase, tsp.phase);
  compare("HTTP method differs", oad.method, tsp.method);
  compare("normalized route differs", oad.route, tsp.route);
  compare("direction differs", oad.direction, tsp.direction);
  compare("response status differs", oad.statusCode, tsp.statusCode);
  compare("base version differs", oad.baseVersion, tsp.baseVersion);
  compare("head version differs", oad.headVersion, tsp.headVersion);
  return contradictions;
}

function score(oad: CanonicalTarget, tsp: CanonicalTarget): MatchCandidate {
  const rejectionReasons = contradicts(oad, tsp);
  const exactIdentity: string[] = [];
  const scoreEvidence: string[] = [];
  let value = 0;
  const add = (condition: boolean, points: number, evidence: string) => {
    if (condition) {
      value += points;
      scoreEvidence.push(evidence);
    }
  };
  const equal = (left?: string, right?: string) =>
    Boolean(left && right && left.toLowerCase() === right.toLowerCase());
  const oadPropertyPath = propertyPath(oad.propertyPath);
  const typeSpecPropertyPath = propertyPath(tsp.element);
  const oadProperty = oadPropertyPath.join(".");
  const typeSpecProperty = typeSpecPropertyPath.join(".");
  for (const [name, left, right] of [
    ["method", oad.method, tsp.method],
    ["route", oad.route, tsp.route],
    ["direction", oad.direction, tsp.direction],
    ["status", oad.statusCode, tsp.statusCode],
    ["schema", oad.schema, tsp.schema],
    ["declaration", oad.declaration, tsp.declaration],
    ["property", oadProperty, typeSpecProperty],
  ] as const) {
    if (equal(left, right)) exactIdentity.push(name);
  }
  add(
    equal(oad.baseVersion, tsp.baseVersion) && equal(oad.headVersion, tsp.headVersion),
    3,
    "version pair",
  );
  add(
    equal(oad.schema, tsp.schema) || equal(oad.declaration, tsp.declaration),
    4,
    "schema/declaration",
  );
  add(equal(oadProperty, typeSpecProperty), 4, "full property path");
  add(equal(oadPropertyPath.at(-1), typeSpecPropertyPath.at(-1)), 2, "leaf property");
  add(equal(oad.operationId, tsp.operationId), 3, "operation identity");
  add(equal(oad.direction, tsp.direction), 2, "direction");
  add(equal(oad.statusCode, tsp.statusCode), 2, "response status");
  return {
    typeSpecOccurrenceId: "",
    target: oad,
    score: rejectionReasons.length ? 0 : value,
    exactIdentity,
    scoreEvidence,
    rejectionReasons,
  };
}

function exactWireIdentity(candidate: MatchCandidate): boolean {
  if (
    candidate.rejectionReasons.length > 0 ||
    !candidate.exactIdentity.includes("method") ||
    !candidate.exactIdentity.includes("route")
  ) {
    return false;
  }
  const target = candidate.target;
  if (target.direction && !candidate.exactIdentity.includes("direction")) return false;
  if (target.statusCode && !candidate.exactIdentity.includes("status")) return false;
  if (target.propertyPath?.length && !candidate.exactIdentity.includes("property")) return false;
  if (
    (target.schema || target.declaration) &&
    !candidate.exactIdentity.includes("schema") &&
    !candidate.exactIdentity.includes("declaration")
  ) {
    return false;
  }
  return true;
}

export function matchFindings(
  oadFindings: OadFinding[],
  oadTargets: Map<string, CanonicalTarget[]>,
  typeSpecFindings: TypeSpecFinding[],
): MatchTrace[] {
  const traces: MatchTrace[] = [];
  for (const finding of oadFindings) {
    const correlation = oadCorrelation[finding.rule];
    const resolvedTargets = oadTargets.get(finding.occurrenceId);
    const targets =
      resolvedTargets && resolvedTargets.length > 0
        ? resolvedTargets
        : [{ phase: finding.phase, evidence: ["Target resolution unavailable"] }];
    if (correlation.phaseB === "n/a") {
      traces.push({
        oadOccurrenceId: finding.occurrenceId,
        target: targets[0],
        targets,
        candidates: [],
        selectedTypeSpecOccurrenceIds: [],
        category: "intentional-swagger-only",
        reviewRequired: false,
      });
      continue;
    }
    const permittedKinds = new Set(correlatedKinds(finding.rule));
    const candidates = targets.flatMap((target) =>
      typeSpecFindings
        .filter((candidate) => permittedKinds.has(candidate.kind))
        .map((candidate) => ({
          target,
          candidate,
          scored: {
            ...score(target, typeSpecTarget(candidate)),
            typeSpecOccurrenceId: candidate.occurrenceId,
            target,
          },
        })),
    );
    const decisions = targets.map((target) => {
      const targetCandidates = candidates.filter(
        (candidate) => JSON.stringify(candidate.target) === JSON.stringify(target),
      );
      const exactIds = [
        ...new Set(
          targetCandidates
            .filter(({ scored }) => exactWireIdentity(scored))
            .map(({ candidate }) => candidate.occurrenceId),
        ),
      ];
      if (exactIds.length === 1) {
        return { target, status: "exact" as const, selected: exactIds };
      }
      if (exactIds.length > 1) {
        return { target, status: "ambiguous" as const, selected: [] };
      }
      const ranked = targetCandidates
        .filter(({ scored }) => scored.rejectionReasons.length === 0)
        .sort((left, right) => right.scored.score - left.scored.score);
      const best = ranked[0];
      const tied = best && ranked.filter(({ scored }) => scored.score === best.scored.score);
      if (best && tied.length > 1) {
        return { target, status: "ambiguous" as const, selected: [] };
      }
      if (best && best.scored.score >= probableThreshold) {
        return {
          target,
          status: "probable" as const,
          selected: [best.candidate.occurrenceId],
        };
      }
      return { target, status: "missed" as const, selected: [] };
    });
    const allExact = decisions.every((decision) => decision.status === "exact");
    const anyAmbiguous = decisions.some((decision) => decision.status === "ambiguous");
    const allResolved = decisions.every(
      (decision) => decision.status === "exact" || decision.status === "probable",
    );
    const selected = [...new Set(decisions.flatMap((decision) => decision.selected))];
    if (allExact) {
      traces.push({
        oadOccurrenceId: finding.occurrenceId,
        target: targets[0],
        targets,
        candidates: candidates.map(({ scored }) => scored),
        selectedTypeSpecOccurrenceIds: selected,
        category: "exact",
        reviewRequired: false,
      });
      continue;
    }
    const category = anyAmbiguous
      ? "ambiguous"
      : allResolved
        ? "probable-review"
        : "missed-equivalent";
    traces.push({
      oadOccurrenceId: finding.occurrenceId,
      target: targets[0],
      targets,
      candidates: candidates.map(({ scored }) => scored),
      selectedTypeSpecOccurrenceIds: category === "probable-review" ? selected : [],
      category,
      reviewRequired: category === "probable-review",
    });
  }
  return traces;
}
