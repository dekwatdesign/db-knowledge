# `blb_pay_requisition`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_pay_requisition_id | int(11) | NO | PRI | 0 |  |  |
| blb_pay_id | int(11) | YES | MUL | NULL |  |  |
| blb_pay_crossmatch_id | int(11) | YES | MUL | NULL |  |  |
| staff | varchar(150) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| blb_pay_requisition_finish | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_pay_crossmatch_id | blb_pay_crossmatch_id | no | 1 |
| ix_blb_pay_id | blb_pay_id | no | 1 |
| PRIMARY | blb_pay_requisition_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
