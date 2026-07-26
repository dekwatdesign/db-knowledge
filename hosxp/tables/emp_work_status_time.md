# `emp_work_status_time`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_work_status_time_id | int(11) | NO | PRI | 0 |  |  |
| emp_work_status_time_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_work_status_time_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "emp_work_status_time_id": 1,
    "emp_work_status_time_name": "ในเวลางาน"
  },
  {
    "emp_work_status_time_id": 2,
    "emp_work_status_time_name": "นอกเวลางาน"
  }
]
```
