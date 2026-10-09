import { relative, resolve } from "node:path";
import type {
  EvidenceLink,
  OadFinding,
  PullRequestDetails,
  SourceReference,
  TypeSpecFinding,
} from "./types.ts";

function repositoryUrl(details: PullRequestDetails): string {
  return `https://github.com/${details.owner}/${details.repo}`;
}

function sourceUrl(
  details: PullRequestDetails,
  revision: "base" | "head",
  path: string,
  line?: number,
): string {
  const sha = revision === "base" ? details.baseSha : details.headSha;
  return `${repositoryUrl(details)}/blob/${sha}/${path}${line ? `#L${line}` : ""}`;
}

function repositoryRelativePath(
  file: string,
  checkout: string,
): {
  revision: "base" | "head";
  path?: string;
  unavailableReason?: string;
} {
  const normalized = file.replaceAll("\\", "/");
  const checkoutPath = resolve(checkout).replaceAll("\\", "/");
  if (normalized === checkoutPath || normalized.startsWith(`${checkoutPath}/`)) {
    const path = relative(checkout, file).replaceAll("\\", "/");
    return path.startsWith("node_modules/")
      ? {
          revision: "head",
          unavailableReason:
            "Analyzer location resolves to an installed dependency, not a repository source file",
        }
      : { revision: "head", path };
  }
  const baseMatch = normalized.match(/\/typespec-breaking-change-base-[^/]+\/(.+)$/);
  if (baseMatch) return { revision: "base", path: baseMatch[1] };
  const repoMatch = normalized.match(/\/repo\/(.+)$/);
  if (repoMatch) {
    return repoMatch[1].startsWith("node_modules/")
      ? {
          revision: "head",
          unavailableReason:
            "Analyzer location resolves to an installed dependency, not a repository source file",
        }
      : { revision: "head", path: repoMatch[1] };
  }
  if (/^(specification|libs)\//.test(normalized)) {
    return { revision: "head", path: normalized };
  }
  return {
    revision: "head",
    unavailableReason: "Analyzer location could not be mapped to a repository-relative source path",
  };
}

export function normalizeTypeSpecFindingEvidence(
  finding: TypeSpecFinding,
  checkout: string,
  details: PullRequestDetails,
  analyzerSourceSha: string,
): TypeSpecFinding {
  const detectorEvidence: EvidenceLink = {
    label: `TypeSpec analyzer ${analyzerSourceSha}`,
    url: `https://github.com/Azure/typespec-azure/commit/${analyzerSourceSha}`,
  };
  if (!finding.location) {
    return {
      ...finding,
      detectorEvidence,
      source: {
        revision: "head",
        unavailableReason: "The TypeSpec analyzer did not report a source location",
      },
    };
  }
  const normalized = repositoryRelativePath(finding.location.file, checkout);
  const source: SourceReference = normalized.path
    ? {
        revision: normalized.revision,
        path: normalized.path,
        line: finding.location.line,
        url: sourceUrl(details, normalized.revision, normalized.path, finding.location.line),
      }
    : {
        revision: normalized.revision,
        line: finding.location.line,
        unavailableReason: normalized.unavailableReason,
      };
  return {
    ...finding,
    location: source.path ? { file: source.path, line: finding.location.line } : undefined,
    detectorEvidence,
    source,
  };
}

function pathFromOad(value?: string): string | undefined {
  if (!value) return undefined;
  const withoutFragment = value
    .replace(/^file:\/\//, "")
    .split("#")[0]
    .replaceAll("\\", "/");
  const index = withoutFragment.indexOf("specification/");
  return index >= 0 ? withoutFragment.slice(index) : undefined;
}

function evidenceLine(finding: OadFinding, side: "old" | "new"): number | undefined {
  try {
    const parsed = JSON.parse(finding.evidence) as {
      old?: { location?: string };
      new?: { location?: string };
    };
    const match = parsed[side]?.location?.match(/:(\d+):\d+$/);
    return match ? Number(match[1]) : undefined;
  } catch {
    return undefined;
  }
}

export function enrichOadFindingEvidence(
  finding: OadFinding,
  details: PullRequestDetails,
  runUrl?: string,
  digest?: string,
): OadFinding {
  const sources: SourceReference[] = [];
  for (const side of ["old", "new"] as const) {
    const revision = side === "old" ? "base" : "head";
    const rawPath =
      side === "old"
        ? (finding.comparison?.oldPath ?? finding.oldPath)
        : (finding.comparison?.newPath ?? finding.newPath);
    const path = pathFromOad(rawPath);
    const jsonPath = side === "old" ? finding.oldJsonPath : finding.newJsonPath;
    const line = evidenceLine(finding, side);
    sources.push(
      path
        ? {
            revision,
            path,
            line,
            jsonPath,
            url: sourceUrl(details, revision, path, line),
          }
        : {
            revision,
            jsonPath,
            unavailableReason: `OAD ${side} evidence did not contain a repository source path`,
          },
    );
  }
  return {
    ...finding,
    detectorEvidence: runUrl
      ? {
          label: `Swagger breaking-change phase ${finding.phase} workflow`,
          url: runUrl,
          digest,
        }
      : undefined,
    sources,
  };
}
