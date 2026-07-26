# `physic_pe_goal`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_goal_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_goal_name | varchar(250) | YES | MUL | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| physic_pe_patient_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_pe_goal_name | physic_pe_goal_name | no | 1 |
| ix_idx_physic_pe_goal_type | physic_pe_patient_type_id | no | 1 |
| PRIMARY | physic_pe_goal_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "physic_pe_goal_id": 1,
    "physic_pe_goal_name": "Decrease Pain",
    "active_status": "Y",
    "physic_pe_patient_type_id": 1
  },
  {
    "physic_pe_goal_id": 2,
    "physic_pe_goal_name": "Increase ROM",
    "active_status": "Y",
    "physic_pe_patient_type_id": 1
  },
  {
    "physic_pe_goal_id": 3,
    "physic_pe_goal_name": "อื่นๆ",
    "active_status": "Y",
    "physic_pe_patient_type_id": 1
  },
  {
    "physic_pe_goal_id": 4,
    "physic_pe_goal_name": "Decrease Pain",
    "active_status": "Y",
    "physic_pe_patient_type_id": 2
  },
  {
    "physic_pe_goal_id": 5,
    "physic_pe_goal_name": "Increase ROM",
    "active_status": "Y",
    "physic_pe_patient_type_id": 2
  },
  {
    "physic_pe_goal_id": 6,
    "physic_pe_goal_name": "Increase Muscle Wekness",
    "active_status": "Y",
    "physic_pe_patient_type_id": 2
  },
  {
    "physic_pe_goal_id": 7,
    "physic_pe_goal_name": "อื่นๆ",
    "active_status": "Y",
    "physic_pe_patient_type_id": 2
  },
  {
    "physic_pe_goal_id": 8,
    "physic_pe_goal_name": "Decrease Pain",
    "active_status": "Y",
    "physic_pe_patient_type_id": 3
  }
]
```
