# Typography System

Authority: Product Office / Silvester, `RW-TYPE-01`.

## Canonical reference

`/work/` is the font-size and hierarchy reference for equivalent typography roles across Rive. This standard governs scale, not composition: page-specific measure, alignment, wrapping, whitespace, media relationships and signature display moments remain independent.

## Canonical roles

| Role | Family | Mobile | Tablet and desktop | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Page hero H1 | Fraunces, 600 | `clamp()` floor 40px | fluid through 54.4px at 768px and 67.2px at 1024px; 68px cap | 1.05 | -0.015em |
| Hero lead | Inter, 400 | 15px | 16px from 768px | 1.7 | normal |
| Standard section H2 | Fraunces, 600 | 30px | 40px from 768px | 1.15 | -0.01em |
| Standard secondary H3 | Fraunces, 600 | 20px | 23px from 768px | 1.3 | -0.005em |
| Body | Inter, 400 | 15px | 16px from 768px | 1.65 standard; 1.7 lead | normal |
| Eyebrow | Inter, 600 | 11px | 12px from 768px | 1.3 | 0.1em |
| Evidence / metadata | system mono | 12px | 13px from 768px | 1.8 | normal |
| Standard CTA | Inter, 600 | 15px | 15px | component-controlled | normal |

The implementation source of truth remains `src/app/globals.css`. This office records role intent and the approved Work-reference relationship, not a second independent token system.

## Usage boundary

- Every genuine page-level hero H1 uses `text-h1`.
- Equivalent introductory hero copy uses `text-hero-lead`.
- `text-h2` and `text-h3` apply to standard section and secondary-heading roles.
- Fraunces is the sitewide heading and title face. Semantic `h1`–`h6` elements inherit it even when a page-specific scale is used; title-like labels outside heading markup use `font-serif` explicitly.
- Inter remains the body and operational-interface face for paragraphs, navigation labels, buttons, form labels, metadata and explanatory UI.
- Signature editorial display headings, resource titles, Process phase typography, Start interface options and recommendation headings may retain distinct scales when their semantic role differs.
- Normalize by semantic role, not by HTML tag.
- Resolve difficult wrapping through measure and composition before changing the canonical scale.
- Theme changes must not alter font sizing.

## RW-TYPE-01 decision brief

- Roles normalized: page hero H1 and hero lead.
- Roles preserved as variants: editorial/signature H2s, resource titles, interactive labels and page-specific display moments.
- Pages requiring H1 correction: Insights, About and Start.
- Pages requiring hero-lead correction: About, Process and Start.
- Pages already matching the H1 reference: Home, Work, Guides, Company, Process, Industries, Platforms and Solutions.
- Token strategy: reuse `text-h1`; add `text-hero-lead`; keep the existing serif/sans/mono system.
- Rejected alternatives: global element selectors, font replacement, one universal H2, identical heading widths, page recomposition and component adoption.
