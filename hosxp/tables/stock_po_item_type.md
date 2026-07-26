# `stock_po_item_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_po_item_type_id | int(11) | NO | PRI | 0 |  |  |
| stock_po_item_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_stock_po_item_type_name | stock_po_item_type_name | yes | 1 |
| PRIMARY | stock_po_item_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "stock_po_item_type_id": 1,
    "stock_po_item_type_name": "รายการปกติ",
    "hos_guid": null
  },
  {
    "stock_po_item_type_id": 2,
    "stock_po_item_type_name": "รายการแถม",
    "hos_guid": null
  }
]
```
