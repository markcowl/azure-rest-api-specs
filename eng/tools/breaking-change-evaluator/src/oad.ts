import { createHash } from "node:crypto";
import type { OadMessage } from "../../openapi-diff-runner/src/types/oad-types.ts";
import type { OadFinding, Phase, SwaggerComparison } from "./types.ts";

export interface ParsedOadRun {
  findings: OadFinding[];
  comparisons: SwaggerComparison[];
  digest: string;
  zeroResultWithoutOutput: boolean;
}

export class OadEvidenceIncompleteError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "OadEvidenceIncompleteError";
  }
}

function balancedJsonArray(text: string, start: number): string | undefined {
  const arrayStart = text.indexOf("[", start);
  if (arrayStart === -1) return undefined;
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let index = arrayStart; index < text.length; index++) {
    const character = text[index];
    if (inString) {
      if (escaped) escaped = false;
      else if (character === "\\") escaped = true;
      else if (character === '"') inString = false;
      continue;
    }
    if (character === '"') inString = true;
    else if (character === "[") depth++;
    else if (character === "]" && --depth === 0) return text.slice(arrayStart, index + 1);
  }
  return undefined;
}

function comparisonBefore(
  text: string,
  position: number,
  phase: Phase,
): SwaggerComparison | undefined {
  const prefix = text.slice(Math.max(0, position - 20_000), position);
  const matches = [
    ...prefix.matchAll(
      /ENTER definition runOad oldSpec:\s*(.*?), newSpec:\s*(.*?), oldTag:\s*(.*?), newTag:\s*(.*?)\r?\n/g,
    ),
  ];
  const match = matches.at(-1);
  if (!match) return undefined;
  return {
    phase,
    oldPath: match[1].trim(),
    newPath: match[2].trim(),
    oldVersion: versionFromPath(match[1]),
    newVersion: versionFromPath(match[2]),
  };
}

export function versionFromPath(path: string): string | undefined {
  return path.match(/\d{4}-\d{2}-\d{2}(?:-preview)?/)?.[0];
}

function hasCompleteZeroResult(text: string, phase: Phase): boolean {
  const detector =
    phase === "A" ? "checkBreakingChangeOnSameVersion" : "checkCrossVersionBreakingChange";
  const comparisonType = phase === "A" ? "SameVersion" : "CrossVersion";
  const detectorCompleted = new RegExp(
    `RETURN definition ${detector}\\.\\s+msgs\\.length:\\s*0,\\s*aggregateOadViolationsCnt:\\s*0,\\s*aggregateErrorCnt:\\s*0(?:\\s|$)`,
  ).test(text);
  const runnerCompleted = new RegExp(
    `comparisonType:\\s*${comparisonType},\\s*errorCnt:\\s*0,\\s*oadViolationsCnt:\\s*0,\\s*process\\.exitCode:\\s*0(?:\\s|$)`,
  ).test(text);
  const successfulStatus = /validateBreakingChange:\s*statusCode:\s*0(?:\s|$)/.test(text);
  return detectorCompleted && runnerCompleted && successfulStatus;
}

