# Visual Language

Current, repository-resident statement of Rive Webworks's visual direction. Token *values* live in `src/app/globals.css` (source of truth — do not duplicate numbers here that will drift); this file records the intent behind them. Update this file whenever a visual-language refinement is approved (`docs/OFFICES.md` § Refinement-ownership routing), rather than leaving the rationale only in chat or a commit message.

The canonical mature visual grammar, three expressive registers and evidence-page analysis live in [`RIVE_VISUAL_LANGUAGE.md`](./RIVE_VISUAL_LANGUAGE.md). This file retains the foundational visual intent and `GOV-017` authored-page doctrine; future major-page briefs must use both documents without copying an evidence page's composition.

## Colour system

- **Primary palette:** navy (`--color-navy-950`) as the dominant dark/heading colour, warm gold (`--color-brand-gold`, `--color-gold-deep`) as the primary accent, maroon (`--color-brand-maroon`) as a secondary brand colour.
- **Mineral Azure** (`--color-azure-*`, `--color-accent-azure*`): added as a secondary interactive/technical accent, deliberately distinct from the gold accent so gold can stay reserved for primary calls to action while azure signals technical/interactive surfaces (evidence packs, platform parity, governed-AI content). See `src/app/globals.css` for the full azure scale and its usage comment.
- **Light theme surfaces:** `--color-surface` / `--color-surface-alt` and related hairline tokens exist specifically so light-theme sections are not forced into full-width navy blocks — a prior defect (fixed navy sections bleeding across the light theme) was corrected by introducing these dedicated light-surface tokens rather than overriding navy per-section.
- **Dark theme:** carries its own `--color-surface` override rather than inverting the light tokens, so light and dark are each tuned deliberately.

## Typography

- Serif display typography is used for headings/hero content as the brand's expressive register, paired with a standard sans body face for readability — the serif/sans split is the deliberate signal of "premium, technically credible" rather than "generic SaaS."
- `/work/` is the approved scale reference for equivalent page-hero and supporting-copy roles. `docs/design-system/TYPOGRAPHY.md` defines the semantic boundary: shared scale does not require shared composition, and signature editorial or interactive roles remain distinct.

## Illustration and motion

- Illustration work (e.g. the "Rive Operating Architecture" hero illustration) is used to make abstract technical claims (architecture, governed AI, platform parity) visually concrete, rather than relying on stock imagery or icon grids alone.
- Motion/interaction work (e.g. the Guided Outcome Explorer) favors guided, stepped disclosure over dense static pages — matching the buyer-path/accordion content structure already in the homepage information architecture.

## Rive Authored Page Standard

Authority: Product Office decision `GOV-017`. This standard remains active for the lifespan of the current Rive website development unless Product Office explicitly supersedes it.

The governing doctrine is:

- **System consistency without compositional sameness.**
- **Design the story, not the template.**
- **Media must communicate, not decorate.**
- **Every major page must have a distinct visual thesis.**

Shared typography, colour, spacing, buttons, navigation, footer, accessibility and motion philosophy create brand continuity. They must not dictate page composition. Every major public page must develop a subject-specific visual idea, narrative rhythm, media strategy, memorable moments and responsive transformation. A page that is clean, responsive and on-brand meets the baseline; major pages must also be authored and memorable.

### Industries benchmark

Industries is the first page in the current build to meet the Product Office "wow" threshold. It is a **quality benchmark, not a compositional template**. Future pages should match its level of thought, storytelling, compositional confidence, media intentionality, rhythm, restraint and memorability. They must not automatically copy its photography quantity, panoramic hero, Field Index, Healthcare background treatment, CREDIBILITY/SCALE device, asymmetric chapters, CTA composition or section sequence.

Platforms is supporting evidence that the same standard can produce a different visual argument: Industries uses photography, typography, environment and editorial rhythm; Platforms uses architecture, illustration, systems and technical rhythm. The standard measures authorship and quality, not resemblance.

Existing accepted pages remain accepted. When an existing major page enters a separately commissioned visual-refinement package, that package must review it against this standard; this decision does not automatically trigger redesign work.

### Page-specific visual thesis gate

Before implementation, every major visual-page Design Decision Brief must answer:

- What is the visual thesis?
- What is the primary storytelling metaphor?
- What is the emotional or functional intent?
- What should the page feel like?
- What makes this subject visually distinct?

"Rive styling", "use established components", "clean and premium", "modern agency layout" and "consistent with the site" describe baseline qualities, not a visual thesis.

The required reasoning order is:

```text
content
→ meaning
→ narrative role
→ visual thesis
→ media decision
→ composition
→ implementation
```

Reject the default sequence `content → choose reusable component → insert content → repeat`. Components serve the story; the story must not be forced into available components.

### Narrative rhythm and visual modes

Every major page must define its section rhythm before JSX. For each substantial section, record its narrative role, visual mode, energy, media role and transition to adjacent sections; then review the sequence as one composition.

Also record the surface or tonal state. Surface changes must correspond to narrative changes rather than alternate mechanically. Declare the primary Rive visual register and any secondary register using `RIVE_VISUAL_LANGUAGE.md`; a register is a creative mode, never a predefined layout.

Possible visual modes include editorial typography, environmental or human photography, contextual illustration, technical diagram, data visualisation, typography as visual material, immersive background media, inline media, spatial composition, interactive demonstration, restrained text-only composition and conversion composition. This list is a thinking tool, not a mandatory menu.

