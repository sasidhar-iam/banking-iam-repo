# Ping changes and their impact on CIAM code

Checked: 26 October 2026. This is a dated snapshot, not an automatically updated version feed.

Release facts below come from Ping documentation. The impact assessments and test plans are engineering recommendations; they are not vendor compatibility guarantees. No vendor server or SDK upgrade was executed for this document.

## Version snapshot

| Product | Current documented release reviewed | How to interpret it |
| --- | --- | --- |
| PingAccess | 9.1.1, October 2026 | Review the 9.0 and 9.1 transitions as well as the patch |
| PingFederate | 13.1.4, October 2026 | Review 13.1 platform changes before upgrading custom extensions |
| PingDirectory suite | 11.1.0.1, September 2026 | 11.1 is a short-term support line; the patch is an administrative version increment |
| PingOne | Continuously delivered service | Track announcements, API behaviour and separately versioned SDKs |
| PingOne Advanced Identity Cloud | Rapid channel 24273.0, 22 October 2026 | Channel-specific build; not a universal tenant version |

A newer version number alone does not determine the right production target. Confirm your installed patch, support entitlement, operating system, JDK, SDK and integration-kit compatibility with Ping. Do not assume an older line is unsupported without checking its lifecycle.

## PingAccess: templates, Java and extensions

Documented changes: Java 11 support ended with 9.0. In 9.1, inline scripts/styles in PingAccess templates require CSP nonces, and the private-key JWT audience setting adds issuer-based choices. Release 9.1.1 fixes an access-policy bypass involving path traversal. The notes also list a Groovy/Java 17+ incompatibility involving SDK ResponseBuilder and a 9.1.0-to-9.1.1 certificate-selection upgrade issue.

