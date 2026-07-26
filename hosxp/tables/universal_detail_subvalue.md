# `universal_detail_subvalue`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| universal_detail_subvalue_id | int(11) | NO | PRI | 0 |  |  |
| universal_detail_id | int(11) | YES | MUL | NULL |  |  |
| universal_subitem_value | varchar(150) | YES |  | NULL |  |  |
| universal_item_value_list_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_universal_detail_id | universal_detail_id | no | 1 |
| PRIMARY | universal_detail_subvalue_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "universal_detail_subvalue_id": 1,
    "universal_detail_id": 5408,
    "universal_subitem_value": "ส่งตรวจ VABS",
    "universal_item_value_list_id": 66,
    "hos_guid": null
  },
  {
    "universal_detail_subvalue_id": 2,
    "universal_detail_id": 5408,
    "universal_subitem_value": "เข้ากลุ่มส่งเสริมพัฒนาการที่มีความเสี่ยงต่อพัฒนาการล่าช้าโดยมีผู้ปกครองมีส่วนร่วม พิจารณาตรวจทางจิตวิทยา",
    "universal_item_value_list_id": 67,
    "hos_guid": null
  },
  {
    "universal_detail_subvalue_id": 3,
    "universal_detail_id": 5409,
    "universal_subitem_value": "Couseling ผู้ปกครองในการอบรมเลี้ยงดูที่เหมาะสม และเลี้ยงดูไปในทางเดียวกัน",
    "universal_item_value_list_id": 53,
    "hos_guid": null
  },
  {
    "universal_detail_subvalue_id": 4,
    "universal_detail_id": 5409,
    "universal_subitem_value": "การปรับพฤติกรรมเบื้องต้น ระบุ",
    "universal_item_value_list_id": 54,
    "hos_guid": null
  },
  {
    "universal_detail_subvalue_id": 5,
    "universal_detail_id": 5409,
    "universal_subitem_value": "การ Empowerment",
    "universal_item_value_list_id": 57,
    "hos_guid": null
  },
  {
    "universal_detail_subvalue_id": 6,
    "universal_detail_id": 5409,
    "universal_subitem_value": "Supportive Couseling",
    "universal_item_value_list_id": 58,
    "hos_guid": null
  },
  {
    "universal_detail_subvalue_id": 7,
    "universal_detail_id": 5409,
    "universal_subitem_value": "การพิทักษ์สิทธิ ระบุ",
    "universal_item_value_list_id": 59,
    "hos_guid": null
  },
  {
    "universal_detail_subvalue_id": 8,
    "universal_detail_id": 5409,
    "universal_subitem_value": "ชี้แจงระบบนัด ความสำคัญของการมาตามนัด และการบำบัดการรักษาต่อเนื่อง",
    "universal_item_value_list_id": 63,
    "hos_guid": null
  }
]
```
