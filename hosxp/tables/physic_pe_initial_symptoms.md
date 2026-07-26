# `physic_pe_initial_symptoms`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_initial_symptoms_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(100) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| physic_pe_patient_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_pe_initial_symptoms_type | physic_pe_patient_type_id | no | 1 |
| PRIMARY | physic_pe_initial_symptoms_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "physic_pe_initial_symptoms_id": 1,
    "name": "ปวดศรีษะ",
    "active_status": "Y",
    "physic_pe_patient_type_id": 1
  },
  {
    "physic_pe_initial_symptoms_id": 2,
    "name": "ปวดเบ้าตา",
    "active_status": "Y",
    "physic_pe_patient_type_id": 1
  },
  {
    "physic_pe_initial_symptoms_id": 3,
    "name": "คลื่นไส้อาเจียน",
    "active_status": "Y",
    "physic_pe_patient_type_id": 1
  },
  {
    "physic_pe_initial_symptoms_id": 4,
    "name": "บ้านหมุน",
    "active_status": "Y",
    "physic_pe_patient_type_id": 1
  },
  {
    "physic_pe_initial_symptoms_id": 5,
    "name": "เดินเซ",
    "active_status": "Y",
    "physic_pe_patient_type_id": 1
  },
  {
    "physic_pe_initial_symptoms_id": 6,
    "name": "ภาพซ้อน",
    "active_status": "Y",
    "physic_pe_patient_type_id": 1
  }
]
```
