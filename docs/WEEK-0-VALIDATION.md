# Week 0 Validation Record

Recorded 2026-07-27. Local machine: macOS 12.7.6 (Darwin 21.6.0), Node v22.23.1, npm 10.9.8, git 2.37.1.

## Tool / runtime versions

| Tool | Version |
|---|---|
| Node.js | v22.23.1 (active via nvm; `.nvmrc` pins `22`) |
| npm | 10.9.8 |
| git | 2.37.1 |
| Next.js | 15.5.21 |
| React / React DOM | 19.2.7 / 19.2.7 |
| TypeScript | 5.9.3 (strict mode enabled) |
| Tailwind CSS | 4.3.3 (PostCSS integration via `@tailwindcss/postcss`) |
| sanity | 5.31.1 |
| next-sanity | 11.6.13 |
| @sanity/vision | 5.31.1 |
| @playwright/test | 1.51.1 (see deviation note below) |
| vitest | 4.1.10 |
| axe-core / @axe-core/playwright | 4.12.1 / 4.12.1 |

## Repository and branch state

- Local working tree: `/Users/silvestr/Documents/brand-website`, already initialized as a git repo with `origin` configured (`git@github-rive:rivewebworksllc-web/brand-website.git`, via a dedicated SSH host alias with a project-specific deploy key).
- Remote repository confirmed reachable and empty (`git ls-remote` returned no refs) prior to scaffolding.
- SSH authentication verified as `rivewebworksllc-web` (`ssh -T git@github-rive` succeeded).
- `gh` CLI is not installed on this machine; access was verified directly via SSH instead.

## Deliberate version deviations (with evidence)

1. **React/React DOM**: `create-next-app@15.5.21` initially resolved `react@19.1.0` / `react-dom@19.1.0`. Deliberately re-pinned to the locked `19.2.7` and reinstalled; `npm ci`, typecheck, and build all pass at that pin.
2. **next-sanity / sanity major version**: latest `next-sanity` (13.2.1) and latest `sanity` (6.x) declare a peer dependency on `next: ^16.0.0-0`, which conflicts with the locked Next 15.5.21 baseline. Verified by inspecting `npm view next-sanity@13.2.1 peerDependencies` and `npm view sanity peerDependencies`. Walked back version history and pinned the latest release lines that still target Next 15 / React 19.2.x: `next-sanity@11.6.13` (peer: `next: ^15.1.0-0 || ^16.0.0-0`) and `sanity@5.31.1` (peer: `react: ^19.2.2`). No `--force`/`--legacy-peer-deps` was used.
3. **@playwright/test**: the latest release (1.62.0) ships a Chromium build that refuses to install on this host — `Error: Playwright does not support chromium on mac12` (confirmed via `sw_vers`: macOS 12.7.6). Verified that `@playwright/test@1.48.0` and `@playwright/test@1.51.1` both install and run successfully on this OS. Pinned to **1.51.1**, which also happens to satisfy the optional peer version Next.js itself requests (`@playwright/test ^1.51.1`). This is a runtime-test-tooling pin, not a change to the locked Next/React/Tailwind baseline.

## Package placement note

`sanity` and `@sanity/vision` were installed as devDependencies (Studio/CLI tooling, not imported by any runtime route in Week 0). `next-sanity` is a regular dependency because `src/lib/sanity/client.ts` uses it at runtime. `next-sanity` declares `sanity` as a **peer dependency**, so `sanity` (and its bundled CLI toolchain) is still present in a production `npm ci` install regardless of its devDependency classification — this is an unavoidable characteristic of the current Sanity package graph at this version, not a configuration mistake.

## Validation results

