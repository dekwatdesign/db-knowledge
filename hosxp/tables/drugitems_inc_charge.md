# `drugitems_inc_charge`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_inc_charge_id | int(11) | NO | PRI | 0 |  |  |
| opi_guid_src | varchar(38) | YES | MUL | NULL |  |  |
| opi_guid_charge | varchar(38) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_src_guid | opi_guid_src | no | 1 |
| PRIMARY | drugitems_inc_charge_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
