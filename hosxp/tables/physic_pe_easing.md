# `physic_pe_easing`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_easing_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_easing_name | varchar(200) | YES | MUL | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| physic_pe_patient_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_pe_easing_name | physic_pe_easing_name | no | 1 |
| ix_idx_physic_pe_easing_patient_type | physic_pe_patient_type_id | no | 1 |
| PRIMARY | physic_pe_easing_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "physic_pe_easing_id": 1,
    "physic_pe_easing_name": "rest",
    "active_status": "Y",
    "physic_pe_patient_type_id": 1
  },
  {
    "physic_pe_easing_id": 2,
    "physic_pe_easing_name": "ทานยา",
    "active_status": "Y",
    "physic_pe_patient_type_id": 1
  },
  {
    "physic_pe_easing_id": 3,
    "physic_pe_easing_name": "ไม่มี",
    "active_status": "Y",
    "physic_pe_patient_type_id": 1
  },
  {
    "physic_pe_easing_id": 4,
    "physic_pe_easing_name": "ประคบเย็น",
    "active_status": "Y",
    "physic_pe_patient_type_id": 1
  },
  {
    "physic_pe_easing_id": 5,
    "physic_pe_easing_name": "ประคบร้อน",
    "active_status": "Y",
    "physic_pe_patient_type_id": 1
  },
  {
    "physic_pe_easing_id": 6,
    "physic_pe_easing_name": "อื่นๆ",
    "active_status": "Y",
    "physic_pe_patient_type_id": 1
  },
  {
    "physic_pe_easing_id": 7,
    "physic_pe_easing_name": "ก้ม",
    "active_status": "Y",
    "physic_pe_patient_type_id": 2
  },
  {
    "physic_pe_easing_id": 8,
    "physic_pe_easing_name": "นั่ง",
    "active_status": "Y",
    "physic_pe_patient_type_id": 2
  }
]
```
