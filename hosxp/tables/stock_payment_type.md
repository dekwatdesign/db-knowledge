# `stock_payment_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_payment_type_id | int(11) | NO | PRI | 0 |  |  |
| stock_payment_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_payment_type_name | stock_payment_type_name | yes | 1 |
| PRIMARY | stock_payment_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "stock_payment_type_id": 1,
    "stock_payment_type_name": "เงินสด"
  },
  {
    "stock_payment_type_id": 2,
    "stock_payment_type_name": "เช็ค"
  }
]
```
