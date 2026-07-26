# `physic_pe_mp_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_mp_list_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_mp_list_note | varchar(250) | YES |  | NULL |  |  |
| physic_pe_mp_type_id | int(11) | YES | MUL | NULL |  |  |
| physic_pe_mp_value_id | int(11) | YES |  | NULL |  |  |
| doctor_code | varchar(7) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| physic_pe_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idxphysic_pe_mp_list_type | physic_pe_mp_type_id | no | 1 |
| PRIMARY | physic_pe_mp_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
