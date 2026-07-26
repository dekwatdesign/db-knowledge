# `sti_patient_register`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sti_patient_register_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| sti_patient_type_id | int(11) | YES |  | NULL |  |  |
| sti_patient_msm_type_id | int(11) | YES |  | NULL |  |  |
| sti_patient_hostess_type_id | int(11) | YES |  | NULL |  |  |
| sti_transfer | char(1) | YES |  | NULL |  |  |
| sti_transfer_uic_code | varchar(25) | YES |  | NULL |  |  |
| sti_patient_register_date | date | YES | MUL | NULL |  |  |
| sti_patient_register_time | time | YES |  | NULL |  |  |
| sti_patient_register_update_datetime | datetime | YES |  | NULL |  |  |
| sti_patient_register_doctor_code | varchar(10) | YES |  | NULL |  |  |
| sti_occupation_type_id | int(11) | YES |  | NULL |  |  |
| sti_patient_register_disease_list_text | text | YES |  | NULL |  |  |
| sti_patient_register_cause_list_text | text | YES |  | NULL |  |  |
| sti_patient_register_risk_list_text | text | YES |  | NULL |  |  |
| sti_patient_register_status_type_id | int(11) | YES |  | NULL |  |  |
| sti_patient_address | varchar(250) | YES |  | NULL |  |  |
| sti_patient_transfer_organization_name | varchar(100) | YES |  | NULL |  |  |
| educate_prevention | char(1) | YES |  | NULL |  |  |
| sti_counseling | char(1) | YES |  | NULL |  |  |
| sti_source_sex_type_id | int(11) | YES |  | NULL |  |  |
| sti_source_partner_type_id | int(11) | YES |  | NULL |  |  |
| sti_patient_vct_counseling_type_id | int(11) | YES |  | NULL |  |  |
| sti_patient_vct_counseling_department_name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_sti_patient_register_date | sti_patient_register_date | no | 1 |
| PRIMARY | sti_patient_register_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
