# K3RITO YouTube Agent — Google Jules Execution Pack

**Purpose:** A repository-ready, ordered specification and prompt pack for building K3RITO YouTube Agent as a multi-channel, 35-agent autonomous YouTube operations platform.

## Non-negotiable project decisions

- Exactly **35 runtime agents**, including Agent 01 (Chief Orchestrator).
- Multi-channel by design: every channel has isolated OAuth credentials, policies, budget, memory, assets, jobs and analytics.
- Autonomous execution is the target, but external side effects must be guarded by deterministic policy gates.
- Do not fabricate credentials, API access, completed integrations, test results, or deployment status.
- Keep the existing `telegram-content-controller` project separate. Do not import, overwrite, rename, or deploy over it.
- The existing local production machine is Windows 10, Ryzen 5 2600, GTX 1070 8GB, RAM 16GB. Do not assume it can generate high-end AI video locally.
- Preferred stack: TypeScript/Node.js, Supabase PostgreSQL/Queues, Vercel, Gemini primary, Groq fallback, optional Ollama, YouTube Data API v3 and Analytics API, Windows Local Media Worker, FFmpeg/FFprobe, Chatterbox TTS.
- 1080p default; 4K only when source assets and processing budget justify it.
- Mixed visual approach: licensed real footage, generated images/video, motion graphics, charts, and animation.

## How to use with Google Jules

1. Create an empty GitHub repository, for example `k3rito-youtube-agent`.
2. Add this entire pack to the repository root and commit it as the initial specification baseline.
3. Open the repository in Google Jules.
4. Submit prompts in `prompts/00-START-HERE.md` order. Each prompt is a self-contained work package with exit criteria.
5. Jules should proceed through all phases without asking routine questions. If a credential, external account, approval, or unavailable service is required, implement the integration behind a clearly documented configuration boundary, add mocks/tests, record the blocker, and continue with independent work.
6. Require Jules to update `project/BUILD_STATUS.md`, `project/DECISIONS.md`, `project/RISKS.md`, and `project/TRACEABILITY.md` in every phase.
7. Do not provide production secrets in repository files, prompts, issues, or logs. Use environment variables and secret managers.
8. Review security-sensitive deployment and OAuth steps before enabling production traffic.

## Execution order

| Order | Prompt                                      | Work package                                          |
| ----: | ------------------------------------------- | ----------------------------------------------------- |
|    00 | `prompts/00-START-HERE.md`                  | Repository contract and autonomous execution protocol |
|    01 | `prompts/01-REPOSITORY-AUDIT.md`            | Inspect repository and establish baseline             |
|    02 | `prompts/02-FOUNDATION-ARCHITECTURE.md`     | Monorepo, contracts, configuration, CI                |
|    03 | `prompts/03-DATABASE-AND-SECURITY.md`       | Schema, RLS, migrations, secrets                      |
|    04 | `prompts/04-AGENT-RUNTIME-35.md`            | Runtime and exactly 35 agent definitions              |
|    05 | `prompts/05-ORCHESTRATION-AND-QUEUES.md`    | Durable workflow, retries, idempotency                |
|    06 | `prompts/06-RESEARCH-AND-CONTENT.md`        | Trends, research, fact-checking, scripts              |
|    07 | `prompts/07-MEDIA-PIPELINE.md`              | Storyboards, assets, voice, editing, QC               |
|    08 | `prompts/08-YOUTUBE-AND-COMMUNITY.md`       | OAuth, publishing, comments, analytics                |
|    09 | `prompts/09-LOCAL-WINDOWS-WORKER.md`        | Secure local worker and media execution               |
|    10 | `prompts/10-OBSERVABILITY-AND-RECOVERY.md`  | Monitoring, diagnostics, self-correction              |
|    11 | `prompts/11-TESTING-AND-SECURITY-REVIEW.md` | Test matrix, threat model, compliance                 |
|    12 | `prompts/12-DEPLOYMENT-AND-HANDOVER.md`     | Deployment readiness and final handover               |

## What “without stopping” means

Jules is instructed to keep working through independent tasks, make conservative documented choices, use mocks when credentials are unavailable, and never block the whole build because a live integration cannot be exercised. It must **not** bypass human/legal requirements, invent secrets, accept dangerous permissions, or publish to a real channel merely to prove a test.

## Directory map

- `prompts/` — ordered, detailed Jules implementation prompts.
- `agents/` — 35 individual role cards, policies, tools, and I/O contracts.
- `policies/` — global safety, autonomy, budget, editorial, privacy, and security rules.
- `architecture/` — target architecture, data flow, state machines, API contracts.
- `quality/` — verification gates, error taxonomy, test strategy, release checklist.
- `schemas/` — JSON schemas for agent tasks and evidence claims.
- `project/` — status, decisions, risks, traceability templates.
- `config/` — safe example environment template and local worker profile.

## Important

This pack is a specification, not proof that Google Jules, Google APIs, Supabase, Vercel, YouTube OAuth, or any third-party provider is configured. Provider limits and current YouTube/API policies must be verified against official documentation during implementation.
