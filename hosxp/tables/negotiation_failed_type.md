# `negotiation_failed_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| negotiation_failed_type_id | int(11) | NO | PRI | 0 |  |  |
| negotiation_failed_type_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | negotiation_failed_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "negotiation_failed_type_id": 1,
    "negotiation_failed_type_name": "ไม่ระบุ"
  },
  {
    "negotiation_failed_type_id": 2,
    "negotiation_failed_type_name": "ความเชื่อกลัวชาติหน้าอวัยวะไม่ครบ"
  },
  {
    "negotiation_failed_type_id": 3,
    "negotiation_failed_type_name": "ความเชื่อ ทางศาสนา ลัทธิ"
  },
  {
    "negotiation_failed_type_id": 4,
    "negotiation_failed_type_name": "ไม่อยากให้ผู้ป่วยเจ็บ/ทรมาน/อยากให้จากไปอย่างสงบ"
  },
  {
    "negotiation_failed_type_id": 5,
    "negotiation_failed_type_name": "ไม่อยากให้ศพมีแผล/กลัวเสียภาพลักษณ์"
  },
  {
    "negotiation_failed_type_id": 6,
    "negotiation_failed_type_name": "ญาติทำใจไม่ได้ที่ผู้ป่วยเสียชีวิต ยังมีความหวัง"
  },
  {
    "negotiation_failed_type_id": 7,
    "negotiation_failed_type_name": "ญาติไม่เห็นด้วยกับการบริจาค ญาติไม่ยอมเซ็นยินยอม"
  },
  {
    "negotiation_failed_type_id": 8,
    "negotiation_failed_type_name": "ญาติต้องการพาผู้ป่วยเสียชีวิตที่บ้าน ญาติเซ็นไม่สมัครใจรักษา"
  }
]
```
