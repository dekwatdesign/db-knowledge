# `tb_register`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tb_register_id | int(11) | NO | PRI | 0 |  |  |
| tb_register_number | varchar(9) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| tb_register_age | int(11) | YES |  | NULL |  |  |
| tb_register_start_date_treatment | date | YES |  | NULL |  |  |
| tb_register_number_center | varchar(9) | YES |  | NULL |  |  |
| tb_register_hospcode_near_home | varchar(9) | YES |  | NULL |  |  |
| tb_register_hospcode_near_home_note | varchar(255) | YES |  | NULL |  |  |
| tb_register_hospcode | varchar(9) | YES |  | NULL |  |  |
| tb_register_date | date | YES |  | NULL |  |  |
| tb_register_last_update | datetime | YES |  | NULL |  |  |
| tb_register_hospcode_receive_refer | varchar(9) | YES |  | NULL |  |  |
| tb_register_year_begin_sick | int(11) | YES |  | NULL |  |  |
| tb_discharge_type_id | int(11) | YES |  | NULL |  |  |
| tb_register_discharge_check | char(1) | YES |  | NULL |  |  |
| tb_register_discharge_date | date | YES |  | NULL |  |  |
| tb_register_doctor_treatment | varchar(6) | YES |  | NULL |  |  |
| tb_register_coodinator | varchar(9) | YES |  | NULL |  |  |
| tb_register_user_save | varchar(6) | YES |  | NULL |  |  |
| tb_register_history_receive_drug_tb | char(1) | YES |  | NULL |  |  |
| tb_register_history_receive_drug_tb_note | varchar(255) | YES |  | NULL |  |  |
| tb_register_history_beallergic | char(1) | YES |  | NULL |  |  |
| tb_register_history_beallergic_note | varchar(255) | YES |  | NULL |  |  |
| tb_register_history_disease_other_diabetes | char(1) | YES |  | NULL |  |  |
| tb_register_history_disease_other_hypertension | char(1) | YES |  | NULL |  |  |
| tb_register_history_disease_other_asthma | char(1) | YES |  | NULL |  |  |
| tb_register_history_disease_other_psychiatry | char(1) | YES |  | NULL |  |  |
| tb_register_history_disease_other_lowresistance | char(1) | YES |  | NULL |  |  |
| tb_register_history_disease_other_alcoholism | char(1) | YES |  | NULL |  |  |
| tb_register_history_disease_other_paralysis | char(1) | YES |  | NULL |  |  |
| tb_register_history_disease_other | char(1) | YES |  | NULL |  |  |
| tb_register_history_disease_other_note | varchar(255) | YES |  | NULL |  |  |
| tb_register_history_receive_drug_other | varchar(255) | YES |  | NULL |  |  |
| tb_register_history_touch_patient | char(1) | YES |  | NULL |  |  |
| tb_register_history_case_touch_patient_relation | varchar(50) | YES |  | NULL |  |  |
| tb_register_history_touch_patient_relation_other_note | varchar(150) | YES |  | NULL |  |  |
| tb_register_history_touch_patient_phase | int(11) | YES |  | NULL |  |  |
| tb_register_receive_recomment_tb_date | date | YES |  | NULL |  |  |
| tb_register_receive_recomment_hiv_date | date | YES |  | NULL |  |  |
| clinicmember_tb_patient_type_id | int(11) | YES |  | NULL |  |  |
| clinicmember_tb_type_other_id | int(11) | YES |  | NULL |  |  |
| tb_category_type_id | int(11) | YES |  | NULL |  |  |
| tb_type_id | int(11) | YES |  | NULL |  |  |
| tb_category_subtype_id | int(11) | YES |  | NULL |  |  |
| tb_register_result_sputum_chek | char(1) | YES |  | NULL |  |  |
| tb_register_result_sputum_date | date | YES |  | NULL |  |  |
| tb_result_sputum_id | int(11) | YES |  | NULL |  |  |
| clinic_member_status_id | int(11) | YES |  | NULL |  |  |
| tb_register_pregnant_check | char(1) | YES |  | NULL |  |  |
| tb_register_inmates_check | char(1) | YES |  | NULL |  |  |
| tb_cause_not_evaluated_id | int(11) | YES |  | NULL |  |  |
| tb_result_sputum_not_evaluated | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| online_tb_register_id | int(11) | YES |  | NULL |  |  |
| online_tb_register_check | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | tb_register_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
