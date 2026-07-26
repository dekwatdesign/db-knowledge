# `opitemrece_drug_control`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opitemrece_drug_control_id | int(11) | NO | PRI | 0 |  |  |
| opi_guid | varchar(38) | YES | UNI | NULL |  |  |
| doctor_code | varchar(50) | YES |  | NULL |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| order_reference_code | varchar(200) | YES |  | NULL |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_icode | icode | no | 1 |
| ix_opi_guid | opi_guid | yes | 1 |
| PRIMARY | opitemrece_drug_control_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
