# RW-AUDIT-01 — Sitewide Four-Layer Design Audit

**Audit date:** 2026-08-12
**Canonical baseline:** `4761c5b3b74b2542a40b72c651277df681dec24c`
**Audit branch:** `feature/sitewide-design-audit`
**Application changes:** None
**Decision:** READY FOR CONTROLLED SITEWIDE REFINEMENT

## 1. Executive assessment

Rive is beyond a prototype and has a recognisable visual language: editorial serif/sans hierarchy, warm neutral surfaces, navy contrast, restrained wine and gold accents, fine rules, asymmetric grids, and an evidence-led tone. The strongest pages feel calm, capable and authored. The site does not need a new visual identity.

Its maturity is uneven. Process is the clearest example of design decisions serving one page purpose with little excess UI. About, Insights and Guides are coherent but use several familiar page rhythms. Work has a strong point of view but carries two presentation systems and substantial placeholder weight. The Homepage is comprehensive but extremely long, interaction-dense and visually repetitive. Company, Solutions, Industries and Platforms are earlier structural pages: coherent, accessible foundations, but materially thinner or more generic than the major production pages.

The highest-risk launch issue is not visual styling. The header, mega menus and footer expose many public-looking links whose routes are not built. That breaks buyer trust and makes the information architecture look more complete than the implementation. Resolve that structural navigation contract before cosmetic refinement.

## 2. Methodology and evidence

### Four layers

| Layer | Invocation | Scope | Material influence |
|---|---|---|---|
| UI/UX Pro Max | Installed v2.11.0 `search.py`, four package-specific `--domain ux` searches | Sitewide journey; Homepage/Work; Resources; Company | Reinforced semantic heading order, keyboard/visual order parity, touch independence, reduced-motion authorship, no horizontal overflow and a maximum of one or two meaningful moving elements per view. |
| 21st.dev / Magic | Authenticated `get_inspiration`, five fresh metadata explorations | Homepage, Work, Resources, About, Process | Broadened comparison space around editorial image hierarchy, proof surfaces and responsive narrative stacking. Most results were broad rather than Rive-specific. |
| TasteSkill | `design-taste-frontend` skill loaded and applied as audit critic | Every P0 page and cross-site system | Drove the remove-20% test, repetition classification, typography-over-containers preference, and rejection of glassmorphism, fabricated proof, excessive cards and kinetic spectacle. |
| Human Design Review | Genuine rendered-browser inspection | Ten built routes at 1440×900 and 375×812; source/automated evidence for additional P0 breakpoints and themes | Determined hierarchy, authorship, sibling-versus-clone quality, mobile composition, dark-mode authorship and premium calm. |

### 21st.dev evidence

- Available: Yes
- Authenticated: Yes; genuine calls succeeded without exposing credentials.
- Explorations: 5
- `contextApplied`: `false` for all five
- Confidence range: 0.49–0.55
- Shortlisted lessons: image-led editorial hierarchy; proof presented as a primary narrative surface; clear stacked mobile narrative; restrained trace/progression semantics.
- Rejected references: Glassmorphism Trust Hero, AI dashboard/model selector, testimonial blocks requiring unavailable claims, WebGL/GSAP experience hero, overlapping portfolio gallery, kinetic cards/team rosters, gradient tracing and generic about-card mosaics.
- Direct adoption: NONE
- Interpretation: broad catalog comparisons, not Rive-specific recommendations.

## 3. Complete route inventory

`src/app`, navigation, footer and E2E coverage were inspected. “Advertised / absent” means linked by the current shared IA but no page exists at the audit baseline.

