# PROMPT 09 — SECURE WINDOWS LOCAL MEDIA WORKER

Continue from the current repository state. Read `prompts/00-START-HERE.md` and the relevant policies, architecture documents, agent cards, schemas, and quality checklists before implementation.

## Required implementation work

1. Build a Windows worker service/CLI that registers to the cloud control plane using one-time enrollment and short-lived credentials. Worker connects outbound only over TLS; no public inbound port is required.
2. Worker capabilities must be declared (FFmpeg, FFprobe, Chatterbox, GPU, VRAM, RAM, disk, codecs, model availability). Cloud scheduler must assign only compatible tasks.
3. Implement a restricted job sandbox with per-job workspace, path allowlist, file size limits, cleanup policy, process timeout, CPU/GPU/memory limits where practical, and no arbitrary shell commands from LLM output.
4. Commands are selected from typed task definitions and fixed executable adapters. Never interpolate untrusted model text into shell command strings.
5. Target Windows 10 with Ryzen 5 2600, GTX 1070 8GB, and 16GB RAM. Default to one heavy GPU task at a time and bounded concurrent lightweight tasks.
6. Integrate FFmpeg/FFprobe through version detection and safe argument arrays. Integrate Chatterbox via a documented local adapter, health check, input size guard, and fallback path.
7. Support offline queueing only for explicitly safe tasks; sync results when connection returns. Do not persist OAuth tokens or cloud service-role keys on the worker.
8. Implement signed job payloads or authenticated task retrieval, worker heartbeat, capability updates, cancellation, logs redaction, and secure artifact upload.
9. Provide PowerShell install/uninstall scripts with clear confirmation for destructive operations. Do not silently modify PATH, firewall, Defender, startup, or system services.

## Verification and exit criteria

- [ ] Worker uses outbound-only secure connection
- [ ] No arbitrary shell tool exposed to agents
- [ ] Capability-aware scheduling tested
- [ ] Windows setup guide and diagnostics included
- [ ] No production secrets stored locally

## Evidence and continuation

Update `project/BUILD_STATUS.md`, `project/DECISIONS.md`, `project/RISKS.md`, and `project/TRACEABILITY.md`. Record commands executed and actual results. Fix failures introduced by this phase. If a live external dependency is unavailable, implement and test a mock/adapter, record the exact external setup blocker, and continue to the next numbered prompt. Do not ask for routine approval.
