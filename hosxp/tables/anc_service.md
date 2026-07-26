# `anc_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| anc_service_id | int(11) | NO | PRI | 0 |  |  |
| anc_service_name | varchar(250) | YES |  | NULL |  |  |
| anc_service_code | varchar(10) | YES | MUL | NULL |  |  |
| export_vaccine_code | varchar(10) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_anc_service_code | anc_service_code | no | 1 |
| ix_export_vaccine_code | export_vaccine_code | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | anc_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "anc_service_id": 1,
    "anc_service_name": "ฉีดวัคซีนบาดทะยักเข็มที่ 1",
    "anc_service_code": "TT1",
    "export_vaccine_code": "101",
    "icode": null,
    "price": null,
    "hos_guid": null
  },
  {
    "anc_service_id": 2,
    "anc_service_name": "ฉีดวัคซีนบาดทะยักเข็มที่ 2",
    "anc_service_code": "TT2",
    "export_vaccine_code": "102",
    "icode": null,
    "price": null,
    "hos_guid": null
  },
  {
    "anc_service_id": 3,
    "anc_service_name": "ฉีดวัคซีนบาดทะยักเข็มที่ 3",
    "anc_service_code": "TT3",
    "export_vaccine_code": "103",
    "icode": null,
    "price": null,
    "hos_guid": null
  },
  {
    "anc_service_id": 4,
    "anc_service_name": "ฉีดวัคซีนบาดทะยักเข็มที่ 4",
    "anc_service_code": "TT4",
    "export_vaccine_code": "103",
    "icode": null,
    "price": null,
    "hos_guid": null
  }
]
```
