# Architecture Decisions

## D-001: Monorepo Foundation

- **Date:** 2024-05-18
- **Context:** Project requires isolation for agent runtime, contracts, and scalable execution across workers.
- **Selected Option:** Implement `pnpm` workspace with `turbo` repo.
- **Rationale:** `pnpm` workspaces handle large-scale, isolated internal package references robustly with optimized install footprint. `turbo` repo gives task pipeline visibility and caching for tests and builds.
- **Consequences:** We must adhere strictly to isolated boundaries in `apps/` and `packages/`.
- **Reversible:** Yes, can fall back to standard `npm` or `yarn` workspaces if necessary.

## D-002: Domain Contracts and Workspace Types

- **Date:** 2024-05-18
- **Context:** Initializing the shared interface models (`Channel`, `Task`, `Agent`, `AgentRun`) across isolated packages.
- **Selected Option:** Established a centralized `@k3rito/contracts` package within the monorepo to house domain interfaces without implementation details.
- **Rationale:** Strongly isolates domain schemas from specific implementations, allowing providers/apis to scale logic independent of underlying DB technologies initially.
- **Consequences:** All components modifying domain structs must consume these typed contracts.
- **Reversible:** Yes, types can easily migrate to specific packages down the road if they become too unwieldy.
