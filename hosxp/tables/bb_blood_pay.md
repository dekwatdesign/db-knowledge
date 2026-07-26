# `bb_blood_pay`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bb_blood_pay_id | int(11) | NO | PRI | 0 |  |  |
| bb_blood_request_id | int(11) | YES | UNI | NULL |  |  |
| bb_blood_pay_date | date | YES |  | NULL |  |  |
| bb_blood_pay_time | time | YES |  | NULL |  |  |
| bb_blood_pay_staff | varchar(100) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_bb_blood_request_id | bb_blood_request_id | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | bb_blood_pay_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
