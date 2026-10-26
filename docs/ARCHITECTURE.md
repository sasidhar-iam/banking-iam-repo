# Trust boundaries and implementation decisions

Browser → trusted identity provider → confidential backend/session → token-validating gateway → consent decision → account service.

The browser is untrusted. Never accept a subject, role or consent owner from an arbitrary request body. In Java, subject arguments represent trusted caller context; the library itself cannot authenticate callers. Keep client secrets out of browser code. Store callback transactions in an encrypted or server-side session with secure HttpOnly SameSite cookies, CSRF protection and transaction isolation for multiple tabs. The example session object models one transaction per session.

Before invoking Groovy policy, validate signature with an algorithm allowlist and trusted issuer keys, issuer, audience, expiry, not-before and required token type. Handle key rollover with bounded cache and refresh. Reject ambiguous/malformed claims. The policy is an additional authorization step, never an authentication mechanism.

Consent uses immutable records and synchronized transitions for a single process. Production needs durable storage, database transactions, audit/outbox delivery, tenant isolation, idempotency, pagination and revocation propagation. TTL is limited to 90 days solely as a demo policy, not a statement of CDR rules. Consent revocation in this model does not revoke identity-provider tokens.

Deployment targets: adapt the policy behind PingAccess/PingGateway token validation; configure OAuth/OIDC with PingFederate, PingOne or another standards-compliant provider. Vendor-specific imports require verification against the selected product/version. Do not import the generic route contract directly.
