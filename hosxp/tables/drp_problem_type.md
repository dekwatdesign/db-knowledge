# `drp_problem_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drp_problem_type_id | int(11) | NO | PRI | 0 |  |  |
| drp_problem_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drp_problem_type_name | drp_problem_type_name | yes | 1 |
| PRIMARY | drp_problem_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "drp_problem_type_id": 2,
    "drp_problem_type_name": "Manifest problem"
  },
  {
    "drp_problem_type_id": 1,
    "drp_problem_type_name": "Potential problem"
  }
]
```
