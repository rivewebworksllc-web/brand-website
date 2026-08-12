# Skill Registry

Authority: Product Office decision `RIVE-PO-009`. This registry implements the mandatory skill-invocation standard referenced in `AGENTS.md`.

## 1. Purpose

No work package may begin implementation until the assigned agent has classified the task, identified the skills that govern it, confirmed their real availability, invoked them where applicable, and recorded evidence of that invocation. A skill being installed is not sufficient — it must be invoked for the task it governs.

## 2. Mandatory core skills

| Task area | Required skill or capability |
|---|---|
| Visual direction and interface design | UI/UX Pro Max |
| Premium component discovery and UI patterns | 21st.dev / Magic |
| Human-designed visual judgement and refinement | TasteSkill |
| React implementation | React / Next.js App Router |
| Type safety | TypeScript strict-mode discipline |
| Styling and reusable design tokens | Tailwind CSS / Rive design system |
| Responsive behaviour | Responsive and mobile-first QA |
| Accessibility | WCAG 2.2 AA, keyboard, focus, contrast and axe |
| Interaction verification | Playwright |
| Performance | Core Web Vitals and Next.js performance review |
| CMS work | Sanity schema, GROQ and content-modelling capability |
| Discoverability | Next.js metadata, structured data, SEO and LLM discoverability |
| Security-sensitive frontend work | Secure frontend and secrets-boundary review |
| AWS hosting compatibility | AWS Amplify compatibility review |
| Content and public claims | Claims Register and approved-copy review (`docs/governance/CLAIMS_REGISTER.md`) |
| Repository operations | Git and GitHub branch-governance discipline |
| Product acceptance | Rive Product Office review process |

## 3. Conditional skills

Invoked only when the work actually touches their domain:

- Figma integration for design-file or prototype work
- Image-generation tools for approved original visual assets
- Sanity migration tools for schema or dataset changes
- Lighthouse or bundle analysis for performance investigations
- Analytics and consent tooling for GA4, Clarity or CookieYes work
- Form validation and security tooling for contact or discovery forms
- AWS documentation review for hosting-sensitive implementation
- Microsoft platform references for Azure or Microsoft 365 content
- Copy and content-design review for homepage and service-page messaging

## 3.1 Major visual capability pipeline

The full gate applies to new public-facing pages; homepage, major section, mega-menu, navigation or mobile redesigns; major interaction systems; sitewide visual refinement; and major conversion surfaces. It does not automatically apply to Git integration, deployment, route correction, test repair, dependency upgrades, documentation-only governance, backend work or pure non-visual refactoring.

For major visual work, complete this sequence:

```text
Product Office commission
→ inspect the Rive system and current page family
→ UI/UX Pro Max
→ 21st.dev / Magic exploration
→ TasteSkill critique
→ Rive design-system synthesis
→ documented Design Decision Brief
→ implementation
→ Human Design Review
→ responsive QA
→ Playwright
→ axe / WCAG
→ Silvester visual acceptance
```

Implementation must not begin before the Design Decision Brief. Existing Rive pages are continuity references, not substitutes for external exploration. The synthesis is external pattern exploration + UI/UX reasoning + TasteSkill critique + Rive constraints; external suggestions that conflict with Rive must be rejected and documented.

UI/UX Pro Max is required and must answer a package-specific design question. Generic invocation is invalid. Evidence must report: Available, Installed, Environment, Invocation method, Design question, Recommendations returned, Recommendations adopted, Recommendations rejected, Reasons rejected, Material implementation impact and Invocation evidence.

21st.dev/Magic is a required exploration pass, not a required component import. When callable, major visual packages must perform at least three purposeful pattern explorations tied to real questions such as hero composition, core interaction and mobile treatment. Evidence must report: Available, Connected, Environment, Exploration performed, Search themes, Patterns reviewed, Patterns shortlisted, Direct component adopted, Rejected patterns, Reasons rejected, Material design influence and Invocation evidence.

TasteSkill is the design critic: visual restraint, anti-generic-AI review, composition and repetition critique, motion restraint and typographic discipline. It must not silently become the primary generator.

Every major page declares an Interaction identity, Primary content mode, Signature section and Visual tension, and compares hero layout, dark-section structure, tab treatment, media arrangement, card pattern, CTA rhythm, heading placement and section transitions against Homepage, Work, Guides, Insights and About. Reuse is allowed; unexamined repetition is not.

Current identities are continuity references, not templates: Work = Explore / Proof / Behind the Screen; Guides = Learn / Instruction / Featured Guide; Insights = Interpret / Analysis / Analysis Lens; About = Connect / Organisation / Connected Disciplines. Every future page defines its own identity and visual tension.

## 4. Task-to-skill routing matrix

