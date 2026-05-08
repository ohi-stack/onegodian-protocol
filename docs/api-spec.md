# API Specification

Version: v0.1-draft
Status: Working Draft

## Purpose

This document defines the foundational API structure for systems implementing the OneGodian Protocol™.

## Core Endpoints

### Health

GET /api/health

Returns:
- service status
- version
- timestamp

### Alignment Evaluation

POST /api/alignment/evaluate

Input:
- user responses
- optional metadata

Output:
- alignment score
- classification
- summary

### Belief Mapper

POST /api/mapper/run

Input:
- question responses

Output:
- mapper result object
- alignment interpretation
- declaration eligibility

### Protocol Verification

POST /api/protocol/verify

Input:
- protocol payload

Output:
- schema validation
- governance checks
- verification status

## Governance Requirements

All API implementations should support:

- authentication
- authorization
- deterministic logging
- UTC timestamps
- immutable execution records

## Future Additions

- OpenAPI specification
- SDK generation
- middleware integration
- registry services
- agent orchestration hooks
