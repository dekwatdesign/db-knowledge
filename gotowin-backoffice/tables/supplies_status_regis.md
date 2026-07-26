# `supplies_status_regis`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| REGIS_STATUS_ID | int | NO | PRI | NULL | auto_increment |  |
| REGIS_STATUS_NAME | varchar(255) | YES |  |  |  | ชื่อสถานะทะเบียนคุม |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | REGIS_STATUS_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "REGIS_STATUS_ID": 1,
    "REGIS_STATUS_NAME": "ลงทะเบียนคุม",
    "updated_at": null,
    "created_at": null
  },
  {
    "REGIS_STATUS_ID": 2,
    "REGIS_STATUS_NAME": "ใบเสนอราคา",
    "updated_at": null,
    "created_at": null
  },
  {
    "REGIS_STATUS_ID": 3,
    "REGIS_STATUS_NAME": "ทำรายการขอซื้อ",
    "updated_at": null,
    "created_at": null
  },
  {
    "REGIS_STATUS_ID": 4,
    "REGIS_STATUS_NAME": "จัดทำใบสั่งซื้อ",
    "updated_at": null,
    "created_at": null
  },
  {
    "REGIS_STATUS_ID": 5,
    "REGIS_STATUS_NAME": "ตรวจรับ",
    "updated_at": null,
    "created_at": null
  },
  {
    "REGIS_STATUS_ID": 6,
    "REGIS_STATUS_NAME": "ยกเลิกรายการ",
    "updated_at": null,
    "created_at": null
  },
  {
    "REGIS_STATUS_ID": 7,
    "REGIS_STATUS_NAME": "ยืนยันตรวจรับ",
    "updated_at": null,
    "created_at": null
  }
]
```