| Task type | Mandatory skills that apply | Conditional skills to check |
|---|---|---|
| Major visual work (§3.1) | UI/UX Pro Max, 21st.dev/Magic exploration, TasteSkill critique, Rive design-system synthesis, Human Design Review, Responsive QA, WCAG/axe, Playwright | Figma, image generation, copy review |
| Minor visual change outside §3.1 | UI/UX Pro Max, TasteSkill, Responsive QA, WCAG/axe, Playwright | 21st.dev/Magic, Figma, image generation, copy review |
| Component/interaction implementation (no visual redesign) | React/Next.js, TypeScript, Tailwind, Responsive QA, WCAG/axe, Playwright | Figma (only if a design-file source exists) |
| Metadata/SEO change | Next.js metadata/SEO, Claims Register review | — |
| Content or copy change | Claims Register review, copy/content-design review | — |
| CMS/Sanity change | Sanity schema/GROQ capability | Sanity migration tools |
| Performance investigation | Core Web Vitals/Next.js performance review | Lighthouse/bundle analysis |
| Git integration (merge, branch, release) | Git/GitHub branch-governance discipline, Product acceptance | — |
| Security-sensitive frontend work (forms, secrets, auth surface) | Secure frontend and secrets-boundary review | Form validation/security tooling |
| Hosting/deployment-adjacent change | AWS Amplify compatibility review | AWS documentation review |
| Governance/documentation work (this registry's own class) | Git/GitHub branch-governance discipline, Product acceptance | — |

A task may span rows. Apply every row whose task type the work touches; skip rows whose task type it does not.

## 5. Availability states

Every skill/tool referenced in a Skill Gate must be reported in exactly one state:

- `INSTALLED_CALLABLE` — present and directly invocable in this session (plugin, skill, MCP tool, or repository script), and its use is demonstrable (command output, tool-call evidence).
- `INSTALLED_NOT_CONFIGURED` — present but requires setup (credentials, connection, dataset access) before it can run.
- `REFERENCED_UNAVAILABLE` — named in project docs or dependencies but no working tool/skill/MCP path currently reaches it.
- `AVAILABLE_EXTERNALLY_NOT_CONNECTED` — a real external capability exists (e.g. a SaaS product) but no connector is wired into this environment.
- `NOT_FOUND` — no evidence of the capability in this environment at all.

Do not infer availability from documentation alone. State the evidence used to reach the classification.

This vocabulary governs per-work-package Skill Gate reporting only. The durable, cross-session record of a capability's real-world state lives in `docs/capabilities/CAPABILITY_REGISTER.md` (Capability Governance Framework v1.0, `VERIFIED`/`CONNECTED`/`EXPERIMENTAL`/`PLANNED`/`RETIRED`) — consult it before assuming a capability's status, but still verify availability fresh for the current session before declaring a Skill Gate row.

## 6. Invocation evidence requirements

Every implementation report must include a `## Skill Invocation Evidence` table (see `IMPLEMENTATION_EVIDENCE_TEMPLATE.md`) listing, for each skill identified as required by the routing matrix:

- Whether it was invoked.
- The concrete evidence (tool-call name, command run and its output, file produced) — not a restatement of intent.
- Any limitation or exception, and why.

A row that says "used" without evidence is non-compliant.

## 7. Missing-skill stop rule

When a mandatory skill required by the routing matrix is unavailable (`REFERENCED_UNAVAILABLE`, `AVAILABLE_EXTERNALLY_NOT_CONNECTED`, or `NOT_FOUND`), the agent must do one of:

- Stop the affected work and report the missing dependency, or
- Complete only the portion of the work package that does not require that skill, and clearly mark the limitation in the report.

Silent substitution of generic reasoning for a required project skill is not permitted. Acquiring a missing capability (installing software, adding credentials, connecting an external service, changing global configuration) requires explicit Product Office authorization — it must never happen silently as a side effect of an availability check.

For a failed required major-visual invocation, report Capability, Expected invocation, Actual error, Environment, Attempts made, Alternative environment available, Functional substitute and Remaining design risk. Diagnose the environment, try the verified local invocation where applicable, try Claude Code where available, then escalate. Only Product Office may issue `PROCEED WITH EXCEPTION`, and every waiver is package-specific; there is no standing partial-capability exception.

Durable status never proves current-session callability. Every package must report both, for example: configured and historically verified, but not connected in the current session.

## 8. No-false-claims rule

An agent must not report a skill as used unless it was genuinely available and invoked in that session. Claiming UI/UX Pro Max, 21st.dev, TasteSkill, an MCP server, or any other skill was used without real invocation evidence is a governance violation, independent of whether the resulting work product happens to be acceptable.

## 9. Product Office exception authority

Only the Product Office may:

- Waive a mandatory skill requirement for a specific work package.
- Approve proceeding with a `PARTIAL` Skill Gate decision.
- Authorize acquiring a missing capability (install, credential, connection, global configuration change).

Exceptions must be recorded as a decision in `docs/governance/DECISIONS.md`, citing the work package ID and the skill waived.

## 10. Review and update procedure

Update this registry only when the skill baseline changes materially (a skill is added, removed, or its availability status changes in a way that affects future routing). Record the change as a dated entry below; do not rewrite history.

| Date | Change | Authority |
|---|---|---|
| 2026-08-01 | Registry created under `RIVE-PO-009`; initial capability audit performed (see `RW-GOV-002` implementation evidence for the full status matrix at adoption). | Product Office |
| 2026-08-01 | 21st.dev (row 14, §2 "Premium component discovery and UI patterns") classified `OFFICIAL_MCP_CONNECTED_CALLABLE` (closest §5 vocabulary: `INSTALLED_CALLABLE`): official HTTP MCP at `https://21st.dev/api/mcp`, authenticated via `${API_KEY_21ST}` with no literal key committed, providing component search/retrieval, inspiration discovery, theme discovery, generation, generation inspection/iteration, and bookmark/team-library workflows through `mcp__21st__*` tools — verified this session by a genuine read-only invocation, not passive connection alone. No literal tool named "Magic" exists; reports must name the actual `mcp__21st__*` tool invoked. Only the official server is permitted — unofficial ports or repackaged substitutes do not satisfy this row. TasteSkill (row 15, §2) is classified `AWAITING_OFFICIAL_MCP` (closest §5 vocabulary: `AVAILABLE_EXTERNALLY_NOT_CONNECTED`): no official MCP connection has been provided, so the capability is not approved for Rive execution regardless of any locally installed third-party or Claude-compatible package; tasks genuinely requiring TasteSkill must stop at the Skill Gate. The unmerged `chore/register-taste-skill-capability` branch and its `GOV-007` entry are not authoritative for this classification — see `DECISIONS.md` `GOV-008`. | Product Office (`RIVE-PO-012`, `RIVE-PO-014`, `RIVE-PO-015`, `RIVE-PO-016`) |
| 2026-08-03 | Capability Governance Framework (CGF v1.0) adopted; durable capability inventory moved to `docs/capabilities/CAPABILITY_REGISTER.md` (see `DECISIONS.md` `GOV-010`). Fresh same-session audit: 21st.dev MCP re-verified `VERIFIED` (live `mcp__21st__get_usage`/`list_teams` calls); UI/UX Pro Max re-verified `VERIFIED` (live `search.py` invocation via the installed plugin, real database results returned); Taste Skill confirmed genuinely absent from this environment, classified `PLANNED` (no plugin, no MCP, no file evidence found — consistent with this table's prior `AWAITING_OFFICIAL_MCP` entry, not a change in fact). Figma MCP (`mcp__claude_ai_Figma__*`) newly observed present via the operator's global claude.ai connector, not project-pinned — classified `CONNECTED`, unvalidated for Rive use. Full evidence and classification detail lives in the register, not duplicated here. | Product Office |
| 2026-08-03 | Local project audit found the "absent" TasteSkill classification above was incomplete: a full 13-skill third-party package (`Leonxlnx/taste-skill`, previously approved under `GOV-007`) exists intact on the unmerged `chore/register-taste-skill-capability` branch (commit `56da308`), not merged into any active baseline. Per Product Office direction (`DECISIONS.md` `GOV-011`), its content was restored into the working tree (`.agents/skills/*`, `skills-lock.json`) but the `.claude/skills/*` symlinks required for actual invocation could not be created — blocked twice by Claude Code's own auto-mode safety classifier, a platform guard, not a project rule. Reclassified in `CAPABILITY_REGISTER.md` from `PLANNED` to a caveated `CONNECTED` (content present, not callable). | Product Office |
| 2026-08-06 | This row's own "symlinks could not be created" description is now stale: `RW-PW09`'s Product Office review directed a fresh session-local discovery, which found `.claude/skills/design-taste-frontend` (and all 12 siblings) exist as real symlinks to `.agents/skills/*` (`ls -la` evidence, dated 2026-08-03 — i.e. present since shortly after the row above, just not re-checked since), and a genuine `Skill` tool invocation of `design-taste-frontend` returned its full `SKILL.md` content into context and was applied against `ProcessStepper.tsx`/`OutcomeExplorer.tsx`. TasteSkill (`design-taste-frontend`) reclassified `INSTALLED_CALLABLE` in `CAPABILITY_REGISTER.md` (from `CONNECTED`/not-callable). §2/§4's TasteSkill row is no longer a routing gap for frontend visual work — future Skill Gates should verify callability fresh (per §5) rather than citing this correction as a standing guarantee. | Product Office (session-directed correction per Silvester, `RW-PW09`) |
| 2026-08-12 | RW-GOV-04B restored the full major-visual pipeline: UI/UX Pro Max reasoning, 21st.dev/Magic exploration, TasteSkill critique, Rive synthesis, Design Decision Brief, implementation, Human Design Review, responsive QA, Playwright, axe/WCAG and Silvester acceptance. Major visual packages now require purposeful evidence, cross-page repetition review and package-specific exception escalation; durable status and current-session callability are reported separately. | Product Office / Silvester (`GOV-014`) |
