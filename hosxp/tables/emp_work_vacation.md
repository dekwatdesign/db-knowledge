# `emp_work_vacation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_work_vacation_id | int(11) | NO | PRI | 0 |  |  |
| emp_work_vacation_begindate | datetime | YES |  | NULL |  |  |
| emp_work_vacation_enddate | datetime | YES |  | NULL |  |  |
| emp_work_vacation_lastupdate | date | YES |  | NULL |  |  |
| emp_work_vacation_time | time | YES |  | NULL |  |  |
| emp_work_vacation_date | date | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| emp_work_vacation_contact | text | YES |  | NULL |  |  |
| emp_work_vacation_tel | varchar(10) | YES |  | NULL |  |  |
| emp_work_vacation_command_id | int(11) | YES |  | NULL |  |  |
| emp_work_vacation_command_note | text | YES |  | NULL |  |  |
| emp_work_vacation_permiter_id | int(11) | YES |  | NULL |  |  |
| emp_work_vacation_permit_id | int(11) | YES |  | NULL |  |  |
| emp_work_vacation_permit_note | text | YES |  | NULL |  |  |
| en_stat_id | int(11) | YES |  | NULL |  |  |
| emp_work_vacation_staff | varchar(30) | YES |  | NULL |  |  |
| emp_work_vacation_countday | double(15,2) | YES |  | NULL |  |  |
| emp_work_vacation_print_date | date | YES |  | NULL |  |  |
| emp_work_sick_counthour | double(15,2) | YES |  | NULL |  |  |
| emp_work_vacation_year | varchar(4) | YES |  | NULL |  |  |
| emp_work_vacation_chk | char(1) | YES |  | NULL |  |  |
| emp_work_vacation_behalf_emp | int(11) | YES |  | NULL |  |  |
| emp_hr_approve_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_work_vacation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