| Route | Page | Family | Public | Built state | Priority |
|---|---|---|---|---|---|
| `/` | Homepage | PRIMARY | Yes | Production page | P0 |
| `/work/` | Work | PRIMARY | Yes | Production page | P0 |
| `/resources/guides/` | Guides | RESOURCE | Yes | Production page | P0 |
| `/resources/insights/` | Insights | RESOURCE | Yes | Production page | P0 |
| `/company/about/` | About | COMPANY | Yes | Production page | P0 |
| `/company/process/` | Process | COMPANY | Yes | Production page | P0 |
| `/company/` | Company | COMPANY | Yes | Early structural page; not a nav destination because Company is a disclosure parent | P1 |
| `/solutions/` | Solutions | SOLUTION | Yes | Early structural page; parent trigger architecture conflicts with its public presence | P1 |
| `/industries/` | Industries | INDUSTRY | Yes | Early structural page | P1 |
| `/platforms/` | Platforms | PLATFORM | Yes | Early structural page | P1 |
| `/services/` | Services parent | SERVICE | Advertised | Absent | P0 IA debt |
| `/services/web/` | Web | SERVICE | Advertised | Absent | P0 IA debt |
| `/services/cloud/` | Cloud | SERVICE | Advertised | Absent | P0 IA debt |
| `/services/microsoft/` | Microsoft | SERVICE | Advertised | Absent | P0 IA debt |
| `/services/ai/` | AI | SERVICE | Advertised | Absent | P0 IA debt |
| `/services/automation/` | Automation | SERVICE | Advertised | Absent | P0 IA debt |
| `/solutions/web-growth/` | Website & Growth | SOLUTION | Advertised | Absent | P0 IA debt |
| `/solutions/cloud-modernization/` | Cloud Modernization | SOLUTION | Advertised | Absent | P0 IA debt |
| `/solutions/ai-data-automation/` | AI & Automation | SOLUTION | Advertised | Absent | P0 IA debt |
| `/solutions/managed-services/` | Managed Services | SOLUTION | Advertised | Absent | P0 IA debt |
| `/company/partners-and-readiness/` | Partners and Readiness | COMPANY | Advertised | Absent | P1/claims dependent |
| `/company/careers/` | Careers | COMPANY | Advertised | Absent | P1 |
| `/connect/` | Contact | CONVERSION | Advertised globally | Absent | P0 |
| `/start/` | Start | CONVERSION | Advertised globally | Absent | P0 |
| `/resources/faqs/` | FAQs | RESOURCE | Advertised | Absent | P1 |
| `/pricing/` | Pricing | UTILITY | Advertised | Absent; copy authority blocked | P1 |
| `/trust/` | Trust Center | TRUST | Advertised | Absent | P1 |
| `/trust/evidence-pack/` | Evidence Pack™ | TRUST | Advertised | Absent | P1/claims dependent |
| `/trust/accessibility/` | Accessibility | TRUST | Advertised | Absent | P1 |
| `/trust/privacy/` | Privacy | LEGAL/TRUST | Advertised | Absent | P0 before launch |
| `/trust/security/` | Security | TRUST | Advertised | Absent | P1 |
| `/_not-found` | 404 | UTILITY | Yes | Built and tested | P2 |

Robots and sitemap handlers exist but are not public pages. The production sitemap currently returns no entries and should be treated as discoverability debt, not a design-audit refinement.

## 4. Current Rive design strengths to protect

- Editorial serif headlines paired with compact sans supporting copy.
- Calm warm-neutral, white and navy surface rhythm.
- Wine and gold used as signals rather than decoration.
- Fine rules and typographic lists in place of default rounded cards.
- Clear evidence/accountability language without fabricated client proof.
- Strong responsive overflow discipline across all ten rendered routes.
- Consistent focus, touch-target and reduced-motion foundations.
- Dark mode is generally authored through surface roles, not a simple inversion.
- Process demonstrates disciplined reduction: no autoplay, no media dependency, no generic step cards.
- Insights has the clearest dark editorial interaction section.
- About has the strongest human/system tension among earlier pages.

## 5. Cross-page repetition audit

