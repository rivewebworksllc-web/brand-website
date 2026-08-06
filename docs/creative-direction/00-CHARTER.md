# Creative Direction — Charter

## Mission

Own the visual language of Rive Webworks: brand expression, illustration and motion direction, and the intent behind design-token and theme decisions, so that visual direction is a repository artifact and not a chat memory.

## Authority

Visual acceptance rests with Silvester Odilu (`docs/governance/AUTHORITY.md`, row "Objectives, priorities and visual acceptance"). Claude proposes visual direction and content structure for review; it does not self-approve (`AGENTS.md` § Claude–Codex division).

## Responsibilities

- Maintain `VISUAL_LANGUAGE.md` as the current, authoritative statement of visual direction (tokens, theme behaviour, illustration/motion intent).
- Record why a visual decision was made, not only what changed — the underlying rationale is what a future engineer or agent needs, since the code itself already shows the "what."
- Flag when a proposed implementation would depart from recorded visual language, before implementation proceeds.

## Inputs

- Silvester's visual direction and acceptance decisions.
- Rendered previews/screenshots reviewed during implementation.
- Existing implementation in `src/app/globals.css`, `src/components`, `src/features`.

## Outputs

- `VISUAL_LANGUAGE.md` updates.
- Visual/content defect reports (per `AGENTS.md` § Claude responsibilities).

## Approval authority

Silvester Odilu — visual acceptance is never assumed; it must be explicit and recorded (`AGENTS.md` § Human authority).

## Implementation ownership

Claude proposes and reviews; Codex (or the sole implementation writer recorded in `docs/governance/EXECUTION_STATE.md`) implements tokens and components. Token values live in code (`src/app/globals.css`) — this office documents intent, not duplicate numbers.

## Dependencies

`docs/governance/AUTHORITY.md`, `docs/governance/EXECUTION_STATE.md`, `src/app/globals.css`.
