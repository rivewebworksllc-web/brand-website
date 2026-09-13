# RW-PAGE-P0-SOLUTIONS-02 — Website & Growth + Managed Care & Advisory Design Decision Brief

## Product Office Scope Reconciliation

RW-PAGE-P0-SOLUTIONS-02 had already entered implementation before a later, more expansive Product Office directive arrived, addressed to "Codex" as executor and asking for a much broader buyer-state router (spanning FND-05, UXR-01, Modern Web Platforms, WordPress, Ecommerce, SEO/LLM Discoverability, a cyclical operational thesis for Managed Care, SLA authority inspection, and two separately-named Design Decision Brief files in a fresh dedicated worktree). Product Office reconciled the conflict explicitly, in writing, choosing **Option 2**: preserve the completed implementation and treat the later directive as a refinement checklist rather than a superseding rebuild order.

**What the later directive proposed:** a full buyer-state routing hub for Website & Growth (discovery/readiness, brand, UX/conversion, platform, WordPress, ecommerce, SEO/LLM discoverability, automation) and an SLA-driven, cyclical "Observe → Prioritize → Improve → Verify → Document → Repeat" operational thesis for Managed Care & Advisory, in a fresh worktree, with separately-named briefs (`WEB_GROWTH_SOLUTION_HUB_DESIGN_DECISION_BRIEF.md` / `MANAGED_SERVICES_SOLUTION_HUB_DESIGN_DECISION_BRIEF.md`).

**What conflicted with repository truth:** of the seven routing destinations the later directive named for Website & Growth, only three exist (Modern Web Platforms, UXR-01, FND-05); WordPress Build & Migration, Ecommerce, SEO/LLM Discoverability, UX Research + Conversion Design Sprint and Digital Solutions Discovery Blueprint are all still-missing P0/P1 routes with no canonical URL to link to. A cyclical six-stage operational visual for Managed Care had no grounding in the three real `managedServices` objects, which describe bounded monthly retainers, not an open-ended operating loop.

**What was retained:** both signature devices (Website & Growth's **Diagnose or Build** convergent fork; Managed Care & Advisory's **Coverage Register**), the existing route (`feature/p0-solution-hubs-web-managed`), the existing worktree, and this single canonical brief file per page-pair, per repository convention.

**What refinements were adopted** (grounded in real, already-published authority only):

1. Website & Growth now cross-references FND-05 (Brand Identity + Digital Design System) alongside Modern Web Platforms, since "the proposition is unclear" is already one of this page's own listed symptoms and FND-05 is a real, implemented, directly relevant offering. Rendered as a genuine link (`/services/web/brand-identity-digital-design-system/`), not fabricated.
2. Managed Care & Advisory's `CoverageRegister` now surfaces each domain's real, already-published `exclusions` ("what is not covered"), real per-tier `support` language where the catalog defines it, and `MGT-03`'s real, already-published disclaimer ("No uptime guarantee at any tier without a separate SLA-backed upgrade.") - the safest possible way to satisfy "SLA-safe wording," since it reuses Rive's own existing caution rather than writing a new one.
3. The Managed Care Assessment section now explicitly distinguishes the assessment (advisory, one-time) from the tiers (recurring, operational), directly answering the later directive's "what is advisory vs. recurring" question using only content already present in the page's own real objects.
4. Added defensive unit + E2E tests locking in: no still-missing route is ever linked from either page; no 24/7/SOC/NOC/unlimited-support/guaranteed-uptime/guaranteed-response language appears anywhere; no guaranteed-conversion/ranking/revenue language appears anywhere.

**What was deliberately deferred to child-service packages, not built here:** WordPress Build & Migration, Ecommerce, SEO/LLM Discoverability, UX Research + Conversion Design Sprint, and Digital Solutions Discovery Blueprint - none of these routes were created, linked, or described with a fabricated URL. They remain open P0/P1 backlog items per `docs/ux/RW_SITEMAP_COMPLETION_INVENTORY.md`.

