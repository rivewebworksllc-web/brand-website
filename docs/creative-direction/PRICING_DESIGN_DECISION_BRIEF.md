# RW-PAGE-08B — Pricing Design Decision Brief

**State:** APPROVED for implementation by the RW-PAGE-08B Product Office directive
**Route:** `/pricing/`
**Baseline:** `develop @ 37b75465b557887c97b1d6cd4aa33bb293224a6c`
**Branch:** `feature/pricing-authored-page`
**Commercial authority:** Catalog v8.5.4 / "v49," reconciled into `CLAIMS_REGISTER.md` `CLM-007` via `GOV-020`

## Required Skills and Tools

| Skill/tool | Durable state | Current-session state | Invocation |
|---|---|---|---|
| UI/UX Pro Max | `VERIFIED` (`CAPABILITY_REGISTER.md`) | `INSTALLED_CALLABLE` | `search.py --design-system "B2B agency pricing page dense commercial comparison"` + `--domain ux "progressive disclosure comparison dense information"`, both real runs, real output (below) |
| 21st.dev / Magic | `VERIFIED` | `INSTALLED_CALLABLE` | Three authenticated `mcp__21st__get_inspiration` explorations: package pricing cards, managed-tier comparison, accessible FAQ disclosure |
| TasteSkill (`design-taste-frontend`) | Locally `INSTALLED_CALLABLE` (per `CAPABILITY_REGISTER.md`, session-verified) | `INSTALLED_CALLABLE` | Full skill loaded and applied as critic; most of its infrastructure defaults (Phosphor icons, Motion library, sans-only typography) conflict with Rive's already-ratified visual language and are rejected below with reasons, per `SKILL_REGISTRY.md` §3.1 |
| Human Design Review | Active repository procedure | Available | Applied after rendered implementation (§ below) |
| React / Next.js / TypeScript / Tailwind | Repository stack | `INSTALLED_CALLABLE` | Existing App Router and Rive design system |
| Playwright / axe | Repository dependencies | `INSTALLED_CALLABLE` | Run in validation phase |
| Claims Register review | Repository governance | `INSTALLED_CALLABLE` | `CLM-007` reconciled via `GOV-020`; Package 1/10 unresolved fields tracked explicitly, not invented |

## Design Decision Brief

### User problem

The visitor already suspects they need help but cannot yet translate that need into an engagement type, a realistic budget or a first commercial step. Generic agency pricing pages either hide numbers entirely (forcing a sales call to learn the order of magnitude) or expose a flat SaaS-style tier grid that implies uniform, interchangeable work. Neither is honest about how bespoke technical/AI/cloud engagements actually price.

### Page role

Pricing is the commercial decision environment that sits beside Work (proof), Trust (evidence discipline) and Start (routing). It does not replace Paid Discovery or a proposal; it gives a visitor enough real structure to self-qualify before they ever talk to Rive.

### Visual thesis

**Price becomes legible when scope becomes visible.** Every commercial object on the page (package, managed tier, Paid Discovery, FAQ answer) is presented as a bounded thing with a visible edge: what is inside, what is outside, what it costs to start, what happens next. The page's job is not to sell the cheapest number, it is to make the boundary of every number inspectable at a glance, extending Trust's "boundaries are stated, not hidden" principle into commercial territory.

### Primary storytelling metaphor

A scope ledger, not a shelf of products. Packages are grouped by the buyer problem they solve (Web, AI, Cloud/Data) rather than laid out as ten equal interchangeable tiles; managed services are visually and physically a separate register (continuity, not acquisition); Paid Discovery is the hinge between "I have a vague need" and "I have a scoped, priced next step."

### Intended feeling

Before: *I know I need help, but I don't know what kind, what it costs, or what I'd actually get.*
After: *I understand roughly what this costs, what's included, what's excluded, what evidence I get, and what happens next — and I trust Rive more because the boundaries were visible before I ever talked to them.*

Calm and confident, not urgent or salesy. Structured enough to compare ten packages; human enough not to feel like a spreadsheet.

### Register strategy

