# `stock_item_balance_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_item_balance_history_id | int(11) | NO | PRI | 0 |  |  |
| item_id | int(11) | YES | MUL | NULL |  |  |
| balance_date | date | YES | MUL | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| amount | double(15,3) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES | MUL | NULL |  |  |
| receive_qty | int(11) | YES |  | NULL |  |  |
| receive_amount | double(15,3) | YES |  | NULL |  |  |
| pay_qty | int(11) | YES |  | NULL |  |  |
| pay_amount | double(15,3) | YES |  | NULL |  |  |
| warehouse_id | int(11) | YES | MUL | NULL |  |  |
| adj_qty | int(11) | YES |  | NULL |  |  |
| adj_amount | int(11) | YES |  | NULL |  |  |
| balance_year | int(11) | YES | MUL | NULL |  |  |
| balance_month | int(11) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_balance_year_month | balance_year | no | 1 |
| ix_balance_year_month | balance_month | no | 2 |
| ix_balance_year_month_index | balance_month | no | 1 |
| ix_balance_year_month_index | balance_year | no | 2 |
| ix_date | balance_date | no | 1 |
| ix_date_unitid | balance_date | no | 1 |
| ix_date_unitid | stock_item_unit_id | no | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_item_idwhbd | item_id | no | 1 |
| ix_item_idwhbd | warehouse_id | no | 2 |
| ix_item_idwhbd | balance_date | no | 3 |
| ix_item_idwhbd_index | balance_date | no | 1 |
| ix_item_idwhbd_index | item_id | no | 2 |
| ix_item_idwhbd_index | warehouse_id | no | 3 |
| ix_item_id_balance_date | item_id | no | 1 |
| ix_item_id_balance_date | balance_date | no | 2 |
| ix_item_id_balance_date_index | balance_date | no | 1 |
| ix_item_id_balance_date_index | item_id | no | 2 |
| ix_stock_item_unit_id | stock_item_unit_id | no | 1 |
| ix_stock_item_unit_id_date | stock_item_unit_id | no | 1 |
| ix_stock_item_unit_id_date | balance_date | no | 2 |
| ix_unique | stock_item_unit_id | yes | 1 |
| ix_unique | warehouse_id | yes | 2 |
| ix_unique | balance_date | yes | 3 |
| ix_unique_index | balance_date | yes | 1 |
| ix_unique_index | stock_item_unit_id | yes | 2 |
| ix_unique_index | warehouse_id | yes | 3 |
| ix_warehouse_id_unitid | warehouse_id | no | 1 |
| ix_warehouse_id_unitid | stock_item_unit_id | no | 2 |
| ix_warehouse_id_unitid_index | stock_item_unit_id | no | 1 |
| ix_warehouse_id_unitid_index | warehouse_id | no | 2 |
| PRIMARY | stock_item_balance_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
