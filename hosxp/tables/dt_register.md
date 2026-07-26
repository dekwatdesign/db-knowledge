# `dt_register`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_register_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| dt_register_date | date | YES |  | NULL |  |  |
| dt_register_no | varchar(50) | YES |  | NULL |  |  |
| dt_register_dicharge | char(1) | YES |  | NULL |  |  |
| dt_register_dicharge_date | date | YES |  | NULL |  |  |
| dt_register_dicharge_type_id | int(11) | YES |  | NULL |  |  |
| dt_register_status_id | int(11) | YES |  | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| dt_depcode | varchar(10) | YES |  | NULL |  |  |
| discharge | char(1) | YES |  | NULL |  |  |
| discharge_date | date | YES |  | NULL |  |  |
| dt_discharge_type_id | int(11) | YES |  | NULL |  |  |
| staff_entry | varchar(10) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_register_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
