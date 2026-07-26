# `physic_plan_temp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_plan_temp_id | int(11) | NO | PRI | 0 |  |  |
| physic_register_id | int(11) | YES | MUL | NULL |  |  |
| physic_plan_temp_name | varchar(255) | YES | MUL | NULL |  |  |
| physic_plan_temp_staff | varchar(255) | YES |  | NULL |  |  |
| physic_plan_temp_lastupdate | datetime | YES | MUL | NULL |  |  |
| doctor_code | varchar(6) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_physic_plan_temp_lastupdate | physic_plan_temp_lastupdate | no | 1 |
| ix_physic_plan_temp_name | physic_plan_temp_name | no | 1 |
| ix_physic_register_id | physic_register_id | no | 1 |
| PRIMARY | physic_plan_temp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
