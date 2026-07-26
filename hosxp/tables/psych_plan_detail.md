# `psych_plan_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_plan_detail_id | int(11) | NO | PRI | 0 |  |  |
| psych_plan_id | int(11) | YES | MUL | NULL |  |  |
| psych_items_id | int(11) | YES | MUL | NULL |  |  |
| active_no_charge | char(1) | YES |  | NULL |  |  |
| psych_plan_detail_qty | int(11) | YES |  | NULL |  |  |
| operation_count | int(11) | YES |  | NULL |  |  |
| psych_plan_detail_note | text | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_psych_items_id | psych_items_id | no | 1 |
| ix_psych_plan_id | psych_plan_id | no | 1 |
| PRIMARY | psych_plan_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
