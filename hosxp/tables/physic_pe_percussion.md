# `physic_pe_percussion`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_percussion_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_percussion_name | varchar(150) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| physic_pe_patient_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_pe_percussion_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "physic_pe_percussion_id": 1,
    "physic_pe_percussion_name": "Resonance",
    "active_status": "Y",
    "physic_pe_patient_type_id": 5
  },
  {
    "physic_pe_percussion_id": 2,
    "physic_pe_percussion_name": "Hyperresonance",
    "active_status": "Y",
    "physic_pe_patient_type_id": 5
  },
  {
    "physic_pe_percussion_id": 3,
    "physic_pe_percussion_name": "Flatness",
    "active_status": "Y",
    "physic_pe_patient_type_id": 5
  },
  {
    "physic_pe_percussion_id": 4,
    "physic_pe_percussion_name": "Dullnes",
    "active_status": "Y",
    "physic_pe_patient_type_id": 5
  }
]
```
