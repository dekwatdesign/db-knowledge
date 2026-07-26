# `bsc_project_objective`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bsc_project_objective_id | int(11) | NO | PRI | 0 |  |  |
| bsc_objective_id | int(11) | YES | MUL | NULL |  |  |
| bsc_project_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_uni_index | bsc_objective_id | no | 1 |
| ix_uni_index | bsc_project_id | no | 2 |
| PRIMARY | bsc_project_objective_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
