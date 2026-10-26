# Implementation backlog

These are future integrations, not completed capabilities.

## 1. Implement OIDC token exchange and ID-token validation

Use a standards library against a local test IdP. Validate signature, issuer, audience, nonce, exp and algorithm allowlist. Tests: wrong issuer/audience/nonce, expired token, key rollover; never log tokens.

## 2. Add durable consent persistence and revocation events

Replace in-memory storage with transactional persistence and outbox events. Tests: concurrent revoke/access, restart recovery, cross-customer isolation, duplicate requests and bounded cache invalidation.

## 3. Build versioned PingGateway route integration

Select and document a supported product version. Convert generic routes to verified importable configuration. Validate JWT before Groovy. Tests: spoofed headers, invalid JWT, insufficient scope and backend outage.

## 4. Add refresh-token rotation and reuse-detection lab

Use an established authorization server, not a custom issuer. Demonstrate atomic token rotation and family invalidation. Tests: replay, concurrent refresh, logout, expired token and no secret logging.

## 5. Add PAR and confidential client integration lab

Implement provider-backed PAR with exact redirect URI registration and protected client authentication. Tests: expired/replayed request_uri, client mismatch and malformed scope. Do not claim CDR certification.

## 6. Create CIAM operational telemetry and incident lab

Add redacted structured events, correlation IDs and bounded metric labels. Tests: no tokens/PII in logs, alert on error-rate threshold and documented key-rotation troubleshooting.
