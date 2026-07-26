# `physic_pe_treatment_side`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_treatment_side_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_treatment_side_name | varchar(50) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_pe_treatment_side_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "physic_pe_treatment_side_id": 1,
    "physic_pe_treatment_side_name": "ซ้าย",
    "active_status": "Y"
  },
  {
    "physic_pe_treatment_side_id": 2,
    "physic_pe_treatment_side_name": "ขวา",
    "active_status": "Y"
  },
  {
    "physic_pe_treatment_side_id": 3,
    "physic_pe_treatment_side_name": "ทั้งสองข้าง",
    "active_status": "Y"
  },
  {
    "physic_pe_treatment_side_id": 4,
    "physic_pe_treatment_side_name": "ไม่ระบุ",
    "active_status": "Y"
  },
  {
    "physic_pe_treatment_side_id": 5,
    "physic_pe_treatment_side_name": "บน",
    "active_status": "Y"
  },
  {
    "physic_pe_treatment_side_id": 6,
    "physic_pe_treatment_side_name": "ล่าง",
    "active_status": "Y"
  }
]
```
