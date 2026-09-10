# RW-PAGE-14 — Modern Web Platforms Design Decision Brief

**State:** `IMPLEMENTED`, technically `VERIFIED`, and visually `ACCEPTED` by Silvester
**Route:** `/services/web/modern-web-platforms/`
**Catalog mapping:** `OP-40 (OPT-15 + FND-02 + BLD-03)`
**Baseline:** `develop @ 05be163571c123857ba33c412326a05bcd700db7`
**Branch:** `feature/modern-web-platforms`

## Continuation provenance

Claude established the page thesis, section order, Platform Stack, Coupled vs. Composable comparison, content-model specimen, engineering-quality treatment, company-process reuse and relationship/footer treatments before its session expired. Codex accepted those eight recovered files as substantial, recoverable partial work under `RW-PAGE-14C`; none was replaced wholesale.

Codex refined the recovered implementation by restoring the commissioned WordPress and custom-workflow catalog mappings, expanding the Next.js and structured/headless-content buyer explanations, diagnosing and correcting the narrow-screen intrinsic-sizing defect, strengthening the test authority, recording the orphaned homepage CTA as `RW-IA-OPEN-01`, and completing the continuation verification record. These refinements preserve Claude's original visual thesis and page anatomy.

## Required Skills and Tools

| Skill/tool | Why required | Durable status | Current-session availability | Planned or completed invocation |
|---|---|---|---|---|
| UI/UX Pro Max | Package-specific B2B architecture and responsive-layout critique | `VERIFIED` in capability register | `INSTALLED_CALLABLE` | Invoked through the installed `search.py` workflow for B2B architecture and calm editorial landing-page questions |
| 21st.dev / Magic | External pattern exploration for architecture, comparison and structured-content treatments | `VERIFIED` in capability register | `INSTALLED_CALLABLE` | Three `mcp__21st__get_inspiration` explorations completed; no direct component adopted |
| `design-taste-frontend` / TasteSkill | Anti-template critique, hierarchy, rhythm and restraint | `VERIFIED` in capability register | `INSTALLED_CALLABLE` | Full skill instructions loaded and applied with page-specific design dials |
| React / Next.js App Router | Route and component implementation | Repository capability | `INSTALLED_CALLABLE` | Existing server-rendered route and component conventions preserved |
| TypeScript and Tailwind / Rive design system | Type-safe content authority and responsive presentation | Repository capability | `INSTALLED_CALLABLE` | Used in content, page and test refinements |
| Human Design Review | Mandatory authored-page acceptance check | Repository-governed checklist | `INSTALLED_CALLABLE` | Review against `docs/capabilities/HUMAN_DESIGN_REVIEW.md` before Silvester handoff |
| Playwright browser and screenshot inspection | Interaction, visual, theme and viewport evidence | Repository dependency | `INSTALLED_CALLABLE` | Focused and full-page browser checks, screenshots and axe |
| Responsive and mobile-first QA | Required 320px through desktop behavior | Repository test capability | `INSTALLED_CALLABLE` | Element-level overflow diagnostics and viewport suite |
| WCAG 2.2 AA / accessibility QA | Keyboard, motion and serious/critical axe checks | Repository test capability | `INSTALLED_CALLABLE` | Native disclosure, reduced-motion and axe checks |
| Claims Register and approved-copy review | Public content and commercial safety | Repository authority | `INSTALLED_CALLABLE` | No price, metric, credential or unapproved promise introduced |

## Skill Invocation Evidence

