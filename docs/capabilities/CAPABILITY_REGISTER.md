# Capability Register

Authority: Product Office Capability Governance Framework (CGF v1.0), `docs/capabilities/00-CHARTER.md`. This is the durable, cross-session inventory of external capabilities. It is distinct from `docs/governance/SKILL_REGISTRY.md` §5, which governs per-work-package Skill Gate reporting — a capability can be `VERIFIED` here and still needs a fresh availability check in a given work package's Skill Gate, since tool availability can vary by session/environment.

## States

- **VERIFIED** — personally tested, evidence exists, safe for production use, Engineering may rely on it.
- **CONNECTED** — installed and callable, not fully validated; may be used only with caution and requires verification before becoming load-bearing.
- **EXPERIMENTAL** — research stage; may be explored; not trusted; cannot become a project dependency.
- **PLANNED** — approved direction; not installed; not connected; no implementation dependency allowed.
- **RETIRED** — previously used; no longer maintained; cannot be relied upon.

## Capability: 21st.dev MCP

| Field | Value |
|---|---|
| Category | Component discovery / design-research MCP |
| Purpose | Search and (metered) retrieve UI components, design inspiration, themes and generations for implementation reference |
| Official Provider | 21st.dev |
| Official Repository / Documentation | `https://21st.dev/api/mcp` |
| Installation Status | Installed — registered in this repo's `.mcp.json` |
| Connection Status | Project-configured — official HTTP MCP is registered in `.mcp.json`; a session is connected only when its environment supplies `${API_KEY_21ST}` and exposes the MCP tools |
| Operational Status | Operational |
| Verification Status | **VERIFIED** |
| Owner | Engineering (invocation), Product Office (capability approval — `GOV-008`) |
| Last Validation Date | 2026-08-03 |
| Approved Uses | Component/pattern search, inspiration discovery, theme discovery, generation and iteration, bookmark/team-library workflows via `mcp__21st__*` tools. Only the official server — no unofficial ports or repackaged substitutes. |
| Restrictions | Current-session callability must be checked afresh. Passive configuration or historical connection is not evidence of current use. Major visual packages require a purposeful exploration pass when callable; direct production component adoption remains optional. Free-tier limits must be checked before retrieval. |
| Dependencies | `.mcp.json`, `API_KEY_21ST` environment variable |
| Evidence | Durable verification: 2026-08-03 live `mcp__21st__get_usage` and `mcp__21st__list_teams` responses, plus `DECISIONS.md` `GOV-008`. RW-GOV-04B current-session check (2026-08-12): `.mcp.json` registration present and valid; `API_KEY_21ST` absent and no `mcp__21st__*` tools exposed to Codex, so this session is not callable without changing the durable `VERIFIED` classification. Historical Claude invocation remains verified. |
| Next Review Date | Before the next work package that relies on `get_component` retrieval (re-check remaining quota) |
| Notes | Individual account, no team workspace (`list_teams` returned empty). |

## Capability: UI/UX Pro Max

| Field | Value |
|---|---|
| Category | Local design-intelligence skill (styles, palettes, typography, UX-rule database + reasoning search tool) |
| Purpose | Query design-system recommendations, style/colour/typography options, UX guidelines and stack-specific implementation guidance |
| Official Provider | `ui-ux-pro-max-skill` plugin |
| Official Repository / Documentation | Discover from the installed plugin cache as `~/.claude/plugins/cache/ui-ux-pro-max-skill/<package>/<current-version>/.claude/skills/ui-ux-pro-max/`. Verified current executable: `/Users/silvestr/.claude/plugins/cache/ui-ux-pro-max-skill/ui-ux-pro-max/2.11.0/.claude/skills/ui-ux-pro-max/scripts/search.py`. |
| Installation Status | Installed — plugin present on disk |
| Connection Status | Direct-script callable from Codex; historically callable as a native Claude Code skill; not natively exposed as a Codex skill in RW-GOV-04B |
| Operational Status | Operational |
| Verification Status | **VERIFIED** |
| Owner | Engineering / Creative Direction (invocation for design decisions) |
| Last Validation Date | 2026-08-12 |
| Approved Uses | Required reasoning pass for major visual work: answer a package-specific UX/design question before the Design Decision Brief. Also approved for style, colour, typography, animation, chart and stack-specific guidance. |
| Restrictions | Local static database — recommendations are generic pattern guidance, not a substitute for approved Rive visual language (`docs/creative-direction/VISUAL_LANGUAGE.md`) or Human Design Review acceptance. |
| Dependencies | Local Python 3.x, no external network calls |
| Evidence | Durable verification: 2026-08-03 native Claude skill invocation and successful direct `search.py` query. RW-GOV-04B focused check (2026-08-12): corrected executable exists and `python3 …/scripts/search.py --help` returned the live CLI usage; the previously documented path without the package-name directory does not exist. |
| Next Review Date | On plugin version change, or before the next work package that depends on it for a design decision |
| Notes | Registered, installed, discoverable, callable and natively exposed are distinct states. Discover the current version instead of treating the verified versioned path as permanent. A failed expected invocation must be diagnosed and escalated; only Product Office may grant a package-specific waiver. |

