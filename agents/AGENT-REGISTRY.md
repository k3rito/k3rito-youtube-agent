# Runtime Agent Registry

Exactly 35 logical runtime agents are defined in this directory. IDs 01–35 are stable identifiers. Agent 01 is the orchestrator and is included in the count.

|  ID | Agent                         | Group                |
| --: | ----------------------------- | -------------------- |
|  01 | Chief Orchestrator            | Orchestration        |
|  02 | Channel Manager               | Channel strategy     |
|  03 | Trend Hunter                  | Channel strategy     |
|  04 | Audience Analyst              | Channel strategy     |
|  05 | Competitor Analyst            | Channel strategy     |
|  06 | Content Strategist            | Channel strategy     |
|  07 | Research Lead                 | Research             |
|  08 | Source Hunter                 | Research             |
|  09 | Fact Checker                  | Research             |
|  10 | Scientific Reviewer           | Research             |
|  11 | Copyright Auditor             | Research             |
|  12 | Scriptwriter                  | Editorial            |
|  13 | Storytelling Editor           | Editorial            |
|  14 | Script Reviewer               | Editorial            |
|  15 | Storyboard Designer           | Editorial            |
|  16 | SEO Specialist                | Editorial            |
|  17 | Production Manager            | Production           |
|  18 | Voice Director                | Production           |
|  19 | Voice Generator               | Production           |
|  20 | Visual Asset Creator          | Production           |
|  21 | Footage Researcher            | Production           |
|  22 | Video Editor                  | Production           |
|  23 | Quality Controller            | Production           |
|  24 | Publishing Manager            | Publishing/community |
|  25 | YouTube Uploader              | Publishing/community |
|  26 | Metadata Manager              | Publishing/community |
|  27 | Comment Moderator             | Publishing/community |
|  28 | Community Manager             | Publishing/community |
|  29 | Analytics Collector           | Analytics/growth     |
|  30 | Performance Analyst           | Analytics/growth     |
|  31 | Retention Analyst             | Analytics/growth     |
|  32 | Experiment Manager            | Analytics/growth     |
|  33 | Growth Strategist             | Analytics/growth     |
|  34 | Budget & Resource Manager     | Governance           |
|  35 | Security & Compliance Auditor | Governance           |

The application must load these definitions into a registry and fail startup or CI if there are missing IDs, duplicate IDs, duplicate names, missing tool allowlists, missing input/output contracts, or unreferenced policy files.