| Capability | Invoked? | Concrete continuation evidence | Material influence / limitation |
|---|---:|---|---|
| UI/UX Pro Max | Yes | Installed UI/UX Pro Max `search.py` invoked for `B2B architecture platform service page decision comparison editorial restrained` and `calm premium editorial landing page information hierarchy responsive mobile accessibility`; both returned live database recommendations | Reinforced mobile-first breakpoint inspection, label wrapping and restrained comparison hierarchy. Generic pricing/winner-table suggestions were rejected because the page has no approved price and must treat platforms neutrally. |
| 21st.dev / Magic | Yes | Three live `mcp__21st__get_inspiration` calls explored architecture layers, neutral platform comparison and structured CMS/content modelling | Dashboard bento grids, winner badges, decorative cards and scroll-hijacked diagrams were reviewed and rejected. No direct component was adopted; the exploration sharpened the choice of semantic editorial registers and native disclosure. |
| `design-taste-frontend` / TasteSkill | Yes | `/Users/silvestr/Documents/brand-website/.agents/skills/design-taste-frontend/SKILL.md` was read in full and applied with `DESIGN_VARIANCE=6`, `MOTION_INTENSITY=2`, `VISUAL_DENSITY=4` | Preserved restrained motion, strong type hierarchy, real object boundaries and mobile composition. Its generic single-theme/image-first defaults conflict with the approved Rive page family and zero-photo thesis, so repository authority prevails. |
| Human Design Review | Yes | Repository checklist loaded from `docs/capabilities/HUMAN_DESIGN_REVIEW.md`; full-page captures reviewed at 1440×900 light/dark, 768×1024 light and 375×812 light | Self-review passes every authored-page gate below. This does not substitute for Silvester's visual acceptance. |
| Playwright / responsive QA | Yes | Focused disclosure test passed; diagnostic overflow test exercised 320/360/375/390/768/1024/1280/1440px and reports specific offending elements | Isolated the defect to a no-wrap relationship CTA at 320px; corrected locally without `overflow-x: hidden`. |
| Accessibility QA | Yes | Keyboard disclosure, reduced-motion, 200% zoom and axe light/dark checks passed in the 13-test focused route suite | No serious or critical axe violations in either theme. |

The recovered Claude brief also records genuine prior-session use of UI/UX Pro Max, three 21st.dev searches and `design-taste-frontend`. Those invocations informed the preserved direction but are not misreported as Codex continuation invocations; the table above is fresh RW-PAGE-14C evidence.

## Authority sources

A full repository search (`grep -rl "OP-40\|OPT-15\|FND-02\|BLD-03\|Composable Web"` across `src/` and `docs/`) found exactly one prior reference: `src/lib/content/homepage.ts`'s "Web Design & Digital Experience" capability entry, which already states the same positioning voice this directive supplies ("Composable and Next.js delivery provide a modern path. WordPress remains supported when it is the better operational fit."). No `pricing.ts` entry, no `CLAIMS_REGISTER.md` entry, no prior Design Decision Brief, no existing page exists for `OP-40` anywhere. `/services/web/wordpress-build-migration/` does not exist as a built route. `/services/web/` has no index page (same situation UXR-01 and FND-05 were built under).

**Discovered discrepancy, reported rather than silently fixed:** the homepage's existing "Explore Modern Web Platforms" CTA (`src/lib/content/homepage.ts` line 176) currently points to `/services/web-design-development/`, a route that itself does not exist, not to this page's canonical `/services/web/modern-web-platforms/`. The homepage is in this package's Global Freeze list, so this was not touched. Recorded here and in the completion report as a separate future fix, not addressed in RW-PAGE-14.

## Catalog reconciliation

Per this directive's own §3, no repository authority establishes a trustworthy `OP-40` price, timeline, evidence tier, or exclusion set. Confirmed by the same grep above returning zero commercial-fact hits. No price was invented, no price was derived by summing `OPT-15`/`FND-02`/`BLD-03` component prices, no timeline was inferred by combining component durations, no evidence tier was inferred.

## Unresolved commercial fields

`OP-40` price, price band, timeline, evidence tier, exclusions, package tiers: all unresolved, per directive §3. The hero and every commercial-adjacent section use claim-safe orientation language ("Flagship route, scoped in Paid Discovery") rather than a price plate. This mirrors the discipline already established for Pricing's Package 1 ("Scope-priced") and Package 10 (fields explicitly unresolved) — a repository-wide precedent for rendering an honest gap rather than inventing a number.

## Buyer problem

