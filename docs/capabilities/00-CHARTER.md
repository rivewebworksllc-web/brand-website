# Capabilities — Charter

## Mission

Own the true operational state of every external capability Rive depends on or is considering — MCP servers, skills, plugins, and tooling — so that reliance on a capability is based on evidence, not assumption. Also owns Human Design Review: the capability that rejects AI-generated design mediocrity ("AI slop") before it reaches Product Office acceptance.

## Authority

Authority: Product Office Capability Governance Framework (CGF v1.0). This office does not create new human approval authority — visual acceptance remains Silvester Odilu's, architecture remains Trueman's, claims remain Miles + Trueman's (`docs/governance/AUTHORITY.md`). It governs how confidently Engineering may rely on a capability, and gates design acceptance on the Human Design Review checklist.

## Responsibilities

- Maintain `CAPABILITY_REGISTER.md` as the single, authoritative inventory of every external capability in use or under consideration.
- Classify every capability into exactly one of five states — `VERIFIED`, `CONNECTED`, `EXPERIMENTAL`, `PLANNED`, `RETIRED` — based on evidence gathered in the current session, never inferred from documentation or prior claims alone.
- Maintain `HUMAN_DESIGN_REVIEW.md`: the measurable checklist used to detect and reject AI-generated design patterns before implementation is accepted.
- Re-verify a capability's state whenever it is about to be relied upon for a new work package, rather than trusting a stale classification indefinitely.
- Flag when a capability is being relied upon outside its permitted dependency tier (see Dependency rule, `AGENTS.md` § Capability governance).

## Inputs

- Direct, same-session tool invocation and its real output (MCP calls, skill invocations, script execution, filesystem checks).
- `docs/governance/SKILL_REGISTRY.md` (the per-work-package Skill Gate — a different, narrower vocabulary for a different purpose; this office does not duplicate it).
- Product Office decisions about which capabilities to pursue or retire.

## Outputs

- `CAPABILITY_REGISTER.md` entries, each carrying concrete evidence, not a restated intent.
- `HUMAN_DESIGN_REVIEW.md` checklist outcomes referenced in design-review reports.
- Flags/stops when a work package would depend on an `EXPERIMENTAL` or `PLANNED` capability as if it were `VERIFIED`.

## Approval process

- A capability may only be marked `VERIFIED` after genuine, same-session (or explicitly cited prior-session) evidence of successful invocation — a command run and its real output, not a description of expected behaviour.
- Promoting a capability from `CONNECTED`/`EXPERIMENTAL` to `VERIFIED`, or retiring one to `RETIRED`, is recorded as a dated change in `CAPABILITY_REGISTER.md` and, when material, in `docs/governance/DECISIONS.md`.
- Only the Product Office may waive the evidence requirement for a specific, time-bounded exception; such a waiver must be recorded in `docs/governance/DECISIONS.md`.

## Evidence requirements

- Every register entry must state the exact evidence used to reach its classification (tool name, command, real output, or an explicit "not found" search result) — a status claimed without evidence is non-compliant, matching the no-false-claims rule already in `SKILL_REGISTRY.md` §8.
- Absence of a capability must be demonstrated (searched for and not found), not assumed from silence.

## Maintenance responsibilities

- Update `CAPABILITY_REGISTER.md` when a capability's real-world state changes (newly connected, newly verified, retired) — do not let it drift from reality.
- Do not create a second decision log, execution-state file, or skill-gate mechanism inside this office — link to the existing ones in `docs/governance/`.

## Dependencies

`AGENTS.md`, `docs/governance/SKILL_REGISTRY.md`, `docs/governance/DECISIONS.md`, `docs/OFFICES.md`.
