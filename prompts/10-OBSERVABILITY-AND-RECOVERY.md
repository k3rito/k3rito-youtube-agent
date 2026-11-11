# PROMPT 10 — OBSERVABILITY, ERROR DETECTION, AND SELF-RECOVERY

Continue from the current repository state. Read `prompts/00-START-HERE.md` and the relevant policies, architecture documents, agent cards, schemas, and quality checklists before implementation.

## Required implementation work

1. Implement structured logs with correlation_id, task_id, agent_id, channel_id, provider, attempt, and severity. Redact tokens, personal data, and secret-like strings.
2. Create metrics for queue depth, task age, agent success, provider latency, cost, quota use, worker health, upload status, media QC failures, comment moderation, and publish outcomes.
3. Implement alert rules for stuck jobs, repeated provider failures, budget threshold, token refresh failure, worker offline, quota exhaustion, failed uploads, and cross-tenant authorization denials.
4. Implement error taxonomy from quality/error-catalog.md and typed errors. Every failure must include retryability, safe remediation, owner, and user-visible explanation.
5. Self-correction is limited to safe actions: retry transient network errors, switch approved provider, regenerate malformed structured output within a cap, reclaim expired leases, or pause unsafe work.
6. Never auto-correct by disabling security controls, reducing factual standards, bypassing rights checks, increasing budgets, changing OAuth scopes, or publishing failed content.
7. Build operator runbooks and diagnostic bundle export with redaction. Preserve audit logs across retries.
8. Implement a circuit breaker per provider and worker. Degraded mode must be explicit and observable.

## Verification and exit criteria

- [ ] Failure injection tests cover critical paths
- [ ] Alerts and runbooks documented
- [ ] Secrets are redacted from logs
- [ ] Recovery actions are bounded and auditable
- [ ] No safety gate can be bypassed by self-healing

## Evidence and continuation

Update `project/BUILD_STATUS.md`, `project/DECISIONS.md`, `project/RISKS.md`, and `project/TRACEABILITY.md`. Record commands executed and actual results. Fix failures introduced by this phase. If a live external dependency is unavailable, implement and test a mock/adapter, record the exact external setup blocker, and continue to the next numbered prompt. Do not ask for routine approval.
