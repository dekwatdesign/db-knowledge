# `work_shift_dep`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| work_shift_dep_id | int(11) | NO | PRI | 0 |  |  |
| work_shift_dep_name | varchar(200) | YES | UNI | NULL |  |  |
| emp_dep_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_work_shift_dep_name | work_shift_dep_name | yes | 1 |
| PRIMARY | work_shift_dep_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "work_shift_dep_id": 1,
    "work_shift_dep_name": "แผนกทดสอบ 1",
    "emp_dep_id": 1
  },
  {
    "work_shift_dep_id": 2,
    "work_shift_dep_name": "แผนกทดสอบ 2",
    "emp_dep_id": 1
  },
  {
    "work_shift_dep_id": 3,
    "work_shift_dep_name": "แผนกทดสอบ 3",
    "emp_dep_id": 1
  },
  {
    "work_shift_dep_id": 4,
    "work_shift_dep_name": "แผนกทดสอบ 4",
    "emp_dep_id": 1
  }
]
```
