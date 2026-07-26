# `village`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_id | int(11) | NO | PRI | 0 |  |  |
| address_id | char(6) | YES |  | NULL |  |  |
| village_moo | varchar(10) | YES |  | NULL |  |  |
| village_name | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| village_code | varchar(10) | YES | MUL | NULL |  |  |
| latitude | varchar(50) | YES |  | NULL |  |  |
| longitude | varchar(50) | YES |  | NULL |  |  |
| out_region | char(1) | YES |  | NULL |  |  |
| village_guid | varchar(38) | YES | MUL | NULL |  |  |
| doctor_code | varchar(9) | YES |  | NULL |  |  |
| stroke_color | int(11) | YES |  | NULL |  |  |
| fill_color | int(11) | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| out_region_date | date | YES |  | NULL |  |  |
| family_count | int(11) | YES |  | NULL |  |  |
| vaccinated_count | int(11) | YES |  | NULL |  |  |
| vaccinated_dose_1_count | int(11) | YES |  | NULL |  |  |
| vaccinated_dose_2_count | int(11) | YES |  | NULL |  |  |
| vaccinated_dose_3_count | int(11) | YES |  | NULL |  |  |
| vaccinated_dose_4_count | int(11) | YES |  | NULL |  |  |
| vaccinated_dose_5_count | int(11) | YES |  | NULL |  |  |
| person_count | int(11) | YES |  | NULL |  |  |
| person_male_count | int(11) | YES |  | NULL |  |  |
| person_female_count | int(11) | YES |  | NULL |  |  |
| person_age_lt_12_count | int(11) | YES |  | NULL |  |  |
| person_age_12_18_count | int(11) | YES |  | NULL |  |  |
| person_age_19_59_count | int(11) | YES |  | NULL |  |  |
| person_age_gte_60_count | int(11) | YES |  | NULL |  |  |
| person_age_lt_12_vcc_count | int(11) | YES |  | NULL |  |  |
| person_age_12_18_vcc_count | int(11) | YES |  | NULL |  |  |
| person_age_19_59_vcc_count | int(11) | YES |  | NULL |  |  |
| person_age_gte_60_vcc_count | int(11) | YES |  | NULL |  |  |
| house_count | int(11) | YES |  | NULL |  |  |
| person_death_count | int(11) | YES |  | NULL |  |  |
| village_moo_int | int(11) | YES |  | NULL |  |  |
| village_tambol_name | varchar(100) | YES |  | NULL |  |  |
| person_dm_count | int(11) | YES |  | NULL |  |  |
| person_ht_count | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_code | village_code | no | 1 |
| ix_village_guid | village_guid | no | 1 |
| PRIMARY | village_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "village_id": 1,
    "address_id": "110101",
    "village_moo": "0",
    "village_name": "หมู่บ้านในเขตรับผิดชอบ",
    "hos_guid": null,
    "village_code": "11010100",
    "latitude": null,
    "longitude": null,
    "out_region": null,
    "village_guid": null,
    "doctor_code": "187",
    "stroke_color": null,
    "fill_color": null,
    "entry_datetime": "2014-12-29 10:31:05",
    "out_region_date": null,
    "family_count": 1,
    "vaccinated_count": 0,
    "vaccinated_dose_1_count": 0,
    "vaccinated_dose_2_count": 0,
    "vaccinated_dose_3_count": 0,
    "vaccinated_dose_4_count": 0,
    "vaccinated_dose_5_count": 0,
    "person_count": 0,
    "person_male_count": 0,
    "person_female_count": 0,
    "person_age_lt_12_count": null,
    "person_age_12_18_count": null,
    "person_age_19_59_count": null,
    "person_age_gte_60_count": null,
    "person_age_lt_12_vcc_count": null,
    "person_age_12_18_vcc_count": null,
    "person_age_19_59_vcc_count": null,
    "person_age_gte_60_vcc_count": null,
    "house_count": null,
    "person_death_count": null,
    "village_moo_int": null,
    "village_tambol_name": null,
    "person_dm_count": null,
    "person_ht_count": null
  }
]
```