**Primary: Systemic** (Work's register) — the page has to carry real comparison and structure across ten packages and three managed tiers; typography and grouping, not photography, do the primary organizing work, matching Work's "visual system objects, controlled information density" approach rather than Industries' photographic chaptering.

**Secondary: Intimate** (Connect's register) — the pricing philosophy statement, the Paid Discovery chapter and the closing conversion deliberately drop density and speak directly, human and low-pressure, so the page doesn't read as a spreadsheet start to finish.

**Limited immersive moment:** the Paid Discovery chapter is the one place a contextual photographic/illustrative beat is used (ambiguity resolving into a defined scope), consistent with Industries' "meaningful media, not decorative media" discipline but used exactly once, not throughout.

This confirms the Product Office's starting hypothesis (systemic primary / intimate secondary) rather than overriding it; the one addition is naming precisely *where* the one immersive beat sits so it doesn't sprawl across every chapter.

### Cross-page differentiation

- **Work:** evidence-led systemic register, applied here to *packages* rather than *case narrative*. Pricing does not reuse Work's tab/panel `WorkIncludes` presentation system; the package field uses a different anatomy (grouped cards, not a single active-panel pattern) because ten heterogeneous commercial objects need to be scannable together, not cycled one at a time.
- **Trust:** shares the "boundaries are visible" principle and a restrained included/excluded typographic device, but does **not** reuse the Evidence Spine (a six-artifact horizontal system) or the Claim Boundary component — Pricing's inclusion/exclusion device is package-local (paired columns inside each package), not a page-spanning spine.
- **Industries:** shares the license to use one real contextual/immersive beat, but Pricing does not adopt a Field Index, chapter-per-industry structure or the CREDIBILITY/SCALE composition.
- **Connect:** shares intimate, editorial restraint at the philosophy and closing chapters only; Pricing does not reuse Connect's question-scaffold or open-note form layout, because Pricing's core content is comparison, not conversation.
- **Homepage:** does not reuse Presentation Tabs; the package field is server-rendered and permanently visible, not an auto-cycling takeover surface — commercial content must never depend on a timed reveal.

Closest similarity risk: a "package field" of grouped cards could collapse into Work's `WorkIncludes` tab pattern or a generic SaaS grid. Mitigated by: (a) grouping by buyer domain instead of a flat list or a single active panel, (b) a distinct package-card anatomy (below) not used elsewhere on the site, (c) explicit rejection of tier badges/toggles per the anti-pattern audit.

### UI/UX Pro Max findings

Real invocation: `search.py --design-system "B2B agency pricing page dense commercial comparison"` returned the generic "Pricing Page + CTA" pattern (recommend/highlight a starter plan, annual-discount toggle, feature-comparison table, "Trust & Authority" style with certificate/badge carousel). A second run, `--domain ux "progressive disclosure comparison dense information"`, returned one directly-applicable guideline: **do not convey information by color alone** (icon/text required alongside color for meaning) — applied directly to the included/excluded system below.

**Recommendations adopted:** the "do not convey meaning by color alone" rule (inclusion/exclusion uses icon + text + typographic weight, never color alone); the general instruction to keep card anatomy scannable above the fold before progressive disclosure.

**Recommendations rejected, with reasons:**
- Pre-selected/highlighted "recommended" starter plan and "Most Popular" badge — Rive has no commercial authority to imply a recommendation between packages that address different buyer problems; the directive explicitly forbids this.
- Annual/monthly toggle and discount framing — none of Rive's pricing is subscription-toggle-shaped; managed services already have their own tier logic, and toggling implies a false equivalence between one-time project pricing and recurring care plans.
- Certificate/badge carousel and "Trust & Authority" visual style (generic trust badges, security seals) — Rive's actual trust device is the Trust Center / Evidence Pack, not decorative badges; importing badge iconography here would misrepresent unverified certifications, which `CLAIMS_REGISTER.md` (`CLM-006`) still lists as `BLOCKED`.
- Plus Jakarta Sans / generic SaaS blue accent system — conflicts with Rive's ratified Fraunces + navy/maroon/gold palette (`GOV-016`, `GOV-018`).

### 21st.dev / Magic exploration

Three purposeful `mcp__21st__get_inspiration` passes (real invocations, IDs recorded):

1. **"B2B agency pricing page package cards with inclusions/exclusions, comparison hierarchy, editorial not generic SaaS pricing table"** — 8 results, all generic two/three-tier SaaS pricing components (glass-effect cards, monthly/yearly toggles, "Popular" highlight, feature-checklist walls). None match Rive's ten-heterogeneous-package, grouped-by-domain problem; direct import rejected across the board.
2. **"managed service subscription tier comparison card, recurring plan vs one-time project distinction"** — 6 results, same generic subscription-tier family (Free/Pro/Enterprise selectors, per-user sliders, "Popular" tags). None distinguish one-time project pricing from recurring care pricing, which is the actual problem Pricing has to solve; rejected.
3. **"accessible FAQ accordion server rendered details disclosure pattern"** — 6 results. Useful *pattern* confirmation (native keyboard-accessible disclosure, hash-linkable accordion items, grouped FAQ layout) but no direct import: all depend on Radix/Framer Motion, and the repository's own `WorkFAQ.tsx` (native button + `hidden` panel, zero dependencies, already accessible) already satisfies the same pattern without adding a dependency.

**Material design influence:** confirms the "no toggle, no popular badge, no checklist wall" anti-pattern list already mandated by the directive, and confirms native-disclosure FAQ (extending `WorkFAQ`'s existing pattern) over importing a component.

**Direct component adopted:** none. **Reasons:** every result was generic-SaaS-shaped and would fail the template-resistance test outright; none handle the project-vs-managed distinction or ten-package grouping this page actually needs.

### TasteSkill (design-taste-frontend) critique

Genuinely invoked and read in full. Most of its concrete guardrails (eyebrow restraint, section-layout-repetition ban, three-equal-cards ban, long-list alternatives, color/shape consistency locks, "do not convey meaning by color alone," no fake screenshots) are **adopted** because they reinforce, not conflict with, Rive's own governance. Several of its infrastructure defaults **conflict with Rive's already-ratified system and are rejected**:

- **"Fraunces is specifically banned as a default"** — rejected outright. Fraunces is Rive's ratified serif (`GOV-016`, `GOV-018`, `docs/design-system/TYPOGRAPHY.md`); this is a generic greenfield rule that does not apply to a mature, already-accepted brand system.
- **Phosphor/HugeIcons/Radix/Tabler icon library recommendation** — rejected. The repository has zero icon dependency (`MegaMenuIcons.tsx` audited this explicitly) and Pricing follows the same established inline-stroke-SVG convention rather than adding a dependency, per the directive's "no new dependencies expected."
- **Motion (`motion/react`) for scroll reveals/stagger** — rejected. No animation library exists in this repository; existing motion (`Reveal`, `usePresentationCycle`) is hand-built on CSS transitions/IntersectionObserver. Pricing follows the same convention.
- **"Real images via a gen tool first"** — no image-generation tool is connected in this session. Rive's own established convention for this exact situation (`Placeholder` system, ten CSS/SVG-only categories, visibly labeled as pending real asset) is used instead, consistent with `RW-PHASE-02` precedent, not the generic skill's stock-photo fallback.

**Adopted guardrails actually applied to this page:**
- Eyebrow restraint: not every one of the ~8 sections gets an eyebrow; capped deliberately (see rhythm map).
- Section-layout-repetition ban: the package field, managed-service chapter and FAQ each use a materially different layout family, not three consecutive card grids.
- No color-only meaning: inclusion/exclusion uses icon + text + weight, never color alone.
- Long-list alternative: ten packages are grouped into three domain clusters (Web, AI, Cloud/Data) rather than one flat list or a 10-row spec table.
- No em-dash, no fake-precise numbers, no "Jane Doe"/"Acme" filler — copy audited.

### Buyer-state transformation

**Before:** "I know I need help, but I don't know what engagement I need or what this might cost."
**After:** "I understand the likely starting engagement, a realistic starting investment, the scope boundary, the evidence I'd receive, and the next step."

### Section Rhythm Map

| Chapter | Narrative role | Visual mode | Surface | Energy | Media | Card/object role | Icon role | Depth |
|---|---|---|---|---|---|---|---|---|
| Opening | Commercial thesis, sets the "scope becomes visible" frame | Typographic, open composition | Light | Calm, confident | None (typography as material) | None | None | Low |
| Pricing philosophy | Explains "From $X," evidence tiers, and why boundaries matter | Editorial, two-part statement + disclaimer | Light alt | Calm | None | None | None | Low |
| Project engagement field | Compare ten packages | Systemic, grouped cards | Light | High density, controlled | None (Placeholder reserved, not required) | Card required (package = discrete commercial object) | Domain icons (Web/AI/Cloud) | High |
| Paid Discovery | Ambiguity to definition | Intimate, one immersive beat | Navy (dark accent) | Warm, human | Placeholder (contextual, one use only) | Single feature object, not a grid | Discovery icon | Medium |
| Managed services | Continuity, not acquisition | Systemic but visually distinct from project cards (different card anatomy/surface) | Light alt | Steady, operational | None | Card beneficial (tiers) | Continuity/ops icons | Medium |
| FAQ | Remove remaining doubt | Native disclosure, server-rendered | Light | Calm | None | None | None | Low |
| Final conversion | Confident close | Intimate, open | Accent surface | Warm, low-pressure | None | None | None | Low |

No two adjacent chapters share a layout family; only the package field and managed-service chapter use cards, and their anatomy deliberately differs (grouped/domain-clustered vs. tier-ladder) so the page does not read as "card grid → card grid → card grid."

### Card Opportunity Audit

- **Project packages: CARD REQUIRED.** Ten real, discrete, differently-scoped commercial objects; comparison is the section's entire job. Anatomy: name + code, "From $X," timeline, evidence tier above the fold; inclusions/exclusions and attach path behind a per-card disclosure toggle (keeps ten cards scannable without a ten-row spec table).
- **Managed services: CARD BENEFICIAL**, distinct anatomy from project cards (recurring price cadence, support tier, evidence tier, explicit "what triggers a change order") so the two registers ("change something" vs. "keep something healthy") are visually legible without a label explaining it.
- **Paid Discovery: CARD OPTIONAL** — rendered as a single open feature, not a grid item; it is one thing, not a comparison.
- **FAQ, philosophy, opening, closing: OPEN COMPOSITION PREFERRED.** No card boundary earns its keep there.

No package is styled as "recommended." No monthly/annual toggle. No checkmark-wall.

### Media Opportunity Audit

| Chapter | Media decision | Reasoning |
|---|---|---|
| Opening | NO MEDIA (deliberate) | The commercial thesis is a typographic statement; imagery here would compete with, not clarify, the framing message. |
| Pricing philosophy | NO MEDIA (deliberate) | Editorial statement + disclaimer; adding a diagram here risks decorative complexity for a two-sentence idea. |
| Project packages | NO MEDIA | Card anatomy and grouping carry the story; forcing photography onto ten heterogeneous packages would be arbitrary. |
| Paid Discovery | BENEFICIAL MEDIA | One `Placeholder` (category `feature-illustration`, ambiguity-to-definition composition) — the page's one immersive beat, matching the register strategy. |
| Managed services | OPTIONAL, DEFERRED | A continuity/operational illustration would help but is not required for comprehension; deferred to a real commissioned asset rather than forcing a placeholder that adds no information (no image-gen tool connected this session). |
| Final conversion | NO MEDIA | Intimate, open, text-led close, matching Connect's convention. |

No chapter defaults to "no media" without a stated reason; Paid Discovery is the one chapter where media is load-bearing.

### Icon Opportunity Audit

Inline stroke SVGs matching the existing `MegaMenuIcons.tsx`/`CapabilityVisual.tsx` convention (`viewBox 0 0 24 24`, `stroke="currentColor"`, `strokeWidth 1.5`, round caps), no new dependency. Icon roles used: Web, AI, Cloud/Data (package-group headers, scanning aid), Included / Separately scoped (paired, never color-only), Evidence tier, Paid Discovery, Managed continuity. Not used decoratively; not placed in circular badges (avoids the "universal circular icon container" anti-pattern); restrained to places that measurably speed scanning.

### Inclusion/Exclusion Design

Paired two-column disclosure inside each package/tier: "Included" (left, weight/heading typography) and "Separately scoped" (right, muted weight, same structural rank, no red/alarm styling). Small icon + text for each line (never color alone, per the UI/UX Pro Max finding above). No checkmark walls, no red X spam. Directly extends Trust's "state limits rather than hide them" principle without reusing the Claim Boundary component.

### Memorable moments (1-2)

1. **The scope ledger.** Every package/tier's included/excluded pairing, rendered consistently across all thirteen commercial objects (ten packages + three managed tiers), is the page's own device: nowhere else on the site makes "what's in, what's out" this systematically visible, object by object.
2. **Ambiguity to definition (Paid Discovery).** The one immersive beat on the page, marking the exact moment an unscoped need becomes a priced, bounded next step.

Neither reuses Industries' CREDIBILITY/SCALE, Trust's Evidence Spine/Claim Boundary, Work's system composition, Connect's question scaffold or the homepage's Presentation Tabs.

### Typography, color, whitespace

Fraunces for headings (`text-h1`/`text-h2`/`text-h3`, Work's equivalent-role scale per `GOV-016`), operational sans for body/UI. Existing palette only (navy, warm neutral, white, scarce gold, maroon); gold is not used as "the pricing color" and prices are not automatically gold-styled. Ten packages plus three managed tiers is a lot of information: chapter-level breathing room (`Section spacing="generous"`) and per-card internal space are used deliberately rather than compressing density.

### Template-resistance / content-swap self-check

Could another agency swap logo, colors, service names and prices and publish this unchanged? No: the domain-grouped package field, the project/managed register split, the paired inclusion/exclusion device applied uniformly across thirteen objects, and the "From $X, confirmed in Paid Discovery" framing are specific to how Rive actually sells, not a generic three-tier shelf. Could generic "Starter/Growth/Enterprise" SaaS copy occupy this composition unchanged? No: the composition has no three-column tier ladder for it to fill, and the package field's ten objects don't reduce to three interchangeable tiers.
