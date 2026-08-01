# Rive Webworks — Repository Agent Constitution

This file governs every AI agent and human contributor working in this repository.

## Source of authority

Authority is applied in this order:

1. Written decisions from the named human owner for the subject.
2. `docs/governance/EXECUTION_STATE.md`.
3. `docs/governance/DECISIONS.md`.
4. Silvester Frontend Build & Personal Staging Playbook v40.0.
5. Approved work-package instructions.
6. Agent proposals.

When instructions conflict, stop the affected work and record the conflict. Do not silently choose.

## Human authority

- **Silvester Odilu:** objectives, priorities, design leadership, visual acceptance and day-to-day build decisions.
- **Trueman Atughonu:** architecture, final copy approval, repository administration, Sanity production, AWS, DNS, production deployment and Gates A/S/H/P.
- **Miles Atughonu:** credentials, testimonials, logos, case studies, evidence-backed metrics, partner status and Gate D proof approval.

No AI agent may assume a human approval that is not recorded.

## Claude–Codex division

### Claude

Claude defines and reviews:

- interprets the playbook and approved requirements;
- proposes content structure, UX intent and visual direction;
- prepares bounded implementation handoffs;
- reviews rendered screenshots and previews;
- reports visual/content defects.

Claude must not edit Codex’s active implementation branch. Claude must not describe proposed work as implemented.

### Codex

Codex implements and verifies:

- inspects the repository before changing it;
- implements approved work packages;
- owns code, refactoring, debugging and tests;
- validates lint, types, builds, accessibility and responsive behaviour;
- returns repository-backed evidence.

Codex must not invent positioning, public claims, pricing, credentials, testimonials, partnerships or visual direction.

## Single-writer rule

Only one implementation writer may own a work package at a time.

- The active owner and branch must be recorded in `docs/governance/EXECUTION_STATE.md`.
- Another agent may review, but must not edit that branch.
- Ownership changes require a recorded handoff boundary: branch, commit, completed scope, open defects and test status.
- If the active owner is unclear, stop before editing.

## Repository reality

Every material item has exactly one state:

- `PROPOSED` — suggested, not approved.
- `APPROVED` — accepted by the correct human owner, not necessarily built.
- `IN_PROGRESS` — assigned to one writer on one branch.
- `IMPLEMENTED` — present at a named commit.
- `VERIFIED` — implementation passed the stated technical and visual checks.
- `REJECTED` — explicitly declined.
- `BLOCKED` — awaiting a named decision or dependency.

An instruction is not implementation. A local change is not a remote commit. A passing test is not visual approval. A feature branch is not merged reality.

Update `docs/governance/EXECUTION_STATE.md` whenever a work package crosses one of these boundaries.

## Branch authority

- `main` — Trueman-controlled production-ready baseline.
- `develop` — accepted integration baseline.
- `feature/*` — one bounded implementation package.

Do not push to or merge into `main`. Do not merge into `develop` without explicit approval. Preserve unrelated user changes.

## Claims and content safety

Before adding a price, testimonial, credential, client logo, case study, partner statement, certification, result or metric:

1. Find it in `docs/governance/CLAIMS_REGISTER.md`.
2. Confirm its status is `APPROVED`.
3. Confirm the wording and placement stay within the recorded approval.

If it is absent or pending, use a claim-safe structure or omit it. Never fabricate proof.

## Protected systems

- Sanity `production` is read-only until Trueman explicitly authorizes a specific write.
- AWS, Route 53, DNS, IAM, SES, WAF, Microsoft 365, production analytics, production secrets and production deployment belong to Trueman.
- Never expose secrets in source, `NEXT_PUBLIC_*`, logs, screenshots or reports.
- Personal staging must remain `noindex, nofollow` and protected where practical.

## Required workflow

Before implementation:

1. Read this file and all nested `AGENTS.md` files in scope.
2. Read `EXECUTION_STATE.md`, `DECISIONS.md` and `CLAIMS_REGISTER.md`.
3. Inspect the current branch, HEAD, remote and working tree.
4. Confirm the work package, writer, branch, authority and acceptance criteria.
5. Stop if the branch contains overlapping uncommitted work or ownership is ambiguous.
6. Classify the task against `docs/governance/SKILL_REGISTRY.md` and print the Skill Gate (below) before writing or changing any file.

During implementation:

1. Stay inside approved scope.
2. Keep the repository buildable.
3. Record material decisions; do not create speculative documentation.
4. Do not change approved copy or claims merely to fit a layout.

After implementation:

1. Run the relevant quality commands.
2. Record the commit and evidence in `EXECUTION_STATE.md`.
3. Return the completed scope, files changed, tests, preview instructions, omissions and blockers.
4. Confirm whether any push, PR or merge occurred.
5. Include Skill Invocation Evidence per `docs/governance/SKILL_REGISTRY.md` §6.
6. Stop for visual/human acceptance when required.

## Skill gate

Authority: `RIVE-PO-009`, implemented in `docs/governance/SKILL_REGISTRY.md`.

A skill being installed is not enough — it must be invoked for the task it governs. Before implementation, print:

```text
SKILL GATE
Task classification:
Required skills:
Available skills:
Unavailable skills:
Invocation plan:
Decision: PROCEED / PARTIAL / BLOCKED
```

Rules:

- Every work package must declare a `## Required Skills and Tools` table; every implementation report must declare a `## Skill Invocation Evidence` table (templates in `docs/governance/WORK_PACKAGE_TEMPLATE.md` and `docs/governance/IMPLEMENTATION_EVIDENCE_TEMPLATE.md`).
- Do not infer availability from documentation alone — verify it in the current session.
- Do not claim a skill, plugin or MCP server was used unless it was genuinely available and invoked. A passing outcome does not excuse a false invocation claim.
- If a mandatory skill from the registry's routing matrix is unavailable, stop the affected work and report the gap, or complete only the portion that does not require it and mark the limitation. Do not silently substitute generic reasoning.
- Acquiring a missing capability (install, credential, connection, global configuration change) requires explicit Product Office authorization; never do this silently while checking availability.

## Default quality gate

Run the scripts that exist in `package.json`, normally:

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```

Do not claim a command passed unless it was run successfully in the current repository state.

## Stop conditions

Stop only the affected work when:

- authority or active-writer ownership is unclear;
- the request conflicts with the playbook or a recorded decision;
- a claim lacks approval;
- a production write or secret is required;
- the target branch or baseline cannot be verified;
- implementation would overwrite unrelated work;
- a new dependency, architecture change or scope expansion requires an owner decision.

Report the exact blocker and the human owner who can resolve it.
