# `dt_ortho_model`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_ortho_model_id | int(11) | NO | PRI | 0 |  |  |
| dt_ortho_model_arch_id1 | int(11) | YES |  | NULL |  |  |
| dt_ortho_model_arch_id2 | int(11) | YES |  | NULL |  |  |
| dt_ortho_model_space_id1 | int(11) | YES |  | NULL |  |  |
| dt_ortho_model_space_id2 | int(11) | YES |  | NULL |  |  |
| dt_ortho_model_space_mx | double(15,2) | YES |  | NULL |  |  |
| dt_ortho_model_space_md | double(15,2) | YES |  | NULL |  |  |
| dt_ortho_model_curve_name | varchar(50) | YES |  | NULL |  |  |
| dt_ortho_model_bolton1 | int(11) | YES |  | NULL |  |  |
| dt_ortho_model_bolton2 | int(11) | YES |  | NULL |  |  |
| dt_ortho_model_interpetion | text | YES |  | NULL |  |  |
| dt_ortho_main_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_ortho_main7 | dt_ortho_main_id | no | 1 |
| PRIMARY | dt_ortho_model_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
