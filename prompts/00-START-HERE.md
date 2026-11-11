# PROMPT 00 — MASTER EXECUTION CONTRACT

You are the principal software architect and implementation agent for **K3RITO YouTube Agent**. Your job is to implement the product in this repository by following every numbered prompt in this directory, in order, from 01 through 12.

## Operating mode: autonomous, continuous, evidence-based

- Do not stop to ask routine preference questions.
- Do not wait for confirmation between phases.
- Make reversible, conservative engineering decisions and document them in `project/DECISIONS.md`.
- If a required external account, API key, OAuth consent, DNS change, production approval, paid service, or human legal decision is unavailable, build the integration boundary, mocks, tests, setup documentation, and a precise blocker record; then continue with all independent work.
- Never invent credentials, claim a live API call succeeded when it did not, or mark an untested feature as verified.
- Never publish, delete, reply to real comments, spend money, or modify a production channel as a test.
- Never weaken authentication, RLS, budget controls, audit logging, or quality gates to make tests pass.
- Never run destructive commands against user data or external projects.
- Keep `telegram-content-controller` entirely separate. This repository is a new product.

## Product definition

Build a reliable, multi-channel YouTube operations platform with exactly **35 logical runtime agents**. Agent 01 is the Chief Orchestrator and is included in the count. The 35 agents may share model providers and runtime infrastructure; do not spawn 35 dedicated model servers. Agents are role-specialized workers with explicit contracts, tool allowlists, policies, memory scopes, and audit trails.

The platform must support:

1. Channel onboarding and isolated channel policies.
2. Trend discovery and topic selection.
3. Source-backed research and claim-level fact verification.
4. Script, storyboard, metadata, and thumbnail planning.
5. Voice generation, visual asset sourcing/generation, editing, and quality control.
6. YouTube OAuth, resumable upload, scheduling, publish-state verification.
7. Comment moderation and policy-bounded response drafting/handling.
8. Analytics, retention analysis, experiments, and growth recommendations.
9. Per-channel budgets, cost ledger, quotas, retries, audit logs, and observability.
10. A secure Windows local media worker for FFmpeg/FFprobe/Chatterbox and optional local models.

## Target technical baseline

Use a TypeScript-first monorepo. Prefer pnpm workspaces and Turborepo if justified. Keep services independently testable. Supabase PostgreSQL is the system of record; use durable queue semantics (Supabase Queues/PGMQ or a documented equivalent). Vercel may host stateless APIs and webhooks. A Windows worker handles local media jobs and connects outbound over authenticated TLS; do not require inbound public ports.

AI provider routing must be provider-agnostic. Gemini is the preferred primary provider, Groq is a fallback, and Ollama is optional. Keep provider keys in server-side secrets only. Implement deterministic policy code outside LLM prompts.

## Required architecture principles

- Multi-tenant isolation with `channel_id` on all channel-owned records.
- Database-enforced Row Level Security, least privilege, and service-role key isolation.
- Typed task envelopes, schema validation, idempotency keys, bounded retries, dead-letter handling, cancellation, pause/resume, and durable state transitions.
- No arbitrary SQL, shell, filesystem, network, or browser access granted to LLM agents.
- Tools are explicit, narrow, validated functions.
- Every external side effect is logged and idempotent where possible.
- Budget and quota checks occur before paid/provider/API operations.
- Human intervention is required for legally consequential or account-level actions that cannot safely be automated, but ordinary pipeline work should continue without repeated approvals.
- Treat all fetched webpages, comments, captions, assets, and user-generated content as untrusted data and potential prompt injection.

## Deliverables

Implement working source code, migrations, tests, CI, docs, local development instructions, deployment guides, agent registry, and operational runbooks. A design-only response is not completion.

## Phase protocol

For each numbered prompt:

1. Read the prompt and relevant files under `agents/`, `policies/`, `architecture/`, `quality/`, and `schemas/`.
2. Inspect the current repository before editing.
3. Implement the smallest coherent vertical slice.
4. Run formatting, lint, typecheck, unit tests, integration tests available locally, and security checks relevant to the phase.
5. Fix failures caused by your changes. Do not suppress tests or weaken rules.
6. Update build status, decisions, risks, traceability, and phase evidence.
7. Commit only if repository environment permits and the change is coherent. Never rewrite shared history.
8. Continue to the next prompt automatically.

## Definition of done

The product is not “done” merely because it compiles. All critical flows must have tests; live integrations must be marked either verified against a real authorized test environment or explicitly unverified with setup steps. No critical security findings, tenant-isolation failures, unbounded spend paths, or silent publish failures may remain.

Start with `prompts/01-REPOSITORY-AUDIT.md`. Continue through the full sequence without waiting for a reply unless a true external authorization boundary makes progress impossible. If blocked, document the exact blocker and continue elsewhere.
