# PROMPT 02 — FOUNDATION, MONOREPO, AND CONTRACTS

Continue from the current repository state. Read `prompts/00-START-HERE.md` and the relevant policies, architecture documents, agent cards, schemas, and quality checklists before implementation.

## Required implementation work

1. Create a maintainable TypeScript monorepo with pnpm workspaces; add Turborepo only if it improves orchestration without unnecessary complexity.
2. Create apps for API/control plane, worker coordinator, Telegram control bot (new bot integration only), and optional dashboard; create packages for agent runtime, contracts, database, providers, policy engine, YouTube adapter, media engine, observability, and shared config.
3. Define strict TypeScript settings, linting, formatting, test runner, environment validation, structured logging, and CI workflows.
4. Implement health/readiness endpoints and a clean configuration layer. Validate env at startup and fail closed for missing production secrets.
5. Create typed domain contracts for channels, tasks, agent runs, evidence, assets, production jobs, publishing, comments, analytics, budgets, and audit events.
6. Use dependency inversion: domain logic must not depend directly on Vercel, Supabase, Gemini, or YouTube SDK implementations.
7. Document architecture decisions, package boundaries, local development, and how to add a provider.

## Verification and exit criteria

- [ ] Workspace installs cleanly
- [ ] Typecheck/lint/test commands documented and passing
- [ ] CI runs on pull requests
- [ ] No secret values committed
- [ ] Architecture boundaries documented

## Evidence and continuation

Update `project/BUILD_STATUS.md`, `project/DECISIONS.md`, `project/RISKS.md`, and `project/TRACEABILITY.md`. Record commands executed and actual results. Fix failures introduced by this phase. If a live external dependency is unavailable, implement and test a mock/adapter, record the exact external setup blocker, and continue to the next numbered prompt. Do not ask for routine approval.
