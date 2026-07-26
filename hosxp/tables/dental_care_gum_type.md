# `dental_care_gum_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dental_care_gum_type_id | int(11) | NO | PRI | 0 |  |  |
| dental_care_gum_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dental_care_gum_type_name | dental_care_gum_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dental_care_gum_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "dental_care_gum_type_id": 0,
    "dental_care_gum_type_name": "ปกติ",
    "hos_guid": null
  },
  {
    "dental_care_gum_type_id": 1,
    "dental_care_gum_type_name": "มีเลือดออกภายหลังจากการตรวจด้วยเครื่องมือตรวจปริทันต์",
    "hos_guid": null
  },
  {
    "dental_care_gum_type_id": 2,
    "dental_care_gum_type_name": "มีหินน้ำลาย แต่ยังเห็นแถบดำบนเครื่องมือ",
    "hos_guid": null
  },
  {
    "dental_care_gum_type_id": 3,
    "dental_care_gum_type_name": "มีร่องลึกปริทันต์ 4-5 มม. (ขอบเหงือกอยู่ภายในแถบดำ)",
    "hos_guid": null
  },
  {
    "dental_care_gum_type_id": 4,
    "dental_care_gum_type_name": "มีร่องลึกปริทันต์ 6 มม. หรือมากกว่า (มองไม่เห็นแถบดำบนเครื่องมือ)",
    "hos_guid": null
  },
  {
    "dental_care_gum_type_id": 5,
    "dental_care_gum_type_name": "มีหินน้ำลายและมีเลือดออกภายหลังจากการตรวจด้วยเครื่องมือตรวจปริทันต์",
    "hos_guid": null
  },
  {
    "dental_care_gum_type_id": 9,
    "dental_care_gum_type_name": "ตรวจไม่ได้/ไม่ตรวจ",
    "hos_guid": null
  }
]
```
