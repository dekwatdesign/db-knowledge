# `iclaim_claim_status_ipd`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iclaim_claim_status_ipd_id | int(11) | NO | PRI | 0 |  |  |
| reserve_no | varchar(200) | YES |  | NULL |  |  |
| reserve_uid | varchar(200) | YES |  | NULL |  |  |
| transaction_no | varchar(200) | YES |  | NULL |  |  |
| transaction_uid | varchar(200) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| claim_status | varchar(200) | YES |  | NULL |  |  |
| payment_date | date | YES |  | NULL |  |  |
| total_approve_amount | double(15,3) | YES |  | NULL |  |  |
| batch_number | varchar(200) | YES |  | NULL |  |  |
| claim_status_desc | varchar(200) | YES |  | NULL |  |  |
| message_status | varchar(10) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| iclaim_reservation_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Reficlaim_reservation4 | iclaim_reservation_id | no | 1 |
| PRIMARY | iclaim_claim_status_ipd_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