Source: [PingAccess release notes](https://docs.pingidentity.com/pingaccess/9.1/release_notes/pa_release_notes.html).

Engineering impact: inventory Java/Groovy dependencies and custom challenge templates. Add supported template nonces rather than weakening CSP. Check client-assertion audience configuration against the target authorization server. Review certificate bindings and the documented upgrade procedure in a representative cluster.

Required evidence: template rendering without CSP errors, policy denial across normalized URL forms, Groovy rule execution, certificate trust after upgrade, and token-provider authentication. Keep negative URL tests confined to an authorized test environment.

## PingFederate: custom adapters need a platform review

Documented changes: 13.1 migrates to Jakarta EE 9 and adds Redis-backed storage for selected services. Release 13.1.4 includes fixes for REST datastore mTLS connection handling, external JWKS timeouts, bulk export omissions and backend socket read timeouts. Earlier 13.1 patches address PAR and cookieless Authentication API defects.

Source: [PingFederate release notes](https://docs.pingidentity.com/pingfederate/13.1/release_notes/pf_release_notes.html).

Engineering impact: rebuild and test adapters against the target SDK and supported libraries. Review servlet-related javax imports individually for Jakarta equivalents; do not replace every javax package mechanically. Compare Admin API exports before and after migration. If adopting Redis, test restart, outage and revocation behaviour instead of assuming an identical storage contract.

Required evidence: adapter loading, Authentication API callbacks, external IdP login through PAR, mTLS attribute retrieval, signing-key rollover and configuration round trips.

## PingDirectory: schedule cleanup without changing consent semantics

Documented changes: 11.1.0.0 adds Java 25 runtime support and scheduled cleanup tasks for data including PingFederate sessions and grants. These offer maintenance-window scheduling instead of the existing plugin's startup-relative 24-hour schedule. The 11.1.0.1 increment adds no server-specific release changes.

Source: [PingDirectory release notes](https://docs.pingidentity.com/pingdirectory/11.1/release_notes/pd_release_notes.html).

Engineering impact: review purge scheduling, not just retention values. Distinguish an expired authorization grant from a record that has physically been deleted. Do not treat grant cleanup as equivalent to replication changelog retention or ForgeRock CTS cleanup.

Required evidence: eligible and unexpired records, LDAP search/index performance, replication convergence, cleanup after restart, disk growth and purge duration. Preserve sample counts before and after each test. Verify the selected JVM against your extensions; added Java 25 support does not force every application to move to Java 25.

## Ping Identity cloud services: token contracts are changing

Ping Identity is the vendor, not one versioned server. In this guide, its cloud scope means PingOne and Advanced Identity Cloud; PingFederate remains a separate server product.

Documented announcement: from 2 March 2027, PingOne will issue only opaque refresh tokens, use key-rotation-policy signing keys, and include typ=at+jwt in access tokens. These are announced future changes, not changes claimed to have already taken effect on the snapshot date.

Source: [PingOne release notes](https://docs.pingidentity.com/pingone/release_notes/index.html).

Engineering impact: remove JWT decoding, claim extraction and three-segment validation from refresh-token handling. Store and submit refresh tokens as opaque strings. Keep access-token and ID-token validation separate, maintain issuer/audience checks, and test key rollover and token-type handling with a real validator.

Advanced Identity Cloud rapid build 24273.0 changes scope requirements for authorization-code/PAR requests containing authorization_details when Rich Authorization Requests with RCS is enabled. This is conditional and channel-specific, not permission to drop scope from every OAuth request.

Source: [AIC rapid channel changelog](https://docs.pingidentity.com/pingoneaic/release-notes/rapid-channel-changelog.html).

## What changes in this repository?

| Existing component | Assessment | Next change to prove compatibility |
| --- | --- | --- |
| javascript/pkce.mjs | Constructs requests and checks callback transactions; does not parse refresh tokens | Add provider-backed token exchange and opaque-token storage tests |
| java/ConsentService.java | Independent in-memory domain logic | Add LDAP-backed persistence contract tests before claiming PingDirectory compatibility |
| groovy/AccessPolicy.groovy | Generic checks over trusted claims; no PingAccess SDK imports | Build a separate vendor adapter and run it on the supported target JVM |
| routes/ciam-routes.json | Vendor-neutral design, not importable configuration | Produce version-specific exports and verify them in a test deployment |
| app.js learning pad | Uses new Function in the page | Treat it as a trusted local learning tool; test hosting CSP separately from PingAccess templates |

No source changes are automatically justified by a release number. Reproduce an incompatibility, make a focused change and attach test evidence.

## Regression plan

| Scenario | Expected result |
| --- | --- |
| Valid code + PKCE, wrong verifier, reused code | Correct success or denial without leaking secrets |
| PAR with external IdP and consent flow | Client binding and request expiry remain enforced |
| Old signing key, new signing key, unknown kid | Controlled rotation; invalid tokens denied |
| Opaque refresh token containing no periods | Stored unchanged and submitted to token endpoint |
| Customer withdraws consent during an active session | Resource access denied according to the defined propagation SLA |
| Directory cleanup overlaps replication traffic | No loss of live grants; bounded operational impact |
| Cloud MFA/JWKS dependency times out | Bounded latency and clear error reporting |
| Custom adapter runs on target server/JVM | No linkage or class-loading failures |

Run these against the actual configured products. Current repository unit tests cannot certify the scenarios above.

## Upgrade worksheet

Record the source/target patches, JDK, extension versions, configuration export hashes, rollback prerequisites, test owner and result. Establish latency/error/replication baselines. Rehearse restore on non-production data and confirm whether downgrade is supported; a binary rollback may not reverse a data or configuration migration.

## Product-specific repositories

The prepared starters have now been populated as separate public labs:

- [PingAccess CIAM Lab](https://github.com/sasidhar-iam/pingaccess-ciam-lab): access policies and organic refresh-token migration routing.
- [PingDirectory CIAM Lab](https://github.com/sasidhar-iam/pingdirectory-ciam-lab): purge sizing, daily disk reports, replication and profile migration.
- [Ping Identity CIAM Lab](https://github.com/sasidhar-iam/ping-identity-ciam-lab): OAuth helpers and SAML/OIDC multi-store federation.

The original repository-starters folders remain planning snapshots. Consult each live lab's README for implemented examples, checks and remaining vendor integration work.
