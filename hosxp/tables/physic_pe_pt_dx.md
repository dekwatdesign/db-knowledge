# `physic_pe_pt_dx`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_pt_dx_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_pt_dx_name | text | YES |  | NULL |  |  |
| doctor_code | char(7) | YES | MUL | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| physic_pe_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_pe_pt_dx_doctor | doctor_code | no | 1 |
| ix_idx_physic_pe_pt_dx_pe_id | physic_pe_id | no | 1 |
| PRIMARY | physic_pe_pt_dx_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
