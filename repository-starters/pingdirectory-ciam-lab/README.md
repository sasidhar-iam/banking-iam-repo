# PingDirectory CIAM Lab

A planned workspace for LDAP profile data, consent persistence and directory operations.

Documentation baseline: [PingDirectory 11.1.0.1 release notes](https://docs.pingidentity.com/pingdirectory/11.1/release_notes/pd_release_notes.html), checked 26 October 2026. Choose a supported target appropriate to your environment rather than assuming the newest line is the right one.

## First implementation

Define a synthetic consent schema, then implement Java persistence behind a repository interface. Keep business decisions independent from LDAP connection handling.

Planned areas:
- Sample LDIF and schema documentation with non-production identifiers.
- Subject/client-bound reads and owner-only revocation.
- Safe filter escaping, TLS validation and least-privilege bind access.
- Indexed search and paging.
- Cleanup, replication and recovery test records.

## Completion criteria

Test create/read/revoke, special-character subjects, two-client isolation, expired records, restart and replica convergence. Document how expiry differs from physical deletion.

Do not redistribute vendor binaries, licences or production schemas. See the shared [upgrade impact guide](https://github.com/sasidhar-iam/banking-iam-repo/blob/main/docs/PING-CHANGES-2026-10.md).

Status: repository starter; no directory integration has been implemented or validated here.
