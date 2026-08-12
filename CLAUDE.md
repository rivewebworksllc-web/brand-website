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

## Major visual work

For new public pages, major page/section/navigation/mobile redesigns, interaction systems, sitewide visual refinement and major conversion surfaces, follow `docs/governance/SKILL_REGISTRY.md` §3.1 before implementation:

1. inspect the Rive system and current page family;
2. invoke UI/UX Pro Max against a package-specific design question;
3. complete the required 21st.dev/Magic exploration pass;
4. apply TasteSkill as a critic, not the primary design generator;
5. compare the proposal against existing Rive pages for unexamined repetition;
6. produce the Design Decision Brief required by `docs/governance/WORK_PACKAGE_TEMPLATE.md`.

Existing Rive pages are continuity references, not substitutes for external exploration. External suggestions never override the approved Rive visual language; conflicting patterns must be rejected with reasons. Capability failure must follow the package-specific escalation and waiver process in `docs/governance/SKILL_REGISTRY.md`—there is no standing partial-capability exception.

Where tool availability makes it advantageous, Claude performs read-only design exploration and prepares the Design Decision Brief; Codex implements and verifies it. This does not transfer implementation ownership or relax the single-writer rule. Human Design Review, responsive QA, Playwright, axe/WCAG and Silvester's visual acceptance remain required after implementation.

## Everything else

Product Office authority, the single-writer rule, branch restrictions, and claims-safety rules in `AGENTS.md` are unchanged and take precedence over anything not explicitly repeated here.
