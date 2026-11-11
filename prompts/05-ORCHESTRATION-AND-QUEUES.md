# PROMPT 05 — ORCHESTRATION, QUEUES, AND DURABLE WORKFLOWS

Continue from the current repository state. Read `prompts/00-START-HERE.md` and the relevant policies, architecture documents, agent cards, schemas, and quality checklists before implementation.

## Required implementation work

1. Implement Chief Orchestrator as a planner and dispatcher, not an omnipotent executor. It may assign work only through typed tasks and approved workflow definitions.
2. Implement durable task state machine: PENDING, QUEUED, RUNNING, RETRY_WAIT, COMPLETED, FAILED, PAUSED, CANCELLED, DEAD_LETTER, WAITING_APPROVAL, WAITING_WORKER.
3. Implement leases/heartbeats, atomic claiming, deduplication, idempotency keys, bounded exponential backoff with jitter, cancellation, pause/resume, dead-letter queues, and stuck-job recovery.
4. Define workflows for trend-to-topic, topic-to-research, research-to-script, script-to-production, production-to-QC, QC-to-publish, comment moderation, analytics review, and multi-channel scheduling.
5. Parallelize independent tasks (e.g., source discovery and competitor analysis) while enforcing dependency barriers and resource limits.
6. Prevent file conflicts: media assets are immutable/versioned; each job owns a workspace; only the orchestrator merges approved artifacts.
7. Persist all task inputs/outputs as versioned artifacts with provenance and schema versions. Never rely on in-memory context as the only source of truth.
8. Add concurrency controls by provider, channel, worker, GPU, and task type. Set conservative defaults for the 16GB RAM / GTX 1070 worker.

## Verification and exit criteria

- [ ] Crash/restart recovery tests pass
- [ ] Duplicate task submission produces one external effect
- [ ] Retries are bounded and dead-lettered
- [ ] Task state transitions validated
- [ ] Parallel workflows respect dependencies and concurrency

## Evidence and continuation

Update `project/BUILD_STATUS.md`, `project/DECISIONS.md`, `project/RISKS.md`, and `project/TRACEABILITY.md`. Record commands executed and actual results. Fix failures introduced by this phase. If a live external dependency is unavailable, implement and test a mock/adapter, record the exact external setup blocker, and continue to the next numbered prompt. Do not ask for routine approval.
