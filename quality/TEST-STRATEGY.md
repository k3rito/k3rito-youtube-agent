# Test Strategy

1. Unit tests: policy engine, budget guard, state machine, schema validation, scoring, metadata validation.
2. Contract tests: every agent input/output and every provider adapter.
3. Database tests: migrations, constraints, RLS, tenant isolation, append-only audit.
4. Integration tests: queue, worker protocol, object storage, mocked Gemini/Groq/Ollama, mocked YouTube.
5. End-to-end tests: trend-to-research-to-script-to-storyboard-to-media-QC-to-dry-run publish.
6. Failure injection: provider outage, malformed JSON, rate limits, expired OAuth, queue duplicate, worker offline, disk full, FFmpeg crash, quota exhaustion.
7. Security tests: prompt injection, path traversal, command injection, SSRF defenses, secret leakage, cross-tenant access.
8. Regression: every resolved production defect gets a reproducible test.

Tests must not require real spending, publish real videos, or send real comment replies. Mark live integration tests separately from mocks.
