# Welcome to the Banking IAM and Programming Lab

This project brings together practical CIAM examples and a small app for learning programming. You can use it to explore consent checks, OAuth request handling, Groovy policies and JavaScript basics.

Start with a small example, run the tests, and follow the code to see how the decision is made.

## Choose where to start

| If you want to… | Start here |
| --- | --- |
| Practise programming basics | Download the repository and open `index.html` |
| Understand PKCE and callback checks | [JavaScript examples](https://github.com/sasidhar-iam/banking-iam-repo/tree/main/javascript) |
| Explore consent and revocation | [Java examples](https://github.com/sasidhar-iam/banking-iam-repo/tree/main/java) |
| Understand scope-based access checks | [Groovy examples](https://github.com/sasidhar-iam/banking-iam-repo/tree/main/groovy) |
| Follow gateway processing steps | [Route designs](https://github.com/sasidhar-iam/banking-iam-repo/tree/main/routes) |

## What the CIAM examples demonstrate

Imagine a customer using a budgeting app to view account information.

1. The app starts an authorization request with a PKCE challenge, state and nonce.
2. An identity provider would authenticate the customer.
3. The callback helper checks state and the transaction age, then consumes the transaction so it cannot be reused.
4. A gateway would validate the access token before passing trusted claims to an access policy.
5. The consent service checks the customer, client, requested scope, expiry and revocation status before allowing access.

These are separate teaching components. They are not yet connected into a complete login and account-sharing service. Identity-provider authentication, token exchange and cryptographic token validation are integration work.

## Run the examples

Download or clone the [repository](https://github.com/sasidhar-iam/banking-iam-repo), then open a terminal in its folder.

### JavaScript

Requires Node.js 20 or later.

```sh
node --test javascript/pkce.test.mjs
```

The tests cover the standard S256 example, verifier limits, callback replay, state mismatch, transaction expiry and authorization URL construction.

To view an example authorization request:

```sh
node javascript/server.mjs
```

Open http://127.0.0.1:8080/demo/authorize-url. The viewer constructs a sample URL; it does not perform a login.

### Java

Requires JDK 17 or later. Create a `build` folder, then run:

```sh
javac -d build java/ConsentService.java java/ConsentServiceTest.java
java -cp build ConsentServiceTest
```

The consent example checks ownership, client binding, allowed scopes, expiry and revocation. Its data is held in memory and disappears when the process ends.

### Groovy

With Groovy installed:

```sh
groovy -cp groovy groovy/AccessPolicyTest.groovy
```

The policy checks a subject, expiry and an exact scope match. It expects claims from a trusted validation step; it does not verify a JWT signature.

## Use the learning app

Open `index.html` in your browser. It includes lessons, quizzes, side-by-side examples and a JavaScript practice pad. Progress is stored in that browser.

The practice pad runs code in the page and is not a sandbox. Only run code you trust, and keep credentials and personal information out of it.

## Read more

- [Architecture and trust boundaries](https://github.com/sasidhar-iam/banking-iam-repo/blob/main/docs/ARCHITECTURE.md)
- [Test scenarios](https://github.com/sasidhar-iam/banking-iam-repo/blob/main/docs/TEST-CASES.md)
- [Operations and troubleshooting](https://github.com/sasidhar-iam/banking-iam-repo/blob/main/docs/OPERATIONS.md)
- [Planned work](https://github.com/sasidhar-iam/banking-iam-repo/issues)
- [Automated checks](https://github.com/sasidhar-iam/banking-iam-repo/actions)

## Help improve the project

If an example is unclear or you find a problem, open an issue with the steps you tried and the result you expected. Small fixes and additional tests are welcome.

Read the [contribution guide](https://github.com/sasidhar-iam/banking-iam-repo/blob/main/CONTRIBUTING.md) and [security policy](https://github.com/sasidhar-iam/banking-iam-repo/blob/main/SECURITY.md) before sharing code or logs. Use sample data and only contribute material you have permission to publish.

The project uses the [MIT License](https://github.com/sasidhar-iam/banking-iam-repo/blob/main/LICENSE).