| Device | Classification | Finding | Direction |
|---|---|---|---|
| Large serif statement | SYSTEMIC AND GOOD | Core brand signature and consistently readable | Keep; vary scale and placement by purpose. |
| Cream/navy rhythm | SYSTEMIC AND GOOD | Provides identity and pacing | Keep; reduce predictable alternation on the longest pages. |
| Fine gold/wine rules | SYSTEMIC AND GOOD | Quiet technical/editorial signal | Keep. |
| Split hero | OVERUSED | Work, Guides and About depend heavily on text/media splits; Homepage also uses adjacent split logic | Recompose selected heroes; do not change all. |
| Dark full-width band | REPEATED BUT ACCEPTABLE | Work, Guides, Insights and About each use one | Keep where it establishes a signature idea; avoid adding more. |
| Presentation Tabs | OVERUSED | 7 adopters across Homepage, Work, Insights and About | Reduce adopters after evidence review; manual/static alternatives should be default. |
| Numbered editorial lists | REPEATED BUT ACCEPTABLE | Strong system device, but appears on most major pages | Vary density and number prominence. |
| Image/text split | NEEDS VARIATION | Frequent around placeholder-led storytelling | Replace only where the media does not carry real information. |
| FAQ near page end | REPEATED BUT ACCEPTABLE | Work and Process; appropriate buying-friction role | Keep, standardise semantics, vary surrounding composition. |
| CTA strip before footer | OVERUSED | Nearly every production page ends with the same large statement + button rhythm | Create 2–3 governed closing modes. |
| Placeholder treatment | OVERUSED / TEMPORARY | Honest and coherent, but visually dominates Work, Guides, About and early pages | Replace by final media priority; remove placeholders where media has no eventual job. |
| Sticky side thesis | REPEATED BUT ACCEPTABLE | Useful when supporting long adjacent narrative | Keep selectively; test mobile height and reading order. |
| Three-column card grid | NEEDS VARIATION | Most visible on Homepage evidence/decision regions | Prefer editorial rows or one dominant proof surface. |

## 6. Global system findings

### Navigation and header — REFINE

Strengths: five-item desktop architecture is calm; disclosure chevrons are consistent; CTA is singular; keyboard and mobile-drawer behaviour are robust in serial testing; compact-on-scroll is restrained.

Findings:

1. **P0:** Many destinations exposed in header, mega menus and footer are absent. A premium navigation cannot promise dead ends.
2. Mega menus are visually rich but too content-heavy for several groups and repeat placeholder imagery before the buyer reaches a page.
3. `/solutions/` and `/company/` exist even though their parents operate as triggers. Their purpose and discoverability require a deterministic governance decision.
4. The header is calm at 1440, but the mega-menu content density and five-column footer create a much denser information layer than the top bar implies.

Smallest intervention: reconcile exposed routes with built destinations, then reduce mega-menu explanatory copy/visual weight without changing the five-item architecture.

### Mobile drawer — REFINE

The drawer is operationally strong: dedicated close control, focus restoration, one disclosure open, fixed CTA and large targets. It is visually dense because each group can include links, secondary links, a visual and CTAs. Reduce informational duplication before changing mechanics.

### Typography — KEEP + POLISH

The serif/sans hierarchy is Rive’s strongest identity. Main risks are extremely long mobile pages, recurring oversized statements, and several small metadata/eyebrow treatments that approach visual fragility. Preserve the scale system; improve line measure and local contrast rather than introducing more sizes.

### Colour and surfaces — KEEP + POLISH

The palette is coherent. RW-FIX-02 proved that accessible final tokens can still become inaccessible when a text-bearing ancestor fades. Audit all future overlays, opacity, disabled and theme-transition states—not only static tokens. Avoid adding new accent hues.

### Buttons and CTAs — REFINE

The shared tactile fill language is coherent, keyboard visible and touch-sized. CTA wording and placement are repetitive: `Contact Us`, `Find Your Solution` and `Book a Discovery Call` recur in header, page endings and footer. Keep the component system; rationalise page-level CTA hierarchy and introduce no new button variant unless an uncovered semantic need exists.

