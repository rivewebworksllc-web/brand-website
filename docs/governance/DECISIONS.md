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
| GOV-008 | 2026-08-01 | Official 21st.dev MCP (`https://21st.dev/api/mcp`) approved for Rive use, authenticated via `${API_KEY_21ST}` with no literal key committed; unofficial substitutes, ports or repackaged alternatives are prohibited for this capability, and passive connection does not satisfy the invocation requirement — governed tasks must show genuine `mcp__21st__*` tool invocation. TasteSkill remains `AWAITING_OFFICIAL_MCP`: no official MCP connection has been provided, so the capability is not approved for Rive execution and tasks genuinely requiring it must stop at the Skill Gate. `GOV-007` is not active or authoritative for this baseline — it exists only on the unmerged, quarantined `chore/register-taste-skill-capability` branch and has not been accepted into `develop`; this entry intentionally continues the sequence at `GOV-008` rather than reuse or renumber it. | Product Office (`RIVE-PO-012`, `RIVE-PO-014`, `RIVE-PO-015`, `RIVE-PO-016`) | `APPROVED` | `.mcp.json` added (env-var auth only, no secret); `SKILL_REGISTRY.md` updated with 21st.dev `OFFICIAL_MCP_CONNECTED_CALLABLE` classification and TasteSkill `AWAITING_OFFICIAL_MCP` classification |

## Entry format

Add one row with:

- immutable ID;
- decision date;
- precise decision;
- named human authority;
- approved vocabulary state;
- concrete repository or workflow effect.

Do not rewrite past decisions. Add a superseding decision that cites the earlier ID.
