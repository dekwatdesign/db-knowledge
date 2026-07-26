# `stock_proviso_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| proviso_item_id | int(11) | NO | PRI | 0 |  |  |
| proviso_id | int(11) | YES |  | NULL |  |  |
| max_qty | int(11) | YES |  | NULL |  |  |
| unitprice | double(15,5) | YES |  | NULL |  |  |
| min_qty | int(11) | YES |  | NULL |  |  |
| fee_qty | int(11) | YES |  | NULL |  |  |
| fee_unit | varchar(50) | YES |  | NULL |  |  |
| avg_unitcost | double(15,5) | YES |  | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| supplier_item_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | proviso_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
