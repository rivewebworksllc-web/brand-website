# RW-PAGE-13 — Brand Identity + Digital Design System Design Decision Brief

**State:** In progress, implementation not yet Silvester-reviewed
**Route:** `/services/web/brand-identity-digital-design-system/`
**Catalog code:** `FND-05`
**Baseline:** `develop @ 8b2a091daab2f1ed25724e0ec9b1bcf5c2e9ee66`
**Branch:** `feature/brand-identity-digital-design-system`
**Commercial authority:** Supplied directly by the `RW-PAGE-13` Product Office directive: code `FND-05`, family "FND - Foundations & Discovery", Layer 1 ("Land"), price band $4,000-$9,500 (public/pricing-surface treatment "From $4,000", out of scope here), timeline 2-6 weeks, Evidence Tier E2, three deliverable groups (Figma design-system file, React component-library export, style guide PDF), five exclusions, attach path `OP-01E → FND-05 → BLD-02` then optionally `MGT-03`. This is not yet reconciled into `docs/governance/CLAIMS_REGISTER.md`; per the directive's own scope ("stopping point: Silvester visual review", "production deployment not authorized"), that reconciliation is deferred to the same governance-recording step every prior authored page used post-acceptance, not before implementation - matching `RW-PAGE-11`'s original pattern of implementing against directive-supplied facts first.

## Required Skills and Tools

