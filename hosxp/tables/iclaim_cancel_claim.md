# `iclaim_cancel_claim`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iclaim_cancel_claim_id | int(11) | NO | PRI | 0 |  |  |
| transaction_uid | varchar(250) | YES |  | NULL |  |  |
| transaction_no | varchar(250) | YES |  | NULL |  |  |
| reason | int(11) | YES |  | NULL |  |  |
| request_type | int(11) | YES |  | NULL |  |  |
| request_json | text | YES |  | NULL |  |  |
| respones_json | text | YES |  | NULL |  |  |
| message_status | char(10) | YES |  | NULL |  |  |
| message_text | text | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| iclaim_opd_discharge_id | int(11) | YES |  | NULL |  |  |
| cancel_claim_status | char(1) | YES |  | NULL |  |  |
| cancel_claim_staff | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | iclaim_cancel_claim_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
