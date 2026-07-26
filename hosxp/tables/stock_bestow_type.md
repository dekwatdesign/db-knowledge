# `stock_bestow_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_bestow_type_id | int(11) | NO | PRI | 0 |  |  |
| stock_bestow_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_bestow_type_name | stock_bestow_type_name | yes | 1 |
| PRIMARY | stock_bestow_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "stock_bestow_type_id": 1,
    "stock_bestow_type_name": "รับคืนสินค้า"
  },
  {
    "stock_bestow_type_id": 3,
    "stock_bestow_type_name": "แลกเปลี่ยนสินค้า"
  },
  {
    "stock_bestow_type_id": 2,
    "stock_bestow_type_name": "ให้ยืมสินค้า"
  }
]
```
