# `stock_po_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| po_type_id | int(11) | NO | PRI | 0 |  |  |
| po_type_name | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | po_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "po_type_id": 1,
    "po_type_name": "รับจากบริษัท",
    "hos_guid": null
  },
  {
    "po_type_id": 2,
    "po_type_name": "ยืม",
    "hos_guid": null
  },
  {
    "po_type_id": 3,
    "po_type_name": "รับคืนจาก sub-stock",
    "hos_guid": null
  }
]
```
