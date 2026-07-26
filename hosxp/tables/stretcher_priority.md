# `stretcher_priority`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stretcher_priority_id | int(11) | NO | PRI | 0 |  |  |
| stretcher_priority_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | stretcher_priority_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "stretcher_priority_id": 1,
    "stretcher_priority_name": "ปกติ"
  },
  {
    "stretcher_priority_id": 2,
    "stretcher_priority_name": "ด่วน"
  },
  {
    "stretcher_priority_id": 3,
    "stretcher_priority_name": "ด่วนที่สุด"
  }
]
```