Not "your website needs to scale." Authored from the directive's own supplied symptom list (§7), narrowed to five for content density: plugin sprawl for every new capability, content trapped inside page templates, redesigns requiring content rebuilds, fragile integrations that get harder to touch over time, and technology chosen before the operating model was defined.

## Buyer decision

The page does not argue Next.js is superior. It presents three neutral "best when" profiles (Composable/Next.js + Sanity, Managed WordPress, Custom application/Laravel), each described by the operating conditions that make it the right fit, per the directive's explicit "do not make WordPress look inferior" instruction (§20). RW-PAGE-14C restores all three commissioned mappings: `OP-40 (OPT-15 + FND-02 + BLD-03)`, `BLD-02/03 + ACC-03/OP-10B`, and `OP-40 / DEV-03`.

## Buyer-state transformation

Before: *"We picked a website technology, and now every new requirement fights the choice we already made."*
After: *"We understand which platform shape actually matches how the business needs to operate, and why, before we commit to one."*

## Visual thesis

**Separate what changes at different speeds.** A platform becomes more resilient when content, presentation, integrations and delivery are not one inseparable object. The signature device (The Platform Stack) makes this literal: four layers, each with its own job, each replaceable without demolishing the others. This is illustrative architecture, not a promise that every `OP-40` engagement contains every listed technology, labeled as such throughout.

## Cross-page repetition audit

- **UXR-01 / FND-05:** both use exactly one dark signature chapter. This page follows the same invariant (The Platform Stack is the only dark section) rather than adding a second, which would read as developer documentation, not a marketing page.
- **UXR-01's hero price-plate / FND-05's hero price-plate:** explicitly **not** reused here. Unlike those two pages, no trustworthy `OP-40` commercial authority exists, so inventing a price-shaped panel merely for hero-to-hero visual consistency would be dishonest. Instead the hero's metadata panel is repurposed to carry "Flagship route" / "Scoped in Paid Discovery" content in the same bordered-panel visual language (same border, same panel weight), so the hero rhythm matches its siblings without asserting a number that does not exist.
- **FND-05's bespoke Inventory-to-Handoff process:** not reused or imitated. This page instead surfaces the real, company-wide, more authoritative 7-stage process (`Understand / Define / Architect / Build / Verify / Launch & handover / Operate & improve`) from `/company/process/`, per directive §25's instruction to prefer existing, more authoritative delivery governance over inventing a competing model. `Architect` is annotated as where platform/content-model decisions specifically happen.
- **UXR-01 / FND-05's three-card relationships row:** reused deliberately (established generic cross-link chrome, not a signature moment, per both prior pages' own Design Decision Briefs).
- **Pricing / Accessibility:** the accessibility treatment reuses the exact approved "WCAG 2.2 AA-informed" phrase verbatim and links to `/trust/accessibility/` rather than duplicating that page's Keyboard Path/Remediation Loop content.
- **Homepage:** the buyer-problem and platform-decision language is consistent with, but not copy-pasted from, the homepage's existing "Composable and Next.js delivery provide a modern path. WordPress remains supported when it is the better operational fit" positioning (see Authority sources above).

## Continuation critique findings

- **Preserve:** the four-layer Platform Stack is the strongest page-specific visual and explains separability through buyer consequences rather than decorative architecture jargon.
- **Preserve:** the Coupled vs. Composable section stays neutral and avoids the common red/green winner comparison returned by pattern exploration.
- **Refine:** the original decision cards named all three routes but only exposed the composable catalog mapping. That contradicted the commissioned authority and left WordPress/custom buyers without an equivalent commercial path marker; all three mappings now render at equal weight.
- **Refine:** Next.js and Sanity appeared mainly as labels. Short consequence-led explanations now make React architecture, rendering, metadata, reusable components, integration flexibility, structured editing, content reuse and independent evolution legible without becoming product documentation.
- **Refine:** the longest relationship CTA inherited the shared button system's `white-space: nowrap`, expanded its grid item four pixels past a 320px viewport and caused the known horizontal overflow. Page-local wrapping and shrinkable grid items correct the intrinsic-size source.
- **Reject:** no additional bento grid, platform winner badge, fake code editor, technology-logo wall or decorative motion was added. These would weaken neutrality and make the page read like a generic framework agency.