**Genuine defect found while applying refinement #1**, reported not silently absorbed: the two new `LinkButton`s (Modern Web Platforms / FND-05) inherited the shared button system's `white-space: nowrap`, overflowing the viewport at 320px - the identical defect class already documented above and in Modern Web Platforms' own brief. Fixed with the same established pattern (`min-w-0` on the container, `max-w-full whitespace-normal text-left` on the button).

**State:** `IMPLEMENTED`, technically `VERIFIED`, and visually `ACCEPTED` by Silvester for both pages. **SILVESTER VISUAL ACCEPTANCE: APPROVED** — Website & Growth accepted with the Diagnose or Build fork; Managed Care & Advisory accepted with the Coverage Register. Scope reconciliation (Option 2, above) is retained as part of the accepted implementation; no missing child route was fabricated. Package approved for integration into canonical `develop`.
**Routes:** `/solutions/web-growth/` and `/solutions/managed-services/`
**Baseline:** `feature/p0-solution-hubs-web-managed @ origin/develop 5830ec387290deb34a746abfc9cf8bde0fa16124` (branched fresh from current canonical `develop`, after `RW-INT-P0-SOLUTIONS-01` was already merged)
**Source commission:** `docs/ux/RW_SITEMAP_COMPLETION_INVENTORY.md` §22 build queue, item 2 ("RW-PAGE-P0-SOLUTIONS-02: build `/solutions/web-growth/` and `/solutions/managed-services/`"), continuing the same pattern already established and integrated for `RW-PAGE-P0-SOLUTIONS-01`.

## Authority sources

No new commercial fact is invented anywhere in either page.

- `src/lib/content/homepage.ts`'s `buyerPaths` array already contains complete, approved buyer-path objects: "Website & Growth" → `/solutions/web-growth/`, "Managed Care & Advisory" → `/solutions/managed-services/`. Both pages import these by reference (`toBe`, not `toEqual`), matching every prior page's discipline.
- `src/lib/content/pricing.ts` (`CLM-007`/`GOV-020`) contains exactly two real `strategy`/`web` project packages relevant to Website & Growth: `UXR-01` (UX Audit + Conversion Roadmap, $3,500, real published price, already has its own standalone page) and `website-launch-llm-discoverability` (Package 1, "Web launch," honestly `price.unresolved: true`/"Scope-priced" per the original `RW-PAGE-08B` directive - never invented here). No other `web`-group package exists; this is genuinely thinner than Cloud (5) or AI (4), and is reported honestly rather than padded with invented entries.
- `pricing.ts`'s `managedServices` array contains exactly three real managed services: `MGT-03` (Managed Website Care), `MGT-21` (Monthly Cloud Care), `MGT-16` (AI Ops + Eval Retainer). These three, and only these three, exist as full `ManagedService` objects anywhere in the repository. All three are the entire real content of the Managed Care & Advisory page.
- The homepage's own "Managed Care Assessment" starting-engagement label has no catalog price, timeline or evidence tier anywhere in the repository - confirmed by a full grep returning zero commercial-fact hits for that literal name. It is rendered as an honest, unresolved entry point (confirmed in Paid Discovery), the same discipline UXR-01's original build and Modern Web Platforms' `OP-40` both already established.
- `docs/governance/CLAIMS_REGISTER.md`: no relevant claim is `BLOCKED` for this specific pair beyond the standing sitewide rules already enforced elsewhere (no fabricated metrics, no invented partner status).

## Required Skills and Tools

