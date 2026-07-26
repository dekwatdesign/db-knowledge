# `house`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| house_id | int(11) | NO | PRI | 0 |  |  |
| village_id | int(11) | YES | MUL | NULL |  |  |
| address | varchar(150) | YES |  | NULL |  |  |
| road | varchar(100) | YES |  | NULL |  |  |
| census_id | varchar(20) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| location_area_id | int(11) | YES |  | NULL |  |  |
| latitude | varchar(100) | YES |  | NULL |  |  |
| longitude | varchar(100) | YES |  | NULL |  |  |
| family_count | int(11) | YES |  | NULL |  |  |
| last_update | datetime | YES | MUL | NULL |  |  |
| house_type_id | int(11) | YES |  | NULL |  |  |
| house_guid | varchar(38) | YES |  | NULL |  |  |
| village_guid | varchar(38) | YES | MUL | NULL |  |  |
| doctor_code | varchar(9) | YES |  | NULL |  |  |
| head_person_id | int(11) | YES |  | NULL |  |  |
| utm_lat | varchar(100) | YES |  | NULL |  |  |
| utm_long | varchar(100) | YES |  | NULL |  |  |
| house_social_survey_staff | varchar(50) | YES |  | NULL |  |  |
| house_subtype_id | int(11) | YES |  | NULL |  |  |
| house_condo_roomno | varchar(10) | YES |  | NULL |  |  |
| house_condo_name | varchar(50) | YES |  | NULL |  |  |
| house_housing_development_name | varchar(50) | YES |  | NULL |  |  |
| doctor_code2 | varchar(15) | YES |  | NULL |  |  |
| vms_person_id | int(11) | YES |  | NULL |  |  |
| person_count | int(11) | YES |  | NULL |  |  |
| address_int | int(11) | YES |  | NULL |  |  |
| address_int_2 | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_censue_id | census_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_last_update | last_update | no | 1 |
| ix_village_guid | village_guid | no | 1 |
| ix_village_id | village_id | no | 1 |
| PRIMARY | house_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "house_id": 1,
    "village_id": 1,
    "address": "61",
    "road": "สุขุทวิท",
    "census_id": "0",
    "hos_guid": null,
    "location_area_id": 1,
    "latitude": "13.614575",
    "longitude": "100.593629",
    "family_count": null,
    "last_update": "2022-12-15 15:07:23",
    "house_type_id": 1,
    "house_guid": null,
    "village_guid": null,
    "doctor_code": null,
    "head_person_id": null,
    "utm_lat": null,
    "utm_long": null,
    "house_social_survey_staff": null,
    "house_subtype_id": 8,
    "house_condo_roomno": null,
    "house_condo_name": null,
    "house_housing_development_name": null,
    "doctor_code2": null,
    "vms_person_id": null,
    "person_count": null,
    "address_int": null,
    "address_int_2": null
  }
]
```
