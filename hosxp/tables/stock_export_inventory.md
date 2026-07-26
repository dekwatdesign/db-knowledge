# `stock_export_inventory`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_export_inventory_id | int(11) | NO | PRI | 0 |  |  |
| item_list_id | int(11) | YES |  | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| date_send | varchar(100) | YES |  | NULL |  |  |
| date_onhand | varchar(100) | YES |  | NULL |  |  |
| lot_no | varchar(100) | YES |  | NULL |  |  |
| expire_date | date | YES |  | NULL |  |  |
| export_datetime | datetime | YES |  | NULL |  |  |
| export_status_success | varchar(100) | YES |  | NULL |  |  |
| export_status_message | text | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | stock_export_inventory_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
