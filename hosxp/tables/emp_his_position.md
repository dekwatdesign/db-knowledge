# `emp_his_position`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_his_position_id | int(11) | NO | PRI | 0 |  |  |
| emp_position_id | int(11) | YES |  | NULL |  |  |
| emp_his_position_order_num | varchar(200) | YES |  | NULL |  |  |
| emp_his_position_salary | double(22,3) | YES |  | NULL |  |  |
| emp_his_position_reference | longblob | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| emp_his_position_update | date | YES |  | NULL |  |  |
| emp_his_position_percent | double(15,2) | YES |  | NULL |  |  |
| emp_his_position_org_name | varchar(150) | YES |  | NULL |  |  |
| emp_his_position_regisdate | date | YES |  | NULL |  |  |
| emp_his_position_salary_prior | double(22,3) | YES |  | NULL |  |  |
| emp_his_position_filename | text | YES |  | NULL |  |  |
| emp_his_position_staff | varchar(20) | YES |  | NULL |  |  |
| emp_his_position_org | char(1) | YES |  | NULL |  |  |
| emp_position_main_id | int(11) | YES |  | NULL |  |  |
| emp_position_work_id | int(11) | YES |  | NULL |  |  |
| emp_hire_id | int(11) | YES |  | NULL |  |  |
| emp_salary_rate_id | int(11) | YES |  | NULL |  |  |
| emp_dep_id | int(11) | YES |  | NULL |  |  |
| emp_segment_id | int(11) | YES |  | NULL |  |  |
| emp_agency_id | int(11) | YES |  | NULL |  |  |
| emp_agency_work_id | int(11) | YES |  | NULL |  |  |
| emp_his_position_flag | char(1) | YES |  | NULL |  |  |
| emp_his_position_level | double(22,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_his_position_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
