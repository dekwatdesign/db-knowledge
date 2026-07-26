# `emp_office`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_office_id | int(11) | NO | PRI | 0 |  |  |
| emp_office_date | date | YES |  | NULL |  |  |
| emp_office_time | time | YES |  | NULL |  |  |
| emp_office_number | varchar(30) | YES |  | NULL |  |  |
| emp_office_proj_name | varchar(255) | YES |  | NULL |  |  |
| emp_office_proj_aim | text | YES |  | NULL |  |  |
| emp_office_proj_head_id | int(11) | YES |  | NULL |  |  |
| emp_office_objective | text | YES |  | NULL |  |  |
| emp_office_startdate | datetime | YES |  | NULL |  |  |
| emp_office_enddate | datetime | YES |  | NULL |  |  |
| emp_office_place | varchar(250) | YES |  | NULL |  |  |
| emp_office_country_id | int(11) | YES |  | NULL |  |  |
| emp_office_status_id | int(11) | YES |  | NULL |  |  |
| emp_office_budget | double(22,3) | YES |  | NULL |  |  |
| emp_office_staff | varchar(20) | YES |  | NULL |  |  |
| emp_office_place_id | int(11) | YES |  | NULL |  |  |
| emp_office_lastupdate | date | YES |  | NULL |  |  |
| emp_office_type_id | int(11) | YES |  | NULL |  |  |
| emp_service_plan_id | int(11) | YES |  | NULL |  |  |
| emp_office_date_doc | date | YES |  | NULL |  |  |
| emp_office_day | int(11) | YES |  | NULL |  |  |
| emp_office_inform | varchar(250) | YES |  | NULL |  |  |
| emp_office_hour | int(11) | YES |  | NULL |  |  |
| emp_office_minute | int(11) | YES |  | NULL |  |  |
| emp_office_certificate | varchar(255) | YES |  | NULL |  |  |
| emp_office_demand_type_id | int(11) | YES |  | NULL |  |  |
| emp_office_plan_budget_id | int(11) | YES |  | NULL |  |  |
| emp_office_proj_no | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_office_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
