# `opitemrece_inventory`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opi_guid | varchar(38) | NO | PRI |  |  |  |
| opitemrece_inventory_datetime | datetime | YES |  | NULL |  |  |
| icode | char(7) | YES |  | NULL |  |  |
| left_qty | int(11) | YES |  | NULL |  |  |
| req_qty | int(11) | YES |  | NULL |  |  |
| base_qty | int(11) | YES |  | NULL |  |  |
| remain_qty | int(11) | YES |  | NULL |  |  |
| remain_pay_qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | opi_guid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
