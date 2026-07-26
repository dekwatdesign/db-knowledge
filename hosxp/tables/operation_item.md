# `operation_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_item_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(100) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| price2 | double(15,3) | YES |  | NULL |  |  |
| price3 | double(15,3) | YES |  | NULL |  |  |
| price_ipd | double(15,3) | YES |  | NULL |  |  |
| price_ipd2 | double(15,3) | YES |  | NULL |  |  |
| price_ipd3 | double(15,3) | YES |  | NULL |  |  |
| icd9 | varchar(7) | YES |  | NULL |  |  |
| operation_group_id | int(11) | YES |  | NULL |  |  |
| operation_item_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| active_status | char(1) | YES | MUL | NULL |  |  |
| keyword | varchar(150) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| icode | icode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_keyword | keyword | no | 1 |
| ix_name_active_status | name | no | 1 |
| ix_name_active_status | active_status | no | 2 |
| ix_name_active_status_index | active_status | no | 1 |
| ix_name_active_status_index | name | no | 2 |
| ix_name_keyword | name | no | 1 |
| ix_name_keyword | keyword | no | 2 |
| ix_name_keyword_index | keyword | no | 1 |
| ix_name_keyword_index | name | no | 2 |
| name | name | no | 1 |
| PRIMARY | operation_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "operation_item_id": 3,
    "name": "Bebtell is operation (35.39)",
    "icode": "",
    "price": 33000.0,
    "price2": null,
    "price3": null,
    "price_ipd": null,
    "price_ipd2": null,
    "price_ipd3": null,
    "icd9": null,
    "operation_group_id": null,
    "operation_item_type_id": null,
    "hos_guid": null,
    "active_status": "Y",
    "keyword": null
  },
  {
    "operation_item_id": 7,
    "name": "Reopening of wound of thyroid field for control of (postoperative) hemorrhage (06.02)",
    "icode": "",
    "price": 5500.0,
    "price2": null,
    "price3": null,
    "price_ipd": null,
    "price_ipd2": null,
    "price_ipd3": null,
    "icd9": null,
    "operation_group_id": null,
    "operation_item_type_id": null,
    "hos_guid": null,
    "active_status": "Y",
    "keyword": null
  },
  {
    "operation_item_id": 8,
    "name": "Exploration neck by incision (06.09)",
    "icode": "",
    "price": 6500.0,
    "price2": null,
    "price3": null,
    "price_ipd": null,
    "price_ipd2": null,
    "price_ipd3": null,
    "icd9": null,
    "operation_group_id": null,
    "operation_item_type_id": null,
    "hos_guid": null,
    "active_status": "Y",
    "keyword": null
  },
  {
    "operation_item_id": 9,
    "name": "Open biopsy of thyroid gland (06.12)",
    "icode": "",
    "price": 4500.0,
    "price2": null,
    "price3": null,
    "price_ipd": null,
    "price_ipd2": null,
    "price_ipd3": null,
    "icd9": null,
    "operation_group_id": null,
    "operation_item_type_id": null,
    "hos_guid": null,
    "active_status": "Y",
    "keyword": null
  },
  {
    "operation_item_id": 10,
    "name": "Biopsy of parathyroid glan (06.13)",
    "icode": "",
    "price": 7000.0,
    "price2": null,
    "price3": null,
    "price_ipd": null,
    "price_ipd2": null,
    "price_ipd3": null,
    "icd9": null,
    "operation_group_id": null,
    "operation_item_type_id": null,
    "hos_guid": null,
    "active_status": "Y",
    "keyword": null
  },
  {
    "operation_item_id": 11,
    "name": "Complete removal of one lobe of thyroid (with removal of isthmus or portion of other lobe)",
    "icode": "",
    "price": 6500.0,
    "price2": null,
    "price3": null,
    "price_ipd": null,
    "price_ipd2": null,
    "price_ipd3": null,
    "icd9": null,
    "operation_group_id": null,
    "operation_item_type_id": null,
    "hos_guid": null,
    "active_status": "Y",
    "keyword": null
  },
  {
    "operation_item_id": 12,
    "name": "Hemithyroidectomy (06.2)",
    "icode": "",
    "price": 6500.0,
    "price2": null,
    "price3": null,
    "price_ipd": null,
    "price_ipd2": null,
    "price_ipd3": null,
    "icd9": null,
    "operation_group_id": null,
    "operation_item_type_id": null,
    "hos_guid": null,
    "active_status": "Y",
    "keyword": null
  },
  {
    "operation_item_id": 13,
    "name": "Excion of lesion of thyroid (06.31)",
    "icode": "",
    "price": 5500.0,
    "price2": null,
    "price3": null,
    "price_ipd": null,
    "price_ipd2": null,
    "price_ipd3": null,
    "icd9": null,
    "operation_group_id": null,
    "operation_item_type_id": null,
    "hos_guid": null,
    "active_status": "Y",
    "keyword": null
  }
]
```
