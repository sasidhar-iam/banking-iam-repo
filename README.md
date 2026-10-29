# Banking IAM and Programming Lab

**Repository created:** 6 November 2025 (UTC), as recorded in [GitHub’s repository metadata](https://api.github.com/repos/sasidhar-iam/banking-iam-repo).


This repository brings together CIAM examples and a small programming learning app. It covers Java consent logic, JavaScript OAuth helpers, Groovy access checks, and basic lessons for practising code.

The examples are for learning and experimentation. Some parts run on their own; a complete login flow with an identity provider is still planned.

## What is here

| Location | Contents |
| --- | --- |
| `index.html`, `app.js`, `styles.css` | Programming lessons, Groovy and JavaScript examples, quizzes and a JavaScript practice pad |
| `javascript/` | PKCE helpers, callback checks, tests and a local authorization URL viewer |
| `java/` | In-memory consent management and tests |
| `groovy/` | Scope and expiry checks for claims that a gateway has already validated |
| `routes/` | Gateway route designs and processing steps |
| `docs/` | Architecture notes, test cases, operations notes and planned work |
| `fixtures/` | Sample data |
| `generate_cc_practice_pdfs.py` | A separate practice PDF generation script; requires Python and ReportLab |

## Open the learning app

Download the repository and open `index.html` in your browser. Lesson progress is saved in that browser's local storage.

The practice pad runs JavaScript in the page using `new Function`. It is not a sandbox. Only run code you understand and trust. Do not paste passwords, tokens or personal information into it.

## Run the CIAM examples

You need Node.js 20 or later for JavaScript, JDK 17 or later for Java, and Groovy for the Groovy examples.

From the repository folder:

```sh
node --test javascript/pkce.test.mjs
```

For Java, create a `build` folder, then run:

```sh
javac -d build java/ConsentService.java java/ConsentServiceTest.java
java -cp build ConsentServiceTest
```

For Groovy:

```sh
groovy -cp groovy groovy/AccessPolicyTest.groovy
```

To try the local authorization URL viewer:

```sh
node javascript/server.mjs
```

Open http://127.0.0.1:8080/demo/authorize-url. This displays an example request; it does not sign you in.

## Current scope

The Java consent store is in memory and loses its contents when the process stops. The Groovy policy checks scope and expiry; it does not verify token signatures. The route file describes a design and cannot be imported directly into PingGateway or ForgeRock IG.

Token exchange, ID-token validation, durable storage and vendor-specific gateway integrations are tracked in [issues](https://github.com/sasidhar-iam/banking-iam-repo/issues). See [test cases](docs/TEST-CASES.md) for implemented checks and planned integration tests.

The JavaScript PKCE tests passed during initial setup. Check the Actions tab for the latest CI results before relying on the examples.

## Contributing and security

Suggestions, corrections and small improvements are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before making changes and [SECURITY.md](SECURITY.md) for security reporting.

Use sample data only. Do not upload employer-owned code, live credentials or customer information.

## References

- [OAuth security best current practice](https://www.rfc-editor.org/rfc/rfc9700.html)
- [PKCE specification](https://www.rfc-editor.org/rfc/rfc7636.html)

## Licence

This repository uses the [MIT License](LICENSE).

## Product-specific labs

- [PingAccess CIAM Lab](https://github.com/sasidhar-iam/pingaccess-ciam-lab): access policies, Groovy examples and route designs.
- [PingDirectory CIAM Lab](https://github.com/sasidhar-iam/pingdirectory-ciam-lab): LDAP/LDIF utilities and a Java lookup example.
- [Ping Identity CIAM Lab](https://github.com/sasidhar-iam/ping-identity-ciam-lab): PKCE, callbacks and opaque refresh-token request handling.

Read the [Ping release changes and CIAM impact guide](docs/PING-CHANGES-2026-10.md), checked 26 October 2026, before planning an upgrade. These labs contain educational components; live vendor integration testing remains separate.

## Practical CIAM scenarios

| Scenario | Guide and runnable examples |
| --- | --- |
| Eight-day retention, purge sizing and day-by-day disk growth | [PingDirectory operations](https://github.com/sasidhar-iam/pingdirectory-ciam-lab/blob/main/docs/operations/README.md) |
| Multi-master replication and NoSQL profile migration | [Replication](https://github.com/sasidhar-iam/pingdirectory-ciam-lab/blob/main/docs/operations/replication.md) and [migration](https://github.com/sasidhar-iam/pingdirectory-ciam-lab/blob/main/docs/operations/migration-and-token-stores.md) |
| SAML-to-OIDC federation with LDAP, AD and database users | [Multi-store federation](https://github.com/sasidhar-iam/ping-identity-ciam-lab/blob/main/docs/saml-oidc-multi-store.md) |
| Organic ADR refresh-token migration to PingDirectory | [Open Banking migration routing](https://github.com/sasidhar-iam/pingaccess-ciam-lab/blob/main/docs/open-banking-refresh-migration.md) |

Each lab distinguishes tested local models from vendor configuration examples and integration work that remains to be completed.

## ForgeRock IDM / PingIDM vulnerability review

Read the [IDM 7.1+ CVE review](https://github.com/sasidhar-iam/ping-identity-ciam-lab/blob/main/docs/security/pingidm-cve-review-2026-10-29.md), checked 29 October 2026. It covers RCS access control, query-filter disclosure, LDAP connector versions, CIAM regression checks and vendor-verification gaps. It is a public-source review, not a scan of any deployment.
