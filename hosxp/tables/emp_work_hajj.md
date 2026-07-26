# `emp_work_hajj`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_work_hajj_id | int(11) | NO | PRI | 0 |  |  |
| emp_work_have_been_hajj | char(1) | YES |  | NULL |  |  |
| emp_work_hajj_startdate | date | YES |  | NULL |  |  |
| emp_work_hajj_enddate | date | YES |  | NULL |  |  |
| emp_work_hajj_commander_id | int(11) | YES |  | NULL |  |  |
| emp_work_hajj_commander_note | text | YES |  | NULL |  |  |
| emp_work_hajj_permiter_id | int(11) | YES |  | NULL |  |  |
| emp_work_hajj_permit_id | int(11) | YES |  | NULL |  |  |
| emp_work_hajj_permit_note | text | YES |  | NULL |  |  |
| emp_work_hajj_last_update | date | YES |  | NULL |  |  |
| emp_work_hajj_save_time | time | YES |  | NULL |  |  |
| emp_work_hajj_save_date | date | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| emp_work_hajj_staff | varchar(30) | YES |  | NULL |  |  |
| emp_work_hajj_count_day | int(11) | YES |  | NULL |  |  |
| emp_work_hajj_chk | char(1) | YES |  | NULL |  |  |
| emp_hr_approve_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_work_hajj_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
