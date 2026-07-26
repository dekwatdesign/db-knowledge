# `blb_blood_items`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_blood_items_id | int(11) | NO | PRI | 0 |  |  |
| blb_blood_items_name | varchar(200) | YES |  | NULL |  |  |
| blb_blood_items_price | double(13,3) | YES |  | NULL |  |  |
| blb_blood_items_icode | char(7) | YES | MUL | NULL |  |  |
| blb_blood_items_charge_pay | char(1) | YES |  | NULL |  |  |
| blb_blood_items_code | varchar(3) | YES |  | NULL |  |  |
| blb_blood_items_nm | varchar(100) | YES |  | NULL |  |  |
| blb_blood_items_abx | varchar(5) | YES |  | NULL |  |  |
| blb_blood_items_gel | varchar(7) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| order_no | int(11) | YES |  | NULL |  |  |
| blb_blood_items_bag_cc | int(11) | YES |  | NULL |  |  |
| blb_blood_recieve_icode | char(7) | YES |  | NULL |  |  |
| blb_blood_crossmatch_icode | char(7) | YES |  | NULL |  |  |
| use_per_unit | char(1) | YES |  | NULL |  |  |
| event_type | char(3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | blb_blood_items_icode | no | 1 |
| PRIMARY | blb_blood_items_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "blb_blood_items_id": 1,
    "blb_blood_items_name": "TUBE FOR REGION",
    "blb_blood_items_price": 240.0,
    "blb_blood_items_icode": null,
    "blb_blood_items_charge_pay": null,
    "blb_blood_items_code": null,
    "blb_blood_items_nm": null,
    "blb_blood_items_abx": null,
    "blb_blood_items_gel": null,
    "active_status": null,
    "order_no": null,
    "blb_blood_items_bag_cc": null,
    "blb_blood_recieve_icode": null,
    "blb_blood_crossmatch_icode": null,
    "use_per_unit": null,
    "event_type": null
  },
  {
    "blb_blood_items_id": 2,
    "blb_blood_items_name": "WHOLE BLOOD",
    "blb_blood_items_price": 1200.0,
    "blb_blood_items_icode": null,
    "blb_blood_items_charge_pay": null,
    "blb_blood_items_code": null,
    "blb_blood_items_nm": null,
    "blb_blood_items_abx": null,
    "blb_blood_items_gel": null,
    "active_status": null,
    "order_no": null,
    "blb_blood_items_bag_cc": null,
    "blb_blood_recieve_icode": null,
    "blb_blood_crossmatch_icode": null,
    "use_per_unit": null,
    "event_type": null
  },
  {
    "blb_blood_items_id": 3,
    "blb_blood_items_name": "PACKED RED CELLS",
    "blb_blood_items_price": null,
    "blb_blood_items_icode": null,
    "blb_blood_items_charge_pay": null,
    "blb_blood_items_code": null,
    "blb_blood_items_nm": null,
    "blb_blood_items_abx": null,
    "blb_blood_items_gel": null,
    "active_status": null,
    "order_no": null,
    "blb_blood_items_bag_cc": null,
    "blb_blood_recieve_icode": null,
    "blb_blood_crossmatch_icode": null,
    "use_per_unit": null,
    "event_type": null
  },
  {
    "blb_blood_items_id": 4,
    "blb_blood_items_name": "SINGLE DONOR RED CELL",
    "blb_blood_items_price": null,
    "blb_blood_items_icode": null,
    "blb_blood_items_charge_pay": null,
    "blb_blood_items_code": null,
    "blb_blood_items_nm": null,
    "blb_blood_items_abx": null,
    "blb_blood_items_gel": null,
    "active_status": null,
    "order_no": null,
    "blb_blood_items_bag_cc": null,
    "blb_blood_recieve_icode": null,
    "blb_blood_crossmatch_icode": null,
    "use_per_unit": null,
    "event_type": null
  },
  {
    "blb_blood_items_id": 5,
    "blb_blood_items_name": "PACKED RED CELLS (NAT)",
    "blb_blood_items_price": null,
    "blb_blood_items_icode": null,
    "blb_blood_items_charge_pay": null,
    "blb_blood_items_code": null,
    "blb_blood_items_nm": null,
    "blb_blood_items_abx": null,
    "blb_blood_items_gel": null,
    "active_status": null,
    "order_no": null,
    "blb_blood_items_bag_cc": null,
    "blb_blood_recieve_icode": null,
    "blb_blood_crossmatch_icode": null,
    "use_per_unit": null,
    "event_type": null
  },
  {
    "blb_blood_items_id": 6,
    "blb_blood_items_name": "LEUKOCYTES POOR RED CELL",
    "blb_blood_items_price": 150.0,
    "blb_blood_items_icode": null,
    "blb_blood_items_charge_pay": null,
    "blb_blood_items_code": null,
    "blb_blood_items_nm": null,
    "blb_blood_items_abx": null,
    "blb_blood_items_gel": null,
    "active_status": null,
    "order_no": null,
    "blb_blood_items_bag_cc": null,
    "blb_blood_recieve_icode": null,
    "blb_blood_crossmatch_icode": null,
    "use_per_unit": null,
    "event_type": null
  },
  {
    "blb_blood_items_id": 7,
    "blb_blood_items_name": "PLATELETS",
    "blb_blood_items_price": null,
    "blb_blood_items_icode": null,
    "blb_blood_items_charge_pay": null,
    "blb_blood_items_code": null,
    "blb_blood_items_nm": null,
    "blb_blood_items_abx": null,
    "blb_blood_items_gel": null,
    "active_status": null,
    "order_no": null,
    "blb_blood_items_bag_cc": null,
    "blb_blood_recieve_icode": null,
    "blb_blood_crossmatch_icode": null,
    "use_per_unit": null,
    "event_type": null
  },
  {
    "blb_blood_items_id": 8,
    "blb_blood_items_name": "SINGLE DONOR PLATELET",
    "blb_blood_items_price": null,
    "blb_blood_items_icode": null,
    "blb_blood_items_charge_pay": null,
    "blb_blood_items_code": null,
    "blb_blood_items_nm": null,
    "blb_blood_items_abx": null,
    "blb_blood_items_gel": null,
    "active_status": null,
    "order_no": null,
    "blb_blood_items_bag_cc": null,
    "blb_blood_recieve_icode": null,
    "blb_blood_crossmatch_icode": null,
    "use_per_unit": null,
    "event_type": null
  }
]
```
