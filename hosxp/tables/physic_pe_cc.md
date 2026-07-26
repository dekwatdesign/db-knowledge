# `physic_pe_cc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_cc_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_cc_name | text | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| unit | varchar(50) | YES |  | NULL |  |  |
| doctor_code | varchar(7) | YES | MUL | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| physic_pe_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_pe_cc_doctor | doctor_code | no | 1 |
| PRIMARY | physic_pe_cc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