### Footer — REFINE

The footer is clear on desktop but overwhelming on mobile and exposes the largest set of absent destinations. Preserve brand summary and contact path. Reconcile link availability, then consider progressive grouping on mobile without hiding legal/trust essentials.

### Media and placeholders — RECOMPOSE IN STAGES

The placeholder system is honest, consistent and safer than random stock media. It now contributes to a prototype perception because similar pale diagrams and framed boxes repeat across almost every page and in mega menus. Prioritise final media for the hero/featured proof moments only. Remove low-value media slots rather than filling every one.

### Motion — REFINE

Global button motion is restrained. The shared `Reveal` is now transform-only and accessible. The main motion debt is Presentation Tabs density: Homepage has three adopters, Work two, Insights one and About one. A user can encounter multiple automatically progressing systems in one visit. Keep the underlying accessibility contract; reconsider whether every adopter earns autoplay.

### Presentation Tabs adopter audit

| Adopter | Current value | Decision for refinement |
|---|---|---|
| Homepage `OutcomeExplorer` | Useful capability discovery | KEEP + POLISH; strongest homepage adopter. |
| Homepage `ProcessStepper` | Duplicates Process-page territory and adds another active system | RETHINK; manual or condensed static summary likely stronger. |
| Homepage `EvidenceExplorer` | Makes abstract evidence tangible | KEEP, consider manual-first. |
| Work `WorkIncludes` | Helps explain multidisciplinary scope | KEEP + POLISH; consider manual-first on mobile. |
| Work `BehindTheScreen` | Signature page section | KEEP; one of the most justified adopters. |
| Insights `AnalysisLens` | Strong interpretive metaphor | KEEP; autoplay is optional rather than necessary. |
| About `ConnectedDisciplines` | Communicates connection but repeats tab grammar | REFINE toward quieter manual presentation. |

## 7. Mobile refinement queue

1. **P0:** Reconcile drawer destinations with actual routes.
2. **P1:** Homepage is 14,627px tall at 375px and contains 26 buttons. Remove or merge duplicated explanatory modules.
3. **P1:** About reaches 10,400px and Process 9,614px; preserve content but reduce repeated metadata and excess vertical padding where hierarchy survives.
4. **P1:** Footer link density overwhelms every mobile ending.
5. **P1:** Guides filter row and long resource list need stronger active-state visibility and easier topic scanning.
6. **P1:** Work’s stacked placeholders create a long prototype-like middle section.
7. **P2:** Confirm sticky desktop theses always become normal-flow mobile content; current Process behaviour is correct.

## 8. Dark-mode refinement queue

1. Preserve the authored navy-on-navy surface distinctions visible in Insights, About and Process.
2. Check every muted metadata style at small sizes, including transitional/disabled states.
3. Avoid dark full-width sections disappearing into the global dark canvas; reinforce with rules, spacing and surface depth rather than bright accents.
4. Reduce accent-gold brightness where multiple labels cluster.
5. Verify placeholder frames and captions after final-media replacement.

## 9. Page scorecards

Scores are prioritisation aids, not acceptance verdicts.

| Page | Hierarchy | Authorship | Coherence | Distinctiveness | Responsive | Dark | Motion restraint | Conversion | A11y confidence | Premium |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Homepage | 3 | 3 | 5 | 3 | 3 | 4 | 2 | 4 | 4 | 3 |
| Work | 4 | 4 | 5 | 4 | 4 | 4 | 3 | 4 | 4 | 4 |
| Guides | 4 | 4 | 5 | 3 | 4 | 4 | 5 | 3 | 4 | 4 |
| Insights | 4 | 4 | 5 | 4 | 4 | 5 | 4 | 3 | 4 | 4 |
| About | 4 | 4 | 5 | 4 | 4 | 5 | 3 | 4 | 4 | 4 |
| Process | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 4 | 5 | 5 |
| Company | 3 | 3 | 5 | 2 | 4 | 4 | 4 | 3 | 4 | 3 |
| Solutions | 3 | 3 | 5 | 2 | 4 | 4 | 3 | 4 | 4 | 3 |
| Industries | 3 | 3 | 5 | 3 | 4 | 4 | 4 | 3 | 4 | 3 |
| Platforms | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 3 | 4 | 4 |

