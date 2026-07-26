# `emp_work_time`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_work_time_id | int(11) | NO | PRI | 0 |  |  |
| emp_work_time_start | time | YES |  | NULL |  |  |
| emp_work_time_end | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_work_time_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "emp_work_time_id": 1,
    "emp_work_time_start": "8:30:00",
    "emp_work_time_end": "16:30:00"
  }
]
```