| Skill/tool | Durable state | Current-session state | Invocation |
|---|---|---|---|
| UI/UX Pro Max | `VERIFIED` | `INSTALLED_CALLABLE` | Real `search.py` runs: `--domain landing` ("design system landing page tokens components explanation B2B service" - all eight results generic SaaS/pricing/event patterns, none adopted), `--domain ux` ("design token visualization diagram accessible non-chart" - returned mobile-first, disabled-state, ARIA-label and keyboard-nav guidance, applied directly to the Component Anatomy specimen and the fragment register) |
| 21st.dev / Magic | `VERIFIED` | `INSTALLED_CALLABLE` | Three authenticated `get_inspiration` explorations: (1) "design system landing page hero showing fragmented UI converging into unified tokens" - returned AI-purple-gradient/glass heroes and a generic dashboard-preview hero, none adopted; (2) "design token color spacing typography scale visual explanation component anatomy diagram" - returned generic "branding card" swatch components and a logo-wall component, none adopted; (3) "component specimen button states variants documentation" - returned six generic shadcn-style button-variant components, none adopted (a real second component library is not this page's deliverable to display, and Rive has no icon/component library dependency to showcase) |
| TasteSkill (`design-taste-frontend`) | `INSTALLED_CALLABLE` | Genuinely invoked this same session (also used for `RW-PRICING-UXR-01A` earlier today); ruleset re-applied here as critic | Applied against this page's plan below; one concrete change resulted (icon count reduced, see Card/Icon Opportunity Audit) |
| Claims Register review | Repository governance | `INSTALLED_CALLABLE` | Confirmed no `CLM` entry exists yet for FND-05 and no entry for this route; commercial facts are directive-supplied, not fabricated, consistent with `RW-PAGE-11`'s original precedent (implement against supplied facts, reconcile governance at acceptance) |
| React / Next.js / TypeScript / Tailwind | Repository stack | `INSTALLED_CALLABLE` | Server components only; two client-free disclosure/diagram components, zero new client JS |
| Playwright / axe | Repository dependencies | `INSTALLED_CALLABLE` | Run in validation phase |

## Design Decision Brief

### Route decision

Nests under the already-declared `/services/web/` namespace alongside `/services/web/ux-audit-conversion-roadmap/`, matching that page's own precedent that Next.js does not require a `/services/web/` index page to exist for a child route to work. No legacy route (`/services/web-growth/design-system/`) is built; no second "Brand Identity + Visual System" page is created (directive §5 explicitly retires that duplication into this one consolidated offer).

### Buyer problem

Not a generic "we build brands" opener. Reused directly from the directive's own supplied buyer-problem language (§6), which functions here the way the homepage `buyerPaths` symptom set functioned for `RW-PAGE-11`: an already-approved problem statement, not a new marketing claim. Selected six symptoms for the page (of the nine supplied) to avoid a data-dump list, per content-density review: inconsistent pages, drifting button styles, shifting fonts/spacing, recreated components, tribal-knowledge decisions, and new developers unable to tell "correct" from "improvised."

### Buyer-state transformation

Before: *"We have a logo, but every page, developer and contributor makes slightly different visual decisions, and nobody can point to the rule that's supposed to govern it."*
After: *"We have one documented, reusable system, tokens, components and rules, that our website, developers and any future build start from, instead of re-deciding the same defaults every time."*

### Final visual thesis

**A design system is not a nicer style guide. It is the difference between re-deciding the same visual choices forever and deciding them once.** The signature device (Fragments to System) makes this literal: real inconsistent buttons, spacing values and heading sizes, each labeled with the actual small inconsistency, resolve through connector lines into a named four-stage chain (Tokens, Primitives, Components, Patterns). Every fact is server-rendered text, not an image, so the mechanism is legible to a screen reader exactly as it is to a sighted visitor, matching this repository's standing accessibility discipline for signature diagrams (`FrictionMap`, `EvidenceRegister`, `PhilosophyFlow`).

### Visual registers

Primary Systemic (matching Work/Pricing/Trust/Evidence Pack/UXR-01). One dark chapter only (Fragments to System), matching the sitewide "one dark signature chapter per page" convention already established by UXR-01's Friction Map and Pricing's Paid Discovery section. No photographic/Intimate register: no image-generation tool is available in this environment (confirmed absent, consistent with every prior authored page's brief), and a generic stock "designers at a whiteboard" photo would not represent a token/component system honestly - the directive's own §30 explicitly permits 0-2 photographic moments, and 0 is the honest choice here, same reasoning `RW-PAGE-11`'s brief gave for its own page.

### Cross-page repetition audit

- **UXR-01:** shares the hero price-plate device (bordered "Starting band" panel with timeline/evidence pills) and the three-card cross-link relationships row. Both are reused **deliberately, not lazily**: they are this repository's established generic "commercial fact" and "cross-link" chrome, not either page's signature moment. RW-PAGE-11A's own brief reused Pricing's price-plate for the identical reason ("reuses Pricing's `PackageCard` price-plate visual language... for cross-page consistency"); this page continues that precedent rather than inventing a fourth variant of the same information. What is **not** reused: UXR-01's Friction Map anatomy (sequential stage register), its illustrative-finding severity/evidence-chain device, and its roadmap-band grid - this page's signature device (Fragments to System) and its Component Anatomy specimen have their own distinct shapes, per the Content-Swap Test below.
- **Accessibility (`/trust/accessibility/`):** shares nothing structurally. No Keyboard Path, no Remediation Loop, no barrier-verify-remediate framing. Accessibility appears here only as a stated property of the token system (WCAG contrast documentation on the color tokens), not as a section.
- **Evidence Pack:** shares the "Evidence Tier E_" language and the cross-link CTA pattern, not `EvidenceRegister`'s per-artifact sample-view anatomy.
- **Pricing:** shares the deliverables-grid device (numbered bordered cards, included/excluded split) - the same device UXR-01 already reused from Pricing's package-card anatomy, now a third consistent use of one established "scope" device rather than a fourth new invention.
- **Homepage:** no buyer-path symptom set exists for brand/design-system fragmentation (unlike UXR-01's reuse of the "Website & Growth" path), so this page's buyer-problem language is authored fresh from the directive's own supplied symptom list rather than reused verbatim from elsewhere.

### Section Rhythm Map

1. Hero (light) - problem-forward headline, price-plate panel (From $4,000-$9,500 band, 2-6 weeks, E2)
2. Buyer problem + two entry paths (light, bordered list + two-column text, not cards)
3. **Fragments to System** (dark, signature section, Memorable Moment A)
4. Token translation (light, three-step flow, distinct content from `PhilosophyFlow`)
5. Typography + color system (light, compact role grid, not a font showcase)
6. **Component Anatomy** (light, bordered specimen with disclosure, Memorable Moment B)
7. Brand guide vs. design system (light, two-column definition comparison, not cards)
8. Deliverables + exclusions (light, numbered grid, reused device per repetition audit)
9. Process (light, six-step horizontal sequence: Inventory, Normalize, Tokenize, Componentize, Document, Handoff)
10. Evidence Pack / Pricing / Next-step relationships (light, three-card row, reused device per repetition audit)
11. Final CTA (accent surface, matches every other authored page)

One dark chapter, eleven sections, at least five distinct layout families (price-plate hero, bordered problem list, dark connector register, three-step flow, definition comparison, numbered deliverable grid, horizontal process sequence, three-card relationship row) - no three consecutive sections share a layout family.

**Eyebrow-rationing note (documented rejection of a generic external rule):** UI/UX Pro Max's generic guidance and a third-party taste-checklist both suggest rationing eyebrows to roughly one per three sections. This repository's own accepted convention, established across Pricing, UXR-01, Trust and Evidence Pack, places a short eyebrow above nearly every section as an intentional wayfinding device consistent with the Rive visual language. Per `CLAUDE.md`'s "external suggestions never override the approved Rive visual language," this page follows the repository's own established convention instead, not the generic checklist.

### Card/Icon Opportunity Audit

TasteSkill critique flagged that a full new icon family (one per §29's seven suggested roles: token, typography, spacing, component, handoff, system, consistency) would be a sixth distinct icon-badge family on the site (after Web/AI/Cloud-Data/Strategy group icons, Evidence Pack icons and Friction Map icons), reading as repetitive rather than restrained. Reduced to exactly two new bespoke inline-stroke icons, each earning its place: a token icon (small square resolving into a labeled tag, used once as the Fragments-to-System chapter mark) and a handoff icon (an arrow crossing a boundary, used once for the developer-handoff relationship). Every other icon need is met by reusing `PricingIcons.tsx`'s existing `IncludedIcon`/`SeparateIcon` for the included/excluded lists, exactly as UXR-01 and Pricing already do, rather than drawing new ones. Cards are used only for the deliverables grid and the three-card relationship row (both reused, established devices per the repetition audit); the buyer-problem symptoms, entry paths and brand-guide-vs-system comparison are deliberately not cardified, per the directive's own §28 instruction to keep open editorial space.

### Media Opportunity Audit

No image-generation tool available in this environment. No stock photography (a generic "designers at a whiteboard" or "sticky notes" photo would not represent a token/component system honestly, and would be this page's first and only photographic device with no supporting reason). Zero photographic moments, consistent with `RW-PAGE-11`'s own reasoning. The Fragments-to-System register and the Component Anatomy specimen are this page's visual material, both built from real Tailwind-rendered primitives (real small buttons/text at real inconsistent radii and spacing, not decorative shapes), never a div-based fake screenshot of a design tool.

### Rejected patterns

- Any literal Figma-file screenshot or fake design-tool UI (directive §10 explicitly forbids this; also a hard TasteSkill/AI-tell ban on div-based fake product previews).
- A generic three-equal-card feature grid for the deliverables (used a numbered bordered grid instead, matching UXR-01's precedent, not three identical cards).
- A full seven-icon new icon family (reduced to two, reusing existing icons elsewhere; see Card/Icon Opportunity Audit).
- Literal font-size type specimens rendering multiple typefaces (no confirmed client typography exists yet for this generic service page; the directive itself treats "Inter" as implementation-example language only, so the type-scale section describes roles, not renders invented type).
- Inventing literal hex/HSL token values or a proprietary token-naming taxonomy (directive §13 explicitly forbids this without engagement-specific authority); illustrative token names are labeled "Illustrative" wherever shown, matching the `illustrativeFinding`/"Sample, illustrative only" convention already established for UXR-01.
- Fabricated productivity/design-debt-reduction percentages (directive §46, hard claim-safety ban).
- A generic "Discovery → Design → Develop → Launch" process (directive §19 explicitly rejects this as describing a website project, not a system-building engagement; used Inventory → Normalize → Tokenize → Componentize → Document → Handoff instead).

### Template-resistance result

**Pass.** A generic design agency could not drop its logo into this page unchanged: the Fragments-to-System register, the Evidence Tier E2 relationship to `/trust/evidence-pack/`, the explicit React-export-not-a-full-app boundary, and the OP-01E catalog attach path are all specific to how Rive scopes and evidences this engagement, not generic branding-agency language.

### Content-swap result

**Pass.** "UX Audit" cannot replace "Design System" in this composition: the signature chain (fragmentation → tokens → components → reuse → handoff) has no friction-map, evidence-severity or roadmap-band equivalent, and the Component Anatomy specimen (typography/spacing/radius/token/state/focus) has no analog in UXR-01's or Accessibility's content shape.
