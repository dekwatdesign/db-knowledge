# `stock_proviso`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| proviso_id | int(11) | NO | PRI | 0 |  |  |
| supplier_item_id | int(11) | YES |  | NULL |  |  |
| item_date | date | YES |  | NULL |  |  |
| trade_name | varchar(150) | YES |  | NULL |  |  |
| item_unit | varchar(50) | YES |  | NULL |  |  |
| proviso_tax | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | proviso_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
