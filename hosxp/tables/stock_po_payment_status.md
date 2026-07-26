# `stock_po_payment_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_po_payment_status_id | int(11) | NO | PRI | 0 |  |  |
| stock_po_payment_status_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_po_payment_status_name | stock_po_payment_status_name | yes | 1 |
| PRIMARY | stock_po_payment_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "stock_po_payment_status_id": 3,
    "stock_po_payment_status_name": "ชำระเงินแล้ว"
  },
  {
    "stock_po_payment_status_id": 2,
    "stock_po_payment_status_name": "รอทำเรื่องชำระเงิน"
  },
  {
    "stock_po_payment_status_id": 1,
    "stock_po_payment_status_name": "ส่งเรื่องตั้งเป็นเจ้าหนี้"
  }
]
```
