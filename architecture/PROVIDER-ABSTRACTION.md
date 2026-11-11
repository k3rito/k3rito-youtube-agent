# Provider Abstraction

Define interfaces for:

- `LLMProvider`: generate structured response, stream where useful, usage metadata.
- `TrendProvider`: search trends and return timestamped evidence.
- `ResearchProvider`: search/fetch sources under allowed terms.
- `VoiceProvider`: synthesize audio and report settings/usage.
- `ImageProvider` / `VideoProvider`: generate media with provenance.
- `StockProvider`: search licensed assets and return license metadata.
- `YouTubeProvider`: OAuth, upload, metadata, scheduling, comments, analytics.

Each provider declares capabilities, supported locales, limits, cost model, region, health, and compliance notes. Provider selection must consider channel policy, task requirements, cost reservation, and availability. Model output is never trusted as executable input.
