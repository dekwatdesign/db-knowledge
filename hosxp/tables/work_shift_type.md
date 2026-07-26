# `work_shift_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| work_shift_type_id | int(11) | NO | PRI | 0 |  |  |
| work_shift_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_work_shift_type_name | work_shift_type_name | yes | 1 |
| PRIMARY | work_shift_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "work_shift_type_id": 2,
    "work_shift_type_name": "OT"
  },
  {
    "work_shift_type_id": 3,
    "work_shift_type_name": "Premium"
  },
  {
    "work_shift_type_id": 1,
    "work_shift_type_name": "ปกติ"
  }
]
```
