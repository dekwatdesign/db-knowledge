# `blb_bag_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_bag_status_id | int(11) | NO | PRI | 0 |  |  |
| blb_bag_status_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | blb_bag_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "blb_bag_status_id": 1,
    "blb_bag_status_name": "พร้อมใช้งาน"
  },
  {
    "blb_bag_status_id": 2,
    "blb_bag_status_name": "กำลังตรวจสอบ"
  },
  {
    "blb_bag_status_id": 3,
    "blb_bag_status_name": "จำหน่าย"
  },
  {
    "blb_bag_status_id": 4,
    "blb_bag_status_name": "ติดเชื้อ"
  },
  {
    "blb_bag_status_id": 5,
    "blb_bag_status_name": "กำลังใช้งาน"
  },
  {
    "blb_bag_status_id": 6,
    "blb_bag_status_name": "จอง"
  },
  {
    "blb_bag_status_id": 7,
    "blb_bag_status_name": "รอรับเข้าคลัง"
  },
  {
    "blb_bag_status_id": 99,
    "blb_bag_status_name": "ยกเลิก"
  }
]
```
