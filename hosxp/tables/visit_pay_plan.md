# `visit_pay_plan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| visit_pay_plan_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| max_qty | int(11) | YES |  | NULL |  |  |
| start_date | date | YES |  | NULL |  |  |
| end_date | date | YES |  | NULL |  |  |
| item_expire | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_ix_hn | hn | no | 1 |
| ix_ix_hn_item_expire | hn | no | 1 |
| ix_ix_hn_item_expire | item_expire | no | 2 |
| PRIMARY | visit_pay_plan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
