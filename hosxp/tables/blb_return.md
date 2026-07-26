# `blb_return`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_return_id | int(11) | NO | PRI | 0 |  |  |
| blb_pay_id | int(11) | YES | MUL | NULL |  |  |
| blb_return_date | date | YES |  | NULL |  |  |
| blb_return_time | time | YES |  | NULL |  |  |
| blb_return_doctor | varchar(6) | YES |  | NULL |  |  |
| blb_return_approve | char(1) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_pay_id | blb_pay_id | no | 1 |
| PRIMARY | blb_return_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
