# `drp_problem_source`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drp_problem_source_id | int(11) | NO | PRI | 0 |  |  |
| drp_problem_list_id | int(11) | YES | MUL | NULL |  |  |
| drp_source_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drp_problem_list_id | drp_problem_list_id | no | 1 |
| ix_drp_problem_list_id_source | drp_problem_list_id | yes | 1 |
| ix_drp_problem_list_id_source | drp_source_type_id | yes | 2 |
| PRIMARY | drp_problem_source_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
