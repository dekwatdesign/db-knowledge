# `iclaim_ipd_discharge`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iclaim_ipd_discharge_id | int(11) | NO | PRI | 0 |  |  |
| reserve_no | varchar(200) | YES |  | NULL |  |  |
| reserve_uid | varchar(200) | YES |  | NULL |  |  |
| transaction_no | varchar(200) | YES |  | NULL |  |  |
| transaction_uid | varchar(200) | YES |  | NULL |  |  |
| claim_no | varchar(200) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| request_json | text | YES |  | NULL |  |  |
| respones_json | text | YES |  | NULL |  |  |
| message_status | varchar(10) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| iclaim_ipd_admission_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | iclaim_ipd_discharge_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
