# `psy_register_diag_subgrop`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_register_diag_subgrop_id | int(11) | NO | PRI | 0 |  |  |
| psy_register_icd10_subgroup_id | int(11) | YES |  | NULL |  |  |
| psy_register_id | int(11) | YES |  | NULL |  |  |
| psy_register_diag_subgrop_staff | varchar(50) | YES |  | NULL |  |  |
| psy_register_diag_subgrop_begindate | date | YES |  | NULL |  |  |
| psy_register_diag_subgrop_enddate | date | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psy_register_diag_subgrop_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
