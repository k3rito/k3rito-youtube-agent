# System Overview

## Logical planes

1. **Control plane:** API, channel configuration, OAuth callbacks, operator controls, Telegram bot, dashboards.
2. **Orchestration plane:** durable queue, workflow engine, agent registry, policy enforcement, budget guard.
3. **Data plane:** PostgreSQL, object storage, immutable artifacts, evidence ledger, audit log.
4. **Provider plane:** Gemini, Groq, Ollama, trend/research sources, TTS, image/video/stock providers, YouTube APIs.
5. **Execution plane:** secure Windows media worker running FFmpeg/FFprobe/Chatterbox and bounded local tasks.

## Main data flow

Channel policy -> trend discovery -> topic scoring -> research dossier -> claim verification -> script -> storyboard -> asset sourcing/generation -> voice -> edit -> quality report -> publish readiness -> upload/schedule -> analytics -> optimization.

## Isolation

Every job and artifact is scoped to a channel. Shared infrastructure does not imply shared authorization or memory. Storage paths must be tenant-scoped and validated server-side.

## Reliability

Queue-driven, idempotent, resumable, observable, bounded retries, dead-letter queue, explicit state machine, no silent side effects.
