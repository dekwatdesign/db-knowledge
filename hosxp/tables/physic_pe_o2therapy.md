# `physic_pe_o2therapy`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_o2therapy_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_o2therapy_name | varchar(100) | YES | MUL | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| physic_pe_patient_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_pe_o2therapy_name | physic_pe_o2therapy_name | no | 1 |
| PRIMARY | physic_pe_o2therapy_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "physic_pe_o2therapy_id": 1,
    "physic_pe_o2therapy_name": "Room air",
    "active_status": "Y",
    "physic_pe_patient_type_id": 5
  },
  {
    "physic_pe_o2therapy_id": 2,
    "physic_pe_o2therapy_name": "Et-tube",
    "active_status": "Y",
    "physic_pe_patient_type_id": 5
  },
  {
    "physic_pe_o2therapy_id": 3,
    "physic_pe_o2therapy_name": "TT-tube",
    "active_status": "Y",
    "physic_pe_patient_type_id": 5
  },
  {
    "physic_pe_o2therapy_id": 4,
    "physic_pe_o2therapy_name": "O2 Cannular with",
    "active_status": "Y",
    "physic_pe_patient_type_id": 5
  },
  {
    "physic_pe_o2therapy_id": 5,
    "physic_pe_o2therapy_name": "O2 mask with bag",
    "active_status": "Y",
    "physic_pe_patient_type_id": 5
  },
  {
    "physic_pe_o2therapy_id": 6,
    "physic_pe_o2therapy_name": "T-Piece",
    "active_status": "Y",
    "physic_pe_patient_type_id": 5
  },
  {
    "physic_pe_o2therapy_id": 7,
    "physic_pe_o2therapy_name": "Ventilator mode",
    "active_status": "N",
    "physic_pe_patient_type_id": 5
  },
  {
    "physic_pe_o2therapy_id": 8,
    "physic_pe_o2therapy_name": "Room air",
    "active_status": "Y",
    "physic_pe_patient_type_id": 6
  }
]
```
