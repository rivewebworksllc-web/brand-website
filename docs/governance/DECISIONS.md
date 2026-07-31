# Decision Log

Record only material decisions that affect implementation, authority, scope or release.

| ID | Date | Decision | Authority | State | Repository effect |
|---|---|---|---|---|---|
| GOV-001 | 2026-07-30 | Claude defines/reviews; Codex implements/verifies; only one implementation writer owns a work package at a time. | Silvester | `APPROVED` | Enforced by root `AGENTS.md` |
| GOV-002 | 2026-07-30 | Repository evidence, not an agent report alone, determines implementation state. | Silvester | `APPROVED` | Commit/branch/test evidence required |
| GOV-003 | 2026-07-30 | Silvester decides objectives and visual acceptance; Trueman owns architecture/protected production authority; Miles approves public proof. | v40.0 playbook + Silvester | `APPROVED` | Authority matrix created |
| GOV-004 | 2026-07-30 | Week 1 must be accepted and merged to `develop` before Codex begins Week 2. | Silvester governance transition | `APPROVED` | Transition checklist in execution state |
| GOV-005 | 2026-07-30 | Sanity `production` remains read-only until Trueman authorizes a specific write. | v40.0 playbook / Trueman boundary | `APPROVED` | All agents must stop before production writes |

## Entry format

Add one row with:

- immutable ID;
- decision date;
- precise decision;
- named human authority;
- approved vocabulary state;
- concrete repository or workflow effect.

Do not rewrite past decisions. Add a superseding decision that cites the earlier ID.
