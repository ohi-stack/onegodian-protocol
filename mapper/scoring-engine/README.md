# OneGodian Belief Mapper — Scoring Engine

Version: v0.3-api
Updated: August 23, 2026

## Purpose

The scoring engine evaluates structured Belief Mapper responses and returns a limited educational alignment indicator. It is not an identity-assignment engine, membership engine, religious classifier, or legal-status determination.

## Canonical Runtime

The canonical runtime implementation is now served by `ohi-stack/onegodian-api`:

- `GET /api/v1/belief-mapper/questions`
- `POST /api/v1/belief-mapper/evaluate`

The public UI in `ohi-stack/onegodian-app` must consume this API rather than maintain independent scoring logic.

## Lite Input Contract

The Gen Alpha / Gen Beta Lite flow uses five named responses:

- `source`
- `truth`
- `purpose`
- `connection`
- `identity`

Allowed answers:

- `yes` = 2
- `not_sure` = 1
- `no` = 0

Exactly five unique question IDs are required. Maximum score: `10`.

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
  "version": "belief-mapper-lite-v0.3",
  "score": 7,
  "maxScore": 10,
  "classification": "Aligned",
  "summary": "...",
  "identityNotice": "This result describes answer alignment only...",
  "dataPolicy": "No name, email address, membership status, or account identifier is required..."
}
```

## Guardrails

- Validate exactly five answers and five unique canonical question IDs.
- Reject unsupported answer values.
- Do not infer age, religion, ethnicity, political views, health status, or other sensitive attributes.
- Do not persist raw belief responses by default.
- Do not use Mapper responses for advertising, lead scoring, or behavioral targeting.
- Do not create a member record from a Mapper result.
- Keep educational reflection and formal membership/declaration flows separate.

## Full Mapper

The full Algorithm specification contains seven mapping dimensions: ontology, unity, relationship, tradition, identity, community, and purpose. The five-question Lite experience is a youth-oriented discovery surface and does not supersede that canonical specification.

## Testing Minimum

The API test suite must verify:

- five canonical questions are exposed
- all `yes` answers return score 10 and Strong Alignment
- classification boundaries remain deterministic
- duplicate question IDs are rejected
- incomplete sets are rejected
- unsupported answer values are rejected by schema validation
- result language never assigns identity or membership

## Version Rule

If scoring, validation, safeguards, tests, API exposure, documentation, and repeatable deployment are not operational, that version is not production-ready.