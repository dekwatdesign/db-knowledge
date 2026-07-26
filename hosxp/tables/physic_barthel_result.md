# `physic_barthel_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_barthel_result_id | int(11) | NO | PRI | 0 |  |  |
| physic_barthel_result_min | int(11) | YES |  | NULL |  |  |
| physic_barthel_result_max | int(11) | YES |  | NULL |  |  |
| physic_barthel_result_note | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |
| physic_barthel_result_note2 | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_barthel_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "physic_barthel_result_id": 1,
    "physic_barthel_result_min": 0,
    "physic_barthel_result_max": 20,
    "physic_barthel_result_note": "Very severity disabled",
    "active": "Y",
    "physic_barthel_result_note2": "ไม่สามารถช่วยเหลือตนเองได้ ต้องมีผู้ช่วยเหลืออย่างมาก"
  },
  {
    "physic_barthel_result_id": 2,
    "physic_barthel_result_min": 25,
    "physic_barthel_result_max": 45,
    "physic_barthel_result_note": "Severity disabled",
    "active": "Y",
    "physic_barthel_result_note2": "ผู้ป่วยทำกิจกรรมได้ลำบาก ต้องมีผู้ช่วยเหลืออย่างมาก"
  },
  {
    "physic_barthel_result_id": 4,
    "physic_barthel_result_min": 75,
    "physic_barthel_result_max": 90,
    "physic_barthel_result_note": "Mildly disabled",
    "active": "Y",
    "physic_barthel_result_note2": "ในการทำกิจกรรมผู้ป่วยต้องมีผู้ช่วยเหลือระดับเล็กน้อย"
  },
  {
    "physic_barthel_result_id": 3,
    "physic_barthel_result_min": 50,
    "physic_barthel_result_max": 70,
    "physic_barthel_result_note": "Moderately disabled",
    "active": "Y",
    "physic_barthel_result_note2": "ในการทำกิจกรรมของผู้ป่วยต้องมีผู้ช่วยเหลือระดับปานกลาง"
  },
  {
    "physic_barthel_result_id": 5,
    "physic_barthel_result_min": 100,
    "physic_barthel_result_max": 100,
    "physic_barthel_result_note": "Physically independent but not necessary normal or social independent",
    "active": "Y",
    "physic_barthel_result_note2": "ผู้ป่วยสามารถทำกิจกรรมได้ด้วยตนเอง"
  }
]
```
