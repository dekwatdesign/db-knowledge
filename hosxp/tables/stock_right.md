# `stock_right`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_right_id | int(11) | NO | PRI | 0 |  |  |
| stock_right_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| stock_right_group | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_stock_right_name | stock_right_name | yes | 1 |
| PRIMARY | stock_right_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "stock_right_id": 1,
    "stock_right_name": "ทำแผนจัดซื้อ",
    "hos_guid": null,
    "stock_right_group": 1
  },
  {
    "stock_right_id": 2,
    "stock_right_name": "ใบขอซื้อ (PR)",
    "hos_guid": null,
    "stock_right_group": 1
  },
  {
    "stock_right_id": 3,
    "stock_right_name": "จัดซื้อ - รับสินค้า",
    "hos_guid": null,
    "stock_right_group": 1
  },
  {
    "stock_right_id": 4,
    "stock_right_name": "ตรวจสอบ - ใบสั่งซื้อ",
    "hos_guid": null,
    "stock_right_group": 1
  },
  {
    "stock_right_id": 5,
    "stock_right_name": "การจ่ายเช็ค",
    "hos_guid": null,
    "stock_right_group": 1
  },
  {
    "stock_right_id": 6,
    "stock_right_name": "สินค้าในคลัง",
    "hos_guid": null,
    "stock_right_group": 2
  },
  {
    "stock_right_id": 7,
    "stock_right_name": "โอนสินค้า",
    "hos_guid": null,
    "stock_right_group": 2
  },
  {
    "stock_right_id": 8,
    "stock_right_name": "ปรับยอดคลัง",
    "hos_guid": null,
    "stock_right_group": 2
  }
]
```
