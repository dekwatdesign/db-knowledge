# `xray_items`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_items_code | int(11) | NO | PRI | 0 |  |  |
| xray_items_name | varchar(250) | YES | MUL | NULL |  |  |
| xray_type_code | tinyint(4) | YES |  | NULL |  |  |
| service_price | double(15,3) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| group_order | char(1) | YES |  | NULL |  |  |
| ultrasound_item | char(1) | YES |  | NULL |  |  |
| service_price2 | double(15,3) | YES |  | NULL |  |  |
| service_price3 | double(15,3) | YES |  | NULL |  |  |
| service_price_ipd | double(15,3) | YES |  | NULL |  |  |
| service_price_ipd2 | double(15,3) | YES |  | NULL |  |  |
| service_price_ipd3 | double(15,3) | YES |  | NULL |  |  |
| dental_item | char(1) | YES |  | NULL |  |  |
| fixed_price | char(1) | YES |  | NULL |  |  |
| xray_items_group | int(11) | YES |  | NULL |  |  |
| doctor_fee | double(15,3) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| icd9 | varchar(10) | YES |  | NULL |  |  |
| loinc_code | varchar(15) | YES |  | NULL |  |  |
| oldcode | varchar(150) | YES |  | NULL |  |  |
| xray_items_service_type_id | int(11) | YES |  | NULL |  |  |
| charge_when_order | char(1) | YES |  | NULL |  |  |
| use_film_price | char(1) | YES |  | NULL |  |  |
| charge_when_visit | char(1) | YES |  | NULL |  |  |
| charge_when_xray | char(1) | YES |  | NULL |  |  |
| search_keyword | varchar(200) | YES | MUL | NULL |  |  |
| xray_ai_type_id | int(11) | YES | MUL | NULL |  |  |
| exposure_qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_code_ai_type | xray_ai_type_id | no | 1 |
| ix_code_ai_type | xray_items_code | no | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_keyword | search_keyword | no | 1 |
| PRIMARY | xray_items_code | yes | 1 |
| xray_items_name | xray_items_name | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "xray_items_code": 2,
    "xray_items_name": "Film Ankle",
    "xray_type_code": 1,
    "service_price": 80.0,
    "icode": "",
    "group_order": null,
    "ultrasound_item": null,
    "service_price2": null,
    "service_price3": null,
    "service_price_ipd": null,
    "service_price_ipd2": null,
    "service_price_ipd3": null,
    "dental_item": null,
    "fixed_price": null,
    "xray_items_group": null,
    "doctor_fee": null,
    "active_status": null,
    "hos_guid": null,
    "icd9": null,
    "loinc_code": null,
    "oldcode": null,
    "xray_items_service_type_id": null,
    "charge_when_order": null,
    "use_film_price": null,
    "charge_when_visit": null,
    "charge_when_xray": null,
    "search_keyword": null,
    "xray_ai_type_id": null,
    "exposure_qty": null
  },
  {
    "xray_items_code": 3,
    "xray_items_name": "Film Abdomen [upright]",
    "xray_type_code": 1,
    "service_price": 120.0,
    "icode": null,
    "group_order": null,
    "ultrasound_item": null,
    "service_price2": null,
    "service_price3": null,
    "service_price_ipd": null,
    "service_price_ipd2": null,
    "service_price_ipd3": null,
    "dental_item": null,
    "fixed_price": null,
    "xray_items_group": null,
    "doctor_fee": null,
    "active_status": null,
    "hos_guid": null,
    "icd9": null,
    "loinc_code": null,
    "oldcode": null,
    "xray_items_service_type_id": null,
    "charge_when_order": null,
    "use_film_price": null,
    "charge_when_visit": null,
    "charge_when_xray": null,
    "search_keyword": null,
    "xray_ai_type_id": null,
    "exposure_qty": null
  },
  {
    "xray_items_code": 4,
    "xray_items_name": "Film Abdomen {supine}",
    "xray_type_code": 1,
    "service_price": 120.0,
    "icode": null,
    "group_order": null,
    "ultrasound_item": null,
    "service_price2": null,
    "service_price3": null,
    "service_price_ipd": null,
    "service_price_ipd2": null,
    "service_price_ipd3": null,
    "dental_item": null,
    "fixed_price": null,
    "xray_items_group": null,
    "doctor_fee": null,
    "active_status": null,
    "hos_guid": null,
    "icd9": null,
    "loinc_code": null,
    "oldcode": null,
    "xray_items_service_type_id": null,
    "charge_when_order": null,
    "use_film_price": null,
    "charge_when_visit": null,
    "charge_when_xray": null,
    "search_keyword": null,
    "xray_ai_type_id": null,
    "exposure_qty": null
  },
  {
    "xray_items_code": 5,
    "xray_items_name": "Film Base of Skull",
    "xray_type_code": 1,
    "service_price": 80.0,
    "icode": null,
    "group_order": null,
    "ultrasound_item": null,
    "service_price2": null,
    "service_price3": null,
    "service_price_ipd": null,
    "service_price_ipd2": null,
    "service_price_ipd3": null,
    "dental_item": null,
    "fixed_price": null,
    "xray_items_group": null,
    "doctor_fee": null,
    "active_status": null,
    "hos_guid": null,
    "icd9": null,
    "loinc_code": null,
    "oldcode": null,
    "xray_items_service_type_id": null,
    "charge_when_order": null,
    "use_film_price": null,
    "charge_when_visit": null,
    "charge_when_xray": null,
    "search_keyword": null,
    "xray_ai_type_id": null,
    "exposure_qty": null
  },
  {
    "xray_items_code": 6,
    "xray_items_name": "Film Cervical Spine",
    "xray_type_code": 1,
    "service_price": 180.0,
    "icode": null,
    "group_order": null,
    "ultrasound_item": null,
    "service_price2": null,
    "service_price3": null,
    "service_price_ipd": null,
    "service_price_ipd2": null,
    "service_price_ipd3": null,
    "dental_item": null,
    "fixed_price": null,
    "xray_items_group": null,
    "doctor_fee": null,
    "active_status": null,
    "hos_guid": null,
    "icd9": null,
    "loinc_code": null,
    "oldcode": null,
    "xray_items_service_type_id": null,
    "charge_when_order": null,
    "use_film_price": null,
    "charge_when_visit": null,
    "charge_when_xray": null,
    "search_keyword": null,
    "xray_ai_type_id": null,
    "exposure_qty": null
  },
  {
    "xray_items_code": 7,
    "xray_items_name": "Film Chest (Lat)",
    "xray_type_code": 1,
    "service_price": 100.0,
    "icode": null,
    "group_order": null,
    "ultrasound_item": null,
    "service_price2": null,
    "service_price3": null,
    "service_price_ipd": null,
    "service_price_ipd2": null,
    "service_price_ipd3": null,
    "dental_item": null,
    "fixed_price": null,
    "xray_items_group": null,
    "doctor_fee": null,
    "active_status": null,
    "hos_guid": null,
    "icd9": null,
    "loinc_code": null,
    "oldcode": null,
    "xray_items_service_type_id": null,
    "charge_when_order": null,
    "use_film_price": null,
    "charge_when_visit": null,
    "charge_when_xray": null,
    "search_keyword": null,
    "xray_ai_type_id": null,
    "exposure_qty": null
  },
  {
    "xray_items_code": 8,
    "xray_items_name": "Film Chest Lt.-Latteraldecubitus",
    "xray_type_code": 1,
    "service_price": 100.0,
    "icode": null,
    "group_order": null,
    "ultrasound_item": null,
    "service_price2": null,
    "service_price3": null,
    "service_price_ipd": null,
    "service_price_ipd2": null,
    "service_price_ipd3": null,
    "dental_item": null,
    "fixed_price": null,
    "xray_items_group": null,
    "doctor_fee": null,
    "active_status": null,
    "hos_guid": null,
    "icd9": null,
    "loinc_code": null,
    "oldcode": null,
    "xray_items_service_type_id": null,
    "charge_when_order": null,
    "use_film_price": null,
    "charge_when_visit": null,
    "charge_when_xray": null,
    "search_keyword": null,
    "xray_ai_type_id": null,
    "exposure_qty": null
  },
  {
    "xray_items_code": 9,
    "xray_items_name": "Film Chest Rt.Latteraldecubitus",
    "xray_type_code": 1,
    "service_price": 100.0,
    "icode": null,
    "group_order": null,
    "ultrasound_item": null,
    "service_price2": null,
    "service_price3": null,
    "service_price_ipd": null,
    "service_price_ipd2": null,
    "service_price_ipd3": null,
    "dental_item": null,
    "fixed_price": null,
    "xray_items_group": null,
    "doctor_fee": null,
    "active_status": null,
    "hos_guid": null,
    "icd9": null,
    "loinc_code": null,
    "oldcode": null,
    "xray_items_service_type_id": null,
    "charge_when_order": null,
    "use_film_price": null,
    "charge_when_visit": null,
    "charge_when_xray": null,
    "search_keyword": null,
    "xray_ai_type_id": null,
    "exposure_qty": null
  }
]
```
