# RW-PAGE-P0-SOLUTIONS-01 — Cloud Modernization + AI & Data Automation Design Decision Brief

**State:** `IMPLEMENTED`, technically `VERIFIED`, and visually `ACCEPTED` by Silvester for both pages. **SILVESTER VISUAL ACCEPTANCE: APPROVED** — reviewed live against the running dev server at `/solutions/cloud-modernization/` and `/solutions/ai-data-automation/`. No commit, merge, push or deployment performed yet; the originating commission for this package explicitly withheld that authorization pending this review.
**Routes:** `/solutions/cloud-modernization/` and `/solutions/ai-data-automation/`
**Baseline:** `feature/p0-solution-hubs-cloud-ai @ 05be163571c123857ba33c412326a05bcd700db7` (isolated worktree, deliberately not synchronized with canonical `develop`'s later advance to `9666b0c` per this package's own instruction)
**Source commission:** `docs/ux/RW_SITEMAP_COMPLETION_INVENTORY.md` §22-23 ("RW-PAGE-P0-SOLUTIONS-01 — Cloud Modernization + AI, Data & Automation Solution Hubs"), executed under an explicit Product Office authorization naming Claude as executor for this session.

## Authority sources

No new commercial fact is invented anywhere in either page. A full audit of the repository found real, already-approved authority for both hubs:

- `src/lib/content/homepage.ts`'s `buyerPaths` array already contains a complete, approved buyer-path object for each hub ("AWS & Microsoft Cloud" → `/solutions/cloud-modernization/`; "Secure AI & Automation" → `/solutions/ai-data-automation/") with problem, outcome, symptoms, `whatWeExamine`, `expectedOutput` and `managedFollowOn` fields. Both pages import these objects by reference (`homepageFallbackContent.buyerPaths.find(...)`), not a re-authored copy — the same discipline `/solutions/`'s own `solutions.ts` already uses, confirmed by a unit test (`toBe`, not `toEqual`).
- `src/lib/content/pricing.ts` (`CLM-007`/`GOV-020`, already live on `/pricing/`) contains real, priced, timelined, evidence-tiered packages for both domains: five `cloud-data` packages (AWS Well-Architected Framework Review, Cloud Foundation Sprint, AI-Ready Cloud Foundation, Cloud Security + Resilience Baseline, Microsoft Fabric/Analytics Quickstart) and four `ai` packages (AI Readiness Sprint, Secure RAG + Knowledge Search, Microsoft 365 Copilot Readiness + Adoption, AI Red Teaming + Guardrails Validation), plus the two relevant managed retainers (Monthly Cloud Care `MGT-21`, AI Ops + Eval Retainer `MGT-16`). Every package object on both pages is a direct array reference (`projectPackages.find(...)`), verified by a unit test asserting `toContain`.
- `docs/governance/CLAIMS_REGISTER.md`: `CLM-001` (AWS partner/status), `CLM-002` (Microsoft partner/status) and `CLM-006` (credentials/certifications) are all `BLOCKED`, "Not supplied." Neither page makes any partner, certification or status claim anywhere; both pages carry a dedicated unit test and E2E assertion (`not.toMatch(/certified|certification|partner status|gold partner/)`) to keep this from silently regressing.
- `docs/ux/RW_SITEMAP_COMPLETION_INVENTORY.md` §23's own stated constraint ("two related routes may share engineering primitives but must not become content-swapped clones") is treated as a hard requirement, addressed directly below.

No standalone catalog code (`OP-xx`) exists for either hub as a bundled offer; each hub instead surfaces its own set of real, individually-priced starting engagements rather than inventing a bundled headline price.

## Required Skills and Tools

