# `lab_order_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_order_service_id | int(11) | NO | PRI | 0 |  |  |
| lab_order_number | int(11) | YES | MUL | NULL |  |  |
| lab_order_type | varchar(15) | YES |  | NULL |  |  |
| lab_code | int(11) | YES | MUL | NULL |  |  |
| lab_name | varchar(250) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| lab_order_service_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |
| ref_order_number | int(11) | YES | MUL | NULL |  |  |
| specimen_code | int(11) | YES |  | NULL |  |  |
| est_wait_minute | int(11) | YES |  | NULL |  |  |
| update_flag | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ix_lab_order_number | lab_order_number | no | 1 |
| ix_ix_opi_guid | opi_guid | no | 1 |
| ix_ix_vn | vn | no | 1 |
| ix_lab_order_service_guid | lab_order_service_guid | no | 1 |
| ix_order_type_code | lab_order_number | no | 1 |
| ix_order_type_code | lab_order_type | no | 2 |
| ix_order_type_code | lab_code | no | 3 |
| ix_order_type_code_index | lab_code | no | 1 |
| ix_order_type_code_index | lab_order_number | no | 2 |
| ix_order_type_code_index | lab_order_type | no | 3 |
| ix_ref_no | ref_order_number | no | 1 |
| PRIMARY | lab_order_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "lab_order_service_id": 4,
    "lab_order_number": 239,
    "lab_order_type": "PROFILE",
    "lab_code": 9,
    "lab_name": "Liver  Function Test ?",
    "price": 400.0,
    "opi_guid": null,
    "icode": "",
    "vn": "541010060109",
    "department": "OPD",
    "lab_order_service_guid": null,
    "hos_guid": null,
    "ref_order_number": null,
    "specimen_code": null,
    "est_wait_minute": null,
    "update_flag": null
  },
  {
    "lab_order_service_id": 5,
    "lab_order_number": 240,
    "lab_order_type": "PROFILE",
    "lab_code": 1,
    "lab_name": "CBC",
    "price": 100.0,
    "opi_guid": "{492BF132-0993-4726-8AC9-3E1E98BD5251}",
    "icode": "3000155",
    "vn": "541010060109",
    "department": "OPD",
    "lab_order_service_guid": null,
    "hos_guid": null,
    "ref_order_number": null,
    "specimen_code": null,
    "est_wait_minute": null,
    "update_flag": null
  },
  {
    "lab_order_service_id": 6,
    "lab_order_number": 240,
    "lab_order_type": "PROFILE",
    "lab_code": 2,
    "lab_name": "Coagulogram",
    "price": 200.0,
    "opi_guid": "{4A5181DF-6E7F-4EFD-AA7B-146F1E568663}",
    "icode": "3000168",
    "vn": "541010060109",
    "department": "OPD",
    "lab_order_service_guid": null,
    "hos_guid": null,
    "ref_order_number": null,
    "specimen_code": null,
    "est_wait_minute": null,
    "update_flag": null
  },
  {
    "lab_order_service_id": 7,
    "lab_order_number": 241,
    "lab_order_type": "ITEM",
    "lab_code": 40,
    "lab_name": "Valproic acid",
    "price": 400.0,
    "opi_guid": "{17B8F8E8-568E-4DE9-9B62-574F0DCF160A}",
    "icode": "3000133",
    "vn": "541010060109",
    "department": "OPD",
    "lab_order_service_guid": null,
    "hos_guid": null,
    "ref_order_number": null,
    "specimen_code": null,
    "est_wait_minute": null,
    "update_flag": null
  },
  {
    "lab_order_service_id": 8,
    "lab_order_number": 242,
    "lab_order_type": "ITEM",
    "lab_code": 40,
    "lab_name": "Valproic acid",
    "price": 400.0,
    "opi_guid": "{2C4A1764-65A2-42C6-80E2-183BFDE05738}",
    "icode": "3000133",
    "vn": "541012060005",
    "department": "OPD",
    "lab_order_service_guid": null,
    "hos_guid": null,
    "ref_order_number": null,
    "specimen_code": null,
    "est_wait_minute": null,
    "update_flag": null
  },
  {
    "lab_order_service_id": 9,
    "lab_order_number": 243,
    "lab_order_type": "PROFILE",
    "lab_code": 9,
    "lab_name": "Liver  Function Test ?",
    "price": 400.0,
    "opi_guid": null,
    "icode": "",
    "vn": "541012060005",
    "department": "OPD",
    "lab_order_service_guid": null,
    "hos_guid": null,
    "ref_order_number": null,
    "specimen_code": null,
    "est_wait_minute": null,
    "update_flag": null
  },
  {
    "lab_order_service_id": 10,
    "lab_order_number": 244,
    "lab_order_type": "ITEM",
    "lab_code": 40,
    "lab_name": "Valproic acid",
    "price": 400.0,
    "opi_guid": "{25D37D13-2A76-4576-9360-F219537775ED}",
    "icode": "3000133",
    "vn": "541012060033",
    "department": "OPD",
    "lab_order_service_guid": null,
    "hos_guid": null,
    "ref_order_number": null,
    "specimen_code": null,
    "est_wait_minute": null,
    "update_flag": null
  },
  {
    "lab_order_service_id": 11,
    "lab_order_number": 245,
    "lab_order_type": "PROFILE",
    "lab_code": 9,
    "lab_name": "Liver  Function Test ?",
    "price": 400.0,
    "opi_guid": null,
    "icode": "",
    "vn": "541012060033",
    "department": "OPD",
    "lab_order_service_guid": null,
    "hos_guid": null,
    "ref_order_number": null,
    "specimen_code": null,
    "est_wait_minute": null,
    "update_flag": null
  }
]
```
