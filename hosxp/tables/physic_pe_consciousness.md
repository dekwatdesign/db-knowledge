# `physic_pe_consciousness`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_consciousness_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_consciousness_name | varchar(150) | YES | MUL | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| physic_pe_patient_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_pe_consciousness_name | physic_pe_consciousness_name | no | 1 |
| ix_idx_physic_pe_consciousness_type | physic_pe_patient_type_id | no | 1 |
| PRIMARY | physic_pe_consciousness_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "physic_pe_consciousness_id": 1,
    "physic_pe_consciousness_name": "Alert",
    "active_status": "Y",
    "physic_pe_patient_type_id": 5
  },
  {
    "physic_pe_consciousness_id": 2,
    "physic_pe_consciousness_name": "Confuse",
    "active_status": "Y",
    "physic_pe_patient_type_id": 5
  },
  {
    "physic_pe_consciousness_id": 3,
    "physic_pe_consciousness_name": "Stupor",
    "active_status": "Y",
    "physic_pe_patient_type_id": 5
  },
  {
    "physic_pe_consciousness_id": 4,
    "physic_pe_consciousness_name": "Semicoma",
    "active_status": "Y",
    "physic_pe_patient_type_id": 5
  },
  {
    "physic_pe_consciousness_id": 5,
    "physic_pe_consciousness_name": "Coma",
    "active_status": "Y",
    "physic_pe_patient_type_id": 5
  },
  {
    "physic_pe_consciousness_id": 11,
    "physic_pe_consciousness_name": "Alert",
    "active_status": "Y",
    "physic_pe_patient_type_id": 7
  },
  {
    "physic_pe_consciousness_id": 7,
    "physic_pe_consciousness_name": "Confuse",
    "active_status": "Y",
    "physic_pe_patient_type_id": 6
  },
  {
    "physic_pe_consciousness_id": 14,
    "physic_pe_consciousness_name": "Semicoma",
    "active_status": "Y",
    "physic_pe_patient_type_id": 7
  }
]
```