## Section Rhythm Map

1. Hero (light) — problem-first headline, "Flagship route / Scoped in Paid Discovery" panel in place of a price plate
2. Buyer problem (light, bordered list, not cards)
3. **The Platform Stack** (dark, signature, Memorable Moment A)
4. Coupled vs. Composable (light, two-column neutral comparison, Memorable Moment B)
5. Content model (light, disclosure-based specimen)
6. Platform decision surface (light, three neutral bordered blocks, equal visual weight)
7. Engineering quality: SEO/discoverability, performance, accessibility (light, compact principle lists, not cards)
8. Process (light, compact real 7-stage company process, links to `/company/process/`)
9. Evidence Pack / FND-05 / UXR-01 relationships (light, three-card row, reused device)
10. Final CTA (accent surface, matches every other page)

One dark chapter, ten sections, at least seven distinct layout families (bordered metadata-panel hero, bordered symptom list, dark connector-diagram register, two-column comparison, disclosure specimen, three-block decision surface, compact principle lists, compact linked process rail, three-card row, accent CTA). No three consecutive sections share a family.

## Media Opportunity Audit

Claude's recovered audit recorded no image-generation capability in its execution environment. In the Codex continuation environment the image-generation skill is available, but it was not invoked: the approved visual thesis already specifies zero photographic moments, and no new asset requirement or authorised media direction emerged from the defect/content completion scope. A stock "developer at a laptop" photo would not represent platform architecture honestly and would be this page's only photographic device with no supporting reason. The Platform Stack and Coupled-vs-Composable treatment carry the explanatory load through real semantic HTML and Tailwind primitives, never a fake screenshot or fake code editor.

## Card Opportunity Audit

Cards used only where object boundaries genuinely matter: the platform-decision surface (three distinct architecture profiles) and the three-card relationships row (reused device). Buyer problem, the Platform Stack, Coupled vs. Composable, the content-model specimen, and the process rail are deliberately not cardified, per directive §33 and to satisfy the "substantial whitespace, minimal card chrome" requirement (§32).

## Icon Opportunity Audit

Two new bespoke icons: a layer-stack icon (Platform Stack chapter mark) and a decision-branch icon (platform decision surface mark), matching the existing inline-stroke technique. `IncludedIcon`/`SeparateIcon` from `PricingIcons.tsx` are reused for the content-model specimen's "feeds" list, exactly as FND-05 and UXR-01 already do, rather than drawing new ones. No technology logos are used (Next.js/React/Sanity/WordPress/Laravel marks): no verified, licensed asset source exists in this repository, so text labels are used instead, per directive §35's own fallback instruction.

## Platform Stack concept

Four layers (Experience, Content, Capabilities, Delivery), each with a role sentence, two to three illustrative example items (explicitly labeled illustrative, not a promise every engagement contains them), and one buyer-consequence sentence explaining why separating that layer matters. Grounded in concrete consequence language rather than a generic cloud-architecture diagram, to avoid the genericness risk a bare layer-name diagram would carry.

## Coupled vs. Composable concept

Two plain text columns, not a checkmark table, not a red-X/green-check comparison. "Coupled" describes content, templates, plugins, business logic and hosting as one dependency block. "Composable" describes the same concerns connected through defined interfaces instead of one block. The connecting statement is explicit: architecture should match the operating need; WordPress can remain the better choice for the right buyer.

## Content-model concept

One illustrative `Service` content object (name, summary, buyer problem, deliverables, evidence tier, related service, SEO fields) shown feeding three different surfaces (a service page, an internal search result, a related-content module). Labeled illustrative; not a claim that every client receives this exact schema.

## Platform-decision treatment

Three neutral, equally-weighted bordered blocks (not a table, not ranked, not color-coded by "winner"): Composable/Next.js + Sanity, Managed WordPress, Custom application/Laravel. Each states the operating conditions that make it the right fit and carries its commissioned mapping: `OP-40 (OPT-15 + FND-02 + BLD-03)`, `BLD-02/03 + ACC-03/OP-10B`, or `OP-40 / DEV-03`.

