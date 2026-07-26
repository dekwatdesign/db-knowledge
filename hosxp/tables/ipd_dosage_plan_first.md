# `ipd_dosage_plan_first`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_dosage_plan_first_id | int(11) | NO | PRI | 0 |  |  |
| icode | char(7) | YES | MUL | NULL |  |  |
| drugusage | varchar(7) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_icode | icode | no | 1 |
| PRIMARY | ipd_dosage_plan_first_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
