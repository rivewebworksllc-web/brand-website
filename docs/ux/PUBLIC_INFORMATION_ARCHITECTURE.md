# Public Information Architecture

Authority: RW-IA-01, Product Office / Silvester. This is the canonical record of currently advertised public navigation. Implemented pages not listed here may remain technically reachable but are not public navigation promises.

## Canonical navigation

```text
HOME
/

SOLUTIONS ▾                         disclosure trigger; no parent link
  ├── Industries                    /industries/
  └── Platforms                     /platforms/

WORK                                direct link
/work/

RESOURCES ▾                         disclosure trigger; no parent link
  ├── Guides                        /resources/guides/
  └── Insights                      /resources/insights/

COMPANY ▾                           disclosure trigger; no parent link
  ├── About                         /company/about/
  └── Process                       /company/process/
```

Desktop and mobile use the same labels, children and intent. Work is the only top-level direct destination. Disclosure parents are buttons with visible chevrons and have no navigational `href`.

## Footer

- Explore: Work, Industries, Platforms
- Company: About, Process
- Resources: Guides, Insights

The footer advertises implemented destinations only. It may repeat useful destinations without changing their primary IA ownership.

## Conversion architecture

`/connect/` is the single proposed general conversion endpoint and is `BUILD NEXT` at P0. Until that page is separately commissioned and implemented, Contact Us and Book a Discovery Call affordances are hidden rather than linked to a missing page.

`/start/` describes a separate structured intake/recommendation flow. It is `DEFER + HIDE`; it must not be publicly advertised until Product Office commissions that experience.

No contact route redirects are authorized. A redirect must not substitute for an intentional conversion experience.

## Trigger-only and legacy routes

- `/solutions/`: implemented legacy overview, currently unlinked; Solutions remains a disclosure parent.
- `/company/`: implemented legacy overview, currently unlinked; Company remains a disclosure parent.
- `/services/`: no route and no implemented children; Services is hidden until destinations exist.
- `/resources/`: no route; Resources is a disclosure parent.

Trailing slashes are canonical for all internal routes.

## Deferred and hidden destinations

The following route families remain absent from public navigation: individual Solution and Service pages, Pricing, FAQs, Trust, Partners and Readiness, Careers, individual resource articles, individual Work case studies, `/start/`, and `/connect/`. Their former appearance in content or configuration is not authorization to build them.
