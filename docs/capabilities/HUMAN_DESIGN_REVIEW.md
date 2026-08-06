# Human Design Review

## Purpose

This capability's job is to **reject** poor design before it reaches Product Office acceptance — it does not generate designs. It exists to catch AI-generated design mediocrity ("AI slop") that passes automated checks (lint, types, tests, build, accessibility) but fails on visual/experiential quality, before that work is accepted.

## When it applies

Every major design implementation — new pages, section rebuilds, illustration/motion work, or anything materially changing visual language — is checked against this file before Product Office acceptance (`docs/product-office/00-CHARTER.md`). It supplements, and never replaces, Silvester Odilu's visual acceptance authority (`docs/governance/AUTHORITY.md`).

## Review checklist

Assess each implementation against these criteria. A design that fails several of these is not ready for acceptance, regardless of passing technical validation:

- **Visual originality** — does it look distinct, or interchangeable with any generic template?
- **Brand identity** — does it read as Rive Webworks specifically, using the recorded visual language (`docs/creative-direction/VISUAL_LANGUAGE.md`), not a generic brand?
- **Typography quality** — deliberate hierarchy and pairing, not default/uninspected type choices.
- **Spacing rhythm** — considered, varied rhythm, not uniform padding applied everywhere by default.
- **Information hierarchy** — the most important content is visually most important; nothing competes with itself.
- **Motion quality** — motion conveys meaning (state change, relationship, sequence), not decoration for its own sake.
- **Interaction quality** — interactive elements feel responsive and intentional, not generic hover states.
- **Narrative flow** — sections build on each other rather than reading as an unordered stack of blocks.
- **Emotional impact** — the design produces an intended feeling, not a neutral, forgettable one.
- **Section transitions** — transitions between sections are considered, not identical repeated breaks.
- **Visual composition** — deliberate asymmetry, framing and balance, not center-everything defaults.
- **Depth** — layering/hierarchy that gives the page dimension, not a flat stack of equal-weight blocks.
- **Human judgement** — a person made a deliberate call here; it doesn't read as an average of training data.
- **Intentional asymmetry** — used where it strengthens the design, not avoided out of caution.
- **Deliberate restraint** — knowing what to leave out, not filling every section with content/decoration.

## AI-slop characteristics to actively avoid

These are the default failure modes of unreviewed AI-generated design. Their presence is a signal to reject, not polish:

- Everything centered.
- Identical spacing applied everywhere, regardless of content.
- Uniform cards used for content that isn't actually uniform.
- A predictable, generic hero section.
- A generic feature grid (icon + heading + one sentence, repeated).
- Meaningless statistics with no source or context.
- Fake dashboards used as decoration rather than real data.
- Excessive glassmorphism.
- Overused, meaningless gradients.
- Poor storytelling — content presented as a list, not a narrative.
- No visual rhythm — every section the same shape and weight.
- Weak typography — default sizes/weights with no considered hierarchy.
- No emotional hierarchy — nothing is emphasized more than anything else.
- Every section looks interchangeable with every other section.
- Generic icon rows with no connection to the actual content.
- A general "template feeling" — recognizable as a pattern rather than a specific decision.

## Process

1. Before requesting Product Office acceptance of a major design implementation, run it against the review checklist above.
2. Report findings honestly — including partial failures — rather than declaring general success.
3. Product Office acceptance (Silvester Odilu) makes the final call; this checklist informs that call, it does not substitute for it.
4. If criteria are refined over time, update this file and note the change in `docs/governance/DECISIONS.md` if material.

## Approval authority

Silvester Odilu — visual acceptance, per the existing Authority Matrix (`docs/governance/AUTHORITY.md`). This file does not create new approval authority; it gives existing authority a concrete, repeatable checklist.
