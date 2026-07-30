# Reporting

Produce a single markdown report (name it as the requester asks, e.g.
`lro-rule-eval.md`). Structure:

## 1. Header / context

- The rule id and a link to the PR that introduces/changes it.
- The branch and repo it was evaluated against (e.g. `typespec-next` of
  `Azure/azure-rest-api-specs`).

## 2. What the rule checks

A short, plain-language statement of the rule's contract — what it computes and
what it compares against — so a reader can judge each determination.

## 3. Method

Bullet the reproduction steps: candidate packages installed, `tsv` per spec,
ground-truth capture of actual vs expected, classification against intent.

## 4. Determination summary

A count table:

| Determination | Count |
| --- | --- |
| user-error | N |
| false-positive | M |
| indeterminate | K |
| **Total** | **N+M+K** |

## 5. One section per determination

For **user-error** and **false-positive** (and **indeterminate** if any), a table
with one row per violation:

| Source | Operation | Variant | Encoded (actual) | Expected | Evidence |
| --- | --- | --- | --- | --- | --- |

- **Source** is a clickable link to the exact line on the evaluated branch:
  `https://github.com/Azure/azure-rest-api-specs/blob/<branch>/<path>#L<line>`.
- **Encoded** and **Expected** are the ground-truth values the rule computed.
- **Evidence** is one sentence explaining *why* this determination holds — cite
  the wire/Swagger, the source construct, the rule's comparison, and/or the
  requester's policy. This is the most important column; make it specific to the
  instance, not boilerplate.

Precede each section with a short paragraph describing the dominant patterns (e.g.
"body-returning DELETEs kept for backward compat", "double-wrapped action
responses").

## 6. Specs with no violations

List every spec from the requested set that produced **zero** violations, with a
link. Absence of findings is a result worth recording — it tells the rule author
where the rule is already clean.

## Tips

- Generate the tables programmatically from the stored dataset so the report and
  the applied suppressions can never drift apart.
- Keep determinations and evidence in the dataset (not just prose) so re-runs are
  reproducible.