## Next.js buyer treatment

Next.js is explained in consequence terms: a modern React foundation, flexible rendering choices, structured metadata, reusable component architecture, integration flexibility and room for later application behavior. It is presented as an architectural option selected by requirements, with explicit language that these qualities do not guarantee performance or search rankings.

## Sanity and headless-content buyer treatment

The content chapter explains that a headless layer separates information from layout, lets editors manage structured content rather than frontend code, enables reuse across surfaces, and allows the content operation and interface to evolve independently. Sanity remains the flagship recommendation when those operating conditions fit; it is not described as mandatory for every engagement.

## WordPress neutrality

The page states plainly that Rive supports WordPress where WordPress is the better operating choice. No link is added to `/services/web/wordpress-build-migration/` because that route does not currently exist; adding one would be a fabricated destination. This is recorded as a future consideration, not fixed here.

## Laravel treatment

Described in-page as the right fit when the real problem is an application or workflow: authenticated behavior, business rules, internal or external applications, integration-heavy processes and domain-specific logic. The `OP-40 / DEV-03` relationship is shown, but no `DEV-03` public route exists, so the page routes toward Paid Discovery/Connect rather than fabricating a destination.

## Horizontal-overflow diagnosis

The first element-level browser diagnostic at 320px identified three relationship cards extending from `20px` to `324px`. Their longest text CTA inherited `white-space: nowrap` from the shared `LinkButton`, increasing the grid item's intrinsic minimum width beyond the 280px container content width. The correction is deliberately page-local: relationship cards receive `min-width: 0`, and their text CTAs may wrap within `max-width: 100%`. No global `overflow-x: hidden`, clipped content, arbitrary fixed width or reduced type size was used. The corrected diagnostic passes at 320, 360, 375, 390, 768, 1024, 1280 and 1440px.

## Multilingual boundary

Stated plainly as custom scope attached to the chosen platform, requiring Discovery, not yet a standalone catalog code, per directive §5 Situation D and §23. No standalone package is implied or invented.

## SEO/LLM treatment

Architecture-level considerations only (semantic HTML, heading hierarchy, metadata, structured data, robots/sitemap handling, content structure, image optimization, internal linking, crawlability). No ranking promise, no AI-citation/inclusion promise.

## Accessibility boundary

One paragraph reusing the exact approved "WCAG 2.2 AA-informed" phrase, linking to `/trust/accessibility/` for the full operating practice, per directive §19's explicit "do not duplicate /trust/accessibility/" instruction.

## Evidence Pack relationship

Links to `/trust/evidence-pack/`, states real, unfabricated build-evidence categories (architecture decisions, QA, accessibility checks, implementation artifacts) without asserting a specific artifact set the `OP-40` authority does not establish.

## FND-05 relationship

Stated as contextually relevant, not mandatory: FND-05 establishes the reusable identity/interface rules; Modern Web Platforms implements the architecture those rules run on.

## Mobile thesis

The Platform Stack layers stack vertically below `lg`; the Coupled-vs-Composable comparison stacks to a single column below `sm`; the content-model specimen's "feeds" list wraps; the platform-decision blocks stack to one column; no horizontal architecture map or clipped code-like label exists below 768px.

## Dark-mode thesis

Only the Platform Stack chapter is dark, matching the sitewide one-dark-chapter invariant; every other section stays in the page's single light theme family, avoiding the "developer documentation" tonal risk directive §37 warns about.

## Final responsive findings