## 10. P0 page reviews

### PAGE: Homepage

**Purpose:** Explain Rive, route buyers by need, establish breadth and accountability, provide proof philosophy, and convert.
**Interaction identity:** Guide / architecture overview.
**Strongest elements:** confident hero; architecture statement; platform parity; governed-AI section; consistent brand palette.
**UI/UX Pro Max:** semantic and responsive foundations are strong, but multiple moving modules increase cognitive load; limit simultaneous/serial motion and preserve touch/manual parity.
**21st comparison:** external “trust hero” and dashboard patterns would make Rive more generic; the useful lesson is to make proof more prominent, not decorate the hero.
**TasteSkill:** the page is over-complete. Cards, tabs, diagrams and CTA surfaces repeatedly explain accountability and evidence. Removing roughly 20% would improve confidence.
**Human review:** unmistakably Rive, but it looks like the entire design system demonstrated on one page. At 9,944px desktop and 14,627px mobile it asks too much before conversion.
**Keep:** hero thesis; platform equality; governed AI; clear final conversion.
**Refine:** one primary capability-discovery interaction; proof hierarchy; CTA distribution.
**Recompose:** merge repeated process/evidence/accountability modules; reduce one or two presentation adopters.
**Remove/Merge:** redundant “how we work” explanations now better served by Process.
**Priority:** P0 structural simplification / P1 visual refinement.
**Package:** RW-REFINE-01B Homepage narrative reduction.

### PAGE: Work

**Purpose:** Show what responsibility and evidence look like before publishable case studies exist.
**Interaction identity:** Explore / Proof / Behind the Screen.
**Strongest elements:** distinctive dark signature band; clear system-not-screen thesis; accountability record; honest selected-work state.
**UI/UX Pro Max:** interactions are keyboard/touch coherent; two presentation systems require attention management and should not compete.
**21st comparison:** 3D portfolio galleries and testimonial modules are inappropriate; editorial proof surfaces are relevant only when real case evidence exists.
**TasteSkill:** placeholder mosaics and tab grammar make the middle feel component-led. Typography can carry more of the proof narrative.
**Human review:** strong independent identity, but provisional media is the main premium ceiling. Mobile stacking becomes long and visually repetitive.
**Keep:** Behind the Screen; one accountable team; decision record; claim-safe posture.
**Refine:** selected-work hierarchy and media priority.
**Recompose:** evidence mosaic after real assets exist.
**Remove/Merge:** no whole section yet; defer until proof assets are approved.
**Priority:** P1.
**Package:** RW-REFINE-01C Work proof and media.

### PAGE: Guides

**Purpose:** Help visitors find actionable instructional content.
**Interaction identity:** Learn / Instruction / Featured Guide.
**Strongest elements:** clear library hierarchy; useful discipline index; calm manual filters; strong dark field-notes band.
**UI/UX Pro Max:** semantic content and manual filtering are appropriate; improve scanning and touch visibility without adding interaction.
**21st comparison:** tabbed feature showcases are inferior to the existing editorial structure; editorial image hierarchy could strengthen the featured guide once real media exists.
**TasteSkill:** hero repeats the Work-style split and the long library grid becomes uniform.
**Human review:** premium editorial family member, but less independently art-directed than Insights or Process. Mobile is readable but lengthy.
**Keep:** library; discipline browse; field-notes thesis.
**Refine:** hero differentiation, active filter visibility, featured-guide media.
**Recompose:** library density at tablet/mobile.
**Remove/Merge:** none.
**Priority:** P1.
**Package:** RW-REFINE-01D Resources editorial discovery.

