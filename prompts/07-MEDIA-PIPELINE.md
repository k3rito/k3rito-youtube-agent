# PROMPT 07 — MEDIA PRODUCTION, EDITING, AND QUALITY CONTROL

Continue from the current repository state. Read `prompts/00-START-HERE.md` and the relevant policies, architecture documents, agent cards, schemas, and quality checklists before implementation.

## Required implementation work

1. Implement provider registry for voice, image, video, stock footage, music, subtitles, and motion graphics. Each provider has capability, cost, licensing, region, limits, and health metadata.
2. Use licensed assets or assets generated under documented terms. Record creator/provider, source URL or generation job, license/terms snapshot, attribution, permitted use, expiry, and channel scope.
3. Build storyboard-to-scene planning with scene ID, duration target, narration segment, visual intent, asset requirements, transition, captions, and evidence references.
4. Implement voice generation adapters; support local Chatterbox through the Windows worker and remote alternatives behind provider interfaces. Validate audio format, duration, clipping, silence, and intelligibility heuristics.
5. Implement media assembly with FFmpeg/FFprobe: normalize frame rate, dimensions, audio loudness, sample rate, subtitles, transitions, and final encoding. Default to 1080p; use 4K only when all relevant inputs and resource budgets permit.
6. Build media timeline from explicit scene manifests. Do not use random stock clips that are unrelated to narration. Missing assets must trigger targeted regeneration/search or a controlled failure.
7. Implement thumbnail generation workflow and safe text/layout checks. Store multiple variants and experiment metadata.
8. Quality gates must check: file existence, codec/container, dimensions, duration, audio/video sync, black frames, frozen frames, silence, peak/clipping, subtitle timing, scene coverage, source rights, watermark restrictions, and output hash.
9. Do not mark production complete until quality report is persisted and all mandatory checks pass. A human override, if supported, must be explicit, audited, and unavailable to ordinary agents.

## Verification and exit criteria

- [ ] Media manifest schema implemented
- [ ] FFmpeg pipeline has deterministic fixture tests
- [ ] Quality report blocks failed output
- [ ] Asset licensing metadata is mandatory
- [ ] Worker integration can be mocked and locally exercised

## Evidence and continuation

Update `project/BUILD_STATUS.md`, `project/DECISIONS.md`, `project/RISKS.md`, and `project/TRACEABILITY.md`. Record commands executed and actual results. Fix failures introduced by this phase. If a live external dependency is unavailable, implement and test a mock/adapter, record the exact external setup blocker, and continue to the next numbered prompt. Do not ask for routine approval.
