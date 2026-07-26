# `emp_work_study`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_work_study_id | int(11) | NO | PRI | 0 |  |  |
| emp_work_study_type_id | int(11) | YES |  | NULL |  |  |
| emp_work_study_current_salary | double(22,3) | YES |  | NULL |  |  |
| emp_work_study_startdate | date | YES |  | NULL |  |  |
| emp_work_study_enddate | date | YES |  | NULL |  |  |
| emp_work_study_course | varchar(200) | YES |  | NULL |  |  |
| emp_work_study_country | int(11) | YES |  | NULL |  |  |
| emp_work_study_fund | varchar(100) | YES |  | NULL |  |  |
| emp_work_study_education_level | varchar(100) | YES |  | NULL |  |  |
| emp_work_study_institute | varchar(100) | YES |  | NULL |  |  |
| emp_work_study_contact_address | varchar(200) | YES |  | NULL |  |  |
| emp_work_study_contact_phone | varchar(10) | YES |  | NULL |  |  |
| emp_work_study_command_id | int(11) | YES |  | NULL |  |  |
| emp_work_study_command_note | text | YES |  | NULL |  |  |
| emp_work_study_permiter_id | int(11) | YES |  | NULL |  |  |
| emp_work_study_permit_id | int(11) | YES |  | NULL |  |  |
| emp_work_study_permit_note | text | YES |  | NULL |  |  |
| emp_work_study_last_update | date | YES |  | NULL |  |  |
| emp_work_study_save_time | time | YES |  | NULL |  |  |
| emp_work_study_save_date | date | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| emp_work_study_staff | varchar(30) | YES |  | NULL |  |  |
| emp_work_study_count_day | int(11) | YES |  | NULL |  |  |
| emp_work_study_chk | char(1) | YES |  | NULL |  |  |
| emp_hr_approve_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_work_study_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
