# RW-PAGE-10A — Evidence Pack™ Design Decision Brief

**State:** APPROVED for implementation by the RW-PAGE-10 Product Office commission
**Route:** `/trust/evidence-pack/`
**Baseline:** `develop @ abdfe3359e4341068f83a4be6b6e7bead9f1165f`
**Branch:** `feature/evidence-pack-authored-page`
**Content authority:** No new commercial/claims content. Every fact used (six artifacts, evidence tiers, claim boundary) is already approved and shipped in `src/lib/content/trust.ts` (`trustContent.evidence`, `trustContent.depth`, `trustContent.claims`) and `src/lib/content/homepage.ts` (`homepageEvidencePack`). This page presents that existing authority at depth; it does not introduce a new claim requiring a `CLAIMS_REGISTER.md` entry.

## Required Skills and Tools

| Skill/tool | Durable state | Current-session state | Invocation |
|---|---|---|---|
| UI/UX Pro Max | `VERIFIED` (`CAPABILITY_REGISTER.md`) | `INSTALLED_CALLABLE` | Real `search.py` runs: `--stack nextjs` (generic Next.js hygiene, adopted), `--domain product "evidence pack documentation artifact trust proof register"` (Knowledge Base/Documentation + API Developer Portal product types, partially adopted), `--domain ux` (two queries, genuinely zero database matches, reported honestly rather than fabricated), `--domain icons` (Phosphor recommended, rejected, reasons below) |
| 21st.dev / Magic | `VERIFIED` | `INSTALLED_CALLABLE` | Three authenticated `mcp__21st__get_inspiration` explorations: (1) evidence/record card with stage label, (2) checklist/timeline progressive disclosure, (3) mobile stacked record list with illustrative/sample content pattern. All results below |
| TasteSkill (`design-taste-frontend`) | Locally `INSTALLED_CALLABLE` | `INSTALLED_CALLABLE` | Full skill loaded and applied as critic against the emerging direction; several of its infrastructure defaults (Phosphor icons, Motion/GSAP, mandatory real photography) conflict with Rive's already-ratified visual language and this package's own "no new dependency, no image-gen tool" constraints, rejected below with reasons |
| Human Design Review | Active repository procedure | Available | Applied after rendered implementation (report §) |
| React / Next.js / TypeScript / Tailwind | Repository stack | `INSTALLED_CALLABLE` | Existing App Router and Rive design system, zero new client components planned |
| Playwright / axe | Repository dependencies | `INSTALLED_CALLABLE` | Run in validation phase |
| Claims Register review | Repository governance | `INSTALLED_CALLABLE` | Confirmed no new CLM entry required (content authority section above); sample-artifact content audited against `CLM-003`/`CLM-004`/`CLM-005` (client logos/testimonials/case-study metrics, all `BLOCKED`) to ensure no fabricated real-looking evidence |

## Design Decision Brief

### Repository authority
Six artifacts, their `stage`/`record` fields, the E1/E2/E3 evidence-tier framing, the supported/withheld claim boundary and the handoff points are all verbatim from `trustContent` (`src/lib/content/trust.ts`). This page is explicitly promised by Trust's own copy: *"The dedicated Evidence Pack route provides the deeper artifact view when that page is commissioned and available"* (`trustContent.routes.items[0].body`). Nothing here is new commercial fact; everything here is new depth and new sample illustration of already-approved fact.

### Six-artifact content model
Reused directly, not re-authored: Scope decisions (Decision), Architecture record (Design), QA evidence (Validation), Launch checklist (Release), Operations runbook (Operation), Improvement backlog (Continuation). Each keeps its existing `id`/`stage`/`title`/`description`/`record` from `trustContent.evidence.artifacts`. This page extends each artifact with three things Trust's summary spine does not have room for: a labeled sample view, an evidence-tier note, and a privacy/ownership line specific to that artifact.

