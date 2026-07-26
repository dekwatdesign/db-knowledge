# `bedno`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bedno | varchar(6) | NO | PRI |  |  |  |
| bedtype | char(2) | YES |  | NULL |  |  |
| roomno | varchar(4) | YES |  | NULL |  |  |
| serialno | int(7) | YES |  | NULL |  |  |
| room_state | int(11) | YES |  | NULL |  |  |
| room_charge_icode | varchar(7) | YES |  | NULL |  |  |
| food_charge_icode | varchar(7) | YES |  | NULL |  |  |
| room_charge_price | double(15,3) | YES |  | NULL |  |  |
| food_charge_price | double(15,3) | YES |  | NULL |  |  |
| nurse_charge_icode | varchar(7) | YES |  | NULL |  |  |
| nurse_charge_price | double(15,3) | YES |  | NULL |  |  |
| charge_icode_1 | varchar(7) | YES |  | NULL |  |  |
| charge_price_1 | double(15,3) | YES |  | NULL |  |  |
| bed_status_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| bed_lock | char(1) | YES |  | NULL |  |  |
| export_code | varchar(20) | YES |  | NULL |  |  |
| monitor_ip1 | varchar(50) | YES |  | NULL |  |  |
| bed_order | int(11) | YES |  | NULL |  |  |
| bedname | varchar(60) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | bedno | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "bedno": "C001",
    "bedtype": "00",
    "roomno": "701",
    "serialno": null,
    "room_state": null,
    "room_charge_icode": "",
    "food_charge_icode": "",
    "room_charge_price": null,
    "food_charge_price": null,
    "nurse_charge_icode": "",
    "nurse_charge_price": null,
    "charge_icode_1": "",
    "charge_price_1": null,
    "bed_status_type_id": null,
    "hos_guid": "",
    "bed_lock": "",
    "export_code": "",
    "monitor_ip1": "",
    "bed_order": null,
    "bedname": ""
  },
  {
    "bedno": "C002",
    "bedtype": "00",
    "roomno": "701",
    "serialno": null,
    "room_state": null,
    "room_charge_icode": "",
    "food_charge_icode": "",
    "room_charge_price": null,
    "food_charge_price": null,
    "nurse_charge_icode": "",
    "nurse_charge_price": null,
    "charge_icode_1": "",
    "charge_price_1": null,
    "bed_status_type_id": null,
    "hos_guid": "",
    "bed_lock": "",
    "export_code": "",
    "monitor_ip1": "",
    "bed_order": null,
    "bedname": ""
  },
  {
    "bedno": "C003",
    "bedtype": "00",
    "roomno": "701",
    "serialno": null,
    "room_state": null,
    "room_charge_icode": "",
    "food_charge_icode": "",
    "room_charge_price": null,
    "food_charge_price": null,
    "nurse_charge_icode": "",
    "nurse_charge_price": null,
    "charge_icode_1": "",
    "charge_price_1": null,
    "bed_status_type_id": null,
    "hos_guid": "",
    "bed_lock": "",
    "export_code": "",
    "monitor_ip1": "",
    "bed_order": null,
    "bedname": ""
  },
  {
    "bedno": "C004",
    "bedtype": "00",
    "roomno": "701",
    "serialno": null,
    "room_state": null,
    "room_charge_icode": "",
    "food_charge_icode": "",
    "room_charge_price": null,
    "food_charge_price": null,
    "nurse_charge_icode": "",
    "nurse_charge_price": null,
    "charge_icode_1": "",
    "charge_price_1": null,
    "bed_status_type_id": null,
    "hos_guid": "",
    "bed_lock": "",
    "export_code": "",
    "monitor_ip1": "",
    "bed_order": null,
    "bedname": ""
  },
  {
    "bedno": "C005",
    "bedtype": "00",
    "roomno": "701",
    "serialno": null,
    "room_state": null,
    "room_charge_icode": "",
    "food_charge_icode": "",
    "room_charge_price": null,
    "food_charge_price": null,
    "nurse_charge_icode": "",
    "nurse_charge_price": null,
    "charge_icode_1": "",
    "charge_price_1": null,
    "bed_status_type_id": null,
    "hos_guid": "",
    "bed_lock": "",
    "export_code": "",
    "monitor_ip1": "",
    "bed_order": null,
    "bedname": ""
  },
  {
    "bedno": "C006",
    "bedtype": "00",
    "roomno": "701",
    "serialno": null,
    "room_state": null,
    "room_charge_icode": "",
    "food_charge_icode": "",
    "room_charge_price": null,
    "food_charge_price": null,
    "nurse_charge_icode": "",
    "nurse_charge_price": null,
    "charge_icode_1": "",
    "charge_price_1": null,
    "bed_status_type_id": null,
    "hos_guid": "",
    "bed_lock": "",
    "export_code": "",
    "monitor_ip1": "",
    "bed_order": null,
    "bedname": ""
  },
  {
    "bedno": "C007",
    "bedtype": "00",
    "roomno": "701",
    "serialno": null,
    "room_state": null,
    "room_charge_icode": "",
    "food_charge_icode": "",
    "room_charge_price": null,
    "food_charge_price": null,
    "nurse_charge_icode": "",
    "nurse_charge_price": null,
    "charge_icode_1": "",
    "charge_price_1": null,
    "bed_status_type_id": null,
    "hos_guid": "",
    "bed_lock": "",
    "export_code": "",
    "monitor_ip1": "",
    "bed_order": null,
    "bedname": ""
  },
  {
    "bedno": "C008",
    "bedtype": "00",
    "roomno": "701",
    "serialno": null,
    "room_state": null,
    "room_charge_icode": "",
    "food_charge_icode": "",
    "room_charge_price": null,
    "food_charge_price": null,
    "nurse_charge_icode": "",
    "nurse_charge_price": null,
    "charge_icode_1": "",
    "charge_price_1": null,
    "bed_status_type_id": null,
    "hos_guid": "",
    "bed_lock": "",
    "export_code": "",
    "monitor_ip1": "",
    "bed_order": null,
    "bedname": ""
  }
]
```
