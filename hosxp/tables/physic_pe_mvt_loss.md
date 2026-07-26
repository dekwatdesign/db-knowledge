# `physic_pe_mvt_loss`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_mvt_loss_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_mvt_loss_note | varchar(250) | YES |  | NULL |  |  |
| doctor_code | varchar(7) | YES | MUL | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| physic_pe_mvt_type_id | int(11) | YES |  | NULL |  |  |
| physic_pe_mvt_position_id | int(11) | YES |  | NULL |  |  |
| physic_pe_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_physic_pe_mvt_loss_doctor | doctor_code | no | 1 |
| ix_physic_pe_mvt_loss_pe_id | physic_pe_id | no | 1 |
| PRIMARY | physic_pe_mvt_loss_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
