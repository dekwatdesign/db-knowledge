# `stock_paid_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_paid_type_id | int(11) | NO | PRI | 0 |  |  |
| stock_paid_type_name | varchar(200) | YES | UNI | NULL |  |  |
| check_po_amount | char(1) | YES |  | NULL |  |  |
| po_amount | double(15,3) | YES |  | NULL |  |  |
| is_cash | char(1) | YES |  | NULL |  |  |
| is_credit | char(1) | YES |  | NULL |  |  |
| amount_eval_expression | varchar(100) | YES |  | NULL |  |  |
| acc_po_payment_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_paid_type_name | stock_paid_type_name | yes | 1 |
| PRIMARY | stock_paid_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "stock_paid_type_id": 1,
    "stock_paid_type_name": "เงินสด",
    "check_po_amount": null,
    "po_amount": null,
    "is_cash": null,
    "is_credit": null,
    "amount_eval_expression": null,
    "acc_po_payment_type_id": null
  },
  {
    "stock_paid_type_id": 2,
    "stock_paid_type_name": "เครดิต",
    "check_po_amount": null,
    "po_amount": null,
    "is_cash": null,
    "is_credit": null,
    "amount_eval_expression": null,
    "acc_po_payment_type_id": null
  }
]
```
