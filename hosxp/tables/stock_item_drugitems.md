# `stock_item_drugitems`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| item_id | int(11) | NO | PRI | 0 |  |  |
| icode | varchar(7) | NO | PRI |  |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| base_qty | int(11) | YES |  | NULL |  |  |
| allow_inv_price_update | char(1) | YES |  | NULL |  |  |
| stock_item_unit_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| icode | icode | no | 1 |
| item_id | item_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | item_id | yes | 1 |
| PRIMARY | icode | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "item_id": 0,
    "icode": "1000101",
    "hos_guid": null,
    "hos_guid_ext": null,
    "base_qty": 1,
    "allow_inv_price_update": null,
    "stock_item_unit_id": 0
  },
  {
    "item_id": 0,
    "icode": "1640019",
    "hos_guid": null,
    "hos_guid_ext": null,
    "base_qty": 1,
    "allow_inv_price_update": null,
    "stock_item_unit_id": 0
  },
  {
    "item_id": 0,
    "icode": "1640026",
    "hos_guid": null,
    "hos_guid_ext": null,
    "base_qty": 1,
    "allow_inv_price_update": null,
    "stock_item_unit_id": 0
  },
  {
    "item_id": 0,
    "icode": "1650002",
    "hos_guid": null,
    "hos_guid_ext": null,
    "base_qty": 1,
    "allow_inv_price_update": null,
    "stock_item_unit_id": 0
  },
  {
    "item_id": 0,
    "icode": "1650038",
    "hos_guid": null,
    "hos_guid_ext": null,
    "base_qty": 1,
    "allow_inv_price_update": null,
    "stock_item_unit_id": 0
  },
  {
    "item_id": 0,
    "icode": "1660012",
    "hos_guid": null,
    "hos_guid_ext": null,
    "base_qty": 1,
    "allow_inv_price_update": null,
    "stock_item_unit_id": 0
  },
  {
    "item_id": 0,
    "icode": "1660026",
    "hos_guid": null,
    "hos_guid_ext": null,
    "base_qty": 1,
    "allow_inv_price_update": null,
    "stock_item_unit_id": 0
  },
  {
    "item_id": 0,
    "icode": "1670007",
    "hos_guid": null,
    "hos_guid_ext": null,
    "base_qty": 1,
    "allow_inv_price_update": null,
    "stock_item_unit_id": 0
  }
]
```
