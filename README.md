# Rive Webworks — Brand Website

Frontend for the Rive Webworks marketing site. This repository currently contains the **Week 0 build foundation only** — no homepage design, route rollout, or content migration has started.

## Locked stack

- Next.js 15.5.21 (App Router)
- React 19.2.7 / React DOM 19.2.7
- TypeScript, strict mode
- Tailwind CSS 4.x (PostCSS integration)
- Node.js 22.x
- npm with a committed `package-lock.json`
- ESLint (flat config, CLI)
- Vitest + React Testing Library
- Playwright + axe-core / `@axe-core/playwright`
- Sanity Studio + `next-sanity`

Do not upgrade to Next 16, swap package managers, or add a UI kit/page builder without an explicit decision to do so — see the governing build directive for the full list of Week 0 constraints.

## Prerequisites

- Node.js 22.x (see `.nvmrc`)
- npm (bundled with Node)

## Clean setup

```bash
nvm use            # or any Node 22.x
npm ci
cp .env.example .env.local
npm run dev
```

## Environment configuration

Copy `.env.example` to `.env.local` and fill in values. See `docs/ENVIRONMENT.md` for the full variable reference, including what is public vs. server-only.

## Local development

```bash
npm run dev
```

## Quality commands

```bash
npm run lint            # eslint . --max-warnings 0
npm run typecheck       # tsc --noEmit
npm test                # vitest run
npm run build            # next build
npm run test:e2e:install # one-time: installs the Chromium test browser
npm run test:e2e        # playwright test (builds + starts a production server)
npm run check            # lint + typecheck + test + build
```

## Sanity ownership and data boundary

The Sanity project (`9vajygee`) and its `production` dataset are Rive-owned. This codebase only performs **published, read-only** queries against `production` — it never mutates, imports, or seeds content, and never stores leads, submissions, credentials, or other private data in Sanity. A separate development dataset for active schema/content work is not yet confirmed; see `docs/WEEK-0-VALIDATION.md` for the open decision.

## Branch workflow

- `main` — owner-controlled, production-ready branch (Trueman controls production releases)
- `develop` — integration/staging branch (current default working branch)
- `feature/*` — scoped implementation branches

## Staging indexing rule

Indexing is controlled by the `SITE_ENV` environment variable (`staging` | `production`). Any value other than the literal `production` — including an unset variable — defaults closed: `noindex, nofollow` metadata, a robots.txt that disallows all crawling, and an empty sitemap. Robots rules are not access control; password-protecting a staging deployment is a separate hosting-layer responsibility.

## Production ownership boundary

Production releases, DNS, AWS/Amplify infrastructure, and the `main` branch are Trueman-owned. This codebase does not contain provider-specific runtime dependencies and can be deployed to any standard Next.js-compatible host.

## Current status

**Week 0 foundation only.** See `docs/WEEK-0-VALIDATION.md` for verified results and open blockers.
