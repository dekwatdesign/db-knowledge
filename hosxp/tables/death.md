# `death`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| death_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| cid | varchar(17) | YES |  | NULL |  |  |
| hcode | varchar(5) | YES |  | NULL |  |  |
| death_date | date | YES | MUL | NULL |  |  |
| death_diag_1 | varchar(6) | YES |  | NULL |  |  |
| death_diag_2 | varchar(6) | YES |  | NULL |  |  |
| death_diag_3 | varchar(6) | YES |  | NULL |  |  |
| death_diag_4 | varchar(6) | YES |  | NULL |  |  |
| death_diag_other | varchar(6) | YES |  | NULL |  |  |
| death_cause | varchar(6) | YES |  | NULL |  |  |
| death_place | char(1) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| last_pttype | char(2) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| nopreg | char(1) | YES |  | NULL |  |  |
| wpreg | int(11) | YES |  | NULL |  |  |
| odisease | varchar(7) | YES |  | NULL |  |  |
| death_time | time | YES |  | NULL |  |  |
| death_diag_date_1 | date | YES |  | NULL |  |  |
| death_diag_date_2 | date | YES |  | NULL |  |  |
| death_diag_date_3 | date | YES |  | NULL |  |  |
| death_diag_date_4 | date | YES |  | NULL |  |  |
| death_cause_text | varchar(250) | YES |  | NULL |  |  |
| death_cert_id | int(11) | YES |  | NULL |  |  |
| death_cert_date | date | YES |  | NULL |  |  |
| death_cert_doctor | varchar(7) | YES |  | NULL |  |  |
| death_source | int(11) | YES |  | NULL |  |  |
| death_number | varchar(25) | YES |  | NULL |  |  |
| newborn_death_cause_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| autopsy_perform | char(1) | YES |  | NULL |  |  |
| no_detail | char(1) | YES |  | NULL |  |  |
| death_hospcode | varchar(9) | YES |  | NULL |  |  |
| death_preg_42_day | char(1) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| doctor_dx_text | text | YES |  | NULL |  |  |
| death_diag_icd10 | varchar(6) | YES |  | NULL |  |  |
| ext_hospital_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_deathdate | death_date | no | 1 |
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | death_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
