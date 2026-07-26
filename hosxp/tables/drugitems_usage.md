# `drugitems_usage`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_usage_id | int(11) | NO | PRI | 0 |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| drugusage | varchar(7) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_iconde | icode | no | 1 |
| ix_unique | icode | yes | 1 |
| ix_unique | drugusage | yes | 2 |
| ix_unique_index | drugusage | yes | 1 |
| ix_unique_index | icode | yes | 2 |
| PRIMARY | drugitems_usage_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
