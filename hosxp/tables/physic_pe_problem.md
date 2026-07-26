# `physic_pe_problem`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_problem_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_problem_name | varchar(250) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| physic_pe_patient_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_pe_problem_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "physic_pe_problem_id": 1,
    "physic_pe_problem_name": "Pain",
    "active_status": "Y",
    "physic_pe_patient_type_id": 1
  },
  {
    "physic_pe_problem_id": 2,
    "physic_pe_problem_name": "Limit ROM",
    "active_status": "Y",
    "physic_pe_patient_type_id": 1
  },
  {
    "physic_pe_problem_id": 3,
    "physic_pe_problem_name": "อื่นๆ",
    "active_status": "Y",
    "physic_pe_patient_type_id": 1
  },
  {
    "physic_pe_problem_id": 4,
    "physic_pe_problem_name": "Pain",
    "active_status": "Y",
    "physic_pe_patient_type_id": 2
  },
  {
    "physic_pe_problem_id": 5,
    "physic_pe_problem_name": "Limit ROM",
    "active_status": "Y",
    "physic_pe_patient_type_id": 2
  },
  {
    "physic_pe_problem_id": 6,
    "physic_pe_problem_name": "Muscle Wekness",
    "active_status": "Y",
    "physic_pe_patient_type_id": 2
  },
  {
    "physic_pe_problem_id": 7,
    "physic_pe_problem_name": "อื่นๆ",
    "active_status": "Y",
    "physic_pe_patient_type_id": 2
  },
  {
    "physic_pe_problem_id": 8,
    "physic_pe_problem_name": "Pain",
    "active_status": "Y",
    "physic_pe_patient_type_id": 3
  }
]
```
