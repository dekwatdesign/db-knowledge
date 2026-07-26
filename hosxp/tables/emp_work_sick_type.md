# `emp_work_sick_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_work_sick_type_id | int(11) | NO | PRI | 0 |  |  |
| emp_work_sick_type_name | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_work_sick_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "emp_work_sick_type_id": 1,
    "emp_work_sick_type_name": "ลาป่วย"
  },
  {
    "emp_work_sick_type_id": 2,
    "emp_work_sick_type_name": "ลากิจ"
  },
  {
    "emp_work_sick_type_id": 3,
    "emp_work_sick_type_name": "ลาคลอดบุตร"
  }
]
```
