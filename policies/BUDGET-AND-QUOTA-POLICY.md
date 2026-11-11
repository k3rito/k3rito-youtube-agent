# Budget and Quota Policy

- Budgets are configured per channel and optionally per campaign/video.
- The Budget & Resource Manager is advisory for estimates but all spend authorization is enforced by deterministic code.
- Reserve funds before any billable request. Settle actual usage afterward; release unused reservation.
- Hard ceilings: daily, monthly, per-video, per-provider, and concurrency limits.
- No agent may increase its own ceiling or create an exception.
- If price is unknown, the provider operation is blocked unless explicitly configured as zero-cost.
- Track model tokens, image/video generation, stock licenses, TTS, storage, egress, and worker costs where measurable.
- API quotas are separate from monetary budgets. Configure verified current limits and safety margins; do not hardcode assumed YouTube quota numbers.
- Alerts at configurable thresholds; hard stop at ceiling.
- Retries must not multiply charges blindly. Use idempotency and retry budgets.
