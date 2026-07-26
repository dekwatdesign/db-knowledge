# `emp_work_shift`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_work_shift_id | int(11) | NO | PRI | 0 |  |  |
| hospital_work_shift_id | int(11) | YES |  | NULL |  |  |
| work_shift_time_type_id | int(11) | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| work_shift_type_id | int(11) | YES |  | NULL |  |  |
| work_shift_dep_job_id | int(11) | YES |  | NULL |  |  |
| limit_appointment | char(1) | YES |  | NULL |  |  |
| limit_appointment_qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_work_shift_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