### PAGE: Insights

**Purpose:** Present interpretation and decision-oriented thought leadership.
**Interaction identity:** Interpret / Analysis / Analysis Lens.
**Strongest elements:** best dark signature section; strong topic architecture; asymmetric latest-thinking hierarchy; clear signal/noise framing.
**UI/UX Pro Max:** content order and semantics are strong; autoplay is not essential to comprehension.
**21st comparison:** generic feature tabs add nothing; editorial hero/image composition is the only useful reference family.
**TasteSkill:** several topic/list sections repeat similar rows and metadata; trim labels before adding visual novelty.
**Human review:** distinctive and premium. It belongs to Rive without looking like Guides, though the final CTA/footer rhythm is identical.
**Keep:** Analysis Lens; latest-thinking asymmetry; signal section.
**Refine:** manual-first interaction option; archive/topic redundancy.
**Recompose:** none unless content volume grows.
**Remove/Merge:** duplicated browse lists if editorial inventory remains limited.
**Priority:** P1/P2.
**Package:** RW-REFINE-01D Resources editorial discovery.

### PAGE: About

**Purpose:** Explain Rive as a connected, accountable human organisation.
**Interaction identity:** Connect / Organisation / Connected Disciplines.
**Strongest elements:** boundaries/consequences statement; accountability band; working-relationship clarity; strong dark-mode hierarchy.
**UI/UX Pro Max:** narrative order is coherent; limit motion and ensure organisational trust does not depend on absent photography.
**21st comparison:** generic team-card/about mosaics would weaken Rive. A real image-led human moment is useful only with approved photography.
**TasteSkill:** repeated numbered lists and placeholder splits make the page feel system-filled in places; Connected Disciplines repeats site tab grammar.
**Human review:** deliberately designed and coherent, but long on mobile and still visibly awaiting human media.
**Keep:** boundaries thesis; principles; accountability band; working relationship.
**Refine:** quieter discipline presentation and one meaningful human media surface.
**Recompose:** “Continue through Company” once all destination routes exist.
**Remove/Merge:** repeated accountability detail where Process now owns methodology.
**Priority:** P1.
**Package:** RW-REFINE-01E Company trust and differentiation.

### PAGE: Process

**Purpose:** Explain a disciplined but non-rigid engagement operating model.
**Interaction identity:** Trace / Method / Operating Trace.
**Strongest elements:** strongest page-specific metaphor; complete static comprehension; return paths; typographic evidence and collaboration sections; no media dependency.
**UI/UX Pro Max:** excellent semantic order, reduced-motion posture and absence of forced scroll effects.
**21st comparison:** kinetic traces, gradient lines and reasoning dashboards are less usable and less Rive-specific; existing static trace is stronger.
**TasteSkill:** restrained and authored; no card grid, badge or spectacle debt.
**Human review:** benchmark for design process quality and independent art direction. It must not become a visual template for siblings. Mobile is deliberately linear.
**Keep:** all primary architecture and static interaction model.
**Refine:** small type/spacing polish only after cross-site system work.
**Recompose:** none.
**Remove/Merge:** none.
**Priority:** P2.
**Package:** Include only in final Company/system polish.

## 11. Supporting page findings

### Company `/company/` — RETHINK IA, REFINE VISUAL

Coherent but thin and partly redundant now that About and Process exist. Its public route conflicts with the approved trigger-parent model. Do not delete casually. Product Office must decide whether it remains a deliberately unlinked overview, redirects, or is retired. Visually, it is an earlier split/placeholder/links page and should not receive polish before that IA decision.

### Solutions `/solutions/` — RETHINK IA, RECOMPOSE

Clear headline and outcome explorer, but only 2,523px desktop and structurally closer to an early scaffold. The parent is a disclosure trigger, so the public route’s role is ambiguous. Resolve parent-route governance first. If retained, it needs a fuller buyer architecture—not decorative sections.

