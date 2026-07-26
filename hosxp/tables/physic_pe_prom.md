# `physic_pe_prom`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_prom_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_prom_degree | float | YES |  | NULL |  |  |
| physic_pe_prom_note | text | YES |  | NULL |  |  |
| physic_pe_id | int(11) | YES |  | NULL |  |  |
| physic_side_type_id | int(11) | YES |  | NULL |  |  |
| physic_test_posit_type_id | int(11) | YES |  | NULL |  |  |
| physic_action_test_type_id | int(11) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| doctor_code | varchar(7) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_pe_prom_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
