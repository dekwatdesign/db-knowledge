# `stock_substock_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_substock_detail_id | int(11) | NO | PRI | 0 |  |  |
| department_id | int(11) | YES | MUL | NULL |  |  |
| in_qty | int(11) | YES |  | NULL |  |  |
| in_price | double(15,8) | YES |  | NULL |  |  |
| total_price | double(15,8) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |
| substock_type | varchar(30) | YES |  | NULL |  |  |
| out_qty | int(11) | YES |  | NULL |  |  |
| out_price | double(15,8) | YES |  | NULL |  |  |
| total_qty | int(11) | YES |  | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| subdraw_date | date | YES |  | NULL |  |  |
| substock_date | date | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dep | department_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_substock_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
