# `emp_stat`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_id | int(11) | NO | PRI | 0 |  |  |
| work_date | date | NO | PRI | 0000-00-00 |  |  |
| emp_work_sick_leave_id | int(11) | YES |  | NULL |  |  |
| emp_work_absent_vacation_id | int(11) | YES |  | NULL |  |  |
| emp_work_ordinate_id | int(11) | YES |  | NULL |  |  |
| emp_work_study_id | int(11) | YES |  | NULL |  |  |
| emp_work_hajj_id | int(11) | YES |  | NULL |  |  |
| emp_work_mate_id | int(11) | YES |  | NULL |  |  |
| emp_work_preparation_id | int(11) | YES |  | NULL |  |  |
| emp_work_help_wife_id | int(11) | YES |  | NULL |  |  |
| official_number | varchar(20) | YES |  | NULL |  |  |
| emp_position_work_id | int(11) | YES |  | NULL |  |  |
| start_time | time | YES |  | NULL |  |  |
| end_time | time | YES |  | NULL |  |  |
| emp_prename | varchar(10) | YES |  | NULL |  |  |
| emp_first_name | varchar(50) | YES |  | NULL |  |  |
| emp_last_name | varchar(50) | YES |  | NULL |  |  |
| emp_age_y | int(11) | YES |  | NULL |  |  |
| emp_age_m | int(11) | YES |  | NULL |  |  |
| emp_age_d | int(11) | YES |  | NULL |  |  |
| emp_work_normal | char(1) | YES |  | NULL |  |  |
| emp_official_trip_id | int(11) | YES |  | NULL |  |  |
| emp_work_foriegn_id | int(11) | YES |  | NULL |  |  |
| work_type | varchar(50) | YES |  | NULL |  |  |
| emp_tel_number | varchar(10) | YES |  | NULL |  |  |
| emp_work_level | int(11) | YES |  | NULL |  |  |
| emp_dep_id | int(11) | YES |  | NULL |  |  |
| emp_agency_id | int(11) | YES |  | NULL |  |  |
| emp_agency_work_id | int(11) | YES |  | NULL |  |  |
| emp_segment_id | int(11) | YES |  | NULL |  |  |
| emp_shift_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_emp_stat_emp_id | emp_id | no | 1 |
| ix_idx_emp_stat_shift_id | emp_shift_id | no | 1 |
| ix_idx_emp_stat_workdate | work_date | no | 1 |
| PRIMARY | emp_id | yes | 1 |
| PRIMARY | work_date | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