| Skill/tool | Why required | Current-session availability | Invocation |
|---|---|---|---|
| UI/UX Pro Max | Package-specific B2B information-hierarchy and differentiation critique | `INSTALLED_CALLABLE` | Three `search.py` invocations: `--design-system` for "B2B consulting technology services", `--domain landing` for comparison/roadmap patterns, `--domain ux` for engagement-list hierarchy. Explicitly rejected the returned "Trust & Authority" style (certificates/badges, security badges, case-study metrics) as incompatible with `CLM-001`/`CLM-002`/`CLM-006` `BLOCKED`. |
| 21st.dev / Magic | External pattern exploration for the review-to-roadmap device, the gated-pipeline device, and mobile engagement-list treatment | `INSTALLED_CALLABLE` | Three `mcp__21st__get_inspiration` calls. No component adopted; all results (animated AI-agent pipeline, deployment checklists, bento grids, pricing-tier cards with "popular plan" badges, stacked activity cards, data tables) rejected as decorative/wrong-register for a claims-safe editorial B2B page. |
| `design-taste-frontend` / TasteSkill | Anti-template critique of the two-page pair specifically for content-swap risk and generic-dashboard drift | `INSTALLED_CALLABLE` | Full skill loaded and applied with `DESIGN_VARIANCE=6`, `MOTION_INTENSITY=2`, `VISUAL_DENSITY=4`. Its generic library/font/animation defaults (Phosphor icons, Motion/GSAP, banned-Fraunces typography, mandatory stock photography) conflict with Rive's already-established page family and are rejected below, per the same precedent already recorded in the FND-05 and Modern Web Platforms briefs. Its universal quality checks (CTA hygiene, no duplicate CTA intent, em-dash ban, layout-family variety, content density) were applied and are reflected in both pages. |
| React / Next.js App Router | Route and component implementation | Repository capability | New routes `src/app/solutions/cloud-modernization/page.tsx`, `src/app/solutions/ai-data-automation/page.tsx` |
| TypeScript / Tailwind / Rive design system | Type-safe content authority, existing token reuse | Repository capability | `tsc --noEmit` clean; reuses `Section`, `LinkButton`, existing color/type tokens; no new dependency added |
| Playwright / responsive QA / axe | Interaction, responsive, accessibility evidence | Repository dependency | Focused specs per page, 6-viewport overflow check, 200% zoom check, axe light/dark |
| Claims Register review | Commercial and partner/certification safety | Repository authority | `CLM-001`/`CLM-002`/`CLM-006` confirmed `BLOCKED`; enforced by dedicated tests on both pages |

## Rejected external suggestions (documented, not silently substituted)

- UI/UX Pro Max's "Trust & Authority" design-system recommendation (certificates/badges, security badges, expert credentials, case studies with metrics) — rejected outright. `CLM-001`/`CLM-002`/`CLM-006` are `BLOCKED`; no partner or certification claim is permitted regardless of what a generic B2B pattern suggests.
- UI/UX Pro Max's `landing` domain comparison patterns ("Comparison Table + CTA," winner-row highlighting, "35% higher conversion" claims) — rejected. Neither page compares Rive against a competitor; a winner-row table would misrepresent real, neutral starting engagements as a marketing comparison.
- 21st.dev's animated "AI Agent Pipeline" / "AI Chain of Thought" components — rejected as decorative motion with no claim-safe grounding; the real Readiness/Guardrails/Evaluation gates are static, semantic HTML instead.
- 21st.dev's pricing-tier card patterns ("popular plan" highlighting, animated price toggles) — rejected; every price on both pages is a flat, equally-weighted, already-published starting band, not a tiered upsell.
- TasteSkill's icon-library switch (Phosphor/HugeIcons/Tabler) — rejected. This repository has no icon library installed and deliberately reuses its own established inline-stroke SVG convention; no new icon was drawn for this package (both new components use only borders, rules and typographic marks, matching `FrictionMap`'s existing register).
- TasteSkill's Motion/GSAP requirement for `MOTION_INTENSITY > 3` — not applicable. This page family uses plain CSS and native disclosure elements sitewide; no Motion or GSAP dependency exists in the repository, and introducing one for two pages would be inconsistent tooling debt, not a design improvement.
- TasteSkill's serif ban (naming Fraunces specifically as an over-used LLM default) — rejected. Fraunces is Rive's own already-established, already-approved sitewide display serif, not a fresh default reached for on this page; per the skill's own redesign-preservation rule ("a brand that is already purple stays purple"), repository authority prevails.
- TasteSkill's mandatory real-photography requirement — rejected, per the same zero-photography thesis already established and documented for Evidence Pack, UX Audit and Modern Web Platforms. Both signature devices carry their explanatory load through real semantic HTML/typographic marks, not a stock "person at a laptop" image with no supporting reason.
- TasteSkill's generic "ration eyebrows to one per three sections" rule — rejected as a case of a generic anti-template heuristic conflicting with Rive's own established, consistent, intentional per-section eyebrow convention (every existing Rive service page uses one), the identical rejection already recorded in the FND-05 Design Decision Brief.

