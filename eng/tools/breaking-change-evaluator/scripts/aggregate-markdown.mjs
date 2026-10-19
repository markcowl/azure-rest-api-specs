/**
 * @typedef {"oadTotal" | "oadInformational" | "typeSpecTotal" | "exact" | "probableReview" | "missedEquivalent" | "intentionalSwaggerOnly" | "typeSpecOnly" | "ambiguous" | "errors"} AggregateMetric
 * @typedef {{ number: number, report: string, rollup?: { byPhase?: Record<string, Partial<Record<AggregateMetric, number>>> } }} AggregateRecord
 */

/** @type {readonly (readonly [AggregateMetric, string, string])[]} */
const metricDefinitions = [
  ["oadTotal", "Comparable OAD", "finding-review"],
  ["oadInformational", "Informational OAD", "finding-review-informational"],
  ["typeSpecTotal", "TypeSpec", "finding-review"],
  ["exact", "Exact", "finding-review-correlations"],
  ["probableReview", "Probable", "finding-review-partial"],
  ["missedEquivalent", "Missed equivalent", "finding-review-oad-only"],
  ["intentionalSwaggerOnly", "Intentional gap", "finding-review-intentional"],
  ["typeSpecOnly", "TypeSpec-only", "finding-review-typespec-only"],
  ["ambiguous", "Ambiguous", "finding-review-ambiguous"],
  ["errors", "Execution failures", "finding-review-errors"],
];

/**
 * @param {"A" | "B"} phase
 * @param {AggregateMetric} metric
 */
export function aggregateEvidenceAnchor(phase, metric) {
  return `phase-${phase.toLowerCase()}-${metric.replace(/[A-Z]/g, (value) => `-${value.toLowerCase()}`)}-evidence`;
}

/**
 * @param {number} value
 * @param {"A" | "B"} phase
 * @param {AggregateMetric} metric
 */
export function renderAggregateCount(value, phase, metric) {
  return value ? `[${value}](#${aggregateEvidenceAnchor(phase, metric)})` : "0";
}

/** @param {AggregateRecord[]} records */
export function renderAggregateEvidence(records) {
  const lines = ["## Contributing evidence", ""];
  let rendered = false;
  for (const phase of ["A", "B"]) {
    for (const [metric, label, reportAnchor] of metricDefinitions) {
      const contributors = records
        .map((record) => ({
          record,
          count: record.rollup?.byPhase?.[phase]?.[metric] ?? 0,
        }))
        .filter(({ count }) => count > 0);
      if (!contributors.length) continue;
      rendered = true;
      lines.push(
        `<a id="${aggregateEvidenceAnchor(phase, metric)}"></a>`,
        `### Phase ${phase} — ${label}`,
        "",
        "| PR | Count | Evidence |",
        "| --- | ---: | --- |",
        ...contributors.map(
          ({ record, count }) =>
            `| #${record.number} | ${count} | [review findings](${record.report}#${reportAnchor}) |`,
        ),
        "",
      );
    }
  }
  if (!rendered) lines.push("No finding evidence was recorded.", "");
  return lines;
}
