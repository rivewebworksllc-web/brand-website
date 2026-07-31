# Authority Matrix

| Subject | Responsible | Final authority | Required evidence |
|---|---|---|---|
| Objectives, priorities and visual acceptance | Silvester | Silvester | Written decision or dated review |
| UX/content structure and visual review | Claude | Silvester | Approved handoff or defect list |
| Repository implementation and technical QA | Codex | Silvester for build acceptance; Trueman for protected merge/production | Commit, diff, tests and preview |
| Architecture and final public copy | Trueman | Trueman | Written approval |
| Claims, credentials, testimonials, logos, cases and partner status | Miles | Miles + Trueman | Claims-register approval and evidence reference |
| Sanity production | Trueman | Trueman | Explicit scoped authorization |
| AWS, DNS, secrets and production launch | Trueman | Trueman | Gate P record |
| `feature/*` branch changes | Active implementation writer | Silvester | Work-package record |
| Merge to `develop` | Implementation owner prepares | Silvester/Trueman as agreed | Verified evidence and explicit approval |
| Merge/push to `main` | Trueman | Trueman | Gate/PR approval |

## Constitutional rule

> Claude defines and reviews. Codex implements and verifies. Silvester decides. Trueman owns architecture, protected handoff and production. Miles approves public proof and claims. The repository records reality.
