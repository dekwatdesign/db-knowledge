# `psych_plan_temp_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_plan_temp_detail_id | int(11) | NO | PRI | 0 |  |  |
| psych_plan_temp_id | int(11) | YES | MUL | NULL |  |  |
| psych_items_id | varchar(255) | YES | MUL | NULL |  |  |
| psych_plan_temp_detail_qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_psych_items_id | psych_items_id | no | 1 |
| ix_psych_plan_temp_id | psych_plan_temp_id | no | 1 |
| PRIMARY | psych_plan_temp_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
