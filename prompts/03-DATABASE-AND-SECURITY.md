# PROMPT 03 — DATABASE, TENANCY, AUTHENTICATION, AND SECURITY

Continue from the current repository state. Read `prompts/00-START-HERE.md` and the relevant policies, architecture documents, agent cards, schemas, and quality checklists before implementation.

## Required implementation work

1. Design normalized Supabase/PostgreSQL schema and versioned migrations for channels, channel_members, oauth_connections, channel_policies, agent_definitions, agent_runs, tasks, task_attempts, content_ideas, research_sources, claims, scripts, storyboards, media_assets, production_jobs, quality_reports, videos, publishing_schedule, comments, comment_actions, analytics_snapshots, experiments, budget_ledger, provider_usage, audit_logs, and scoped agent_memory.
2. Every channel-owned row must include channel_id and have appropriate foreign keys, indexes, constraints, and RLS policies. Add tests proving cross-channel reads/writes are denied.
3. Store OAuth refresh tokens encrypted using a managed secret/key strategy. Never log tokens. Keep service-role credentials server-only and unavailable to agent tools.
4. Implement least-privilege roles for human operators, service processes, and agent tool calls. Avoid broad database grants.
5. Implement immutable or append-only audit events for sensitive actions, budget debits, OAuth changes, publish attempts, moderation actions, and policy changes.
6. Implement retention/deletion workflows and data export hooks appropriate to privacy requirements. Avoid collecting unnecessary personal data from comments.
7. Add threat model, secret rotation guide, backup/restore guide, and migration rollback guidance. Production destructive migrations require explicit operator action.

## Verification and exit criteria

- [ ] Migrations apply to local/test database
- [ ] RLS tests prove tenant isolation
- [ ] Secrets absent from source and logs
- [ ] OAuth token encryption design tested
- [ ] Audit events cover sensitive side effects

## Evidence and continuation

Update `project/BUILD_STATUS.md`, `project/DECISIONS.md`, `project/RISKS.md`, and `project/TRACEABILITY.md`. Record commands executed and actual results. Fix failures introduced by this phase. If a live external dependency is unavailable, implement and test a mock/adapter, record the exact external setup blocker, and continue to the next numbered prompt. Do not ask for routine approval.
