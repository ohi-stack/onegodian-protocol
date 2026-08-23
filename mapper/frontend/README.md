# OneGodian Belief Mapper — Frontend

Version: v0.3-api-backed
Updated: August 23, 2026

## Purpose

The Belief Mapper is the public Experience Layer entry point defined by the OneGodian Algorithm. It is a voluntary reflection interface that helps a user compare their existing beliefs with documented OneGodian concepts without converting, enrolling, or assigning an identity.

The canonical public implementation lives in `ohi-stack/onegodian-app` at `/belief-mapper`.

## Runtime Architecture

The public application no longer owns the canonical scoring logic. It sends the five structured answers to `ohi-stack/onegodian-api`:

`POST /api/v1/belief-mapper/evaluate`

The API returns the score, classification, summary, identity notice, data-policy statement, and engine version. This prevents scoring drift between frontends and establishes one versioned source of truth.

## Gen Alpha / Gen Beta Lite Flow

The youth-facing flow uses five tap-only questions derived from the full seven mapping dimensions:

1. One source
2. One truth / unity
3. Purpose
4. Relationship to something greater
5. Belief-identity awareness

Answer choices are `Yes`, `Not sure`, and `No`. The API maps those values to the documented 2/1/0 scoring scale and returns only an educational alignment result:

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
- loading state during evaluation
- explicit API failure state
- restart control
- plain-language result explanation
- route to educational material

## Privacy & Youth Safeguards

Because belief data is sensitive, especially for minors:

- no account is required for the Lite experience
- no name, email address, or membership identifier is sent with the scoring request
- do not persist answers by default
- do not use answers for advertising or behavioral targeting
- do not infer or sell religious/belief profiles
- do not share results without an explicit user action
- any future saved profile requires explicit consent and a separately documented retention policy
- parental/guardian and child-privacy requirements must be reviewed before adding child accounts or persistent personal profiles

## Full Mapper Boundary

The canonical Algorithm white paper defines seven mapping dimensions: ontology, unity, relationship, tradition, identity, community, and purpose. The five-question Lite experience is a discovery interface, not a replacement for the full mapper specification.

## Production Definition of Done

The Mapper may be labeled v1.0 Production only when:

- UI build passes in the canonical app
- API tests pass in the canonical API service
- scoring logic is versioned and deterministic
- accessibility is validated
- privacy disclosures are published
- analytics exclude raw belief answers by default
- error handling is operational
- CORS/environment configuration is verified for production domains
- content and classification wording complete legal/compliance review
- deployment is repeatable and monitored

## Planned Extensions

- full seven-dimension mapper
- multilingual question sets
- optional saved reflection history for eligible users with explicit consent
- educational content recommendations
- accessible audio mode
- age-appropriate experience modes
- member onboarding as a separate affirmative workflow

The Belief Mapper remains part of the ONEGODIAN, LLC software/education infrastructure. INO membership or governance functions remain separate and require their own explicit process.