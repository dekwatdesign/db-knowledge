# `hsk_summary_clinical_record`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | char(9) | NO | PRI |  |  |  |
| hn | char(9) | NO | PRI |  |  |  |
| nfname | varchar(200) | YES |  | NULL |  |  |
| cid | int(13) | YES |  | NULL |  |  |
| sex | varchar(5) | YES |  | NULL |  |  |
| age | int(3) | YES |  | NULL |  |  |
| ward_admit | varchar(100) | YES |  | NULL |  |  |
| ward_dischage | varchar(100) | YES |  | NULL |  |  |
| doctor_admit | varchar(100) | YES |  | NULL |  |  |
| address_no | varchar(5) | YES |  | NULL |  |  |
| address_moo | varchar(100) | YES |  | NULL |  |  |
| address_road | varchar(100) | YES |  | NULL |  |  |
| address_tum | varchar(100) | YES |  | NULL |  |  |
| address_amp | varchar(100) | YES |  | NULL |  |  |
| address_chw | varchar(100) | YES |  | NULL |  |  |
| address_postcode | char(5) | YES |  | NULL |  |  |
| address_no2 | varchar(5) | YES |  | NULL |  |  |
| address_moo2 | int(3) | YES |  | NULL |  |  |
| address_road2 | varchar(100) | YES |  | NULL |  |  |
| address_tum2 | varchar(100) | YES |  | NULL |  |  |
| address_amp2 | varchar(100) | YES |  | NULL |  |  |
| address_chw2 | varchar(100) | YES |  | NULL |  |  |
| address_postcode2 | char(5) | YES |  | NULL |  |  |
| address_other2 | varchar(200) | YES |  | NULL |  |  |
| tel_person | varchar(15) | YES |  | NULL |  |  |
| namef_relative1 | varchar(200) | YES |  | NULL |  |  |
| relative1 | varchar(50) | YES |  | NULL |  |  |
| relative1_tel | varchar(15) | YES |  | NULL |  |  |
| namef_relative2 | varchar(200) | YES |  | NULL |  |  |
| relative2 | varchar(50) | YES |  | NULL |  |  |
| relative2_tel | varchar(15) | YES |  | NULL |  |  |
| pttype | varchar(50) | YES |  | NULL |  |  |
| hospital_code | char(10) | YES |  | NULL |  |  |
| hospital_name | varchar(200) | YES |  | NULL |  |  |
| hospital_chw | varchar(50) | YES |  | NULL |  |  |
| hospital_refer | varchar(200) | YES |  | NULL |  |  |
| hospital_refer_code | char(10) | YES |  | NULL |  |  |
| hospital_refer_chw | varchar(50) | YES |  | NULL |  |  |
| regdate | date | YES |  | NULL |  |  |
| dchdate | date | YES |  | NULL |  |  |
| los | varchar(100) | YES |  | NULL |  |  |
| last_an | char(9) | YES |  | NULL |  |  |
| last_admit_count | int(3) | YES |  | NULL |  |  |
| last_regdate | date | YES |  | NULL |  |  |
| last_dchdate | date | YES |  | NULL |  |  |
| readmit_day | int(11) | YES |  | NULL |  |  |
| pdx | char(8) | YES |  | NULL |  |  |
| pdx1 | char(8) | YES |  | NULL |  |  |
| pdx2 | char(8) | YES |  | NULL |  |  |
| pdx3 | char(8) | YES |  | NULL |  |  |
| adr_drug | varchar(200) | YES |  | NULL |  |  |
| adr_problem | varchar(200) | YES |  | NULL |  |  |
| dch_status | varchar(100) | YES |  | NULL |  |  |
| dch_type | varchar(100) | YES |  | NULL |  |  |
| cc | text | YES |  | NULL |  |  |
| home_med | text | YES |  | NULL |  |  |
| progressnote_doctor_dch | text | YES |  | NULL |  |  |
| progressnote_nurse_dch | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | an | yes | 1 |
| PRIMARY | hn | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
