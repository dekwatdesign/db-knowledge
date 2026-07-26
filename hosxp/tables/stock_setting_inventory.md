# `stock_setting_inventory`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_setting_inventory_id | int(11) | NO | PRI | 0 |  |  |
| stock_setting_inventory_name | varchar(100) | YES |  | NULL |  |  |
| stock_setting_inventory_subname | varchar(100) | YES |  | NULL |  |  |
| stock_setting_inventory_format | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_setting_inventory_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
