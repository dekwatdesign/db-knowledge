# `emp_work_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| en_work_sum_id | int(11) | NO | PRI | 0 |  |  |
| en_work_sum_year | char(4) | YES | MUL | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| en_work_sum_countday | double(15,2) | YES |  | NULL |  |  |
| en_work_sum_vacation_countday | double(15,2) | YES |  | NULL |  |  |
| en_work_sum_vacation_college | double(15,2) | YES |  | NULL |  |  |
| en_work_sum_vacation_day | double(15,2) | YES |  | NULL |  |  |
| en_work_sum_vacation | double(15,2) | YES |  | NULL |  |  |
| en_work_sum_sick_leave | double(15,2) | YES |  | NULL |  |  |
| en_work_sum_ordinate | int(11) | YES |  | NULL |  |  |
| en_work_sum_study | int(11) | YES |  | NULL |  |  |
| en_work_sum_hajj | int(11) | YES |  | NULL |  |  |
| en_work_sum_mate | int(11) | YES |  | NULL |  |  |
| en_work_sum_preparation | int(11) | YES |  | NULL |  |  |
| en_work_sum_help_wife | int(11) | YES |  | NULL |  |  |
| en_work_sum_update_day | date | YES |  | NULL |  |  |
| en_work_sum_sick_day | double(15,2) | YES |  | NULL |  |  |
| en_work_sum_leave_day | double(15,2) | YES |  | NULL |  |  |
| en_work_sum_maternity_day | double(15,2) | YES |  | NULL |  |  |
| en_work_sum_vacation_collegek | double(15,2) | YES |  | NULL |  |  |
| en_work_sum_personal_leave | double(15,2) | YES |  | NULL |  |  |
| en_work_sum_maternity_leave | double(15,2) | YES |  | NULL |  |  |
| en_work_sum_vacation_left | double(15,2) | YES |  | NULL |  |  |
| en_work_sum_cal_status | char(1) | YES |  | NULL |  |  |
| en_work_sum_used_count_day | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_work_sum_year | en_work_sum_year | no | 1 |
| PRIMARY | en_work_sum_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
