# RW-PAGE-06R — Connect Design Decision Brief

**State:** APPROVED for implementation by the RW-PAGE-06R Product Office commission
**Route:** `/connect/`
**Baseline:** `develop @ 6caebeef824cdd923f75281f83a2a23ca9068485`
**Branch:** `feature/connect-authored-page`

## Required Skills and Tools

| Skill/tool | Durable state | Current-session state | Invocation |
|---|---|---|---|
| UI/UX Pro Max | `VERIFIED` | `INSTALLED_CALLABLE` | Four package-specific searches through the installed v2.11.0 `search.py` database |
| 21st.dev / Magic | `VERIFIED` | `INSTALLED_CALLABLE` | Three authenticated `mcp__21st__get_inspiration` explorations |
| TasteSkill (`design-taste-frontend`) | `VERIFIED` | `INSTALLED_CALLABLE` | Full skill loaded and applied as critic after preliminary synthesis |
| Human Design Review | Active repository procedure | Available | Required after rendered implementation |
| React / Next.js / TypeScript / Tailwind | Repository stack | `INSTALLED_CALLABLE` | Existing App Router and Rive design system |
| Playwright / axe | Repository dependencies | `INSTALLED_CALLABLE` | Required after implementation |
| Secure form boundary | Repository implementation and review discipline | Available | Recovered validation, honeypot, adapter and route tests |

## Design Decision Brief

### User problem

The visitor is ready to speak with Rive but may possess only part of the eventual brief. They need a low-friction, credible place to begin without being qualified, scored or forced to translate their situation into agency taxonomy.

### Page role

Connect is the transition from thinking to talking. Start helps a visitor identify direction; Connect receives the first useful message.

### Visual thesis

**The open working note.** A serious conversation begins with the part the visitor already knows. The page turns that partial signal into a calm, structured first exchange without presenting a sales funnel or a generic contact card.

### Primary storytelling metaphor

A conversation margin: an invitation, three concise prompts, and an open writing surface connected by one controlled editorial axis.

### Intended feeling

Human, direct, attentive and low-pressure. The page should feel ready to listen, even while online delivery is honestly unavailable.

### Cross-page differentiation

- **Start:** decision discovery and branching guidance. Connect is linear, direct and form-led.
- **Industries:** environmental photography and contextual chapters. Connect is short, typographic and interpersonal.
- **Platforms:** architectural diagrams and systematic parity. Connect uses no technical diagramming.
- **Work:** proof and transformation across a long evidence narrative. Connect is an opening exchange rather than an outcome story.
- **Process:** methodology and progression. Connect has no sequence to complete and no process chrome.
- **About / Homepage:** organisational narrative and broad positioning. Connect has a single conversion purpose.

Closest similarity risk: the recovered left-copy/right-form layout could resemble a generic premium consultancy contact page. The final composition therefore separates the editorial invitation, prompt fragments and form field into distinct narrative beats while keeping the form visually open rather than carded.

### UI/UX Pro Max findings

- Preserve explicit visible labels, native semantics and local error placement.
- Announce failure and success states; keep recovery actions clear.
- Make an unavailable control visibly and semantically distinct rather than relying on colour or opacity.
- Preserve 44px touch targets, adequate target spacing, appropriate mobile keyboards and visible focus.
- Keep server-side validation and the server-only environment boundary.

Adopted: visible labels, inline errors, summary focus on failure, status semantics, touch-size fields, mobile-first recomposition and server-controlled delivery state.

Rejected: replacing the established API boundary with Server Actions, because RW-INFRA-01 already provides a tested provider adapter and route boundary; generic centred single-column CTA guidance, because it would weaken the page-specific thesis.

### 21st.dev / Magic findings

Three authenticated explorations reviewed contact cards, contact pages, question tools, chat composers, animated form sections, editorial image heroes, image carousels and scroll-led storytelling.

Material influence: the results clarified what to reject. Card-heavy contact patterns, chat/AI metaphors, cursor-follow previews, autoplay carousels, parallax galleries and image-led hero templates all add interface or spectacle without improving the conversation. Editorial hierarchy and integrated form composition were retained as useful pattern-level signals. No component code was retrieved or adopted.

### TasteSkill critique

The quiet direction is appropriate, but it would become generic if expressed as another split hero, decorative oversized words, or a floating form card. The unavailable state must belong to the composition rather than appear as a warning added after design. Motion is unnecessary. The form needs unmistakable boundaries, readable labels and authored mobile order.

Adopted: an open sharp-edged system, a single asymmetrical axis, prompt fragments with semantic meaning, an integrated availability preface, restrained motion and no media filler.

Rejected: card elevation, rounded contact container, animation spectacle, decorative giant words, photo-for-empty-space, AI/chat visual language and a second CTA.

## Page-Specific Art Direction

