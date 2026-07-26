# `physic_pe_mp_muscle_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_mp_muscle_type_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_mp_muscle_type_name | varchar(150) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| physic_pe_mp_disease_group_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idxphysic_pe_mp_muscle_type_disease_group | physic_pe_mp_disease_group_id | no | 1 |
| PRIMARY | physic_pe_mp_muscle_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "physic_pe_mp_muscle_type_id": 1,
    "physic_pe_mp_muscle_type_name": "Shoulder flexion",
    "active_status": "Y",
    "physic_pe_mp_disease_group_id": 1
  },
  {
    "physic_pe_mp_muscle_type_id": 2,
    "physic_pe_mp_muscle_type_name": "Elbow extension",
    "active_status": "Y",
    "physic_pe_mp_disease_group_id": 1
  },
  {
    "physic_pe_mp_muscle_type_id": 3,
    "physic_pe_mp_muscle_type_name": "Hand grip",
    "active_status": "Y",
    "physic_pe_mp_disease_group_id": 1
  },
  {
    "physic_pe_mp_muscle_type_id": 4,
    "physic_pe_mp_muscle_type_name": "Hip extension",
    "active_status": "Y",
    "physic_pe_mp_disease_group_id": 1
  },
  {
    "physic_pe_mp_muscle_type_id": 5,
    "physic_pe_mp_muscle_type_name": "Knee extension",
    "active_status": "Y",
    "physic_pe_mp_disease_group_id": 1
  },
  {
    "physic_pe_mp_muscle_type_id": 6,
    "physic_pe_mp_muscle_type_name": "Ankle dorsiflexion",
    "active_status": "Y",
    "physic_pe_mp_disease_group_id": 1
  },
  {
    "physic_pe_mp_muscle_type_id": 7,
    "physic_pe_mp_muscle_type_name": "C5 : Elbow flexors",
    "active_status": "Y",
    "physic_pe_mp_disease_group_id": 2
  },
  {
    "physic_pe_mp_muscle_type_id": 8,
    "physic_pe_mp_muscle_type_name": "C6 : Wrist extensors",
    "active_status": "Y",
    "physic_pe_mp_disease_group_id": 2
  }
]
```