## Capability: Taste Skill

| Field | Value |
|---|---|
| Category | Human-designed visual judgement and refinement — third-party 13-skill package (`brandkit`, `design-taste-frontend`, `design-taste-frontend-v1`, `full-output-enforcement`, `gpt-taste`, `high-end-visual-design`, `image-to-code`, `imagegen-frontend-mobile`, `imagegen-frontend-web`, `industrial-brutalist-ui`, `minimalist-ui`, `redesign-existing-projects`, `stitch-design-taste`) |
| Purpose | Human-calibrated design critic for restraint, composition, repetition, motion, typography and anti-generic-AI review |
| Official Provider | Not official — third-party GitHub repo `Leonxlnx/taste-skill` (MIT license, individual maintainer, per `GOV-007`'s own characterization: "not a vendor-official source") |
| Official Repository / Documentation | `.agents/skills/*/SKILL.md` (and `stitch-design-taste/DESIGN.md`) in the working tree; `skills-lock.json` records source path + content hash per skill |
| Installation Status | **Partially installed** — all 14 content files (13 skills, one with an extra `DESIGN.md`) plus `skills-lock.json` restored to the working tree from commit `56da308`, byte-for-byte verified against that commit. Untracked; not staged or committed. |
| Connection Status | **Connected and invocable** — corrected 2026-08-06 (`RW-PW09` review). The `.claude/skills/*` symlinks now exist (`ls -la .claude/skills/` confirms all 13 skills, e.g. `design-taste-frontend -> ../../.agents/skills/design-taste-frontend`, dated 2026-08-03) and `design-taste-frontend` is listed in-session as an invocable skill and loads its full `SKILL.md` content when called. The prior "denied twice by the auto-mode classifier" entry below is preserved as history, not deleted, per `SKILL_REGISTRY.md` §10 — but it no longer describes the present state; whatever blocked symlink creation earlier evidently did not block it permanently. |
| Operational Status | **Operational** — loads and is followable as a Claude Code skill (see Evidence) |
| Verification Status | **VERIFIED** (corrected from `CONNECTED`/not-callable — see 2026-08-06 evidence) |
| Owner | Product Office (reactivation decision, `GOV-011`); engineering may now rely on it per Restrictions below |
| Last Validation Date | 2026-08-06 |
| Approved Uses | Required critique pass for major visual work after UI/UX Pro Max and 21st.dev exploration. It tests restraint, composition, repetition, motion and typographic discipline; it is not the primary design generator. Opinionated defaults remain advisory and cannot override established Rive tokens. |
| Restrictions | Superseded 2026-08-06: no longer restricted to "not currently callable." Still subject to the open Reconciliation note (see Notes) — its default aesthetic opinions do not override approved Rive brand tokens on their own. |
| Dependencies | `.claude/skills/*` symlinks — now present (see Evidence) |
| Evidence | **2026-08-03** (superseded): `git show 56da308:<path>` used to extract and verify all 14 content files and `skills-lock.json`; `mkdir .claude/skills` and `ln -s` both denied by the auto-mode classifier that session. **2026-08-06** (current): `ls -la .claude/skills/design-taste-frontend` shows a real symlink to `../../.agents/skills/design-taste-frontend` (target file `SKILL.md`, 87253 bytes); the skill was listed as available in-session and invoked via the `Skill` tool (`skill: "design-taste-frontend"`), which returned its full ~87KB `SKILL.md` body into context — genuine invocation, not passive listing. Findings applied against `ProcessStepper.tsx`/`OutcomeExplorer.tsx` under `RW-PW09`. |
| Next Review Date | Next time a work package depends on it — re-verify callability fresh per `SKILL_REGISTRY.md` §5 (do not assume this dated entry alone) |
| Notes | Supersedes the 2026-08-03 `PLANNED` entry above per Product Office direction (`GOV-011`). `GOV-007`'s original exception is reinstated for this package; `GOV-008`'s "not authoritative" language is reversed specifically for this reactivation action, not retroactively for the historical record. Reconciliation still open: several of these skills prescribe specific, opinionated visual direction (e.g. `gpt-taste` bans Inter as a typeface and mandates aggressive GSAP choreography) that has not been checked against `docs/creative-direction/VISUAL_LANGUAGE.md` or `docs/capabilities/HUMAN_DESIGN_REVIEW.md`, and overlaps in purpose with the already-`VERIFIED` UI/UX Pro Max entry above — using both together on the same task without reconciling them risks conflicting design direction. |

## Capability: Figma MCP

| Field | Value |
|---|---|
| Category | Design-to-code / code-to-design bridge |
| Purpose | Read Figma designs into code context, write code/intent into Figma, Code Connect mapping, FigJam/diagram generation |
| Official Provider | Figma (official `claude.ai Figma` MCP server) |
| Official Repository / Documentation | Provided via the operator's global claude.ai connector, not a file in this repository |
| Installation Status | Present in this session's tool surface (`mcp__claude_ai_Figma__*`) |
| Connection Status | Connected — but at the **global claude.ai account level**, not registered in this repo's `.mcp.json` |
| Operational Status | Not yet exercised on any Rive work package |
| Verification Status | **CONNECTED** (unvalidated for Rive use; do not treat as guaranteed present in every session or for every agent) |
| Owner | Not yet assigned — no work package has used it |
| Last Validation Date | 2026-08-03 (presence observed only; not invoked) |
| Approved Uses | None yet approved |
| Restrictions | Environment-dependent: unlike 21st.dev, this capability is not pinned in `.mcp.json`, so its presence cannot be assumed for every future session or agent until/unless it is explicitly provisioned at the project level. Do not build a required workflow around it without first re-verifying availability. |
| Dependencies | Operator's global claude.ai Figma connector |
| Evidence | This session's tool listing includes `mcp__claude_ai_Figma__*` tool definitions; not invoked, so no live-call evidence exists yet — presence only. |
| Next Review Date | Before any work package proposes depending on it |
| Notes | Discovered incidentally during this audit; not one of the three capabilities the Product Office named, included because evidence was already in hand and the register should reflect true state, not omit it. |

## Capability: Human Design Review

| Field | Value |
|---|---|
| Category | Human Design Review (procedural, not software) |
| Purpose | Actively detect and reject AI-generated design mediocrity ("AI slop") before it becomes part of the product. Its job is rejection, not generation. |
| Official Provider | Not applicable — internal review process |
| Official Repository / Documentation | `docs/capabilities/HUMAN_DESIGN_REVIEW.md` |
| Installation Status | Not applicable |
| Connection Status | Not applicable |
| Operational Status | Active |
| Verification Status | Not applicable — governed by its own checklist rather than the five installation-based states above |
| Owner | Claude (executes the checklist review), Silvester Odilu (final visual acceptance) |
| Last Validation Date | 2026-08-03 (checklist established) |
| Approved Uses | Reviewing major design implementations before Product Office acceptance |
| Restrictions | Does not replace Silvester's visual acceptance authority (`docs/governance/AUTHORITY.md`) — it is an input to that decision, not a substitute for it |
| Dependencies | `docs/capabilities/HUMAN_DESIGN_REVIEW.md`, `docs/product-office/00-CHARTER.md` |
| Evidence | Checklist content documented this session, derived from Product Office directive | 
| Next Review Date | When review criteria are refined by the Product Office |
| Notes | See `HUMAN_DESIGN_REVIEW.md` for the full checklist and AI-slop characteristics list. |

## Engineering dependency rule

Engineering may only rely on capabilities classified `VERIFIED`, or `CONNECTED` with explicit acknowledgement of the unvalidated risk in the work package. `EXPERIMENTAL` and `PLANNED` capabilities must never become a mandatory project dependency.

## Candidate future capabilities (not yet audited)

The register scales to new capabilities without hardcoding a fixed list. The following were named by the Product Office as future candidates but have **not** been audited or classified — they must not be assumed available or unavailable until a real, evidenced audit is performed: Playwright (browser automation — note `package.json` already depends on `playwright-core` for `test:e2e`, but this register entry itself has not yet been produced), general browser automation, accessibility tooling, animation tooling, visual regression, performance analysis, security analysis, research tooling.