Consecutive card grids, split sections, equal columns, repeated image-right/text-left layouts, Presentation Tabs, CTA bands, diagrams, background-image sections or identical media containers must be challenged. Variation must serve narrative pacing rather than random novelty. Ask whether the next chapter should continue the current energy or deliberately change it across image/type, dark/light, dense/sparse, human/abstract, immersive/analytical and structured/expressive modes.

### Media opportunity audit

Every major-page commission requires a section-by-section Media Opportunity Audit covering story purpose, photography, illustration, diagram, background media, typography as media and final decision. For each section explicitly choose photography, contextual illustration, diagram, inline media, background image, typography as visual material, or no media because structure/typography is stronger. No media is valid only as a conscious decision.

- **Photography** belongs where it materially improves human context, environment, atmosphere, scale, credibility, emotional grounding, operational reality, place or narrative contrast. It must not fill empty space. Reject generic handshakes, staged laptop meetings, boardrooms, server racks, blue-lit technology scenes, obvious AI faces and repetitive one-photo-per-section formulas.
- **Contextual illustration and diagrams** belong where photography cannot explain architecture, systems, relationships, infrastructure, processes, technology flows, operating models or abstract concepts. They must be specific, explanatory, restrained, Rive-compatible, statically understandable and accessible; generic SaaS vector art is not sufficient.
- **Background imagery** is approved but exceptional. Zero to two substantial background-image sections is the normal ceiling, not a target. Every use must document narrative purpose, why background is stronger than inline media, focal point, text-safe area, desktop/tablet/mobile crops, dark-mode handling and accessibility treatment. Industries Healthcare is evidence of a strong use, not a reusable block.
- **Typography as visual material** may carry meaning, atmosphere, composition and visual anchoring. Oversized type requires a strong answer to "Why does this word deserve visual scale?" Essential hierarchy must remain clear; the words must carry meaning, remain accessible and avoid decorative-watermark behaviour. Success on one page does not license repetition everywhere.

### Memorable moments, whitespace and asymmetry

Every major page declares approximately one or two memorable visual moments before implementation, including narrative purpose, why each belongs and its visual medium. One strong moment is preferable to several weak effects; not every section should compete for attention.

Whitespace is active composition. Large open areas must provide pacing, emphasis, separation, tension, hierarchy, narrative transition or breathing room. Human Design Review asks, "What is this space doing?" If there is no answer, investigate the composition rather than automatically filling it.

Controlled asymmetry is approved when it communicates hierarchy. Equal columns, centred layouts, mirrored spacing and equal cards are not defaults. Random imbalance remains a defect.

### Page-specific conversion

A major-page CTA is the conclusion of that page's story. Before composing it, ask what action naturally follows this particular narrative. Global conversion destinations may remain stable while presentation responds to page context; do not append the same CTA composition automatically.

### Template resistance and cross-page differentiation

Before acceptance, record the closest existing Rive page, similarity risk, conceptual difference, compositional difference, media-strategy difference and memorable-moment difference. Shared language is desirable; repeated recipes are not.

Human Design Review must ask:

1. If the Rive logo and navigation were removed, would the page still look deliberately art-directed?
2. Could the page plausibly be any competent agency template with different copy?
3. Could another major Rive page's content be placed into this composition with minimal structural change?

The intended answers are yes, no and no. Shared functional components remain intentionally portable; major storytelling composition should resist simple substitution. A failed test requires refinement, explicit documented acceptance or a Product Office exception.

### Mobile and dark-mode authorship

Every major page must define what its visual thesis becomes at 375px. Mobile is not a collapsed desktop layout: explicitly consider media reordering, alternate crops, removal of nonessential backgrounds, typography reduction, diagram simplification, section resequencing, changed whitespace, simplified line systems and altered hierarchy.

Dark mode must preserve the page's mood and identity rather than mechanically invert it. Review atmosphere, image treatment, muted colours, gold, linework, hierarchy, diagrams, backgrounds and contrast.

### Ownership and exceptions

- **Creative Direction** owns this doctrine: visual thesis, narrative rhythm, media philosophy, memorable moments, section-mode variation, template resistance, typography as visual material and compositional authorship.
- **Human Design Review** owns qualitative enforcement: full-page and squint review, cross-page differentiation, template/content-swap tests, media intent, mobile authorship, dark-mode authorship and the independent-art-direction assessment.
- **Product Office / Silvester** owns final acceptance, exceptions, product-scope authority and deliberate supersession of this standard.

## Working history (for context, not as a change log)

These are the visual-language-relevant commits that established the current direction; `docs/governance/DECISIONS.md` remains the authoritative decision log — this list exists only so a reader can trace intent back to implementation:

- `aa77e95` — serif display typography, theme system, fixed header shell.
- `6b4848c` — corrected light theme to eliminate full-width navy sections.
- `b9bed3a` — added Mineral Azure and atmospheric visual tokens.
- `d9779d5` — built the Rive Operating Architecture hero illustration.
- `c96250e` — implemented the Guided Outcome Explorer and refined the Evidence Pack.

## Approval

Visual language changes require Silvester Odilu's visual acceptance (`docs/governance/AUTHORITY.md`). This file records approved direction only — proposed-but-unapproved direction belongs in a work package or chat discussion, not here.