- **Interaction identity:** Begin / Conversation / Working note
- **Primary content mode:** Editorial form
- **Signature section:** The conversation surface
- **Visual tension:** Large invitation and open space resolved by the dense, practical writing surface
- **Memorable moment 1:** Three prompt fragments: what is changing, what feels blocked, what decision comes next. They turn guidance into a visual conversation scaffold.
- **Memorable moment 2:** The form presented as an open working field with a persistent editorial margin, not a card.
- **Photography strategy:** Considered and rejected. A credible final image is not available, and meeting photography would risk generic stock signalling rather than add meaning.
- **Illustration strategy:** Considered and rejected. Exchange/chat imagery would mimic AI assistants or support widgets.
- **Diagram strategy:** None. Connect has no system relationship that needs diagramming.
- **Background-image strategy:** None. Environment is not the story; the exchange is.
- **Typography-as-visual-material:** Prompt fragments use scale and placement to carry meaning but remain subordinate to the H1 and do not become watermarks.
- **Form visual strategy:** Sharp open fields, explicit labels, generous row rhythm, visible focus, one vertical editorial axis and no floating container.
- **Interim-delivery strategy:** A visible status preface appears before all fields. The disabled fieldset and action expose the finished form without accepting effort or POSTing. A server-only flag activates the same composition later.
- **Whitespace strategy:** Opening space creates attention; the prompt-to-form transition increases density; no large area exists solely to appear premium.
- **Mobile transformation:** The invitation, prompts, status and form become one clear vertical reading order. Decorative geometry simplifies; fields become single-column; the action remains full width.
- **Dark-mode authorship:** Preserve warm surfaces and restrained gold/maroon relationships through existing tokens; tune field boundaries and disabled state without glow or mechanical inversion.
- **Template-resistance plan:** Avoid contact cards, centred form shells, sales proof, social-link grids and chat UI. The prompt/form relationship must remain specific to beginning a Rive conversation.
- **Content-swap risk:** Start content would require an entirely different branching interaction and cannot occupy this linear working-note composition.

## Section Rhythm Map

### 01 — Opening invitation

- Narrative role: establish permission to begin without a complete brief.
- Visual mode: editorial typography and spatial composition.
- Energy: quiet, decisive.
- Media role: no media; the invitation is the subject.
- Transition in: global navigation becomes a focused destination.
- Transition out: the visitor receives practical prompts rather than marketing proof.

### 02 — Conversation prompts

- Narrative role: show what makes a useful first message.
- Visual mode: typography as visual material.
- Energy: measured, progressive.
- Media role: three text fragments connected by a shared rule system.
- Transition in: resolves the hero's open invitation into useful context.
- Transition out: hands those prompts directly to the form.

### 03 — Conversation surface

- Narrative role: expose the real inquiry experience and its truthful availability state.
- Visual mode: editorial form and restrained text composition.
- Energy: practical, focused.
- Media role: no external media; the form itself is the working surface.
- Transition in: increased density signals action.
- Transition out: the footer follows naturally because the page has one action and no appended marketing CTA.

## Media Opportunity Audit

| Section | Story purpose | Photography | Illustration | Diagram | Background media | Typography as media | Final decision |
|---|---|---:|---:|---:|---:|---:|---|
| Opening | Permission to begin | Considered | Considered | No | Considered | Yes | Typography and space are more direct than generic human imagery |
| Prompts | Explain a useful message | No | Considered | No | No | Yes | Use meaningful prompt fragments as the visual device |
| Form | Begin the exchange | No | No | No | No | Limited | The form and availability state are the content; no media |

## Media Plan

No media assets are required. This is an affirmative design decision, not an omission.

| Section | Media decision | Narrative purpose | Asset status | Responsive treatment | Dark mode | Accessibility |
|---|---|---|---|---|---|---|
| Opening | No external media | Keep attention on the invitation | Not applicable | Typography and measure recompose | Existing semantic tokens | Text remains semantic |
| Prompts | Typography as visual material | Give visitors three useful starting signals | Final in HTML | Three-column rhythm becomes ordered vertical prompts | Muted token treatment | Prompt meaning also appears in explanatory copy |
| Form | Form as visual surface | Make the exchange tangible | Final in HTML | Two-column field groups become one column | Explicit field/status tokens | Native form semantics and status text |

## Pattern Decision Log

| Area | Options considered | Chosen | Rejected | Reason |
|---|---|---|---|---|
| Hero | Split hero, image hero, centred hero, editorial opening | Editorial opening | Generic split, stock image, centred sales hero | The invitation itself is the strongest first impression |
| Guidance | Cards, bullets, giant words, prompt sequence | Prompt sequence | Cards and decorative display words | The prompts have functional value and form a narrative bridge |
| Form | Floating card, chat composer, multi-step form, open field | Open editorial field | Card, chat, wizard | Lowest friction and strongest Rive-specific integration |
| Availability | Alert box, post-submit error, hidden form, integrated preface | Integrated preface plus disabled fieldset | Surprise failure, hidden route, warning card | Truth appears before effort without making the page look broken |
| Motion | Reveal, line drawing, field choreography, static | Static plus existing control transitions | Decorative motion | State clarity is more important than spectacle |

## Implementation boundaries

Preserve the recovered validation, honeypot, delivery adapter, fixed sender/recipient, Reply-To, safe provider-error boundary and tests. Add a server-only delivery-availability control and an authored disabled state. Do not configure Resend, expose secrets, invent an email address, alter global navigation/footer, change Start, or add dependencies beyond the recovered approved Resend foundation.
