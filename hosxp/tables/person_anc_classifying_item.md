# `person_anc_classifying_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_anc_classifying_item_id | int(11) | NO | PRI | 0 |  |  |
| person_anc_classifying_item_name | varchar(250) | YES | UNI | NULL |  |  |
| person_anc_classifying_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_anc_classifying_item_name | person_anc_classifying_item_name | yes | 1 |
| PRIMARY | person_anc_classifying_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "person_anc_classifying_item_id": 1,
    "person_anc_classifying_item_name": "เคยมีทารกตายในครรภ์ หรือเสียชีวิตแรกเกิด (1 เดือนแรก)",
    "person_anc_classifying_type_id": 1,
    "hos_guid": null
  },
  {
    "person_anc_classifying_item_id": 2,
    "person_anc_classifying_item_name": "เคยแท้งเอง 3 ครั้ง หรือมากกว่า ติดต่อกัน",
    "person_anc_classifying_type_id": 1,
    "hos_guid": null
  },
  {
    "person_anc_classifying_item_id": 3,
    "person_anc_classifying_item_name": "เคยคลอดบุตร น้ำหนักตัวน้อยกว่า 2,500 กรัม",
    "person_anc_classifying_type_id": 1,
    "hos_guid": null
  },
  {
    "person_anc_classifying_item_id": 4,
    "person_anc_classifying_item_name": "เคยคลอดบุตร น้ำหนักมากกว่า 4,000 กรัม",
    "person_anc_classifying_type_id": 1,
    "hos_guid": null
  },
  {
    "person_anc_classifying_item_id": 5,
    "person_anc_classifying_item_name": "เคยเข้ารับการรักษาพยาบาลเพราะความดันโลหิตสูงระหว่างตั้งครรภ์หรือครรภ์เป็นพิษ",
    "person_anc_classifying_type_id": 1,
    "hos_guid": null
  },
  {
    "person_anc_classifying_item_id": 6,
    "person_anc_classifying_item_name": "เคยผ่าตัดอวัยวะภายในระบบสืบพันธุ์ เช่นผ่าตัดคลอด  ผ่าตัดเนื้องอกมดลูก  ผ่าตัดปากมดลูก   ผูกปากมดลูก  ฯลฯ",
    "person_anc_classifying_type_id": 1,
    "hos_guid": null
  },
  {
    "person_anc_classifying_item_id": 7,
    "person_anc_classifying_item_name": "ครรภ์แฝด",
    "person_anc_classifying_type_id": 2,
    "hos_guid": null
  },
  {
    "person_anc_classifying_item_id": 8,
    "person_anc_classifying_item_name": "อายุ < 17 ปี  ( นับถึง EDC )",
    "person_anc_classifying_type_id": 2,
    "hos_guid": null
  }
]
```
