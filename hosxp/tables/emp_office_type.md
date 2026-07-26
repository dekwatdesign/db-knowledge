# `emp_office_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_office_type_id | int(11) | NO | PRI | 0 |  |  |
| emp_office_type_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_office_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "emp_office_type_id": 1,
    "emp_office_type_name": "ฝึกอบรม/ศึกษาดูงาน"
  },
  {
    "emp_office_type_id": 2,
    "emp_office_type_name": "ประชุมสัมนา"
  }
]
```
