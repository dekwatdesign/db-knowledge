# `physic_plan_doctor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_plan_doctor_id | int(11) | NO | PRI | 0 |  |  |
| physic_plan_detail_id | int(11) | YES | MUL | NULL |  |  |
| physic_plan_doctor_code | varchar(6) | YES |  | NULL |  |  |
| physic_plan_doctor_staff | varchar(255) | YES |  | NULL |  |  |
| physic_plan_doctor_lastupdate | datetime | YES | MUL | NULL |  |  |
| physic_doctor_position_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | physic_plan_detail_id | no | 1 |
| ix_physic_doctor_position_id | physic_doctor_position_id | no | 1 |
| ix_physic_plan_doctor_lastupdate | physic_plan_doctor_lastupdate | no | 1 |
| PRIMARY | physic_plan_doctor_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
