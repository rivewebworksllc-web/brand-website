# Rive Webworks Governance

This directory records project reality without replacing the v40.0 playbook.

`docs/governance/` holds the shared, cross-cutting process layer only: authority, decisions, execution state, claims and the skill registry. Domain knowledge (creative direction, UX, design system, engineering, QA, research, architecture) lives in the sibling office folders indexed at `docs/OFFICES.md`, each with its own charter. Office charters link back to the files below rather than duplicating them — do not fork a second decision log, execution-state file or authority matrix inside an office folder.

## Files

- `AUTHORITY.md` — decision ownership and gate authority.
- `EXECUTION_STATE.md` — current repository boundary and active work.
- `DECISIONS.md` — accepted or rejected material decisions.
- `CLAIMS_REGISTER.md` — public proof and claim approval.
- `WORK_PACKAGE_TEMPLATE.md` — brief from direction/review to implementation.
- `IMPLEMENTATION_EVIDENCE_TEMPLATE.md` — completion evidence from the implementation owner.

## Maintenance rule

Update only the file that changes reality. Do not create a new report when a short entry in an existing register is sufficient.

## Status vocabulary

Use only:

`PROPOSED`, `APPROVED`, `IN_PROGRESS`, `IMPLEMENTED`, `VERIFIED`, `REJECTED`, `BLOCKED`.

## Gate vocabulary

- **Gate A:** Trueman locks direction; Miles joins for proof/claims.
- **Gate S:** Trueman accepts or rejects complete personal staging.
- **Gate H:** Trueman accepts the portable repository, assets, content and evidence handoff.
- **Gate P:** Trueman alone authorizes and performs production integration and launch.
- **Gate D:** Miles and Trueman approve public proof.
