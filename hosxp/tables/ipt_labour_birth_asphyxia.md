# `ipt_labour_birth_asphyxia`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_labour_birth_asphyxia_id | int(11) | NO | PRI | 0 |  |  |
| birth_asphyxia_factor_id | int(11) | YES |  | NULL |  |  |
| birth_asphyxia_id | int(11) | YES |  | NULL |  |  |
| ipt_labour_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ipt_labour_birth_asphyxia_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
