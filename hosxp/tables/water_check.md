# `water_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| water_check_id | int(11) | NO | PRI | 0 |  |  |
| water_check_floor | int(11) | YES |  | NULL |  |  |
| water_check_date | date | YES | MUL | NULL |  |  |
| water_check_time | time | YES |  | NULL |  |  |
| water_check_note | varchar(250) | YES |  | NULL |  |  |
| water_check_std_plate_count | double(13,3) | YES |  | NULL |  |  |
| water_check_ph | double(13,3) | YES |  | NULL |  |  |
| water_check_hard | double(13,3) | YES |  | NULL |  |  |
| water_reg_id | int(11) | YES | MUL | NULL |  |  |
| water_ecoli_type_id | int(11) | YES | MUL | NULL |  |  |
| water_result_type_id | int(11) | YES | MUL | NULL |  |  |
| doctor_code | char(6) | YES |  | NULL |  |  |
| water_building_id | int(11) | YES | MUL | NULL |  |  |
| user_update | varchar(100) | YES |  | NULL |  |  |
| last_update | datetime | YES | MUL | NULL |  |  |
| water_check_acc_code | varchar(150) | YES |  | NULL |  |  |
| water_check_acc_name | varchar(250) | YES |  | NULL |  |  |
| water_check_acc_price | double(13,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_last_update | last_update | no | 1 |
| ix_water_building_id | water_building_id | no | 1 |
| ix_water_check_date | water_check_date | no | 1 |
| ix_water_ecoli_type_id | water_ecoli_type_id | no | 1 |
| ix_water_reg_id | water_reg_id | no | 1 |
| ix_water_result_type_id | water_result_type_id | no | 1 |
| PRIMARY | water_check_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
