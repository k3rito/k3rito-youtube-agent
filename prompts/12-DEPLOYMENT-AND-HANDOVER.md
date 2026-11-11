# PROMPT 12 — DEPLOYMENT READINESS AND FINAL HANDOVER

Continue from the current repository state. Read `prompts/00-START-HERE.md` and the relevant policies, architecture documents, agent cards, schemas, and quality checklists before implementation.

## Required implementation work

1. Prepare reproducible local setup, Supabase setup, Vercel deployment, Telegram webhook setup, Google OAuth setup, YouTube API enablement, and Windows worker installation documentation.
2. Provide `.env.example` with placeholders only, schema validation, and a secret checklist. Never commit `.env`, tokens, private keys, service-role secrets, or real channel identifiers.
3. Create deployment environments (local, test/staging, production) with separate databases, OAuth clients, storage buckets, and secrets.
4. Add health/readiness checks, migration procedure, rollback procedure, backup/restore steps, incident response, token rotation, and worker upgrade process.
5. Default new channels to safe mode: no automatic public publish and no automatic comment replies until operator explicitly enables the corresponding channel policy and OAuth permissions.
6. Provide a channel onboarding wizard/checklist and a dry-run walkthrough that does not publish or reply to real users.
7. Run final CI, typecheck, lint, unit, integration, migration, security, and packaging checks. Attach logs or concise evidence in project/BUILD_STATUS.md.
8. Produce a final architecture map, package inventory, agent registry export, API inventory, known limitations, outstanding external setup, estimated operating cost model (assumptions explicit), and operational runbook.
9. Do not claim production readiness if external authorization, quota verification, or live integration tests remain incomplete. State precisely what is complete, mocked, blocked, and requires operator action.

## Verification and exit criteria

- [ ] Reproducible setup docs complete
- [ ] No secrets committed
- [ ] Safe defaults enforced
- [ ] Final test evidence recorded
- [ ] Handover distinguishes verified vs unverified work

## Evidence and continuation

Update `project/BUILD_STATUS.md`, `project/DECISIONS.md`, `project/RISKS.md`, and `project/TRACEABILITY.md`. Record commands executed and actual results. Fix failures introduced by this phase. If a live external dependency is unavailable, implement and test a mock/adapter, record the exact external setup blocker, and continue to the next numbered prompt. Do not ask for routine approval.
