# Ping Identity CIAM Integration Lab

A planned workspace for PingFederate, PingOne and PingOne Advanced Identity Cloud integrations. These are distinct products with different release models; they are not interchangeable deployments.

Documentation checked 26 October 2026:
- [PingFederate release notes](https://docs.pingidentity.com/pingfederate/13.1/release_notes/pf_release_notes.html)
- [PingOne release notes](https://docs.pingidentity.com/pingone/release_notes/index.html)
- [AIC rapid channel changelog](https://docs.pingidentity.com/pingoneaic/release-notes/rapid-channel-changelog.html)

## First implementation

Connect a confidential backend to a licensed test provider using an established OIDC library. Keep provider configuration separate from protocol handling.

Planned areas:
- Authorization code with S256 PKCE, state and nonce.
- Server-side sessions and token exchange.
- Opaque refresh-token storage without token decoding.
- JWT validation using trusted issuer keys and explicit audience checks.
- PAR, consent binding and logout.
- Custom PingFederate adapter migration tests.

## Completion criteria

Demonstrate valid login, wrong state/nonce/audience, expired transaction, replay, key rotation and dependency timeout handling. Record provider edition, server version or cloud channel, library version and test outcome.

Use only synthetic accounts. Browser bundles must not contain confidential client credentials. Do not treat the existing request viewer as a complete login implementation.

See the shared [upgrade impact guide](https://github.com/sasidhar-iam/banking-iam-repo/blob/main/docs/PING-CHANGES-2026-10.md).

Status: repository starter; provider-backed implementations and compatibility testing remain planned.
