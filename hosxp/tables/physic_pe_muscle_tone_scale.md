# `physic_pe_muscle_tone_scale`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_muscle_tone_scale_id | int(11) | NO | PRI | 0 |  |  |
| doctor_code | varchar(7) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| physic_pe_id | int(11) | YES | MUL | NULL |  |  |
| physic_register_id | int(11) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_pe_muscle_tone_scal_pe | physic_pe_id | no | 1 |
| PRIMARY | physic_pe_muscle_tone_scale_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
