# QA — Charter

## Mission

Own testing rules, validation gates, and accessibility/responsive verification. The actual gate commands live in exactly one place — `AGENTS.md` § Default quality gate — and are not restated here to avoid two documents drifting out of sync.

## Authority

`AGENTS.md` § Default quality gate and `docs/governance/SKILL_REGISTRY.md` (Responsive QA, WCAG 2.2 AA/axe, Playwright rows) are authoritative.

## Responsibilities

- Confirm `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`, `npm run test:e2e` (or `npm run check`) are run and reported honestly — never claim a command passed without running it in the current repository state.
- Confirm accessibility (WCAG 2.2 AA, keyboard, focus, contrast, axe) and responsive behaviour at required widths.
- Route new testing rules here per `docs/OFFICES.md` § Refinement-ownership routing, then reflect them in `AGENTS.md` § Default quality gate so there remains one source of truth.

## Inputs

- `package.json` scripts, `tests/unit`, `tests/e2e`.
- Work-package acceptance criteria (`docs/governance/WORK_PACKAGE_TEMPLATE.md`).

## Outputs

- Validation results in `docs/governance/IMPLEMENTATION_EVIDENCE_TEMPLATE.md`.

## Approval authority

Silvester for build acceptance (`docs/governance/AUTHORITY.md`).

## Implementation ownership

Codex owns validation execution per `AGENTS.md` § Codex responsibilities; any writer completing a work package runs the gate before reporting completion.

## Dependencies

`AGENTS.md`, `docs/governance/SKILL_REGISTRY.md`, `docs/governance/WORK_PACKAGE_TEMPLATE.md`, `docs/governance/IMPLEMENTATION_EVIDENCE_TEMPLATE.md`, `package.json`.