### Claim/simulation safety model
The single biggest risk on this page is a "sample artifact view" reading as a real client deliverable. Every sample view is:
1. Headed with a persistent `SAMPLE` marker (visually distinct treatment, not just a small caption easy to miss),
2. Built from generic, non-attributable placeholder language ("Acme" is itself banned by TasteSkill and is avoided; sample content uses structural placeholders like "Engagement scope" rather than any brand-like invented name),
3. Never paired with a specific number, percentage or metric presented as if measured (satisfies `CLM-005`'s block on case-study results/metrics and TasteSkill's fake-precision ban),
4. Never a logo, photo of a person, or named company (satisfies `CLM-003`/`CLM-004`).
Sample views are CSS/typographic document mockups, not photography, and are architecturally incapable of being mistaken for a screenshot of real client work.

### Cross-page repetition audit
Compared against Homepage, Work, Guides, Insights, About, Trust, Pricing, Process.
- **Trust (closest relative):** shares the six-artifact set and the E1/E2/E3 tier language, but does **not** reuse `EvidenceSpine` or `ClaimBoundary` as components. Evidence Pack's list anatomy adds a sample-view disclosure and per-artifact tier/ownership lines that `EvidenceSpine` has no slot for; the claim boundary is summarized in one closing panel referencing Trust rather than re-rendering the full supported/withheld grid a second time (avoids exact duplication of an already-shipped chapter).
- **Pricing:** shares the native-`<details>` disclosure convention (`PackageCard`/`ManagedServices`) and the connector-line device (`PhilosophyFlow`), reused here for the six-artifact stage progression, but Evidence Pack's list is a single continuous register, not grouped family cards, and carries no commercial figures.
- **Homepage `EvidencePackSection`:** shares the six-item structure but is a compressed teaser (title + description only); this page is explicitly the "deeper artifact view" that teaser already promises via its own CTA.
- **Process:** shares the idea of a staged pipeline but Process describes *how work moves*; Evidence Pack describes *what gets recorded while it moves*. A single, qualitative connective sentence per artifact links to the relevant Process stage without claiming a false precise 1:1 mapping Process's own copy never states.
- **Work:** does not reuse `WorkIncludes`'s single-active-panel system; unrelated register (case narrative vs. proof register).

### Visual thesis
**The record is the proof, and the record looks like a record.** Each of the six artifacts is presented as a bounded register entry (stage, title, description, what it contains, what it looks like, who can see it, when it matters) rather than a marketing feature tile. The page's job is to make an abstract promise ("we document delivery") into six inspectable, sample-illustrated things.

