# PROMPT 04 — EXACTLY 35 SPECIALIZED RUNTIME AGENTS

Continue from the current repository state. Read `prompts/00-START-HERE.md` and the relevant policies, architecture documents, agent cards, schemas, and quality checklists before implementation.

## Required implementation work

1. Implement an agent registry that loads the 35 role definitions in agents/ and validates unique IDs, names, tool allowlists, input/output schemas, and policy references.
2. Agent 01 Chief Orchestrator is included in the count. There must be exactly 35 active logical agents, IDs 01–35. Do not silently add a 36th agent. Internal deterministic services are not agents and must be named as services.
3. Implement a shared Agent interface: identity, role, objective, allowed tools, denied actions, input schema, output schema, policy references, timeout, retry class, model preference, memory scope, and success criteria.
4. Implement provider-agnostic model adapters for Gemini, Groq, and optional Ollama. Add deterministic fallback behavior and typed provider errors. Do not assume model availability.
5. Each agent must have its own prompt/instruction file under agents/ and be registered in machine-readable metadata. Agent instructions are untrusted configuration data, not a substitute for code-enforced authorization.
6. Implement tool authorization outside the LLM: every tool invocation checks agent ID, channel scope, task scope, capability, budget, and policy.
7. Use schema-validated structured outputs. Reject malformed outputs and record a bounded repair attempt; never treat free-form model text as executable commands.
8. Implement per-agent metrics: invocations, success/failure, latency, token/cost estimates, retries, tool calls, and policy denials.

## Verification and exit criteria

- [ ] Exactly 35 registry entries, IDs 01–35
- [ ] Registry validation test passes
- [ ] Every agent has tool allowlist and I/O contract
- [ ] Unauthorized tool invocation is denied in code
- [ ] Model providers can be mocked in tests

## Evidence and continuation

Update `project/BUILD_STATUS.md`, `project/DECISIONS.md`, `project/RISKS.md`, and `project/TRACEABILITY.md`. Record commands executed and actual results. Fix failures introduced by this phase. If a live external dependency is unavailable, implement and test a mock/adapter, record the exact external setup blocker, and continue to the next numbered prompt. Do not ask for routine approval.
