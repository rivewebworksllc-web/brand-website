# Decision Log

Record only material decisions that affect implementation, authority, scope or release.

| ID | Date | Decision | Authority | State | Repository effect |
|---|---|---|---|---|---|
| GOV-001 | 2026-07-30 | Claude defines/reviews; Codex implements/verifies; only one implementation writer owns a work package at a time. | Silvester | `APPROVED` | Enforced by root `AGENTS.md` |
| GOV-002 | 2026-07-30 | Repository evidence, not an agent report alone, determines implementation state. | Silvester | `APPROVED` | Commit/branch/test evidence required |
| GOV-003 | 2026-07-30 | Silvester decides objectives and visual acceptance; Trueman owns architecture/protected production authority; Miles approves public proof. | v40.0 playbook + Silvester | `APPROVED` | Authority matrix created |
| GOV-004 | 2026-07-30 | Week 1 must be accepted and merged to `develop` before Codex begins Week 2. | Silvester governance transition | `APPROVED` | Transition checklist in execution state |
| GOV-005 | 2026-07-30 | Sanity `production` remains read-only until Trueman authorizes a specific write. | v40.0 playbook / Trueman boundary | `APPROVED` | All agents must stop before production writes |
| GOV-006 | 2026-07-31 | Week 1 visual refinement (commit `20efe31`) is visually accepted — explicit conversational approval, "Outcome B — Visual refinement approved." | Silvester | `APPROVED` | `20efe31` pushed to `origin/feature/week-1-design-shell-homepage`; `EXECUTION_STATE.md` Week 1 visual refinement state raised to `VERIFIED`; merge into `develop` still requires governance adoption first (GOV-004) plus a separate Week 1 PR |
| GOV-007 | 2026-08-01 | Named exception under `RIVE-PO-012`: TasteSkill has no official-MCP form, so all 13 skills published in `Leonxlnx/taste-skill` (github.com/Leonxlnx/taste-skill, MIT license, 69.8k stars, individual maintainer — not a vendor-official source) are approved for use as a third-party skill package, superseding the MCP-only default for this capability specifically. | Silvester | `APPROVED` | Skills installed to `.agents/skills/*` and symlinked at `.claude/skills/*`, tracked in git this commit; `skills-lock.json` records source repo and content hash per skill |

## Entry format

Add one row with:

- immutable ID;
- decision date;
- precise decision;
- named human authority;
- approved vocabulary state;
- concrete repository or workflow effect.

Do not rewrite past decisions. Add a superseding decision that cites the earlier ID.
