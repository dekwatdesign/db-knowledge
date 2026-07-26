# `physic_pe_mp_stroke_scale`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_mp_stroke_scale_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_mp_stroke_scale_date | date | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| physic_register_id | int(11) | YES | MUL | NULL |  |  |
| doctor_code | varchar(7) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| physic_pe_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idxphysic_pe_mp_stroke_scale_an | an | no | 1 |
| ix_idxphysic_pe_mp_stroke_scale_hn | hn | no | 1 |
| ix_idxphysic_pe_mp_stroke_scale_pe | physic_pe_id | no | 1 |
| ix_idxphysic_pe_mp_stroke_scale_register | physic_register_id | no | 1 |
| ix_idxphysic_pe_mp_stroke_scale_vn | vn | no | 1 |
| PRIMARY | physic_pe_mp_stroke_scale_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
