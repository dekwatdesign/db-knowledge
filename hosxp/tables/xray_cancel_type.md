# `xray_cancel_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_cancel_type_id | int(11) | NO | PRI | 0 |  |  |
| xray_cancel_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_xray_cancel_type_name | xray_cancel_type_name | yes | 1 |
| PRIMARY | xray_cancel_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "xray_cancel_type_id": 5,
    "xray_cancel_type_name": "คนไข้ปฏิเสธการเอ๊กซเรย์"
  },
  {
    "xray_cancel_type_id": 4,
    "xray_cancel_type_name": "แพทย์ให้ยกเลิกการตรวจ"
  },
  {
    "xray_cancel_type_id": 1,
    "xray_cancel_type_name": "เลือกข้างไม่ถูกต้อง"
  },
  {
    "xray_cancel_type_id": 3,
    "xray_cancel_type_name": "เลือกคนไข้ผิดคน"
  },
  {
    "xray_cancel_type_id": 6,
    "xray_cancel_type_name": "เลือกรายการ/โปรแกรม ไม่ถูกต้อง"
  },
  {
    "xray_cancel_type_id": 2,
    "xray_cancel_type_name": "เลือกส่วนตรวจไม่ถูกต้อง"
  }
]
```
