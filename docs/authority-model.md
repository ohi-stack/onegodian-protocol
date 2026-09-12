# Authority Model

Version: v0.1-draft
Status: Working Draft

## Purpose

The Authority Model defines governance, permissions, escalation rules, and execution boundaries for systems implementing the OneGodian Protocol™.

## Principles

- least privilege
- explicit approval boundaries
- deterministic logging
- no self-authorization
- transparent escalation
- audit visibility
- source-of-record preservation
- evidence before maturity promotion

## Authority Layers

1. Observer
2. Executor
3. Domain Lead
4. Administrator
5. Super Administrator

These role labels define permission tiers only. They do not allow a client, connector, model, agent, or workflow to manufacture its own approval.

## Governance Requirements

Sensitive actions should require:

- approval records
- timestamps
- policy references
- execution identifiers
- immutable or integrity-verifiable logging
- target connection/domain identification
- authorization scope
- post-execution verification where applicable

## Protected Operations

Protected operations may include:

- identity reassignment
- policy overrides
- registry modifications
- production destructive actions
- privilege elevation
- consequential MCP `tools/call`
- MCP `tasks/update`
- MCP `tasks/cancel`
- domain writes
- environment execution
- payment, credential, deployment, or production-control actions

## MCP / Connection Authority Boundary

The OneGodian MCP Standard™ and OMOS Connection & Adaptation Layer™ are interoperability mechanisms, not independent authorities.

The required execution order is:

`Declared Capability → Connector Permission → Policy Evaluation → Human/Authority Approval (when required) → Execution → Domain Verification → Audit Record`

A local payload such as `approved: true` may exercise a gate in development or conformance tests, but it is not sufficient production authorization evidence by itself. Production consequential operations should bind to an authoritative approval record or verifier supplied through ACC/OCP/OEG or the approved successor authority service.

Connected systems remain sources of record for their own domain state. OMOS governance records and ACC execution records supplement rather than replace that domain authority.

See `mcp-interoperability-authority.md` for the detailed production boundary.

## Logging Requirements

Every privileged action should record:

- actor
- action
- timestamp
- policy source
- approval status
- approval/reference identifier where applicable
- connector/execution identifier
- target domain
- execution result
- verification result where applicable

## Integration Targets

- OMOS Connection & Adaptation Layer
- OneGodian MCP connectors
- ACC systems
- OCP/OEG authorization and execution services
- agent orchestration
- middleware
- registry services
- mapper services
- protocol APIs
