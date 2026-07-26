# `physic_template_progression`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_template_progression_id | int(11) | NO | PRI | 0 |  |  |
| physic_template_progres_name | varchar(255) | YES |  | NULL |  |  |
| physic_template_progres_note | text | YES |  | NULL |  |  |
| doctor_code | varchar(6) | YES | MUL | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| physic_template_progres_s | text | YES |  | NULL |  |  |
| physic_template_progres_o | text | YES |  | NULL |  |  |
| physic_template_progres_a | text | YES |  | NULL |  |  |
| physic_template_progres_p | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_template_progression_code | doctor_code | no | 1 |
| PRIMARY | physic_template_progression_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
