# Security policy

This is a learning repository. The examples have not been reviewed for production use, and there are no supported release versions yet. Fixes will be made on the main branch.

## Report a security problem

If GitHub shows a **Report a vulnerability** button under the repository's Security tab, please use it to send a private report.

If that option is unavailable, open an issue asking for a private way to contact the maintainer. Do not include vulnerability details, exploit code or sensitive information in that public issue. There is no dedicated security email address listed at present.

A useful private report explains the affected file, the problem, steps to reproduce it with sample data and the possible impact. There is no guaranteed response time.

## Before running the examples

- Use sample accounts and data.
- Keep passwords, access tokens, private keys and customer information out of the repository, issues and logs.
- Only run trusted code in the browser practice pad. It executes in the page and is not isolated in a sandbox.
- The Groovy policy expects claims from a trusted token-validation step. It does not verify signatures.
- The consent example uses an in-memory store and is not a complete consent platform.
- Review and test any example before connecting it to real systems.

If you accidentally publish a secret, revoke or rotate it immediately. Deleting the file alone does not remove the secret from Git history.
