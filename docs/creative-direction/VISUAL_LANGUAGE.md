# Visual Language

Current, repository-resident statement of Rive Webworks's visual direction. Token *values* live in `src/app/globals.css` (source of truth — do not duplicate numbers here that will drift); this file records the intent behind them. Update this file whenever a visual-language refinement is approved (`docs/OFFICES.md` § Refinement-ownership routing), rather than leaving the rationale only in chat or a commit message.

## Colour system

- **Primary palette:** navy (`--color-navy-950`) as the dominant dark/heading colour, warm gold (`--color-brand-gold`, `--color-gold-deep`) as the primary accent, maroon (`--color-brand-maroon`) as a secondary brand colour.
- **Mineral Azure** (`--color-azure-*`, `--color-accent-azure*`): added as a secondary interactive/technical accent, deliberately distinct from the gold accent so gold can stay reserved for primary calls to action while azure signals technical/interactive surfaces (evidence packs, platform parity, governed-AI content). See `src/app/globals.css` for the full azure scale and its usage comment.
- **Light theme surfaces:** `--color-surface` / `--color-surface-alt` and related hairline tokens exist specifically so light-theme sections are not forced into full-width navy blocks — a prior defect (fixed navy sections bleeding across the light theme) was corrected by introducing these dedicated light-surface tokens rather than overriding navy per-section.
- **Dark theme:** carries its own `--color-surface` override rather than inverting the light tokens, so light and dark are each tuned deliberately.

## Typography

- Serif display typography is used for headings/hero content as the brand's expressive register, paired with a standard sans body face for readability — the serif/sans split is the deliberate signal of "premium, technically credible" rather than "generic SaaS."

## Illustration and motion

- Illustration work (e.g. the "Rive Operating Architecture" hero illustration) is used to make abstract technical claims (architecture, governed AI, platform parity) visually concrete, rather than relying on stock imagery or icon grids alone.
- Motion/interaction work (e.g. the Guided Outcome Explorer) favors guided, stepped disclosure over dense static pages — matching the buyer-path/accordion content structure already in the homepage information architecture.

## Working history (for context, not as a change log)

These are the visual-language-relevant commits that established the current direction; `docs/governance/DECISIONS.md` remains the authoritative decision log — this list exists only so a reader can trace intent back to implementation:

- `aa77e95` — serif display typography, theme system, fixed header shell.
- `6b4848c` — corrected light theme to eliminate full-width navy sections.
- `b9bed3a` — added Mineral Azure and atmospheric visual tokens.
- `d9779d5` — built the Rive Operating Architecture hero illustration.
- `c96250e` — implemented the Guided Outcome Explorer and refined the Evidence Pack.

## Approval

Visual language changes require Silvester Odilu's visual acceptance (`docs/governance/AUTHORITY.md`). This file records approved direction only — proposed-but-unapproved direction belongs in a work package or chat discussion, not here.
