# `iclaim_check_claim_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iclaim_check_claim_status_id | int(11) | NO | PRI | 0 |  |  |
| transaction_no | varchar(250) | YES |  | NULL |  |  |
| transaction_uid | varchar(250) | YES |  | NULL |  |  |
| claim_status | varchar(50) | YES |  | NULL |  |  |
| claim_status_desc | varchar(250) | YES |  | NULL |  |  |
| payment_date | date | YES |  | NULL |  |  |
| total_approve_amount | double(15,3) | YES |  | NULL |  |  |
| batch_number | varchar(250) | YES |  | NULL |  |  |
| request_json | text | YES |  | NULL |  |  |
| respones_json | text | YES |  | NULL |  |  |
| message_status | char(10) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| iclaim_opd_discharge_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_iclaim_opd_discharge_id | iclaim_opd_discharge_id | no | 1 |
| PRIMARY | iclaim_check_claim_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
