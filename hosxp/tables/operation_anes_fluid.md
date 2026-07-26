# `operation_anes_fluid`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_anes_fluid_id | int(11) | NO | PRI | 0 |  |  |
| operation_id | int(11) | YES | MUL | NULL |  |  |
| fluid_date | date | YES |  | NULL |  |  |
| fluid_time | time | YES |  | NULL |  |  |
| fluid_staff | varchar(25) | YES |  | NULL |  |  |
| intake_blood_component | double(15,3) | YES |  | NULL |  |  |
| intake_crystalloid | double(15,3) | YES |  | NULL |  |  |
| intake_colloid | double(15,3) | YES |  | NULL |  |  |
| output_urine | double(15,3) | YES |  | NULL |  |  |
| output_drainage | double(15,3) | YES |  | NULL |  |  |
| output_blood_loss | double(15,3) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_operation_id | operation_id | no | 1 |
| PRIMARY | operation_anes_fluid_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