| Skill/tool | Why required | Current-session availability | Invocation |
|---|---|---|---|
| UI/UX Pro Max | Package-specific critique of a two-path decision fork and a multi-domain coverage register | `INSTALLED_CALLABLE` | Two `search.py` invocations (`--domain ux` for the decision-fork question, `--domain landing` for the multi-domain retainer question). Both returned weak/off-topic matches (a VisionOS gaze-hover rule; generic funnel/feature-grid/hero-centric landing patterns) - reported honestly as no strong database match rather than fabricated relevance, per the skill's own instruction. |
| 21st.dev / Magic | External pattern exploration for the fork device, the coverage-register device, and mobile collapse | `INSTALLED_CALLABLE` | Three `mcp__21st__get_inspiration` calls. No component adopted; results (a generic Switch toggle, an animated "Builder OS" bento dashboard, an AI model selector, several Radix Collapsible variants) were all off-topic or already-established (native `<details>` disclosure is already this repository's convention). |
| `design-taste-frontend` / TasteSkill | Anti-template critique of the fork (before/after-transformation risk) and the coverage register (disconnected-cards risk) | `INSTALLED_CALLABLE` | Full skill reused from the same session, applied with the same dials (`DESIGN_VARIANCE=6`, `MOTION_INTENSITY=2`, `VISUAL_DENSITY=4`). Directly shaped the final component decisions below. |
| React / Next.js App Router | Route and component implementation | Repository capability | New routes `src/app/solutions/web-growth/page.tsx`, `src/app/solutions/managed-services/page.tsx` |
| TypeScript / Tailwind / Rive design system | Type-safe content authority, existing token reuse | Repository capability | `tsc --noEmit` clean; reuses `Section`, `LinkButton`, existing color/type tokens |
| Playwright / responsive QA / axe | Interaction, responsive, accessibility evidence | Repository dependency | Focused specs per page, 6-viewport overflow check, 200% zoom check, axe light/dark |
| Claims Register review | Commercial and price-fabrication safety | Repository authority | Enforced by dedicated unit + E2E tests on both pages, including a specific test that the Managed Care Assessment never states a fixed price |

## Rejected external suggestions (documented, not silently substituted)

- UI/UX Pro Max returned zero/weak matches for both targeted queries; no recommendation was available to adopt or reject beyond the generic landing patterns below.
- UI/UX Pro Max's generic `landing` domain results (3-step funnel with red/orange/green step coloring, generic feature-grid showcase, hero-centric single-CTA pattern) - rejected. The traffic-light step coloring in particular is a textbook AI-slop tell; neither page uses it.
- 21st.dev's animated bento dashboard and AI model-selector components - rejected as decorative and unrelated to either page's real content shape.
- TasteSkill's specific risk flag on the fork device (does it read as a generic before/after transformation?) - addressed by implementation: `DiagnoseOrBuildFork` presents two equal-weight, non-sequential real entry points with their own real prices, not a single subject changing state over time, and carries no slider, no color-coded winner, no "45% higher conversion" claim.
- TasteSkill's specific risk flag on the coverage register (does it read as three disconnected pricing cards?) - addressed by implementation: `CoverageRegister` is one continuous bordered list joined by a single connecting spine and one unifying introductory statement ("Not three vendors. One accountable operator"), not three equal-weight `<article>` cards.

## Cross-page repetition audit

- **One dark chapter per page**, matching the sitewide invariant. Website & Growth's is a convergent two-path fork; Managed Care & Advisory's is a continuous coverage register - both structurally distinct from each other and from every prior signature device (Platform Stack's 4-layer separation, the Friction Map's 5-stage journey, FND-05's token chain, Cloud's six-pillar grid-to-roadmap, AI's three-gate vertical pipeline).
- **Deliberate thesis inversion, documented rather than accidental**: Managed Care & Advisory's coverage register argues that three real, separately-priced operating tracks belong under ONE relationship (coupling as the virtue), the explicit inverse of Modern Web Platforms' Platform Stack, which argues for separating layers (decoupling as the virtue). Both are honest positions grounded in their own real content, not a contradiction.
- **Hero panel adapted honestly to content shape**: Website & Growth shows 2 real engagements (matching Cloud/AI's established hero-panel pattern exactly). Managed Care & Advisory shows all 3 real coverage-domain starting tiers instead of forcing an artificial "2," because its real content is 3 parallel domains, not 2 sequential engagements - a deliberate, reasoned departure from the established pattern, not an inconsistency.
- **Catalog section reuses the shared `EngagementCard` primitive**, now extended with an optional `href`/`linkLabel` override (backward-compatible; Cloud and AI's existing callers are unchanged) so `UXR-01` can link to its own richer standalone page instead of the generic Pricing destination every other card uses - the first page in this family to have a catalog entry with its own dedicated page.
- **Relationships row**: reused established generic three-card device, but this pair's reciprocal cross-link (Website & Growth ↔ Managed Care & Advisory) mirrors the Cloud ↔ AI precedent exactly, extending the same "sibling pages link to each other" pattern to a second pair.
- **Genuine defect found and fixed during this package**: a `border-hairline` relationship `<article>` overflowed at 320px because the longest CTA label ("Explore Managed Care & Advisory," 32 characters) exceeded the `LinkButton` base class's inherited `white-space: nowrap`. This is the exact defect class Modern Web Platforms already diagnosed and fixed (`min-w-0` on the container, `max-w-full whitespace-normal text-left` on the button); the identical established fix was applied to both new pages' relationship sections rather than inventing a new one. Cloud/AI's own relationship sections were not touched, since they were not observed to fail and are already-integrated, accepted work.

## Content-swap test (between the two sibling pages specifically)

**Pass.** "Managed Care & Advisory" cannot replace "Website & Growth" in this composition without breaking it:

- The signature devices differ in cardinality and structure for real, sourced reasons: the fork has exactly 2 branches (the only 2 real `strategy`/`web` packages that exist) converging to 1 outcome; the register has exactly 3 parallel rows (the only 3 real managed services that exist) joined by 1 spine. Swapping the data would not make one page's HTML fit the other's narrative.
- Website & Growth's fork is fundamentally about a *choice at the start* (diagnose vs. build); Managed Care & Advisory's register is fundamentally about *coverage after something already exists*. These are opposite points in the buyer's timeline, not a relabeled version of the same idea.
- Website & Growth links out to Modern Web Platforms (a forward-looking architecture decision); Managed Care & Advisory links back to Website & Growth (a backward-looking "what keeps this from decaying" relationship). Neither cross-link exists on the other page's content object.

## Section Rhythm Map — Website & Growth

1. Hero (light) - problem-first headline, two real starting engagements
2. Buyer problem (light, bordered symptom list)
3. **Diagnose or Build** (dark, signature, convergent two-path fork)
4. Real engagement catalog (light, 2 cards, one linking to UXR-01's own page)
5. What we examine / what you get back (light, two-column)
6. Platform-architecture note, linking to Modern Web Platforms (light, short paragraph)
7. Managed follow-on: Managed Website Care (light, tier strip)
8. Process reuse, anchored to the real "Build" stage (light, one paragraph + link)
9. Relationships: Evidence Pack, Managed Care & Advisory, Pricing (light, three-card row)
10. Final CTA (accent surface)

## Section Rhythm Map — Managed Care & Advisory

1. Hero (light) - problem-first headline, all 3 real coverage-domain starting tiers
2. Buyer problem (light, bordered symptom list)
3. **Coverage Register** (dark, signature, one continuous three-domain register)
4. How the assessment works, honestly unresolved (light, short paragraph)
5. What we examine / what you get back (light, two-column)
6. Process reuse, anchored to the real "Operate & improve" stage (light, one paragraph + link)
7. Relationships: Evidence Pack, Website & Growth, Pricing (light, three-card row)
8. Final CTA (accent surface)

(Managed Care & Advisory is deliberately one section shorter than every prior page in this family - its entire real content IS the coverage register and the three domains, so there is no separate "catalog" or "managed follow-on" section to add without duplicating section 3.)

## Rejected patterns

- A before/after transformation slider or red/green winner framing for the Diagnose-or-Build fork (TasteSkill-flagged risk, explicitly avoided).
- Three equal-weight, disconnected pricing cards for the coverage register (TasteSkill-flagged risk, explicitly avoided in favor of one continuous joined register).
- Inventing a price, timeline or evidence tier for the "Managed Care Assessment" or for Package 1's exact starting price - both remain honestly unresolved, per the original `RW-PAGE-08B` directive.
- A generic 3-step funnel with traffic-light step coloring (UI/UX Pro Max exploration result, rejected).
- Padding Website & Growth's catalog to 3+ items to visually match Cloud/AI - rejected; only 2 real packages exist, and inventing a third would violate the no-fabrication rule.

## Human Design Review — Rive Authored Page Standard (self-check)

| Gate | Website & Growth | Managed Care & Advisory |
|---|---|---|
| Visual thesis | `PASS` - two honest entry points converging to one outcome | `PASS` - three domains, one relationship, explicit inversion of Platform Stack's thesis |
| Memorable moment | `PASS` - Diagnose or Build fork | `PASS` - Coverage Register spine |
| Media intentionality | `PASS` - zero photography, matching sitewide thesis for this page family | `PASS` - same |
| Template resistance | `PASS` - depends on the repository's real, thin (2-item) and (3-item) catalogs, not a padded template | `PASS` - same |
| Content-swap resistance | `PASS` - see dedicated test above | `PASS` - see dedicated test above |
| Anti-AI-pattern review | `PASS` - no bento, no funnel step-coloring, no disconnected pricing-card register | `PASS` - same |
| Cross-page differentiation | `PASS` - distinct from each other, from Cloud/AI, and from every other page | `PASS` - same |
| Claims safety | `PASS` - unresolved fields rendered honestly, never fabricated | `PASS` - same |
| Mobile authorship | `PASS` - fork/register both collapse to a single column below `sm`; overflow defect found and fixed at 320px | `PASS` - same |
| Dark-mode authorship | `PASS` - one dark chapter each, gold-on-navy register matching sitewide convention | `PASS` - same |

**Formal review answer:** both pages read as independently art-directed within Rive's systemic register and as a genuinely differentiated sibling pair. This is a self-review only; Silvester remains the visual acceptance authority.

## Validation record

| Check | Result |
|---|---|
| ESLint | `PASS` - zero warnings |
| TypeScript | `PASS` |
| Unit suite | `PASS` - 200/200 (21 for this page pair, after scope-reconciliation refinements) |
| Production build | `PASS` - both routes emitted alongside every prior page |
| Focused E2E (Website & Growth) | `PASS` - 10/10 (incl. axe light/dark, 6-viewport overflow, 200% zoom, missing-route link guard) |
| Focused E2E (Managed Care & Advisory) | `PASS` - 11/11 (incl. axe light/dark, 6-viewport overflow, 200% zoom, claim-safety guard) |
| Navigation regression | `PASS` - 16/16 (one initial run surfaced a mega-menu click-outside timing flake under load, independently reproduced passing 1/1 in isolation; no navigation file was touched by this package) |

## Defects found and fixed during this package (reported, not silently absorbed)

1. `CoverageRegister.tsx` never actually rendered each managed service's real published `name` (e.g. "Managed Website Care") - only its code and domain label. Caught by a failing E2E content assertion, not silently left in place. Fixed by adding the real `name` field to the component.
2. A 320px horizontal-overflow defect on Website & Growth's relationship row, caused by the longest CTA label exceeding the shared button system's inherited `white-space: nowrap`. Identical defect class and identical fix already established by Modern Web Platforms (`min-w-0` on the container, `max-w-full whitespace-normal text-left` on the button); applied to both new pages' relationship sections.

No commit, push, merge, PR, staging deployment or production deployment was performed.
