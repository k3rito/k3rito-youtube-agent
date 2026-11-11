# PROMPT 01 — REPOSITORY AUDIT AND BASELINE

Continue from the current repository state. Read `prompts/00-START-HERE.md` and the relevant policies, architecture documents, agent cards, schemas, and quality checklists before implementation.

## Required implementation work

1. Inspect all repository files, Git history, package manifests, existing workflows, deployment files, and project conventions before changing anything.
2. Determine whether the repository is empty or contains an existing project. Preserve useful work. Do not overwrite unrelated projects or credentials.
3. Create project/BUILD_STATUS.md, project/DECISIONS.md, project/RISKS.md, and project/TRACEABILITY.md from templates if absent.
4. Record the detected runtime versions, package manager, existing tests, CI status, and any conflicting assumptions.
5. Create a concise implementation plan mapped to prompts 02–12. Identify external dependencies and separate blockers from locally implementable work.
6. Do not begin feature implementation in this phase.

## Verification and exit criteria

- [ ] Audit report committed
- [ ] Baseline status and risk register exist
- [ ] No unrelated files deleted or overwritten
- [ ] All prompt phases mapped to traceability

## Evidence and continuation

Update `project/BUILD_STATUS.md`, `project/DECISIONS.md`, `project/RISKS.md`, and `project/TRACEABILITY.md`. Record commands executed and actual results. Fix failures introduced by this phase. If a live external dependency is unavailable, implement and test a mock/adapter, record the exact external setup blocker, and continue to the next numbered prompt. Do not ask for routine approval.
