# `stock_item_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_item_status_id | int(11) | NO | PRI | 0 |  |  |
| stock_item_status_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_item_status_name | stock_item_status_name | yes | 1 |
| PRIMARY | stock_item_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "stock_item_status_id": 5,
    "stock_item_status_name": "ที่ประชุม PTC มีมติให้ออกจากบัญชี"
  },
  {
    "stock_item_status_id": 2,
    "stock_item_status_name": "ยา Back Order"
  },
  {
    "stock_item_status_id": 1,
    "stock_item_status_name": "ยาขาดตลาด"
  },
  {
    "stock_item_status_id": 3,
    "stock_item_status_name": "ยาหยุดซื้อ / เลิกซื้อ"
  },
  {
    "stock_item_status_id": 4,
    "stock_item_status_name": "เลิกขาย"
  }
]
```
