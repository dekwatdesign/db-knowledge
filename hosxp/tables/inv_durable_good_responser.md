# `inv_durable_good_responser`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| inv_durable_good_responser_id | int(11) | NO | PRI | 0 |  |  |
| inv_durable_good_id | int(11) | YES |  | NULL |  |  |
| inv_durable_good_responser_date | date | YES |  | NULL |  |  |
| emp_dep_id | int(11) | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| emp_dep_head_emp_id | int(11) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| responser_staff | varchar(20) | YES |  | NULL |  |  |
| responser_date | date | YES |  | NULL |  |  |
| hospital_department_id | int(11) | YES |  | NULL |  |  |
| inv_dep_id | int(11) | YES |  | NULL |  |  |
| inv_segment_id | int(11) | YES |  | NULL |  |  |
| inv_building_name | varchar(250) | YES |  | NULL |  |  |
| inv_building_floor | varchar(100) | YES |  | NULL |  |  |
| inv_building_room | varchar(100) | YES |  | NULL |  |  |
| inv_responser_phone | varchar(15) | YES |  | NULL |  |  |
| inv_responser_text | text | YES |  | NULL |  |  |
| inv_durable_good_repair_dep_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | inv_durable_good_responser_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
