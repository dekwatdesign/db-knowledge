# `dt_ortho_txplan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_ortho_txplan_id | int(11) | NO | PRI | 0 |  |  |
| dt_ortho_txplan_diag | longtext | YES |  | NULL |  |  |
| dt_ortho_txplan_plan | longtext | YES |  | NULL |  |  |
| dt_ortho_txplan_expect | int(11) | YES |  | NULL |  |  |
| dt_ortho_txplan_prognosis | varchar(50) | YES |  | NULL |  |  |
| dt_ortho_txplan_mx | varchar(255) | YES |  | NULL |  |  |
| dt_ortho_txplan_md | varchar(255) | YES |  | NULL |  |  |
| dt_ortho_txplan_duration | varchar(50) | YES |  | NULL |  |  |
| dt_ortho_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_ortho_main3 | dt_ortho_main_id | no | 1 |
| PRIMARY | dt_ortho_txplan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
