# `person_covid_vaccination`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_covid_vaccination_id | int(11) | NO | PRI | 0 |  |  |
| person_id | int(11) | YES | UNI | NULL |  |  |
| vaccinated | char(1) | YES |  | NULL |  |  |
| vaccination_count | int(11) | YES |  | NULL |  |  |
| pcu_person_type_id | int(11) | YES |  | NULL |  |  |
| vaccinated_dose_1 | char(1) | YES |  | NULL |  |  |
| vaccinated_dose_2 | char(1) | YES |  | NULL |  |  |
| vaccinated_dose_3 | char(1) | YES |  | NULL |  |  |
| vaccinated_dose_4 | char(1) | YES |  | NULL |  |  |
| vaccinated_dose_5 | char(1) | YES |  | NULL |  |  |
| vcc_hospital_code_dose_1 | varchar(9) | YES |  | NULL |  |  |
| vcc_hospital_code_dose_2 | varchar(9) | YES |  | NULL |  |  |
| vcc_hospital_code_dose_3 | varchar(9) | YES |  | NULL |  |  |
| vcc_hospital_code_dose_4 | varchar(9) | YES |  | NULL |  |  |
| vcc_hospital_code_dose_5 | varchar(9) | YES |  | NULL |  |  |
| update_datetime | datetime | YES | MUL | NULL |  |  |
| vaccinated_dose_1_mf_id | int(11) | YES |  | NULL |  |  |
| vaccinated_dose_2_mf_id | int(11) | YES |  | NULL |  |  |
| vaccinated_dose_3_mf_id | int(11) | YES |  | NULL |  |  |
| vaccinated_dose_4_mf_id | int(11) | YES |  | NULL |  |  |
| vaccinated_dose_5_mf_id | int(11) | YES |  | NULL |  |  |
| vaccinated_dose_1_lotno | varchar(20) | YES |  | NULL |  |  |
| vaccinated_dose_2_lotno | varchar(20) | YES |  | NULL |  |  |
| vaccinated_dose_3_lotno | varchar(20) | YES |  | NULL |  |  |
| vaccinated_dose_4_lotno | varchar(20) | YES |  | NULL |  |  |
| vaccinated_dose_5_lotno | varchar(20) | YES |  | NULL |  |  |
| last_vaccination_date | date | YES |  | NULL |  |  |
| last_vaccination_date_int | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_person_id | person_id | yes | 1 |
| ix_update_datetime | update_datetime | no | 1 |
| PRIMARY | person_covid_vaccination_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
