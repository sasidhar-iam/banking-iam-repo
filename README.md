# CIAM Engineering Lab

Practical customer identity examples in Java, Groovy and JavaScript, maintained by Sasidhar. A learning portfolio for engineers exploring authentication, authorisation, consent and gateway design.

## Start here

| Module | Implemented behaviour | Run |
|---|---|---|
| JavaScript | S256 PKCE, random state/nonce, expiring single-use callback transaction | `node --test javascript/*.test.mjs` |
| Java | Subject/client-bound consent, scope allowlist, expiry and owner-only revocation | `mkdir -p build && javac -d build java/*.java && java -cp build ConsentServiceTest` |
| Groovy | Fail-closed scope and expiry policy for already validated claims | `groovy -cp groovy groovy/AccessPolicyTest.groovy` |
| Routes | Vendor-neutral gateway processing order and status contracts | Read `routes/ciam-routes.json` |

Requires Node.js 20+, JDK 17+, and Groovy 2.4+ (for the relevant modules). No npm dependencies. Windows PowerShell: run `New-Item -ItemType Directory -Force build`, `javac -d build java/ConsentService.java java/ConsentServiceTest.java`, then `java -cp build ConsentServiceTest`. Use `node --test javascript/pkce.test.mjs` on Windows.

Try `node javascript/server.mjs`, then open http://127.0.0.1:8080/demo/authorize-url. This local viewer constructs an illustrative authorization URL; it does not perform login. All example.test hosts and customer records are synthetic.

## Real implementation journey

1. A customer starts login; the client creates a PKCE verifier, state and nonce.
2. A trusted identity provider authenticates the customer.
3. The callback transaction is checked and consumed. Token exchange and ID-token validation remain integration work.
4. A gateway validates access tokens before handing trusted claims to policy code.
5. The consent model binds permission to customer, client, scope and expiry.
6. The gateway checks consent before accessing account data; revocation removes that permission.

The modules are independently runnable teaching components, not an integrated authorization server. No password grant, home-grown token issuer or fake JWT validation is included. Groovy policy does not validate JWT signatures. The route file is a design contract, not a PingGateway/ForgeRock IG import. No claim of CDR/FAPI certification or production readiness is made.

See [architecture](docs/ARCHITECTURE.md), [test scenarios](docs/TEST-CASES.md), [operations](docs/OPERATIONS.md), [backlog](docs/BACKLOG.md), and [contributing](CONTRIBUTING.md).

## References

- https://www.rfc-editor.org/rfc/rfc9700.html — OAuth security best current practice.
- https://www.rfc-editor.org/rfc/rfc7636.html — PKCE and the S256 test vector.

Licensed under MIT. These are original educational examples, not code from any employer, bank or client.