| Check | Result | Evidence |
|---|---|---|
| `npm ci` (clean install, `node_modules`/`.next` removed first) | PASS | 1291 packages installed from the committed lockfile, no resolution errors |
| `npm run lint` (`eslint . --max-warnings 0`) | PASS | 0 warnings, 0 errors |
| `npm run typecheck` (`tsc --noEmit`) | PASS | 0 errors |
| `npm test` (Vitest) | PASS | 1 file, 3/3 tests passed (`tests/unit/env.test.ts`, covers the `SITE_ENV` indexing default-closed rule) |
| `npm run build` (`next build`) | PASS | Compiled successfully; `/`, `/_not-found`, `/robots.txt`, `/sitemap.xml` all prerendered as static; home route builds successfully even though the Sanity connectivity check runs during prerender |
| `npm run test:e2e:install` | PASS (after pinning @playwright/test — see deviation note) | Chromium installed for this host |
| `npm run test:e2e` (Playwright, against a real `next build && next start` production server) | PASS | 3/3 tests passed: home route renders with a single `<main>` and correct title, skip link is keyboard-reachable and focuses `#main-content`, zero serious/critical axe violations |
| Sanity read connectivity | PASS, no mutation | `GET https://9vajygee.api.sanity.io/v2026-07-27/data/query/production?query=count(*[])` → HTTP 200, `{"result":0}`. Confirms public read access to the `production` dataset; dataset currently holds 0 documents. |
| Secret scan | PASS (pattern-based; no dedicated scanner installed on this host) | Narrow regex search (AWS keys, GitHub/Slack/Google tokens, PEM private key headers, populated `SANITY_API_READ_TOKEN=`) across all tracked-eligible files, excluding `node_modules`/`.git`/`.next`. No matches other than the scan command itself being logged in `.claude/settings.local.json` (a local Claude Code permission-audit file, not a secret). `.env.local` confirmed git-ignored; only `.env.example` is tracked. |
| `npm audit` — production scope (`--omit=dev`) | 29 unresolved (0 critical / 22 high / 7 moderate); no safe non-major fix available | See breakdown below |

## npm audit — production-scope detail

`npm audit fix` (no `--force`) resolves 0 of these; every advisory's suggested fix requires a major downgrade (e.g. `next@9.3.3`, `sanity@5.14.1`, `next-sanity@0.8.5`) that npm audit proposes because it walks back to the last release *before* the vulnerable transitive dependency was introduced, not to a newer patched release. `--force` was intentionally not run per the governing directive.

| Package | Severity | Path | Practical impact in this codebase |
|---|---|---|---|
| `next` (direct) | high | via `postcss`, `sharp` (bundled by Next for build-time CSS processing and `next/image` optimization) | `postcss` advisories concern XSS/path traversal via attacker-controlled `sourceMappingURL` in processed CSS — Next only processes this repo's own trusted CSS at build time, no untrusted input. `sharp` advisories are libvips CVEs reachable through image processing — Week 0 renders no images and fetches no content, so there is no live attack surface yet. Re-assess before `next/image` is used against user- or CMS-supplied images. |
| `sanity` (direct, devDependency) | high | via `@sanity/cli` → `@oclif/core`/`@oclif/plugin-help`/`@oclif/plugin-not-found`, `@sanity/cli-build`, `@sanity/cli-core`, `@sanity/codegen`, `@sanity/migrate`, `@sanity/runtime-cli` → `ejs`, `adm-zip`, `js-yaml`, `jake`/`filelist`/`minimatch`/`brace-expansion`, `@vercel/frameworks` | All of these are Sanity's bundled **CLI** tooling (`sanity dev`/`build`/`deploy`), never imported by application/runtime code. Exploitability requires running the Sanity CLI against attacker-controlled input (e.g. a malicious ZIP or YAML file), which Week 0 never does. `sanity` is present in a production install tree only because `next-sanity` peer-depends on it (see package placement note above). |
| `next-sanity` (direct) | moderate | via `@sanity/preview-url-secret`, `@sanity/visual-editing`, `next` | Both sub-packages are used only for Sanity's preview-mode/visual-editing features. Week 0 does not enable preview mode and never sets `SANITY_API_READ_TOKEN`, so this path is currently unreachable. Re-assess before preview mode is implemented. |
| `@sanity/uuid` / `uuid` (transitive) | moderate | via `@sanity/preview-url-secret` | Missing bounds check when a buffer is explicitly supplied to `uuid` — not a pattern this codebase uses. |

No critical-severity findings.

## Staging status

**PENDING.** No personal staging provider has been selected yet (Week 0 directive explicitly leaves this open). Staging-readiness safeguards are implemented and unit-tested in code (`SITE_ENV`-driven `robots.ts`, `sitemap.ts`, and page `robots` metadata all default closed), but deployment, password protection, and a live non-indexable response have not been verified because there is nowhere deployed yet.

## Unresolved decisions / blockers

1. **Development Sanity dataset** — per the governing directive, confirm whether Trueman will create and approve a separate `development` dataset for schema/content work, previews, and test content before Week 2 begins. This does not block the Week 0 code foundation.
2. **Personal staging provider** — not yet selected by Silvester. Blocks only "Week 0 Fully Complete" (staging), not "Code Foundation Complete."
3. **npm audit findings above** — no code or config change resolves these without a disallowed major-version bump. Recommend re-auditing after Sanity/Next.js publish patched releases, and re-scoping risk if/when preview mode or user-facing image processing is introduced.
