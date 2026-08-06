# Repository Offices

Authority: Product Office repository governance refactor (repository-resident office model). This index implements the operating model described in `AGENTS.md` § "Repository-resident offices."

## Model

There is one long-lived strategic conversation: the **Product Office** chat. Everything else is repository-resident. Chat history is not project memory — repository documentation always supersedes it. Before implementing any task, read the relevant office below; do not implement from chat memory.

Cross-cutting process (authority matrix, decision log, execution state, claims register, skill registry, work-package/evidence templates) lives in `docs/governance/` and is **not** duplicated here. Each office charter below links to it instead of restating it.

## Offices

| Office | Charter | Owns |
|---|---|---|
| Product Office | `product-office/00-CHARTER.md` | Strategic planning, sprint planning, prioritization, governance, acceptance, routing refinements |
| Creative Direction | `creative-direction/00-CHARTER.md` | Visual language, brand expression, illustration/motion direction |
| UX | `ux/00-CHARTER.md` | Navigation, information architecture, interaction flow |
| Design System | `design-system/00-CHARTER.md` | Component behaviour, design tokens, reusable UI patterns |
| Engineering | `engineering/00-CHARTER.md` | Coding standards, implementation, refactoring |
| QA | `qa/00-CHARTER.md` | Testing rules, validation gates, accessibility/responsive verification |
| Research | `research/00-CHARTER.md` | Research findings, competitive/user insight |
| Architecture | `architecture/00-CHARTER.md` | System architecture, hosting, infrastructure decisions |
| Capabilities | `capabilities/00-CHARTER.md` | External capability inventory and verification state (`CAPABILITY_REGISTER.md`), Human Design Review / AI-slop prevention (`HUMAN_DESIGN_REVIEW.md`) |

`docs/governance/` itself is not an "office" in this table — it is the shared process layer every office depends on (see `docs/governance/README.md`).

## Refinement-ownership routing

Whenever a refinement changes how Rive should be built, the Product Office determines which office owns it and that office's repository documentation is updated before any future implementation relies on it:

| Refinement type | Owning office |
|---|---|
| Visual language | Creative Direction |
| Navigation | UX |
| Component behaviour | Design System |
| Acceptance criteria | Product Office |
| Coding standard | Engineering |
| Testing rule | QA |
| Architecture | Architecture |
| Research findings | Research |
| External capability status | Capabilities |
| Design quality / AI-slop review | Capabilities (Human Design Review), gated at Product Office acceptance |

## Product Office workflow

```text
Discussion
  ↓
Decision
  ↓
Determine responsible office
  ↓
Update repository office
  ↓
Update sprint (if required)
  ↓
Engineering implementation
  ↓
Verification
```

No implementation should depend on chat history. Material decisions are still recorded once, in `docs/governance/DECISIONS.md` — offices link to that log rather than keeping parallel ones.
