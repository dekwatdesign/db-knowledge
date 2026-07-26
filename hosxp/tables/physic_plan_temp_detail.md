# `physic_plan_temp_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_plan_temp_detail_id | int(11) | NO | PRI | 0 |  |  |
| physic_plan_temp_id | int(11) | YES | MUL | NULL |  |  |
| physic_planing_items_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_physic_planing_items_id | physic_planing_items_id | no | 1 |
| ix_physic_plan_temp_id | physic_plan_temp_id | no | 1 |
| PRIMARY | physic_plan_temp_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
