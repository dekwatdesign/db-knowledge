# `blb_pay_hos`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_pay_hos_id | int(11) | NO | PRI | 0 |  |  |
| blb_pay_hos_staff | varchar(250) | YES |  | NULL |  |  |
| blb_pay_hos_date | date | YES |  | NULL |  |  |
| blb_pay_hos_time | time | YES |  | NULL |  |  |
| blb_request_hos_id | int(11) | YES | MUL | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| blb_pay_hos_doctor | varchar(15) | YES |  | NULL |  |  |
| blb_pay_hos_note | text | YES |  | NULL |  |  |
| request_hospcode | varchar(9) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_request_hos_id | blb_request_hos_id | no | 1 |
| PRIMARY | blb_pay_hos_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
