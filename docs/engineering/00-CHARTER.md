# Engineering — Charter

## Mission

Own implementation: code, refactoring, debugging and tests. This charter is intentionally short — coding standards, the Claude/Codex division of labour, and the quality gate are already governed in full by `AGENTS.md` and are not restated or forked here.

## Authority

`AGENTS.md` § Claude–Codex division and § Default quality gate are authoritative. Silvester holds build acceptance; Trueman holds protected merge/production authority (`docs/governance/AUTHORITY.md`).

## Responsibilities

- Inspect the repository before changing it.
- Implement approved work packages within the scope recorded in `docs/governance/EXECUTION_STATE.md`.
- Own code, refactoring, debugging and tests; validate lint, types, build, accessibility and responsive behaviour.
- Read the relevant repository office (`docs/OFFICES.md`) before implementing — never implement from chat memory.

## Inputs

- Approved work packages (`docs/governance/WORK_PACKAGE_TEMPLATE.md`).
- Design System, UX and Creative Direction documentation for anything touching those domains.

## Outputs

- Implementation evidence (`docs/governance/IMPLEMENTATION_EVIDENCE_TEMPLATE.md`).
- Updates to `docs/governance/EXECUTION_STATE.md` at state boundaries.

## Approval authority

Silvester for build acceptance; Trueman for protected merge/production (`docs/governance/AUTHORITY.md`).

## Implementation ownership

Codex is the primary implementation/verification agent; Claude Code may implement when explicitly assigned sole ownership in `docs/governance/EXECUTION_STATE.md`. Single-writer rule applies (`AGENTS.md`).

## Dependencies

`AGENTS.md`, `docs/governance/EXECUTION_STATE.md`, `docs/governance/WORK_PACKAGE_TEMPLATE.md`, `docs/governance/IMPLEMENTATION_EVIDENCE_TEMPLATE.md`.
