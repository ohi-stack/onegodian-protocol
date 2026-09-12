# OneGodian MCP Interoperability & Authority Boundary

Version: v0.1-draft  
Status: Working Draft

## Purpose

This document defines how the OneGodian MCP Standard™ and OMOS Connection & Adaptation Layer™ fit inside the OneGodian authority model without collapsing interoperability, governance, authorization, execution, and source-of-record responsibilities into one component.

## Governing Separation

- **MCP / Connection Layer** provides normalized interoperability, discovery, invocation, transport metadata, and connector adaptation.
- **OMOS** governs whether and how a connection may be used, including permissions, maturity state, verification boundaries, safe state transitions, and Decision Record evidence.
- **ACC** may orchestrate authorized execution and surface operator approvals, but ACC is not itself the source of domain truth.
- **OCP / OEG or equivalent approved authority services** provide policy and execution authorization where required by the deployed architecture.
- **Connected domain systems** remain authoritative for their own records, state, and domain actions.
- **Human authority** remains final for consequential actions where policy requires approval.

## No Self-Authorization

A connector, model, client, agent, workflow, or caller MUST NOT create its own authority merely by supplying a boolean such as `approved: true`.

Local approval envelopes may be used in development and conformance tests to prove that a gate exists. They do not constitute production authorization evidence by themselves.

A production consequential action should reference an authoritative approval record or verifier capable of proving at minimum:

- approval identifier;
- approving actor or authority;
- timestamp;
- policy or rule reference;
- requested operation;
- connection or execution target;
- scope and expiration where applicable;
- disposition;
- audit/provenance reference.

## Consequential MCP Operations

Protected operations include, at minimum:

- `tools/call` when the tool can create external effects;
- `tasks/update`;
- `tasks/cancel`;
- domain writes;
- destructive actions;
- privilege or policy changes;
- environment execution;
- money movement, payment, refund, credential, identity, deployment, or production-control actions.

The governing sequence is:

`Declared Capability → Connector Permission → Policy Evaluation → Human/Authority Approval (when required) → Execution → Domain Verification → Audit Record`

Passing one gate does not bypass the others.

## Source of Record

MCP transport success proves only that a request/response exchange occurred. It does not make OMOS, ACC, or the connector authoritative for the connected domain.

Examples:

- GitHub remains authoritative for repository state.
- Google Drive remains authoritative for the connected Drive document state.
- WordPress remains authoritative for the connected site content state.
- QR-V remains authoritative for its verification records.
- ACC remains authoritative only for ACC-owned orchestration/execution records.

OMOS may retain provenance, verification, Decision Records, and execution evidence without replacing the connected system's own record authority.

## Production Evidence Rule

A connector may be described as repository-conformance-tested when its contract and deterministic tests pass. A named external connector MUST NOT be described as Verified or Production until evidence exists for the exact deployed revision demonstrating the applicable controls:

- authentication configured without secret disclosure;
- capability discovery;
- permission enforcement;
- consequential-action authorization;
- request/response correlation;
- timeout and failure behavior;
- retry behavior where enabled;
- audit/provenance persistence;
- domain-specific read/write verification;
- restart/redeploy behavior where state is relevant;
- exact deployed commit SHA.

## Maturity Boundary

The OneGodian maturity ladder remains controlling:

`Conceptual → Prototype → Functional → Verified → Production`

Repository conformance can establish **Functional** status for the tested contract. It does not automatically establish Verified or Production status for a real external connection.
