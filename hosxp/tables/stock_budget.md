# `stock_budget`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| budget_id | int(11) | NO | PRI | 0 |  |  |
| budget_name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| oldcode | varchar(5) | YES | MUL | NULL |  |  |
| budget_status | char(1) | YES |  | NULL |  |  |
| stock_budget_yrrun | int(11) | YES |  | NULL |  |  |
| stock_budget_runno | int(11) | YES |  | NULL |  |  |
| warehouse_id | int(11) | YES |  | NULL |  |  |
| default_budget | char(1) | YES |  | NULL |  |  |
| stock_budget_type_id | int(11) | YES | MUL | NULL |  |  |
| acc_po_budget_sub_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_oldcode | oldcode | no | 1 |
| ix_stock_budget_type_id | stock_budget_type_id | no | 1 |
| PRIMARY | budget_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "budget_id": 1,
    "budget_name": "งบประมาณ",
    "hos_guid": null,
    "oldcode": null,
    "budget_status": null,
    "stock_budget_yrrun": null,
    "stock_budget_runno": null,
    "warehouse_id": null,
    "default_budget": null,
    "stock_budget_type_id": null,
    "acc_po_budget_sub_type_id": null
  },
  {
    "budget_id": 2,
    "budget_name": "เงินบำรุง",
    "hos_guid": null,
    "oldcode": null,
    "budget_status": null,
    "stock_budget_yrrun": null,
    "stock_budget_runno": null,
    "warehouse_id": null,
    "default_budget": null,
    "stock_budget_type_id": null,
    "acc_po_budget_sub_type_id": null
  },
  {
    "budget_id": 3,
    "budget_name": "งบบริการสาธารณสุขระดับอำเภอ",
    "hos_guid": null,
    "oldcode": null,
    "budget_status": null,
    "stock_budget_yrrun": null,
    "stock_budget_runno": null,
    "warehouse_id": null,
    "default_budget": null,
    "stock_budget_type_id": null,
    "acc_po_budget_sub_type_id": null
  },
  {
    "budget_id": 4,
    "budget_name": "งบประมาณหมวด 800 (สปร.)",
    "hos_guid": null,
    "oldcode": null,
    "budget_status": null,
    "stock_budget_yrrun": null,
    "stock_budget_runno": null,
    "warehouse_id": null,
    "default_budget": null,
    "stock_budget_type_id": null,
    "acc_po_budget_sub_type_id": null
  }
]
```
