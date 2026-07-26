# `stock_item_warehouse`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| item_id | int(11) | YES | MUL | NULL |  |  |
| warehouse_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| stock_item_warehouse_id | int(11) | NO | PRI | 0 |  |  |
| stock_warehouse_room_id | int(11) | YES |  | NULL |  |  |
| stock_warehouse_shelf_name | varchar(100) | YES |  | NULL |  |  |
| stock_item_warehouse_temperature | double(15,3) | YES |  | NULL |  |  |
| min_qty | int(11) | YES |  | NULL |  |  |
| max_qty | int(11) | YES |  | NULL |  |  |
| item_ratio | double(22,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| item_id | item_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_item_warehouse_id | yes | 1 |
| warehouse_id | warehouse_id | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "item_id": 181,
    "warehouse_id": 1,
    "hos_guid": null,
    "stock_item_warehouse_id": 1,
    "stock_warehouse_room_id": null,
    "stock_warehouse_shelf_name": null,
    "stock_item_warehouse_temperature": null,
    "min_qty": null,
    "max_qty": null,
    "item_ratio": null
  },
  {
    "item_id": 182,
    "warehouse_id": 1,
    "hos_guid": null,
    "stock_item_warehouse_id": 21954,
    "stock_warehouse_room_id": null,
    "stock_warehouse_shelf_name": null,
    "stock_item_warehouse_temperature": null,
    "min_qty": null,
    "max_qty": null,
    "item_ratio": null
  },
  {
    "item_id": 183,
    "warehouse_id": 1,
    "hos_guid": null,
    "stock_item_warehouse_id": 21955,
    "stock_warehouse_room_id": null,
    "stock_warehouse_shelf_name": null,
    "stock_item_warehouse_temperature": null,
    "min_qty": null,
    "max_qty": null,
    "item_ratio": null
  },
  {
    "item_id": 185,
    "warehouse_id": 1,
    "hos_guid": null,
    "stock_item_warehouse_id": 21956,
    "stock_warehouse_room_id": null,
    "stock_warehouse_shelf_name": null,
    "stock_item_warehouse_temperature": null,
    "min_qty": null,
    "max_qty": null,
    "item_ratio": null
  },
  {
    "item_id": 186,
    "warehouse_id": 1,
    "hos_guid": null,
    "stock_item_warehouse_id": 21957,
    "stock_warehouse_room_id": null,
    "stock_warehouse_shelf_name": null,
    "stock_item_warehouse_temperature": null,
    "min_qty": null,
    "max_qty": null,
    "item_ratio": null
  },
  {
    "item_id": 108957664,
    "warehouse_id": 1,
    "hos_guid": null,
    "stock_item_warehouse_id": 21958,
    "stock_warehouse_room_id": null,
    "stock_warehouse_shelf_name": null,
    "stock_item_warehouse_temperature": null,
    "min_qty": null,
    "max_qty": null,
    "item_ratio": null
  },
  {
    "item_id": 187,
    "warehouse_id": 1,
    "hos_guid": null,
    "stock_item_warehouse_id": 21959,
    "stock_warehouse_room_id": null,
    "stock_warehouse_shelf_name": null,
    "stock_item_warehouse_temperature": null,
    "min_qty": null,
    "max_qty": null,
    "item_ratio": null
  },
  {
    "item_id": 236496608,
    "warehouse_id": 1,
    "hos_guid": null,
    "stock_item_warehouse_id": 21960,
    "stock_warehouse_room_id": null,
    "stock_warehouse_shelf_name": null,
    "stock_item_warehouse_temperature": null,
    "min_qty": null,
    "max_qty": null,
    "item_ratio": null
  }
]
```
