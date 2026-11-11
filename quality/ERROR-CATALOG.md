# Error Catalog and Recovery Rules

| Code                       | Meaning                                         |    Retryable | Safe response                                                      |
| -------------------------- | ----------------------------------------------- | -----------: | ------------------------------------------------------------------ |
| CONFIG_MISSING             | Required config absent                          |           No | Mark integration unconfigured; document setup                      |
| AUTH_EXPIRED               | OAuth/token expired                             |    Sometimes | Refresh once; otherwise pause and request reconnect                |
| AUTH_SCOPE_MISSING         | Required scope absent                           |           No | Explain exact scope and consent requirement                        |
| TENANT_SCOPE_DENIED        | Cross-channel access attempt                    |           No | Deny, audit, alert                                                 |
| POLICY_DENIED              | Action violates policy                          |           No | Stop action; preserve reason                                       |
| BUDGET_EXCEEDED            | Budget reservation denied                       |           No | Stop paid action; no retry                                         |
| QUOTA_EXCEEDED             | Provider/API quota reached                      | Yes, delayed | Backoff according to verified reset policy                         |
| PROVIDER_TIMEOUT           | Provider timeout                                |          Yes | Bounded retry or approved fallback                                 |
| PROVIDER_RATE_LIMIT        | Rate limited                                    |          Yes | Backoff with jitter                                                |
| MODEL_OUTPUT_INVALID       | Structured output invalid                       |      Limited | One bounded repair attempt, then fail                              |
| EVIDENCE_INSUFFICIENT      | Claim unsupported                               |           No | Research more or remove/qualify claim                              |
| ASSET_RIGHTS_UNKNOWN       | Rights not verified                             |           No | Block asset                                                        |
| WORKER_OFFLINE             | Local worker unavailable                        |          Yes | Queue and wait; do not fake completion                             |
| WORKER_CAPABILITY_MISMATCH | Worker cannot run task                          |           No | Reassign compatible task or report blocked                         |
| DISK_SPACE_LOW             | Insufficient local space                        |        Maybe | Stop safely, clean only job temp files, retry after capacity check |
| FFMPEG_FAILED              | Media process failed                            |        Maybe | Capture redacted diagnostics; retry only if transient              |
| QC_FAILED                  | Output failed quality gate                      |           No | Return actionable defect list to production                        |
| UPLOAD_FAILED              | YouTube upload failed                           |        Maybe | Resume same upload session if valid; preserve idempotency          |
| PUBLISH_UNCONFIRMED        | Publish state not confirmed                     |    Yes, poll | Never report success; reconcile remote state                       |
| COMMENT_RISK_HIGH          | High-risk comment                               |           No | Escalate; no automated reply                                       |
| PROMPT_INJECTION           | Untrusted content attempts tool/policy override |           No | Treat as data, isolate, audit                                      |

Every error record includes `code`, `message_safe`, `retryable`, `attempt`, `max_attempts`, `correlation_id`, `task_id`, `agent_id`, `channel_id`, `diagnostic_ref`, and `remediation`.