### Register strategy
**Primary: Systemic** (Work/Pricing/Trust's shared register) — comparison and structure across six heterogeneous artifacts, typography and grouping doing the organizing work.
**Secondary: none new** — this page deliberately does not add an Intimate photographic beat; Trust already owns the two contextual photographs (`technical-review.webp`, `knowledge-handoff.webp`) for this content family, and repeating that device here would blur, not sharpen, the Trust/Evidence Pack relationship. Evidence Pack's "media" is the sample document illustrations themselves (§ Media Opportunity Audit).

### Buyer-state transformation
Before: *"Trust said there's an Evidence Pack. I don't actually know what's in it or what it looks like."*
After: *"I've seen what each of the six records actually contains, roughly what it looks like, who gets to see it, and how it connects to the process I'd go through."*

### Section Rhythm Map
1. Hero (light, restrained, matches Trust/Pricing hero anatomy)
2. Register intro (what the pack is, one paragraph, no new claim)
3. **The six-artifact register** (signature section, dark chapter matching Trust's `EvidenceSpine` tonal family, deepest content on the page)
4. Evidence-tier explainer (light, reuses `trustContent.depth` verbatim)
5. Privacy and ownership (light, reuses `trustContent.handoff` points, reframed per-artifact inside the register itself rather than repeated as a separate list)
6. Claim boundary summary (light, references Trust's full panel rather than duplicating it)
7. Process/Trust cross-links (light, two-route card, matches Trust's `routes` pattern)
8. Final CTA (light, reuses Trust's own final CTA copy and destinations verbatim, avoiding duplicate-intent CTAs)

### Card/Object Opportunity Audit
Rejected: six equal feature cards in a grid (explicitly the generic pattern TasteSkill and Rive's own repetition discipline both flag). Adopted: a single continuous vertical register (list, not grid) with a persistent stage-connector rule, consistent with Trust's spine family but re-authored with a sample-view disclosure slot per entry.

### Icon Opportunity Audit
UI/UX Pro Max recommended Phosphor (`File`, `FileText`). **Rejected**, same reasoning as `RW-PAGE-08B`/`RW-PW07C`: no icon library is installed, this package does not authorize adding one ("no new dependency unless justified" and the directive's own explicit "no autoplay video, no WebGL, no heavyweight document viewer" minimalism instruction). Six new bespoke inline-stroke icons (matching `PricingIcons.tsx`/`MegaMenuIcons.tsx` convention: `viewBox 0 0 24 24`, `stroke="currentColor"`, `strokeWidth 1.5`) represent each artifact concept (a boundary bracket for Scope, a node diagram for Architecture, a checkmark-in-frame for QA, a flag/gate for Launch, a dial for Runbook, a stacked-list for Backlog).

### Media Opportunity Audit
No image-generation tool is available this session (checked again). TasteSkill's default preference is real photography; rejected here because a stock photograph cannot represent a written scope record or a QA checklist honestly, and reusing Trust's existing two contextual photographs a third time would be repetition, not restraint. Instead: six small bespoke CSS/SVG "sample view" mockups, one per artifact, each explicitly labeled `SAMPLE`, following the established `DiscoveryResolutionArt`/`CapabilityVisual` precedent of authored composition when no photography pipeline exists.

### Sample-artifact strategy
Each artifact's sample view is a compact, generic, typographically-honest mock of that artifact's shape (e.g. the Scope sample shows a bordered two-column "Included / Separately scoped" mock, matching Pricing's own already-approved included/excluded device; the QA sample shows a short mock checklist with neutral pass marks; none contain a real client name, logo, number presented as measured, or photograph). Revealed via the same native `<details>` disclosure convention used throughout Pricing and Trust.

### Evidence-tier strategy
Reuses `trustContent.depth` verbatim (E1/E2/E3 framing, and the note that "the label is not the proof, the defined records are"). Each artifact additionally states, in one honest sentence, which tier that artifact *typically* appears at, phrased as "commonly documented at" rather than a guaranteed universal rule, consistent with the existing copy's own qualification that tier depth is set by engagement scope, not by this page.

### Privacy/ownership treatment
Each artifact states who can see it and when, reusing the spirit of `trustContent.handoff.points` and `trustContent.boundaries` (Privacy item) rather than inventing new privacy language. No claim of a formal privacy certification is made (matches `claims.withheld`: "Unapproved certifications").

### Process connection
One qualitative sentence per artifact links to the relevant Process stage name (Understand, Define, Architect, Build, Verify, Launch & handover, Operate & improve), sourced from the live `/company/process/` page, without asserting a false precise 1:1 mapping.

### Memorable moments
1. The stage-connector register itself, the page's one signature section.
2. The sample-view disclosure, the first place on the site a visitor can see *what an evidence artifact actually looks like* rather than just its description.

### Mobile thesis
The register collapses to a single column; the stage-connector rule remains (vertical line already collapses cleanly, precedented by `EvidenceSpine` and `PhilosophyFlow`); sample-view mockups reflow to single-column internally (matching `PackageCard`'s existing tier-guidance mobile behavior). No horizontal scroll anywhere.

### Dark-mode thesis
The register chapter is intentionally dark (navy), matching Trust's `EvidenceSpine` and Pricing's Paid Discovery chapter, the third and final use of this specific device across the site; not introduced elsewhere. All other chapters use the standard light `surface`/`surface-alt` tokens that already auto-remap for dark theme.

### Capability evidence
UI/UX Pro Max, 21st.dev and TasteSkill genuinely invoked this session (raw output retained in the session transcript, summarized above and in the implementation report). No image-generation tool, no icon library, no animation library available or added.

### Rejected patterns
- Six equal feature cards (generic-AI grid pattern).
- Phosphor/HugeIcons/any icon library (no dependency authorized).
- Motion/Framer/GSAP for the connector or disclosure (RSC-only, zero new client JS; native `<details>` and CSS transitions suffice, matching the directive's explicit "minimal client JS" instruction).
- Stock/Picsum photography standing in for document content (dishonest representation of a written artifact).
- A third contextual photograph reusing Trust's device (repetition, not a new idea).
- Duplicating `EvidenceSpine`/`ClaimBoundary` verbatim on a second page (unexamined repetition).
