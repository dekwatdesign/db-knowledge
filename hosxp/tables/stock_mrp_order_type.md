# `stock_mrp_order_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_mrp_order_type_id | int(11) | NO | PRI | 0 |  |  |
| stock_mrp_order_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_mrp_order_type_name | stock_mrp_order_type_name | yes | 1 |
| PRIMARY | stock_mrp_order_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "stock_mrp_order_type_id": 1,
    "stock_mrp_order_type_name": "FX (ยาซื้อพิเศษ)"
  },
  {
    "stock_mrp_order_type_id": 2,
    "stock_mrp_order_type_name": "HB (ยาเบิกคลัง)"
  }
]
```
