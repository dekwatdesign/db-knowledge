# `dt_ortho_sign`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_ortho_sign_id | int(11) | NO | PRI | 0 |  |  |
| dt_ortho_sign_divergent_id | int(11) | YES |  | NULL |  |  |
| dt_ortho_tran_id | int(11) | YES |  | NULL |  |  |
| dt_ortho_tran_note | text | YES |  | NULL |  |  |
| dtarea_code | varchar(15) | YES |  | NULL |  |  |
| dt_ortho_antero_id | int(11) | YES |  | NULL |  |  |
| dt_ortho_max_inc | varchar(50) | YES |  | NULL |  |  |
| dt_ortho_max_position | varchar(50) | YES |  | NULL |  |  |
| dt_ortho_man_inc | varchar(50) | YES |  | NULL |  |  |
| dt_ortho_man_position | varchar(50) | YES |  | NULL |  |  |
| dt_ortho_fca | int(11) | YES |  | NULL |  |  |
| dt_ortho_upper_tooth | varchar(30) | YES |  | NULL |  |  |
| dt_ortho_lower_tooth | varchar(30) | YES |  | NULL |  |  |
| dt_ortho_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_ortho_main6 | dt_ortho_main_id | no | 1 |
| PRIMARY | dt_ortho_sign_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
