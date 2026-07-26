# `physic_pe_mp_stroke_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_mp_stroke_list_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_mp_stroke_scale_id | int(11) | YES | MUL | NULL |  |  |
| physic_pe_mp_muscle_type_id | int(11) | YES |  | NULL |  |  |
| mp_muscle_value_left_id | int(11) | YES |  | NULL |  |  |
| mp_muscle_value_right_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idxphysic_pe_mp_stroke_list_scale | physic_pe_mp_stroke_scale_id | no | 1 |
| PRIMARY | physic_pe_mp_stroke_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
