# RW-PAGE-11A — UX Audit + Conversion Roadmap Design Decision Brief

**State:** In progress, implementation not yet Silvester-reviewed
**Route:** `/services/web/ux-audit-conversion-roadmap/`
**Baseline:** `develop @ 7e9dcf7f40bbd3465d2f7e77df338b750c8201ad`
**Branch:** `feature/ux-audit-conversion-roadmap`
**Commercial authority:** **None exists.** "UX Audit + Conversion Roadmap" is not a named package in Catalog v8.5.4/"v49" (`src/lib/content/pricing.ts`'s 10 approved packages). No code, price, duration, attach path or evidence level exists for this service anywhere in the repository. Every commercial field on this page is rendered explicitly unresolved, per the directive's own instruction to extract facts from the repository rather than guess. This is a larger gap than Package 1/10's single unresolved fields (a whole unlisted service, not one missing field in an approved package) and is flagged prominently rather than silently absorbed.

## Required Skills and Tools

| Skill/tool | Durable state | Current-session state | Invocation |
|---|---|---|---|
| UI/UX Pro Max | `VERIFIED` | `INSTALLED_CALLABLE` | Real `search.py` runs: `--domain product` (four irrelevant verticals returned honestly, none adopted), `--domain icons` (Phosphor again, rejected, same reasoning as every prior package) |
| 21st.dev / Magic | `VERIFIED` | `INSTALLED_CALLABLE` | Three authenticated `get_inspiration` explorations: audit/friction-map layout, before/after and Kanban patterns, priority-board patterns. All results generic-SaaS-dashboard, gamified-board or gesture-driven image-comparison; none adopted |
| TasteSkill (`design-taste-frontend`) | `INSTALLED_CALLABLE` | Genuinely invoked earlier this same session for RW-PAGE-10; ruleset re-applied here as critic (eyebrow restraint, no dashboard/analytics look, no gamified Kanban, native disclosure over a component library, restrained editorial register, zero em-dash) | Applied against this page's plan below |
| Claims Register review | Repository governance | `INSTALLED_CALLABLE` | Confirmed no CLM entry exists for this service; every commercial field rendered unresolved, not invented |
| React / Next.js / TypeScript / Tailwind | Repository stack | `INSTALLED_CALLABLE` | Zero new client components planned |
| Playwright / axe | Repository dependencies | `INSTALLED_CALLABLE` | Run in validation phase |

## Design Decision Brief

### Route decision
No individual "engagement detail" page exists yet anywhere in the repository (Pricing presents all ten packages as cards on one page; `/services/*` and `/solutions/web-growth/` etc. are mega-menu-advertised destinations with no built page). This is genuinely the first page of its kind. Chosen route: `/services/web/ux-audit-conversion-roadmap/`, nesting under the already-declared (but not yet built) `/services/web/` mega-menu destination rather than inventing a new top-level namespace. Next.js does not require the parent segment to have its own `page.tsx`, so this does not require building `/services/web/` itself (out of scope, avoids scope expansion) and gives a defensible home for future sibling service pages without committing to a specific IA decision that isn't mine to make.

### Buyer problem
Reused, not invented: the existing, approved homepage `buyerPaths` entry for "Website & Growth" already states the symptom set this page addresses verbatim (`"Traffic rarely converts"`, `"The site is hard to change"`, `"The proposition is unclear"`). This page gives that already-approved problem statement its own dedicated, deeper treatment rather than inventing a new marketing claim.

### Buyer-state transformation
Before: *"Something about the site isn't converting, but I can't point to what or in what order to fix it."*
After: *"I can see where in the experience friction actually happens, what evidence backs each finding, and a sequenced, honestly-scoped roadmap, even before I know the exact price."*

### Final visual thesis
**Friction is diagnosed in the order a visitor experiences it, not in the order it's easiest to list.** The signature device (Experience Friction Map) is a sequential register (Entry, Orientation, Persuasion, Action, Confirmation), not a heatmap image or a literal analytics dashboard, so a screen-reader user gets the identical information a sighted user gets.

### Visual registers
Primary Systemic (matching Work/Pricing/Trust/Evidence Pack). No new Intimate photographic beat: no image-generation tool available, and Trust/Pricing/Evidence Pack already each use their one contextual/immersive device once; adding a fourth reuse here would be repetition, not restraint.

### Cross-page repetition audit
- **Evidence Pack:** shares the "typically at Evidence Tier E_" language and the native-`<details>` sample-view convention (reused for the one illustrative finding), but does not reuse `EvidenceRegister`'s exact anatomy verbatim; this page's register is sequential-by-experience-stage, Evidence Pack's is sequential-by-delivery-stage.
- **Pricing:** shares the unresolved-commercial-field treatment (`PackageCard`'s "Scope-priced" device, reused verbatim for consistency rather than inventing new wording) and Paid Discovery as the universal next-commercial-step CTA.
- **Work:** explicitly not reused; Work shows real outcomes where available, this page is a diagnostic offer, not a case study, and says so.
- **Homepage buyer path:** the symptom language is reused verbatim (see Buyer problem), not paraphrased into a new claim.

### Section Rhythm Map
1. Hero (light)
2. Commercial status panel (light, bordered, honest, matches Package 1's dashed-border unresolved-price device)
3. Buyer problem (light)
4. **Experience Friction Map** (dark, signature section)
5. Audit territories (light)
6. Evidence model + one illustrative finding (light, disclosure-revealed sample, labeled illustrative)
7. Prioritisation model (light, textual Impact/Effort framing, not a widget)
8. Deliverables + scope boundaries (light, included/excluded device matching Pricing's)
9. Evidence Pack / Work / Pricing relationship (light, three-card cross-link row)
10. Post-audit path / final CTA (accent surface)

### Card/Icon Opportunity Audit
No feature-card grid for the friction map (rejected as generic per TasteSkill). Six new bespoke inline-stroke icons for the five friction stages plus one audit-territory icon set, matching `PricingIcons.tsx`/`EvidencePackIcons.tsx` convention; Phosphor rejected, same reasoning as every prior package.

### Media Opportunity Audit
No image-generation tool available. No stock photography (a generic desk photo would not represent a friction diagnosis honestly). No fourth reuse of a contextual-photography device. The friction map's own sequential register, plus one bespoke "diagnosis resolving into a plan" SVG composition (in the same spirit as `DiscoveryResolutionArt`) for the final CTA chapter, is the page's visual material.

### Rejected patterns
- Any literal heatmap/analytics-dashboard visualization (violates the explicit "do not encode the friction map solely visually" accessibility instruction on its own, and reads as generic SaaS).
- Draggable before/after image comparison sliders (client JS, gesture-dependent, no real before/after imagery to compare).
- A gamified Kanban/drag board for prioritization (explicitly against the "not gamified" register and adds unjustified client JS).
- Phosphor or any icon library (no dependency authorized).
- Inventing a plausible-looking code/price/duration for this service (the one thing explicitly forbidden by the original RW-PAGE-11 commissioning directive).

## RW-PAGE-11A addendum — commercial authority correction (2026-08-16)

This brief's original "Commercial authority" line (above) stated "None exists," correctly reflecting the repository at RW-PAGE-11 implementation time. A follow-on `RW-PAGE-11A` directive supplied specific commercial authority for `UXR-01` (code, family, layer, price band $3,500-$14,500, timeline 2-4 weeks including a 14-day Microsoft Clarity data-collection period, Evidence Tier E2, seven deliverables, five exclusions, and attach paths `OPT-01`/`BLD-02`/`OPT-07`), described as external v49 Product Office authority not available inside the repository. This is preserved as history, not erased, matching how `CLM-007`'s prior `BLOCKED` state was preserved rather than deleted when it was later reconciled.

**Provenance note, stated plainly:** unlike `RW-DEPLOY-02`'s historical-deployment claim (independently verified against live Vercel API data before being accepted), this commercial fact set has no external system Claude can query to verify it against. It rests on the same sole human Product Office channel already relied on for every commercial fact in `CLM-007`/`GOV-020`. It was not silently absorbed into content: recorded via `GOV-021`/`CLM-008` before implementation proceeded, per the repository's own claims-safety discipline.

**What changed in implementation:** the "not yet published in the catalog" status panel was replaced with an integrated price plate in the hero (reusing Pricing's `PackageCard` price-plate visual language, per the directive's instruction not to bolt on a generic four-cell metadata strip). The generic four-quadrant Impact/Effort prioritisation model was replaced with the authoritative three-band roadmap (Quick wins/Medium/Rebuild scope). The five-item generic deliverable list was replaced with the seven authoritative deliverables, each with its sub-detail intact. Exclusions were replaced with the exact five authoritative items. An attach-path block (`OPT-01`/`BLD-02`/`OPT-07`, catalog route `OP-01E → UXR-01 → OPT-01 or BLD-02`) was added. The illustrative finding was extended with an evidence-source → finding → roadmap-band chain. The Friction Map and audit-territories sections each gained an explicit qualifier sentence clarifying they are one explanatory lens / illustrative examples, not the contractual scope (the seven deliverables are). Visual thesis, section rhythm, dark-mode authorship, responsive behavior and the Evidence Pack/Work relationship framing were preserved unchanged, per the directive's explicit "not a visual restart" instruction.
