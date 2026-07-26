# `stock_export_purchase_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_export_purchase_type_id | int(11) | NO | PRI | 0 |  |  |
| buy_method_id | int(11) | YES |  | NULL |  |  |
| buy_method_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | stock_export_purchase_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "stock_export_purchase_type_id": 1,
    "buy_method_id": 10,
    "buy_method_name": "วิธีประกาศเชิญชวนทั่วไป"
  },
  {
    "stock_export_purchase_type_id": 2,
    "buy_method_id": 11,
    "buy_method_name": "e-Market "
  },
  {
    "stock_export_purchase_type_id": 3,
    "buy_method_id": 12,
    "buy_method_name": "e-Bidding"
  },
  {
    "stock_export_purchase_type_id": 4,
    "buy_method_id": 13,
    "buy_method_name": "สอบราคา"
  },
  {
    "stock_export_purchase_type_id": 5,
    "buy_method_id": 20,
    "buy_method_name": "วิธีคัดเลือก"
  },
  {
    "stock_export_purchase_type_id": 6,
    "buy_method_id": 30,
    "buy_method_name": "วิธีเฉพาะเจาะจง"
  },
  {
    "stock_export_purchase_type_id": 7,
    "buy_method_id": 31,
    "buy_method_name": "ก.เชิญชวน และคัดเลือกแล้วไม่มีผู้เสนอ"
  },
  {
    "stock_export_purchase_type_id": 8,
    "buy_method_id": 32,
    "buy_method_name": "ข. ไม่เกิน 500000 บาท (ทั่วไป)"
  }
]
```
