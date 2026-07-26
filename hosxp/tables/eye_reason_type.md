# `eye_reason_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| eye_reason_type_id | int(11) | NO | PRI | 0 |  |  |
| eye_reason_type_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | eye_reason_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "eye_reason_type_id": 1,
    "eye_reason_type_name": "ติดต่อญาติไม่ได้/ไม่มีญาติ"
  },
  {
    "eye_reason_type_id": 2,
    "eye_reason_type_name": "ประเมินดวงตาแล้วนำไปใช้ไม่ได้"
  },
  {
    "eye_reason_type_id": 3,
    "eye_reason_type_name": "พบข้อห้าม ติดเชื้อรุนแรง หรือ มะเร็ง"
  },
  {
    "eye_reason_type_id": 4,
    "eye_reason_type_name": "เจ้าหน้าที่ไม่เพียงพอ ไม่มีทีมจัดเก็บดวงตา"
  },
  {
    "eye_reason_type_id": 5,
    "eye_reason_type_name": "เครื่องมือการจัดเก็บดวงตาไม่เพียงพอ"
  },
  {
    "eye_reason_type_id": 6,
    "eye_reason_type_name": "ญาติเปลี่ยนใจไม่บริจาค"
  },
  {
    "eye_reason_type_id": 7,
    "eye_reason_type_name": "ญาติไม่เห็นด้วยกับการบริจาค ญาติไม่ยอมเซ็นยินยอม"
  },
  {
    "eye_reason_type_id": 8,
    "eye_reason_type_name": "ญาติต้องการพาผู้ป่วยเสียชีวิตที่บ้าน ญาติเซ็นไม่สมัครใจรักษา"
  }
]
```