- **320 / 360 / 375 / 390px:** no horizontal overflow after correcting the relationship CTA's intrinsic width. The hero, commercial-orientation panel, stack layers, comparisons, decision paths, process and relationship objects all form a single readable column. The sub-640px hero type adjustment keeps the headline to four lines at the 375px review viewport rather than the five-line recovered treatment.
- **768px:** no overflow. The platform-decision row remains a compact three-column comparison so the equal route weighting stays visible; mappings wrap inside their own cards. The process uses its intended four-column rail, while longer explanatory chapters retain full-width reading measure.
- **1024px:** no overflow. The desktop platform comparison and process anatomy have sufficient intrinsic width; no clipped labels, SVGs or CTA text were found.
- **1280 / 1440px:** no overflow. The hero resolves into its intended asymmetric 7/5 split, the Platform Stack keeps a controlled reading width, and decision/relationship rows retain equal weight without filling the entire viewport with card chrome.
- **200% zoom simulation (640×1200):** passed with one H1 visible and no horizontal overflow.
- **Reduced motion:** the disclosure indicator's transition collapses to the repository policy's `0.01ms`; content and interaction remain complete.

## Final visual-review findings

Final full-page artifacts were rendered from the production build at 1440×900 light, 1440×900 dark, 768×1024 light and 375×812 light. The desktop light page has a clear massing sequence: open asymmetric hero, compact buyer-problem register, deep navy Platform Stack, long-form comparison/content chapters, denser decision and process structures, evidence relationship row, and warm conversion close. Reduced-scale review preserves distinct chapters and a legible single dark focal band rather than becoming a monotonous card field.

At full scale, the Platform Stack carries the main visual memory through scale contrast, numbering, connector rules and the gold-on-navy register. Coupled vs. Composable and the content-model disclosure provide quieter second-read moments. The mobile render preserves the same sequence without simulating a desktop diagram; the four-layer stack and three buyer paths become deliberately linear. Dark mode retains gold hierarchy and visible surface changes instead of mechanically inverting the light composition.

No new visual defect was found after the mobile hero adjustment.

**SILVESTER VISUAL ACCEPTANCE: APPROVED.** Reviewed live against the running dev server at `/services/web/modern-web-platforms/` (light/dark, desktop and narrow-viewport). Accepted as-is; no defect or change requested.

## Human Design Review — Rive Authored Page Standard

| Gate | Result | Finding |
|---|---|---|
| Visual thesis | `PASS` | Separation of layers is explicit in the signature chapter and reinforced by the content model and decision surface. |
| Independent authorship | `PASS` | The neutral technology decision and separable-layer metaphor do not read as a framework-vendor landing page. |
| Narrative rhythm | `PASS` | Problem, architecture, content operations, platform choice, quality, process, evidence and conversion form an ordered argument. |
| Section-mode variation | `PASS` | Register, diagram, comparison, disclosure, decision cards, principle lists and process rail vary with narrative purpose. |
| Media intentionality | `PASS` | Zero photography is deliberate; semantic diagrams carry the architectural information without decorative mockups. |
| Memorable moments | `PASS` | Platform Stack is primary; Coupled vs. Composable plus the structured-content specimen form a quieter second read. |
| Typography authorship | `PASS` | Fraunces hierarchy, mono operational labels and compact body copy distinguish editorial promise from technical detail. |
| Whitespace intentionality | `PASS` | Open hero and chapter spacing isolate decisions; dense structures receive bounded internal rhythm. |
| Template resistance | `PASS` | The page depends on Rive's neutral three-route logic, Evidence Pack relationship and claim-safe commercial boundary. |
| Content-swap resistance | `PASS` | A different service would require replacing the layer model, coupling comparison, schema specimen and platform decision anatomy. |
| Anti-AI-pattern review | `PASS` | No bento dashboard, glow, glass, fabricated metric, logo wall, winner badge or decorative animation. |
| Cross-page differentiation | `PASS` | It uses the systemic register without copying Work, Guides, Insights, About, Industries or the sibling service signatures. |
| Full-page screenshot | `PASS` | Complete light/dark desktop, tablet and mobile pages reviewed from the final production build. |
| Squint test | `PASS` | One strong navy focal band, alternating neutral chapters and a warm final close remain identifiable at reduced scale. |
| Mobile authorship | `PASS` | The page becomes a deliberate linear argument; headline measure and CTA wrapping are specifically tuned for narrow screens. |
| Dark-mode authorship | `PASS` | Gold replaces low-contrast maroon accents and surface steps remain visible throughout the full page. |
| CTA/conclusion quality | `PASS` | The final question resolves the platform-choice narrative through Discovery, with a distinct secondary self-routing action. |
| Brand coherence | `PASS` | Uses the recorded Rive serif/sans/mono grammar, warm neutral surfaces, navy chapter, maroon and selective gold. |
| Register clarity | `PASS` | Dominant systemic register is unmistakable and appropriate to platform architecture. |
| Register misuse | `PASS` | Systemic organization supports decisions; it does not become a fake dashboard or developer-documentation shell. |
| Tonal rhythm | `PASS` | Tonal changes mark buyer problem, signature architecture, content operations, engineering quality, evidence and conclusion. |
| Card dependence | `PASS` | Cards remain limited to real discrete platform choices and cross-page relationships. |
| Micro-detail consistency | `PASS` | Hairlines, dashed rules, numeric layer markers, mono mappings and compact labels follow the Rive grammar. |
| Gold discipline | `PASS` | Gold is reserved for conversion and architecture emphasis rather than applied to every technology or heading. |