export function parseOadLog(text: string, phase: Phase): ParsedOadRun {
  const marker = "oadCompareOutput:";
  const findings: OadFinding[] = [];
  const comparisons: SwaggerComparison[] = [];
  let cursor = 0;
  let sequence = 0;
  let foundOutput = false;
  while ((cursor = text.indexOf(marker, cursor)) !== -1) {
    foundOutput = true;
    const nextMarker = text.indexOf(marker, cursor + marker.length);
    const recordEnd = nextMarker === -1 ? text.length : nextMarker;
    if (text.slice(cursor, recordEnd).includes("[TRUNCATED:")) {
      throw new OadEvidenceIncompleteError(
        "oadCompareOutput was truncated by the workflow logger; complete OAD evidence is unavailable",
      );
    }
    const json = balancedJsonArray(text, cursor + marker.length);
    if (!json) {
      throw new OadEvidenceIncompleteError("Incomplete oadCompareOutput JSON in workflow log");
    }
    let messages: OadMessage[];
    try {
      messages = JSON.parse(json) as OadMessage[];
    } catch (error) {
      throw new Error("Malformed oadCompareOutput JSON in workflow log", { cause: error });
    }
    if (!Array.isArray(messages)) throw new Error("oadCompareOutput must be an array");
    const comparison = comparisonBefore(text, cursor, phase);
    if (comparison) comparisons.push(comparison);
    for (const message of messages) {
      if (
        !message ||
        typeof message.id !== "string" ||
        typeof message.code !== "string" ||
        typeof message.message !== "string"
      ) {
        throw new Error("oadCompareOutput contains an invalid message");
      }
      findings.push({
        occurrenceId: `${phase}-oad-${sequence++}`,
        phase,
        id: message.id,
        rule: message.code,
        severity: message.type,
        message: message.message,
        oldPath: message.old?.ref ?? message.old?.location,
        newPath: message.new?.ref ?? message.new?.location,
        oldJsonPath: message.old?.path,
        newJsonPath: message.new?.path,
        comparison,
        evidence: JSON.stringify(message),
      });
    }
    cursor += marker.length + json.length;
  }
  const zeroResultWithoutOutput = !foundOutput && hasCompleteZeroResult(text, phase);
  if (!foundOutput && !zeroResultWithoutOutput) {
    throw new OadEvidenceIncompleteError(
      "Workflow log contains neither oadCompareOutput records nor complete zero-result evidence",
    );
  }
  return {
    findings,
    comparisons,
    digest: createHash("sha256").update(text).digest("hex"),
    zeroResultWithoutOutput,
  };
}

export function validateJobSummary(
  summary: string,
  parsed: ParsedOadRun,
): { oadVersion?: string; digest: string } {
  const digest = createHash("sha256").update(summary).digest("hex");
  const oadVersion = summary.match(
    /npmjs\.com\/package\/@azure\/oad\/v\/(\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?)/,
  )?.[1];
  const comparisonRows = summary.match(/^\| [^|]+\.json \| [^|]+ \| [^|]+ \|$/gm)?.length ?? 0;
  const occurrenceGroups = [
    ...summary.matchAll(/Displaying (\d+) out of (\d+) occurrences\./g),
  ].map((match) => ({ displayed: Number(match[1]), total: Number(match[2]) }));
  const omittedOccurrences = [...summary.matchAll(/(\d+) occurrences? omitted\./g)].reduce(
    (total, match) => total + Number(match[1]),
    0,
  );
  const expectedOmitted = occurrenceGroups.reduce(
    (total, group) => total + group.total - group.displayed,
    0,
  );
  const reportedOccurrences = occurrenceGroups.reduce((total, group) => total + group.total, 0);
  const claimsNoFindings = /no breaking changes|no changes found/i.test(summary);
  const explicitlyReportsNoBreakingChanges =
    /(?:^|\n)\s*No breaking changes detected\.\s*(?:\n|$)/im.test(summary);
  if (claimsNoFindings && parsed.findings.length > 0) {
    throw new Error("Job summary claims no findings but workflow logs contain OAD findings");
  }
  if (parsed.zeroResultWithoutOutput && !explicitlyReportsNoBreakingChanges) {
    throw new Error(
      "Workflow logs prove a zero result but the job summary does not explicitly report no breaking changes",
    );
  }
  if (parsed.findings.length > reportedOccurrences) {
    throw new Error("Job summary occurrence counts are lower than the complete OAD log findings");
  }
  if (expectedOmitted !== omittedOccurrences) {
    throw new Error("Job summary omitted-row counts are inconsistent");
  }
  if (parsed.comparisons.length > 0 && comparisonRows < parsed.comparisons.length) {
    throw new Error("Job summary omits compared Swagger rows present in workflow logs");
  }
  return { oadVersion, digest };
}
