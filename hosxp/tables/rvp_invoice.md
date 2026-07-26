# `rvp_invoice`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rvp_invoice_id | int(11) | NO | PRI | 0 |  |  |
| invoice_datetime | datetime | YES |  | NULL |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| invoice_status | varchar(200) | YES |  | NULL |  |  |
| sum_price | double(15,3) | YES |  | NULL |  |  |
| pt4_id | varchar(200) | YES |  | NULL |  |  |
| sum_invoice_money | double(15,3) | YES |  | NULL |  |  |
| left_invoice_money | double(15,3) | YES |  | NULL |  |  |
| rvp_consider_id | int(11) | YES |  | NULL |  |  |
| application_no | int(11) | YES |  | NULL |  |  |
| approve_money | double(15,3) | YES |  | NULL |  |  |
| rvp_consider_list | varchar(200) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | rvp_invoice_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "rvp_invoice_id": 1,
    "invoice_datetime": null,
    "vn": "551228103110",
    "invoice_status": null,
    "sum_price": null,
    "pt4_id": null,
    "sum_invoice_money": null,
    "left_invoice_money": null,
    "rvp_consider_id": null,
    "application_no": null,
    "approve_money": null,
    "rvp_consider_list": null,
    "hos_guid": null
  },
  {
    "rvp_invoice_id": 2,
    "invoice_datetime": null,
    "vn": "560123090016",
    "invoice_status": null,
    "sum_price": null,
    "pt4_id": null,
    "sum_invoice_money": null,
    "left_invoice_money": null,
    "rvp_consider_id": null,
    "application_no": null,
    "approve_money": null,
    "rvp_consider_list": null,
    "hos_guid": null
  },
  {
    "rvp_invoice_id": 3,
    "invoice_datetime": null,
    "vn": "560208130032",
    "invoice_status": null,
    "sum_price": null,
    "pt4_id": null,
    "sum_invoice_money": null,
    "left_invoice_money": null,
    "rvp_consider_id": null,
    "application_no": null,
    "approve_money": null,
    "rvp_consider_list": null,
    "hos_guid": null
  },
  {
    "rvp_invoice_id": 4,
    "invoice_datetime": null,
    "vn": "560129080922",
    "invoice_status": null,
    "sum_price": null,
    "pt4_id": null,
    "sum_invoice_money": null,
    "left_invoice_money": null,
    "rvp_consider_id": null,
    "application_no": null,
    "approve_money": null,
    "rvp_consider_list": null,
    "hos_guid": null
  },
  {
    "rvp_invoice_id": 5,
    "invoice_datetime": null,
    "vn": "560213113008",
    "invoice_status": null,
    "sum_price": null,
    "pt4_id": null,
    "sum_invoice_money": null,
    "left_invoice_money": null,
    "rvp_consider_id": null,
    "application_no": null,
    "approve_money": null,
    "rvp_consider_list": null,
    "hos_guid": null
  },
  {
    "rvp_invoice_id": 6,
    "invoice_datetime": null,
    "vn": "560218130008",
    "invoice_status": null,
    "sum_price": null,
    "pt4_id": null,
    "sum_invoice_money": null,
    "left_invoice_money": null,
    "rvp_consider_id": null,
    "application_no": null,
    "approve_money": null,
    "rvp_consider_list": null,
    "hos_guid": null
  },
  {
    "rvp_invoice_id": 7,
    "invoice_datetime": null,
    "vn": "560226093004",
    "invoice_status": null,
    "sum_price": null,
    "pt4_id": null,
    "sum_invoice_money": null,
    "left_invoice_money": null,
    "rvp_consider_id": null,
    "application_no": null,
    "approve_money": null,
    "rvp_consider_list": null,
    "hos_guid": null
  },
  {
    "rvp_invoice_id": 8,
    "invoice_datetime": null,
    "vn": "560227113018",
    "invoice_status": null,
    "sum_price": null,
    "pt4_id": null,
    "sum_invoice_money": null,
    "left_invoice_money": null,
    "rvp_consider_id": null,
    "application_no": null,
    "approve_money": null,
    "rvp_consider_list": null,
    "hos_guid": null
  }
]
```
