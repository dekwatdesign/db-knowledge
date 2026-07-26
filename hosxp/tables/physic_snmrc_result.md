# `physic_snmrc_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_snmrc_result_id | int(11) | NO | PRI | 0 |  |  |
| physic_snmrc_result_name | varchar(255) | YES |  | NULL |  |  |
| physic_snmrc_result_note | varchar(255) | YES |  | NULL |  |  |
| physic_snmrc_result_value | int(11) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_snmrc_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "physic_snmrc_result_id": 1,
    "physic_snmrc_result_name": "Complete independent",
    "physic_snmrc_result_note": "ทำกิจกรรมนั้นๆได้ทุกขั้นตอนภายในเวลาพอสมควร ไม่ต้องดัดแปลงวิธีการ ไม่ต้องใช้เครื่องช่วย และมีความปลอดภัยในการกระทำ",
    "physic_snmrc_result_value": 5,
    "active": "Y"
  },
  {
    "physic_snmrc_result_id": 3,
    "physic_snmrc_result_name": "Independent  with minimal assist",
    "physic_snmrc_result_note": "ผู้ป่วยช่วยเหลือตัวเองได้มากกว่า 50% ออกแรงทำเอง ต้องการผู้ช่วยเหลือเล็กน้อย",
    "physic_snmrc_result_value": 3,
    "active": "Y"
  },
  {
    "physic_snmrc_result_id": 4,
    "physic_snmrc_result_name": "Independent  with moderate assist",
    "physic_snmrc_result_note": "ผู้ป่วยช่วยเหลือตัวเองได้น้อยกว่าหรือเท่ากับ 50% ต้องการผู้ช่วยเหลือมาก",
    "physic_snmrc_result_value": 2,
    "active": "Y"
  },
  {
    "physic_snmrc_result_id": 5,
    "physic_snmrc_result_name": "Dependent",
    "physic_snmrc_result_note": "ผู้ป่วยช่วยเหลือตนเองไม่ได้เลย",
    "physic_snmrc_result_value": 1,
    "active": "Y"
  },
  {
    "physic_snmrc_result_id": 2,
    "physic_snmrc_result_name": "Independent with assist",
    "physic_snmrc_result_note": "โดยระบุว่า assist โดย device หรือ supervision กล่าวคือสามารถทำกิจกรรมนั้นได้เองแต่อาจใช้เวลามากกว่าปกติ หรือมีความเสี่ยงที่จะเกิดอันตรายอยู่บ้าง อาจต้องดัดแปลงวิธีการ อาจต้องใช้เครื่องช่วย หรืออาจต้องมีผู้คอยระวัง ชี้นำคะยั้นคะยอ แต่ผู้ช่วยเหลือไม่ได้",
    "physic_snmrc_result_value": 4,
    "active": "Y"
  }
]
```
