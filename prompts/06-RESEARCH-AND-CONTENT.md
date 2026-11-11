# PROMPT 06 — TRENDS, RESEARCH, FACT-CHECKING, AND EDITORIAL

Continue from the current repository state. Read `prompts/00-START-HERE.md` and the relevant policies, architecture documents, agent cards, schemas, and quality checklists before implementation.

## Required implementation work

1. Implement trend-source adapters behind interfaces. Potential sources include YouTube Data API, Google Trends where access is permitted, public RSS/news sources, and scholarly metadata providers. Verify each provider's current terms, rate limits, and availability.
2. Store discovery time, source URL, retrieval timestamp, locale, topic, trend evidence, confidence, and expiry. Do not call a topic trending based on one weak signal.
3. Implement topic scoring using channel niche fit, audience relevance, trend velocity, competition, evergreen value, production feasibility, risk, and estimated cost. Keep scoring explainable.
4. Research must produce a source dossier and claim ledger. Each material factual claim includes source, supporting excerpt/locator, date, evidence level, and verification status.
5. Fact-checking agents must distinguish established facts, estimates, disputed claims, speculation, and unknowns. If sources conflict, preserve the conflict and lower confidence.
6. Scientific/technical content requires primary or authoritative sources where possible. Never invent studies, quotations, dates, statistics, or URLs.
7. Implement editorial risk checks: defamation, medical/financial/legal claims, dangerous instructions, misinformation, privacy, and sensitive events. Escalate high-risk content rather than autonomously publishing.
8. Generate scripts, storyboard, titles, descriptions, tags, chapters, and thumbnail briefs in structured formats. Preserve source references through each derivative artifact.
9. Support language and locale per channel. Do not assume all channels are English; channel policy defines language, audience, tone, and regional settings.

## Verification and exit criteria

- [ ] Trend evidence stored with provenance
- [ ] Claim ledger schema and verification tests exist
- [ ] No unsupported claim passes editorial gate
- [ ] Script artifacts reference source dossier
- [ ] Channel-specific language and style are respected

## Evidence and continuation

Update `project/BUILD_STATUS.md`, `project/DECISIONS.md`, `project/RISKS.md`, and `project/TRACEABILITY.md`. Record commands executed and actual results. Fix failures introduced by this phase. If a live external dependency is unavailable, implement and test a mock/adapter, record the exact external setup blocker, and continue to the next numbered prompt. Do not ask for routine approval.
