# `person_epi`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_epi_id | int(11) | NO | PRI | 0 |  |  |
| person_id | int(11) | YES | UNI | NULL |  |  |
| age_y | int(11) | YES |  | NULL |  |  |
| age_m | int(11) | YES |  | NULL |  |  |
| age_d | int(11) | YES |  | NULL |  |  |
| discharge | char(1) | YES | MUL | NULL |  |  |
| discharge_date | date | YES |  | NULL |  |  |
| vaccine_percent | int(11) | YES |  | NULL |  |  |
| out_region | char(1) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| person_epi_regdate | date | YES | MUL | NULL |  |  |
| person_epi_no | varchar(20) | YES |  | NULL |  |  |
| nutrition_level | int(11) | YES |  | NULL |  |  |
| height_level | int(11) | YES |  | NULL |  |  |
| bmi_level | int(11) | YES |  | NULL |  |  |
| vaccine_dtp4_date | date | YES |  | NULL |  |  |
| vaccine_opv4_date | date | YES |  | NULL |  |  |
| vaccine_je1_date | date | YES |  | NULL |  |  |
| vaccine_je2_date | date | YES |  | NULL |  |  |
| vaccine_je3_date | date | YES |  | NULL |  |  |
| vaccine_dtp5_date | date | YES |  | NULL |  |  |
| vaccine_opv5_date | date | YES |  | NULL |  |  |
| last_update | datetime | YES | MUL | NULL |  |  |
| vaccine_summary_list | varchar(150) | YES |  | NULL |  |  |
| vaccine_mmr2_date | date | YES |  | NULL |  |  |
| vaccine_je1_lived_date | date | YES |  | NULL |  |  |
| vaccine_je2_lived_date | date | YES |  | NULL |  |  |
| vaccine_ipv_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_discharge | discharge | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_last_update | last_update | no | 1 |
| ix_out_region | out_region | no | 1 |
| ix_person_epi_regdate | person_epi_regdate | no | 1 |
| ix_person_id | person_id | yes | 1 |
| PRIMARY | person_epi_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
