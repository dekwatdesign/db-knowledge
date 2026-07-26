# `refer_cause`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "id": 1,
    "name": "เพื่อการวินิจฉัยและรักษา",
    "hos_guid": null
  },
  {
    "id": 2,
    "name": "เพื่อการวินิจฉัย",
    "hos_guid": null
  },
  {
    "id": 3,
    "name": "เพื่อการรักษาต่อเนื่อง",
    "hos_guid": null
  },
  {
    "id": 4,
    "name": "เพื่อการดูแลต่อใกล้บ้าน",
    "hos_guid": null
  },
  {
    "id": 5,
    "name": "ตามความต้องการผู้ป่วย",
    "hos_guid": null
  },
  {
    "id": 6,
    "name": "เพื่อส่งผู้ป่วยกลับไปยังสถานพยาบาลที่ส่งผู้ป่วยมา",
    "hos_guid": null
  },
  {
    "id": 7,
    "name": "เป็นการตอบกลับการส่งต่อ(ไม่ได้ส่งผู้ป่วย)",
    "hos_guid": null
  }
]
```
