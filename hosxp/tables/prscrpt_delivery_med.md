# `prscrpt_delivery_med`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| prscrpt_delivery_med_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | UNI | NULL |  |  |
| prscrpt_delivery_med_home | char(1) | YES |  | NULL |  |  |
| prscrpt_delivery_med_datetime | datetime | YES |  | NULL |  |  |
| doctor_code | varchar(50) | YES |  | NULL |  |  |
| prscrpt_delivery_med_note | varchar(250) | YES |  | NULL |  |  |
| prscrpt_delivery_company_id | int(11) | YES |  | NULL |  |  |
| prscrpt_delivery_add_id | int(11) | YES |  | NULL |  |  |
| health_rider_register | char(1) | YES |  | NULL |  |  |
| health_rider_coverage_price | decimal(10,0) | YES |  | NULL |  |  |
| prscrpt_delivery_from_kiosk | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_prscrpt_delivery_med_vn_idx | vn | yes | 1 |
| PRIMARY | prscrpt_delivery_med_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "prscrpt_delivery_med_id": 1,
    "vn": "",
    "prscrpt_delivery_med_home": "Y",
    "prscrpt_delivery_med_datetime": "2024-07-05 13:18:14",
    "doctor_code": "187",
    "prscrpt_delivery_med_note": "",
    "prscrpt_delivery_company_id": null,
    "prscrpt_delivery_add_id": 0,
    "health_rider_register": null,
    "health_rider_coverage_price": null,
    "prscrpt_delivery_from_kiosk": null
  },
  {
    "prscrpt_delivery_med_id": 2,
    "vn": "670426140016",
    "prscrpt_delivery_med_home": "Y",
    "prscrpt_delivery_med_datetime": "2024-04-26 15:55:55",
    "doctor_code": "",
    "prscrpt_delivery_med_note": "Invalid mobile",
    "prscrpt_delivery_company_id": null,
    "prscrpt_delivery_add_id": 11,
    "health_rider_register": null,
    "health_rider_coverage_price": null,
    "prscrpt_delivery_from_kiosk": null
  },
  {
    "prscrpt_delivery_med_id": 3,
    "vn": "670426101830",
    "prscrpt_delivery_med_home": "Y",
    "prscrpt_delivery_med_datetime": "2024-04-26 16:01:29",
    "doctor_code": "361",
    "prscrpt_delivery_med_note": "",
    "prscrpt_delivery_company_id": null,
    "prscrpt_delivery_add_id": 12,
    "health_rider_register": null,
    "health_rider_coverage_price": null,
    "prscrpt_delivery_from_kiosk": null
  },
  {
    "prscrpt_delivery_med_id": 4,
    "vn": "670501090004",
    "prscrpt_delivery_med_home": "Y",
    "prscrpt_delivery_med_datetime": "2024-05-01 09:52:29",
    "doctor_code": "361",
    "prscrpt_delivery_med_note": "",
    "prscrpt_delivery_company_id": null,
    "prscrpt_delivery_add_id": 14,
    "health_rider_register": null,
    "health_rider_coverage_price": null,
    "prscrpt_delivery_from_kiosk": null
  },
  {
    "prscrpt_delivery_med_id": 5,
    "vn": "670501091613",
    "prscrpt_delivery_med_home": "Y",
    "prscrpt_delivery_med_datetime": "2024-05-01 10:04:26",
    "doctor_code": "361",
    "prscrpt_delivery_med_note": "Invalid mobile",
    "prscrpt_delivery_company_id": null,
    "prscrpt_delivery_add_id": 15,
    "health_rider_register": null,
    "health_rider_coverage_price": null,
    "prscrpt_delivery_from_kiosk": null
  },
  {
    "prscrpt_delivery_med_id": 6,
    "vn": "680220080053",
    "prscrpt_delivery_med_home": "Y",
    "prscrpt_delivery_med_datetime": "2025-02-20 08:40:12",
    "doctor_code": "361",
    "prscrpt_delivery_med_note": "",
    "prscrpt_delivery_company_id": null,
    "prscrpt_delivery_add_id": 24,
    "health_rider_register": "",
    "health_rider_coverage_price": "0",
    "prscrpt_delivery_from_kiosk": "N"
  },
  {
    "prscrpt_delivery_med_id": 7,
    "vn": "680220083024",
    "prscrpt_delivery_med_home": "Y",
    "prscrpt_delivery_med_datetime": "2025-02-20 09:59:04",
    "doctor_code": "",
    "prscrpt_delivery_med_note": "",
    "prscrpt_delivery_company_id": null,
    "prscrpt_delivery_add_id": 26,
    "health_rider_register": null,
    "health_rider_coverage_price": null,
    "prscrpt_delivery_from_kiosk": null
  },
  {
    "prscrpt_delivery_med_id": 8,
    "vn": "680225101000",
    "prscrpt_delivery_med_home": "Y",
    "prscrpt_delivery_med_datetime": "2025-02-25 14:36:07",
    "doctor_code": "331",
    "prscrpt_delivery_med_note": "",
    "prscrpt_delivery_company_id": null,
    "prscrpt_delivery_add_id": 27,
    "health_rider_register": null,
    "health_rider_coverage_price": null,
    "prscrpt_delivery_from_kiosk": null
  }
]
```
