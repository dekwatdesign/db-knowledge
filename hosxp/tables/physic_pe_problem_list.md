# `physic_pe_problem_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_problem_list_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_problem_list_note | text | YES |  | NULL |  |  |
| physic_pe_problem_id | int(11) | YES | MUL | NULL |  |  |
| physic_pe_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idxphysic_pe_problem_list_action | physic_pe_problem_id | no | 1 |
| ix_idxphysic_pe_problem_list_pe | physic_pe_id | no | 1 |
| PRIMARY | physic_pe_problem_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
