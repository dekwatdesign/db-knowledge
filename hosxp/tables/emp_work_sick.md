# `emp_work_sick`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_work_sick_id | int(11) | NO | PRI | 0 |  |  |
| emp_work_sick_type_id | int(11) | YES |  | NULL |  |  |
| emp_work_sick_reason | text | YES |  | NULL |  |  |
| emp_work_sick_sdatetime | datetime | YES |  | NULL |  |  |
| emp_work_sick_edatetime | datetime | YES |  | NULL |  |  |
| emp_work_sick_contact | text | YES |  | NULL |  |  |
| emp_work_sick_contact_tel | varchar(10) | YES |  | NULL |  |  |
| emp_work_sick_command_id | int(11) | YES |  | NULL |  |  |
| emp_work_sick_command_note | text | YES |  | NULL |  |  |
| emp_work_sick_permiter_id | int(11) | YES |  | NULL |  |  |
| emp_work_sick_permit_id | int(11) | YES |  | NULL |  |  |
| emp_work_sick_permit_comment | text | YES |  | NULL |  |  |
| emp_work_sick_last_update | date | YES |  | NULL |  |  |
| emp_work_sick_save_time | time | YES |  | NULL |  |  |
| emp_work_sick_save_date | date | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| emp_work_sick_staff | varchar(30) | YES |  | NULL |  |  |
| emp_work_sick_countday | double(15,2) | YES |  | NULL |  |  |
| emp_work_sick_med_cer_file | blob | YES |  | NULL |  |  |
| emp_work_sick_med_cer_filename | varchar(100) | YES |  | NULL |  |  |
| emp_work_sick_med_cer_filetype | varchar(5) | YES |  | NULL |  |  |
| emp_work_sick_counthour | double(15,2) | YES |  | NULL |  |  |
| emp_work_sick_year | varchar(4) | YES |  | NULL |  |  |
| emp_work_sick_chk | char(1) | YES |  | NULL |  |  |
| emp_work_sick_behalf_emp | int(11) | YES |  | NULL |  |  |
| emp_hr_approve_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_work_sick_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
