# `cancer_report`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_report_id | int(11) | NO | PRI | 0 |  |  |
| person_pname | varchar(50) | YES |  | NULL |  |  |
| person_fname | varchar(50) | YES |  | NULL |  |  |
| person_lname | varchar(50) | YES |  | NULL |  |  |
| perosn_cid | varchar(13) | YES |  | NULL |  |  |
| person_passport_no | varchar(25) | YES |  | NULL |  |  |
| person_birthdate | date | YES |  | NULL |  |  |
| cancer_sex_id | int(11) | YES |  | NULL |  |  |
| cancer_marital_status_id | int(11) | YES |  | NULL |  |  |
| cancer_nationality_id | int(11) | YES |  | NULL |  |  |
| cancer_citizenship_id | int(11) | YES |  | NULL |  |  |
| cancer_religion_id | int(11) | YES |  | NULL |  |  |
| person_regist_addr | varchar(50) | YES |  | NULL |  |  |
| person_regist_moo | varchar(10) | YES |  | NULL |  |  |
| person_regist_road | varchar(50) | YES |  | NULL |  |  |
| person_regist_chwpart | char(2) | YES |  | NULL |  |  |
| person_regist_amppart | char(2) | YES |  | NULL |  |  |
| person_regist_tmbpart | char(2) | YES |  | NULL |  |  |
| person_regist_phone | varchar(25) | YES |  | NULL |  |  |
| person_regist_po_code | varchar(5) | YES |  | NULL |  |  |
| person_regist_code | varchar(20) | YES |  | NULL |  |  |
| person_persist_addr | varchar(50) | YES |  | NULL |  |  |
| person_persist_moo | varchar(10) | YES |  | NULL |  |  |
| person_persist_road | varchar(50) | YES |  | NULL |  |  |
| person_persist_chwpart | char(2) | YES |  | NULL |  |  |
| person_persist_amppart | char(2) | YES |  | NULL |  |  |
| person_persist_tmbpart | char(2) | YES |  | NULL |  |  |
| person_persist_phone | varchar(25) | YES |  | NULL |  |  |
| person_persist_po_code | varchar(5) | YES |  | NULL |  |  |
| person_persist_code | varchar(20) | YES |  | NULL |  |  |
| hospital_name | varchar(50) | YES |  | NULL |  |  |
| hospital_code | varchar(9) | YES |  | NULL |  |  |
| hospital_hn | varchar(12) | YES |  | NULL |  |  |
| cancer_diag_date | date | YES |  | NULL |  |  |
| person_age_year | int(11) | YES |  | NULL |  |  |
| cancer_diagnosis_type_id | int(11) | YES |  | NULL |  |  |
| cancer_lab_name | varchar(50) | YES |  | NULL |  |  |
| cancer_lab_number | varchar(25) | YES |  | NULL |  |  |
| cancer_biopsy_date | date | YES |  | NULL |  |  |
| cancer_location | varchar(15) | YES |  | NULL |  |  |
| cancer_location_desc | varchar(250) | YES |  | NULL |  |  |
| cancer_laterality_id | int(11) | YES |  | NULL |  |  |
| cancer_lab_result | varchar(50) | YES |  | NULL |  |  |
| cancer_lab_result_desc | varchar(250) | YES |  | NULL |  |  |
| cancer_behaviour_id | int(11) | YES |  | NULL |  |  |
| cancer_grade_id | int(11) | YES |  | NULL |  |  |
| cancer_tnm_desc | varchar(250) | YES |  | NULL |  |  |
| cancer_stage1_id | int(11) | YES |  | NULL |  |  |
| cancer_stage2_id | int(11) | YES |  | NULL |  |  |
| cancer_extend_id | int(11) | YES |  | NULL |  |  |
| cancer_metastasis_id | int(11) | YES |  | NULL |  |  |
| person_last_contact_date | date | YES |  | NULL |  |  |
| cancer_person_live_status_id | int(11) | YES |  | NULL |  |  |
| person_death_date | date | YES |  | NULL |  |  |
| cancer_death_cause_id | int(11) | YES |  | NULL |  |  |
| cancer_death_cause_desc | varchar(250) | YES |  | NULL |  |  |
| person_refer_in_desc | varchar(250) | YES |  | NULL |  |  |
| person_refer_in_date | date | YES |  | NULL |  |  |
| person_refer_in_hn | varchar(12) | YES |  | NULL |  |  |
| person_refer_in_hospcode | varchar(9) | YES |  | NULL |  |  |
| person_refer_to_hospcode | varchar(9) | YES |  | NULL |  |  |
| person_refer_to_date | date | YES |  | NULL |  |  |
| person_refer_to_hn | varchar(12) | YES |  | NULL |  |  |
| person_refer_to_desc | varchar(12) | YES |  | NULL |  |  |
| cancer_report_date | date | YES | MUL | NULL |  |  |
| person_regist_addr_code | char(6) | YES |  | NULL |  |  |
| person_persist_addr_code | char(6) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cancer_report_date | cancer_report_date | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_report_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
