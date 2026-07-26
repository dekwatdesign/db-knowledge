# `drugitems_mims`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_mims_id | int(11) | NO | PRI | 0 |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| mims_group_id | int(11) | YES |  | NULL |  |  |
| mims_subgroup_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_icode | icode | no | 1 |
| PRIMARY | drugitems_mims_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
