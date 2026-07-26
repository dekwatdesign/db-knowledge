# `physic_disease_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_disease_code_id | int(11) | NO | PRI | 0 |  |  |
| code | varchar(7) | YES | UNI | NULL |  |  |
| name | varchar(200) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| physic_group_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_disease_code | code | yes | 1 |
| ix_idx_physic_disease_code_group | physic_group_id | no | 1 |
| PRIMARY | physic_disease_code_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "physic_disease_code_id": 1,
    "code": "Mc1",
    "name": "Cervical syndromes",
    "active_status": "Y",
    "physic_group_id": 1
  },
  {
    "physic_disease_code_id": 2,
    "code": "Mc2",
    "name": "Thoracic and rib syndrome",
    "active_status": "Y",
    "physic_group_id": 1
  },
  {
    "physic_disease_code_id": 3,
    "code": "Mc3",
    "name": "Lumbar spinal syndromes",
    "active_status": "Y",
    "physic_group_id": 1
  },
  {
    "physic_disease_code_id": 4,
    "code": "Mc4",
    "name": "Fracture,spine without neurological deficit",
    "active_status": "Y",
    "physic_group_id": 1
  },
  {
    "physic_disease_code_id": 5,
    "code": "Mc5",
    "name": "Fracture and dislocation of upper extremity",
    "active_status": "Y",
    "physic_group_id": 1
  },
  {
    "physic_disease_code_id": 6,
    "code": "Mc6",
    "name": "Fracture and dislocation of pelvis & lower extremity",
    "active_status": "Y",
    "physic_group_id": 1
  },
  {
    "physic_disease_code_id": 7,
    "code": "Mc7",
    "name": "Hand injury",
    "active_status": "Y",
    "physic_group_id": 1
  },
  {
    "physic_disease_code_id": 8,
    "code": "Mc8",
    "name": "Amputation",
    "active_status": "Y",
    "physic_group_id": 1
  }
]
```
