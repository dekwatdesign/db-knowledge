# `emp_work_normal`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_work_normal_id | int(11) | NO | PRI | 0 |  |  |
| emp_work_normal_begintime | time | YES |  | NULL |  |  |
| emp_work_normal_endtime | time | YES |  | NULL |  |  |
| emp_work_status_time_id | int(11) | YES |  | NULL |  |  |
| emp_work_schedule_id | int(11) | YES |  | NULL |  |  |
| emp_work_normal_detail | text | YES |  | NULL |  |  |
| emp_work_normal_lastupdate | date | YES |  | NULL |  |  |
| emp_work_normal_lateminute | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_work_normal_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
