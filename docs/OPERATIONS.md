# CIAM operations scenarios

## Customer login fails after key rotation
Check trusted issuer metadata, configured audience, key ID, JWKS reachability and cache age. Never bypass signature verification. Distinguish 401 validation failures from 403 policy denials. Record reason codes and correlation IDs, never raw tokens, cookies or authorization codes.

## Customer sees 403 after consent withdrawal
Confirm the consent is revoked, client and subject binding are correct, and downstream caches follow the intended invalidation policy. Do not restore withdrawn consent as an incident workaround.

## Callback fails intermittently
Check transaction expiry, duplicate callback delivery, browser cookie policy, session affinity/storage, parallel tabs and redirect URI configuration. Do not log the verifier or disable state checking.

Suggested metrics: callback errors by safe reason, token validation failures, authorization denials, consent decision latency and revocation propagation delay. Keep customer identifiers out of metric labels. Use synthetic probes and rehearsed rollback for gateway changes.
