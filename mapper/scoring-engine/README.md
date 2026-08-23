# OneGodian Belief Mapper — Scoring Engine

Version: v0.2-prototype
Updated: August 23, 2026

## Purpose

The scoring engine evaluates structured Belief Mapper responses and returns a limited educational alignment indicator. It is not an identity-assignment engine, membership engine, religious classifier, or legal-status determination.

## Lite Input Contract

The Gen Alpha / Gen Beta Lite flow currently uses five responses, each encoded as:

- `2` — Yes
- `1` — Not sure
- `0` — No

Maximum score: `10`.

## Lite Classification

| Score | Result | Meaning |
| --- | --- | --- |
| 0–4 | Explorer | User is still exploring the concepts presented. |
| 5–7 | Aligned | User expressed meaningful alignment with several OneGodian concepts. |
| 8–10 | Strong Alignment | User expressed strong alignment with the concepts presented. |

The engine MUST NOT return `OneGodian` as an automatically assigned identity. A person may identify as OneGodian only through their own affirmative self-identification and any separate membership/declaration process that applies.

## Required Output

```json
{
  "version": "belief-mapper-lite-v0.2",
  "score": 7,
  "max_score": 10,
  "classification": "aligned",
  "identity_assigned": false,
  "membership_created": false
}
```

## Guardrails

- Validate that the Lite request contains exactly five integer responses.
- Reject values outside `0`, `1`, or `2`.
- Do not infer age, religion, ethnicity, political views, health status, or other sensitive attributes.
- Do not persist raw belief responses by default.
- Do not use Mapper responses for advertising, lead scoring, or behavioral targeting.
- Do not create a member record from a Mapper result.
- Keep educational reflection and formal membership/declaration flows separate.

## Full Mapper

The full Algorithm specification contains seven mapping dimensions: ontology, unity, relationship, tradition, identity, community, and purpose. Future versions may support dimension-specific weighting, but any expansion must remain transparent, documented, consent-based, and independently testable.

## Testing Minimum

Production tests must include:

- all-zero input returns Explorer
- all-two input returns Strong Alignment
- boundary values 4/5 and 7/8 classify correctly
- invalid length is rejected
- negative and >2 values are rejected
- floats/strings/nulls are rejected
- response never sets `identity_assigned` or `membership_created` to true

## Version Rule

If scoring, validation, safeguards, tests, and documentation are not operational and repeatable, that version is not production-ready.