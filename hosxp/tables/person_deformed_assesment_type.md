# `person_deformed_assesment_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_deformed_assessment_type_id | int(11) | NO | PRI | 0 |  |  |
| person_deformed_assesment_type_code | varchar(20) | YES | UNI | NULL |  |  |
| person_deformed_assesment_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_person_deformed_assesment_type_code | person_deformed_assesment_type_code | yes | 1 |
| ix_person_deformed_assesment_type_name | person_deformed_assesment_type_name | yes | 1 |
| PRIMARY | person_deformed_assessment_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "person_deformed_assessment_type_id": 1,
    "person_deformed_assesment_type_code": "b210",
    "person_deformed_assesment_type_name": "การทำงานของการเห็น"
  },
  {
    "person_deformed_assessment_type_id": 2,
    "person_deformed_assesment_type_code": "b230",
    "person_deformed_assesment_type_name": "การทำงานด้านการได้ยิน"
  },
  {
    "person_deformed_assessment_type_id": 3,
    "person_deformed_assesment_type_code": "b310",
    "person_deformed_assesment_type_name": "การทำงานที่ก่อให้เกิดเสียง"
  },
  {
    "person_deformed_assessment_type_id": 4,
    "person_deformed_assesment_type_code": "b320",
    "person_deformed_assesment_type_name": "การทำงานด้านการออกเสียงพูด"
  },
  {
    "person_deformed_assessment_type_id": 5,
    "person_deformed_assesment_type_code": "b330",
    "person_deformed_assesment_type_name": "การทำงานด้านความคล่องและจังหวะของการพูด"
  },
  {
    "person_deformed_assessment_type_id": 6,
    "person_deformed_assesment_type_code": "d115",
    "person_deformed_assesment_type_name": "การฟัง"
  },
  {
    "person_deformed_assessment_type_id": 7,
    "person_deformed_assesment_type_code": "d310",
    "person_deformed_assesment_type_name": "การรับการสื่อสารด้วยข้อความภาษาพูด"
  },
  {
    "person_deformed_assessment_type_id": 8,
    "person_deformed_assesment_type_code": "d320",
    "person_deformed_assesment_type_name": "การรับการสื่อสารด้วยข้อความภาษามือที่เป็นทางการ"
  }
]
```
