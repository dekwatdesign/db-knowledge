# `emp_work_mate`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_work_mate_id | int(11) | NO | PRI | 0 |  |  |
| emp_work_mate_current_salary | double(22,3) | YES |  | NULL |  |  |
| emp_work_mate_emp_id | int(11) | YES |  | NULL |  |  |
| emp_work_mate_position_name | varchar(255) | YES |  | NULL |  |  |
| emp_work_mate_position_level | varchar(255) | YES |  | NULL |  |  |
| emp_work_mate_agency | varchar(255) | YES |  | NULL |  |  |
| emp_work_mate_startdate | date | YES |  | NULL |  |  |
| emp_work_mate_enddate | date | YES |  | NULL |  |  |
| emp_work_mate_last_country | varchar(255) | YES |  | NULL |  |  |
| emp_work_mate_last_startdate | date | YES |  | NULL |  |  |
| emp_work_mate_last_enddate | date | YES |  | NULL |  |  |
| emp_work_mate_command_id | int(11) | YES |  | NULL |  |  |
| emp_work_mate_command_note | text | YES |  | NULL |  |  |
| emp_work_mate_permiter_id | int(11) | YES |  | NULL |  |  |
| emp_work_mate_permit_id | int(11) | YES |  | NULL |  |  |
| emp_work_mate_permit_note | text | YES |  | NULL |  |  |
| emp_work_mate_last_update | date | YES |  | NULL |  |  |
| emp_work_mate_save_time | time | YES |  | NULL |  |  |
| emp_work_mate_save_date | date | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| emp_work_mate_country_name | varchar(250) | YES |  | NULL |  |  |
| emp_work_mate_staff | varchar(30) | YES |  | NULL |  |  |
| emp_work_mate_count_day | int(11) | YES |  | NULL |  |  |
| emp_work_mate_wife_sdate | date | YES |  | NULL |  |  |
| emp_work_mate_wife_edate | date | YES |  | NULL |  |  |
| emp_work_mate_project_name | varchar(250) | YES |  | NULL |  |  |
| emp_work_mate_chk | char(1) | YES |  | NULL |  |  |
| emp_hr_approve_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_work_mate_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
