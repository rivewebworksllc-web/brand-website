# Environment Variables

| Variable | Visibility | Required | Allowed data | Notes |
|---|---|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Public (browser) | Yes | The Rive-owned Sanity project ID (`9vajygee`). Not a secret. | Read by `src/lib/sanity/env.ts`; throws at import time if missing. |
| `NEXT_PUBLIC_SANITY_DATASET` | Public (browser) | Yes | Dataset name. Only `production` is confirmed as of Week 0. | Never point this at an unapproved dataset without Trueman's sign-off. |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Public (browser) | Yes | An explicit `YYYY-MM-DD` API date. | Pin this; do not use `"vX"`/unpinned "latest" values. |
| `SANITY_API_READ_TOKEN` | Server-only | No (Week 0 leaves this empty) | A Sanity API token, once approved for authenticated preview reads. | Never prefix with `NEXT_PUBLIC_`. Never commit a real value. Not used anywhere in Week 0 code. |
| `SITE_ENV` | Server (read at build/runtime) | No — defaults to non-indexable when absent | `staging` or `production` (literal strings only). | Anything other than the literal `production` is treated as staging. Controls `robots.ts`, `sitemap.ts`, and page `robots` metadata. |

## Prohibited handling

- No secret may ever be assigned to a `NEXT_PUBLIC_*` variable.
- `SANITY_API_READ_TOKEN` must never be committed, logged, or echoed to a terminal/CI log.
- Only `.env.example` is tracked in git. `.env`, `.env.local`, and all other `.env*` variants are git-ignored.
- Sanity must never receive leads, form submissions, customer records, contracts, credentials, or other private/confidential data — Week 0 or otherwise.

## Safe staging defaults

- Omit `SITE_ENV` (or set it to anything other than `production`) on every non-production deployment. The application defaults closed.
- Public Sanity reads use the CDN and the `published` perspective with no token attached, so ordinary staging/local usage never requires `SANITY_API_READ_TOKEN`.
