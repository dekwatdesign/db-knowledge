# `supplies_send_money_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| MONEY_SEND_ITEM_ID | int | NO | PRI | NULL | auto_increment |  |
| MONEY_SEND_ITEM_NAME | varchar(200) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | MONEY_SEND_ITEM_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "MONEY_SEND_ITEM_ID": 1,
    "MONEY_SEND_ITEM_NAME": "ใบขอซื้อขอจ้างจากหน่วยงาน",
    "updated_at": null,
    "created_at": null
  },
  {
    "MONEY_SEND_ITEM_ID": 2,
    "MONEY_SEND_ITEM_NAME": "บันทึกข้อความขอซื้อขอจ้าง",
    "updated_at": null,
    "created_at": null
  },
  {
    "MONEY_SEND_ITEM_ID": 3,
    "MONEY_SEND_ITEM_NAME": "บันทึกแต่งตั้งคณะกรรมการ",
    "updated_at": null,
    "created_at": null
  },
  {
    "MONEY_SEND_ITEM_ID": 4,
    "MONEY_SEND_ITEM_NAME": "ประกาศผู้ชนะผู้เสนอราคา",
    "updated_at": null,
    "created_at": null
  },
  {
    "MONEY_SEND_ITEM_ID": 5,
    "MONEY_SEND_ITEM_NAME": "รายงานผลการพิจารณาขอซื้อขอจ้าง",
    "updated_at": null,
    "created_at": null
  },
  {
    "MONEY_SEND_ITEM_ID": 6,
    "MONEY_SEND_ITEM_NAME": "ใบสั่งซื้อสั่งจ้าง",
    "updated_at": null,
    "created_at": null
  },
  {
    "MONEY_SEND_ITEM_ID": 7,
    "MONEY_SEND_ITEM_NAME": "ใบตรวจรับ",
    "updated_at": null,
    "created_at": null
  }
]
```
