# `physic_pe_treatment_area`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_treatment_area_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_treatment_area_name | varchar(100) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_pe_treatment_area_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "physic_pe_treatment_area_id": 1,
    "physic_pe_treatment_area_name": "คอ",
    "active_status": "Y"
  },
  {
    "physic_pe_treatment_area_id": 2,
    "physic_pe_treatment_area_name": "บ่า",
    "active_status": "Y"
  },
  {
    "physic_pe_treatment_area_id": 3,
    "physic_pe_treatment_area_name": "ไหล่",
    "active_status": "Y"
  },
  {
    "physic_pe_treatment_area_id": 4,
    "physic_pe_treatment_area_name": "สะบัก",
    "active_status": "Y"
  },
  {
    "physic_pe_treatment_area_id": 5,
    "physic_pe_treatment_area_name": "แขน",
    "active_status": "Y"
  },
  {
    "physic_pe_treatment_area_id": 6,
    "physic_pe_treatment_area_name": "ข้อศอก",
    "active_status": "Y"
  },
  {
    "physic_pe_treatment_area_id": 7,
    "physic_pe_treatment_area_name": "ข้อมือ",
    "active_status": "Y"
  },
  {
    "physic_pe_treatment_area_id": 8,
    "physic_pe_treatment_area_name": "ผ่ามือ",
    "active_status": "Y"
  }
]
```
