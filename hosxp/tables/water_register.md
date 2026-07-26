# `water_register`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| water_reg_id | int(11) | NO | PRI | 0 |  |  |
| water_reg_name | varchar(250) | YES |  | NULL |  |  |
| water_reg_no | int(11) | YES |  | NULL |  |  |
| water_reg_date | date | YES | MUL | NULL |  |  |
| water_reg_start_date | date | YES | MUL | NULL |  |  |
| water_reg_last_location | varchar(250) | YES |  | NULL |  |  |
| water_reg_active | char(1) | YES |  | NULL |  |  |
| hospital_dep_id | int(11) | YES | MUL | NULL |  |  |
| water_brand_id | int(11) | YES | MUL | NULL |  |  |
| user_update | varchar(100) | YES |  | NULL |  |  |
| last_update | datetime | YES | MUL | NULL |  |  |
| water_supplies_no | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospital_dep_id | hospital_dep_id | no | 1 |
| ix_last_update | last_update | no | 1 |
| ix_water_brand_id | water_brand_id | no | 1 |
| ix_water_reg_date | water_reg_date | no | 1 |
| ix_water_reg_start_date | water_reg_start_date | no | 1 |
| PRIMARY | water_reg_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
