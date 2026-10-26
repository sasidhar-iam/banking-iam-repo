# Test inventory

| ID | Scenario | Expected | Evidence |
|---|---|---|---|
| JS-01 | RFC S256 verifier vector | Exact expected challenge | Automated JS |
| JS-02 | Invalid verifier length | Reject | Automated JS |
| JS-03 | Two login attempts | Different state | Automated JS |
| JS-04 | Replayed callback | Reject | Automated JS |
| JS-05 | Wrong state | Reject and consume | Automated JS |
| JS-06 | Expired callback | Reject | Automated JS |
| JS-07 | Provider error | Reject | Automated JS |
| JS-08 | HTTP issuer | Reject | Automated JS |
| JAVA-01 | Bound customer/client/scope | Allow | Automated Java |
| JAVA-02 | Wrong customer/client/scope | Deny | Automated Java |
| JAVA-03 | Other customer revokes | Reject; original still valid | Automated Java |
| JAVA-04 | Revoked consent | Deny | Automated Java |
| JAVA-05 | Unsupported scope | Reject | Automated Java |
| JAVA-06 | Exact expiry boundary | Deny | Automated Java |
| GR-01 | Exact scope and valid claims | Allow | Automated Groovy |
| GR-02 | Expired, missing subject, wrong type, prefix scope, null | Deny | Automated Groovy |
| INT-01 | Forged JWT/wrong issuer/audience | 401 | Future provider integration |
| INT-02 | Valid token, insufficient scope | 403 | Future gateway integration |
| INT-03 | Consent revoked across two nodes | Immediate bounded denial | Future durable-store integration |

JavaScript tests run locally during initial preparation. Java and Groovy require CI/toolchains; inspect Actions results before claiming those pass. Integration scenarios are acceptance criteria, not completed tests.
