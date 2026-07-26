# `iclaim_claim_status_ipd_doc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iclaim_claim_status_ipd_doc_id | int(11) | NO | PRI | 0 |  |  |
| doc_name | varchar(250) | YES |  | NULL |  |  |
| base64_data | longblob | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| iclaim_claim_status_ipd_id | int(11) | YES | MUL | NULL |  |  |
| base64_data_decrypt | longblob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Reficlaim_claim_status_ipd6 | iclaim_claim_status_ipd_id | no | 1 |
| PRIMARY | iclaim_claim_status_ipd_doc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
