# `supply_request_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| supply_request_item_id | int(11) | NO | PRI | 0 |  |  |
| supply_item_id | int(11) | YES |  | NULL |  |  |
| supply_request_item_lotno | varchar(60) | YES |  | NULL |  |  |
| supply_request_item_qty | int(11) | YES |  | NULL |  |  |
| supply_request_item_remainqty | int(11) | YES |  | NULL |  |  |
| supply_request_id | int(11) | YES | MUL | NULL |  |  |
| supply_request_list_id | int(11) | YES | MUL | NULL |  |  |
| supply_item_list_id | int(11) | YES | MUL | NULL |  |  |
| supply_request_receive_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refsupply_item_list23 | supply_item_list_id | no | 1 |
| ix_Refsupply_request17 | supply_request_id | no | 1 |
| ix_Refsupply_request_list18 | supply_request_list_id | no | 1 |
| ix_Refsupply_request_receive55 | supply_request_receive_id | no | 1 |
| PRIMARY | supply_request_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
