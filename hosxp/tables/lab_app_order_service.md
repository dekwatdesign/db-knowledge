# `lab_app_order_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_app_order_service_id | int(11) | NO | PRI | 0 |  |  |
| lab_app_order_number | int(11) | YES | MUL | NULL |  |  |
| lab_order_type | varchar(15) | YES |  | NULL |  |  |
| lab_code | int(11) | YES |  | NULL |  |  |
| lab_name | varchar(250) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| ref_order_number | int(11) | YES |  | NULL |  |  |
| specimen_code | int(11) | YES |  | NULL |  |  |
| update_flag | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_lab_app_order_number | lab_app_order_number | no | 1 |
| PRIMARY | lab_app_order_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "lab_app_order_service_id": 3,
    "lab_app_order_number": 2,
    "lab_order_type": "PROFILE",
    "lab_code": 10,
    "lab_name": "Lipid profile (Cholesterol, HDL, chol,  LDL ,chol TG)",
    "price": 400.0,
    "icode": "3000098",
    "vn": "541014060002",
    "department": "OPD",
    "hos_guid": null,
    "opi_guid": null,
    "ref_order_number": null,
    "specimen_code": null,
    "update_flag": null
  },
  {
    "lab_app_order_service_id": 4,
    "lab_app_order_number": 2,
    "lab_order_type": "PROFILE",
    "lab_code": 7,
    "lab_name": "Renal function test ?",
    "price": 120.0,
    "icode": "",
    "vn": "541014060002",
    "department": "OPD",
    "hos_guid": null,
    "opi_guid": null,
    "ref_order_number": null,
    "specimen_code": null,
    "update_flag": null
  },
  {
    "lab_app_order_service_id": 5,
    "lab_app_order_number": 2,
    "lab_order_type": "PROFILE",
    "lab_code": 9,
    "lab_name": "Liver  Function Test ?",
    "price": 400.0,
    "icode": "",
    "vn": "541014060002",
    "department": "OPD",
    "hos_guid": null,
    "opi_guid": null,
    "ref_order_number": null,
    "specimen_code": null,
    "update_flag": null
  },
  {
    "lab_app_order_service_id": 13,
    "lab_app_order_number": 6,
    "lab_order_type": "ITEM",
    "lab_code": 40,
    "lab_name": "Valproic acid",
    "price": 400.0,
    "icode": "3000133",
    "vn": "541017181642",
    "department": "OPD",
    "hos_guid": null,
    "opi_guid": null,
    "ref_order_number": null,
    "specimen_code": null,
    "update_flag": null
  },
  {
    "lab_app_order_service_id": 14,
    "lab_app_order_number": 7,
    "lab_order_type": "ITEM",
    "lab_code": 40,
    "lab_name": "Valproic acid",
    "price": 400.0,
    "icode": "3000133",
    "vn": "541019090009",
    "department": "OPD",
    "hos_guid": null,
    "opi_guid": null,
    "ref_order_number": null,
    "specimen_code": null,
    "update_flag": null
  },
  {
    "lab_app_order_service_id": 15,
    "lab_app_order_number": 8,
    "lab_order_type": "ITEM",
    "lab_code": 40,
    "lab_name": "Valproic acid",
    "price": 400.0,
    "icode": "3000133",
    "vn": "541019100000",
    "department": "OPD",
    "hos_guid": null,
    "opi_guid": null,
    "ref_order_number": null,
    "specimen_code": null,
    "update_flag": null
  },
  {
    "lab_app_order_service_id": 16,
    "lab_app_order_number": 9,
    "lab_order_type": "PROFILE",
    "lab_code": 1,
    "lab_name": "CBC",
    "price": 100.0,
    "icode": "3000155",
    "vn": "541019100000",
    "department": "OPD",
    "hos_guid": null,
    "opi_guid": null,
    "ref_order_number": null,
    "specimen_code": null,
    "update_flag": null
  },
  {
    "lab_app_order_service_id": 17,
    "lab_app_order_number": 10,
    "lab_order_type": "ITEM",
    "lab_code": 40,
    "lab_name": "Valproic acid",
    "price": 400.0,
    "icode": "3000133",
    "vn": "541019100000",
    "department": "OPD",
    "hos_guid": null,
    "opi_guid": null,
    "ref_order_number": null,
    "specimen_code": null,
    "update_flag": null
  }
]
```
