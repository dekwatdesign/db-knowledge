# `physic_pe_muscle_tone_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_muscle_tone_list_id | int(11) | NO | PRI | 0 |  |  |
| note | varchar(100) | YES |  | NULL |  |  |
| physic_pe_muscle_tone_group_id | int(11) | YES |  | NULL |  |  |
| physic_pe_muscle_tone_type_id | int(11) | YES |  | NULL |  |  |
| physic_side_type_id | int(11) | YES |  | NULL |  |  |
| physic_pe_muscle_tone_scale_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idxphysic_pe_muscle_tone_list_scale | physic_pe_muscle_tone_scale_id | no | 1 |
| PRIMARY | physic_pe_muscle_tone_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
