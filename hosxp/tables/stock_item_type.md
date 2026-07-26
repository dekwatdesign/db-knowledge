# `stock_item_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| item_type | int(11) | NO | PRI | 0 |  |  |
| item_type_name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| medication_item | char(1) | YES |  | NULL |  |  |
| item_usage_life | int(11) | YES |  | NULL |  |  |
| stock_item_type_code | varchar(20) | YES |  | NULL |  |  |
| item_active | char(1) | YES |  | NULL |  |  |
| default_expire_year | int(11) | YES |  | NULL |  |  |
| acc_po_item_type_id | int(11) | YES |  | NULL |  |  |
| no_stock | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | item_type | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "item_type": 1,
    "item_type_name": "ยา",
    "hos_guid": null,
    "medication_item": null,
    "item_usage_life": null,
    "stock_item_type_code": null,
    "item_active": null,
    "default_expire_year": null,
    "acc_po_item_type_id": null,
    "no_stock": null
  },
  {
    "item_type": 3,
    "item_type_name": "วัสดุการแพทย์",
    "hos_guid": null,
    "medication_item": null,
    "item_usage_life": null,
    "stock_item_type_code": null,
    "item_active": null,
    "default_expire_year": null,
    "acc_po_item_type_id": null,
    "no_stock": null
  }
]
```
