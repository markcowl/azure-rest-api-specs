# Classification

For each violation decide one of three labels, and always record the **evidence**.

| Label | Meaning | Action |
| --- | --- | --- |
| `user-error` | The flagged encoding genuinely differs from what the author intended on the wire. The rule caught a real modeling bug. | Suppress in-place with the requester's justification. |
| `false-positive` | The encoding matches the author's intent; the rule's expectation is wrong (too strict, wrong comparison target, legacy pattern it doesn't model). | Do **not** suppress. Report so the rule can be fixed. |
| `indeterminate` | Intent cannot be established from available evidence. | Do **not** suppress. Report as indeterminate. |

## General procedure

1. Start from the **ground-truth** row (actual vs expected the rule computed).
2. Determine **author intent** — what the operation is supposed to return / do on
   the wire — from, in order of strength:
   - the generated **Swagger** (what clients actually see);
   - the **spec source** (declared responses, `LroHeaders`, template used, doc
     comments, existing suppressions/comments explaining intent);
   - the **rule's PR** (description, message text, and especially its test cases,
     which encode intended pass/fail examples);
   - **repo conventions** and the requester's stated policy.
3. Compare intent to the encoding:
   - encoding ≠ intent → **user-error**;
   - encoding = intent but rule flagged it → **false-positive**;
   - intent unclear / conflicting → **indeterminate**.
4. When the requester states a policy directive ("actions must return their
   intended response type", "delete must be void"), treat it as ground truth for
   intent and apply it uniformly — don't re-litigate each instance.

## Worked example: `lro-response-mismatch`

This rule compares an ARM LRO's **encoded `finalResult`** (from `getLroMetadata`)
against the expected result for the operation shape. Policy used to classify:

- **PUT / PATCH must resolve `finalResult` to the resource type.**
  - `finalResult = void` (custom `LroHeaders`/response dropped
    `FinalResult=<resource>`) → **user-error**: the LRO yields no resource.
  - `finalResult` = the resource type → pass.
- **POST actions must return their intended response** (the body of any declared
  200 response).
  - encoded `finalResult` ≠ the declared 200 body (e.g. `void`, or a
    double-wrapped `ArmXResponse is ArmResponse<T>` envelope instead of `T`) →
    **user-error**: the action is not returning its intended type correctly.
  - encoded `finalResult` = the 200 body → pass.
- **DELETE must be void on the wire.**
  - `finalResult` ends in `OperationStatusResult` (a status envelope that is not
    what is returned on the wire) → **user-error**: incorrectly encoded; suppress.
  - `finalResult` = a resource/body the operation **deliberately returns** for
    backward compatibility (declared response body matches `finalResult`) →
    **false-positive**: the rule flags any non-void delete result, but here it
    matches intent.
- **Legacy parent-modeled sub-resource PUT** (e.g. a `PrivateEndpointConnection`
  `createOrUpdate` whose `finalResult` correctly equals the sub-resource it
  creates, while the rule compares against the interface's *parent* resource
  type) → **false-positive**: the rule's expected target is wrong for the pattern.

The transferable lesson: the same computed mismatch can be a user-error in one
context and a false-positive in another — the deciding factor is always **what
the wire response is meant to be**, which you establish from Swagger + source +
the requester's policy, not from the rule alone.