### Industries — REFINE

Strong headline and credible sector emphasis; the four remaining sectors become a predictable two-column placeholder grid. Replace only the featured media first, then consider typography-led sector rows. Do not add interactive filtering without content need.

### Platforms — KEEP + POLISH

The equal AWS/Microsoft composition is clear and distinctive. Shared-layer content is useful. Preserve the two-column parity; improve final media and CTA specificity. RW-FIX-02’s transform-only reveal should remain the accessibility baseline.

## 12. Journey review

| Visitor | Result | Gap |
|---|---|---|
| A — unsure what Rive does | Homepage explains breadth and accountability | Too much content before a concise capability choice; Services links are absent. |
| B — evaluating proof | Work is easy to find and honest | Real case evidence/media remains pending. |
| C — researching expertise | Guides and Insights are clearly nested and differentiated | Several advertised resource/trust routes are absent. |
| D — evaluating trust | About and Process form a strong pair | Company overview ambiguity and missing trust destinations weaken the journey. |
| E — ready to engage | CTA is always visually available | `/connect/` and `/start/` are absent, a P0 conversion failure. |

## 13. Four-layer synthesis

| Finding | UI/UX | 21st | Taste | Human | Synthesis |
|---|---|---|---|---|---|
| Missing advertised destinations damage trust | ✓ | — | ✓ | ✓ | CONSENSUS; P0 structural. |
| Homepage is too long and interaction-dense | ✓ | indirect | ✓ | ✓ | CONSENSUS; simplify. |
| Process should gain immersive autoplay | ✕ | suggested patterns | ✕ | ✕ | REJECT. |
| Proof should become more prominent when approved | ✓ | ✓ | ✓ | ✓ | CONSENSUS; do not fabricate. |
| Split heroes need selective variation | ✓ | ✓ | ✓ | ✓ | CONSENSUS; not a sitewide ban. |
| Glassmorphism/kinetic spectacle would add premium quality | ✕ | catalog suggestions | ✕ | ✕ | REJECT. |
| Presentation Tabs should remain everywhere | concern | mixed | concern | concern | Reduce selectively; keep shared contract. |
| Process should visually template older pages | ✕ | — | ✕ | ✕ | EXPLICITLY REJECT. |

## 14. Prioritised findings

### P0 — before launch / structural

1. Reconcile every header/mega-menu/footer/CTA destination with a built route; `/connect/` and `/start/` are critical.
2. Resolve the trigger-parent versus public-page status of `/company/` and `/solutions/`.
3. Reduce Homepage journey length and competing presentation modules.
4. Establish a launch-safe sitemap/discoverability contract after the canonical public route set is approved.

### P1 — premium refinement

1. Replace only high-value hero/featured placeholders with approved final media.
2. Create governed variation for split heroes and final CTA strips.
3. Reduce Presentation Tabs autoplay adopters and mobile interaction density.
4. Refine Work proof presentation, Resources discovery and About human presence.
5. Reduce mobile footer density.
6. Audit transient contrast, overlays and opacity states across all components.

### P2 — polish

1. Metadata contrast and line-height calibration.
2. Border/surface depth in dark mode.
3. Button/CTA copy consistency.
4. Minor section-spacing and rule alignment.
5. Final motion cadence after interaction reductions.

## 15. Explicit KEEP list

- Rive typography, palette, surface roles and fine-rule language.
- Five-item top-level navigation architecture, subject to destination reconciliation.
- Process Operating Trace and static/manual methodology.
- Insights Analysis Lens composition.
- Work Behind the Screen signature section.
- Guides manual filters and discipline browse.
- About boundaries/consequences and accountability content.
- AWS/Microsoft parity on Platforms.
- Accessibility contracts: keyboard, focus, reduced motion, touch targets and transform-only shared Reveal.
- Claim-safe placeholders until real proof/media is approved.

