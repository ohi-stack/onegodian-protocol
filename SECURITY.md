# Security and Release Boundary

This repository is the specification and contract layer. It does not grant authority, authenticate operators, execute privileged actions, or prove deployment.

## Rules

- Treat schemas, examples, and documentation as untrusted input until validated.
- Do not place credentials, tokens, private personal context, or production connection strings in this repository.
- Implementations must authenticate and authorize consequential operations outside this repository.
- Human approval, audit records, verification evidence, and rollback controls remain required for production execution.
- A passing contract check is not a production or deployment claim.

Report suspected credential exposure or security defects through the authorized private security channel; do not publish secrets in issues or pull requests.