## Cross-page repetition audit

- **One dark chapter per page**, matching the sitewide invariant (UXR-01, FND-05, Modern Web Platforms). Cloud's is a wide six-pillar grid resolving into a roadmap sequence; AI's is a vertical three-gate pipeline with a connecting rule — genuinely different visual forms, not the same device with different labels.
- **Hero commercial panel**: reuses the established bordered-panel visual language (UXR-01's price plate, Modern Web Platforms' "Flagship route" panel) but adapted honestly for this content shape: two real starting engagements with code + price, not one invented headline figure, since neither hub is a single bundled offer.
- **Relationships row**: reused established generic three-card device (UXR-01/FND-05/Modern Web Platforms), but this pair's third relationship is reciprocal — Cloud links to AI and AI links to Cloud — a device none of the prior pages needed, since none of them had a direct sibling.
- **Process reuse**: follows Modern Web Platforms' precedent of linking to the real company process rather than inventing a second one, but kept to one short paragraph (not a four-stage rail) specifically to vary rhythm against Modern Web Platforms' own fuller treatment.
- **Engagement catalog grid**: a genuinely new device for this page family (`EngagementCard`), required because these are the first two pages presenting *multiple* real starting engagements rather than one owned commercial fact set. Deliberately not a pricing-tier table (rejected per the UI/UX Pro Max and 21st.dev findings above) and not a duplicate of `/pricing/`'s own `PackageCard` (condensed: name, code, price, timeline/evidence, one-line purpose, a link out — not the full inclusion/exclusion/attach detail Pricing itself carries).

## Content-swap test (between the two sibling pages specifically)

**Pass.** "AI & Data Automation" cannot replace "Cloud Modernization" in this composition without breaking it:

- The signature devices are structurally different, not re-skinned: six pillars scanning into four severity bands (Cloud) versus three sequential gates a candidate must clear (AI). Swapping the data alone would not make one page's HTML structure fit the other's narrative.
- The five Cloud engagements are grouped as a single practice area (`cloud-data`); the four AI engagements are grouped as parallel, non-sequential entry points depending on buyer state (readiness versus retrieval versus Copilot versus red-teaming) — the grid cardinality and the "what these engagements have in common" framing differ for real, sourced reasons, not arbitrary content substitution.
- Section six differs in topic by necessity: Cloud's is an AWS/Microsoft-neutrality note (reusing the homepage's own `cloud` pillar description); AI's is a human-oversight/governance note (reusing the homepage's own `ai` pillar description). Neither section's content exists on the other page's content object.

## Section Rhythm Map — Cloud Modernization

1. Hero (light) — problem-first headline, two real starting engagements in place of an invented single price
2. Buyer problem (light, bordered symptom list, not cards)
3. **The Six-Pillar Review → Roadmap** (dark, signature, wide grid resolving into a severity sequence)
4. Real engagement catalog (light, 5 cards)
5. What we examine / what you get back (light, two-column)
6. AWS/Microsoft neutrality note (light, short paragraph)
7. Managed follow-on: Monthly Cloud Care (light, tier strip)
8. Process reuse (light, one paragraph + link)
9. Relationships: Evidence Pack, AI & Data Automation, Pricing (light, three-card row)
10. Final CTA (accent surface)

## Section Rhythm Map — AI & Data Automation

1. Hero (light) — problem-first headline, two real starting engagements
2. Buyer problem (light, bordered symptom list)
3. **Readiness → Guardrails → Evaluation** (dark, signature, vertical three-gate pipeline)
4. Real engagement catalog (light, 4 cards)
5. What we examine / what you get back (light, two-column)
6. Human-oversight/governance note (light, short paragraph)
7. Managed follow-on: AI Ops + Eval Retainer (light, tier strip)
8. Process reuse (light, one paragraph + link)
9. Relationships: Evidence Pack, Cloud Modernization, Pricing (light, three-card row)
10. Final CTA (accent surface)

