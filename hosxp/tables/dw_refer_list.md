# `dw_refer_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dw_refer_list_id | int(11) | NO | PRI | 0 |  |  |
| cid | char(13) | YES |  | NULL |  |  |
| pname | varchar(30) | YES |  | NULL |  |  |
| fname | varchar(50) | YES |  | NULL |  |  |
| lname | varchar(50) | YES |  | NULL |  |  |
| birthdate | date | YES |  | NULL |  |  |
| addrpart | varchar(50) | YES |  | NULL |  |  |
| moopart | varchar(10) | YES |  | NULL |  |  |
| tmbpart | char(2) | YES |  | NULL |  |  |
| amppart | char(2) | YES |  | NULL |  |  |
| chwpart | char(2) | YES |  | NULL |  |  |
| phone | varchar(100) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| age_y | int(11) | YES |  | NULL |  |  |
| refer_date | date | YES |  | NULL |  |  |
| app_date | date | YES |  | NULL |  |  |
| pttype_name | varchar(100) | YES |  | NULL |  |  |
| ipd_dep | char(1) | YES |  | NULL |  |  |
| ipd_admit_date | date | YES |  | NULL |  |  |
| ipd_discarge_date | date | YES |  | NULL |  |  |
| ipd_ward_name | varchar(100) | YES |  | NULL |  |  |
| ipd_doctor_name | varchar(100) | YES |  | NULL |  |  |
| disease_list | text | YES |  | NULL |  |  |
| social_problem_list | text | YES |  | NULL |  |  |
| medication_list | text | YES |  | NULL |  |  |
| non_medication_list | text | YES |  | NULL |  |  |
| symptom_summary | text | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| staff_name | varchar(100) | YES |  | NULL |  |  |
| send_to_dw | char(1) | YES |  | NULL |  |  |
| retrive_from_dw | char(1) | YES |  | NULL |  |  |
| refer_from_hospcode | varchar(9) | YES |  | NULL |  |  |
| refer_to_hospcode | varchar(9) | YES |  | NULL |  |  |
| patient_cds | longblob | YES |  | NULL |  |  |
| ovst_cds | longblob | YES |  | NULL |  |  |
| opdscreen_cds | longblob | YES |  | NULL |  |  |
| opitemrece_cds | longblob | YES |  | NULL |  |  |
| vn_stat_cds | longblob | YES |  | NULL |  |  |
| s_drugitems_cds | longblob | YES |  | NULL |  |  |
| spclty_cds | longblob | YES |  | NULL |  |  |
| doctor_cds | longblob | YES |  | NULL |  |  |
| kskdepartment_cds | longblob | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| home_visit | char(1) | YES |  | NULL |  |  |
| home_visit_date | date | YES |  | NULL |  |  |
| home_visit_staff_name | varchar(100) | YES |  | NULL |  |  |
| home_visit_physical_list | text | YES |  | NULL |  |  |
| home_visit_emotional_list | text | YES |  | NULL |  |  |
| home_visit_environment_list | text | YES |  | NULL |  |  |
| home_visit_advice_list | text | YES |  | NULL |  |  |
| home_visit_symptom_summary | text | YES |  | NULL |  |  |
| refer_pdx_icd10 | varchar(7) | YES |  | NULL |  |  |
| send_to_dw_datetime | datetime | YES |  | NULL |  |  |
| retrive_from_dw_datetime | datetime | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dw_refer_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
