# `handicapped_hhc_activity`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_hhc_activity_id | int(11) | NO | PRI | 0 |  |  |
| handicapped_hhc_activity_name | char(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | handicapped_hhc_activity_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "handicapped_hhc_activity_id": 1,
    "handicapped_hhc_activity_name": "การรับประทานอาหารที่เหมาะสม",
    "hos_guid": null
  },
  {
    "handicapped_hhc_activity_id": 2,
    "handicapped_hhc_activity_name": "การจัดสิ่งแวดล้อมที่บ้าน",
    "hos_guid": null
  },
  {
    "handicapped_hhc_activity_id": 3,
    "handicapped_hhc_activity_name": "การสังเกตอาการผิดปกติ",
    "hos_guid": null
  },
  {
    "handicapped_hhc_activity_id": 4,
    "handicapped_hhc_activity_name": "ข้อจำกัด/ข้อควรระวังในการปฏิบัติตัว",
    "hos_guid": null
  },
  {
    "handicapped_hhc_activity_id": 5,
    "handicapped_hhc_activity_name": "การมาตรวจตามนัด",
    "hos_guid": null
  },
  {
    "handicapped_hhc_activity_id": 6,
    "handicapped_hhc_activity_name": "การรับประทานยา",
    "hos_guid": null
  },
  {
    "handicapped_hhc_activity_id": 7,
    "handicapped_hhc_activity_name": "การดูแลอุปกรณ์ติดตัว",
    "hos_guid": null
  },
  {
    "handicapped_hhc_activity_id": 8,
    "handicapped_hhc_activity_name": "-NG",
    "hos_guid": null
  }
]
```
