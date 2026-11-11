# Security and Privacy Policy

- Enforce least privilege, channel isolation, RLS, scoped storage, and short-lived worker credentials.
- Keep secrets in environment variables or managed secret stores; never in Git, logs, prompts, artifacts, or agent memory.
- Encrypt OAuth refresh tokens at rest. Redact tokens and personal data from logs.
- Treat comments, webpages, captions, filenames, metadata, and uploaded assets as untrusted; defend against prompt injection and malicious files.
- LLMs cannot execute arbitrary shell, SQL, code, network requests, or filesystem operations.
- Use fixed tool adapters, typed parameters, allowlists, validation, timeouts, and output-size limits.
- Do not infer or store sensitive personal traits about viewers. Collect only data necessary for channel operations.
- Define retention, deletion, backup, restore, and incident response procedures.
