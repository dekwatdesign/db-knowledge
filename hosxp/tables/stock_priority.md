# `stock_priority`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_priority_id | int(11) | NO | PRI | 0 |  |  |
| stock_priority_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_priority_name | stock_priority_name | yes | 1 |
| PRIMARY | stock_priority_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "stock_priority_id": 2,
    "stock_priority_name": "ด่วน"
  },
  {
    "stock_priority_id": 1,
    "stock_priority_name": "ปกติ"
  }
]
```
