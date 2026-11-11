# PROMPT 08 — YOUTUBE OAUTH, PUBLISHING, COMMENTS, AND ANALYTICS

Continue from the current repository state. Read `prompts/00-START-HERE.md` and the relevant policies, architecture documents, agent cards, schemas, and quality checklists before implementation.

## Required implementation work

1. Implement YouTube API adapters with narrow scopes and explicit OAuth consent. Verify current official API docs, quota rules, upload requirements, privacy settings, and developer policies before production integration.
2. Support multiple channel OAuth connections, token refresh, encrypted token storage, revoked-token handling, reconnect flow, and per-channel isolation.
3. Implement resumable upload with chunk retry, persisted upload session state, checksum, processing status polling, and final verification of the returned video resource.
4. Publishing must be idempotent and stateful: draft, scheduled, uploading, processing, published, failed, cancelled. Never claim published until YouTube confirms the resulting state.
5. Support title, description, tags, category, language, thumbnail, playlist, privacy, scheduled time, captions, and synthetic/altered-content disclosures where applicable.
6. Build a quota guard and per-channel schedule guard. Do not assume current quota numbers; load configurable limits based on verified official documentation.
7. Comment moderation: classify spam, abuse, threats, self-harm, personal data, and normal feedback. Keep high-risk comments out of autonomous reply flow.
8. Comment replies must follow channel tone and policy, avoid claims of personal human identity, and respect YouTube policies. Add rate limits, duplicate detection, and audit trail. Support draft-only mode as safe default until channel policy and authorization permit automated replies.
9. Analytics ingestion must respect API availability and reporting delay. Store snapshots with metric definitions and retrieval time. Do not infer causation from correlation.
10. Add dry-run mode for upload, scheduling, metadata, moderation, and reply workflows.

## Verification and exit criteria

- [ ] OAuth flow and refresh tested with mocks
- [ ] Upload state machine and retry tests pass
- [ ] No publish marked successful without API confirmation
- [ ] Comment automation has rate and policy guards
- [ ] Analytics snapshots include timestamps and metric definitions

## Evidence and continuation

Update `project/BUILD_STATUS.md`, `project/DECISIONS.md`, `project/RISKS.md`, and `project/TRACEABILITY.md`. Record commands executed and actual results. Fix failures introduced by this phase. If a live external dependency is unavailable, implement and test a mock/adapter, record the exact external setup blocker, and continue to the next numbered prompt. Do not ask for routine approval.
