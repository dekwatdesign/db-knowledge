# `epi_vaccine`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| epi_vaccine_id | int(11) | NO | PRI | 0 |  |  |
| epi_vaccine_name | varchar(150) | YES | UNI | NULL |  |  |
| vaccine_code | varchar(20) | YES | UNI | NULL |  |  |
| age_min | int(11) | YES | MUL | NULL |  |  |
| age_max | int(11) | YES |  | NULL |  |  |
| export_vaccine_code | varchar(10) | YES | MUL | NULL |  |  |
| vaccine_in_use | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| icode | char(7) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| combine_vaccine | char(1) | YES |  | NULL |  |  |
| check_code | varchar(10) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_age_min | age_min | no | 1 |
| ix_epi_vaccine_name | epi_vaccine_name | yes | 1 |
| ix_export_vaccine_code | export_vaccine_code | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_vaccine_code | vaccine_code | yes | 1 |
| PRIMARY | epi_vaccine_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "epi_vaccine_id": 1,
    "epi_vaccine_name": "DTP กระตุ้น เข็มที่ 1",
    "vaccine_code": "DTP4",
    "age_min": null,
    "age_max": null,
    "export_vaccine_code": "034",
    "vaccine_in_use": null,
    "hos_guid": null,
    "icode": null,
    "price": null,
    "combine_vaccine": "N",
    "check_code": "DTP4",
    "active_status": "Y"
  },
  {
    "epi_vaccine_id": 2,
    "epi_vaccine_name": "OPV กระตุ้น เข็มที่ 1",
    "vaccine_code": "OPV4",
    "age_min": null,
    "age_max": null,
    "export_vaccine_code": "084",
    "vaccine_in_use": null,
    "hos_guid": null,
    "icode": null,
    "price": null,
    "combine_vaccine": "N",
    "check_code": "OPV4",
    "active_status": "Y"
  },
  {
    "epi_vaccine_id": 3,
    "epi_vaccine_name": "JE เข็มที่ 1",
    "vaccine_code": "JE1",
    "age_min": null,
    "age_max": null,
    "export_vaccine_code": "051",
    "vaccine_in_use": null,
    "hos_guid": null,
    "icode": null,
    "price": null,
    "combine_vaccine": "N",
    "check_code": "JE1",
    "active_status": "Y"
  },
  {
    "epi_vaccine_id": 4,
    "epi_vaccine_name": "JE เข็มที่ 2",
    "vaccine_code": "JE2",
    "age_min": null,
    "age_max": null,
    "export_vaccine_code": "052",
    "vaccine_in_use": null,
    "hos_guid": null,
    "icode": null,
    "price": null,
    "combine_vaccine": "N",
    "check_code": "JE2",
    "active_status": "Y"
  },
  {
    "epi_vaccine_id": 5,
    "epi_vaccine_name": "JE เข็มที่ 3",
    "vaccine_code": "JE3",
    "age_min": null,
    "age_max": null,
    "export_vaccine_code": "053",
    "vaccine_in_use": null,
    "hos_guid": null,
    "icode": null,
    "price": null,
    "combine_vaccine": "N",
    "check_code": "JE3",
    "active_status": "Y"
  },
  {
    "epi_vaccine_id": 6,
    "epi_vaccine_name": "DTP กระตุ้น เข็มที่ 2",
    "vaccine_code": "DTP5",
    "age_min": null,
    "age_max": null,
    "export_vaccine_code": "035",
    "vaccine_in_use": null,
    "hos_guid": null,
    "icode": null,
    "price": null,
    "combine_vaccine": "N",
    "check_code": "DTP5",
    "active_status": "Y"
  },
  {
    "epi_vaccine_id": 7,
    "epi_vaccine_name": "OPV กระตุ้น เข็มที่ 2",
    "vaccine_code": "OPV5",
    "age_min": null,
    "age_max": null,
    "export_vaccine_code": "085",
    "vaccine_in_use": null,
    "hos_guid": null,
    "icode": null,
    "price": null,
    "combine_vaccine": "N",
    "check_code": "OPV5",
    "active_status": "Y"
  },
  {
    "epi_vaccine_id": 8,
    "epi_vaccine_name": "ไข้หวัดใหญ่",
    "vaccine_code": "Flu",
    "age_min": null,
    "age_max": null,
    "export_vaccine_code": "815",
    "vaccine_in_use": null,
    "hos_guid": null,
    "icode": null,
    "price": null,
    "combine_vaccine": "N",
    "check_code": "Flu",
    "active_status": "Y"
  }
]
```
