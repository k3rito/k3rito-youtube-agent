# Workflow State Machine

Allowed task states:
`PENDING`, `QUEUED`, `RUNNING`, `RETRY_WAIT`, `COMPLETED`, `FAILED`, `PAUSED`, `CANCELLED`, `DEAD_LETTER`, `WAITING_APPROVAL`, `WAITING_WORKER`.

Transitions:

- PENDING -> QUEUED | CANCELLED
- QUEUED -> RUNNING | PAUSED | CANCELLED
- RUNNING -> COMPLETED | FAILED | RETRY_WAIT | WAITING_APPROVAL | WAITING_WORKER | CANCELLED
- RETRY_WAIT -> QUEUED | DEAD_LETTER | CANCELLED
- WAITING_WORKER -> QUEUED | PAUSED | FAILED | CANCELLED
- WAITING_APPROVAL -> QUEUED | PAUSED | CANCELLED
- PAUSED -> QUEUED | CANCELLED
- FAILED -> QUEUED only through an explicit retry action and within retry policy
- COMPLETED, CANCELLED, DEAD_LETTER are terminal unless an explicit new task is created.

Persist transition actor, timestamp, previous state, new state, reason, correlation ID, and attempt number. Enforce transitions in application code and database constraints where practical.
