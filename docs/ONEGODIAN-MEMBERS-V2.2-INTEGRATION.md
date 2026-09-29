# OneGodian Members v2.2.0 — Protocol Reconciliation

Updated: September 29, 2026

## Purpose

This document reconciles the OneGodian Members v2.2.0 WordPress implementation with the existing OneGodian Belief Mapper protocol without silently conflating separate products, scoring models, or data policies.

## Canonical protocol roles

`ohi-stack/onegodian-protocol/mapper` remains the canonical protocol/scoring documentation for the Belief Mapper.

The existing Lite Mapper defines:

- five named public discovery responses
- Explorer / Aligned / Strong Alignment educational results
- no automatic identity assignment
- no membership creation
- no raw-answer persistence by default

The Full Mapper protocol describes seven conceptual mapping dimensions:

- ontology
- unity
- relationship
- tradition
- identity
- community
- purpose

## OneGodian Members v2.2.0 implementation

The Members plugin adds an authenticated member reflection implementation with:

- exactly seven administrator-configurable question slots
- question slots empty by default
- private, consent-gated stored responses
- save/resume and reset behavior
- self-selected journey stage: Seeker / Believer / OneGodian / Elder / Not selected
- no automatic stage assignment from Mapper answers, score, XP, badges, streaks, or activity
- opt-in public stage visibility

## Important distinction

The seven configurable Members question slots are not automatically the same thing as the seven Full Mapper conceptual dimensions.

Until an approved canonical mapping is documented, the implementation must not claim that question slot 1 equals ontology, question slot 2 equals unity, and so on.

Likewise, the Members plugin must not invent canonical question wording merely because the protocol defines seven dimensions.

## Lite vs Full surfaces

### Lite public discovery surface

Owned by the public App/API/Protocol stack where implemented.

Purpose: low-friction educational reflection.

Default privacy model: no account required and no raw response persistence.

### Members authenticated reflection surface

Owned by OneGodian Members for WordPress member state.

Purpose: private member reflection, journey continuity, and optional self-declared stage.

Default privacy model: authenticated, consent-gated, private responses.

These two experiences may share principles but must not share scoring or identity-assignment behavior by assumption.

## Identity rule

No scoring engine may automatically assign a person the identity "OneGodian" or a Journey stage.

Any Journey stage in Members is self-selected by the member.

A Mapper result does not create formal membership, legal status, governmental status, credential status, governance authority, or organizational office.

## Future canonical question mapping

If the seven Members questions are later standardized against the Full Mapper dimensions, the protocol should define:

- question schema version
- dimension identifier
- approved wording
- revision history
- migration behavior for stored responses
- compatibility rules
- consent notice version
- scoring status, if any
- whether historical answers remain interpretable after wording changes

Until that exists, Members should retain administrator-configurable slots and avoid fabricated canonical wording.

## API and event boundary

Summary events may include non-sensitive Mapper state such as progress, self-selected Journey stage, visibility preference, and timestamps.

Raw belief answers must remain excluded from ordinary platform events, public profiles, generic analytics, and advertising systems.

## Production rule

Protocol documentation defines semantics and constraints. It does not by itself prove that a corresponding API route, application flow, synchronization bridge, or WordPress behavior is deployed in production.
