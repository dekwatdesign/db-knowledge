# `wbc_vaccine`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| wbc_vaccine_id | int(11) | NO | PRI | 0 |  |  |
| wbc_vaccine_name | varchar(150) | YES | UNI | NULL |  |  |
| wbc_vaccine_code | varchar(20) | YES |  | NULL |  |  |
| age_min | int(11) | YES | MUL | NULL |  |  |
| age_max | int(11) | YES |  | NULL |  |  |
| export_vaccine_code | varchar(10) | YES | MUL | NULL |  |  |
| check_code | varchar(10) | YES |  | NULL |  |  |
| vaccine_in_use | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| icode | char(7) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| combine_vaccine | char(1) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_age_min | age_min | no | 1 |
| ix_export_vaccine_code | export_vaccine_code | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_wbc_vaccine_name | wbc_vaccine_name | yes | 1 |
| PRIMARY | wbc_vaccine_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "wbc_vaccine_id": 1,
    "wbc_vaccine_name": "ให้ BCG ต่ำกว่า 1 ปี",
    "wbc_vaccine_code": "BCG",
    "age_min": 0,
    "age_max": 1,
    "export_vaccine_code": "010",
    "check_code": "BCG",
    "vaccine_in_use": null,
    "hos_guid": null,
    "icode": null,
    "price": null,
    "combine_vaccine": "N",
    "active_status": "Y"
  },
  {
    "wbc_vaccine_id": 2,
    "wbc_vaccine_name": "ให้วัคซีน ตับอักเสบ บี เข็มที่ 1",
    "wbc_vaccine_code": "HBV1",
    "age_min": 0,
    "age_max": 1,
    "export_vaccine_code": "041",
    "check_code": "HBV1",
    "vaccine_in_use": null,
    "hos_guid": null,
    "icode": null,
    "price": null,
    "combine_vaccine": "N",
    "active_status": "Y"
  },
  {
    "wbc_vaccine_id": 3,
    "wbc_vaccine_name": "ให้วัคซีน ตับอักเสบ บี เข็มที่ 2",
    "wbc_vaccine_code": "HBV2",
    "age_min": 1,
    "age_max": 3,
    "export_vaccine_code": "042",
    "check_code": "HBV2",
    "vaccine_in_use": null,
    "hos_guid": null,
    "icode": null,
    "price": null,
    "combine_vaccine": "N",
    "active_status": "Y"
  },
  {
    "wbc_vaccine_id": 4,
    "wbc_vaccine_name": "ให้วัคซีน ตับอักเสบ บี เข็มที่ 3",
    "wbc_vaccine_code": "HBV3",
    "age_min": 4,
    "age_max": 6,
    "export_vaccine_code": "043",
    "check_code": "HBV3",
    "vaccine_in_use": null,
    "hos_guid": null,
    "icode": null,
    "price": null,
    "combine_vaccine": "N",
    "active_status": "Y"
  },
  {
    "wbc_vaccine_id": 5,
    "wbc_vaccine_name": "ให้วัคซีน DTP เข็มที่ 1",
    "wbc_vaccine_code": "DTP1",
    "age_min": 1,
    "age_max": 3,
    "export_vaccine_code": "031",
    "check_code": "DTP1",
    "vaccine_in_use": null,
    "hos_guid": null,
    "icode": null,
    "price": null,
    "combine_vaccine": "N",
    "active_status": "Y"
  },
  {
    "wbc_vaccine_id": 6,
    "wbc_vaccine_name": "ให้วัคซีน DTP เข็มที่ 2",
    "wbc_vaccine_code": "DTP2",
    "age_min": 3,
    "age_max": 4,
    "export_vaccine_code": "032",
    "check_code": "DTP2",
    "vaccine_in_use": null,
    "hos_guid": null,
    "icode": null,
    "price": null,
    "combine_vaccine": "N",
    "active_status": "Y"
  },
  {
    "wbc_vaccine_id": 7,
    "wbc_vaccine_name": "ให้วัคซีน DTP เข็มที่ 3",
    "wbc_vaccine_code": "DTP3",
    "age_min": 5,
    "age_max": 6,
    "export_vaccine_code": "033",
    "check_code": "DTP3",
    "vaccine_in_use": null,
    "hos_guid": null,
    "icode": null,
    "price": null,
    "combine_vaccine": "N",
    "active_status": "Y"
  },
  {
    "wbc_vaccine_id": 8,
    "wbc_vaccine_name": "ให้วัคซีน OPV ครั้งที่ 1",
    "wbc_vaccine_code": "OPV1",
    "age_min": 1,
    "age_max": 3,
    "export_vaccine_code": "081",
    "check_code": "OPV1",
    "vaccine_in_use": null,
    "hos_guid": null,
    "icode": null,
    "price": null,
    "combine_vaccine": "N",
    "active_status": "Y"
  }
]
```
