# `stock_adjust_item_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_adjust_item_type_id | int(11) | NO | PRI | 0 |  |  |
| stock_adjust_item_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_adjust_item_type_name | stock_adjust_item_type_name | yes | 1 |
| PRIMARY | stock_adjust_item_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "stock_adjust_item_type_id": 2,
    "stock_adjust_item_type_name": "ปรับยอด ขึ้น"
  },
  {
    "stock_adjust_item_type_id": 1,
    "stock_adjust_item_type_name": "ปรับยอด ลง"
  }
]
```
