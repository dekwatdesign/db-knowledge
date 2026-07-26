# `ipd_problem_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_problem_type_id | int(11) | NO | PRI | 0 |  |  |
| ipd_problem_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipd_problem_type_name | ipd_problem_type_name | yes | 1 |
| PRIMARY | ipd_problem_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipd_problem_type_id": 1,
    "ipd_problem_type_name": "Hemiplegia"
  },
  {
    "ipd_problem_type_id": 2,
    "ipd_problem_type_name": "Quadriplegia"
  },
  {
    "ipd_problem_type_id": 3,
    "ipd_problem_type_name": "Paraplegia"
  },
  {
    "ipd_problem_type_id": 4,
    "ipd_problem_type_name": "Spasticity"
  },
  {
    "ipd_problem_type_id": 5,
    "ipd_problem_type_name": "Contracture"
  },
  {
    "ipd_problem_type_id": 6,
    "ipd_problem_type_name": "Shouder subluxation"
  },
  {
    "ipd_problem_type_id": 7,
    "ipd_problem_type_name": "Shouder hand syndrome"
  },
  {
    "ipd_problem_type_id": 8,
    "ipd_problem_type_name": "Disphagia"
  }
]
```
