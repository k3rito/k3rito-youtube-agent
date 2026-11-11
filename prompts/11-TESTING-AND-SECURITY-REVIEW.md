# PROMPT 11 — FULL TESTING, SECURITY, AND COMPLIANCE REVIEW

Continue from the current repository state. Read `prompts/00-START-HERE.md` and the relevant policies, architecture documents, agent cards, schemas, and quality checklists before implementation.

## Required implementation work

1. Create unit, integration, contract, migration, end-to-end, and failure-injection test suites. Use deterministic fixtures and mocked external services.
2. Test exactly 35 registered agents and verify each agent's policy, tool allowlist, schema, memory scope, and output validation.
3. Test cross-channel isolation for database access, storage paths, OAuth, queue routing, memory, comments, analytics, and budget ledger.
4. Test idempotency and duplicate delivery for upload, publish, comment reply, budget debit, and webhook handling.
5. Test provider timeout, rate limit, quota exhaustion, malformed model output, prompt injection, malicious asset metadata, revoked OAuth, worker disconnection, disk full, GPU unavailable, and FFmpeg failure.
6. Perform dependency and secret scanning, static analysis, authorization review, RLS review, input validation review, and threat-model update.
7. Verify current YouTube API policies and disclosure requirements from official documentation; document date and links. Do not claim compliance certification.
8. Create a launch checklist distinguishing local verified, mocked, staging verified, and production verified capabilities.
9. Fix critical/high issues before release. Medium/low issues require explicit risk acceptance and mitigation notes; never hide findings.

## Verification and exit criteria

- [ ] Critical test matrix passes
- [ ] No unresolved critical/high security issue
- [ ] 35-agent registry invariant passes
- [ ] Tenant isolation verified
- [ ] All unverified live integrations explicitly labeled

## Evidence and continuation

Update `project/BUILD_STATUS.md`, `project/DECISIONS.md`, `project/RISKS.md`, and `project/TRACEABILITY.md`. Record commands executed and actual results. Fix failures introduced by this phase. If a live external dependency is unavailable, implement and test a mock/adapter, record the exact external setup blocker, and continue to the next numbered prompt. Do not ask for routine approval.
