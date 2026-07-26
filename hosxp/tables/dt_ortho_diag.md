# `dt_ortho_diag`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_ortho_diag_id | int(11) | NO | PRI | 0 |  |  |
| dt_ortho_diag_note | text | YES |  | NULL |  |  |
| dt_ortho_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_ortho_main5 | dt_ortho_main_id | no | 1 |
| PRIMARY | dt_ortho_diag_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
