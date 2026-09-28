# Protocol Release Checklist

Before tagging or representing a protocol revision as release-ready:

1. Run `node scripts/validate-contracts.mjs`.
2. Review schema changes for backward compatibility and explicit required fields.
3. Review authority, verification, and legal-positioning documents for consistency.
4. Confirm examples do not contain secrets or live endpoints.
5. Validate every consuming runtime separately; this repository does not prove OMOS, OLLM, ACC, or Oru’Valen deployment.
6. Record the exact commit SHA, review evidence, and human approval before any protected merge or release publication.
