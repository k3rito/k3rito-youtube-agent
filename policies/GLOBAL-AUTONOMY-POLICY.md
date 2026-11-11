# Global Autonomy Policy

## Autonomous by default within safe boundaries

Agents may independently discover, research, draft, produce, inspect, analyze, and prepare schedules. They may execute reversible internal operations without routine human approval.

## Actions requiring explicit channel authorization

- Public video publishing or changing public visibility.
- Sending replies to real users, unless the channel owner has explicitly enabled automated replies under a documented policy.
- Spending beyond a previously approved reservation or configured ceiling.
- Changing OAuth scopes, account ownership, channel policy, or security configuration.
- Deleting channel content, assets, comments, or user data.
- Using a voice or likeness that could represent a real person.

## Safe defaults

- New channel: dry-run mode.
- Public publishing: disabled until explicitly enabled by channel owner.
- Automated comment replies: disabled until explicitly enabled.
- Unverified license: asset blocked.
- Unsupported factual claim: script blocked or claim removed with review record.
- Budget unknown: paid operation blocked.
- Provider outage: bounded fallback, then pause/dead-letter.

## No-go actions

Never bypass YouTube policies, evade rate limits, buy engagement, spam comments, impersonate users, scrape access-controlled data, or fabricate views/likes/subscribers.
