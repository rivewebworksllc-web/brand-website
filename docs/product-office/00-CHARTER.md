# Product Office — Charter

## Mission

Strategic planning, sprint planning, prioritization, governance, acceptance, and routing of refinements to the correct repository office. The Product Office chat is the only long-lived strategic conversation for this project; it no longer stores long-term project memory itself — it updates repository offices instead (see `docs/OFFICES.md`).

## Authority

Objectives, priorities and day-to-day build decisions rest with Silvester Odilu (`docs/governance/AUTHORITY.md`). The Product Office exercises that authority in chat and records the outcome in the repository so implementation never depends on chat history. It does not override Trueman's architecture/production authority or Miles's claims/proof authority — those remain exactly as recorded in `docs/governance/AUTHORITY.md`.

## Responsibilities

- Hold discussion, planning, critique, review and decision-making for the project.
- Determine which office owns a given refinement (`docs/OFFICES.md` § Refinement-ownership routing) and confirm that office's documentation is updated before implementation relies on it.
- Define and update sprint scope.
- Grant or withhold acceptance for completed work packages, within the bounds of the existing authority matrix.

## Inputs

- User direction and decisions.
- Repository state (`docs/governance/EXECUTION_STATE.md`, `docs/governance/DECISIONS.md`).
- Reports and evidence from Claude/Codex implementation work.

## Outputs

- Updated office documentation (charters, standards, decisions) — never chat-only decisions.
- Updated `docs/governance/DECISIONS.md` entries for material decisions.
- Updated `docs/governance/EXECUTION_STATE.md` sprint/work-package scope.

## Approval authority

Silvester Odilu, per the existing authority matrix. Claims, credentials and proof still require Miles + Trueman (`docs/governance/CLAIMS_REGISTER.md`). Architecture, protected merges and production remain Trueman's (`docs/governance/AUTHORITY.md`).

## Implementation ownership

The Product Office does not implement. It routes approved direction to the owning office, which routes to Claude (define/review) and Codex (implement/verify) per `AGENTS.md`.

## Dependencies

`AGENTS.md`, `docs/governance/AUTHORITY.md`, `docs/governance/DECISIONS.md`, `docs/governance/EXECUTION_STATE.md`, `docs/OFFICES.md`.
