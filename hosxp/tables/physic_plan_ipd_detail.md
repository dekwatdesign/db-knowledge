# `physic_plan_ipd_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_plan_ipd_detail_id | int(11) | NO | PRI | 0 |  |  |
| physic_plan_id | int(11) | YES | MUL | NULL |  |  |
| physic_items_id | int(11) | YES | MUL | NULL |  |  |
| physic_plan_ipd_detail_qty | int(11) | YES | MUL | NULL |  |  |
| physic_plan_ipd_detail_begin | date | YES | MUL | NULL |  |  |
| physic_plan_ipd_detail_end | date | YES | MUL | NULL |  |  |
| physic_consult_for_id | int(11) | YES | MUL | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| activity_time | int(11) | YES |  | NULL |  |  |
| physic_body_position_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | physic_plan_id | no | 1 |
| ix_physic_consult_for_id | physic_consult_for_id | no | 1 |
| ix_physic_items_id | physic_items_id | no | 1 |
| ix_physic_plan_ipd_detail_begin | physic_plan_ipd_detail_begin | no | 1 |
| ix_physic_plan_ipd_detail_end | physic_plan_ipd_detail_end | no | 1 |
| ix_physic_plan_ipd_detail_qty | physic_plan_ipd_detail_qty | no | 1 |
| PRIMARY | physic_plan_ipd_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
