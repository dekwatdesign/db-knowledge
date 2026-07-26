# `emp_work_study_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_work_study_type_id | int(11) | NO | PRI | 0 |  |  |
| emp_work_study_type_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_work_study_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "emp_work_study_type_id": 1,
    "emp_work_study_type_name": "ศึกษาวิชา"
  },
  {
    "emp_work_study_type_id": 2,
    "emp_work_study_type_name": "ฝึกอบรม"
  },
  {
    "emp_work_study_type_id": 3,
    "emp_work_study_type_name": "ปฏิบัติการ"
  },
  {
    "emp_work_study_type_id": 4,
    "emp_work_study_type_name": "งานวิจัย"
  }
]
```