## 16. Explicit DO-NOT-CHANGE list

- Do not make every page resemble Process.
- Do not replace editorial structure with SaaS cards or dashboards.
- Do not introduce glassmorphism, gradients, glows, cursor followers or WebGL spectacle.
- Do not fabricate testimonials, metrics, partner status, case results or photography.
- Do not add autoplay to Process, Guides filters, FAQ, navigation or forms.
- Do not replace the brand palette or serif/sans system.
- Do not redesign all pages in one package.
- Do not polish `/company/` or `/solutions/` before their route purpose is decided.

## 17. Things not worth changing

- The number of primary navigation items.
- The global rounded button shape solely for novelty.
- Process’s seven-phase semantic model.
- The absence of a dark cinematic band on Process.
- Guides’ manual filter interaction.
- The honest placeholder labels before approved media exists.
- The footer’s core brand summary and two-level contact hierarchy.
- The platform-equality concept.
- The site’s warm-neutral/light and authored navy/dark identity.

## 18. Recommended RW-REFINE-01 programme

1. **RW-REFINE-01A — Public IA and conversion integrity**
   Decide canonical route inventory; remove or complete advertised dead ends; resolve `/company/` and `/solutions/`; deliver `/connect/` and `/start/` under their own approved packages.

2. **RW-REFINE-01B — Global visual system**
   Govern hero variants, CTA endings, section rhythm, metadata contrast, mobile footer and transient-state accessibility. No page redesign.

3. **RW-REFINE-01C — Homepage narrative reduction**
   Remove/merge duplicated accountability, process and evidence explanations; reduce presentation density; preserve core positioning.

4. **RW-REFINE-01D — Work proof and media**
   Improve selected-work/evidence hierarchy when approved proof exists; prioritise real media.

5. **RW-REFINE-01E — Resources editorial discovery**
   Differentiate Guides hero, improve library scanning, reduce Insights browse redundancy, preserve their separate identities.

6. **RW-REFINE-01F — Company trust and differentiation**
   Refine About discipline presentation and human media; apply only minor Process polish; resolve Company overview after IA decision.

7. **RW-REFINE-01G — Supporting pages**
   Recompose retained Solutions, Industries and service/solution destinations according to approved IA; preserve Platforms parity.

8. **RW-REFINE-01H — Final media**
   Commission and insert approved photography/illustration by P0/P1 media priority; remove unused placeholder slots.

9. **RW-REFINE-01I — Final motion and dark-mode pass**
   Reassess every autoplay adopter, verify transient contrast and reduced motion, then calibrate dark surfaces and final cadence.

Global problems must precede page polish. Do not combine the route/CTA integrity work with aesthetic refinement unless authority and claims dependencies are resolved.

## 19. Final Human Design assessment

**Independent art direction:** Process, Insights and Work pass strongly; About and Guides pass with repetition debt; Homepage is authored but over-composed; supporting pages are coherent foundations rather than launch-polished pages.
**Family coherence:** Strong. Every built route reads as Rive.
**Side-by-side test:** One website, but several pages share enough split/placeholder/list/CTA grammar to risk feeling like one template. Process proves greater diversity is possible without visual novelty.
**Premium calm:** Present locally; weakened sitewide by Homepage length, repeated autoplay and excessive placeholder volume.
**Mobile authorship:** Process and Platforms are strongest; all pages avoid overflow, but Homepage/About/Work need narrative reduction rather than smaller spacing alone.
**Dark-mode authorship:** Strong overall, particularly Insights/About/Process; continue auditing temporary opacity and muted states.
**Remove-20% test:** Homepage clearly improves; Work and About likely improve through consolidation; Process does not.
**Launch implication:** Design-system identity is launch-capable, but public IA/dead-route integrity and high-impact placeholder/proof debt are not.

**Final decision: READY FOR CONTROLLED SITEWIDE REFINEMENT**
