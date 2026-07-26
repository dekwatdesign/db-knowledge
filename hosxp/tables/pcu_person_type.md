# `pcu_person_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pcu_person_type_id | int(11) | NO | PRI | 0 |  |  |
| pcu_person_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pcu_person_type_name | pcu_person_type_name | yes | 1 |
| PRIMARY | pcu_person_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "pcu_person_type_id": 403,
    "pcu_person_type_name": "เจ้าหน้าที่ที่ปฏิบัติหน้าที่ ณ ช่องทางเข้าออกระหว่างประเทศ ที่ปฏิบัติหน้าที่ควบคุมโรคชายแดน ที่เกี่ยวข้องกับการควบคุมโรคโควิด 19 ที่มีโอกาสสัมผัสผู้ป่วย"
  },
  {
    "pcu_person_type_id": 404,
    "pcu_person_type_name": "เจ้าหน้าที่อื่นๆ ที่เกี่ยวข้องกับการควบคุมโรคโควิด 19 ที่มีโอกาสสัมผัสผู้ป่วย "
  },
  {
    "pcu_person_type_id": 402,
    "pcu_person_type_name": "ตำรวจที่เกี่ยวข้องกับการควบคุมโรคโควิด 19 ที่มีโอกาสสัมผัสผู้ป่วย หรือ ปฏิบัติหน้าที่ ณ ช่องทางเข้าออกระหว่างประเทศ ที่ปฏิบัติหน้าที่ควบคุมโรคชายแดน"
  },
  {
    "pcu_person_type_id": 401,
    "pcu_person_type_name": "ทหารที่เกี่ยวข้องกับการควบคุมโรคโควิด 19 ที่มีโอกาสสัมผัสผู้ป่วย หรือ ปฏิบัติหน้าที่ ณ ช่องทางเข้าออกระหว่างประเทศ ที่ปฏิบัติหน้าที่ควบคุมโรคชายแดน"
  },
  {
    "pcu_person_type_id": 502,
    "pcu_person_type_name": "นักเรียน อายุ 12-17 ปี"
  },
  {
    "pcu_person_type_id": 101,
    "pcu_person_type_name": "บุคลากรทางการแพทย์และสาธารณสุขภาครัฐ"
  },
  {
    "pcu_person_type_id": 501,
    "pcu_person_type_name": "ประชาชนทั่วไป"
  },
  {
    "pcu_person_type_id": 201,
    "pcu_person_type_name": "ผู้มีอายุ 60 ปีขึ้นไป"
  }
]
```
