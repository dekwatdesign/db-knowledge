# `drp_problem_discover`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drp_problem_discover_id | int(11) | NO | PRI | 0 |  |  |
| drp_problem_list_id | int(11) | YES | MUL | NULL |  |  |
| drp_discover_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drp_problem_list_id | drp_problem_list_id | no | 1 |
| ix_drp_problem_list_id_id | drp_discover_type_id | yes | 1 |
| ix_drp_problem_list_id_id | drp_problem_list_id | yes | 2 |
| PRIMARY | drp_problem_discover_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "drp_problem_discover_id": 1,
    "drp_problem_list_id": 11,
    "drp_discover_type_id": 3
  }
]
```
