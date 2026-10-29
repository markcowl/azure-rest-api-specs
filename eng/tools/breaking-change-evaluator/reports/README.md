# Breaking-change evaluator report catalog

This branch catalog is the stable entry point for longitudinal dashboard ingestion. Runs are immutable: corrected analyzers or changed selections create new run IDs and directories. Machine consumers should start with [`index.json`](index.json).

| Run | Dataset | Generated | Report schema | Complete | Not qualified | Partial | Failed |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: |
| [Breaking-change evaluation: merged TypeSpec PRs from October 15 through October 29, 2026](merged-2026-10-15-to-2026-10-29-65f3ad98/README.md)<br>`merged-2026-10-15-to-2026-10-29-65f3ad98` | `merged-2026-10-15-to-2026-10-29-65f3ad98` | 2026-10-29T07:12:44Z | v3 | 46 | 42 | 6 | 0 |
| [Breaking-change evaluation: recent main TypeSpec PRs as of October 14, 2026](recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1/README.md)<br>`recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1` | `recent-main-typespec-asof-2026-10-15` | 2026-10-15T03:00:00Z | v3 | 5 | 26 | 9 | 0 |
| [Breaking-change evaluation: October 5–11, 2026 (fixed analyzer)](weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1/README.md)<br>`weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1` | `weekly-2026-10-05-to-2026-10-11` | 2026-10-15T03:00:00Z | v3 | 7 | 17 | 11 | 0 |
| [Breaking-change evaluation: October 5–11, 2026 (original analyzer)](2026-10-05-to-2026-10-11/README.md)<br>`weekly-2026-10-05-to-2026-10-11-original-d0ab464d` | `weekly-2026-10-05-to-2026-10-11` | 2026-10-14T03:46:51.335Z | legacy v2 | 12 | 17 | 6 | 0 |

Use `breaking-change-evaluator validate-runs --reports-root eng/tools/breaking-change-evaluator/reports` before ingesting or publishing changes.

