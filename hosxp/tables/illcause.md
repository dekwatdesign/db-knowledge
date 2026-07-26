# `illcause`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| illcause_id | char(10) | NO | PRI |  |  |  |
| illcause_name | char(100) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | illcause_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "illcause_id": "A01",
    "illcause_name": "งานที่ยืนนานกว่า 1 ชม.",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "illcause_id": "A02",
    "illcause_name": "งานที่ต้องเดินติดต่อกันเกิน 1 ชม.",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "illcause_id": "A03",
    "illcause_name": "งานที่อยู่ในท่าคุกเข่านั่งยองๆซ้ำๆกัน",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "illcause_id": "A04",
    "illcause_name": "งานที่ดัน ลาก ยก ของหนักเป็นประจำ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "illcause_id": "A05",
    "illcause_name": "งานที่ต้องก้มหลัง ก้มศีรษะเป็นประจำ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "illcause_id": "A06",
    "illcause_name": "งานที่ต้องยกแขนเหนือไหล่เป็นประจำ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "illcause_id": "A07",
    "illcause_name": "งานที่มีการเคลื่อนไหวมือหรือข้อมือเป็นประจำ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "illcause_id": "A08",
    "illcause_name": "งานที่ต้องแหงนคอเป็นประจำ",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
