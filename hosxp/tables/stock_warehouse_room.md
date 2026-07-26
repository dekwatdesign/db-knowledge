# `stock_warehouse_room`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_warehouse_room_id | int(11) | NO | PRI | 0 |  |  |
| warehouse_id | int(11) | YES | MUL | NULL |  |  |
| stock_warehouse_room_name | varchar(200) | YES | MUL | NULL |  |  |
| stock_warehouse_room_note | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_warehouse_id | warehouse_id | no | 1 |
| ix_warehouse_unique | warehouse_id | yes | 1 |
| ix_warehouse_unique | stock_warehouse_room_name | yes | 2 |
| ix_warehouse_unique_index | stock_warehouse_room_name | yes | 1 |
| ix_warehouse_unique_index | warehouse_id | yes | 2 |
| PRIMARY | stock_warehouse_room_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
