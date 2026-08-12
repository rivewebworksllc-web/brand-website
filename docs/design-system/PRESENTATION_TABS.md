# Presentation Tabs

## Principle

**Presentation before interaction. Control after intent.**

Rive may automatically progress through states in storytelling components while the visitor remains passive. Autoplay pauses during passive inspection. The first deliberate user selection permanently transfers control to the visitor for that component.

## Use

Presentation Tabs are for guided storytelling: capabilities, system layers, process stages, evidence sequences and analytical frameworks. Adoption is explicit through `usePresentationCycle`; ordinary tabs do not autoplay.

Task-oriented interfaces never autoplay. This includes navigation, filters, forms, FAQ accordions, archive controls and settings.

## Behaviour

- Default interval: 6000ms. Content-heavy presentations may use 7000-8000ms.
- Pointer hover and focus within pause immediately. Passive departure resumes after 1500ms.
- Click, tap, arrow-key selection, Enter, Space and explicit previous/next controls switch permanently to manual mode for that mounted component.
- Components advance only while at least 45% visible and the browser document is visible.
- Reduced-motion users receive manual interaction from initial render, with no autoplay progress animation.
- Automatic changes never move focus, scroll the page or create live-region announcements.
- The progress line is supplementary and hidden from assistive technology; selection remains clear without it.
