# `emp_blood_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_blood_group_id | int(11) | NO | PRI | 0 |  |  |
| emp_blood_group_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_blood_group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "emp_blood_group_id": 1,
    "emp_blood_group_name": "A"
  },
  {
    "emp_blood_group_id": 2,
    "emp_blood_group_name": "B"
  },
  {
    "emp_blood_group_id": 3,
    "emp_blood_group_name": "AB"
  },
  {
    "emp_blood_group_id": 4,
    "emp_blood_group_name": "O"
  }
]
```
