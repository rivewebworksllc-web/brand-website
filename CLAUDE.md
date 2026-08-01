# Claude instructions

This repository is governed by `AGENTS.md` (the full agent constitution — authority, branch rules, single-writer rule, claims safety) and `docs/governance/SKILL_REGISTRY.md` (mandatory and conditional project skills, routing, evidence rules). Read both before implementation. This file does not duplicate them — it only points to them and states the two hard requirements that apply specifically to Claude sessions.

## Before implementation

Print the Skill Gate defined in `AGENTS.md` § "Skill gate" / `docs/governance/SKILL_REGISTRY.md`:

```text
SKILL GATE
Task classification:
Required skills:
Available skills:
Unavailable skills:
Invocation plan:
Decision: PROCEED / PARTIAL / BLOCKED
```

## After implementation

Include a `## Skill Invocation Evidence` table in the completion report, per `docs/governance/SKILL_REGISTRY.md` §6. Do not claim a skill was used without genuine invocation evidence from the same session.

## Everything else

Product Office authority, the single-writer rule, branch restrictions, and claims-safety rules in `AGENTS.md` are unchanged and take precedence over anything not explicitly repeated here.
