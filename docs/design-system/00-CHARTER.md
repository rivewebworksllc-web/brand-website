# Design System — Charter

## Mission

Own component behaviour, design tokens and reusable UI patterns: the shared vocabulary components are built from, so the same problem isn't solved a different way in every feature.

## Authority

Component behaviour is routed here per `docs/OFFICES.md` § Refinement-ownership routing. Visual acceptance of the resulting components still rests with Silvester Odilu (`docs/governance/AUTHORITY.md`).

## Responsibilities

- Track which reusable components and tokens exist and their intended usage, pointing to code rather than restating it.
- Flag duplicate or drifting patterns across `src/components`/`src/features` before implementation proceeds.
- Coordinate with Creative Direction (`docs/creative-direction/00-CHARTER.md`) when token changes carry visual-language intent.

## Inputs

- Implementation in `src/app/globals.css` (tokens/theme), `src/components`, `src/features`.
- Approved visual direction from Creative Direction.

## Outputs

- Notes on component/token conventions as they're established (this office starts with no backfilled history — see `docs/creative-direction/VISUAL_LANGUAGE.md` for the token decisions already made).
- `TYPOGRAPHY.md` for the approved semantic type-role model and Work-reference boundary.

## Approval authority

Silvester Odilu for visual/build acceptance; Trueman for anything touching protected merge/production (`docs/governance/AUTHORITY.md`).

## Implementation ownership

Codex (or the sole implementation writer recorded in `docs/governance/EXECUTION_STATE.md`). Token values and component code are authoritative in `src/`, not duplicated here.

## Dependencies

`docs/creative-direction/00-CHARTER.md`, `docs/governance/AUTHORITY.md`, `src/app/globals.css`, `src/components`, `src/features`.