## Rejected patterns

- A generic cloud-architecture box-and-arrow diagram for Cloud's signature chapter (AI-slop risk; replaced with the real six-pillar/severity structure already published in `pricing.ts`).
- An animated "AI agent flowing through tools" visualization for AI's signature chapter (21st.dev exploration result, rejected as decorative and not claim-safe — nothing on this page claims a live agent exists).
- Any winner/comparison table between AWS and Microsoft, or between Rive and a competitor.
- Any partner badge, certification mark or case-study metric (hard-blocked by `CLM-001`/`CLM-002`/`CLM-006`).
- A single invented bundled price for either hub (no `OP-xx` catalog code exists for either; real, individually-priced engagements are shown instead).
- Technology-vendor logo wall (AWS/Azure/Microsoft 365 marks): no verified, licensed asset source exists in this repository; text labels are used instead, matching every prior page's own fallback.

## Human Design Review — Rive Authored Page Standard (self-check)

| Gate | Cloud Modernization | AI & Data Automation |
|---|---|---|
| Visual thesis | `PASS` — separability of a structured review into a sequenced plan is explicit | `PASS` — gated progression from candidate to production is explicit |
| Memorable moment | `PASS` — Six-Pillar Review grid-to-roadmap | `PASS` — three-gate vertical pipeline |
| Media intentionality | `PASS` — zero photography, deliberate; matches sitewide zero-photo thesis for this page family | `PASS` — same |
| Template resistance | `PASS` — depends on Rive's real published catalog, not a generic bundled-price template | `PASS` — same |
| Content-swap resistance | `PASS` — see dedicated test above | `PASS` — see dedicated test above |
| Anti-AI-pattern review | `PASS` — no bento, no winner table, no badge wall, no fabricated metric | `PASS` — same |
| Cross-page differentiation | `PASS` — distinct signature form from each other and from every existing page | `PASS` — same |
| Claims safety | `PASS` — no AWS/Microsoft/AI partner or certification claim; enforced by unit + E2E tests | `PASS` — same |
| Mobile authorship | `PASS` — grid/pipeline both collapse to a single readable column below `sm`/`lg`; verified at 320-1440px | `PASS` — same |
| Dark-mode authorship | `PASS` — one dark chapter each, gold-on-navy register matching sitewide convention | `PASS` — same |

**Formal review answer:** both pages read as independently art-directed within Rive's systemic register and as a genuinely differentiated sibling pair, not a content-swapped clone. This is a self-review only; Silvester remains the visual acceptance authority.

## Defect found and fixed during this package (reported, not silently absorbed)

The first axe pass on Cloud Modernization's dark chapter found a genuine `serious`-impact contrast violation: `text-slate-500` mono labels and the "Becomes a sequenced roadmap" caption on `bg-navy-950` measured 3.74:1, below the required 4.5:1. Cross-checked against `FrictionMap.tsx`'s existing dark-section convention, which already solved this with `text-slate-400`. Replaced every `text-slate-500` occurrence in both new signature components (`SixPillarReview.tsx`, `ReadinessGuardrailsEvaluation.tsx`) with `text-slate-400`, matching the established convention rather than inventing a new shade. Reran axe; both pages now pass with zero serious/critical violations in both themes.

## Validation record

| Check | Result |
|---|---|
| ESLint | `PASS` — zero warnings |
| TypeScript | `PASS` |
| Unit suite | `PASS` — 162/162 (16 new: 8 per page) |
| Production build | `PASS` — 26/26 static pages; both routes emitted |
| Focused E2E (Cloud Modernization) | `PASS` — 10/10 (incl. axe light/dark, 6-viewport overflow, 200% zoom) |
| Focused E2E (AI & Data Automation) | `PASS` — 11/11 (incl. axe light/dark, 6-viewport overflow, 200% zoom) |
| Navigation regression | `PASS` — 16/16 (confirms zero drift; no navigation file touched) |

No commit, push, merge, PR, staging deployment or production deployment was performed. This isolated worktree was deliberately not synchronized with canonical `develop`'s later advance (`9666b0c`, from the separate `RW-INT-20` package), per this package's own explicit instruction.
