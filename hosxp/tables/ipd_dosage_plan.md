# `ipd_dosage_plan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_dosage_plan_id | int(11) | NO | PRI | 0 |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| drugusage | varchar(7) | YES | MUL | NULL |  |  |
| day_number | int(11) | YES | MUL | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_icode | icode | no | 1 |
| ix_icode_drugusage | icode | no | 1 |
| ix_icode_drugusage | drugusage | no | 2 |
| ix_icode_drugusage_index | drugusage | no | 1 |
| ix_icode_drugusage_index | icode | no | 2 |
| ix_unique | icode | yes | 1 |
| ix_unique | drugusage | yes | 2 |
| ix_unique | day_number | yes | 3 |
| ix_unique_index | day_number | yes | 1 |
| ix_unique_index | drugusage | yes | 2 |
| ix_unique_index | icode | yes | 3 |
| PRIMARY | ipd_dosage_plan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
