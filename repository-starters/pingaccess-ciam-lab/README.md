# PingAccess CIAM Lab

A planned workspace for PingAccess policy, template and upgrade examples.

Documentation baseline: [PingAccess 9.1.1 release notes](https://docs.pingidentity.com/pingaccess/9.1/release_notes/pa_release_notes.html), checked 26 October 2026. Product packages and licences are not included.

## First implementation

Build a small protected API integration in a licensed test environment. Keep generic policy logic separate from vendor SDK code and record the exact server, JVM and SDK versions.

Planned areas:
- Custom Java rule adapter and Groovy integration.
- Challenge template migration and browser validation.
- Admin API export comparison and repeatable deployment.
- Certificate rotation and failure recovery.
- Positive and negative authorization regression tests.

## Completion criteria

Include setup instructions, synthetic fixtures, expected results and captured test outcomes. A successful unit test is not evidence that the rule runs inside PingAccess.

Never commit server licences, exported secrets or customer configuration. Use the shared [upgrade impact guide](https://github.com/sasidhar-iam/banking-iam-repo/blob/main/docs/PING-CHANGES-2026-10.md) for the initial investigation.

Status: repository starter; no vendor integration has been implemented or validated here.
