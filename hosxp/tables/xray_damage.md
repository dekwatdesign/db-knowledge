# `xray_damage`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| damage_id | int(11) | NO | PRI | 0 |  |  |
| damage_name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | damage_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "damage_id": 1,
    "damage_name": "ภาพตกฟิลม์",
    "hos_guid": null
  },
  {
    "damage_id": 2,
    "damage_name": "Position ไม่ดี",
    "hos_guid": null
  },
  {
    "damage_id": 3,
    "damage_name": "ฟิมพ์โดนแสง",
    "hos_guid": null
  },
  {
    "damage_id": 4,
    "damage_name": "ถ่ายภาพซ้อน",
    "hos_guid": null
  },
  {
    "damage_id": 5,
    "damage_name": "Grid cut off",
    "hos_guid": null
  },
  {
    "damage_id": 6,
    "damage_name": "ฟิลม์ติดในเครื่องล้าง",
    "hos_guid": null
  },
  {
    "damage_id": 7,
    "damage_name": "เครื่อง x-ray ขัดข้อง",
    "hos_guid": null
  },
  {
    "damage_id": 8,
    "damage_name": "ไฟฟ้าดับ",
    "hos_guid": null
  }
]
```
