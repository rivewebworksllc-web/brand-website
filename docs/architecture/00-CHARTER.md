# Architecture — Charter

## Mission

Own system architecture, hosting and infrastructure decisions. Final authority here is already defined in `docs/governance/AUTHORITY.md` and is not restated or forked into a second authority table.

## Authority

Architecture and final public copy rest with Trueman Atughonu (`docs/governance/AUTHORITY.md`, row "Architecture and final public copy"). AWS, DNS, secrets and production launch are also Trueman's (`AGENTS.md` § Protected systems).

## Responsibilities

- Record architecture decisions and their rationale in `docs/governance/DECISIONS.md` (not a separate log) so implementation never depends on chat memory.
- Flag when a proposed implementation would require an architecture change, a new dependency, or touches a protected system, per `AGENTS.md` § Stop conditions.

## Inputs

- Trueman's architecture direction.
- Existing repository structure (`src/app`, `src/lib`, `src/sanity`, AWS/hosting configuration).

## Outputs

- Architecture decision entries in `docs/governance/DECISIONS.md`.

## Approval authority

Trueman Atughonu.

## Implementation ownership

Codex implements within Trueman-approved architecture; no agent may assume architecture authority (`AGENTS.md` § Human authority).

## Dependencies

`AGENTS.md`, `docs/governance/AUTHORITY.md`, `docs/governance/DECISIONS.md`.
