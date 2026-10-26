# Contributing

Thanks for taking a look. You can help by fixing an example, improving an explanation, adding a useful test or reporting a problem.

## Report a problem

Open an issue with what you tried, what you expected and what happened. Include the relevant language or product version and a small example if possible.

Use made-up data. Remove passwords, tokens, cookies and customer details from screenshots and logs. For a security problem, follow [SECURITY.md](SECURITY.md).

## Make a change

1. Fork the repository and create a branch for your change.
2. Keep the change focused on one problem.
3. Add or update tests when behaviour changes.
4. Run the tests for the part you changed.
5. Open a pull request explaining the change and how you checked it.

If you could not run a test, mention that in the pull request.

## Check your work

For JavaScript:

```sh
node --test javascript/pkce.test.mjs
```

For Java, create a `build` folder first:

```sh
javac -d build java/ConsentService.java java/ConsentServiceTest.java
java -cp build ConsentServiceTest
```

For Groovy:

```sh
groovy -cp groovy groovy/AccessPolicyTest.groovy
```

For changes to the learning app, open `index.html` and check the affected lesson, quiz or practice feature in a browser.

## Keep examples useful

Explain any setup the reader needs. Include failure cases as well as successful ones. For product-specific routes or scripts, state the product version you tested.

Only contribute code you have permission to share. Keep attribution and licence notices where required. Describe what you implemented and tested accurately, including any tools or assistance relevant to the contribution.

Contributions are made under this repository's MIT License.
