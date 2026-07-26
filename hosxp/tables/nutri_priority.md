# `nutri_priority`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nutri_priority_id | int(11) | NO | PRI | 0 |  |  |
| nutri_priority_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | nutri_priority_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "nutri_priority_id": 1,
    "nutri_priority_name": "ปกติ"
  },
  {
    "nutri_priority_id": 2,
    "nutri_priority_name": "ด่วน"
  },
  {
    "nutri_priority_id": 3,
    "nutri_priority_name": "ด่วนที่สุด"
  }
]
```
