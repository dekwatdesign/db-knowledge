# `emp_office_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_office_status_id | int(11) | NO | PRI | 0 |  |  |
| emp_office_status_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_office_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "emp_office_status_id": 1,
    "emp_office_status_name": "อนุมัติ"
  },
  {
    "emp_office_status_id": 2,
    "emp_office_status_name": "ยกเลิก"
  },
  {
    "emp_office_status_id": 3,
    "emp_office_status_name": "เสร็จสิ้น"
  },
  {
    "emp_office_status_id": 4,
    "emp_office_status_name": "รออนุมัติ"
  },
  {
    "emp_office_status_id": 5,
    "emp_office_status_name": "รองบประมาณ"
  }
]
```
