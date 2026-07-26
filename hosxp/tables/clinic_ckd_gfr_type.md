# `clinic_ckd_gfr_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_ckd_gfr_type_id | int(11) | NO | PRI | 0 |  |  |
| clinic_ckd_gfr_type_name | varchar(200) | YES | UNI | NULL |  |  |
| clinic_ckd_gfr_type_code | varchar(10) | YES |  | NULL |  |  |
| clinic_ckd_gfr_definition | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinic_ckd_gfr_type_name | clinic_ckd_gfr_type_name | yes | 1 |
| PRIMARY | clinic_ckd_gfr_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "clinic_ckd_gfr_type_id": 1,
    "clinic_ckd_gfr_type_name": "ปกติ หรือ สูง (G1)",
    "clinic_ckd_gfr_type_code": "G1",
    "clinic_ckd_gfr_definition": ">=90"
  },
  {
    "clinic_ckd_gfr_type_id": 2,
    "clinic_ckd_gfr_type_name": "ลดลงเล็กน้อย (G2)",
    "clinic_ckd_gfr_type_code": "G2",
    "clinic_ckd_gfr_definition": "60-89"
  },
  {
    "clinic_ckd_gfr_type_id": 3,
    "clinic_ckd_gfr_type_name": "ลดลงเล็กน้อยถึงปานกลาง (G3a)",
    "clinic_ckd_gfr_type_code": "G3a",
    "clinic_ckd_gfr_definition": "45-59"
  },
  {
    "clinic_ckd_gfr_type_id": 4,
    "clinic_ckd_gfr_type_name": "ลดลงปานกลางถึงมาก (G3b)",
    "clinic_ckd_gfr_type_code": "G3b",
    "clinic_ckd_gfr_definition": "30-44"
  },
  {
    "clinic_ckd_gfr_type_id": 5,
    "clinic_ckd_gfr_type_name": "ลดลงมาก (G4)",
    "clinic_ckd_gfr_type_code": "G4",
    "clinic_ckd_gfr_definition": "15-29"
  },
  {
    "clinic_ckd_gfr_type_id": 6,
    "clinic_ckd_gfr_type_name": "ไตวายระยะสุดท้าย (G5)",
    "clinic_ckd_gfr_type_code": "G5",
    "clinic_ckd_gfr_definition": "<15"
  }
]
```
