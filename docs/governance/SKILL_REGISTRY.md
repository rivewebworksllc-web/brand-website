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

## 4. Task-to-skill routing matrix

| Task type | Mandatory skills that apply | Conditional skills to check |
|---|---|---|
| Visual/homepage design change | UI/UX Pro Max, TasteSkill, Responsive QA, WCAG/axe, Playwright | 21st.dev/Magic, Figma, image generation, copy review |
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
