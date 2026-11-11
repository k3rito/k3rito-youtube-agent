# Channel Isolation Contract

All channel-owned records include `channel_id`. All queue messages, artifacts, memory entries, OAuth connections, budget reservations, analytics snapshots, comments, and publish operations carry channel scope.

Required controls:

- RLS on every tenant-owned table.
- Server-side authorization checks independent of LLM instructions.
- Object storage paths scoped by immutable channel UUID.
- OAuth connection selected only by authorized channel ID.
- Queue consumer validates task/channel/agent scope before processing.
- Cross-channel denial tests for reads, writes, tool calls, and file access.
- No global shared agent memory containing channel-specific secrets or unpublished strategy.
