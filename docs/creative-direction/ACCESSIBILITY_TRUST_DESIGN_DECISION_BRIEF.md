# RW-PAGE-12R — Accessibility Trust Page Design Decision Brief

**State:** In progress, implementation not yet Silvester-reviewed
**Route:** `/trust/accessibility/`
**Baseline:** `develop @ f26220fae30f162cb7062047973c60294c5430b7`
**Branch:** `feature/accessibility-trust-page`
**Classification:** Trust operating-practice page, not a commercial service page. RW-PAGE-12's Sellability Gate for a standalone "Accessibility AA Remediation" service **remains failed and unreversed** — this page does not create, price, or imply a new commercial SKU.

## Required Skills and Tools

| Skill/tool | Durable state | Current-session state | Invocation |
|---|---|---|---|
| UI/UX Pro Max | `VERIFIED` | `INSTALLED_CALLABLE` | Real `search.py` runs: `--domain product` ("Government/Public Service" and "Banking" results both surfaced "Accessible & Ethical"/"Trust & Authority" as primary style recommendations, validating rather than replacing Rive's existing navy/maroon/gold system, not adopted as a new direction), `--domain icons` (Phosphor again, rejected, same reasoning as every prior package) |
| 21st.dev / Magic | `VERIFIED` durable state, but **disconnected this session** | `MCP_DISCONNECTED` (confirmed via the session's own tool-availability notice: "109 deferred tools are no longer available (MCP server disconnected): ... mcp__21st__* ...") | Attempted, genuinely unavailable, reported honestly per the Skill Gate's no-fabrication rule rather than skipped silently |
| TasteSkill (`design-taste-frontend`) | `INSTALLED_CALLABLE` | Genuinely invoked earlier this session (RW-PAGE-10) with full ruleset retained; re-applied as critic below rather than re-invoked verbatim a third time in one session | Applied against this page's plan: eyebrow restraint, no dashboard/scanner-score aesthetic, no color-only meaning (directly required by the page's own subject matter), native disclosure over any component library, restrained editorial register |
| Claims Register review | Repository governance | `INSTALLED_CALLABLE` | Confirmed no new CLM entry required or introduced - this page states operating practice, not a new priced claim; reuses `trustContent.boundaries`' existing accessibility boundary verbatim as the claim-safety anchor |

## Authority

Route already declared in `src/lib/nav.ts` (Trust footer group: `{ label: "Accessibility", href: "/trust/accessibility/" }`), unbuilt until now. Positioning authority: "WCAG 2.2 AA-informed" (never "certified"/"compliant"/"guaranteed"). Testing model authority: axe, WAVE, manual keyboard testing, ARIA review, screen-reader testing (NVDA + Chrome on Windows, per the directive), semantic HTML review, responsive/reflow checks, reduced-motion behavior. Claim boundary reused verbatim from `trustContent.boundaries.items` (Accessibility entry): *"Testing language does not imply formal certification or universal conformance beyond the evidence recorded."* No accessibility-specific severity taxonomy exists in the repository (confirmed by search during `RW-PAGE-12`); prioritisation is stated qualitatively, per the directive's own explicit fallback.

## Claim boundaries (hard constraints)

Never: "WCAG certified," "fully WCAG compliant," "ADA compliant," "legally compliant," "guaranteed accessible," "100% accessible," "zero accessibility risk," a fabricated automated-detection percentage, a real client NVDA transcript, or a formal severity system not established by repository authority.

## Buyer-state transformation

Before: *"Accessibility feels abstract, compliance-heavy, or like something a scanner handles."*
After: *"I understand the kinds of barriers Rive looks for, how they're verified, how remediation is checked again, and what evidence is retained — and that this isn't a badge, it's a practice."*

## Visual thesis

**The path stays open when the mouse disappears, the screen changes, or the interface is interpreted differently.** Barriers are shown as interruptions in a traversable path (Access Path, hero) and a specific keyboard journey (Keyboard Path, major moment A); remediation is shown as a verification loop that closes, not a roadmap that gets scheduled (Remediation Loop, major moment B) — the deliberate distinction from UXR-01's friction→evidence→roadmap composition.

## Visual registers

Primary Systemic, secondary Intimate (human usability framing throughout, not a purely technical/dark page). No contextual photography: audited and rejected (see Media Opportunity Audit) in favor of authored diagrams that can show a conceptual keyboard path without tokenizing disability or implying a pictured person is a client.

## Cross-page repetition audit

- **Trust:** reuses the accessibility boundary statement verbatim (not re-authored), does not reuse `EvidenceSpine` or duplicate the Trust hero.
- **Evidence Pack:** routes to `/trust/evidence-pack/` for the evidence-record concept, does not duplicate `EvidenceRegister`'s anatomy.
- **UXR-01 (Pricing service page):** explicitly distinguished as a commercial audit/roadmap engagement vs. this page's broader operating practice; links to it once, does not reuse `FrictionMap`'s vertical stage-card anatomy for either major moment here.
- **Pricing:** no CTA, no price, no Paid Discovery framing - deliberately absent, this page sells nothing.

## Section Rhythm Map

1. Hero + Access Path (light, the page's opening visual)
2. Positioning statement (light, WCAG 2.2 AA-informed framing)
3. Principles (POUR, light, explicitly framed as established concepts, not Rive categories)
4. **Keyboard Path** (dark, major moment A - compact rail/timeline device, not a repeat of `FrictionMap`'s card register)
5. Automated vs. manual (light, two-column comparison, "not a score" editorial point)
6. ARIA (light, small educational object)
7. Illustrative issue (light, disclosure-gated, "ILLUSTRATIVE EXAMPLE")
8. **Remediation Loop** (light `surface-alt`, major moment B - a closed 5-step loop, visually distinct from Keyboard Path's linear rail)
9. Evidence Pack relationship + privacy note (light)
10. Trust/UXR-01/boundary cross-links (light, three-card row matching Evidence Pack's precedent)
11. Final (accent surface, reuses Trust's own final CTA copy verbatim)

## Media Opportunity Audit

Per chapter: Hero/Access Path — REQUIRED (bespoke diagram, built). Keyboard Path — REQUIRED (bespoke diagram, built, the page's signature moment). Principles — NO MEDIA (four short text blocks, a card grid here would be generic). Automated vs. manual — NO MEDIA (comparison is clearest as text). Remediation Loop — REQUIRED (bespoke diagram, built). Contextual photography (real keyboard/screen-reader/magnification use) — audited against the four questions in the directive's §29 and **rejected**: no photography source is available this session that could avoid tokenizing disability or implying a real client/employee is pictured; the authored diagrams already carry the human-usability point without that risk. Zero photography, not zero visual storytelling - two bespoke authored compositions plus a compact rail device.

## Card Opportunity Audit

Used for: automated-vs-manual comparison, the illustrative issue, and the boundary/claim cross-links. Not used for: hero, Keyboard Path, Remediation Loop, or the final CTA, per the directive's own instruction.

## Icon Opportunity Audit

Six new bespoke inline-stroke icons (keyboard, focus ring, contrast, semantic structure, screen reader, re-test), reused thoughtfully across Access Path/Keyboard Path/Remediation Loop rather than one icon per section. Phosphor rejected (UI/UX Pro Max recommendation, no dependency authorized). No wheelchair symbol used anywhere, per the directive's explicit instruction.

## Rejected patterns

- A literal automated-scan "score" or badge visual (the page's own §17 content argues against this).
- A fourth reuse of the dark-register connector-card device for Keyboard Path (would fail content-swap resistance against `FrictionMap`/`EvidenceRegister`).
- A generic four-equal-card POUR grid without qualifying language that these are established WCAG concepts, not proprietary Rive categories.
- Any severity taxonomy not established by repository authority.
- Contextual "diversity stock" photography as a substitute for authored visual storytelling.
