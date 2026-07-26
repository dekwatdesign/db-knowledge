# `emp_work_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_work_status_id | int(11) | NO | PRI | 0 |  |  |
| emp_work_status_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_work_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "emp_work_status_id": 1,
    "emp_work_status_name": "อนุญาต"
  },
  {
    "emp_work_status_id": 2,
    "emp_work_status_name": "ไม่อนุญาต"
  },
  {
    "emp_work_status_id": 3,
    "emp_work_status_name": "รอการประเมิน"
  },
  {
    "emp_work_status_id": 4,
    "emp_work_status_name": "ยกเลิก"
  }
]
```
