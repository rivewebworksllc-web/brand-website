# Claims and Proof Register

Nothing in this initial register is approved for public publication merely because it appears in a plan or design.

| ID | Claim/proof type | Proposed wording/asset | Evidence location | Owner | State | Approved placement |
|---|---|---|---|---|---|---|
| CLM-001 | AWS partner/status claim | Not supplied | Not supplied | Miles + Trueman | `BLOCKED` | None |
| CLM-002 | Microsoft partner/status claim | Not supplied | Not supplied | Miles + Trueman | `BLOCKED` | None |
| CLM-003 | Client logos | Not supplied | Not supplied | Miles + Trueman | `BLOCKED` | None |
| CLM-004 | Testimonials | Not supplied | Not supplied | Miles + Trueman | `BLOCKED` | None |
| CLM-005 | Case-study results/metrics | Not supplied | Not supplied | Miles + Trueman | `BLOCKED` | None |
| CLM-006 | Credentials/certifications | Not supplied | Not supplied | Miles + Trueman | `BLOCKED` | None |
| CLM-007 | Public pricing | Catalog v8.5.4 / "v49": 10 named project packages, `MGT-03`/`MGT-21`/`MGT-16` managed tiers, Paid Discovery ($249 fixed), all as "From $X" starting bands with required disclaimer — full detail in `RW-PAGE-08B` Design Decision Brief | `RW-PAGE-08B` directive (Product Office / Silvester, 2026-08-15) | Trueman | `APPROVED` (scoped — see note) | `/pricing/`, "From $X" framing only, disclaimer required and visible; excludes any commercial fact not enumerated in the directive (notably Package 1's exact starting price and Package 10's inclusions/exclusions/timeline/evidence tier, both unresolved and must render as explicitly unresolved, not invented) |
| CLM-008 | Public pricing — UXR-01 (UX Audit + Conversion Roadmap) | Code `UXR-01`, catalog family "UXR — UX Research & Experience Design", Layer 1 ("Land"), price band $3,500-$14,500, timeline 2-4 weeks (including a 14-day Microsoft Clarity data-collection period), Evidence Tier E2, 7 named deliverables, 5 named exclusions, attach paths `OPT-01`/`BLD-02`/`OPT-07`, catalog route `OP-01E → UXR-01 → OPT-01 or BLD-02` — full detail in `RW-PAGE-11A` correction and the UX Audit Design Decision Brief | `RW-PAGE-11A` directive (Product Office / Silvester, 2026-08-16) | Trueman | `APPROVED` (scoped — see note) | `/services/web/ux-audit-conversion-roadmap/` only; excludes any commercial fact not enumerated in the `RW-PAGE-11A` directive; does not authorize adding this service to `/pricing/`'s package list (a separate, not-yet-actioned Pricing-expansion consideration) |

### CLM-007 history

Prior state (until 2026-08-15): `BLOCKED`, "Not supplied," owner Trueman — no approved wording existed. Reclassified `APPROVED` by `GOV-020` for the specific v49 commercial facts supplied in the `RW-PAGE-08B` directive only. This is not a record of Trueman personally reviewing or approving copy; it is a Product Office/Silvester-directed reconciliation of a previously stale blocker against newly supplied commercial authority. Any commercial fact outside that supplied set remains unapproved and must follow the general rule below.

### CLM-008 history

Prior state (RW-PAGE-11 implementation, 2026-08-16): no catalog entry for "UX Audit + Conversion Roadmap" existed anywhere in the repository (`src/lib/content/pricing.ts`'s 10 packages, or any other content file); every commercial field was rendered explicitly unresolved and flagged prominently in both the implementation and the report, per the same discipline used for Package 1/10's unresolved fields. The `RW-PAGE-11A` directive supplied the commercial facts above as external v49 Product Office authority "not available inside the repository." As with `CLM-007`/`GOV-020`, this is not independently verifiable against any system available to Claude (no external catalog database exists to query, unlike the Vercel deployment-history check performed for `RW-DEPLOY-02`); it rests on the same sole human-conduit authority this entire commercial buildout has relied on since `RW-PAGE-08B`. Recorded via `GOV-021`, not silently absorbed into content without a governance entry.

## Publication rule

Only an `APPROVED` entry may be rendered publicly, and only with its approved wording, asset and placement. `PROPOSED`, `BLOCKED` and missing items must be omitted or represented with claim-safe methodology copy.