**Formal review answer:** the page reads as independently art-directed within Rive's systemic register, not as another generic component recipe. This is Codex's checklist finding only; Silvester remains the visual acceptance authority.

## Final validation record

| Check | Result |
|---|---|
| ESLint | `PASS` — zero warnings |
| TypeScript | `PASS` |
| Unit suite | `PASS` — 163/163 |
| Production build | `PASS` — 25/25 static pages, route emitted at `/services/web/modern-web-platforms` |
| Focused RW-PAGE-14 E2E | `PASS` — 13/13 |
| Navigation regression | `PASS` — 16/16 |
| Aggregate E2E | `PARTIAL` — 218/219; sole failure is the pre-existing `/solutions/` headline mismatch reproduced in isolation and present at baseline `HEAD` (`homepage.ts` says `Start with the problem you can see.` while `solutions-company.spec.ts` expects older copy) |
| Diff/whitespace check | `PASS` — tracked diff clean; all nine RW-PAGE-14C untracked files checked individually with no whitespace errors |

No commit, push, merge, PR, staging deployment or production deployment was performed.

## Rejected patterns

- A literal cloud-architecture diagram with generic boxes and arrows (AI-slop risk directly named in the directive; replaced with a labeled, consequence-grounded four-layer register).
- A red-X/green-check or "us vs. them" comparison table for Coupled vs. Composable or the platform-decision surface (directive §13/§20 explicitly forbid this; 21st.dev exploration returned exactly this generic pattern, rejected).
- A gamified/interactive "tech stack builder" or glassmorphic animated dashboard card (21st.dev exploration result, rejected as decorative and inconsistent with Rive's restrained editorial register).
- Technology logo wall (directive §35 explicitly forbids making logos the primary visual language; no verified/licensed mark asset exists in this repository regardless).
- Inventing an `OP-40` price, price band, timeline, evidence tier or exclusion set (directive §3, hard ban).
- A generic "Discovery → Design → Develop → Launch" process (directive §25 rejects this for the same reason FND-05's brief rejected it; used the real, more authoritative company 7-stage process instead of inventing a second one).
- Fabricated Core Web Vitals numbers or Lighthouse scores (directive §18/§41, hard ban).
- A standalone multilingual package or route (directive §23, hard ban).

## Template-resistance result

**Pass.** A generic Next.js agency could not drop its logo into this page unchanged: the explicit WordPress-neutral decision surface, the Evidence Pack/Accessibility/FND-05 cross-links, the "architecture should match the need" framing (rather than framework advocacy), and the honest absence of an invented price are all specific to how Rive actually reasons about this engagement, not generic agency positioning.

## Content-swap result

**Pass.** "Design System" cannot replace "Modern Web Platforms" in this composition: the signature chain (coupling → layers → content model → platform choice → extensibility) has no token/component/specimen equivalent in FND-05's content shape, and the three neutral platform-decision profiles have no analog anywhere else on the site.
