# `home_visit_lookup`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| home_visit_lookup_id | int(11) | NO | PRI | 0 |  |  |
| home_vt_group | varchar(30) | YES |  | NULL |  |  |
| home_vt_sub_group | varchar(30) | YES |  | NULL |  |  |
| home_vt_answer | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | home_visit_lookup_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "home_visit_lookup_id": 1,
    "home_vt_group": "home_visit_patient_type",
    "home_vt_sub_group": "home_visit_patient_type",
    "home_vt_answer": "7001 กลุ่มผู้ป่วยที่สามารถรักษาได้"
  },
  {
    "home_visit_lookup_id": 2,
    "home_vt_group": "home_visit_patient_type",
    "home_vt_sub_group": "home_visit_patient_type",
    "home_vt_answer": "7002 กลุ่มผู้ป่วยโรคเรื้อรังที่ไม่สามารถคุมอาหารได้"
  },
  {
    "home_visit_lookup_id": 3,
    "home_vt_group": "home_visit_patient_type",
    "home_vt_sub_group": "home_visit_patient_type",
    "home_vt_answer": "7003 กลุ่มผู้ป่วยโรคเรื้อรังและไร้ความสามารถเล็กน้อย"
  },
  {
    "home_visit_lookup_id": 4,
    "home_vt_group": "home_visit_indicate",
    "home_vt_sub_group": "home_visit_indicate",
    "home_vt_answer": "ได้รับการส่งต่อจากหน่วยบริการประจำ"
  },
  {
    "home_visit_lookup_id": 5,
    "home_vt_group": "home_visit_indicate",
    "home_vt_sub_group": "home_visit_indicate",
    "home_vt_answer": "ได้รับการร้องขอ/ติดต่อจากผู้ป่วยหรือญาติ โดยได้มีการประสานข้อมูลการดูแลผู้ป่วยกับหน่วยบริการประจำ/หน่วยบริการที่รับผิดชอบในพื้นที่"
  },
  {
    "home_visit_lookup_id": 6,
    "home_vt_group": "home_visit_indicate",
    "home_vt_sub_group": "home_visit_indicate",
    "home_vt_answer": "ค้นพบโดยคลินิก โดยได้มีการประสานข้อมูลการดูแลผู้ป่วยกับหน่วยบริการประจำ/หน่วยบริการที่รับผิดชอบในพื้นที่"
  },
  {
    "home_visit_lookup_id": 7,
    "home_vt_group": "home_visit_treat",
    "home_vt_sub_group": "home_visit_treat",
    "home_vt_answer": "รักษาต่อเนื่อง ระบุ"
  },
  {
    "home_visit_lookup_id": 8,
    "home_vt_group": "home_visit_treat",
    "home_vt_sub_group": "home_visit_treat",
    "home_vt_answer": "รักษาไม่ต่อเนื่อง ระบุ"
  }
]
```
