# `dt_problem_treatment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_treatment_type_id | int(11) | NO | PRI | 0 |  |  |
| dt_problem_type_id | int(11) | NO | PRI | 0 |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_problem_type_id | yes | 1 |
| PRIMARY | dt_treatment_type_id | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dt_treatment_type_id": 2,
    "dt_problem_type_id": 1
  },
  {
    "dt_treatment_type_id": 3,
    "dt_problem_type_id": 2
  },
  {
    "dt_treatment_type_id": 4,
    "dt_problem_type_id": 2
  },
  {
    "dt_treatment_type_id": 3,
    "dt_problem_type_id": 3
  },
  {
    "dt_treatment_type_id": 5,
    "dt_problem_type_id": 4
  },
  {
    "dt_treatment_type_id": 2,
    "dt_problem_type_id": 5
  },
  {
    "dt_treatment_type_id": 3,
    "dt_problem_type_id": 6
  },
  {
    "dt_treatment_type_id": 6,
    "dt_problem_type_id": 7
  }
]
```
