# OneGodian Belief Mapper — Frontend

Version: v0.2-prototype
Updated: August 23, 2026

## Purpose

The Belief Mapper is the public Experience Layer entry point defined by the OneGodian Algorithm. It is a voluntary reflection interface that helps a user compare their existing beliefs with documented OneGodian concepts without converting, enrolling, or assigning an identity.

The canonical public implementation lives in `ohi-stack/onegodian-app` at `/belief-mapper`.

## Gen Alpha / Gen Beta Lite Flow

The youth-facing prototype uses five tap-only questions derived from the full seven mapping dimensions:

1. One source
2. One truth / unity
3. Purpose
4. Relationship to something greater
5. Belief-identity awareness

Answer values are intentionally simple:

- Yes = 2
- Not sure = 1
- No = 0

The UI returns an educational reflection result only:

- 0–4: Explorer
- 5–7: Aligned
- 8–10: Strong Alignment

A score MUST NOT automatically declare that a person is OneGodian, create membership, assign a religious identity, or create a legal status. Identity is self-declared by the individual.

## UX Requirements

- mobile-first
- one question per screen
- large tap targets
- visible progress
- no typing required for the Lite flow
- completion target under 30 seconds
- plain-language result explanation
- restart control
- clear route to educational material

## Privacy & Youth Safeguards

Because belief data is sensitive, especially for minors:

- no account is required for the Lite prototype
- do not persist answers by default
- do not use answers for advertising or behavioral targeting
- do not infer or sell religious/belief profiles
- do not share results without an explicit user action
- any future saved profile requires explicit consent and a separately documented retention policy
- parental/guardian requirements must be reviewed before adding child accounts or collecting personal information from children

## Full Mapper Boundary

The canonical Algorithm white paper defines seven mapping dimensions: ontology, unity, relationship, tradition, identity, community, and purpose. The five-question Lite experience is a discovery interface, not a replacement for the full mapper specification.

## Production Definition of Done

The Mapper may be labeled production-ready only when:

- UI builds successfully in the canonical app
- scoring logic is versioned and tested
- accessibility is validated
- privacy disclosures are published
- analytics do not capture belief answers by default
- API contracts are documented
- error and fallback states are implemented
- content and classification wording have completed legal/compliance review
- deployment is repeatable

## Planned Extensions

- full seven-dimension mapper
- multilingual question sets
- optional saved reflection history for eligible users with consent
- educational content recommendations
- accessible audio mode
- age-appropriate experience modes
- member onboarding as a separate, affirmative workflow

The Belief Mapper remains part of the ONEGODIAN, LLC software/education infrastructure. INO membership or governance functions must remain separate and require their own explicit process.