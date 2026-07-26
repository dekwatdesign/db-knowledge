# `dt_unit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_unit_id | int(11) | NO | PRI | 0 |  |  |
| unit_no | varchar(250) | YES |  | NULL |  |  |
| unit_name | varchar(250) | YES |  | NULL |  |  |
| unit_depcode | char(3) | YES |  | NULL |  |  |
| unit_reg_date | date | YES |  | NULL |  |  |
| unit_reg_time | time | YES |  | NULL |  |  |
| unit_active | char(1) | YES |  | NULL |  |  |
| unit_reg_doctor | varchar(6) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_unit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
