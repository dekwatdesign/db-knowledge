# `physic_stamp_order_ipd`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_stamp_order_ipd_id | int(11) | NO | PRI | 0 |  |  |
| physic_plan_id | int(11) | YES | MUL | NULL |  |  |
| physic_stamp_order_ipd_status | char(1) | YES |  | NULL |  |  |
| physic_stamp_order_ipd_date | date | YES |  | NULL |  |  |
| physic_stamp_order_ipd_time | time | YES |  | NULL |  |  |
| physic_stamp_order_ipd_doctor | varchar(6) | YES |  | NULL |  |  |
| physic_stamp_order_ipd_staff | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_physic_plan_id | physic_plan_id | no | 1 |
| PRIMARY | physic_stamp_order_ipd_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
