# `physic_pe_aggravating`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_aggravating_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_aggravating_name | varchar(200) | YES | MUL | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| physic_pe_patient_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_pe_aggravating_name | physic_pe_aggravating_name | no | 1 |
| PRIMARY | physic_pe_aggravating_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "physic_pe_aggravating_id": 1,
    "physic_pe_aggravating_name": "ก้มคอ",
    "active_status": "Y",
    "physic_pe_patient_type_id": 1
  },
  {
    "physic_pe_aggravating_id": 2,
    "physic_pe_aggravating_name": "เงยคอ",
    "active_status": "Y",
    "physic_pe_patient_type_id": 1
  },
  {
    "physic_pe_aggravating_id": 3,
    "physic_pe_aggravating_name": "นั่ง",
    "active_status": "Y",
    "physic_pe_patient_type_id": 1
  },
  {
    "physic_pe_aggravating_id": 4,
    "physic_pe_aggravating_name": "ตื่นนอน",
    "active_status": "Y",
    "physic_pe_patient_type_id": 1
  },
  {
    "physic_pe_aggravating_id": 5,
    "physic_pe_aggravating_name": "เดิน",
    "active_status": "Y",
    "physic_pe_patient_type_id": 1
  },
  {
    "physic_pe_aggravating_id": 6,
    "physic_pe_aggravating_name": "อื่นๆ",
    "active_status": "Y",
    "physic_pe_patient_type_id": 1
  },
  {
    "physic_pe_aggravating_id": 7,
    "physic_pe_aggravating_name": "ก้ม",
    "active_status": "Y",
    "physic_pe_patient_type_id": 2
  },
  {
    "physic_pe_aggravating_id": 8,
    "physic_pe_aggravating_name": "นั่ง",
    "active_status": "Y",
    "physic_pe_patient_type_id": 2
  }
]
```
