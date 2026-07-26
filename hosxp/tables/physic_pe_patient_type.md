# `physic_pe_patient_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_patient_type_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_patient_type_name | varchar(150) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_pe_patient_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "physic_pe_patient_type_id": 1,
    "physic_pe_patient_type_name": "ผู้ป่วยกระดูกและข้อต่อ(ปวดคอ)",
    "active_status": "Y"
  },
  {
    "physic_pe_patient_type_id": 2,
    "physic_pe_patient_type_name": "ผู้ป่วยกระดูกและข้อต่อ(ปวดหลัง)",
    "active_status": "Y"
  },
  {
    "physic_pe_patient_type_id": 3,
    "physic_pe_patient_type_name": "ผู้ป่วยกระดูกและข้อต่อ(ข้อไหล่ยึดติด)",
    "active_status": "Y"
  },
  {
    "physic_pe_patient_type_id": 4,
    "physic_pe_patient_type_name": "ผู้ป่วยกระดูกและข้อต่อ(อื่นๆ)",
    "active_status": "Y"
  },
  {
    "physic_pe_patient_type_id": 5,
    "physic_pe_patient_type_name": "ผู้ป่วยระบบทางเดินหายใจ",
    "active_status": "Y"
  },
  {
    "physic_pe_patient_type_id": 6,
    "physic_pe_patient_type_name": "ผู้ป่วยผ่าตัดหัวใจ",
    "active_status": "Y"
  },
  {
    "physic_pe_patient_type_id": 7,
    "physic_pe_patient_type_name": "ผู้ป่วยระบบประสาท",
    "active_status": "Y"
  }
]
```
