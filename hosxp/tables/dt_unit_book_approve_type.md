# `dt_unit_book_approve_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_unit_book_approve_type_id | int(11) | NO | PRI | 0 |  |  |
| approve_type_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_unit_book_approve_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "dt_unit_book_approve_type_id": 1,
    "approve_type_name": "รออนุมัติ"
  },
  {
    "dt_unit_book_approve_type_id": 2,
    "approve_type_name": "อนุมัติ"
  },
  {
    "dt_unit_book_approve_type_id": 3,
    "approve_type_name": "ไม่อนุมัติ"
  }
]
```
