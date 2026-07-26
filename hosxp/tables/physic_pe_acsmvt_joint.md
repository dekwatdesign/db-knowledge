# `physic_pe_acsmvt_joint`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_acsmvt_joint_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_acsmvt_joint_posit | varchar(100) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| doctor_code | varchar(7) | YES | MUL | NULL |  |  |
| physic_pe_acsmvt_pain_id | char(1) | YES |  | NULL |  |  |
| physic_pe_id | int(11) | YES | MUL | NULL |  |  |
| physic_pe_side_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_pe_acsmvt_joint_doctor_code | doctor_code | no | 1 |
| ix_idx_physic_pe_acsmvt_joint_pe_id | physic_pe_id | no | 1 |
| PRIMARY | physic_pe_acsmvt_joint_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
